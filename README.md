# Rishith Karnati — personal site

Greenfield Next.js site in the Sentinel Hacks design language (paper/ink/orange, hard offset shadows, ticker). No template, no component library.

Live: https://justrishith.vercel.app/

## Run locally

```bash
npm install
npm run dev
```

## Deploy (Vercel)

Import `justrishith/portfolio` — Next.js auto-detected, no config needed.

## Structure

- `src/content.ts` — all copy + outbound links (single source of truth)
- `src/app/globals.css` — tokens + all styles (plain CSS)
- `src/app/layout.tsx`, `src/app/page.tsx` — shell + composition
- `src/components/` — header, hero, countdown, ticker, facts, work, leadership, trail, contact, reveal
- `public/photos/` — trail photography
