# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/portfolio site built with Astro, TypeScript, and SCSS. Brutalist design with dark/light theme support and i18n (EN/ES). Uses React only for the interactive Cipersonal page (KaTeX). Deployed to GitHub Pages at addleonel.github.io via GitHub Actions.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `astro build`, outputs to `dist/`)
- **Preview:** `npm run preview`

## Architecture

- **Framework:** Astro v6 with static output, Node.js >= 22
- **Layout:** `src/layouts/BaseLayout.astro` — wraps all pages with Header, Footer, and SEO meta tags
- **Pages:** `src/pages/` — EN at root (`/`), ES at `/es/`. Includes `index.astro`, `about.astro`, `posts.astro`, `contact.astro`, `ci-personal.astro`, `posts/[slug].astro`
- **Components:** `src/components/` — `Header.astro`, `Footer.astro`, `PostPreview.astro`, `VectorSpace.astro` (Three.js), `ThemeToggle.astro`, `LanguageSwitcher.astro`, `Cipersonal.tsx` (React, loaded with `client:load`)
- **Content:** Blog posts in `src/content/posts/` as Markdown with frontmatter (locale + slug fields). Content config in `src/content.config.ts`
- **i18n:** Translation files in `src/i18n/`. Path-based routing: `/` for EN, `/es/` for ES
- **Styles:** SCSS files in `src/styles/` with `global.scss` and per-component styles in `src/styles/components/`. CSS custom properties for dark/light theming
- **Static assets:** `public/` (favicon.svg, favicon.ico, og_image.png, robots.txt, manifest.json)

## Key Details

- `"type": "module"` in package.json (ESM)
- No Bootstrap — custom CSS only, brutalist aesthetic
- Accent color: `#1566d6`
- Uses Three.js for 3D vector space visualization on home page
- Uses KaTeX (react-katex) for math rendering in the Cipersonal React component
- Blog posts use native Markdown code blocks (no react-code-blocks)
- `@astrojs/react` integration for interactive React islands
- `@astrojs/sitemap` generates sitemap automatically
- GitHub Actions workflow in `.github/workflows/deploy.yml` deploys on push to `main`
- Git branching: `main` is the production branch, `develop` is the active development branch
