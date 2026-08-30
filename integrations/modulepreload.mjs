import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Astro emits the page's module scripts as plain <script type="module" src>, with
// no hint about what those scripts import. For the home page that means a
// two-step waterfall on first load: fetch the hero script, parse it, and only
// then discover the ~500 KB Three.js chunk it imports. This integration walks the
// emitted chunks after the build and injects a <link rel="modulepreload"> for
// every static dependency, so the browser can fetch them in parallel instead.

const MODULE_SCRIPT = /<script[^>]*\btype="module"[^>]*\bsrc="([^"]+)"/g;
// Rollup hoists static imports to the top of a chunk; both `from"./x.js"` and
// the side-effect-only `import"./x.js"` forms show up after minification.
const STATIC_IMPORT = /(?:\bfrom|\bimport)\s*["']([^"']+\.js)["']/g;

async function collectHtmlFiles(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map((entry) => {
			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) return collectHtmlFiles(full);
			return entry.isFile() && entry.name.endsWith('.html') ? [full] : [];
		})
	);
	return files.flat();
}

/**
 * Resolve the transitive static imports of `entry` (a site-root-absolute path
 * such as `/_astro/foo.js`). Only specifiers that resolve to a file actually
 * present in the build are kept, which filters out incidental string literals
 * the import regex may have picked up from minified code.
 */
async function resolveDependencies(entry, outDir, cache) {
	const found = new Set();
	const queue = [entry];
	const visited = new Set([entry]);

	while (queue.length > 0) {
		const current = queue.shift();
		const filePath = path.join(outDir, current);

		let code = cache.get(current);
		if (code === undefined) {
			try {
				code = await readFile(filePath, 'utf8');
			} catch {
				code = '';
			}
			cache.set(current, code);
		}
		if (code === '') continue;

		for (const match of code.matchAll(STATIC_IMPORT)) {
			const specifier = match[1];
			// Bare specifiers and absolute URLs are not emitted chunks.
			if (!specifier.startsWith('.') && !specifier.startsWith('/')) continue;
			const resolved = specifier.startsWith('/')
				? specifier
				: '/' + path.posix.normalize(path.posix.join(path.posix.dirname(current), specifier)).replace(/^\/+/, '');
			if (visited.has(resolved)) continue;
			visited.add(resolved);
			queue.push(resolved);
			found.add(resolved);
		}
	}

	return found;
}

export default function modulePreload() {
	return {
		name: 'leunel:modulepreload',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const outDir = fileURLToPath(dir);
				const htmlFiles = await collectHtmlFiles(outDir);
				const cache = new Map();
				let injected = 0;

				for (const file of htmlFiles) {
					const html = await readFile(file, 'utf8');
					const closingHead = html.indexOf('</head>');
					if (closingHead === -1) continue;

					const deps = new Set();
					for (const match of html.matchAll(MODULE_SCRIPT)) {
						const src = match[1];
						if (!src.startsWith('/')) continue;
						for (const dep of await resolveDependencies(src, outDir, cache)) {
							// Skip anything the page already preloads or loads directly.
							if (html.includes(`href="${dep}"`)) continue;
							deps.add(dep);
						}
					}
					if (deps.size === 0) continue;

					const links = [...deps]
						.map((dep) => `<link rel="modulepreload" href="${dep}">`)
						.join('');
					await writeFile(file, html.slice(0, closingHead) + links + html.slice(closingHead));
					injected += deps.size;
				}

				logger.info(`injected ${injected} modulepreload link(s)`);
			},
		},
	};
}
