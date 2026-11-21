"use client";

import { useEffect, useState } from "react";

/* Counts from 0 to `to` with an ease-out curve when the slide appears. */
export default function CountUp({
  to,
  duration = 2000,
  delay = 500,
  suffix = "",
}: {
  to: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let frame = 0;
    let start: number | null = null;
    const tick = (now: number) => {
      start ??= now;
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    const timer = setTimeout(() => (frame = requestAnimationFrame(tick)), delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [to, duration, delay]);

  return (
    <span className="tabular-nums">
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
