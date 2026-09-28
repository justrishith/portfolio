import { links, site, socials } from "@/content";

export function Contact() {
  return (
    <>
      <section className="contact-zone" id="contact" aria-label="Contact">
        <div className="shell">
          <span className="eyebrow">
            04 <i>·</i> CONTACT
          </span>
          <h2>Build. Then trail.</h2>
          <p className="zone-lede">Internships. Early teams. Berkeley. My own company.</p>
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
          <span className="hanko" aria-hidden="true">
            RK
          </span>{" "}
          © {new Date().getFullYear()} {site.name} · {site.coords}
        </span>
        <a href={links.siteSource} target="_blank" rel="noopener noreferrer">
          SITE SOURCE ↗
        </a>
      </footer>
    </>
  );
}
