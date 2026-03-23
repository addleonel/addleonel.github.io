# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/portfolio site built with Astro, TypeScript, and SCSS. Uses React only for the interactive Cipersonal page (KaTeX). Deployed to GitHub Pages at addleonel.github.io via GitHub Actions.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `astro build`, outputs to `dist/`)
- **Preview:** `npm run preview`

## Architecture

- **Framework:** Astro v6 with static output
- **Layout:** `src/layouts/BaseLayout.astro` — wraps all pages with Header, Footer, and SEO meta tags
- **Pages:** `src/pages/` — `index.astro`, `about.astro`, `posts.astro`, `contact.astro`, `ci-personal.astro`, `posts/[slug].astro`
- **Components:** `src/components/` — `Header.astro`, `Footer.astro`, `PostPreview.astro`, `Cipersonal.tsx` (React, loaded with `client:load`)
- **Content:** Blog posts in `src/content/posts/` as Markdown with frontmatter. Content config in `src/content.config.ts`
- **Styles:** SCSS files in `src/styles/` with `global.scss` and per-component styles in `src/styles/components/`
- **Static assets:** `public/` (favicon, og_image, robots.txt)

## Key Details

- `"type": "module"` in package.json (ESM)
- No Bootstrap — custom CSS only
- Uses KaTeX (react-katex) for math rendering in the Cipersonal React component
- Blog posts use native Markdown code blocks (no react-code-blocks)
- `@astrojs/react` integration for interactive React islands
- `@astrojs/sitemap` generates sitemap automatically
- GitHub Actions workflow in `.github/workflows/deploy.yml` deploys on push to master
- Git branching: `master` is the main/production branch, `develop` is the active development branch
