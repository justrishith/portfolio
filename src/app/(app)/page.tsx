import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";

import { JsonLd } from "@/components/common/json-ld";
import { siteConfig } from "@/config/site";
import {
  getCurrentProfile,
  ProfileHeader,
  ProfileSocialLinks,
} from "@/features/profile";
import { ProjectGrid, listLatestProjects } from "@/features/projects";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  /**
   * Use the global title (`siteConfig.name`) as-is — the home page
   * is the landing page, so the brand stands alone instead of being
   * suffixed via the layout's title template.
   */
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
 * Home route — profile header followed by the featured projects grid.
 * Both features load their own static data on the server so the
 * initial paint is fully rendered HTML.
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
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
      <JsonLd data={breadcrumb} />

      <ProfileHeader
        profile={profile}
        action={<ProfileSocialLinks profileName={profile.name} />}
      />

      <section className="flex flex-col gap-6">
        <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
          <FolderKanban className="size-4" aria-hidden />
          Projects
        </h2>
        <ProjectGrid projects={latestProjects} />
      </section>
    </div>
  );
}
