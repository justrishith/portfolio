import { links, site } from "@/content";

import { Countdown } from "./countdown";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <div className="top-zone" id="top">
      <div className="shell hero">
        <Reveal className="hero-copy">
          <span className="hero-kicker">{site.role.toUpperCase()}</span>
          <h1>
            RISHITH <span>KARNATI</span>
          </h1>
          <p className="hero-sub">
            {site.tagline} Grade 10 at Irvington, programming FTC robots in
            Java, organizing Sentinel Hacks, leading Scouts Troop 199 — and
            filming every trail in DaVinci Resolve.
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
        </Reveal>
        <Reveal
          className="countdown-wrap"
          aria-label="Countdown to Sentinel Hacks, January 9, 2027"
        >
          <div className="countdown-card">
            <div className="countdown-tape">SENTINEL HACKS · JAN 09 2027</div>
            <Countdown />
            <p className="countdown-sub">
              The free student hackathon I&apos;m organizing through FTC
              Sentinels #32678.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
