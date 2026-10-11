import type { MetadataRoute } from "next";
import { film } from "@/content/film";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${film.siteUrl}/sitemap.xml`,
  };
}
