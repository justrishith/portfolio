import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

/** Static export: metadata routes must opt into static rendering. */
export const dynamic = "force-static";

/**
 * Robots policy.
 *
 * Allows everything by default and points crawlers at the dynamic
 * sitemap. Disallows the Next.js internal routes that have no SEO
 * value.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/").replace(/\/$/, ""),
  };
}
