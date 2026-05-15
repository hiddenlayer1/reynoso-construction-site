"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  caption?: string;
  /** Aspect ratio expressed as width/height. Defaults to 3/4 (portrait). */
  aspectRatio?: number;
}

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  caption,
  aspectRatio = 3 / 4,
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    }
    function onUp() {
      draggingRef.current = false;
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [setFromClientX]);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    setFromClientX(e.clientX);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPercent((p) => Math.max(0, p - 4));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPercent((p) => Math.min(100, p + 4));
    } else if (e.key === "Home") {
      setPercent(0);
    } else if (e.key === "End") {
      setPercent(100);
    }
  }

  return (
    <figure className="group">
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
        role="slider"
        aria-label={`${beforeLabel} / ${afterLabel} comparison`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
        tabIndex={0}
        className="relative w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg ring-1 ring-slate-300/60 select-none touch-none cursor-ew-resize focus-visible:ring-2 focus-visible:ring-brand"
        style={{ aspectRatio }}
      >
        {/* After image (full width, base layer) */}
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          draggable={false}
          priority={false}
        />
        <span className="pointer-events-none absolute top-3 right-3 z-10 rounded-full bg-brand-dark/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
          {afterLabel}
        </span>

        {/* Before image, full width, clipped via clip-path to reveal only the left `percent%` */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            draggable={false}
            priority={false}
          />
          <span className="absolute top-3 left-3 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
            {beforeLabel}
          </span>
        </div>

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-20 flex w-px justify-center bg-white shadow-[0_0_10px_rgba(15,23,42,0.35)]"
          style={{ left: `${percent}%`, transform: "translateX(-0.5px)" }}
        >
          <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-brand">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-dark"
              aria-hidden="true"
            >
              <path d="M8 6 L3 12 L8 18" />
              <path d="M16 6 L21 12 L16 18" />
            </svg>
          </span>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
