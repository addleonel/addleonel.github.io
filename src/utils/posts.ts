import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'posts'>;

// Month names in English and Spanish mapped to their number (1-12).
const MONTHS: Record<string, number> = {
	january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
	july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
	enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
	julio: 7, agosto: 8, septiembre: 9, setiembre: 9, octubre: 10, noviembre: 11, diciembre: 12,
};

// Parse a display date string ("June 18, 2026" / "18 de Noviembre, 2023")
// into a sortable timestamp. Falls back to 0 when it can't be parsed.
export function parsePostDate(value: string): number {
	const lower = value.toLowerCase();
	const yearMatch = lower.match(/\d{4}/);
	const year = yearMatch ? Number(yearMatch[0]) : 0;

	let month = 1;
	for (const name in MONTHS) {
		if (lower.includes(name)) {
			month = MONTHS[name];
			break;
		}
	}

	const dayMatch = lower.replace(/\d{4}/, '').match(/\d{1,2}/);
	const day = dayMatch ? Number(dayMatch[0]) : 1;

	return new Date(year, month - 1, day).getTime();
}

// Return posts sorted from newest to oldest by their display date.
export function sortPostsByDate(posts: Post[]): Post[] {
	return [...posts].sort((a, b) => parsePostDate(b.data.date) - parsePostDate(a.data.date));
}
