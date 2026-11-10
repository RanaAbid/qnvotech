export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  card: string;
  seoTitle: string;
  description: string;
  h1: string;
  summary: string;
  problem: string;
  audience: string;
  deliverables: string[];
  approach: string[];
  process: string[];
  technologies: string[];
  faqs: Faq[];
  related: string[];
  icon: string;
};

export function servicesInOrder(list: Service[]): Service[] {
  return [...list].sort((a, b) => Number(!a.slug.startsWith("ai-")) - Number(!b.slug.startsWith("ai-")));
}

export { serviceCatalog as services } from "@/content/services";

export const faqs: Faq[] = [
  {
    question: "What does QNVO Technologies do?",
    answer:
      "QNVO Technologies discusses enterprise software, AI agents, AI automation, ERP solutions, ecommerce, web development, technical SEO, and website security and optimization. Each engagement is defined in writing. The Work page presents BMS and CSM as enterprise platform case studies. Measured results are published only when they are real and permissioned.",
  },
  {
    question: "Which regions do you work with?",
    answer:
      "The site is written for organizations in the United States, the United Kingdom, the Middle East and Pakistan. It does not publish office addresses, a registered office or a claim that a local branch exists.",
  },
  {
    question: "How do I start a project conversation?",
    answer:
      "Use the contact form or email info@qnvotech.com. A form submission is a request to talk. It is not a contract, a quote or a commitment by either side. Scope, fees and timelines belong in a separate agreement.",
  },
  {
    question: "Do you publish client names, prices or case studies?",
    answer:
      "Prices, team size, founding year and testimonials are not published. The Work page presents two platforms, BMS and CSM (Cognitive Security Management). They are not framed as QNVO client wins, and it does not name the organizations a platform serves. Measured results are published only when they are real and permissioned.",
  },
  {
    question: "Will you guarantee rankings, revenue or compliance?",
    answer:
      "No. Technical SEO, performance and security work depends on the site, the access you provide and the written scope. QNVO Technologies does not promise rankings, revenue, uptime or legal compliance on this website.",
  },
  {
    question: "How is the contact form protected?",
    answer:
      "Submissions are checked for length and format, a hidden field is left empty by visitors, and submissions are rate limited. When Cloudflare Turnstile is configured, the server verifies that token before email is sent. Messages go to the business inbox only when email delivery is configured. You can also write directly to info@qnvotech.com.",
  },
];

export const processSteps: { title: string; body: string }[] = [
  {
    title: "Share the problem",
    body: "You describe the system, the audience and the constraints. We confirm whether it fits a service area on this site. A conversation can end here without a project.",
  },
  {
    title: "Agree the scope in writing",
    body: "Deliverables, access, timeline and fees belong in a separate agreement. The website, the contact form and a call do not create that agreement.",
  },
  {
    title: "Design and build what was agreed",
    body: "Implementation follows the written scope. Reviews happen at the checkpoints that agreement names, rather than on an assumed calendar.",
  },
  {
    title: "Hand over the agreed materials",
    body: "Handover can include access notes, documentation or a walkthrough when those items are in the scope. Items that were not agreed are not implied.",
  },
  {
    title: "Continue only if a further agreement says so",
    body: "Support, retainers and later optimization are separate from the first conversation. They start when they are written down, not when a launch happens.",
  },
];

export const regions = ["United States", "United Kingdom", "Middle East", "Pakistan"] as const;

export type CaseStudy = {
  id: string;
  code: string;
  title: string;
  summary: string;
  what: string;
  engineering: { label: string; body: string }[];
  services: { href: string; label: string }[];
  notClaimed: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "bms-platform",
    code: "BMS",
    title: "Business management platform",
    summary:
      "A business management platform for day-to-day operations, including TimeLive timesheet modules where work is recorded against clients, projects, and tasks.",
    what: "BMS is a business management platform used inside an organization for day-to-day operations. It includes TimeLive timesheet modules — employees record work against clients, projects, and tasks, and managers review and save those entries — alongside development, technical management, and operational tooling around the platform.",
    engineering: [
      {
        label: "Web development",
        body: "Building and maintaining platform modules, including timesheet entry and review flows, with server-side validation, role-aware access, and clean, maintainable code.",
      },
      {
        label: "Technical management",
        body: "Day-to-day platform coordination — standups, issue follow-ups, and keeping development, operations, and users aligned.",
      },
      {
        label: "Performance and reliability",
        body: "Internal tools must stay fast and dependable under daily use. Work here covers optimization, UI alignment, and follow-ups on sign-in and access issues.",
      },
      {
        label: "Security",
        body: "Access control, validated inputs, and careful handling of internal operational data.",
      },
    ],
    services: [
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/website-security-optimization/", label: "Website security and optimization" },
      { href: "/services/technical-seo/", label: "Technical SEO" },
    ],
    notClaimed: "No client name, user count, time saved, uptime figure, or testimonial is claimed here. Any such proof point is added only when it is real and permissioned.",
  },
  {
    id: "csm-platform",
    code: "CSM",
    title: "Cognitive Security Management",
    summary:
      "A security management platform used by public-sector organizations. Modules include security controls and System Security Plan (SSP) workflows.",
    what: "CSM (Cognitive Security Management) is a security management platform that provides security to public-sector organizations. Its modules include security controls and SSP (System Security Plan) modules, with additional modules around them. This page does not name the organizations the platform serves.",
    engineering: [
      {
        label: "Security controls management",
        body: "Defining, tracking, and managing security controls across client organizations, so each organization's security posture is visible and maintainable in one place.",
      },
      {
        label: "SSP modules",
        body: "Structured System Security Plan documentation and workflows — the plans, controls, and evidence an organization needs to demonstrate its security position.",
      },
      {
        label: "Ongoing development and support",
        body: "New features and fixes shipped against a live platform, with code and database health checks as part of routine care.",
      },
      {
        label: "Security and optimization",
        body: "Hardening and speed work as a continuous track, not a one-time task, because a security platform must stay dependable under daily use.",
      },
    ],
    services: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/website-security-optimization/", label: "Website security and optimization" },
    ],
    notClaimed:
      "No outcome metric, organization name, or testimonial is claimed here. Public-sector organizations are described only in general terms. Measured results are published only when they are real and permissioned.",
  },
];

export const caseStudyFaqs: Faq[] = [
  {
    question: "What is BMS?",
    answer:
      "BMS is a business management platform used for day-to-day operations, including TimeLive timesheet modules where work is recorded against clients, projects, and tasks, and reviewed before saving.",
  },
  {
    question: "What is CSM?",
    answer:
      "CSM stands for Cognitive Security Management. It is a security management platform that provides security to public-sector organizations. Its modules include security controls and SSP (System Security Plan) modules. This site does not name the organizations the platform serves.",
  },
  {
    question: "Are BMS and CSM QNVO clients?",
    answer:
      "No. BMS and CSM are presented here as enterprise platform case studies — the platforms and the work they involve — not as invented QNVO client wins. This page does not name organizations a platform serves. Measured results and testimonials are published only when real and permissioned.",
  },
  {
    question: "What kind of work does QNVO do on platforms like these?",
    answer:
      "Enterprise software development, web development, modernization, performance optimization, and security hardening — the services listed on the Services pages.",
  },
  {
    question: "Can QNVO build a platform like BMS or CSM for us?",
    answer:
      "Yes. If you need a business management platform, an internal tool, or a client-facing platform, start with the contact page and describe the workflow the platform must support.",
  },
  {
    question: "Why are there no results or numbers on this page?",
    answer:
      "Because results are published only when they are real and permissioned. A page with invented metrics would mislead buyers and damage trust.",
  },
];

export function relatedServices(service: Service, catalog: Service[]): Service[] {
  return service.related.flatMap((slug) => {
    const match = catalog.find((item) => item.slug === slug);
    return match ? [match] : [];
  });
}
