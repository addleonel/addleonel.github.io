# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/portfolio site built with Astro, TypeScript, and SCSS. Subtle neo-brutalist design — soft hairline borders, rounded corners and light liquid-glass touches — with dark/light theme support and i18n (EN/ES). Uses React only for the interactive Personal Dashboard (KaTeX + custom SVG charts). Deployed to GitHub Pages at addleonel.github.io via GitHub Actions.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `astro build`, outputs to `dist/`)
- **Preview:** `npm run preview`

## Architecture

- **Framework:** Astro v6 with static output, Node.js >= 22
- **Layout:** `src/layouts/BaseLayout.astro` — wraps all pages with Header, Footer, and SEO meta tags
- **Pages:** `src/pages/` — EN at root (`/`), ES at `/es/`. Includes `index.astro`, `about.astro`, `posts.astro`, `projects.astro`, `contact.astro`, `personal.astro`, `neuroemociones.astro`, `posts/[slug].astro`. Nav order: Home, Blog, Projects, About, Contact — the "Blog" item routes to `/posts/` (label only; routes are still `/posts/`)
- **Components:** `src/components/` — `Header.astro`, `Footer.astro`, `PostPreview.astro`, `Resume.astro`, `Projects.astro` (full grid, used on `/projects`), `FeaturedProjects.astro` (image-led home showcase of curated projects), `VectorSpace.astro` (Three.js), `ThemeToggle.astro`, `LanguageSwitcher.astro`, `PersonalDashboard.tsx` (React, loaded with `client:load`). Project data lives in `src/data/resume.ts`
- **Content:** Blog posts in `src/content/posts/` as Markdown with frontmatter (locale + slug fields). Content config in `src/content.config.ts`
- **i18n:** Translation files in `src/i18n/`. Path-based routing: `/` for EN, `/es/` for ES
- **Styles:** SCSS files in `src/styles/` with `global.scss` and per-component styles in `src/styles/components/`. `global.scss` defines design tokens as CSS custom properties for dark/light theming: colors (`--accent` plus `--accent-2`/`--accent-warm`/`--accent-soft`), borders (`--border-color` hairline), radius scale (`--radius-sm/md/lg/pill`) and soft shadows (`--shadow-soft`/`--shadow-pop`)
- **Static assets:** `public/` (favicon.svg, favicon.ico, og_image.png, robots.txt, manifest.json, `projects/` screenshots)

## Key Details

- `"type": "module"` in package.json (ESM)
- No Bootstrap — custom CSS only, subtle neo-brutalist aesthetic (soft hairline borders, rounded corners, floating liquid-glass header). Hover states use lift + accent border, not box-shadow
- Brand accent color: `#1566d6` (`--accent`), with secondary `--accent-2` (violet) and `--accent-warm` (orange) used sparingly
- Uses Three.js for 3D vector space visualization on home page
- Uses KaTeX (react-katex) for math rendering in the Personal Dashboard React component
- Blog posts use native Markdown code blocks (no react-code-blocks)
- `@astrojs/react` integration for interactive React islands
- `@astrojs/sitemap` generates sitemap automatically
- GitHub Actions workflow in `.github/workflows/deploy.yml` deploys on push to `main`
- Git branching: `main` is the production branch, `develop` is the active development branch
