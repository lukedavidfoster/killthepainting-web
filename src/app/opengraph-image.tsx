import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { film } from "@/content/film";

export const alt = `${film.title} — a film`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NIGHT = "#0b0b0d";
const PINK = "#f67fdd";
const PLATE = "#1f7f99";
const HAZE = "#9b9699";
const BONE = "#f0ebe6";

/** Pulls one Google font file so the card uses the same face as the page. */
async function displayFont(text: string) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Archivo+Black&text=${encodeURIComponent(text)}`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());
    const url = css.match(/src: url\((\S+?)\) format/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

async function dataUrl(src: string, mime: string) {
  try {
    const file = await readFile(path.join(process.cwd(), "public", src));
    return `data:${mime};base64,${file.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const words = ["KILL", "THE", "PAINTING"];
  const [font, poster] = await Promise.all([
    displayFont(words.join("")),
    dataUrl(film.poster.src, "image/jpeg"),
  ]);

  // The off-register plate: a teal copy of the words sitting behind the pink.
  const plate = (color: string, dx: number, dy: number) => (
    <div
      style={{
        position: "absolute",
        left: dx,
        top: dy,
        display: "flex",
        flexDirection: "column",
        color,
        fontFamily: font ? "Archivo Black" : "sans-serif",
        fontSize: 104,
        lineHeight: 1.02,
        letterSpacing: "-0.015em",
      }}
    >
      {words.map((word) => (
        <span key={word}>{word}</span>
      ))}
    </div>
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: NIGHT,
        color: BONE,
      }}
    >
      {poster ? (
        <img
          src={poster}
          alt=""
          width={420}
          height={630}
          style={{ objectFit: "cover" }}
        />
      ) : null}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 72px",
        }}
      >
        <div
          style={{ display: "flex", position: "relative", height: 330, width: "100%" }}
        >
          {plate(PLATE, 8, 9)}
          {plate(PINK, 0, 0)}
        </div>

        {!film.tagline.startsWith("TODO") && (
          <div style={{ display: "flex", fontSize: 26, color: BONE, maxWidth: 580 }}>
            {film.tagline}
          </div>
        )}

        <div style={{ display: "flex", marginTop: 22, fontSize: 20, color: HAZE }}>
          {film.year}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: font
        ? [{ name: "Archivo Black", data: font, style: "normal" as const }]
        : [],
    },
  );
}
