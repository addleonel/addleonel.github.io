import { translations, type Locale } from './translations';

export type { Locale };

export function getLocaleFromPath(path: string): Locale {
	return path.startsWith('/es') ? 'es' : 'en';
}

export function t(locale: Locale) {
	return translations[locale];
}

export function localizedPath(path: string, locale: Locale): string {
	const clean = path.replace(/^\/(es)\//, '/').replace(/^\/(es)$/, '/');
	if (locale === 'en') return clean;
	if (clean === '/') return '/es/';
	return `/es${clean}`;
}

export function switchLocalePath(currentPath: string): string {
	if (currentPath.startsWith('/es')) {
		return currentPath.replace(/^\/es\/?/, '/') || '/';
	}
	return `/es${currentPath}`;
}
