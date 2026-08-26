# Portfolio

Personal portfolio of **Rishith Karnati** — high-school software developer, Fremont CA.

Built on [next-folio](https://github.com/byma4n/next-folio) (MIT) — Next.js 16, React 19,
Tailwind CSS v4, shadcn/ui. All content is static data in `src/data/`.

## Live

Deployed on Vercel: URL set after first import (see below).

## Featured projects

- [Threadline](https://github.com/justrishith/threadline) — harness-agnostic Markdown workspace template for AI coding sessions.
- [LinkUp](https://github.com/justrishith/linkup) — shared space for friend groups ([live](https://linkup-vjvg.vercel.app)).

## Run locally

```bash
npm install
npm run dev
```

## Deploy (Vercel)

1. Import `justrishith/portfolio` at [vercel.com/new](https://vercel.com/new).
2. Framework preset auto-detects Next.js — no config needed.
3. Optional env var: `NEXT_PUBLIC_APP_URL=https://<your-app>.vercel.app` for correct canonical/OG URLs.

## Structure

- `src/config/site.ts` — identity, socials, SEO metadata
- `src/data/profile.ts` — bio, skills, experience
- `src/data/projects.ts` — project cards
