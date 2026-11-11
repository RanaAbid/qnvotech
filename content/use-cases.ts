/**
 * Illustrative use-case patterns inspired by common IT engagement shapes.
 * These are not named QNVO client wins and do not publish invented metrics.
 */

export type UseCase = {
  id: string;
  category: string;
  title: string;
  challenge: string;
  approach: string;
  services: { href: string; label: string }[];
};

export const useCaseCategories = [
  "Web and commerce",
  "Software platforms",
  "Cloud and DevOps",
  "Backup and recovery",
  "Security and support",
] as const;

export const useCases: UseCase[] = [
  {
    id: "headless-ecommerce-migration",
    category: "Web and commerce",
    title: "Headless ecommerce storefront with an existing commerce engine",
    challenge:
      "A storefront cannot support the custom checkout paths a growing catalogue needs, while product data already lives in a commerce backend the team wants to keep.",
    approach:
      "Separate the customer-facing experience from the commerce engine: a headless frontend talks over APIs, so checkout UX can change without discarding catalogue and order history. Payment and tax providers stay named in the written scope.",
    services: [
      { href: "/services/ecommerce-development/", label: "Ecommerce development" },
      { href: "/services/shopify-development/", label: "Shopify development" },
      { href: "/services/web-development/", label: "Web development" },
    ],
  },
  {
    id: "multi-language-corporate-site",
    category: "Web and commerce",
    title: "Multi-language corporate website on one codebase",
    challenge:
      "Marketing maintains several language versions of a site as disconnected copies, so a content change must be repeated by hand and pages drift apart.",
    approach:
      "Rebuild on a single codebase with a clear i18n model and shared components, so editors update structure once and language content stays aligned. Metadata and hreflang rules are part of the page map when SEO is in scope.",
    services: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/wordpress-development/", label: "WordPress development" },
      { href: "/services/technical-seo/", label: "Technical SEO" },
    ],
  },
  {
    id: "operations-analytics-dashboard",
    category: "Software platforms",
    title: "Operations dashboard that replaces tab-hopping",
    challenge:
      "An operations team checks several tools every morning to understand the same day’s performance, so standups depend on whoever remembered to open each screen.",
    approach:
      "Define the decisions the dashboard must support, then pull only the authorized data sources into one view with clear ownership for each feed. Alerts and write-back to source systems stay out of scope unless named in the agreement.",
    services: [
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/api-development-integration/", label: "API development and integration" },
      { href: "/services/web-development/", label: "Web development" },
    ],
  },
  {
    id: "wordpress-to-custom-cms",
    category: "Web and commerce",
    title: "WordPress site moved to a workflow-shaped CMS",
    challenge:
      "A publishing team’s WordPress setup fights their editorial process: plugins conflict, and editors cannot complete reviews without developer help.",
    approach:
      "Map the real publishing steps first, then migrate to templates or a custom CMS shaped around those steps. Plugin surface area is limited to what the written scope names, with update ownership documented at handover.",
    services: [
      { href: "/services/wordpress-development/", label: "WordPress development" },
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/website-security-optimization/", label: "Website security and optimization" },
    ],
  },
  {
    id: "progressive-web-app-delivery",
    category: "Web and commerce",
    title: "Progressive web app when native apps are not required yet",
    challenge:
      "A field or delivery workflow needs an app-like experience on phones, but maintaining two native codebases is not justified for the first release.",
    approach:
      "Build a progressive web app on the existing web stack with offline and notification behaviour only where the task needs them and consent rules allow. Store-native apps remain a later option if device APIs demand them.",
    services: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/mobile-app-development/", label: "Mobile app development" },
      { href: "/services/ui-ux-design/", label: "UI and UX design" },
    ],
  },
  {
    id: "api-first-booking-platform",
    category: "Software platforms",
    title: "API-first booking platform for new channels",
    challenge:
      "A booking system is tightly coupled to one vendor frontend, so adding a partner channel or new UI means touching fragile core logic.",
    approach:
      "Extract a clear API layer for inventory, holds and confirmations, then let frontends and partners consume that contract. Error handling, idempotency and auth are written before expanding channels.",
    services: [
      { href: "/services/api-development-integration/", label: "API development and integration" },
      { href: "/services/saas-development/", label: "SaaS development" },
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
    ],
  },
  {
    id: "internal-tools-replacing-spreadsheets",
    category: "Software platforms",
    title: "Internal tools that replace spreadsheet hand-offs",
    challenge:
      "Core operations run through email and spreadsheets, so status is unclear and re-entry errors show up every week.",
    approach:
      "Capture who starts each process, who approves it and what “done” means, then build internal tools for those paths only. Integrations to systems of record stay least-privilege and named in scope.",
    services: [
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/ai-automation/", label: "AI automation" },
      { href: "/services/erp-solutions/", label: "ERP solutions" },
    ],
  },
  {
    id: "nextjs-marketing-site",
    category: "Web and commerce",
    title: "Marketing site editors can update without a deploy queue",
    challenge:
      "A marketing site takes days to change because templates are rigid and every copy edit needs a developer.",
    approach:
      "Rebuild with server-rendered pages and a content model marketers can edit, keeping primary information in HTML. Forms, spam controls and metadata are wired only for paths you authorize.",
    services: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/wix-development/", label: "Wix development" },
      { href: "/services/technical-seo/", label: "Technical SEO" },
    ],
  },
  {
    id: "legacy-php-modernization",
    category: "Software platforms",
    title: "Incremental modernization of a fragile legacy application",
    challenge:
      "A long-lived application is too fragile to extend: small changes risk breaking unrelated paths, and regression testing takes days.",
    approach:
      "Modernize in increments with tests around the paths that matter, rather than a risky big-bang rewrite. Non-goals for the first release are written down so silent expansion is harder.",
    services: [
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/website-security-optimization/", label: "Website security and optimization" },
      { href: "/services/database-management/", label: "Database management" },
    ],
  },
  {
    id: "custom-lms",
    category: "Software platforms",
    title: "Learning platform scoped to real courses and certifications",
    challenge:
      "A training provider pays for an LMS packed with unused features while missing reporting and certification steps they actually run.",
    approach:
      "Build or configure a learning platform around course structure, assessments and certification rules they can describe. Licensing assumptions and data ownership stay explicit in the agreement.",
    services: [
      { href: "/services/saas-development/", label: "SaaS development" },
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/ui-ux-design/", label: "UI and UX design" },
    ],
  },
  {
    id: "subscription-membership-portal",
    category: "Web and commerce",
    title: "Membership portal with billing tied to access",
    challenge:
      "A membership organization manages recurring billing in one place and access lists in another, so people keep manual spreadsheets in sync.",
    approach:
      "Connect subscription status to content and event access through providers you can operate, with clear rules for upgrades, cancels and failed payments. Manual override paths stay documented for support staff.",
    services: [
      { href: "/services/saas-development/", label: "SaaS development" },
      { href: "/services/ecommerce-development/", label: "Ecommerce development" },
      { href: "/services/api-development-integration/", label: "API development and integration" },
    ],
  },
  {
    id: "map-based-listings",
    category: "Web and commerce",
    title: "Map-first listing search for location-heavy catalogues",
    challenge:
      "A listings site cannot search by drawn area or meaningful map filters, so visitors bounce between list pages that ignore geography.",
    approach:
      "Design a map-first search flow with filters tied to structured listing data, then implement only the geospatial features the data and APIs support. Performance and accessibility of the map UI are reviewed on agreed templates.",
    services: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/ui-ux-design/", label: "UI and UX design" },
      { href: "/services/api-development-integration/", label: "API development and integration" },
    ],
  },
  {
    id: "ordering-pos-integration",
    category: "Web and commerce",
    title: "Online ordering that pushes into an existing POS",
    challenge:
      "Online orders are re-typed into a point-of-sale system, creating delays and mismatched tickets during busy hours.",
    approach:
      "Build or connect an ordering path that sends confirmed orders into the POS or kitchen workflow you authorize, with failure queues when the POS is unreachable. Menu and tax rules stay owned by operations.",
    services: [
      { href: "/services/ecommerce-development/", label: "Ecommerce development" },
      { href: "/services/api-development-integration/", label: "API development and integration" },
      { href: "/services/web-development/", label: "Web development" },
    ],
  },
  {
    id: "custom-crm-advisory",
    category: "Software platforms",
    title: "CRM shaped around review and compliance workflows",
    challenge:
      "Off-the-shelf CRMs do not match how advisors track relationships and reviews, so teams keep a shadow spreadsheet beside the official tool.",
    approach:
      "Model the review cadence, permissions and compliance notes first, then configure or build only those objects. Reporting that matters to supervisors is named in scope; vanity dashboards are not assumed.",
    services: [
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/erp-solutions/", label: "ERP solutions" },
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
    ],
  },
  {
    id: "accessibility-public-site",
    category: "Web and commerce",
    title: "Accessibility overhaul for a public website",
    challenge:
      "A public-facing site fails basic accessibility expectations, creating usability barriers and legal risk for the organization that publishes it.",
    approach:
      "Audit agreed templates against the accessibility standard named in the scope, then fix components for keyboard use, labels, contrast and structure. Independent certification is included only when the agreement says so.",
    services: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/ui-ux-design/", label: "UI and UX design" },
      { href: "/services/website-security-optimization/", label: "Website security and optimization" },
    ],
  },
  {
    id: "terraform-infrastructure-as-code",
    category: "Cloud and DevOps",
    title: "Cloud environment moved into infrastructure as code",
    challenge:
      "Production infrastructure exists mainly in console clicks and individual memory, so changes are hard to review and harder to reproduce.",
    approach:
      "Inventory what runs today, then represent agreed resources in version-controlled configuration with a reviewable change path. Secrets stay out of source control; production applies follow the approval window you name.",
    services: [
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
      { href: "/services/saas-development/", label: "SaaS development" },
    ],
  },
  {
    id: "seasonal-autoscaling",
    category: "Cloud and DevOps",
    title: "Capacity planning for seasonal traffic spikes",
    challenge:
      "Fixed capacity that is fine most of the year fails when traffic spikes, while over-provisioning wastes budget the rest of the time.",
    approach:
      "Base scaling rules on observed traffic patterns and the application’s real bottlenecks, with load tests on environments you authorize. Uptime percentages are not published as marketing promises on this site.",
    services: [
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/website-security-optimization/", label: "Website security and optimization" },
      { href: "/services/ecommerce-development/", label: "Ecommerce development" },
    ],
  },
  {
    id: "azure-environment-rebuild",
    category: "Cloud and DevOps",
    title: "Undocumented cloud environment rebuilt with a security baseline",
    challenge:
      "A team inherits cloud resources with weak documentation, fragile remote access and unclear backup ownership.",
    approach:
      "Rebuild or harden the environment you authorize: network paths, identity, backups and a written baseline. VPN or remote-access fixes are tested in a change window; silent production access is not assumed.",
    services: [
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/data-backup-protection/", label: "Data backup and protection" },
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
    ],
  },
  {
    id: "immutable-backup-ransomware",
    category: "Backup and recovery",
    title: "Immutable backups for ransomware-resilient recovery",
    challenge:
      "Backups share the same reachable network path as production, so a ransomware event could encrypt the copies needed for recovery.",
    approach:
      "Design retention and storage so restore copies are immutable or otherwise isolated as the agreement requires, then run a restore drill for a scenario you name. Zero-loss warranties are not claimed on this page.",
    services: [
      { href: "/services/data-backup-protection/", label: "Data backup and protection" },
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
    ],
  },
  {
    id: "backup-verification-pipeline",
    category: "Backup and recovery",
    title: "Backup jobs that are actually restore-tested",
    challenge:
      "Backup jobs appear green in logs, but nobody has proven a recent restore, so corruption or credential drift stays invisible until an emergency.",
    approach:
      "Add monitored failure alerts and a scheduled sample restore for systems in scope. Residual gaps and systems not covered stay written down so they are not mistaken for guarantees.",
    services: [
      { href: "/services/data-backup-protection/", label: "Data backup and protection" },
      { href: "/services/database-management/", label: "Database management" },
      { href: "/services/it-helpdesk-support/", label: "IT helpdesk and support" },
    ],
  },
  {
    id: "cross-region-disaster-recovery",
    category: "Backup and recovery",
    title: "Warm standby and a tested failover path",
    challenge:
      "An organization has backups but no standby environment or practiced failover, so recovery depends on improvisation during an outage.",
    approach:
      "Stand up the standby posture named in the scope, document who approves a failover, and run a drill when testing is included. Recovery time claims belong only in a written agreement, not in marketing copy.",
    services: [
      { href: "/services/data-backup-protection/", label: "Data backup and protection" },
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/it-helpdesk-support/", label: "IT helpdesk and support" },
    ],
  },
  {
    id: "vpc-segmentation-saas",
    category: "Security and support",
    title: "Network segmentation for a growing SaaS environment",
    challenge:
      "A SaaS network grew organically until routing and security groups became hard to explain in a customer review.",
    approach:
      "Redesign segmentation and least-privilege paths for environments you authorize, with change control and documentation for operators. Passing a third-party audit is not promised unless that audit is separately scoped.",
    services: [
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/saas-development/", label: "SaaS development" },
    ],
  },
  {
    id: "helpdesk-severity-coverage",
    category: "Security and support",
    title: "Helpdesk coverage with written severity and hours",
    challenge:
      "Every issue lands in a shared inbox with no severity model, so urgent outages compete with how-to questions and nobody knows who owns escalation.",
    approach:
      "Define covered systems, channels, hours and severity targets in a support schedule, then triage against that list. Default 24/7 staffing is not invented on this website; hours are whatever the agreement purchases.",
    services: [
      { href: "/services/it-helpdesk-support/", label: "IT helpdesk and support" },
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/website-security-optimization/", label: "Website security and optimization" },
    ],
  },
];

export function useCasesByCategory(): { category: string; items: UseCase[] }[] {
  const order = [...useCaseCategories];
  return order
    .map((category) => ({
      category,
      items: useCases.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);
}
