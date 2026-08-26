import { FolderKanban, Mail } from "lucide-react";

import { TextRotate } from "@/components/common/text-rotate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import type { Profile } from "@/features/profile";
import type { Project } from "@/features/projects";

/**
 * One-page home composition: hero → projects → leadership → contact.
 * Lives in a widget because it composes multiple features.
 */

const ROTATING_WORDS = [
  "with AI",
  "in Python",
  "in Next.js",
  "for the web",
  "worth explaining",
] as const;

export function HomeHero({ profile }: { profile: Profile }) {
  return (
    <section className="flex flex-col gap-5 pt-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        High-school builder · Fremont, CA
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Hi, I&apos;m Rishith Karnati.
      </h1>
      <p className="text-xl text-muted-foreground sm:text-2xl">
        I ship small products{" "}
        <TextRotate words={ROTATING_WORDS} className="font-semibold text-foreground" />
        .
      </p>
      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        Learning in public through Harvard&apos;s CS50 — and I make sure I can
        explain every line of everything here.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${siteConfig.contact.socials.email}`}>
            <Mail className="size-4" aria-hidden />
            Email me
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://www.linkedin.com/in/rishith-karnati-5498bb409"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://github.com/justrishith"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </Button>
      </div>
    </section>
  );
}

export function HomeProjects({ projects }: { projects: readonly Project[] }) {
  return (
    <section className="flex flex-col gap-5" id="projects">
      <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
        <FolderKanban className="size-4" aria-hidden />
        Projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-foreground/20">
      <div className="flex items-center justify-between gap-2">
        <Badge variant="secondary">Open source</Badge>
        <span className="text-xs text-muted-foreground">
          {new Date(project.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        {project.description ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        ) : null}
      </div>
      {project.tags?.length ? (
        <ul className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline" className="font-normal">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-auto flex items-center gap-4 pt-2 text-sm font-medium">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline-offset-4 hover:underline"
        >
          Open ↗
        </a>
        {"repoUrl" in project && project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Source ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function HomeLeadership({
  experiences,
}: {
  experiences: Profile["experiences"];
}) {
  return (
    <section className="flex flex-col gap-5" id="leadership">
      <h2 className="text-base font-semibold text-foreground">Leadership</h2>
      <ul className="flex flex-col divide-y divide-border/60 rounded-xl border border-border/60 bg-card">
        {experiences.map((exp) => (
          <li key={exp.id} className="flex flex-col gap-1.5 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <p className="text-sm font-semibold text-foreground">
                {exp.role} · {exp.company}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatRange(exp.startDate, exp.endDate)}
              </p>
            </div>
            {exp.bullets?.length ? (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.bullets[0]}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

function formatRange(start: string, end: string | null): string {
  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  return `${fmt(start)} — ${end ? fmt(end) : "Present"}`;
}

export function HomeContact() {
  return (
    <section className="flex flex-col gap-4 rounded-xl border border-border/60 bg-card p-6" id="contact">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        Let&apos;s build something.
      </h2>
      <p className="text-sm leading-relaxed text-muted-foreground">
        I&apos;m open to internships and learning opportunities with
        early-stage teams — remote or around Fremont, CA.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${siteConfig.contact.socials.email}`}>
            <Mail className="size-4" aria-hidden />
            {siteConfig.contact.socials.email}
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://www.linkedin.com/in/rishith-karnati-5498bb409"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </Button>
      </div>
    </section>
  );
}
