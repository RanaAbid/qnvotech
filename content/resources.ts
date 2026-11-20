/**
 * Resources hub — links to existing public pages only.
 * No invented PDFs, lead magnets or unverified download claims.
 */

export type ResourceItem = {
  title: string;
  body: string;
  href: string;
  kind: string;
};

export type ResourceGroup = {
  id: string;
  title: string;
  body: string;
  items: ResourceItem[];
};

export const resourceGroups: ResourceGroup[] = [
  {
    id: "delivery",
    title: "Delivery and decision pages",
    body: "How work starts, what a message is, and how engagements move.",
    items: [
      {
        title: "How we deliver",
        body: "Discover → written scope → build → handover → continue only if written.",
        href: "/how-we-deliver/",
        kind: "Guide",
      },
      {
        title: "FAQ",
        body: "Services, regions, contact and non-promises in plain language.",
        href: "/faq/",
        kind: "FAQ",
      },
      {
        title: "Contact",
        body: "Form and info@qnvotech.com. A message is not a contract.",
        href: "/contact/",
        kind: "Contact",
      },
    ],
  },
  {
    id: "services",
    title: "Service catalog",
    body: "Twenty-three service areas. Each page says who it is for and what it does not promise.",
    items: [
      {
        title: "All services",
        body: "AI, web, software, cloud, security and growth — browse the full catalog.",
        href: "/services/",
        kind: "Catalog",
      },
      {
        title: "AI agent development",
        body: "Bounded tasks with approved data and human review.",
        href: "/services/ai-agent-development/",
        kind: "Service",
      },
      {
        title: "Technical SEO",
        body: "Crawl, metadata, structured data and speed — no ranking guarantee.",
        href: "/services/technical-seo/",
        kind: "Service",
      },
      {
        title: "Website security and optimization",
        body: "Headers, forms, dependencies and page weight on sites you authorize.",
        href: "/services/website-security-optimization/",
        kind: "Service",
      },
    ],
  },
  {
    id: "work-learning",
    title: "Work and learning",
    body: "Published platforms, illustrative patterns and original writing.",
    items: [
      {
        title: "Case studies",
        body: "BMS and CSM platform studies plus use-case patterns — no invented metrics.",
        href: "/case-studies/",
        kind: "Work",
      },
      {
        title: "Insights",
        body: "Original articles linked to service pages. Drafts stay noindex until approved.",
        href: "/insights/",
        kind: "Articles",
      },
      {
        title: "Technologies",
        body: "Stacks discussed for a written scope — not a partner badge wall.",
        href: "/technologies/",
        kind: "Stack",
      },
      {
        title: "Products",
        body: "QNVO software products, starting with My POS.",
        href: "/products/",
        kind: "Product",
      },
    ],
  },
  {
    id: "company",
    title: "Company context",
    body: "Who QNVO Technologies is — and what this site intentionally omits.",
    items: [
      {
        title: "About",
        body: "Name, markets and facts that are intentionally left unpublished.",
        href: "/about/",
        kind: "About",
      },
      {
        title: "Partners",
        body: "How teams engage QNVO — without invented logos or reseller claims.",
        href: "/partners/",
        kind: "Engage",
      },
      {
        title: "Industries",
        body: "Sector constraints that shape scope — not client logo galleries.",
        href: "/industries/",
        kind: "Sectors",
      },
    ],
  },
];
