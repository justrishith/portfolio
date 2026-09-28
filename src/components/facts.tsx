import { facts } from "@/content";

export function Facts() {
  return (
    <section className="facts" aria-label="Quick facts">
      <div className="shell facts-grid">
        {facts.map((fact) => (
          <div key={fact.label}>
            <small>{fact.label}</small>
            <strong>{fact.value}</strong>
            <span>{fact.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
