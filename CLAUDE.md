# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/portfolio site built with Astro, TypeScript, and SCSS. Dark editorial design (obsidian `#1c1d20` canvas, giant single-weight headlines, pill controls, one iris accent) with dark (default) / light theme support and i18n (EN/ES). Uses React only for the interactive Personal Dashboard (KaTeX + custom SVG charts). Deployed to GitHub Pages via GitHub Actions, served from the custom domain `www.leunel.com` (`public/CNAME`). Social handle across networks is `addleonel`.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `astro build`, outputs to `dist/`)
- **Preview:** `npm run preview`

## Architecture

- **Framework:** Astro v6 with static output, Node.js >= 22
- **Layout:** `src/layouts/BaseLayout.astro` — wraps all pages with Header, Footer, and SEO meta tags
- **Pages:** `src/pages/` — EN at root (`/`), ES at `/es/`. Includes `index.astro`, `about.astro`, `posts.astro`, `projects.astro`, `contact.astro`, `personal.astro`, `neuroemociones.astro`, `posts/[slug].astro`, `404.astro` (localized, served as `404.html`), and `rss.xml.ts` (+ `es/rss.xml.ts`) blog feeds via `@astrojs/rss`. Nav order: Home, Blog, Projects, About, Contact — the "Blog" item routes to `/posts/` (label only; routes are still `/posts/`)
- **Contact form:** `ContactLetter.astro` (used by `contact.astro`) posts to FormSubmit.co (`https://formsubmit.co/ajax/<email>`) — no backend; first submission requires email activation
- **Components:** `src/components/` — `Header.astro` (prompt-style `> leunel▍` brand that types `/aquino` on hover, followed by the cube logo `favicon.svg`; nav links hover in brand blue `--brand`, text nav, dot-grid menu button that drops in and turns into an X / slide-in drawer), `Footer.astro` (closing "prompt": headline typed on view, suggested-prompt chips linking to `/contact/?topic=<i>`, meta row with Lima time, ghost `leunel` wordmark lit by a cursor spotlight), `Hero.astro` ("latent portrait" hero: display-size name, a second line streamed token-by-token like an LLM, and the Three.js block cube from `HeroFragments.astro`), `ContactLetter.astro` (contact form written as a fill-in-the-blanks letter with topic pills, preselectable via `?topic=<index>`; posts to FormSubmit), `PostPreview.astro`, `Resume.astro`, `Projects.astro` (full grid, used on `/projects`), `FeaturedProjects.astro` (unfolding index of curated projects: one row open at a time, image revealed with a brand-blue scan line), `HeroFragments.astro` (Three.js 3×3×3 cube that parts on hover, used inside the hero), `VectorSpace.astro` (Three.js), `ThemeToggle.astro`, `LanguageSwitcher.astro`, `PersonalDashboard.tsx` (React, loaded with `client:load`). Project data lives in `src/data/resume.ts`
- **Content:** Blog posts in `src/content/posts/` as Markdown with frontmatter (locale + slug fields). Content config in `src/content.config.ts`
- **i18n:** Translation files in `src/i18n/`. Path-based routing: `/` for EN, `/es/` for ES
- **Styles:** SCSS files in `src/styles/` with `global.scss` and per-component styles in `src/styles/components/`. `global.scss` defines design tokens as CSS custom properties: palette (`--color-obsidian/white/fog/graphite/iris/iris-deep`), semantic tokens (`--bg`, `--fg`, `--muted`, `--surface`, `--surface-strong`, `--accent`, `--border-color`, `--ring`), type scale (`--text-caption` … `--text-display`, single `--weight: 450`, uniform `--tracking: 0.05em`), radii (`--radius-lg` 10px cards, `--radius-pill` 36.72px) and layout (`--gutter`, `--section-gap`). It also exports SCSS mixins (`pill`, `type-heading`, `type-heading-lg`, `type-caption`) and shared classes (`.page-title`, `.section-label`, `.pill`, `.caption`, `.cmd`). `.cmd` is the primary CTA: an iris bar with an inset `↵` keycap; add `data-cmd` for the magnetic pull and decoding-label hover from `src/utils/cmd-button.ts` (initialised once in `BaseLayout.astro`). Legacy token names (`--card-bg`, `--accent-soft`, `--shadow-*`…) are kept mapped for the personal/secondary pages
- **Static assets:** `public/` (favicon.svg, favicon.ico, app icons `favicon-96.png`/`apple-touch-icon.png`/`icon-192.png`/`icon-512.png`/`icon-maskable-512.png`, og_image.png, robots.txt, manifest.json, `CNAME`, `projects/` screenshots). App icons are regenerated from `favicon.svg` via `node scripts/generate-icons.mjs` (uses `sharp`)

## Key Details

- `"type": "module"` in package.json (ESM)
- No Bootstrap — custom CSS only. Design rules: Inter at weight 450 only, letter-spacing 0.05em everywhere, left-aligned, full-bleed layout (no max-width container), no drop shadows (the 1px inset `--ring` is the only elevation), pill-shaped interactive elements, state changes via background swap (no lift)
- Brand blue `#1566d6` (`--color-brand`, from the cube logo; `--brand` is `#4d92ff` on dark) is used for nav link hover and the hero cube
- Accent color: iris `#455ce9` (`--accent`, deeper `#334bd3`) — used as rare punctuation, roughly one element per viewport (round CTAs, active fills); no other chromatic colors
- Dark is the default theme (`localStorage.theme` falls back to `'dark'`); the footer and menu drawer stay obsidian in both themes
- Uses Three.js for the 3D concept-space visualization (`VectorSpace.astro`) on the home page
- `src/assets/profile.webp` is the profile photo used as-is (white wall background kept), resized from `resources/new_foto.jpg` (git-ignored); shown on the About page
- Uses KaTeX (react-katex) for math rendering in the Personal Dashboard React component
- Blog posts use native Markdown code blocks (no react-code-blocks)
- `@astrojs/react` integration for interactive React islands
- `@astrojs/sitemap` configured in `astro.config.mjs` with i18n hreflang (EN `en-US` / ES `es-ES`), `lastmod`/`changefreq`/`priority`, and a filter excluding the noindex `/404`
- SEO lives in `BaseLayout.astro`: canonical + hreflang alternates, OG/Twitter, JSON-LD (WebSite/Person; BlogPosting on post pages), app icons, light/dark `theme-color`, and RSS autodiscovery links
- GitHub Actions workflow in `.github/workflows/deploy.yml` deploys on push to `main`
- Git branching: `main` is the production branch, `develop` is the active development branch
