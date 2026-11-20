/**
 * Delivery narrative for /how-we-deliver/.
 * Steps match published process language — no invented SLAs, prices or client counts.
 */

export type DeliveryPhase = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  serviceFit: string;
};

export type DeliveryExpect = {
  title: string;
  body: string;
};

export const deliveryPhases: DeliveryPhase[] = [
  {
    id: "discover",
    title: "Discover",
    summary: "Understand the system, users and constraints before proposing build work.",
    detail:
      "You describe the audience, the current tools and the constraint that matters most. QNVO Technologies confirms whether it fits a published service area. A conversation can end here without a project.",
    serviceFit: "Applies to AI, web, software, cloud, security and growth conversations alike.",
  },
  {
    id: "scope",
    title: "Write the scope",
    summary: "Deliverables, access, timeline and fees belong in a written agreement.",
    detail:
      "The website, the contact form and a call do not create an agreement. Scope names what will be designed, built, reviewed and handed over — and what is out of scope.",
    serviceFit: "Same rule for a storefront, an ERP configuration, an agent task or a cloud environment.",
  },
  {
    id: "build",
    title: "Design and build",
    summary: "Implementation follows the written scope with named review checkpoints.",
    detail:
      "Work proceeds against the agreement, not an assumed calendar on this site. Reviews happen at the checkpoints that agreement names so changes stay visible.",
    serviceFit: "Sprints, CMS handovers, API contracts and hardening reviews all follow what was written.",
  },
  {
    id: "handover",
    title: "Hand over",
    summary: "Access notes, documentation or a walkthrough when those items are in scope.",
    detail:
      "Handover can include credentials paths you authorize, editor notes or a walkthrough. Items that were not agreed are not implied by launch day.",
    serviceFit: "Useful for product launches, website go-live, migrations and security reviews.",
  },
  {
    id: "continue",
    title: "Continue only if written",
    summary: "Support, retainers and later optimization start when they are written down.",
    detail:
      "Ongoing helpdesk hours, retainers and optimization are separate from the first conversation. They begin when a further agreement names them — not when a launch happens.",
    serviceFit: "Applies to IT helpdesk, cloud operations, SEO follow-ups and product iteration alike.",
  },
];

export const deliveryExpectations: DeliveryExpect[] = [
  {
    title: "Clear ownership",
    body: "You own the systems and data you authorize. QNVO Technologies works inside that authorization.",
  },
  {
    title: "Visible checkpoints",
    body: "Reviews happen at the points the agreement names, so progress is not a black box.",
  },
  {
    title: "Honest non-promises",
    body: "This site does not publish fees, rankings, uptime SLAs or invented client lists. Those belong in verified writing.",
  },
  {
    title: "Service-aware delivery",
    body: "The same delivery spine covers AI agents, ecommerce, ERP, cloud, security and technical SEO — tailored by the scope, not by a slogan.",
  },
];

export const deliveryServiceTracks: { title: string; href: string; body: string }[] = [
  {
    title: "AI and automation",
    href: "/services/#svc-group-ai",
    body: "Bounded agents, automation and ML tasks with approved data and human review.",
  },
  {
    title: "Web and commerce",
    href: "/services/#svc-group-web-commerce",
    body: "Business sites, storefronts and CMS platforms shaped around editors and buyers.",
  },
  {
    title: "Software platforms",
    href: "/services/#svc-group-software",
    body: "Enterprise systems, SaaS, ERP, APIs and data stores named in the written scope.",
  },
  {
    title: "Cloud and security",
    href: "/services/#svc-group-cloud-security",
    body: "Environments, hardening, backups and helpdesk coverage with hours written down.",
  },
  {
    title: "Search and growth",
    href: "/services/#svc-group-growth",
    body: "Technical SEO and digital marketing setup — without ranking guarantees on this site.",
  },
];
