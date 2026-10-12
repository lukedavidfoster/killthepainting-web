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
  aboutHeading: "What is a painting actually worth?",

  synopsis: [
    "Abandoned by his muse, creatively empty and vulnerable, painting sensation Lenny Lonnagain needs something to inspire him. Anything, to inspire him.",
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

  /** Credits triptych, ordered from left to right. */
  posterTriptych: [
    { src: "/images/poster-1.jpg", alt: "Kill the Painting poster: a close-up of Lenny against a graffiti wall" },
    { src: "/images/poster.jpg", alt: "Kill the Painting poster: Lenny stands at a blank canvas" },
    { src: "/images/poster-2.jpg", alt: "Kill the Painting poster: Lenny sits beside a blank canvas on a bridge" },
  ],

  /** A credit whose name is still "TODO" is left off the page. */
  credits: [
    { role: "Written, directed and edited by", name: "Luke David Foster" },
    { role: "Production by", name: "Lucas Washington" },
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
    soundtrack:
      "https://lukedavidfoster.bandcamp.com/album/kill-the-painting-original-soundtrack",
    /**
     * Set this to publish the contact section. While it is empty the section,
     * its navigation entry, and the screener link are all left off the page.
     */
    contactEmail: "",
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
  { id: "release", label: "Release" },
  { id: "contact", label: "Contact" },
] as const;
