import Image from "next/image";

type Props = {
  /** Transparent PNG of the real title treatment, or null until it lands. */
  artwork: string | null;
  title: string;
};

/**
 * The film's title card. When the designed lockup is available we show it;
 * until then this rebuilds it in type — heavy caps, an italic "the", and a
 * rounded lowercase, all on a misregistered cyan plate.
 */
export function TitleLockup({ artwork, title }: Props) {
  if (artwork) {
    return (
      <h1 className="m-0">
        <Image
          src={artwork}
          alt={title}
          width={1217}
          height={1194}
          priority
          sizes="(max-width: 700px) 82vw, 440px"
          className="h-auto w-full max-w-[27.5rem]"
        />
      </h1>
    );
  }

  return (
    <h1 className="lockup m-0 select-none">
      <span className="sr-only">{title}</span>

      <span aria-hidden="true" className="block">
        <span className="flex items-baseline gap-[clamp(8px,1.4vw,22px)]">
          <span className="font-display text-[clamp(4rem,16vw,11rem)] leading-[0.82] tracking-[-0.012em]">
            KILL
          </span>
          <span className="font-serif text-[clamp(1.5rem,5.4vw,3.6rem)] leading-none italic">
            the
          </span>
        </span>
        <span className="font-script -mt-[0.08em] block pl-[0.1em] text-[clamp(3.3rem,13.5vw,9.2rem)] leading-[0.95] font-medium">
          painting
        </span>
      </span>
    </h1>
  );
}
