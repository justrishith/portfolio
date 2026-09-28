import { leadership } from "@/content";

export function Leadership() {
  return (
    <section className="zone" id="leadership" aria-label="Leadership" style={{ paddingTop: 0 }}>
      <div className="shell">
        <span className="eyebrow">LEADERSHIP</span>
        <h2>Rooms I run.</h2>
        <p className="zone-lede">
          Grade 10, learning fast — by teaching, organizing, and showing up
          every week.
        </p>
        <div className="role-list">
          {leadership.map((item) => (
            <div className="role-row" key={item.role}>
              <time>{item.org.toUpperCase()}</time>
              <strong>{item.role}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
