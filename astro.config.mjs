import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://www.leunel.com',
	output: 'static',
	integrations: [
		react(),
		sitemap({
			// Emit <xhtml:link hreflang> alternates for the EN (root) / ES (/es/) routes
			i18n: {
				defaultLocale: 'en',
				locales: { en: 'en-US', es: 'es-ES' },
			},
			// Keep the noindex 404 out of the sitemap
			filter: (page) => !page.includes('/404'),
			serialize(item) {
				item.changefreq = 'weekly';
				item.priority = item.url === 'https://www.leunel.com/' ? 1.0 : 0.7;
				item.lastmod = new Date().toISOString();
				return item;
			},
		}),
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			},
		},
	},
});
