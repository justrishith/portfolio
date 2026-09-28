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
          {projects.map((project) => (
            <Reveal key={project.name}>
              <article className="work-card">
                <div className="work-meta">
                  <span>{project.year}</span>
                  <span>{project.stack.toUpperCase()}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.blurb}</p>
                <div className="work-links">
                  <a href={project.open} target="_blank" rel="noopener noreferrer">
                    OPEN ↗
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer">
                    SOURCE ↗
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
