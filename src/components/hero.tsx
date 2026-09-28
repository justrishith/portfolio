import { links, site } from "@/content";

import { Reveal } from "./reveal";

export function Hero() {
  return (
    <div className="top-zone" id="top">
      <div className="shell hero">
        <Reveal className="hero-copy">
          <span className="hero-kicker">{site.role.toUpperCase()}</span>
          <h1>
            RISHITH <span className="outline">KARNATI</span>
          </h1>
          <p className="hero-sub">
            Grade 10, Irvington. Java and robots. Hackathon organizer. Troop
            199. Trail film.
          </p>
          <div className="hero-cta">
            <a href={links.email} className="button hero-button">
              EMAIL ME ↗
            </a>
            <a
              href={links.films}
              target="_blank"
              rel="noopener noreferrer"
              className="button ghost-button"
            >
              TRAIL FILM ↗
            </a>
          </div>
          <p className="hero-meta">
            {site.coords} · {site.status} · {site.version}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
