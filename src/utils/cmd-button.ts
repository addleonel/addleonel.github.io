// "Command" buttons ([data-cmd]): a magnetic pull toward the cursor and a label
// that decodes from random glyphs on hover, like tokens resolving.

const GLYPHS = '01<>/{}[]#*+=_~';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

function decode(label: HTMLElement) {
	const text = label.dataset.text ?? label.textContent ?? '';
	label.dataset.text = text;
	// Freeze the width so the proportional glyphs don't make the button jitter
	label.style.width = `${label.getBoundingClientRect().width}px`;

	const start = performance.now();
	const duration = 420;
	const step = (now: number) => {
		const progress = Math.min(1, (now - start) / duration);
		const resolved = Math.floor(progress * text.length);
		let out = text.slice(0, resolved);
		for (let i = resolved; i < text.length; i++) {
			out += text[i] === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
		}
		label.textContent = out;
		if (progress < 1) {
			requestAnimationFrame(step);
		} else {
			label.textContent = text;
			label.style.width = '';
		}
	};
	requestAnimationFrame(step);
}

export function initCmdButtons(root: ParentNode = document) {
	root.querySelectorAll<HTMLElement>('[data-cmd]').forEach((el) => {
		if (el.dataset.cmdReady) return;
		el.dataset.cmdReady = 'true';
		const label = el.querySelector<HTMLElement>('.cmd__label');

		if (label && !reduceMotion) {
			el.addEventListener('mouseenter', () => decode(label));
			el.addEventListener('focus', () => decode(label));
		}

		if (finePointer && !reduceMotion) {
			el.addEventListener('pointermove', (e) => {
				const r = el.getBoundingClientRect();
				el.style.setProperty('--pull-x', `${(e.clientX - (r.left + r.width / 2)) * 0.22}px`);
				el.style.setProperty('--pull-y', `${(e.clientY - (r.top + r.height / 2)) * 0.32}px`);
			});
			el.addEventListener('pointerleave', () => {
				el.style.setProperty('--pull-x', '0px');
				el.style.setProperty('--pull-y', '0px');
			});
		}
	});
}
