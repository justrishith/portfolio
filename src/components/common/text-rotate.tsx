"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Cycling word display — words stack in a CSS grid cell and swap via
 * translate/opacity. Screen readers get a static list instead.
 * Pattern adapted from Magic UI's text-reveal primitives (MIT).
 */
export function TextRotate({
  words,
  interval = 2200,
  className,
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className={cn(
        "relative inline-grid overflow-hidden align-baseline",
        className,
      )}
    >
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== index}
          className={cn(
            "col-start-1 row-start-1 whitespace-nowrap transition-all duration-500 ease-out",
            i === index
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0",
          )}
        >
          {word}
        </span>
      ))}
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
