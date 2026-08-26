import Image from "next/image";
import { FolderKanban, Mail, MapPin } from "lucide-react";

import { Marquee } from "@/components/common/marquee";
import { TextRotate } from "@/components/common/text-rotate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import type { Profile } from "@/features/profile";
import type { Project } from "@/features/projects";

/**
 * One-page home composition: hero → skills marquee → projects →
 * leadership → contact. Full-width layout (max-w-6xl) so the page
 * uses the whole canvas instead of a narrow centered column.
 * Lives in a widget because it composes multiple features.
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
    <section className="grid items-center gap-10 pt-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="flex flex-col gap-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          High-school builder · Fremont, CA
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Rishith Karnati
        </h1>
        <p className="text-xl text-muted-foreground sm:text-2xl">
          I ship small products{" "}
          <TextRotate
            words={ROTATING_WORDS}
            className="font-semibold text-foreground"
          />
          .
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Learning in public through Harvard&apos;s CS50 — and I make sure I
          can explain every line of everything here.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
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
      </div>

      <ProfilePanel profile={profile} />
    </section>
  );
}

function ProfilePanel({ profile }: { profile: Profile }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60">
      <Image
        src="/cover.svg"
        alt=""
        width={800}
        height={500}
        priority
        className="h-56 w-full object-cover sm:h-64"
      />
      <div className="flex items-end gap-4 p-5">
        <div className="-mt-16 size-20 shrink-0 overflow-hidden rounded-2xl ring-4 ring-background">
          <Image
            src="/avatar.svg"
            alt={`${profile.name} monogram`}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1.5 pb-0.5">
          <p className="text-sm font-semibold text-foreground">{profile.name}</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <li className="inline-flex items-center gap-1">
              <MapPin className="size-3" aria-hidden />
              {profile.location}
            </li>
          </ul>
          <Badge className="w-fit bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/15">
            Open to internships
          </Badge>
        </div>
      </div>
    </div>
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
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:border-foreground/25">
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60">
        <Image
          src={project.coverUrl}
          alt={`${project.title} cover`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
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
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
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
        <div className="mt-auto flex items-center gap-4 pt-3 text-sm font-medium">
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
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-6"
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

export function HomeContact() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-border/60 p-8 sm:p-12"
      id="contact"
    >
      <Image
        src="/cover.svg"
        alt=""
        fill
        sizes="(min-width: 1152px) 1152px, 100vw"
        className="object-cover"
      />
      <div className="relative flex flex-col items-start gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          I&apos;m open to internships and learning opportunities with
          early-stage teams — remote or around Fremont, CA.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
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
      </div>
    </section>
  );
}
