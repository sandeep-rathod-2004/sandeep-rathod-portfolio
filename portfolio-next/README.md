# Sandeep Rathod — Portfolio (Next.js)

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Framer Motion rebuild of the single-file portfolio, matching the full design brief (animated AI pipeline hero, live GitHub section, AI Playground demo, command palette, dark/light theme, SEO metadata).

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                 App Router: layout, page, sitemap.ts, robots.ts, icon.svg
components/
  layout/            Nav, Footer, ScrollProgress, BackToTop, CommandPalette, ThemeToggle
  sections/           One component per landing-page section
  shared/             Reveal (scroll animation), SectionHeading, FlowDiagram, Counter
lib/
  data.ts            All page content (edit this file to update copy, projects, skills, etc.)
  utils.ts
types/
  index.ts
```

Almost everything you'll want to edit — project list, tech stack, timeline, stats, blog post
placeholders, recruiter card, contact links — lives in **`lib/data.ts`**, not scattered across components.

## Adding your résumé

Drop `resume.pdf` into `public/`. It's already linked from the nav, footer, hero, and final CTA
via `/resume.pdf`.

## GitHub section

`components/sections/GitHubSection.tsx` fetches `https://api.github.com/users/<username>` and
`/repos` client-side — no key needed, subject to GitHub's public rate limit (60 req/hr/IP). Change
`SITE.githubUser` in `lib/data.ts` if your GitHub handle changes.

## AI Playground

`components/sections/AIPlayground.tsx` simulates the upload → OCR → embeddings → vector search →
chat flow with canned demo data (per the brief: "show fake demo data if backend is unavailable").
To wire it to a real backend, replace the `simulateUpload`/`reply` functions with calls to your
FastAPI service.

## Deploy to Vercel

```bash
npx vercel
```

Or import the repo at vercel.com → Add New Project → framework preset **Next.js** (auto-detected).

## Notes

- Dark/light theme toggles a `light` class on `<html>`, matching the CSS variable system in
  `app/globals.css` — the same token names as the original single-file version, so the palette
  (`--amber` / `--teal` / `--violet`) is unchanged.
- Metadata, Open Graph, Twitter Card, and JSON-LD (`Person` schema) are set in `app/layout.tsx`.
  `app/sitemap.ts` and `app/robots.ts` cover sitemap/robots.txt automatically.
- Add a real `public/og-image.png` (1200×630) for social share previews.
- This was scaffolded in an environment without network access, so `npm install` has not been run
  here — run it locally before `npm run dev` / `npm run build`.
