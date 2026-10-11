import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
