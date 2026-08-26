import Image from "next/image";
import { Camera, FolderKanban, Mail } from "lucide-react";

import { Marquee } from "@/components/common/marquee";
import { TextRotate } from "@/components/common/text-rotate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import type { Profile } from "@/features/profile";
import type { Project } from "@/features/projects";
import { photosData } from "@/data/photos";

/**
 * One-page home composition — typographic, image-free (OG aesthetic):
 * hero → skills marquee → projects → leadership → photography → contact.
 * The photography section is the only place real photos appear.
 */

const ROTATING_WORDS = [
  "with AI",
  "in Python",
  "in Next.js",
  "for the web",
  "worth explaining",
] as const;

const SKILLS = [
  "Python",
  "C",
  "Next.js",
  "Tailwind CSS",
  "shadcn/ui",
  "Supabase",
  "Git & GitHub",
  "Prompt Engineering",
  "Markdown",
  "CS50",
] as const;

export function HomeHero({ profile }: { profile: Profile }) {
  return (
    <section className="flex flex-col gap-6 pt-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        High-school builder · Fremont, CA
      </p>
      <h1 className="max-w-4xl text-6xl font-extrabold leading-[0.95] tracking-tighter text-foreground sm:text-7xl lg:text-8xl">
        Rishith Karnati
      </h1>
      <p className="text-2xl text-muted-foreground sm:text-3xl">
        I ship small products{" "}
        <TextRotate
          words={ROTATING_WORDS}
          className="font-semibold text-foreground"
        />
        .
      </p>
      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        Learning in public through Harvard&apos;s CS50 — and I make sure I can
        explain every line of everything here.
      </p>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button asChild size="lg">
          <a href={`mailto:${siteConfig.contact.socials.email}`}>
            <Mail className="size-4" aria-hidden />
            Email me
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a
            href="https://www.linkedin.com/in/rishith-karnati-5498bb409"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
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

export function HomeSkills() {
  return (
    <section aria-label="Skills" className="-mx-6 border-y border-border/60 py-4">
      <Marquee speed={28} pauseOnHover>
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border/60 px-4 py-1.5 text-sm text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

export function HomeProjects({ projects }: { projects: readonly Project[] }) {
  return (
    <section className="flex flex-col gap-6" id="projects">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
        <FolderKanban className="size-5" aria-hidden />
        Projects
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group flex min-h-[260px] flex-col gap-3 rounded-2xl border border-border/60 bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50">
      <span className="text-xs font-semibold text-primary">
        {String(index + 1).padStart(2, "0")} / OPEN SOURCE
      </span>
      <h3 className="text-3xl font-bold tracking-tight text-foreground">
        {project.title}
      </h3>
      {project.description ? (
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      ) : null}
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
      <div className="mt-auto flex items-center gap-5 pt-4 text-sm font-semibold">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-4 hover:underline"
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
    <section className="flex flex-col gap-6" id="leadership">
      <h2 className="text-lg font-semibold text-foreground">Leadership</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {exp.role}
              </h3>
              <span className="text-xs text-muted-foreground">
                {formatRange(exp.startDate, exp.endDate)}
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              {exp.company}
            </p>
            {exp.bullets?.length ? (
              <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-muted-foreground">
                {exp.bullets.slice(0, 2).map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden className="text-primary">
                      ·
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
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

export function HomePhotos() {
  return (
    <section className="flex flex-col gap-6" id="photography">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
        <Camera className="size-5" aria-hidden />
        Beyond the screen
      </h2>
      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
        When I&apos;m not building, I&apos;m hiking and shooting photos around
        California.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {photosData.map((photo) => (
          <figure
            key={photo.src}
            className={photo.wide ? "md:col-span-3" : undefined}
          >
            <div
              className={`relative w-full overflow-hidden rounded-xl border border-border/60 ${
                photo.wide ? "aspect-[21/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.wide ? "(min-width: 1152px) 1104px, 100vw" : "(min-width: 768px) 360px, 100vw"}
                className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-2 text-xs text-muted-foreground">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function HomeContact() {
  return (
    <section
      className="flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-card p-10 sm:p-14"
      id="contact"
    >
      <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        Let&apos;s build something.
      </h2>
      <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
        I&apos;m open to internships and learning opportunities with
        early-stage teams — remote or around Fremont, CA.
      </p>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button asChild size="lg">
          <a href={`mailto:${siteConfig.contact.socials.email}`}>
            <Mail className="size-4" aria-hidden />
            {siteConfig.contact.socials.email}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
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
