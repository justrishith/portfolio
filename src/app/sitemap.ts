import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

/** Static export: metadata routes must opt into static rendering. */
export const dynamic = "force-static";

/**
 * The site is a single page — only the root route exists.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
