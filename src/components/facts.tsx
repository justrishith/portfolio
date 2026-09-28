import { facts } from "@/content";

export function Facts() {
  return (
    <section className="facts" aria-label="Quick facts">
      <div className="shell facts-grid">
        {facts.map((fact) => (
          <div key={fact.label}>
            <small>{fact.label}</small>
            <strong className={fact.label === "HACKATHON" ? "alarm" : undefined}>
              {fact.value}
            </strong>
            <span>{fact.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
