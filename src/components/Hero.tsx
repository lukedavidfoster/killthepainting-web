import Image from "next/image";
import { TitleLockup } from "@/components/TitleLockup";
import { film } from "@/content/film";
import { publicAsset } from "@/lib/assets";

export function Hero() {
  const still = publicAsset(film.heroStill.src);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {still ? (
        <Image
          src={still}
          alt={film.heroStill.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      ) : null}

      {/* Two scrims: a light one overall so the frame keeps its colour, and a
          heavier one on the right where the lockup and the tagline sit. */}
      <div aria-hidden="true" className="bg-night/35 absolute inset-0" />
      <div
        aria-hidden="true"
        className="via-night/15 to-night/70 absolute inset-0 bg-gradient-to-r from-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-[82rem] justify-center px-6 pt-28 pb-16 sm:px-10 lg:justify-end lg:px-16">
        <div className="flex w-full max-w-[34rem] flex-col items-center text-center">
          <TitleLockup artwork={publicAsset(film.titleArtwork.src)} title={film.title} />

          <p className="caps text-bone mt-9 text-[0.72rem] leading-[1.9] sm:text-[0.82rem]">
            {film.tagline}
          </p>

          <a
            href="#watch"
            className="caps border-pink text-pink hover:bg-pink hover:text-night mt-9 inline-flex items-center gap-3 border-2 px-8 py-4 text-[0.72rem] transition-colors sm:text-[0.8rem]"
          >
            Watch trailer
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              aria-hidden="true"
              className="fill-current"
            >
              <path d="M0 0l11 6.5L0 13z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
