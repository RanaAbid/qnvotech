import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "QNVO Technologies",
    short_name: "QNVO",
    description: "Enterprise software, AI agents, ERP and technology services from QNVO Technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#02285F",
    lang: "en",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
