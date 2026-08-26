import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

/** Static export: metadata routes must opt into static rendering. */
export const dynamic = "force-static";

/**
 * Static sitemap over the routes that exist in this portfolio:
 * home, profile, projects, contact. Feature-owned content routes
 * (articles/store) were removed from this deployment.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/profile"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
