"use client";

import * as React from "react";

const TARGET = new Date("2027-01-09T09:00:00-08:00").getTime();

function daysLeft(): number {
  return Math.max(0, Math.ceil((TARGET - Date.now()) / 86_400_000));
}

function subscribe(onChange: () => void): () => void {
  const id = window.setInterval(onChange, 60_000);
  return () => window.clearInterval(id);
}

export function Countdown() {
  const days = React.useSyncExternalStore(subscribe, daysLeft, () => null);

  return (
    <>
      <span className="countdown-number" aria-hidden="true">
        {days ?? "···"}
      </span>
      <span className="countdown-label">days until we build</span>
      <span className="sr-only" role="status">
        {days === null ? "Loading countdown" : `${days} days until Sentinel Hacks`}
      </span>
    </>
  );
}
