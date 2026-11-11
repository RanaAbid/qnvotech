export type TechnologyGroup = {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  accent: "navy" | "mist" | "white" | "deep";
  items: string[];
  related: { href: string; label: string }[];
};

/**
 * Discussable technology areas — not a partner badge wall and not a promise
 * that every engagement uses every item.
 */
export const technologyGroups: TechnologyGroup[] = [
  {
    id: "web-product",
    title: "Web and product interfaces",
    shortTitle: "Web & product",
    summary: "Server-rendered and component-driven interfaces when a custom web product is in scope.",
    accent: "navy",
    items: [
      "TypeScript and JavaScript application code",
      "React and Next.js App Router sites",
      "Accessible HTML as the primary content delivery method",
      "Tailwind CSS and design tokens when a maintainable UI system is included",
      "Progressive web app patterns when offline or installable behaviour is named",
    ],
    related: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/ui-ux-design/", label: "UI and UX design" },
    ],
  },
  {
    id: "commerce-cms",
    title: "Commerce and content platforms",
    shortTitle: "Commerce & CMS",
    summary: "Store and CMS platforms you can license and operate — chosen in the written scope.",
    accent: "mist",
    items: [
      "Shopify Online Store and theme workflows",
      "WordPress and WooCommerce",
      "Wix editor-based sites when a hosted CMS fits the team",
      "Headless storefronts connected to a commerce engine you keep",
      "Catalogue, checkout and content models your editors can maintain",
    ],
    related: [
      { href: "/services/shopify-development/", label: "Shopify development" },
      { href: "/services/wordpress-development/", label: "WordPress development" },
      { href: "/services/ecommerce-development/", label: "Ecommerce development" },
    ],
  },
  {
    id: "apis-data",
    title: "APIs, data and automation",
    shortTitle: "APIs & data",
    summary: "Integrations and data paths with auth, retries and ownership made explicit.",
    accent: "white",
    items: [
      "HTTP JSON APIs and webhooks",
      "OAuth, API keys or mutual TLS as named in scope",
      "Relational and document databases you already run or can license",
      "Queue and background job patterns for reliable hand-offs",
      "Workflow automation against systems you authorize",
    ],
    related: [
      { href: "/services/api-development-integration/", label: "API development" },
      { href: "/services/database-management/", label: "Database management" },
      { href: "/services/ai-automation/", label: "AI automation" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud and delivery",
    shortTitle: "Cloud",
    summary: "Environments and pipelines on accounts you control — vendor-neutral in public copy.",
    accent: "deep",
    items: [
      "Public cloud accounts you already use or can contract with",
      "Infrastructure as code for reviewable changes",
      "CI/CD pipelines for test and deploy steps you approve",
      "Containers or serverless runtimes when the application fit is agreed",
      "Logging and monitoring hooks operators can actually watch",
    ],
    related: [
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/saas-development/", label: "SaaS development" },
    ],
  },
  {
    id: "security-backup",
    title: "Security and recovery",
    shortTitle: "Security",
    summary: "Controls and restore paths for systems you authorize — without public letter grades.",
    accent: "mist",
    items: [
      "Identity, MFA and least-privilege access reviews",
      "TLS, security headers and dependency hygiene for web properties",
      "Vulnerability review tooling you authorize",
      "Backup jobs with failure alerts and restore drills",
      "Immutable or isolated backup copies when the agreement requires them",
    ],
    related: [
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
      { href: "/services/data-backup-protection/", label: "Data backup" },
      { href: "/services/website-security-optimization/", label: "Website security" },
    ],
  },
  {
    id: "ai-mobile",
    title: "AI, mobile and connected devices",
    shortTitle: "AI & mobile",
    summary: "Applied only when the task, data boundary and device constraints are written down.",
    accent: "navy",
    items: [
      "Bounded AI agents with human review steps",
      "Model APIs or open models you can license",
      "Native or cross-platform mobile stacks named in scope",
      "MQTT or HTTPS device telemetry with device identity",
      "Evaluation sets and monitoring for ML tasks in scope",
    ],
    related: [
      { href: "/services/ai-agent-development/", label: "AI agent development" },
      { href: "/services/mobile-app-development/", label: "Mobile app development" },
      { href: "/services/iot-solutions/", label: "IoT solutions" },
    ],
  },
];

export function technologyItemCount(): number {
  return technologyGroups.reduce((total, group) => total + group.items.length, 0);
}
