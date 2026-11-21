import type { ReactNode } from "react";
import { asset } from "@/lib/asset";

/*
 * Slide primitives. Everything is laid out on a fixed 1920×1080 stage that the
 * Deck scales to the screen, so type and spacing are sized for that canvas
 * (roughly 2× the WeGuide web scale) rather than for a browser page.
 */

export type Theme = "light" | "tint" | "dark" | "brand";

export type SlideProps = { number: number; total: number };

const themeBg: Record<Theme, string> = {
  light: "bg-white",
  tint: "bg-[#F5F3FF]",
  dark: "bg-[#1A1530]",
  brand: "bg-[#5B32C7]",
};

export const isDark = (t: Theme) => t === "dark" || t === "brand";

export function Logo({ theme = "light", className = "h-9" }: { theme?: Theme; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset("/weguide.svg")}
      alt="WeGuide"
      className={`${className} w-auto ${isDark(theme) ? "brightness-0 invert" : ""}`}
    />
  );
}

export function Slide({
  theme = "light",
  number,
  total,
  children,
  chrome = true,
}: SlideProps & { theme?: Theme; children: ReactNode; chrome?: boolean }) {
  return (
    <section className={`relative flex h-full w-full flex-col px-32 pb-36 pt-28 ${themeBg[theme]}`}>
      {children}
      {chrome && (
        <footer className="absolute inset-x-32 bottom-12 flex items-center justify-between">
          <Logo theme={theme} className="h-8" />
          <span
            className={`text-lg font-medium tabular-nums ${isDark(theme) ? "text-white/50" : "text-[#9B93B8]"}`}
          >
            {String(number).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </footer>
      )}
    </section>
  );
}

export function Eyebrow({ theme = "light", children }: { theme?: Theme; children: ReactNode }) {
  return (
    <p
      className={`text-xl font-semibold uppercase tracking-wider ${isDark(theme) ? "text-[#A3A9FE]" : "text-[#6E41F4]"}`}
    >
      {children}
    </p>
  );
}

export function Title({
  theme = "light",
  className = "",
  children,
}: {
  theme?: Theme;
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2
      className={`mt-5 text-7xl font-bold leading-snug tracking-tight ${isDark(theme) ? "text-white" : "text-[#1A1530]"} ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({
  theme = "light",
  className = "",
  children,
}: {
  theme?: Theme;
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={`mt-6 max-w-5xl text-3xl leading-relaxed ${isDark(theme) ? "text-[#D1C4F7]" : "text-[#5C5472]"} ${className}`}
    >
      {children}
    </p>
  );
}

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`rounded-xl border border-[#DDD8F0] bg-white p-8 shadow-md ${className}`}>{children}</div>
  );
}

export function IconBadge({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "solid" }) {
  return (
    <div
      className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${
        tone === "solid" ? "bg-[#6E41F4] text-white" : "bg-[#EDE8FF] text-[#6E41F4]"
      }`}
    >
      {children}
    </div>
  );
}
