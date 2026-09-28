import { tickerItems } from "@/content";

const JP = new Set(["竹", "武士道", "旅"]);

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((half) => (
          <div className="ticker-group" key={half}>
            {tickerItems.map((item) => (
              <span key={`${half}-${item}`}>
                {JP.has(item) ? <span className="jp">{item}</span> : <b>{item}</b>}{" "}
                <span className="sep">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
