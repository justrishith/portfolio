/**
 * Static projects content.
 *
 * Only real, shipped projects (verified in LifeOS). Each entry is
 * `open-source` with a public repo. Covers are decorative stock
 * images, not screenshots of the products.
 */

import type { Project } from "@/features/projects";

export const projectsData: readonly Project[] = [
  {
    id: "threadline",
    slug: "threadline",
    title: "Threadline",
    visibility: "open-source",
    coverUrl:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
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
    coverUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    coverWidth: 900,
    coverHeight: 600,
    demoUrl: "https://linkup-sand-kappa.vercel.app",
    repoUrl: "https://github.com/justrishith/linkup",
    publishedAt: "2026-08-25T00:00:00.000Z",
  },
];
