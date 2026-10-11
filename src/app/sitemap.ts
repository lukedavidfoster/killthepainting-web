import type { MetadataRoute } from "next";
import { film } from "@/content/film";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: film.siteUrl, lastModified: new Date(), priority: 1 }];
}
