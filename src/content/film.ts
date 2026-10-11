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
  tagline:
    "Lenny the Painter is an unstoppable force of modern art. But now he can't paint.",

  /** The one-line pitch above the synopsis. */
  aboutHeading: "A film about art, identity, and letting go.",

  synopsis: [
    "Kill the Painting follows an artist at a crossroads, where creation and destruction blur, and the lines between self, art, and reality begin to unravel.",
  ],

  /** Runtime in minutes, or null while it is not locked. */
  runtimeMinutes: 64 as number | null,

  /** Release or festival-premiere year. */
  year: 2026,

  /** YouTube video id only — the part after "v=". */
  trailerYouTubeId: "dq1hsrCel_o",

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
    alt: "Kill the Painting poster: Lenny stands at a blank canvas",
  },

  /** A credit whose name is still "TODO" is left off the page. */
  credits: [
    { role: "Written, directed and edited by", name: "Luke David Foster" },
    { role: "Produced by", name: "TODO" },
    { role: "Cinematography", name: "TODO" },
    { role: "Music by", name: "TODO" },
    {
      role: "Starring",
      name: "Michael Pezzuto, Josh Smith, Sydney Paige, Luke David Foster",
    },
  ] satisfies Credit[],

  laurels: [] as Laurel[],

  press: [] as PressQuote[],

  screenings: [] as Screening[],

  links: {
    /** Press kit. Drop the PDF at public/press-kit.pdf. */
    pressKit: "/press-kit.pdf",
    instagram: "https://www.instagram.com/lukedavidfoster/",
    youtube: "https://www.youtube.com/@lukedavidfoster",
    x: "",
    letterboxd: "https://letterboxd.com/film/kill-the-painting/",
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
