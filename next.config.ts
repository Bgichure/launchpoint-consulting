import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 80, 85],
    minimumCacheTTL: 2_592_000,
  },
};

export default nextConfig;
