import { film } from "@/content/film";

/**
 * schema.org/Movie. This is what puts the film in a Google knowledge panel,
 * so keep it in step with the content module.
 */
export function movieJsonLd() {
  const credit = (role: string) =>
    film.credits
      .filter((c) => c.role === role && c.name !== "TODO")
      .flatMap((c) => c.name.split(",").map((n) => n.trim()))
      .map((name) => ({ "@type": "Person", name }));

  return {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: film.title,
    description: film.synopsis.join(" "),
    url: film.siteUrl,
    image: `${film.siteUrl}${film.poster.src}`,
    ...(film.runtimeMinutes ? { duration: `PT${film.runtimeMinutes}M` } : {}),
    dateCreated: String(film.year),
    director: credit("Directed by"),
    author: credit("Written by"),
    producer: credit("Produced by"),
    actor: credit("Starring"),
    ...(film.trailerYouTubeId.startsWith("TODO")
      ? {}
      : {
          trailer: {
            "@type": "VideoObject",
            name: `${film.title} trailer`,
            embedUrl: `https://www.youtube.com/embed/${film.trailerYouTubeId}`,
            thumbnailUrl: `${film.siteUrl}${film.aboutStill.src}`,
          },
        }),
  };
}
