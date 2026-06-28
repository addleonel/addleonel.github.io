import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { sortPostsByDate, parsePostDate } from '../utils/posts';

export async function GET(context: APIContext) {
	const posts = sortPostsByDate(
		await getCollection('posts', ({ data }) => data.locale === 'en'),
	);

	return rss({
		title: 'Leunel — Blog',
		description:
			'Articles and notes by Leunel Aquino on LLMs, RAG, agents, embeddings, transformers and software development.',
		site: context.site ?? 'https://www.leunel.com',
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: new Date(parsePostDate(post.data.date)),
			link: `/posts/${post.data.slug}/`,
		})),
		customData: '<language>en-us</language>',
	});
}
