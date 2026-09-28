import { tickerItems } from "@/content";

export function Ticker() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((half) => (
          <div className="ticker-group" key={half}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`}>
                <b>{item}</b> ✦
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
