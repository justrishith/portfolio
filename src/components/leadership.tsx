import { leadership } from "@/content";

export function Leadership() {
  return (
    <section className="zone" id="leadership" aria-label="Leadership" style={{ paddingTop: 0 }}>
      <div className="shell">
        <div className="zone-head">
          <span className="tategaki" aria-hidden="true">
            導く
          </span>
          <div>
            <span className="eyebrow">
              02 <i>·</i> LEADERSHIP
            </span>
            <h2>Rooms I run.</h2>
            <p className="zone-lede">Show up every week.</p>
          </div>
        </div>
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
