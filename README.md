# www.leunel.com

![Deploy](https://github.com/addleonel/addleonel.github.io/actions/workflows/deploy.yml/badge.svg)

<p align="center">
  <img src="public/favicon.svg" alt="Leunel" width="80" />
</p>

My personal website and blog, live at **[www.leunel.com](https://www.leunel.com)**. There is nothing to install — just open it in your browser. This repository holds the source that builds and deploys the site.

Written notes on AI engineering, a look at what I'm working on, and a way to get in touch. Bilingual (EN at `/`, ES at `/es/`) with a dark/light theme and a subtle neo-brutalist design.

## Sections

- **Home** — hero, latest posts and featured projects
- **Blog** — posts on LLMs, RAG, agents, embeddings and vector spaces ([RSS](https://www.leunel.com/rss.xml) · [RSS ES](https://www.leunel.com/es/rss.xml))
- **Projects** — things I've built
- **About** — background and resume
- **Contact** — a form to reach me

## Built with

- **Astro v6** — static site generation
- **Three.js** — 3D vector space visualization
- **React** — interactive islands (KaTeX)
- **SCSS** — custom styles, no CSS framework
- **GitHub Pages** — deployed via GitHub Actions on every push to `main`

## Running it locally

Only needed if you want to work on the site itself. Requires Node.js >= 22.

```bash
npm install
npm run dev       # Dev server at localhost:4321
npm run build     # Static build to dist/
npm run preview   # Preview the build
```
