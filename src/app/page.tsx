import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Trailer } from "@/components/Trailer";
import { film } from "@/content/film";
import { publicAsset } from "@/lib/assets";
import { movieJsonLd } from "@/lib/jsonld";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="caps text-pink mb-8 text-[0.74rem]">{children}</h2>;
}

export default function Home() {
  const director = film.credits.find(
    (c) => /direct/i.test(c.role) && c.name !== "TODO",
  )?.name;
  const credits = film.credits.filter((c) => c.name !== "TODO");
  const email = film.links.contactEmail;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movieJsonLd()) }}
      />
      <Nav />

      <main>
        <Hero />

        {/* About and trailer sit together: the frame on the left, the pitch on
            the right, the way the key art pairs image with type. */}
        <section id="about" className="bg-ink">
          <div className="mx-auto grid max-w-[82rem] items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-28">
            <div id="watch" className="scroll-mt-28">
              <Trailer
                youTubeId={film.trailerYouTubeId}
                still={publicAsset(film.aboutStill.src)}
                stillAlt={film.aboutStill.alt}
                filmTitle={film.title}
              />
            </div>

            <div className="max-w-[34rem]">
              <h2 className="caps text-pink text-[0.82rem] leading-[1.8]">
                {film.aboutHeading}
              </h2>

              <div className="mt-7 space-y-5 text-[1.18rem] leading-[1.65]">
                {film.synopsis.map((para) => (
                  <p key={para.slice(0, 24)}>
                    {para.startsWith(film.title) ? (
                      <>
                        <i>{film.title}</i>
                        {para.slice(film.title.length)}
                      </>
                    ) : (
                      para
                    )}
                  </p>
                ))}
              </div>

              <hr className="border-pink mt-10 w-16 border-0 border-t-2" />

              <p className="caps text-haze mt-6 text-[0.72rem]">
                {director && director !== "TODO" ? `A film by ${director} · ` : ""}
                {film.year}
                {film.runtimeMinutes ? ` · ${film.runtimeMinutes} min` : ""}
              </p>
            </div>
          </div>
        </section>

        {film.laurels.length > 0 && (
          <section aria-label="Selections and awards" className="border-t border-white/8">
            <ul className="mx-auto flex max-w-[82rem] flex-wrap items-center justify-center gap-x-12 gap-y-8 px-6 py-14 sm:px-10">
              {film.laurels.map((laurel) => (
                <li key={laurel.src}>
                  <Image
                    src={laurel.src}
                    alt={laurel.alt}
                    width={160}
                    height={96}
                    className="h-[76px] w-auto"
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section id="release" className="border-t border-white/8">
          <div className="mx-auto max-w-[82rem] px-6 py-20 sm:px-10 lg:px-16">
            <SectionLabel>Release</SectionLabel>
            <p className="text-haze max-w-[34rem] text-[1.1rem] leading-[1.65]">
              Release date TBA. Extremely soon.
            </p>
          </div>
        </section>

        <section id="credits" className="border-t border-white/8">
          <div className="mx-auto flex max-w-[82rem] flex-col gap-14 px-6 py-20 sm:px-10 lg:px-16">
            <div className="max-w-[34rem] grow">
              <SectionLabel>Credits</SectionLabel>
              <dl className="space-y-4">
                {credits.map((credit) => (
                  <div
                    key={credit.role}
                    className="grid grid-cols-[13rem_1fr] gap-x-5 gap-y-1 max-[30rem]:grid-cols-1"
                  >
                    <dt className="caps text-haze pt-1 text-[0.66rem]">{credit.role}</dt>
                    <dd className="text-bone m-0 text-[1.05rem]">{credit.name}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="soundtrack" className="border-t border-white/8">
          <div className="mx-auto max-w-[82rem] px-6 py-20 sm:px-10 lg:px-16">
            <div>
              <SectionLabel>Soundtrack</SectionLabel>
            </div>

            <figure className="mb-12 max-w-[52rem]">
              <figcaption className="text-haze mb-5 max-w-[34rem] text-[1.1rem] leading-[1.65]">
                Behind the Scenes Look:
              </figcaption>
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube-nocookie.com/embed/1GjRDZwAsPY"
                title="Behind the Scenes Look"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </figure>

            <p className="caps text-[0.82rem]">
              <a
                href={film.links.soundtrack}
                className="text-pink hover:text-bone underline underline-offset-4 transition-colors"
              >
                BUY THE ORIGINAL SOUNDTRACK
              </a>
            </p>
          </div>
        </section>

        <section id="merch" className="border-t border-white/8">
          <div className="mx-auto max-w-[82rem] px-6 py-20 sm:px-10 lg:px-16">
            <SectionLabel>Merch</SectionLabel>
            <figure className="max-w-[52rem]">
              <figcaption className="text-haze mb-5 text-[1.1rem] leading-[1.65]">
                Human Designed, Hand Printed, 100% Cotton, Sexy as Fuck.
              </figcaption>
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube-nocookie.com/embed/IfS3z6lp4jM"
                title="Human Designed, Hand Printed, 100% Cotton, Sexy as Fuck."
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </figure>
          </div>
        </section>

        <section aria-label="Film posters" className="border-t border-white/8">
          <div className="mx-auto max-w-[82rem] px-6 py-20 sm:px-10 lg:px-16">
            <div
              aria-label="Film poster triptych"
              className="grid grid-cols-3 items-start gap-3 sm:gap-6"
            >
              {film.posterTriptych.map((poster) => (
                <Image
                  key={poster.src}
                  src={poster.src}
                  alt={poster.alt}
                  width={1200}
                  height={1800}
                  sizes="(max-width: 640px) 30vw, (max-width: 1312px) 28vw, 390px"
                  className="h-auto w-full"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/8">
        <div className="mx-auto flex max-w-[82rem] flex-col gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16">
          {email && (
            <div>
              <SectionLabel>Contact</SectionLabel>
              <a
                href={`mailto:${email}`}
                className="text-bone hover:text-pink text-[1.3rem] transition-colors"
              >
                {email}
              </a>
            </div>
          )}

          <p className="caps text-haze text-[0.66rem]">
            &copy; {film.year} {film.title}
          </p>
        </div>
      </footer>
    </>
  );
}
