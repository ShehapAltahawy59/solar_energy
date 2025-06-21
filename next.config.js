/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === "development",
  },
  experimental: {
    // Remove obsolete image config from experimental
  },
  assetPrefix: "",
  basePath: "",
  trailingSlash: true,
};

module.exports = nextConfig;
