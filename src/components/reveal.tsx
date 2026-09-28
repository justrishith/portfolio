"use client";

import { inView } from "motion";
import * as React from "react";

export function Reveal({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition =
      "opacity .5s ease, transform .5s cubic-bezier(.16,1,.3,1)";
    const stop = inView(
      el,
      () => {
        el.style.opacity = "1";
        el.style.transform = "none";
      },
      { amount: 0.25, margin: "-40px 0px" },
    );
    return () => stop();
  }, []);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
