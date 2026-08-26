/**
 * Static projects content.
 *
 * Only real, shipped projects (verified in LifeOS). Covers are local
 * SVG letter-marks — no stock photography.
 */

import type { Project } from "@/features/projects";

export const projectsData: readonly Project[] = [
  {
    id: "threadline",
    slug: "threadline",
    title: "Threadline",
    visibility: "open-source",
    description:
      "A harness-agnostic Markdown workspace template that helps AI coding sessions resume without losing context.",
    tags: ["Markdown", "AI tooling", "No lock-in"],
    coverUrl: "/threadline.svg",
    coverWidth: 900,
    coverHeight: 600,
    demoUrl: "https://github.com/justrishith/threadline",
    repoUrl: "https://github.com/justrishith/threadline",
    publishedAt: "2026-08-26T00:00:00.000Z",
  },
  {
    id: "linkup",
    slug: "linkup",
    title: "LinkUp",
    visibility: "open-source",
    description:
      "A shared space for friend groups to plan events, ideas, expenses, and memories.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    coverUrl: "/linkup.svg",
    coverWidth: 900,
    coverHeight: 600,
    demoUrl: "https://linkup-sand-kappa.vercel.app",
    repoUrl: "https://github.com/justrishith/linkup",
    publishedAt: "2026-08-25T00:00:00.000Z",
  },
];
