import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { headers } from "next/headers";
import { AnalyticsPageViews } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BackToTop } from "@/components/Motion";
import { StructuredData } from "@/components/JsonLd";
import { SkipLink } from "@/components/ui";
import { resolveAnalyticsConfig } from "@/lib/analytics";
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
  const analytics = resolveAnalyticsConfig();
  const { gtmId, gaId, disabled } = analytics;

  // Bootstrap ahead of gtm.js / gtag.js. Analytics storage is granted; ads stay denied.
  const bootstrap = disabled
    ? ""
    : [
        "window.dataLayer=window.dataLayer||[];",
        "function gtag(){dataLayer.push(arguments);}",
        "gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});",
        "gtag('js',new Date());",
        gtmId ? `window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});` : "",
        gaId && !gtmId ? `gtag('config','${gaId}',{anonymize_ip:true,send_page_view:false});` : "",
      ]
        .filter(Boolean)
        .join("");

  // Browsers strip `nonce` from the DOM after applying CSP. That makes React see a
  // server/client attribute mismatch on hydration — suppress those false warnings.
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <body data-csp-nonce={nonce} className="bg-offwhite font-sans text-slate antialiased" suppressHydrationWarning>
        {/* Keeps the menu button on the right if the stylesheet request fails (live hard refresh). */}
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html:
              "@media (max-width:1099px){.site-nav-bar{position:relative}.site-nav-desktop{display:none!important}.site-nav-inner{display:flex!important;align-items:center;width:100%;min-height:4rem;padding-right:4.25rem}.site-nav-actions{position:absolute!important;right:1rem;top:50%;z-index:5;transform:translateY(-50%);margin:0!important}.site-topline-inner{display:flex;flex-direction:column;align-items:flex-start;gap:.12rem}.site-topline-inner p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}}",
          }}
        />
        {!disabled && bootstrap ? (
          <script
            id="qnvo-gtag-bootstrap"
            nonce={nonce || undefined}
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: bootstrap }}
          />
        ) : null}
        {!disabled && gtmId ? (
          // eslint-disable-next-line @next/next/no-sync-scripts -- async GTM; native tag avoids next/script nonce hydration mismatch
          <script
            id="qnvo-gtm"
            async
            src={`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`}
            nonce={nonce || undefined}
            suppressHydrationWarning
          />
        ) : null}
        {/* Standalone GA4 only when GTM is off — GTM already fires G-KC8ERNZR58 and must not double-count. */}
        {!disabled && !gtmId && gaId ? (
          // eslint-disable-next-line @next/next/no-sync-scripts -- async gtag; native tag avoids next/script nonce hydration mismatch
          <script
            id="qnvo-ga"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
            nonce={nonce || undefined}
            suppressHydrationWarning
          />
        ) : null}
        {!disabled && gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        <StructuredData data={[organizationNode(), websiteNode()]} />
        <div className="flex min-h-screen flex-col">
          <SkipLink />
          <Header />
          <main id="main-content" tabIndex={-1} className="main-content flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <BackToTop />
        {!disabled ? <AnalyticsPageViews gaId={gaId} standaloneGa={!gtmId} /> : null}
      </body>
    </html>
  );
}
