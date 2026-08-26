import Link from "next/link";

/**
 * Slim top bar for the one-page site: name mark on the left,
 * anchor links + outbound profiles on the right.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-foreground"
        >
          RISHITH K<span className="text-primary">.</span>
        </Link>
        <nav aria-label="Site" className="flex items-center gap-5 text-sm">
          <a
            href="#projects"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <a
            href="https://github.com/justrishith"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
