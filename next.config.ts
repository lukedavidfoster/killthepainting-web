import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The trailer facade falls back to YouTube's own poster frame until a
    // still from the film is supplied.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },

  // The site is fully static. No dynamic data means no need for the newer
  // caching model; keep the build simple and prerender everything.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
