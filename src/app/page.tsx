import type { Metadata } from "next";

import { JsonLd } from "@/components/common/json-ld";
import { siteConfig } from "@/config/site";
import { getCurrentProfile } from "@/features/profile";
import { listLatestProjects } from "@/features/projects";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import {
  HomeContact,
  HomeHero,
  HomeLeadership,
  HomePhotos,
  HomeProjects,
  HomeSkills,
} from "@/widgets/home";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} — ${siteConfig.author.role}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.author.role}`,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    type: "website",
  },
};

/**
 * One-page home: hero with rotating skills, projects, leadership,
 * and contact — everything above the fold on a single scroll.
 */
export default async function HomePage() {
  const [profile, latestProjects] = await Promise.all([
    getCurrentProfile(),
    listLatestProjects(6),
  ]);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: absoluteUrl("/") },
  ]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-20 pt-12">
      <JsonLd data={breadcrumb} />
      <HomeHero profile={profile} />
      <HomeSkills />
      <HomeProjects projects={latestProjects} />
      <HomeLeadership experiences={profile.experiences} />
      <HomePhotos />
      <HomeContact />
      <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <a
          href={siteConfig.links.github || "https://github.com/justrishith"}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:text-foreground hover:underline"
        >
          site source ↗
        </a>
      </footer>
    </div>
  );
}
