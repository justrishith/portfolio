import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Local SVG covers render through next/image.
    dangerouslyAllowSVG: true,
    remotePatterns: [
      // Default to Unsplash for placeholder covers; remove or extend
      // as you wire in your own image hosts.
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
