/**
 * Single source of truth for everything the site says about the film.
 *
 * Every value marked TODO is a placeholder. Replace it before launch; see the
 * "What we still need" section of README.md.
 */

export type Credit = { role: string; name: string };

export type Screening = {
  /** ISO date, e.g. "2026-03-14". */
  date: string;
  /** Festival, cinema, or platform name. */
  venue: string;
  /** City and region, or "Streaming". */
  place: string;
  /** Ticket or watch link. Omit it while the link is not live. */
  url?: string;
};

export type Laurel = {
  /** Path under /public, e.g. "/images/laurels/sxsw.png". */
  src: string;
  /** Festival and award, for screen readers. */
  alt: string;
};

export type PressQuote = {
  quote: string;
  outlet: string;
  url?: string;
};

export const film = {
  title: "Kill the Painting",

  /** Set over the hero. Keep it to one sentence. */
  tagline: "Some things have to be destroyed before they can be seen.",

  /** The one-line pitch above the synopsis. */
  aboutHeading: "A film about art, identity, and letting go.",

  synopsis: [
    "Kill the Painting follows an artist at a crossroads, where creation and destruction blur, and the lines between self, art, and reality begin to unravel.",
  ],

  /** Runtime in minutes, or null while it is not locked. */
  runtimeMinutes: null as number | null,

  /** Release or festival-premiere year. */
  year: 2026,

  /** YouTube video id only — the part after "v=". */
  trailerYouTubeId: "TODO_YOUTUBE_ID",

  /** Designed title treatment, transparent PNG, at least 1800px wide. */
  titleArtwork: { src: "/images/title-treatment.png" },

  /** Full-bleed hero frame. 16:9 or wider, at least 2400px across. */
  heroStill: {
    src: "/images/hero.jpg",
    alt: "The artist lying against a graffiti wall, looking up",
  },

  /** Frame beside the synopsis, and behind the trailer play button. 16:9. */
  aboutStill: {
    src: "/images/about.jpg",
    alt: "TODO: describe this frame",
  },

  /** Key art. 2:3 poster, at least 1200x1800. */
  poster: {
    src: "/images/poster.jpg",
    alt: "Kill the Painting poster",
  },

  credits: [
    { role: "Directed by", name: "TODO" },
    { role: "Written by", name: "TODO" },
    { role: "Produced by", name: "TODO" },
    { role: "Cinematography", name: "TODO" },
    { role: "Edited by", name: "TODO" },
    { role: "Music by", name: "TODO" },
    { role: "Starring", name: "TODO" },
  ] satisfies Credit[],

  laurels: [] as Laurel[],

  press: [] as PressQuote[],

  screenings: [] as Screening[],

  links: {
    /** Press kit. Drop the PDF at public/press-kit.pdf. */
    pressKit: "/press-kit.pdf",
    instagram: "",
    youtube: "",
    x: "",
    letterboxd: "",
    contactEmail: "TODO@example.com",
  },

  /** Canonical origin, no trailing slash. Set once the domain is live. */
  siteUrl: "https://killthepainting.com",
} as const;

export const sections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "watch", label: "Watch" },
  { id: "press", label: "Press" },
  { id: "screenings", label: "Screenings" },
  { id: "contact", label: "Contact" },
] as const;
