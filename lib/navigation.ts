import { industries } from "@/content/industries";
import { technologyGroups } from "@/content/technologies";
import { useCaseCategories } from "@/content/use-cases";
import { caseStudies, serviceGroups, services, servicesForGroup } from "@/lib/data";

export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type NavColumn = {
  title: string;
  href?: string;
  items: NavLink[];
};

export type NavEntry =
  | { id: string; type: "link"; label: string; href: string }
  | {
      id: string;
      type: "mega";
      label: string;
      href: string;
      columns: NavColumn[];
      spotlight?: {
        title: string;
        body: string;
        href: string;
        cta: string;
        /** Image base path without extension, e.g. `/images/hero-web` */
        image: string;
        imageAlt: string;
      };
    };

const industryColumnTitles = ["Sectors", "More sectors", "Also covered"] as const;

const serviceColumns: NavColumn[] = serviceGroups.map((group) => ({
  title: group.shortTitle,
  href: `/services/#svc-group-${group.id}`,
  items: servicesForGroup(group, services).map((service) => ({
    href: `/services/${service.slug}/`,
    label: service.title,
  })),
}));

const industryColumns: NavColumn[] = (() => {
  const chunkSize = Math.ceil(industries.length / 3);
  const chunks: NavColumn[] = [];
  for (let index = 0; index < industries.length; index += chunkSize) {
    const slice = industries.slice(index, index + chunkSize);
    const columnIndex = chunks.length;
    chunks.push({
      title: industryColumnTitles[columnIndex] ?? "Sectors",
      href: columnIndex === 0 ? "/industries/" : undefined,
      items: slice.map((industry) => ({
        href: `/industries/${industry.slug}/`,
        label: industry.title,
      })),
    });
  }
  return chunks;
})();

function categoryAnchor(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const primaryNav: NavEntry[] = [
  { id: "home", type: "link", label: "Home", href: "/" },
  {
    id: "services",
    type: "mega",
    label: "Services",
    href: "/services/",
    columns: serviceColumns,
    spotlight: {
      title: "All service areas",
      body: "Plain-language scope on every service page.",
      href: "/services/",
      cta: "Browse services",
      image: "/images/hero-web",
      imageAlt: "Web and product work at a desk",
    },
  },
  {
    id: "industries",
    type: "mega",
    label: "Industries",
    href: "/industries/",
    columns: industryColumns,
    spotlight: {
      title: "Industry pages",
      body: "Sector constraints shape scope. No named-client claims.",
      href: "/industries/",
      cta: "Explore industries",
      image: "/images/hero-team",
      imageAlt: "Team collaborating on delivery",
    },
  },
  {
    id: "work",
    type: "mega",
    label: "Work",
    href: "/case-studies/",
    columns: [
      {
        title: "Platform studies",
        href: "/case-studies/#platform-studies-heading",
        items: caseStudies.map((study) => ({
          href: `/case-studies/#${study.id}`,
          label: `${study.code}: ${study.title}`,
        })),
      },
      {
        title: "Use-case patterns",
        href: "/case-studies/#use-cases-heading",
        items: useCaseCategories.map((category) => ({
          href: `/case-studies/#use-case-${categoryAnchor(category)}`,
          label: category,
        })),
      },
      {
        title: "Explore",
        items: [
          { href: "/case-studies/", label: "All case studies" },
          { href: "/services/", label: "Related services" },
          { href: "/contact/", label: "Discuss a similar project" },
        ],
      },
    ],
    spotlight: {
      title: "Published work",
      body: "BMS, CSM, and illustrative patterns — not invented wins.",
      href: "/case-studies/",
      cta: "View work",
      image: "/images/hero-systems",
      imageAlt: "Systems and platform engineering",
    },
  },
  {
    id: "technologies",
    type: "mega",
    label: "Technologies",
    href: "/technologies/",
    columns: [
      {
        title: "Technology groups",
        href: "/technologies/",
        items: technologyGroups.map((group) => ({
          href: `/technologies/#${group.id}`,
          label: group.title,
        })),
      },
    ],
    spotlight: {
      title: "Stack discussion",
      body: "Tools follow the written scope — not a badge wall.",
      href: "/technologies/",
      cta: "View technologies",
      image: "/images/hero-cloud",
      imageAlt: "Cloud and infrastructure context",
    },
  },
  {
    id: "company",
    type: "mega",
    label: "Company",
    href: "/about/",
    columns: [
      {
        title: "About QNVO",
        items: [
          { href: "/about/", label: "About" },
          { href: "/process/", label: "Process" },
          { href: "/insights/", label: "Insights" },
          { href: "/faq/", label: "FAQ" },
        ],
      },
      {
        title: "Connect",
        items: [
          { href: "/contact/", label: "Contact" },
          { href: "/services/", label: "Services catalog" },
          { href: "/industries/", label: "Industries" },
          { href: "/technologies/", label: "Technologies" },
        ],
      },
    ],
    spotlight: {
      title: "Discuss a project",
      body: "A message starts a conversation — not a quote.",
      href: "/contact/",
      cta: "Contact QNVO",
      image: "/images/hero-growth",
      imageAlt: "Growth and delivery planning",
    },
  },
];

export function pathMatches(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  const clean = href.split("#")[0];
  return pathname === clean || pathname.startsWith(clean);
}
