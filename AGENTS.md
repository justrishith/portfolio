# Portfolio — greenfield rules

No template. No shadcn, no Tailwind, no icon/font packages.

- `src/content.ts` is the single source of truth for copy + links. No hardcoded handles/URLs in components.
- Styling is plain CSS in `src/app/globals.css`: bamboo x samurai brutalism system (washi `--paper`, sumi `--ink`, vermilion `--red`, bamboo `--bamboo`). System fonts, flat surfaces, square corners, instant state changes. Motifs (hanko, tategaki rails, slash rules) each do one job.
- Components are server by default. Client components only for countdown + motion reveals, each isolated in its own file.
- Motion: almost none. The CSS ticker is the only animation. Respect `prefers-reduced-motion`.
- Photos live in `public/photos/`. No external images. Links resolve from `src/content.ts`.
