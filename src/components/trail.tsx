import Image from "next/image";

import { links, photos } from "@/content";

export function Trail() {
  return (
    <section className="zone" id="outside" aria-label="Photography" style={{ paddingTop: 0 }}>
      <div className="shell">
        <div className="trail-head">
          <div>
            <span className="eyebrow">BEYOND THE SCREEN</span>
            <h2>Shot on the trail.</h2>
            <p className="zone-lede">
              Hiking, backpacking, and travel film — cut in DaVinci Resolve.
            </p>
          </div>
        </div>
        <div className="photo-grid">
          {photos.map((photo, i) => (
            <figure key={photo.src} style={i === 0 ? { gridColumn: "1 / -1" } : undefined}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={i === 0 ? 1600 : 800}
                height={i === 0 ? 700 : 600}
                sizes={i === 0 ? "100vw" : "(min-width: 900px) 33vw, 100vw"}
              />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <a
          href={links.films}
          target="_blank"
          rel="noopener noreferrer"
          className="film-cta"
        >
          @RISHITHFILMS_ — TRAIL FILM ↗
        </a>
      </div>
    </section>
  );
}
