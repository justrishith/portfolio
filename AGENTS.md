# Portfolio — greenfield rules

No template. No shadcn, no Tailwind, no icon/font packages.

- `src/content.ts` is the single source of truth for copy + links. No hardcoded handles/URLs in components.
- Styling is plain CSS in `src/app/globals.css` using the Sentinel Hacks tokens (`--paper`, `--ink`, `--orange`, `--line`, `--muted`). New styles reuse existing classes first.
- Components are server by default. Client components only for countdown + motion reveals, each isolated in its own file.
- Motion: CSS keyframes first; the `motion` package only where CSS can't do it. Respect `prefers-reduced-motion`.
- Photos live in `public/photos/`. No external images, no custom font requests beyond Bricolage Grotesque (brand font, already used by sentinelhacks.tech).
