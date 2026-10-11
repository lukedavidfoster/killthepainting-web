"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  youTubeId: string;
  /** Local still path, or null while the still has not been delivered. */
  still: string | null;
  stillAlt: string;
  filmTitle: string;
};

/**
 * A facade in front of the YouTube embed. The iframe mounts on click only, so
 * the page does not pay for three third-party connections on load.
 */
export function Trailer({ youTubeId, still, stillAlt, filmTitle }: Props) {
  const [playing, setPlaying] = useState(false);
  const pending = youTubeId.startsWith("TODO");

  return (
    <div className="bg-ink relative aspect-video w-full overflow-hidden">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youTubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={`${filmTitle} trailer`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          {still ? (
            <Image
              src={still}
              alt={stillAlt}
              fill
              sizes="(max-width: 900px) 100vw, 680px"
              className="object-cover"
            />
          ) : null}

          <button
            type="button"
            disabled={pending}
            onClick={() => setPlaying(true)}
            aria-label={
              pending ? "Trailer not available yet" : `Play the ${filmTitle} trailer`
            }
            className="group absolute inset-0 grid place-items-center disabled:cursor-not-allowed"
          >
            <span className="border-bone text-bone group-enabled:group-hover:border-pink group-enabled:group-hover:text-pink grid h-[72px] w-[72px] place-items-center rounded-full border-2 transition-colors">
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                aria-hidden="true"
                className="ml-1 fill-current"
              >
                <path d="M0 0l18 10.5L0 21z" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
}
