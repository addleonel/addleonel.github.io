export const translations = {
	en: {
		nav: {
			home: 'Home',
			posts: 'Blog',
			projects: 'Projects',
			about: 'About',
			contact: 'Contact',
		},
		home: {
			lastPosts: 'Last Publications',
			allPosts: 'All posts',
			featuredProjects: 'Featured Projects',
			allProjects: 'All projects',
		},
		about: {
			title: 'About',
			bio: 'Hi, my name is Leunel, I am a software developer. LLMs, RAG, and Agents.',
		},
		posts: {
			title: 'All Publications',
			postedOn: 'Published On',
		},
		projects: {
			title: 'Projects',
			intro: 'A selection of things I have designed and built — AI agents, data tools, computer vision and web platforms.',
		},
		contact: {
			title: 'Contact',
			description: 'You can find me on:',
		},
	},
	es: {
		nav: {
			home: 'Inicio',
			posts: 'Blog',
			projects: 'Proyectos',
			about: 'Acerca',
			contact: 'Contacto',
		},
		home: {
			lastPosts: 'Ultimas Publicaciones',
			allPosts: 'Todos los posts',
			featuredProjects: 'Proyectos Destacados',
			allProjects: 'Todos los proyectos',
		},
		about: {
			title: 'Acerca de mi',
			bio: 'Hola, mi nombre es Leunel, soy desarrollador de software. LLMs, RAG, y Agentes.',
		},
		posts: {
			title: 'Todas las Publicaciones',
			postedOn: 'Publicado el',
		},
		projects: {
			title: 'Proyectos',
			intro: 'Una selección de cosas que he diseñado y construido — agentes de IA, herramientas de datos, visión por computadora y plataformas web.',
		},
		contact: {
			title: 'Contacto',
			description: 'Puedes encontrarme en:',
		},
	},
} as const;

export type Locale = keyof typeof translations;
