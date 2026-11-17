"use client";

import { useRef, useState } from "react";

export function BehindTheScenes() {
  const player = useRef<HTMLIFrameElement>(null);
  const [fullscreenUnavailable, setFullscreenUnavailable] = useState(false);

  async function enterFullscreen() {
    try {
      if (!player.current?.requestFullscreen) {
        setFullscreenUnavailable(true);
        return;
      }
      await player.current.requestFullscreen();
      setFullscreenUnavailable(false);
    } catch {
      setFullscreenUnavailable(true);
    }
  }

  return (
    <div className="mx-auto max-w-[24rem]">
      <iframe
        ref={player}
        className="aspect-[9/16] w-full bg-black"
        src="https://www.youtube-nocookie.com/embed/EGvvQZXOf6I?fs=1&controls=1"
        title="Kill the Painting — Behind the Scenes"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
      <button
        type="button"
        onClick={enterFullscreen}
        className="caps text-pink hover:text-bone mx-auto mt-4 flex items-center gap-2 text-[0.72rem] underline underline-offset-4 transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />
        </svg>
        Full screen
      </button>
      {fullscreenUnavailable && (
        <p role="status" className="text-haze mt-3 text-center">
          Fullscreen isn’t available in this browser.{" "}
          <a
            className="text-pink underline"
            href="https://www.youtube.com/watch?v=EGvvQZXOf6I"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </a>
        </p>
      )}
    </div>
  );
}
