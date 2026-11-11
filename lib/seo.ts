import type { Metadata } from "next";
import type { Insight } from "@/content/insights";
import type { Faq, Service } from "@/lib/data";
import { absoluteUrl, companyName, defaultDescription, publicEmail, siteUrl, tagline } from "@/lib/site";

type Crumb = { name: string; path: string };

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

const logoUrl = `${siteUrl}/logo/qnvo-logo-horizontal-transparent.png`;

const ogImage = {
  url: `${siteUrl}/og-default.png`,
  width: 1200,
  height: 630,
  alt: "QNVO Technologies wordmark",
};

function normalizeDescription(description: string): string {
  return description.replace(/\s+/g, " ").trim();
}

export function pageMetadata({
  title,
  description,
  path,
  index = true,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const metaDescription = normalizeDescription(description);
  return {
    title,
    description: metaDescription,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
    openGraph: {
      title,
      description: metaDescription,
      url,
      siteName: companyName,
      type,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: [ogImage.url],
    },
  };
}

export function organizationNode(): Record<string, unknown> {
  // sameAs omitted: LinkedIn/GitHub URLs were not provided for publication.
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: companyName,
    url: absoluteUrl("/"),
    email: publicEmail,
    slogan: tagline,
    description: defaultDescription,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 484,
      height: 176,
    },
    image: ogImage.url,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: publicEmail,
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteNode(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: absoluteUrl("/"),
    name: companyName,
    description: defaultDescription,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function webPageNode({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage" | "FAQPage";
}): Record<string, unknown> {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description: normalizeDescription(description),
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en",
  };
}

export function breadcrumbNode(items: Crumb[]): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceNode(service: Service): Record<string, unknown> {
  return {
    "@type": "Service",
    name: service.h1,
    alternateName: service.title,
    serviceType: service.h1,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}/`),
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "AdministrativeArea", name: "Middle East" },
      { "@type": "Country", name: "Pakistan" },
    ],
    brand: { "@id": `${siteUrl}/#organization` },
  };
}

export function faqNode(items: Faq[]): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleNode(article: Insight): Record<string, unknown> {
  return {
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: companyName,
      url: absoluteUrl("/"),
    },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}/`),
    url: absoluteUrl(`/insights/${article.slug}/`),
    image: ogImage.url,
    inLanguage: "en",
    isAccessibleForFree: true,
  };
}
