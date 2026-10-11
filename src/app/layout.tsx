import type { Metadata } from "next";
import {
  Archivo,
  Archivo_Black,
  Bodoni_Moda,
  EB_Garamond,
  Quicksand,
} from "next/font/google";
import { film } from "@/content/film";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(film.siteUrl),
  title: {
    default: `${film.title} — a film`,
    template: `%s — ${film.title}`,
  },
  description: film.tagline,
  alternates: { canonical: "/" },
  openGraph: {
    type: "video.movie",
    siteName: film.title,
    title: film.title,
    description: film.tagline,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

const fonts = [archivo, archivoBlack, quicksand, bodoni, garamond]
  .map((f) => f.variable)
  .join(" ");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fonts} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
