import type { Locale } from '../i18n/utils';

export interface SkillGroup {
	label: string;
	items: string;
}

export interface ExperienceItem {
	role: string;
	meta: string;
	tags: string;
	points: string[];
}

export interface EducationItem {
	title: string;
	place: string;
	meta: string;
}

export interface LanguageItem {
	name: string;
	level: string;
}

export interface CertificationItem {
	title: string;
	place: string;
	year: string;
}

export interface ResumeContent {
	name: string;
	headline: string;
	location: string;
	sections: {
		profile: string;
		skills: string;
		experience: string;
		education: string;
		languages: string;
		certifications: string;
	};
	profile: string;
	skills: SkillGroup[];
	experience: ExperienceItem[];
	education: EducationItem[];
	languages: LanguageItem[];
	certifications: CertificationItem[];
}

export const resume: Record<Locale, ResumeContent> = {
	en: {
		name: 'Leunel Aquino Davila',
		headline: 'Software Developer · Industrial Engineering · Data Science & AI',
		location: 'Peru',
		sections: {
			profile: 'Professional Profile',
			skills: 'Technical Skills',
			experience: 'Experience',
			education: 'Education',
			languages: 'Languages',
			certifications: 'Certifications',
		},
		profile:
			'Software developer and Industrial Engineering student with experience in Data Science and Artificial Intelligence. I design and build RAG systems and intelligent agents. I have a solid foundation in web development and data science fundamentals, complemented by recent training in LLMs and Reinforcement Learning at the National University of Engineering (UNI).',
		skills: [
			{ label: 'Languages', items: 'Python, JavaScript, TypeScript, C/C++, SQL' },
			{ label: 'AI / Data', items: 'Machine Learning, Pandas, NumPy, Matplotlib, OpenAI/DeepSeek API, Jupyter, Power BI' },
			{ label: 'Generative AI / LLM', items: 'Transformers, RAG & Hybrid-RAG, embeddings, vector databases, fine-tuning, agents (LangChain, n8n), Ollama, context engineering' },
			{ label: 'Backend / Web', items: 'Django, Flask, Django REST, REST APIs, PostgreSQL, Astro, Next.js' },
			{ label: 'Frontend', items: 'React, JavaScript, HTML, CSS' },
			{ label: 'Tools', items: 'Git, GitHub, Linux, Arduino / IoT' },
			{ label: 'Other', items: 'Ethical hacking fundamentals, automation' },
		],
		experience: [
			{
				role: 'Software Developer — Freelance / Personal Projects',
				meta: 'Peru · 2021 – Present',
				tags: 'Python · Artificial Intelligence · Web Development',
				points: [
					'Design and development of Python applications, integrating AI models and computer vision.',
					'Built analytical dashboards that process sales data and generate automatic executive summaries using LLMs.',
					'Implemented automatic number plate recognition (ANPR) systems combining computer vision, OCR and Arduino integration.',
				],
			},
			{
				role: 'Participant in the Northern Region Innovation Hackathon',
				meta: 'Peru · 2023',
				tags: 'IoT · Immersive & Mobile Tech — University of Piura (UDEP)',
				points: [
					'Took part in a technological innovation challenge organized by the University of Piura (UDEP), developing solutions around IoT, immersive technologies and mobile development.',
				],
			},
		],
		education: [
			{
				title: 'Industrial Engineering',
				place: 'Universidad Nacional Hermilio Valdizan — Huanuco, Peru',
				meta: '2021 – Present (ongoing)',
			},
		],
		languages: [
			{ name: 'Spanish', level: 'Native' },
			{ name: 'English', level: 'Intermediate' },
		],
		certifications: [
			{ title: 'Introduction to Transformers, LLMs and Reinforcement Learning', place: 'National University of Engineering (UNI)', year: '2026' },
			{ title: 'Large Language Models (LLMs): Building an Intelligent Agent', place: 'National University of Engineering (UNI)', year: '2026' },
			{ title: 'Introduction to Business Intelligence with Power BI', place: 'MayuGo', year: '2025' },
			{ title: 'React.js Course', place: 'Platzi', year: '2024' },
			{ title: 'Frontend Developer', place: 'Platzi (JavaScript School)', year: '2021' },
			{ title: 'Practical JavaScript Course', place: 'Platzi', year: '2021' },
			{ title: 'Intermediate Python: Comprehensions, Lambdas and Error Handling', place: 'Platzi', year: '2021' },
			{ title: 'Business Analysis for Data Science', place: 'Platzi', year: '2021' },
			{ title: 'Legacy JavaScript Algorithms and Data Structures', place: 'freeCodeCamp', year: '2021' },
			{ title: 'Gamified Ethical Hacking', place: 'Academia Hacker Mentor', year: '2024' },
			{ title: 'Google: Practical AI for Marketing', place: 'Santander Open Academy', year: '2025' },
		],
	},
	es: {
		name: 'Leunel Aquino Davila',
		headline: 'Desarrollador de Software · Ingeniería Industrial · Ciencia de Datos & IA',
		location: 'Perú',
		sections: {
			profile: 'Perfil Profesional',
			skills: 'Habilidades Técnicas',
			experience: 'Experiencia',
			education: 'Educación',
			languages: 'Idiomas',
			certifications: 'Certificaciones',
		},
		profile:
			'Desarrollador de software y estudiante de Ingeniería Industrial con experiencia en Ciencia de Datos e Inteligencia Artificial. Diseño y construyo sistemas RAG y agentes inteligentes. Tengo una base sólida en desarrollo web y fundamentos de ciencia de datos, complementada con formación reciente en LLMs y Aprendizaje por Refuerzo en la Universidad Nacional de Ingeniería (UNI).',
		skills: [
			{ label: 'Lenguajes', items: 'Python, JavaScript, TypeScript, C/C++, SQL' },
			{ label: 'IA / Datos', items: 'Machine Learning, Pandas, NumPy, Matplotlib, API OpenAI/DeepSeek, Jupyter, Power BI' },
			{ label: 'IA Generativa / LLM', items: 'Transformers, RAG e Hybrid-RAG, embeddings, bases de datos vectoriales, fine-tuning, agentes (LangChain, n8n), Ollama, context engineering' },
			{ label: 'Backend / Web', items: 'Django, Flask, Django REST, APIs REST, PostgreSQL, Astro, Next.js' },
			{ label: 'Frontend', items: 'React, JavaScript, HTML, CSS' },
			{ label: 'Herramientas', items: 'Git, GitHub, Linux, Arduino / IoT' },
			{ label: 'Otros', items: 'Fundamentos de hacking ético, automatización' },
		],
		experience: [
			{
				role: 'Desarrollador de Software — Freelance / Proyectos Personales',
				meta: 'Perú · 2021 – Actualidad',
				tags: 'Python · Inteligencia Artificial · Desarrollo Web',
				points: [
					'Diseño y desarrollo de aplicaciones en Python, integrando modelos de IA y visión por computadora.',
					'Construcción de dashboards analíticos que procesan datos de ventas y generan resúmenes ejecutivos automáticos con LLMs.',
					'Implementación de sistemas de reconocimiento automático de placas (ANPR) combinando visión por computadora, OCR e integración con Arduino.',
				],
			},
			{
				role: 'Participante en el Hackathon de Innovación de la Región Norte',
				meta: 'Perú · 2023',
				tags: 'IoT · Tecnologías Inmersivas y Móviles — Universidad de Piura (UDEP)',
				points: [
					'Participé en un reto de innovación tecnológica organizado por la Universidad de Piura (UDEP), desarrollando soluciones en torno a IoT, tecnologías inmersivas y desarrollo móvil.',
				],
			},
		],
		education: [
			{
				title: 'Ingeniería Industrial',
				place: 'Universidad Nacional Hermilio Valdizán — Huánuco, Perú',
				meta: '2021 – Actualidad (en curso)',
			},
		],
		languages: [
			{ name: 'Español', level: 'Nativo' },
			{ name: 'Inglés', level: 'Intermedio' },
		],
		certifications: [
			{ title: 'Introducción a Transformers, LLMs y Aprendizaje por Refuerzo', place: 'Universidad Nacional de Ingeniería (UNI)', year: '2026' },
			{ title: 'Grandes Modelos de Lenguaje (LLMs): Construyendo un Agente Inteligente', place: 'Universidad Nacional de Ingeniería (UNI)', year: '2026' },
			{ title: 'Introducción a Business Intelligence con Power BI', place: 'MayuGo', year: '2025' },
			{ title: 'Curso de React.js', place: 'Platzi', year: '2024' },
			{ title: 'Frontend Developer', place: 'Platzi (Escuela de JavaScript)', year: '2021' },
			{ title: 'Curso Práctico de JavaScript', place: 'Platzi', year: '2021' },
			{ title: 'Python Intermedio: Comprehensions, Lambdas y Manejo de Errores', place: 'Platzi', year: '2021' },
			{ title: 'Análisis de Negocios para Ciencia de Datos', place: 'Platzi', year: '2021' },
			{ title: 'Algoritmos y Estructuras de Datos en JavaScript (Legacy)', place: 'freeCodeCamp', year: '2021' },
			{ title: 'Hacking Ético Gamificado', place: 'Academia Hacker Mentor', year: '2024' },
			{ title: 'Google: IA Práctica para Marketing', place: 'Santander Open Academy', year: '2025' },
		],
	},
};

export interface Project {
	name: string;
	tagline: { en: string; es: string };
	description: { en: string; es: string };
	tech: string[];
	url: string;
	stars?: number;
}

export const projects: Project[] = [
	{
		name: 'ventas.ai',
		tagline: { en: 'AI-powered sales analyzer', es: 'Analizador de ventas con IA' },
		description: {
			en: 'Web application that takes a sales CSV and generates an interactive dashboard with metrics and 8 analytical charts. Executive summaries are automatically written by AI.',
			es: 'Aplicación web que toma un CSV de ventas y genera un dashboard interactivo con métricas y 8 gráficos analíticos. Los resúmenes ejecutivos son redactados automáticamente por IA.',
		},
		tech: ['Python', 'Flask', 'Pandas', 'Matplotlib', 'OpenAI/DeepSeek'],
		url: 'https://github.com/addleonel/ventas.ai',
	},
	{
		name: 'ANPR-Arduino',
		tagline: { en: 'Automatic license plate recognition', es: 'Reconocimiento automático de placas' },
		description: {
			en: 'System that captures images, recognizes the plate with OCR and checks it against a database to flag unauthorized vehicles. Four-component architecture: database, API, desktop app and an Arduino module with camera, providing LED and sound feedback.',
			es: 'Sistema que captura imágenes, reconoce la placa con OCR y la verifica contra una base de datos para detectar vehículos no autorizados. Arquitectura de cuatro componentes: base de datos, API, app de escritorio y un módulo Arduino con cámara, con retroalimentación de LED y sonido.',
		},
		tech: ['Python', 'Django', 'Tesseract OCR', 'Arduino / IoT'],
		url: 'https://github.com/addleonel/ANPR-Arduino',
		stars: 14,
	},
	{
		name: 'coddinang',
		tagline: { en: 'Web platform / project community', es: 'Plataforma web / comunidad de proyectos' },
		description: {
			en: 'A blog-style platform and community to publish, search and share projects among developers. Includes user authentication, profiles, tagged posting and file/image uploads; deployed on DigitalOcean.',
			es: 'Plataforma tipo blog y comunidad para publicar, buscar y compartir proyectos entre desarrolladores. Incluye autenticación de usuarios, perfiles, publicaciones con etiquetas y subida de archivos/imágenes; desplegado en DigitalOcean.',
		},
		tech: ['Python', 'Django', 'JavaScript', 'Docker', 'DigitalOcean'],
		url: 'https://github.com/addleonel/coddinang',
	},
	{
		name: 'yomismo.ia',
		tagline: { en: 'Personal AI agent', es: 'Agente de IA personal' },
		description: {
			en: 'Conversational agent that answers using the user’s personal information as context, with streaming chat and conversation history. API and data handling on Supabase (PostgreSQL); deployed on Vercel.',
			es: 'Agente conversacional que responde usando la información personal del usuario como contexto, con chat en streaming e historial de conversación. API y manejo de datos en Supabase (PostgreSQL); desplegado en Vercel.',
		},
		tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'DeepSeek'],
		url: 'https://github.com/addleonel/yomismo.ia',
	},
];
