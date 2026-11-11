import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), usb=(), web-share=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Hide the bottom-left Next.js "Issue" / portal badge in local dev UI.
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["zod"],
  },
  async redirects() {
    return [
      { source: "/privacy-policy", destination: "/privacy/", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy/", permanent: true },
      { source: "/terms-of-use", destination: "/terms/", permanent: true },
      { source: "/terms-of-use/", destination: "/terms/", permanent: true },
      { source: "/accessibility-statement", destination: "/accessibility/", permanent: true },
      { source: "/accessibility-statement/", destination: "/accessibility/", permanent: true },
    ];
  },
  async headers() {
    const headers = [...securityHeaders];
    if (process.env.NODE_ENV === "production") {
      headers.push({
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      });
    }
    const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }, ...headers];
    const day = [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }, ...headers];

    return [
      { source: "/:path*", headers },
      {
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }, ...headers],
      },
      { source: "/images/:path*", headers: immutable },
      { source: "/logo/:path*", headers: immutable },
      { source: "/videos/:path*", headers: day },
      { source: "/icons/:path*", headers: immutable },
      { source: "/favicon.ico", headers: immutable },
      { source: "/favicon-16x16.png", headers: immutable },
      { source: "/favicon-32x32.png", headers: immutable },
      { source: "/favicon-48x48.png", headers: immutable },
      { source: "/apple-touch-icon.png", headers: immutable },
      { source: "/android-chrome-192x192.png", headers: immutable },
      { source: "/android-chrome-512x512.png", headers: immutable },
      { source: "/og-default.png", headers: day },
      { source: "/_next/static/:path*", headers: immutable },
    ];
  },
};

export default nextConfig;
