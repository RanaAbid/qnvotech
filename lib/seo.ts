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
};

const ogImage = {
  url: `${siteUrl}/og-default.png`,
  width: 1200,
  height: 630,
  alt: "QNVO Technologies wordmark",
};

export function pageMetadata({ title, description, path, index = true, type = "website", publishedTime }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url,
      siteName: companyName,
      type,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export function organizationNode(): Record<string, unknown> {
  // sameAs omitted: LinkedIn/GitHub URLs were not provided in §0.
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: companyName,
    url: absoluteUrl("/"),
    email: publicEmail,
    slogan: tagline,
    description: defaultDescription,
    logo: `${siteUrl}/og-default.png`,
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
    serviceType: service.h1,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}/`),
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: ["United States", "United Kingdom", "Middle East", "Pakistan"],
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
    image: `${siteUrl}/og-default.png`,
    inLanguage: "en",
  };
}
