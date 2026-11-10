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
  audience: string;
  deliverables: string[];
  approach: string[];
  faqs: Faq[];
  related: string[];
  icon: string;
};

export function servicesInOrder(list: Service[]): Service[] {
  return [...list].sort((a, b) => Number(!a.slug.startsWith("ai-")) - Number(!b.slug.startsWith("ai-")));
}

export const services: Service[] = [
  {
    slug: "enterprise-software-development",
    title: "Enterprise software",
    card: "Custom systems for a defined workflow, including internal tools, portals and connections to software you already run.",
    seoTitle: "Enterprise Software Development | QNVO",
    description:
      "Plan and build custom enterprise software, integrations and handover notes with QNVO Technologies. Scope, fees and timelines are agreed in writing.",
    h1: "Enterprise Software Development Services",
    summary:
      "Enterprise software development at QNVO Technologies means designing and building custom systems for a defined business workflow, such as an internal tool, a portal or a connection to software you already run. It is for teams that can describe who will use the system. Contact QNVO Technologies to discuss requirements. Deliverables and fees are set in a project agreement, not on this page.",
    audience:
      "Operations, product and technology leads who need software shaped around a process. A useful first conversation names the users, the data involved and the systems that must connect. A finished specification is not required before that conversation.",
    deliverables: [
      "A written outline of the problem, users and constraints",
      "An implementation plan tied to an agreed scope",
      "The application or integration described in that scope",
      "Handover notes the agreement calls for, such as access and what was built",
    ],
    approach: [
      "Confirm the workflow in plain language before proposing software",
      "Identify the data, permissions and existing systems the work depends on",
      "Build in the review steps named in the agreement",
      "Hand over only what the agreement includes",
    ],
    faqs: [
      {
        question: "Do you sell a ready-made enterprise product?",
        answer:
          "This page describes custom development and integration. QNVO Technologies does not publish a packaged product, a price list or a license here. If a third-party product is part of the work, that choice is made with you and written into the scope.",
      },
      {
        question: "Can you work with the systems we already use?",
        answer:
          "Often, when those systems provide access such as an API, an export or a supported integration and you can authorize it. If a system cannot be connected, that limit is raised during scoping rather than assumed away.",
      },
    ],
    related: ["web-development", "erp-solutions", "website-security-optimization"],
    icon: "/icons/icon-enterprise-software.svg",
  },
  {
    slug: "ai-agent-development",
    title: "AI agent development",
    card: "Bounded AI tasks that use approved data and tools, then return a result a person can review.",
    seoTitle: "AI Agent Development Services | QNVO",
    description:
      "Design AI agents for defined tasks, approved data and human review. QNVO Technologies discusses scope before any build and makes no autonomous outcome claims.",
    h1: "AI Agent Development Services",
    summary:
      "AI agent development means software that can carry out a bounded task using instructions, approved data and tools you allow, then return a result a person can check. It is for teams with a repeatable task and a clear definition of done. Contact QNVO Technologies to discuss the task. QNVO Technologies does not claim an agent that runs a business on its own.",
    audience:
      "Teams that can point to a task with known inputs, allowed sources and a person who reviews the output. An agent is a poor fit when the task is undefined or when a wrong answer would be acted on with no review.",
    deliverables: [
      "A written description of the task, inputs, limits and review step",
      "An agent design that uses only the tools and data you approve",
      "An implementation of that design, if you agree a build scope",
      "Notes on how a person checks the result before it is used",
    ],
    approach: [
      "Define the task and the definition of done before choosing a model or tool",
      "List the data and actions the agent may use, and what it must not do",
      "Keep a human checkpoint where the outcome matters",
      "Treat evaluation and failure cases as part of the scope, not an afterthought",
    ],
    faqs: [
      {
        question: "Will the agent make business decisions for us?",
        answer:
          "No. The service is scoped as software that prepares or carries out a defined task and returns something a person can review. Authority to act stays with your organization unless a separate agreement says otherwise.",
      },
      {
        question: "Do you guarantee accuracy?",
        answer:
          "No. Model output can be wrong or incomplete. The engagement is about the task design, the allowed data and the review step. It is not a promise of accuracy, savings or a particular model.",
      },
    ],
    related: ["ai-automation", "enterprise-software-development"],
    icon: "/icons/icon-ai-agents.svg",
  },
  {
    slug: "ai-automation",
    title: "AI automation",
    card: "Connect documented business steps so routine hand-offs need less manual copying between systems.",
    seoTitle: "AI Automation Services | QNVO",
    description:
      "Automate documented business steps and system hand-offs with QNVO Technologies. We do not promise time saved, cost reduction or a specific tool.",
    h1: "AI Automation Services",
    summary:
      "AI automation means connecting a documented process so routine steps need less manual copying between systems. It is for teams that can describe the steps, the exceptions and who remains responsible for the result. Contact QNVO Technologies with the process you want to review. We do not promise a percentage of time or cost saved.",
    audience:
      "Operations teams with a process that is already written down, including what happens when a step fails. Automation of an unclear process usually spreads the confusion rather than removing it.",
    deliverables: [
      "A map of the current steps, exceptions and responsible roles",
      "A proposal for which steps can be assisted or connected",
      "The automation described in an agreed scope",
      "A short operating note for the people who still own the outcome",
    ],
    approach: [
      "Start from the process you run today, including exceptions",
      "Separate steps a person must still approve from steps that can move automatically",
      "Connect systems only where access and error handling are clear",
      "Leave room in the scope to stop a step that behaves unexpectedly",
    ],
    faqs: [
      {
        question: "Is automation the same as an AI agent?",
        answer:
          "They overlap, and they are not the same engagement. Automation here means connecting documented steps and system hand-offs. An AI agent engagement is for a bounded task with a reviewable result. A project can include both only when the scope says so.",
      },
      {
        question: "Which automation product do you require?",
        answer:
          "None is mandated on this website. Tool choice depends on the systems you already use and the access you can grant. The choice belongs in the written scope.",
      },
    ],
    related: ["ai-agent-development", "erp-solutions"],
    icon: "/icons/icon-ai-automation.svg",
  },
  {
    slug: "erp-solutions",
    title: "ERP solutions",
    card: "Configuration and integration for finance, inventory or operations workflows in the ERP you use or choose.",
    seoTitle: "ERP Solutions & Integration | QNVO",
    description:
      "Discuss ERP configuration and integration around the systems you use. QNVO Technologies does not claim vendor partnerships or name a single required product.",
    h1: "ERP Solutions and Integration Services",
    summary:
      "ERP work at QNVO Technologies covers discussion, configuration and integration of enterprise resource planning workflows such as finance, inventory or operations. It is for organizations that already use an ERP or are choosing one. Contact QNVO Technologies before assuming a product fit. We do not claim to be a vendor partner, and we do not name one product as the only option.",
    audience:
      "Finance, operations and IT leads who can describe the process they need the ERP to support and who can grant access to the product they use or plan to use.",
    deliverables: [
      "A process summary tied to the ERP areas in scope",
      "A configuration or integration plan for the product you select",
      "The agreed configuration, import or integration work",
      "Handover notes for the administrators you name",
    ],
    approach: [
      "Start with the business process, then the product screens and data",
      "Confirm license, environment and access limits before build work",
      "Change configuration in the environment the agreement names",
      "Document what was changed so your administrators can support it",
    ],
    faqs: [
      {
        question: "Are you a reseller for a specific ERP?",
        answer:
          "This website does not claim a reseller agreement, a vendor partnership or a preferred product. If a project uses a named ERP, that product is the one you already have or the one you choose in the scope.",
      },
      {
        question: "Can every module be included?",
        answer:
          "No. Finance, inventory, projects and other modules are included only when they are written into the scope. A general ERP conversation does not mean every module is in the engagement.",
      },
    ],
    related: ["enterprise-software-development", "ai-automation"],
    icon: "/icons/icon-erp.svg",
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce development",
    card: "Catalogue structure, purchasing flow and connections to payment or shipping providers you already use.",
    seoTitle: "Ecommerce Development Services | QNVO",
    description:
      "Plan ecommerce websites, catalogue structure and checkout integrations with QNVO Technologies. We do not promise sales, revenue or a specific platform.",
    h1: "Ecommerce Development Services",
    summary:
      "Ecommerce development covers the website and purchasing flow for selling online: catalogue structure, product information, checkout considerations and connections you specify, such as payment or shipping providers you already use. It is for businesses that can describe what they sell and how an order should be handled. Contact QNVO Technologies to discuss the catalogue. We do not promise revenue.",
    audience:
      "Teams that can explain the products, the markets they sell to, tax and shipping constraints they already know, and which payment provider they intend to use.",
    deliverables: [
      "A catalogue and page outline for the products in scope",
      "A storefront implementation of that outline",
      "Connections to the payment, tax or shipping providers named in the scope, where those providers allow it",
      "Handover notes for the people who will add products after launch",
    ],
    approach: [
      "Confirm what is sold, to whom, and what the order flow must record",
      "Use the commerce platform and payment provider you can contract with",
      "Keep product data editable by your team where the scope includes that",
      "Treat taxes, shipping and refunds as explicit scope items, not assumptions",
    ],
    faqs: [
      {
        question: "Do you guarantee online sales?",
        answer:
          "No. The service is the storefront and the integrations in the agreement. Traffic, conversion and revenue depend on the offer, the market and work that may sit outside the scope.",
      },
      {
        question: "Which store platform is required?",
        answer:
          "This website does not require one platform. The platform is chosen from what you can license and operate, and it is named in the scope before build work is treated as agreed.",
      },
    ],
    related: ["web-development", "technical-seo"],
    icon: "/icons/icon-ecommerce.svg",
  },
  {
    slug: "web-development",
    title: "Web development",
    card: "Business websites with server-rendered pages, clear navigation and attention to accessibility and speed.",
    seoTitle: "Web Development Services | QNVO",
    description:
      "Build business websites with clear structure, accessibility and performance in mind. Talk to QNVO Technologies about the pages and content you need.",
    h1: "Web Development Services",
    summary:
      "Web development at QNVO Technologies means planning and building a business website with server-rendered content, clear navigation and attention to accessibility and speed. It is for organizations that need a site people and search engines can read. Contact QNVO Technologies with the pages you need. This website describes the approach. It is not a client case study.",
    audience:
      "Organizations that can say who the site is for and which tasks a visitor should be able to complete, such as understanding a service or sending an enquiry.",
    deliverables: [
      "A page map and content outline",
      "A responsive implementation of the agreed pages",
      "Metadata, headings and internal links for those pages",
      "A handover of the repository or hosting access named in the agreement",
    ],
    approach: [
      "Write the content structure before decorating the page",
      "Keep primary information in HTML rather than in animation or files",
      "Check keyboard use, labels, contrast and reduced-motion behavior on the agreed pages",
      "Measure performance on the pages in scope instead of claiming a score in advance",
    ],
    faqs: [
      {
        question: "Is this marketing site an example of client work?",
        answer:
          "No. revamp.qnvotech.com is the QNVO Technologies website. The Work page presents the BMS and CSM platforms as case studies. It does not present this site as client work.",
      },
      {
        question: "Do you include copywriting?",
        answer:
          "Only when the scope says so. You can supply the copy, or a writing task can be described as its own deliverable. This page does not assume an unlimited content engagement.",
      },
    ],
    related: ["technical-seo", "website-security-optimization", "ecommerce-development"],
    icon: "/icons/icon-web-development.svg",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    card: "Crawl, metadata, structured data, internal links and page speed. Search rankings are not guaranteed.",
    seoTitle: "Technical SEO Services | QNVO",
    description:
      "Improve crawlability, metadata, structured data and page speed with QNVO Technologies. We do not guarantee search rankings, traffic or a results position.",
    h1: "Technical SEO Services",
    summary:
      "Technical SEO is the work of making a website easier for search engines to crawl, understand and load. That includes indexation, metadata, structured data, internal links and performance. It is for teams that already have a site or are building one. Contact QNVO Technologies about the domain you control. QNVO Technologies does not guarantee rankings or traffic.",
    audience:
      "Marketing and engineering leads who can provide access to the site, the sitemap and the search-console property for the domain they own. The work does not include buying links or publishing unverified claims.",
    deliverables: [
      "A review of crawl, indexation, metadata, structured data and internal links",
      "A prioritized list of changes, separated into what is agreed for implementation",
      "Implementation of the items named in the scope",
      "Notes on how to recheck those items after release",
    ],
    approach: [
      "Read the current templates and response headers before recommending tags",
      "Prefer one clear title, description and canonical per URL",
      "Add structured data only for content that is visible on the page",
      "Treat rankings as an outcome we do not control and do not promise",
    ],
    faqs: [
      {
        question: "Can you guarantee the first page of Google?",
        answer:
          "No. Technical SEO removes barriers that stop pages from being crawled and understood. It does not control the ranking algorithm, competitors or demand for a query.",
      },
      {
        question: "Do you write misleading schema or reviews?",
        answer:
          "No. Structured data on a QNVO engagement should match content a visitor can see. Invented reviews, ratings, prices or organization details are out of scope.",
      },
    ],
    related: ["web-development", "website-security-optimization"],
    icon: "/icons/icon-technical-seo.svg",
  },
  {
    slug: "website-security-optimization",
    title: "Website security and optimization",
    card: "A review of headers, forms, dependencies and page weight on a website you authorize us to inspect.",
    seoTitle: "Website Security & Optimization | QNVO",
    description:
      "Review website headers, forms, dependencies and performance with QNVO Technologies. This is not a certification, a penetration-test badge or a compliance guarantee.",
    h1: "Website Security and Optimization",
    summary:
      "Website security and optimization means reviewing how a site is exposed and how it performs, including transport, headers, form handling, dependencies and page weight, then agreeing what to change. It is for organizations that own a website and can provide review access. Contact QNVO Technologies about the site you control. This is not a certification or a promise of compliance.",
    audience:
      "Site owners and engineering leads who can share a staging environment or a defined production scope, and who can approve changes before they ship.",
    deliverables: [
      "A review of the agreed surfaces, such as headers, forms, dependencies or page weight",
      "Findings written so a developer can reproduce the issue",
      "Fixes for the findings the agreement includes",
      "A short retest note for those fixes",
    ],
    approach: [
      "Limit the review to hosts and paths you authorize",
      "Prefer concrete fixes over a generic score",
      "Keep secrets, tokens and customer data out of tickets and email threads",
      "Separate a website review from a formal audit, certification or legal opinion",
    ],
    faqs: [
      {
        question: "Is this a penetration test or a compliance certificate?",
        answer:
          "No. The service described here is a website review and the fixes you agree. A penetration test, a certification or a legal compliance opinion would need its own scope and is not claimed on this page.",
      },
      {
        question: "Will you test systems you were not given?",
        answer:
          "No. Work stays on the environments and URLs in the agreement. Finding a related host is a reason to stop and ask, not a reason to continue without permission.",
      },
    ],
    related: ["web-development", "technical-seo"],
    icon: "/icons/icon-security-optimization.svg",
  },
];

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
      "Prices, team size, founding year and testimonials are not published. The Work page presents two platforms, BMS and CSM (Cognitive Security Management). They are not framed as QNVO client wins. CSM names organizations the platform serves. Measured results are published only when they are real and permissioned.",
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
      "A security management platform. Modules include security controls and System Security Plan (SSP) workflows for the organizations it serves.",
    what: "CSM (Cognitive Security Management) is a security management platform that provides security to organizations. Organizations it serves include VITA (Virginia Information Technologies Agency) and Chesterfield County, Virginia. Its modules include security controls and SSP (System Security Plan) modules, with additional modules around them.",
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
      "No outcome metric or testimonial is claimed here. The organizations named (VITA, Chesterfield County) are those the CSM platform serves. Measured results are published only when they are real and permissioned.",
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
      "CSM stands for Cognitive Security Management. It is a security management platform that provides security to organizations, including VITA (Virginia Information Technologies Agency) and Chesterfield County, Virginia. Its modules include security controls and SSP (System Security Plan) modules.",
  },
  {
    question: "Are BMS and CSM QNVO clients?",
    answer:
      "No. BMS and CSM are presented here as enterprise platform case studies — the platforms and the work they involve — not as invented QNVO client wins. Organizations named on this page (VITA, Chesterfield County) are those the CSM platform serves. Measured results and testimonials are published only when real and permissioned.",
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
