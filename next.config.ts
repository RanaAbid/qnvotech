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
      "accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(self), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(self), publickey-credentials-get=(), screen-wake-lock=(), usb=(), web-share=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Self-contained server bundle (.next/standalone) for cPanel / Passenger hosting.
  output: "standalone",
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Hide the bottom-left Next.js "Issue" / portal badge in local dev UI.
  devIndicators: false,
  // Local preview often opens via 127.0.0.1 while the app listens on localhost (and vice versa).
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["zod", "sweetalert2"],
  },
  async redirects() {
    return [
      { source: "/privacy-policy", destination: "/privacy/", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy/", permanent: true },
      { source: "/terms-of-use", destination: "/terms/", permanent: true },
      { source: "/terms-of-use/", destination: "/terms/", permanent: true },
      { source: "/accessibility-statement", destination: "/accessibility/", permanent: true },
      { source: "/accessibility-statement/", destination: "/accessibility/", permanent: true },
      { source: "/security.txt", destination: "/.well-known/security.txt", permanent: true },
      { source: "/process", destination: "/how-we-deliver/", permanent: true },
      { source: "/process/", destination: "/how-we-deliver/", permanent: true },
      // Product slug rebrand: ayro* → qnvo*
      { source: "/products/ayrochat", destination: "/products/qnvochat/", permanent: true },
      { source: "/products/ayrochat/", destination: "/products/qnvochat/", permanent: true },
      { source: "/products/ayrolink", destination: "/products/qnvolink/", permanent: true },
      { source: "/products/ayrolink/", destination: "/products/qnvolink/", permanent: true },
      { source: "/products/ayrovoice", destination: "/products/qnvovoice/", permanent: true },
      { source: "/products/ayrovoice/", destination: "/products/qnvovoice/", permanent: true },
    ];
  },
  async headers() {
    const headers = [...securityHeaders];
    if (process.env.NODE_ENV === "production") {
      // preload omitted until the owner confirms HSTS preload submission.
      headers.push({
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains",
      });
    }
    const immutable = [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ...headers,
    ];
    const day = [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }, ...headers];
    const html = [
      { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
      // Don't let LiteSpeed keep serving the previous HTML after a deploy.
      { key: "X-LiteSpeed-Cache-Control", value: "no-cache" },
      ...headers,
    ];

    // More specific Cache-Control rules come after `/:path*` so they win when Next serves the file.
    // LiteSpeed may still serve /images and /icons directly — see public/images|icons/.htaccess.
    return [
      { source: "/:path*", headers: html },
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
