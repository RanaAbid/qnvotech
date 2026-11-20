import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
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
  // 800 is used by display kickers/titles in globals.css
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  // optional avoids late LCP from font swaps under slow networks / lab throttle
  display: "optional",
  preload: true,
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "optional",
  preload: true,
  adjustFontFallback: true,
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
    default: "AI, Web Development & Technical SEO Company | QNVO Technologies",
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
    title: "AI, Web Development & Technical SEO Company | QNVO Technologies",
    description: defaultDescription,
    url: absoluteUrl("/"),
    siteName: companyName,
    type: "website",
    locale: "en_US",
    images: [{ url: `${siteUrl}/og-default.png`, width: 1200, height: 630, alt: "QNVO Technologies wordmark" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI, Web Development & Technical SEO Company | QNVO Technologies",
    description: defaultDescription,
    images: [`${siteUrl}/og-default.png`],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get("x-nonce") ?? "";
  // Prefer GTM container; fall back to GA4 measurement ID if only that is configured.
  const measurementId =
    process.env.NEXT_PUBLIC_GTM_ID?.trim() ||
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ||
    "GTM-MZHN4NQS";
  const isGtm = /^GTM-[A-Z0-9]+$/i.test(measurementId);

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body data-csp-nonce={nonce} className="bg-offwhite font-sans text-slate antialiased">
        <Script
          id="qnvo-gtag-bootstrap"
          strategy="beforeInteractive"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());`,
          }}
        />
        <StructuredData data={[organizationNode(), websiteNode()]} />
        <ConsentProvider measurementId={measurementId} nonce={nonce}>
          <div className="flex min-h-screen flex-col">
            <SkipLink />
            <Header />
            <main id="main-content" tabIndex={-1} className="main-content flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <BackToTop />
        </ConsentProvider>
        {isGtm ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(measurementId)}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
      </body>
    </html>
  );
}
