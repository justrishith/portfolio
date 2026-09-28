import * as React from "react";

/**
 * Passthrough kept so consumers keep a stable wrapper.
 * This site renders instantly — no scroll reveals, no transitions.
 */
export function Reveal({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...rest}>{children}</div>;
}
