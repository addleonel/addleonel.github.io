import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { sortPostsByDate, parsePostDate } from '../../utils/posts';

export async function GET(context: APIContext) {
	const posts = sortPostsByDate(
		await getCollection('posts', ({ data }) => data.locale === 'es'),
	);

	return rss({
		title: 'Leunel — Blog',
		description:
			'Artículos y notas de Leunel Aquino sobre LLMs, RAG, agentes, embeddings, transformers y desarrollo de software.',
		site: context.site ?? 'https://www.leunel.com',
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: new Date(parsePostDate(post.data.date)),
			link: `/es/posts/${post.data.slug}/`,
		})),
		customData: '<language>es-es</language>',
	});
}
