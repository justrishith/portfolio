import { links, site } from "@/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header">
        <a href="#top" className="brand" aria-label={`${site.name} — home`}>
          <span className="hanko" aria-hidden="true">
            RK
          </span>
          <b>{site.name.toUpperCase()}</b>
        </a>
        <nav aria-label="Site">
          <a href="#work">WORK</a>
          <a href="#outside">OUTSIDE</a>
          <a href={links.email} className="pill">
            SAY HI ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
