import { projects } from "@/content";

import { Reveal } from "./reveal";

export function Work() {
  return (
    <section className="zone" id="work" aria-label="Projects">
      <div className="shell">
        <span className="eyebrow">SELECTED WORK</span>
        <h2>Things I&apos;ve shipped.</h2>
        <p className="zone-lede">
          Real projects with real users — everything here I can explain line
          by line.
        </p>
        <div className="work-grid">
          {projects.map((project, i) => (
            <Reveal key={project.name}>
              <a
                className="work-row"
                href={project.open}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <h3>{project.name}</h3>
                  <span className="stack">
                    {project.year} · {project.stack.toUpperCase()}
                  </span>
                  <p>{project.blurb}</p>
                </span>
                <span className="go">OPEN ↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
