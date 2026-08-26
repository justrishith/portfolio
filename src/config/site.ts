/**
 * Site-wide static configuration.
 * Single source of truth for app metadata.
 *
 * Pure data — no side effects, no React. Edit this file to brand the
 * template to your own portfolio.
 */

import { env } from "@/lib/env";

export const siteConfig = {
  name: "Rishith Karnati",
  shortName: "RK",
  /**
   * Tagline used as default `<meta name="description">` and on
   * social-share cards. Keep it under ~160 characters so search
   * engines don't truncate it.
   */
  description:
    "High-school software developer building small products with AI — Threadline, LinkUp, and more. Fremont, California.",
  /**
   * Public site URL. Driven from `NEXT_PUBLIC_APP_URL` so dev,
   * staging, and production each emit canonical URLs that match where
   * they're actually served. Falls back to localhost in dev.
   */
  url: env.appUrl,
  ogImage: "/opengraph-image",
  locale: "en-US",
  /** OpenGraph uses `xx_XX` while HTML lang attribute uses `xx-XX`. */
  ogLocale: "en_US",
  htmlLang: "en",
  timezone: "America/Los_Angeles",
  region: "California, USA",
  /**
   * Author-level metadata. Surfaced via `<meta name="author">` and
   * the `Person` JSON-LD block on the home page.
   */
  author: {
    name: "Rishith Karnati",
    handle: "justrishith",
    role: "Software Developer",
    url: env.appUrl,
  },
  /**
   * Keywords are deprecated by Google but still consumed by other
   * engines (Bing, Yandex, DuckDuckGo) and AI crawlers.
   */
  keywords: [
    "Rishith Karnati",
    "portfolio",
    "software developer",
    "AI",
    "Next.js",
    "Python",
    "high school developer",
  ],
  /**
   * Search-engine verification IDs, opt-in.
   * Set the matching `NEXT_PUBLIC_*_VERIFICATION` env var to expose
   * them.
   */
  verification: {
    google: env.googleSiteVerification,
    yandex: env.yandexVerification,
  },
  contact: {
    /**
     * WhatsApp number used for direct-message links.
     * Override at deploy time with `NEXT_PUBLIC_WHATSAPP_NUMBER`.
     * Leave empty to hide the WhatsApp channel everywhere.
     */
    whatsapp: env.whatsappNumber,
    /** Default prefilled WhatsApp message body. */
    whatsappGreeting: "Hi! I came across your portfolio.",
    /**
     * Social media handles. Set the value to an empty string to hide
     * the corresponding link. Helpers in `lib/social-links` turn
     * these into canonical URLs.
     */
    socials: {
      facebook: "",
      instagram: "",
      threads: "",
      tiktok: "",
      x: "",
      linkedin: "rishith-karnati-5498bb409",
      github: "justrishith",
      email: "krishith25@gmail.com",
    },
  },
  links: {
    /** Source repo of *this* portfolio site, optional. */
    github: "https://github.com/justrishith/portfolio",
  },
} as const;

export type SiteConfig = typeof siteConfig;
