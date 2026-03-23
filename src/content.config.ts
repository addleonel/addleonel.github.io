import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/posts',
		generateId: ({ entry }) => entry.replace(/\.md$/, ''),
	}),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		cover: z.string().optional(),
		description: z.string(),
		locale: z.enum(['en', 'es']),
		slug: z.string(),
	}),
});

export const collections = { posts };
