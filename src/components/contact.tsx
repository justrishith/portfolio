import { links, site, socials } from "@/content";

export function Contact() {
  return (
    <>
      <section className="contact-zone" id="contact" aria-label="Contact">
        <div className="shell">
          <span className="eyebrow">CONTACT</span>
          <h2>Let&apos;s build something — then hit the trail.</h2>
          <p className="zone-lede">
            Open to internships and learning opportunities with early-stage
            teams. Long term: computer science, AI, Berkeley — and my own
            company.
          </p>
          <ul className="social-list">
            {socials.map((social) => (
              <li key={social.label}>
                <small>{social.label}</small>
                {social.href ? (
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.text} ↗
                  </a>
                ) : (
                  <span className="plain">{social.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="shell footer">
        <span>
          © {new Date().getFullYear()} {site.name} · Irvington High, Fremont CA
        </span>
        <a href={links.siteSource} target="_blank" rel="noopener noreferrer">
          SITE SOURCE ↗
        </a>
      </footer>
    </>
  );
}
