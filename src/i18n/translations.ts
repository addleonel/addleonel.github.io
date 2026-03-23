export const translations = {
	en: {
		nav: {
			home: 'Home',
			posts: 'Posts',
			about: 'About',
			contact: 'Contact',
		},
		home: {
			lastPosts: 'Last Publications',
			allPosts: 'All posts',
		},
		about: {
			title: 'About',
			bio: 'Hi, my name is Leunel, I am a software developer. LLMs, RAG, and Agents.',
		},
		posts: {
			title: 'All Publications',
			postedOn: 'Published On',
		},
		contact: {
			title: 'Contact',
			description: 'You can find me on:',
		},
	},
	es: {
		nav: {
			home: 'Inicio',
			posts: 'Posts',
			about: 'Acerca',
			contact: 'Contacto',
		},
		home: {
			lastPosts: 'Ultimas Publicaciones',
			allPosts: 'Todos los posts',
		},
		about: {
			title: 'Acerca de mi',
			bio: 'Hola, mi nombre es Leunel, soy desarrollador de software. LLMs, RAG, y Agentes.',
		},
		posts: {
			title: 'Todas las Publicaciones',
			postedOn: 'Publicado el',
		},
		contact: {
			title: 'Contacto',
			description: 'Puedes encontrarme en:',
		},
	},
} as const;

export type Locale = keyof typeof translations;
