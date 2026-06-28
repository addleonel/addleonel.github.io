// One-off generator: rasterizes public/favicon.svg into the PNG icon set used
// for search-result favicons, iOS home screen and Android/PWA installs.
// Run with: node scripts/generate-icons.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, '..', 'public');
const svg = join(pub, 'favicon.svg');

// Cream background matching manifest background_color so iOS/Android don't
// fill transparency with black.
const BG = { r: 245, g: 240, b: 232, alpha: 1 };

// Render the cube SVG onto a solid square. `padRatio` shrinks the glyph to
// leave a safe margin (used for the maskable icon).
async function icon(size, out, padRatio = 1) {
	const inner = Math.round(size * padRatio);
	const glyph = await sharp(svg, { density: 384 })
		.resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.png()
		.toBuffer();
	await sharp({ create: { width: size, height: size, channels: 4, background: BG } })
		.composite([{ input: glyph, gravity: 'center' }])
		.png()
		.toFile(join(pub, out));
	console.log('✓', out, `${size}×${size}`);
}

await icon(96, 'favicon-96.png');
await icon(180, 'apple-touch-icon.png');
await icon(192, 'icon-192.png');
await icon(512, 'icon-512.png');
await icon(512, 'icon-maskable-512.png', 0.7); // safe-zone padding for maskable
console.log('Done.');
