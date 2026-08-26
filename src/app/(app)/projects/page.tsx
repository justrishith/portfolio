import type { Metadata } from "next";

import { JsonLd } from "@/components/common/json-ld";
import { ProjectGrid, loadProjects } from "@/features/projects";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  collectionPageJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/config/site";

const description =
  "Things I've designed, built, and shipped — with AI as a tool and understanding as the bar.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects · ${siteConfig.name}`,
    description,
    url: absoluteUrl("/projects"),
    type: "website",
  },
};

/**
 * Projects — full project listing.
 * Fully static: every project renders in the initial HTML (there are
 * only a few by design), so no client-side pagination is needed.
 */
export default async function ProjectsPage() {
  const { items } = await loadProjects({ limit: 100 });

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <JsonLd
        data={collectionPageJsonLd({
          name: "Projects",
          description,
          url: absoluteUrl("/projects"),
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Projects", url: absoluteUrl("/projects") },
        ])}
      />

      <header className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Projects
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Things I&apos;ve built
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </header>

      <ProjectGrid projects={items} />
    </div>
  );
}
