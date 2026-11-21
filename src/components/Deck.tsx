"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { slides } from "./slides";

const STAGE_W = 1920;
const STAGE_H = 1080;

const controlBtn =
  "inline-flex items-center justify-center rounded-full p-2 text-white/70 transition-all duration-150 ease-out hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E41F4]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1530] disabled:opacity-50 disabled:cursor-not-allowed";

function readHash(count: number) {
  const n = parseInt(window.location.hash.slice(1), 10);
  return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), count - 1) : 0;
}

export default function Deck() {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const total = slides.length;

  const go = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(next, 0), total - 1);
      setIndex(clamped);
      window.history.replaceState(null, "", `#${clamped + 1}`);
    },
    [total],
  );

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }, []);

  // Fit the 1920×1080 stage inside the window, letterboxed.
  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    setIndex(readHash(total));
    const onHash = () => setIndex(readHash(total));
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    window.addEventListener("hashchange", onHash);
    document.addEventListener("fullscreenchange", onFs);
    return () => {
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("fullscreenchange", onFs);
    };
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          go(index + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          go(index - 1);
          break;
        case "Home":
          go(0);
          break;
        case "End":
          go(total - 1);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, go, toggleFullscreen]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || (e.target as HTMLElement).closest("button")) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      go(index + (dx < 0 ? 1 : -1));
    } else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      go(index + (t.clientX > window.innerWidth / 3 ? 1 : -1));
    }
  };

  const Current = slides[index]?.component;

  return (
    <div
      className="group relative flex h-dvh w-screen items-center justify-center overflow-hidden bg-[#1A1530] font-['Inter',system-ui,-apple-system,sans-serif]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="relative shrink-0 overflow-hidden bg-white"
        style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})` }}
      >
        <div key={index} className="slide-enter absolute inset-0">
          {Current ? (
            <Current number={index + 1} total={total} />
          ) : (
            <div className="flex h-full items-center justify-center text-3xl font-medium text-[#9B93B8]">
              No slides yet
            </div>
          )}
        </div>
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#6E41F4]/15">
          <div
            className="h-full bg-[#6E41F4] transition-all duration-300 ease-out"
            style={{ width: `${total ? ((index + 1) / total) * 100 : 0}%` }}
          />
        </div>
      </div>

      <p className="pointer-events-none absolute inset-x-0 top-6 hidden text-center text-sm text-white/60 [@media(hover:none)_and_(orientation:portrait)]:block">
        Rotate your phone for a bigger view · Tap or swipe to move
      </p>

      {/* Controls appear on hover so they never sit on top of a projected slide. */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#1A1530]/90 px-3 py-1.5 opacity-0 shadow-lg transition-all duration-200 ease-out group-hover:opacity-100 focus-within:opacity-100 [@media(hover:none)_and_(orientation:portrait)]:opacity-100">
        <button className={controlBtn} onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous slide">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="min-w-16 text-center text-sm font-medium tabular-nums text-white/80">
          {index + 1} / {total}
        </span>
        <button className={controlBtn} onClick={() => go(index + 1)} disabled={index >= total - 1} aria-label="Next slide">
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="mx-1 h-5 w-px bg-white/20" />
        <button className={controlBtn} onClick={toggleFullscreen} aria-label="Toggle fullscreen">
          {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}
