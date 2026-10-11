import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Returns the path when the file is present under /public, otherwise null.
 * Lets the page render honestly before the stills and poster are delivered.
 */
export function publicAsset(src: string): string | null {
  try {
    return existsSync(path.join(process.cwd(), "public", src)) ? src : null;
  } catch {
    return null;
  }
}
