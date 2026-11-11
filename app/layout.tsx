import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { headers } from "next/headers";
import { ConsentProvider } from "@/components/ConsentBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BackToTop } from "@/components/Motion";
import { StructuredData } from "@/components/JsonLd";
import { SkipLink } from "@/components/ui";
import { organizationNode, websiteNode } from "@/lib/seo";
import { absoluteUrl, companyName, defaultDescription, siteUrl } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#02285F",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI, Web Development & SEO Company | QNVO Technologies",
    template: "%s",
  },
  description: defaultDescription,
  applicationName: companyName,
  authors: [{ name: companyName, url: absoluteUrl("/") }],
  creator: companyName,
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "AI, Web Development & SEO Company | QNVO Technologies",
    description: defaultDescription,
    url: absoluteUrl("/"),
    siteName: companyName,
    type: "website",
    locale: "en_US",
    images: [{ url: `${siteUrl}/og-default.png`, width: 1200, height: 630, alt: "QNVO Technologies wordmark" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI, Web Development & SEO Company | QNVO Technologies",
    description: defaultDescription,
    images: [`${siteUrl}/og-default.png`],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get("x-nonce") ?? "";
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body data-csp-nonce={nonce} className="bg-offwhite font-sans text-slate antialiased">
        <StructuredData data={[organizationNode(), websiteNode()]} />
        <ConsentProvider measurementId={measurementId} nonce={nonce}>
          <div className="flex min-h-screen flex-col">
            <SkipLink />
            <Header />
            <main id="main-content" tabIndex={-1} className="outline-none flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <BackToTop />
        </ConsentProvider>
      </body>
    </html>
  );
}
