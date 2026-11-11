import { readFileSync, writeFileSync } from "node:fs";

const seo = {
  "enterprise-software-development": {
    seoTitle: "Enterprise Software Development Company | QNVO Technologies",
    description:
      "Custom enterprise software development services for internal tools, portals and system integrations. QNVO Technologies serves teams in the USA, UK, Middle East and Pakistan. Scope and fees are agreed in writing.",
    h1: "Enterprise Software Development Company Services",
    card: "Custom enterprise software development for defined workflows, portals and integrations with systems you already run.",
  },
  "ai-agent-development": {
    seoTitle: "AI Agent Development Company & Services | QNVO Technologies",
    description:
      "AI agent development services for bounded business tasks with approved data and human review. Discuss AI agent software with QNVO Technologies. No autonomous outcome or accuracy guarantees on this page.",
    h1: "AI Agent Development Company Services",
    card: "AI agent development for bounded tasks that use approved data and tools, then return a result a person can review.",
  },
  "ai-automation": {
    seoTitle: "AI Business Process Automation Services | QNVO Technologies",
    description:
      "AI automation services for documented business workflows and system hand-offs. QNVO Technologies helps connect steps you authorize — without inventing full autonomy or savings guarantees.",
    h1: "AI Business Process Automation Services",
    card: "AI business process automation that connects documented steps so routine hand-offs need less manual copying between systems.",
  },
  "erp-solutions": {
    seoTitle: "ERP Solutions & ERP Integration Services | QNVO Technologies",
    description:
      "ERP solutions and ERP integration services for finance, inventory and operations workflows. QNVO Technologies discusses configuration and connections for the ERP you use or choose.",
    h1: "ERP Solutions and ERP Integration Services",
    card: "ERP solutions and integration for finance, inventory or operations workflows in the ERP you use or choose.",
  },
  "ecommerce-development": {
    seoTitle: "Ecommerce Website Development Company | QNVO Technologies",
    description:
      "Ecommerce website development services for catalogues, checkout and payment connections. Talk to QNVO Technologies about ecommerce development for stores you can operate after handover.",
    h1: "Ecommerce Website Development Services",
    card: "Ecommerce website development for catalogue structure, purchasing flow and connections to payment or shipping providers you already use.",
  },
  "web-development": {
    seoTitle: "Web Development Company for Businesses | QNVO Technologies",
    description:
      "Web development company services for business websites, SEO-friendly structure, accessibility and speed. QNVO Technologies builds sites for teams in the USA, UK, Middle East and Pakistan.",
    h1: "Web Development Company Services for Businesses",
    card: "Business web development company services for server-rendered websites with clear navigation, accessibility and page speed.",
  },
  "technical-seo": {
    seoTitle: "Technical SEO Services for Google & Search | QNVO Technologies",
    description:
      "Technical SEO services for Google crawlability, metadata, structured data, internal links and page speed. QNVO Technologies does not guarantee rankings, traffic or a Google results position.",
    h1: "Technical SEO Services for Google and Search Engines",
    card: "Technical SEO for Google and search engines: crawl, metadata, structured data, internal links and page speed. Rankings are not guaranteed.",
  },
  "website-security-optimization": {
    seoTitle: "Website Security & Performance Optimization | QNVO Technologies",
    description:
      "Website security and performance optimization services: headers, forms, dependencies and page weight reviews on sites you authorize. Discuss website hardening with QNVO Technologies.",
    h1: "Website Security and Performance Optimization Services",
    card: "Website security and performance optimization — headers, forms, dependencies and page weight on a site you authorize us to inspect.",
  },
  "shopify-development": {
    seoTitle: "Shopify Development Company & Store Experts | QNVO Technologies",
    description:
      "Shopify development company services for Shopify storefronts, theme work and app connections. QNVO Technologies builds Shopify stores you can operate after handover — without revenue guarantees.",
    h1: "Shopify Development Company Services",
    card: "Shopify development company services for storefronts, theme work and app connections for catalogues you can operate after handover.",
  },
  "wordpress-development": {
    seoTitle: "WordPress Development Company & WooCommerce | QNVO Technologies",
    description:
      "WordPress development company services for WordPress websites and WooCommerce stores. Themes, plugins and hosting choices are named in a written scope with QNVO Technologies.",
    h1: "WordPress Development Company Services",
    card: "WordPress development company services for WordPress sites and WooCommerce stores with clear templates, updates and editor handover.",
  },
  "wix-development": {
    seoTitle: "Wix Website Development Company Services | QNVO Technologies",
    description:
      "Wix website development services for clear pages, forms and editor handover. Discuss Wix site structure with QNVO Technologies — without inventing unlimited design retainers.",
    h1: "Wix Website Development Company Services",
    card: "Wix website development for sites structured for clear pages, forms and editor handover — without inventing unlimited design retainers.",
  },
  "mobile-app-development": {
    seoTitle: "Mobile App Development Company Services | QNVO Technologies",
    description:
      "Mobile app development company services for iOS and Android apps with a defined user task, release and store constraints written into scope. Talk to QNVO Technologies.",
    h1: "Mobile App Development Company Services",
    card: "Mobile app development company services for applications with a defined user task, release and store constraints written into the scope.",
  },
  "cloud-devops": {
    seoTitle: "Cloud DevOps & Cloud Infrastructure Services | QNVO Technologies",
    description:
      "Cloud DevOps and cloud infrastructure services for environments, deployment pipelines and operational baselines on accounts you authorize. No invented uptime SLAs on this page.",
    h1: "Cloud DevOps and Cloud Infrastructure Services",
    card: "Cloud DevOps services for cloud environments, deployment pipelines and operational baselines — without invented uptime SLAs on this page.",
  },
  "cybersecurity-risk-management": {
    seoTitle: "Cybersecurity Risk Management Services | QNVO Technologies",
    description:
      "Cybersecurity and risk management services for security reviews and hardening on systems you authorize. QNVO Technologies does not publish fake grades or compliance guarantees here.",
    h1: "Cybersecurity and Risk Management Company Services",
    card: "Cybersecurity risk management services for security reviews and hardening — without fake grades or compliance guarantees on this page.",
  },
  "it-helpdesk-support": {
    seoTitle: "IT Helpdesk Support Services for Businesses | QNVO Technologies",
    description:
      "IT helpdesk and IT support services with named coverage and response expectations written into the agreement — not invented 24/7 claims on this QNVO Technologies page.",
    h1: "IT Helpdesk and Business IT Support Services",
    card: "IT helpdesk support services with named coverage for systems you operate — not invented 24/7 claims on this page.",
  },
  "data-backup-protection": {
    seoTitle: "Data Backup & Disaster Recovery Planning | QNVO Technologies",
    description:
      "Data backup and protection services for retention and recovery planning on data stores you authorize. QNVO Technologies does not invent zero-loss guarantees on this page.",
    h1: "Data Backup and Protection Services",
    card: "Data backup and protection services for retention and recovery planning — without inventing zero-loss guarantees on this page.",
  },
  "ai-machine-learning": {
    seoTitle: "AI and Machine Learning Development Services | QNVO Technologies",
    description:
      "AI and machine learning development services for defined prediction or classification tasks with evaluation data you can provide. Discuss applied AI with QNVO Technologies.",
    h1: "AI and Machine Learning Development Services",
    card: "AI and machine learning development for a defined prediction or classification task with evaluation data you can provide.",
  },
  "digital-marketing": {
    seoTitle: "Digital Marketing Services & Campaign Setup | QNVO Technologies",
    description:
      "Digital marketing services for campaign planning and setup you authorize. QNVO Technologies does not guarantee Google rankings, leads or revenue on this page.",
    h1: "Digital Marketing Services for Business Growth",
    card: "Digital marketing services for planning and setup of campaigns you authorize — without guaranteed rankings, leads or revenue on this page.",
  },
  "saas-development": {
    seoTitle: "SaaS Product Development Company Services | QNVO Technologies",
    description:
      "SaaS development company services for multi-tenant software products with accounts, billing hooks and operational basics named in scope. Discuss SaaS product engineering with QNVO Technologies.",
    h1: "SaaS Product Development Company Services",
    card: "SaaS product development for multi-tenant software with accounts, billing hooks and operational basics named in the written scope.",
  },
  "api-development-integration": {
    seoTitle: "API Development & System Integration Services | QNVO Technologies",
    description:
      "API development and system integration services for HTTP APIs with auth, error handling and documentation. Connect systems you authorize with QNVO Technologies.",
    h1: "API Development and System Integration Services",
    card: "API development and system integration for HTTP APIs and connections with auth, error handling and documentation you authorize.",
  },
  "database-management": {
    seoTitle: "Database Management & Performance Services | QNVO Technologies",
    description:
      "Database management and database optimization services for design, performance review and operational hygiene on data stores you authorize.",
    h1: "Database Management and Optimization Services",
    card: "Database management services for design, performance review and operational hygiene for data stores you authorize.",
  },
  "ui-ux-design": {
    seoTitle: "UI UX Design Agency Services for Products | QNVO Technologies",
    description:
      "UI and UX design services for interface structure, wireframes and UI design for flows you can describe. QNVO Technologies does not promise vanity awards or conversion guarantees.",
    h1: "UI and UX Design Services for Digital Products",
    card: "UI UX design services for interface structure, wireframes and UI design — without vanity awards or conversion guarantees.",
  },
  "iot-solutions": {
    seoTitle: "IoT Solutions & Connected Device Services | QNVO Technologies",
    description:
      "IoT solutions and connected device services for device workflows, security and update constraints written into scope. Discuss IoT software with QNVO Technologies.",
    h1: "IoT Solutions and Connected Device Services",
    card: "IoT solutions for connected device workflows with security and update constraints written into the scope.",
  },
};

function patchFile(filePath) {
  let src = readFileSync(filePath, "utf8");
  let changed = 0;

  for (const [slug, fields] of Object.entries(seo)) {
    const start = src.indexOf(`slug: "${slug}"`);
    if (start < 0) {
      console.log("MISS", slug, filePath);
      continue;
    }
    const end = src.indexOf("slug: \"", start + 10);
    const blockEnd = end < 0 ? src.length : end;
    let block = src.slice(start, blockEnd);

    block = block
      .replace(/card: "[^"]*"/, `card: "${fields.card}"`)
      .replace(/seoTitle: "[^"]*"/, `seoTitle: "${fields.seoTitle}"`)
      .replace(/description:\s*\n\s*"[^"]*"/, `description:\n      "${fields.description}"`)
      .replace(/h1: "[^"]*"/, `h1: "${fields.h1}"`);

    src = src.slice(0, start) + block + src.slice(blockEnd);
    changed += 1;
  }

  writeFileSync(filePath, src);
  console.log(filePath, "patched", changed);
}

patchFile("content/services.ts");
patchFile("content/services-extended.ts");
