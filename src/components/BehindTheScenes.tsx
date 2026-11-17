"use client";

import { useEffect, useRef, useState } from "react";

export function BehindTheScenes() {
  const frame = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [nativeFullscreen, setNativeFullscreen] = useState(false);

  useEffect(() => {
    const sync = () => setNativeFullscreen(document.fullscreenElement === frame.current);
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);

  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };
    document.addEventListener("keydown", escape);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", escape);
    };
  }, [expanded]);

  async function toggleFullscreen() {
    if (nativeFullscreen) {
      await document.exitFullscreen();
    } else if (expanded) {
      setExpanded(false);
    } else {
      try {
        if (!frame.current?.requestFullscreen) throw new Error("Unsupported");
        await frame.current.requestFullscreen();
      } catch {
        setExpanded(true);
      }
    }
  }

  return (
    <div className="mx-auto max-w-[24rem]">
      <div
        ref={frame}
        className={`${expanded ? "fixed inset-0 z-[100] h-[100dvh]" : "relative aspect-[9/16]"} fullscreen:h-screen fullscreen:w-screen flex items-center justify-center bg-black`}
      >
        <iframe
          className="h-full w-full bg-black"
          src="https://www.youtube-nocookie.com/embed/EGvvQZXOf6I?fs=1&controls=1"
          title="Kill the Painting — Behind the Scenes"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={
            nativeFullscreen || expanded ? "Exit fullscreen" : "Enter fullscreen"
          }
          title={nativeFullscreen || expanded ? "Exit fullscreen" : "Enter fullscreen"}
          className="absolute top-3 right-3 grid h-11 w-11 place-items-center rounded bg-black/80 text-white hover:bg-black"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              d={
                nativeFullscreen || expanded
                  ? "M3 8h5V3m8 0v5h5M8 21v-5H3m18 0h-5v5"
                  : "M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"
              }
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
