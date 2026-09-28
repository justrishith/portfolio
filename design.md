# Portfolio redesign — direction explorer

Date: 2026-09-28. Source copy: `src/content.ts` (real facts, real links).
Skills: explore-design (variants), neo-industrial (thesis discipline), better-typography (type floors).

## Variants (see `design-explorations/rishith-portfolio.html`)

- **A. GARAGE TERMINAL** — the site is a terminal. Boot lines, prompt nav,
  typed commands (`whoami`, `ls projects`, `cat contact`) render the real
  content. Bento stat tiles for the numbers (32678 / 199 / 04 / JAN 9 27).
  Thesis: most dev-authentic, least skimmable.
- **B. ZINE WALL** — photocopied poster wall. Rotated panels, tape strips,
  giant cut-out headline, sticker nav, photo wall with captions, marquee.
  Thesis: most personal, least minimal.
- **C. FIELD MANUAL** — Swiss technical document. Numbered sections, ruled
  tables, mono annotations, spec-sheet header with coords + status.
  Thesis: clearest, least edgy.

## Decision row

- Want visitors to *play* → pick A.
- Want visitors to *feel* → pick B.
- Want visitors to *scan* → pick C.

## Build rules for the winner (wherever it lands)

- Real copy only; no lorem. Photos from `public/photos/`.
- System fonts first; one display face max, self-hosted, with fallback.
- One signal color with one job. No shadows + rotations in the same register.
- Type: descending scale, `balance` headings, `pretty` body, 16px body floor.
- Motion: ticker/typing only, `prefers-reduced-motion` respected.
- Verify: build, lint, render check, mobile 390px, zero template imports.
