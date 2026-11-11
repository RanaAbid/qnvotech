import type { Service } from "@/lib/data";

/**
 * Additional service areas: platform CMS/commerce work requested for the catalog,
 * plus capability areas aligned with common IT service menus (without copying
 * third-party marketing claims, prices, 24/7 guarantees or testimonials).
 */
export const extendedServiceCatalog: Service[] = [
  {
    slug: "shopify-development",
    title: "Shopify development",
    card: "Shopify development company services for storefronts, theme work and app connections for catalogues you can operate after handover.",
    seoTitle: "Shopify Development Company & Store Experts | QNVO Technologies",
    description:
      "Shopify development company services for Shopify storefronts, theme work and app connections. QNVO Technologies builds Shopify stores you can operate after handover — without revenue guarantees.",
    h1: "Shopify Development Company Services",
    summary:
      "Shopify development company services at QNVO Technologies mean planning and building a Shopify storefront for a catalogue you can describe: theme structure, product templates, checkout considerations and app connections you authorize. It is for teams that can name what they sell, how orders are fulfilled and who will edit products after launch. Contact QNVO Technologies to discuss Shopify store development. This page does not promise revenue, conversion rates, Google rankings or a partner badge. Fees and timelines belong in a written agreement after the scope is clear.",
    problem:
      "Stores stall when product data is incomplete, themes fight the catalogue, apps pile up without an owner, or checkout cannot record what operations needs after payment. Marketing wants campaign pages engineering cannot maintain. Migrations move fields without cleanup rules. This service focuses on a Shopify storefront shaped around your catalogue, fulfilment path and the apps you can actually operate — without promising sales volume or inventing a required app stack on this website.",
    audience:
      "Merchandising and operations leads who can explain products, markets, tax and shipping constraints they already know, and who will administer Shopify after launch. Finance or legal input helps when refunds or restricted goods matter. The service is a poor fit when nobody owns product data or when the ask is only to make a store sell without an offer and fulfilment path.",
    deliverables: [
      "A catalogue and page outline for the products, collections and templates in scope",
      "Theme or Online Store implementation of that outline on a Shopify store you control",
      "Connections to payment, tax, shipping or apps named in the scope where those providers allow it",
      "Editorial guidance for the people who will add or update products after launch",
      "Handover notes for admin access named in the agreement",
      "A launch checklist covering payment modes, domains and the URLs you authorize",
      "Redirect or migration notes when an existing catalogue or URL set is in scope",
    ],
    approach: [
      "Confirm what is sold, to whom, and what the order flow must record for operations",
      "Use a Shopify store and apps you can license and operate",
      "Keep product data editable by your team where the scope includes that responsibility",
      "Treat taxes, shipping, refunds and restricted goods as explicit scope items",
      "Build and test checkout in a non-production mode first when Shopify and providers allow it",
    ],
    process: [
      "List products, variants and the fields operations needs after an order is paid.",
      "Confirm the Shopify plan and apps you can license, then write them into the scope.",
      "Confirm payment, tax and shipping providers before treating checkout as agreed.",
      "Implement theme templates and catalogue structure against the written outline.",
      "Train or document how your team adds products without developer help, if that is in scope.",
      "Agree redirects and field mappings when migrating from an existing catalogue.",
      "Launch only the surfaces and providers named in the agreement.",
    ],
    technologies: [
      "Shopify Online Store and admin workflows you license",
      "Theme development with Liquid, HTML and CSS when a custom theme is in scope",
      "Shopify apps and payment providers you authorize",
      "Metafields and catalogue structures your team can maintain",
      "Optional Hydrogen or headless approaches only when named in the written scope",
      "Staging and payment test modes before production cutover",
    ],
    faqs: [
      {
        question: "Do you guarantee online sales on Shopify?",
        answer:
          "No. The service is the storefront and the integrations in the agreement. Traffic, conversion and revenue depend on the offer, the market and work that may sit outside the scope.",
      },
      {
        question: "Are you a published Shopify Partner on this page?",
        answer:
          "This website does not invent partner badges or certification claims. Platform access and account ownership stay with you unless the agreement says otherwise.",
      },
      {
        question: "Can our team edit products after launch?",
        answer:
          "Yes when the scope includes admin handover and editable catalogue fields. Unlimited content redesign or photography is not implied by a theme build alone.",
      },
      {
        question: "Will you migrate an existing catalogue into Shopify?",
        answer:
          "Migration can be included when the source, field mapping and cleanup rules are written into the scope. Incomplete source data remains your cleanup responsibility unless the agreement says otherwise.",
      },
      {
        question: "Do you promise search rankings for product pages?",
        answer:
          "No. Technical SEO for storefront URLs can be a related engagement when scoped separately. This page does not guarantee rankings or traffic.",
      },
      {
        question: "Do you publish Shopify package prices here?",
        answer:
          "No. Fees and timelines depend on theme complexity, apps and the written scope. Quotes belong in a project conversation, not a public catalogue.",
      },
    ],
    related: ["ecommerce-development", "web-development", "technical-seo"],
    icon: "/icons/icon-shopify.svg",
  },
  {
    slug: "wordpress-development",
    title: "WordPress development",
    card: "WordPress development company services for WordPress sites and WooCommerce stores with clear templates, updates and editor handover.",
    seoTitle: "WordPress Development Company & WooCommerce | QNVO Technologies",
    description:
      "WordPress development company services for WordPress websites and WooCommerce stores. Themes, plugins and hosting choices are named in a written scope with QNVO Technologies.",
    h1: "WordPress Development Company Services",
    summary:
      "WordPress development company services at QNVO Technologies mean planning and building a WordPress website or WooCommerce store with templates, content structure and plugins you authorize. It is for teams that need editable pages, SEO-friendly structure where scoped, a clear navigation model and a handover their editors can use. Contact QNVO Technologies about the pages or catalogue you need. This page does not promise Google rankings, sales or an unlimited plugin stack. Hosting, licenses and fees belong in a written agreement.",
    problem:
      "WordPress projects fail when themes are overloaded with unused builders, plugins conflict, updates are skipped or content is trapped in shortcodes nobody owns. Security patches lag. Ecommerce add-ons record incomplete order data. This service plans templates, content types and the plugin set you can actually maintain — without treating plugin count as a quality metric or promising a results position in search.",
    audience:
      "Marketing and operations leads who can list the pages or products required, who will edit content after launch, and who can authorize hosting and update access. The service is a poor fit when nobody owns updates, when credentials cannot be shared safely, or when the brief is only to install everything without a page map.",
    deliverables: [
      "A page map and content model for the URLs or product types in scope",
      "Theme or block-template implementation on a WordPress install you control",
      "Plugin set limited to what the written scope names",
      "Form or WooCommerce checkout paths named in the scope, with spam or payment modes you authorize",
      "Editorial guidance for editors who will publish after handover",
      "Handover notes for admin, hosting and backup access named in the agreement",
      "Update and security baseline notes for the environment in scope",
    ],
    approach: [
      "Write the content structure before stacking page builders or plugins",
      "Prefer maintainable templates over one-off layouts that editors cannot change",
      "Limit plugins to those named in the scope with an owner for each",
      "Plan updates, backups and least-privilege admin roles before launch",
      "Measure performance on the pages in scope instead of claiming a score in advance",
    ],
    process: [
      "Agree audiences, page list and whether WooCommerce is in scope.",
      "Confirm hosting, PHP and WordPress versions you can operate.",
      "Implement templates and content types against the written outline.",
      "Install and configure only the plugins named in the scope.",
      "Review accessibility labels, forms and mobile layout on agreed pages.",
      "Document editor workflows and update responsibilities.",
      "Hand over admin access and the notes named in the agreement.",
    ],
    technologies: [
      "WordPress on hosting you control or authorize",
      "Block themes or classic themes named in the scope",
      "WooCommerce when ecommerce is explicitly included",
      "Forms and spam controls you authorize",
      "Caching and CDN options your host supports when named in scope",
      "Staging environments for theme and plugin changes before production",
    ],
    faqs: [
      {
        question: "Do you guarantee Google rankings with WordPress?",
        answer:
          "No. Technical SEO can be a related engagement. This WordPress page does not guarantee rankings, traffic or a results position.",
      },
      {
        question: "Will you maintain plugins forever as part of the build?",
        answer:
          "Ongoing updates and retainers are included only when the agreement says so. Otherwise handover covers how your team or host applies updates.",
      },
      {
        question: "Can you build WooCommerce stores?",
        answer:
          "Yes when WooCommerce is named in the scope with payment and shipping providers you can operate. Sales volume is not promised.",
      },
      {
        question: "Do you use a required page builder?",
        answer:
          "This website does not require one builder. The approach is chosen from what your editors can maintain and is written into the scope.",
      },
      {
        question: "Is security included?",
        answer:
          "A baseline of updates, roles and hardening for the install in scope can be included when named. Continuous monitoring or incident response is a separate conversation unless the agreement adds it.",
      },
      {
        question: "Do you publish WordPress package prices here?",
        answer: "No. Fees depend on templates, plugins and the written scope.",
      },
    ],
    related: ["web-development", "ecommerce-development", "website-security-optimization"],
    icon: "/icons/icon-wordpress.svg",
  },
  {
    slug: "wix-development",
    title: "Wix development",
    card: "Wix website development for sites structured for clear pages, forms and editor handover — without inventing unlimited design retainers.",
    seoTitle: "Wix Website Development Company Services | QNVO Technologies",
    description:
      "Wix website development services for clear pages, forms and editor handover. Discuss Wix site structure with QNVO Technologies — without inventing unlimited design retainers.",
    h1: "Wix Website Development Company Services",
    summary:
      "Wix development at QNVO Technologies means planning and building a Wix site with a page map, navigation and forms you can operate in the Wix editor after handover. It is for organizations that prefer a hosted editor model and can describe who the site is for. Contact QNVO Technologies with the pages you need. This page does not promise rankings, unlimited redesigns or a fixed public price. Platform billing stays with your Wix account unless the agreement says otherwise.",
    problem:
      "Wix projects stall when pages are added without a map, SEO fields are left as templates, forms have no inbox owner or mobile layout is an afterthought. Teams then cannot tell what is live versus draft. This service structures pages, navigation and forms on Wix for the tasks visitors must complete — without claiming that Wix is required for every QNVO project or promising search positions.",
    audience:
      "Owners and marketers who will edit the Wix site after launch and can name primary visitor tasks such as understanding a service or sending an enquiry. The service is a poor fit when nobody will own the Wix account or when the brief requires custom server software Wix cannot host.",
    deliverables: [
      "A page map and content outline for the URLs in scope",
      "Implementation on a Wix site you own or authorize",
      "Metadata and navigation for those pages",
      "Form paths named in the scope with an inbox owner you name",
      "Editor guidance for the people who will update content after handover",
      "Domain and publishing checklist items named in the agreement",
      "Notes on what sits outside Wix if a later custom build is needed",
    ],
    approach: [
      "Confirm visitor tasks before decorating the page",
      "Keep primary information readable without relying on animation alone",
      "Configure forms only for paths you authorize",
      "Use Wix SEO settings for titles and descriptions on pages in scope",
      "Hand over editor access so your team can change copy without a developer for routine edits",
    ],
    process: [
      "Agree audiences, page list and the Wix account that will own the site.",
      "Draft information architecture and content ownership.",
      "Build pages and navigation in the Wix editor against the outline.",
      "Wire forms and notifications only for authorized paths.",
      "Review mobile layout and basic accessibility labels on agreed pages.",
      "Publish with the domain and checklist items named in scope.",
      "Hand over editor roles and the documentation named in the agreement.",
    ],
    technologies: [
      "Wix site and editor features you license",
      "Wix forms and inbox integrations you authorize",
      "Wix SEO fields for titles, descriptions and indexation settings on pages in scope",
      "Optional Wix ecommerce features only when named in the written scope",
      "Custom code embeds only when you authorize them and accept maintenance limits",
      "Domain and SSL settings through Wix or your DNS host as scoped",
    ],
    faqs: [
      {
        question: "Is Wix required for every QNVO website?",
        answer:
          "No. Wix is one option for teams that want a hosted editor. Custom web development and other CMS options are separate service pages.",
      },
      {
        question: "Do you guarantee search rankings on Wix?",
        answer:
          "No. Technical SEO practices can be applied within Wix limits. Rankings and traffic are not promised.",
      },
      {
        question: "Can our team edit the site after launch?",
        answer:
          "Yes when editor roles are included in handover. Unlimited design retainers are not implied.",
      },
      {
        question: "What if we outgrow Wix later?",
        answer:
          "A later migration to another stack can be a separate engagement. This page does not assume that migration is free with the first build.",
      },
      {
        question: "Do you include ecommerce on Wix?",
        answer:
          "Only when ecommerce is named in the scope with products and payment settings you can operate.",
      },
      {
        question: "Do you publish Wix package prices here?",
        answer: "No. Fees and timelines depend on page count and the written scope.",
      },
    ],
    related: ["web-development", "technical-seo", "ecommerce-development"],
    icon: "/icons/icon-wix.svg",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile app development",
    card: "Mobile app development company services for applications with a defined user task, release and store constraints written into the scope.",
    seoTitle: "Mobile App Development Company Services | QNVO Technologies",
    description:
      "Mobile app development company services for iOS and Android apps with a defined user task, release and store constraints written into scope. Talk to QNVO Technologies.",
    h1: "Mobile App Development Company Services",
    summary:
      "Mobile app development at QNVO Technologies means designing and building an application for phones or tablets around a user task you can describe, including data, accounts and release constraints you authorize. It is for teams that know who will use the app and what “done” means for the first release. Contact QNVO Technologies to discuss the task. This page does not promise store rankings, download volume or a required native stack. Platform accounts, certificates and fees belong in a written agreement.",
    problem:
      "Mobile projects stall when the task is vague, offline rules are undefined, push notifications are bolted on without consent, or store review requirements are discovered after build. Teams then rewrite core flows under deadline pressure. This service starts with the user task, data and release path — not with a slogan about high performance. Web and responsive sites remain a separate service when an app store binary is not required.",
    audience:
      "Product and operations leads who can name the users, the primary task, and who will own App Store or Google Play accounts. Security and privacy owners should join when personal data or device permissions are involved. The service is a poor fit when nobody owns store publishing or when the ask is only an unlimited feature wishlist without a first-release boundary.",
    deliverables: [
      "A written outline of users, tasks, permissions, offline rules and non-goals for the first release",
      "An implementation plan tied to platforms named in the scope",
      "The application build described in that scope for the platforms agreed",
      "API or backend connections you authorize, including error handling expectations",
      "Store listing and release checklist items named in the agreement",
      "Handover notes for repositories, certificates and accounts named in scope",
      "A short operating note for the roles that will support the app after release",
    ],
    approach: [
      "Confirm the primary mobile task before proposing frameworks or animations",
      "Name iOS, Android or both in the written scope with store account ownership",
      "Limit device permissions to what the task requires and document why",
      "Plan review checkpoints for builds you can install before store submission",
      "Treat store review outcomes as external processes we do not control or guarantee",
    ],
    process: [
      "Capture users, tasks, data and what must never happen on a device.",
      "Confirm target platforms, store accounts and privacy disclosures required.",
      "Agree the first-release boundary and non-goals in writing.",
      "Implement in reviewable increments against the written scope.",
      "Test on devices you authorize, including at least one failure path.",
      "Prepare store metadata and compliance items named in the agreement.",
      "Hand over builds, notes and access named in scope — nothing more by implication.",
    ],
    technologies: [
      "Native or cross-platform stacks named in the written scope",
      "TypeScript-based mobile frameworks when that approach fits the agreement",
      "HTTPS APIs and authentication flows you authorize",
      "Push notification providers only when consent and scope include them",
      "Crash and analytics tooling you authorize, with privacy constraints noted",
      "CI signing and release pipelines when included in the agreement",
    ],
    faqs: [
      {
        question: "Do you guarantee App Store or Play Store approval?",
        answer:
          "No. Store review is controlled by Apple, Google or other distributors. We prepare the items named in the scope and raise known policy risks during planning.",
      },
      {
        question: "Is a mobile app always better than a website?",
        answer:
          "Not always. If the task works in a browser, web development may be enough. An app is discussed when device capabilities, offline use or store distribution are required.",
      },
      {
        question: "Which framework do you require?",
        answer:
          "This website does not require one framework. The stack is chosen for the platforms, team skills and maintenance model you can support, then written into the scope.",
      },
      {
        question: "Do you publish download or revenue forecasts?",
        answer: "No. Download counts, rankings and revenue are not promised on this page.",
      },
      {
        question: "Who owns the store accounts?",
        answer:
          "You do, unless the agreement explicitly says otherwise. Certificates and listing ownership should stay with your organization whenever possible.",
      },
      {
        question: "Do you publish mobile package prices here?",
        answer: "No. Fees and timelines depend on platforms, integrations and the written scope.",
      },
    ],
    related: ["web-development", "saas-development", "api-development-integration"],
    icon: "/icons/icon-mobile-app.svg",
  },
  {
    slug: "cloud-devops",
    title: "Cloud and DevOps",
    card: "Cloud DevOps services for cloud environments, deployment pipelines and operational baselines — without invented uptime SLAs on this page.",
    seoTitle: "Cloud DevOps & Cloud Infrastructure Services | QNVO Technologies",
    description:
      "Cloud DevOps and cloud infrastructure services for environments, deployment pipelines and operational baselines on accounts you authorize. No invented uptime SLAs on this page.",
    h1: "Cloud DevOps and Cloud Infrastructure Services",
    summary:
      "Cloud and DevOps work at QNVO Technologies means helping you set up or improve cloud environments, deployment pipelines and operational baselines for applications you own. It is for teams that can authorize cloud accounts and name who approves production changes. Contact QNVO Technologies about the systems in scope. This page does not publish uptime percentages, infinite scale claims or a required cloud vendor. Fees and change windows belong in a written agreement.",
    problem:
      "Releases become risky when environments differ, secrets live in chat, deployments are manual or nobody can roll back safely. Cloud bills grow while ownership of resources stays unclear. This service focuses on environments, pipelines and least-privilege access for systems you authorize — without promising that every workload belongs in the cloud or inventing a public SLA on this website.",
    audience:
      "Engineering and IT leads who control cloud accounts or can grant break-glass access, and who can name production owners. The service is a poor fit when nobody may approve infrastructure changes or when the ask is only cheaper hosting without an application owner.",
    deliverables: [
      "An environment map for the accounts and applications named in the scope",
      "Infrastructure or configuration changes agreed for those environments",
      "A deployment pipeline or runbook for the release path in scope",
      "Secrets and access notes using least privilege for roles you name",
      "Rollback or recovery steps named in the agreement",
      "Handover of console access and documentation named in scope",
      "A short operating note for who may approve production changes",
    ],
    approach: [
      "Inventory what already runs before proposing new cloud services",
      "Prefer repeatable configuration over one-off console clicks when scope allows",
      "Separate non-production and production access with named owners",
      "Keep secrets out of source repositories, tickets and chat threads",
      "Treat vendor outages and quotas as external limits we do not control",
    ],
    process: [
      "Confirm cloud accounts, regions and who may approve changes.",
      "Document current deploy and rollback paths for apps in scope.",
      "Agree the first improvements versus later backlog items in writing.",
      "Implement environment and pipeline changes in reviewable steps.",
      "Verify a non-production deploy before touching production when possible.",
      "Record residual risks that remain outside the agreement.",
      "Hand over access and notes named in scope.",
    ],
    technologies: [
      "Cloud providers you already use or can contract with",
      "Infrastructure as code tools when named in the written scope",
      "CI/CD pipelines on hosts you authorize",
      "Container or serverless runtimes only when the application fit is agreed",
      "Logging and monitoring tools you authorize",
      "Secret managers or environment-based configuration for credentials",
    ],
    faqs: [
      {
        question: "Do you guarantee 99.99% uptime?",
        answer:
          "No. This website does not publish uptime SLAs. Availability depends on vendors, architecture and the written agreement if any commercial SLA is negotiated separately.",
      },
      {
        question: "Which cloud vendor is required?",
        answer:
          "None is required on this page. Work follows accounts and regions you can authorize. Multi-cloud is not assumed free with every engagement.",
      },
      {
        question: "Will you manage our cloud forever?",
        answer:
          "Ongoing operations are included only when the agreement says so. Otherwise handover covers how your team operates what was configured.",
      },
      {
        question: "Can you reduce our cloud bill?",
        answer:
          "Cost review can be in scope when you authorize billing access. Savings are not promised as a fixed percentage on this website.",
      },
      {
        question: "Do you deploy without our approval?",
        answer:
          "Production changes follow the approval path named in the agreement. Silent production access is not part of how this service is described.",
      },
      {
        question: "Do you publish DevOps package prices here?",
        answer: "No. Fees depend on environments, risk and the written scope.",
      },
    ],
    related: ["saas-development", "website-security-optimization", "data-backup-protection"],
    icon: "/icons/icon-cloud-devops.svg",
  },
  {
    slug: "cybersecurity-risk-management",
    title: "Cybersecurity and risk",
    card: "Cybersecurity risk management services for security reviews and hardening — without fake grades or compliance guarantees on this page.",
    seoTitle: "Cybersecurity Risk Management Services | QNVO Technologies",
    description:
      "Cybersecurity and risk management services for security reviews and hardening on systems you authorize. QNVO Technologies does not publish fake grades or compliance guarantees here.",
    h1: "Cybersecurity and Risk Management Company Services",
    summary:
      "Cybersecurity and risk work at QNVO Technologies means reviewing and hardening systems you authorize so common weaknesses are reduced and residual risk is written down. It is for teams that can grant access and name owners for findings. Contact QNVO Technologies about the hosts or applications in scope. This page does not guarantee that you will never be breached, does not sell a compliance certificate on its own and does not invent public letter grades. Fees belong in a written agreement.",
    problem:
      "Organizations accumulate risk when access is shared, patches lag, logs are unread or third-party scripts expand without owners. Marketing sometimes wants a badge more than a fix list. This service focuses on authorized reviews, prioritized fixes and clear residual risk — without claiming continuous 24/7 monitoring unless that is separately agreed, and without inventing vulnerability counts for marketing.",
    audience:
      "IT, security and business owners who can authorize scanning or review of named systems and who will own remediation decisions. Legal or compliance stakeholders should join when a framework is in scope. The service is a poor fit when access cannot be granted or when the only request is a public “secure” badge without fixing anything.",
    deliverables: [
      "A written scope naming systems, methods and out-of-bounds rules",
      "Findings prioritized by impact and exploitability for those systems",
      "Remediation of items named for implementation in the agreement",
      "Access and configuration hardening steps you authorize",
      "A residual-risk note for issues deferred or accepted",
      "Retest notes for fixes that shipped",
      "Handover of reports to the owners you name — not published as marketing scores",
    ],
    approach: [
      "Authorize scope before scanning or changing production systems",
      "Prefer fixing high-impact issues over cosmetic score chasing",
      "Separate advisory findings from changes you ask us to implement",
      "Document residual risk instead of implying zero risk",
      "Treat compliance attestations as separate work unless the agreement includes them",
    ],
    process: [
      "Confirm systems, environments and rules of engagement in writing.",
      "Review or test only what the agreement authorizes.",
      "Prioritize findings and agree which items are implemented now.",
      "Apply agreed hardening with change control you require.",
      "Retest shipped fixes where the scope includes a retest.",
      "Deliver a report to named owners, not as a public grade.",
      "Schedule follow-up only if a retainer is separately agreed.",
    ],
    technologies: [
      "Vulnerability scanning and review tools you authorize",
      "Hardening baselines for hosts, apps or cloud accounts in scope",
      "Identity and access controls with least privilege",
      "Logging and alerting hooks you already operate or agree to add",
      "TLS, header and dependency review for web applications when included",
      "Secure configuration notes for third-party services you name",
    ],
    faqs: [
      {
        question: "Do you guarantee we will not be breached?",
        answer:
          "No. Security work reduces risk; it does not create a warranty against all attacks. Residual risk should stay visible in the engagement notes.",
      },
      {
        question: "Do you provide compliance certification?",
        answer:
          "A certificate from an accredited auditor is not sold on this page. Work can support controls you are preparing for audit when that is written into the scope.",
      },
      {
        question: "Is this the same as website security and optimization?",
        answer:
          "Website security and optimization focuses on web properties you authorize. This page covers a broader risk conversation across systems named in scope. Related pages can be combined in one agreement when useful.",
      },
      {
        question: "Do you offer 24/7 monitoring by default?",
        answer:
          "Continuous monitoring is included only when the agreement says so. This page does not invent a default 24/7 operations centre claim.",
      },
      {
        question: "Will findings be published on the website?",
        answer:
          "No. Findings belong to the engagement report for systems you authorized. Public letter grades are not part of how this service is described.",
      },
      {
        question: "Do you publish security package prices here?",
        answer: "No. Fees depend on scope, access and risk. Quotes belong in a project conversation.",
      },
    ],
    related: ["website-security-optimization", "cloud-devops", "data-backup-protection"],
    icon: "/icons/icon-cybersecurity.svg",
  },
  {
    slug: "it-helpdesk-support",
    title: "IT helpdesk and support",
    card: "IT helpdesk support services with named coverage for systems you operate — not invented 24/7 claims on this page.",
    seoTitle: "IT Helpdesk Support Services for Businesses | QNVO Technologies",
    description:
      "IT helpdesk and IT support services with named coverage and response expectations written into the agreement — not invented 24/7 claims on this QNVO Technologies page.",
    h1: "IT Helpdesk and Business IT Support Services",
    summary:
      "IT helpdesk and support at QNVO Technologies means agreed channels for users to report issues on systems you name, with triage and resolution steps written into an agreement. It is for organizations that can define which tools are covered and who may open tickets. Contact QNVO Technologies about coverage. This page does not claim default 24/7 global staffing, unlimited on-site visits or instant resolution for every ticket. Hours, severity definitions and fees belong in a written support schedule.",
    problem:
      "Support fails when every message lands in a shared inbox, priorities are unclear, or vendors are engaged only after users are blocked. Tribal knowledge sits with one person. This service defines covered systems, channels and severity handling — without marketing fictional response times that cannot be staffed.",
    audience:
      "Operations and IT leads who can list covered systems, user groups and approval paths for changes. The service is a poor fit when nobody can define severity or when the ask is unlimited free support for products outside any agreement.",
    deliverables: [
      "A coverage list of systems, user groups and channels named in the agreement",
      "Severity definitions and target response expectations you accept in writing",
      "Triage and escalation paths for the support hours purchased",
      "Ticket handling notes and access required to diagnose issues in scope",
      "Monthly or periodic summary notes when the agreement includes reporting",
      "Change windows for fixes that need production approval",
      "Handover of runbooks created during the engagement when scoped",
    ],
    approach: [
      "Write coverage and hours before promising speed",
      "Separate how-to questions from incidents that need engineering changes",
      "Require least-privilege access for diagnosis",
      "Record recurring issues so they can become improvement work, not endless tickets",
      "Keep on-site work explicit when travel is required",
    ],
    process: [
      "Confirm covered systems, channels and support hours in writing.",
      "Define severity levels and escalation contacts.",
      "Set up intake for the channels named in the agreement.",
      "Triage tickets, diagnose with authorized access and resolve or escalate.",
      "Request change approval when a fix needs production changes.",
      "Report recurring themes when reporting is in scope.",
      "Renew or end coverage only as the agreement allows.",
    ],
    technologies: [
      "Ticketing or inbox tools you authorize",
      "Remote support methods you approve",
      "Documentation wikis or runbooks named in scope",
      "Monitoring alerts you already operate when they feed the helpdesk",
      "Identity systems used to verify requesters when required",
      "Knowledge-base articles for recurring how-to requests when scoped",
    ],
    faqs: [
      {
        question: "Do you provide 24/7 support by default?",
        answer:
          "No. Support hours are written into the agreement. This page does not invent a default round-the-clock staffing claim.",
      },
      {
        question: "Is every ticket resolved instantly?",
        answer:
          "No. Response and resolution depend on severity, access and the schedule you purchase. Instant resolution is not promised.",
      },
      {
        question: "Can you support products we buy from other vendors?",
        answer:
          "Sometimes, when access and vendor escalation paths exist and the product is named in coverage. Vendor SLAs remain with those vendors.",
      },
      {
        question: "Does support include new feature development?",
        answer:
          "Helpdesk coverage is not an unlimited build budget. Material enhancements belong in a separate development scope.",
      },
      {
        question: "How do users contact support?",
        answer:
          "Through the channels named in the agreement, such as a ticket form or email alias you authorize. Public social inboxes are not assumed.",
      },
      {
        question: "Do you publish support package prices here?",
        answer: "No. Fees depend on coverage, hours and volume. Quotes belong in a written schedule.",
      },
    ],
    related: ["cloud-devops", "website-security-optimization", "data-backup-protection"],
    icon: "/icons/icon-helpdesk.svg",
  },
  {
    slug: "data-backup-protection",
    title: "Data backup and protection",
    card: "Data backup and protection services for retention and recovery planning — without inventing zero-loss guarantees on this page.",
    seoTitle: "Data Backup & Disaster Recovery Planning | QNVO Technologies",
    description:
      "Data backup and protection services for retention and recovery planning on data stores you authorize. QNVO Technologies does not invent zero-loss guarantees on this page.",
    h1: "Data Backup and Protection Services",
    summary:
      "Data backup and protection at QNVO Technologies means designing or improving backup jobs, retention rules and recovery tests for data stores you authorize. It is for teams that can name what must be recoverable and who may approve restores. Contact QNVO Technologies about the systems in scope. This page does not guarantee zero data loss, unlimited retention or that every ransomware scenario is covered. Objectives and fees belong in a written agreement.",
    problem:
      "Backups fail quietly when jobs are unmonitored, retention is undefined, restores are never tested or credentials for backup vaults are shared too widely. Teams discover gaps during an incident. This service makes backup and restore paths explicit for data you name — without promising that disasters will never happen.",
    audience:
      "IT and operations leads who own data stores, retention policy and restore approval. Compliance stakeholders should join when regulated retention applies. The service is a poor fit when nobody can say which data matters or when restore tests are forbidden.",
    deliverables: [
      "An inventory of data stores and recovery priorities named in the scope",
      "Backup job and retention configuration you authorize",
      "Access controls for backup vaults using least privilege",
      "At least one restore test for a scenario named in the agreement when testing is included",
      "Runbooks for restore approval and execution",
      "Notes on residual gaps that remain out of scope",
      "Handover of console access and monitoring checks named in scope",
    ],
    approach: [
      "Prioritize what must be recoverable before buying more storage",
      "Separate backup copies from production credentials where practical",
      "Test restores on a schedule the agreement names",
      "Document retention and deletion rules rather than keeping everything forever by accident",
      "Treat third-party SaaS export limits as external constraints",
    ],
    process: [
      "List systems, data classes and recovery priorities.",
      "Confirm retention, encryption and who may approve restores.",
      "Configure or improve backup jobs for stores in scope.",
      "Run an agreed restore test when testing is included.",
      "Fix gaps found in the test within the written scope.",
      "Document residual risks and uncovered systems.",
      "Hand over access and runbooks named in the agreement.",
    ],
    technologies: [
      "Backup tools provided by your cloud, host or database vendor when authorized",
      "Immutable or offline copy options when named in the scope",
      "Encryption at rest for backup targets you control",
      "Monitoring alerts for failed jobs you agree to receive",
      "Export and retention features of SaaS products you operate",
      "Documented restore procedures for the scenarios in scope",
    ],
    faqs: [
      {
        question: "Do you guarantee zero data loss?",
        answer:
          "No. Backups reduce risk. Recovery point and time objectives, if any, belong in the written agreement and still depend on how soon an incident is detected.",
      },
      {
        question: "Will you keep every backup forever?",
        answer:
          "Retention follows the policy you approve. Unlimited forever storage is not assumed and can create cost and legal issues.",
      },
      {
        question: "Do you cover ransomware recovery?",
        answer:
          "Recovery planning can include scenarios you name. Success depends on backup isolation, credentials and how early the incident is found. A blanket ransomware warranty is not published here.",
      },
      {
        question: "Can you back up SaaS tools we subscribe to?",
        answer:
          "Only when the vendor provides export or backup APIs and you authorize them. Native vendor retention alone may not meet your policy.",
      },
      {
        question: "Who authorizes a production restore?",
        answer:
          "The roles named in the agreement. Silent restores into production are not part of how this service is described.",
      },
      {
        question: "Do you publish backup package prices here?",
        answer: "No. Fees depend on data volume, retention and the written scope.",
      },
    ],
    related: ["cloud-devops", "cybersecurity-risk-management", "database-management"],
    icon: "/icons/icon-backup.svg",
  },
  {
    slug: "ai-machine-learning",
    title: "AI and machine learning",
    card: "AI and machine learning development for a defined prediction or classification task with evaluation data you can provide.",
    seoTitle: "AI and Machine Learning Development Services | QNVO Technologies",
    description:
      "AI and machine learning development services for defined prediction or classification tasks with evaluation data you can provide. Discuss applied AI with QNVO Technologies.",
    h1: "AI and Machine Learning Development Services",
    summary:
      "AI and machine learning at QNVO Technologies means building or integrating models for a prediction, classification or ranking task you can define, using data you can lawfully provide and an evaluation method you accept. It is for teams that have a clear decision the model should support and a person who owns wrong answers. Contact QNVO Technologies about the task. This page does not guarantee accuracy percentages, autonomous business outcomes or a required model vendor. Agents and workflow automation are covered on related service pages when the need is orchestration rather than model training.",
    problem:
      "ML projects fail when the decision is undefined, labels are noisy, training data cannot be shared legally or success is measured only by a demo notebook. Production then surprises everyone. This service insists on the decision, the data boundary and evaluation cases before model shopping — without claiming state-of-the-art accuracy on this website.",
    audience:
      "Product, data and risk owners who can describe the decision, provide evaluation examples and name who reviews outputs before they affect customers or money. The service is a poor fit when no labeled examples exist and nobody will create them, or when the ask is only to add AI without a task.",
    deliverables: [
      "A written task definition, data boundary and evaluation method",
      "A baseline model or integration approach named in the scope",
      "Training or fine-tuning steps only when data access and licenses allow",
      "Evaluation results on the cases agreed — not a marketing accuracy claim",
      "Deployment or batch scoring path named in the agreement",
      "Monitoring notes for drift or failure modes you agree to watch",
      "Handover of notebooks, pipelines or APIs named in scope",
    ],
    approach: [
      "Define the decision and cost of errors before choosing algorithms",
      "Use evaluation sets that reflect real inputs, including hard cases",
      "Prefer simpler baselines when they meet the agreed bar",
      "Keep human review where wrong answers are expensive",
      "Separate agent tooling and RPA-style automation onto related service pages when that is the real need",
    ],
    process: [
      "Capture the decision, inputs, outputs and forbidden uses.",
      "Confirm data access, privacy constraints and evaluation cases.",
      "Agree success criteria that are measurable without inventing a public accuracy promise.",
      "Build or integrate the model approach named in the scope.",
      "Evaluate on agreed cases and document failures.",
      "Deploy only the path named in the agreement.",
      "Hand over artifacts and monitoring notes named in scope.",
    ],
    technologies: [
      "Python or TypeScript tooling named in the written scope",
      "Model APIs or open models you can license and operate",
      "Feature pipelines on infrastructure you authorize",
      "Experiment tracking when included in the agreement",
      "Batch or online scoring endpoints you control",
      "Evaluation notebooks or reports for the cases in scope",
    ],
    faqs: [
      {
        question: "Do you guarantee a specific accuracy rate?",
        answer:
          "No. Accuracy depends on data quality and the task. Evaluation results belong to the engagement notes, not a public promise on this page.",
      },
      {
        question: "How is this different from AI agent development?",
        answer:
          "Agent work focuses on bounded tools and human-reviewed task completion. This page focuses on prediction or classification models and evaluation. Both can appear in one agreement when needed.",
      },
      {
        question: "Will you use our production data for training?",
        answer:
          "Only with lawful access and written permission. Training on data you cannot share is not assumed.",
      },
      {
        question: "Do you require a specific cloud AI vendor?",
        answer:
          "No. Vendor choice follows licenses, data residency and what your team can operate, then is written into the scope.",
      },
      {
        question: "Can the model run fully autonomously?",
        answer:
          "Autonomy is a product decision. Where errors are costly, human review should remain in the operating model unless you explicitly accept the risk in writing.",
      },
      {
        question: "Do you publish ML package prices here?",
        answer: "No. Fees depend on data work, model complexity and the written scope.",
      },
    ],
    related: ["ai-agent-development", "ai-automation", "data-backup-protection"],
    icon: "/icons/icon-machine-learning.svg",
  },
  {
    slug: "digital-marketing",
    title: "Digital marketing",
    card: "Digital marketing services for planning and setup of campaigns you authorize — without guaranteed rankings, leads or revenue on this page.",
    seoTitle: "Digital Marketing Services & Campaign Setup | QNVO Technologies",
    description:
      "Digital marketing services for campaign planning and setup you authorize. QNVO Technologies does not guarantee Google rankings, leads or revenue on this page.",
    h1: "Digital Marketing Services for Business Growth",
    summary:
      "Digital marketing services at QNVO Technologies mean helping you plan and set up marketing channels you authorize — such as on-site conversion paths, analytics and campaign structure for Google Ads or other platforms you own — with measurement you can read. It is for teams that own the brand, the domain and the ad or social accounts involved. Contact QNVO Technologies about the channels in scope. This page does not guarantee Google rankings, lead volume, ROAS or viral reach. Technical SEO for Google crawl and templates remains a related service. Paid media spend stays on your accounts unless the agreement says otherwise.",
    problem:
      "Marketing spend wastes when tracking is broken, landing pages disagree with ads, or channels are opened without an owner for creative and compliance. Teams chase vanity metrics while enquiry paths fail. This service aligns channels, measurement and on-site paths you control — without inventing performance percentages for advertising.",
    audience:
      "Marketing leads who can approve brand messaging, landing pages and ad account access, and who accept that results depend on offer and market. The service is a poor fit when nobody owns the accounts or when the only request is a guaranteed first-page ranking.",
    deliverables: [
      "A channel and landing-page plan for the campaigns named in the scope",
      "Analytics and conversion event setup you authorize",
      "On-site path updates required for those campaigns when included",
      "Campaign structure notes for ad or social tools you operate",
      "Measurement definitions so teams argue less about what counts",
      "Handover of account access and documentation named in the agreement",
      "Explicit exclusions such as link buying or fake reviews",
    ],
    approach: [
      "Fix measurement and landing clarity before scaling spend",
      "Keep claims truthful and consistent with what the site shows",
      "Separate technical SEO template work onto the Technical SEO service when needed",
      "Use your ad accounts so billing and policy ownership stay with you",
      "Treat platform auction outcomes as external and not guaranteed",
    ],
    process: [
      "Confirm goals, audiences and channels you authorize.",
      "Audit current tracking and landing pages for those channels.",
      "Agree the setup and content changes in writing.",
      "Implement measurement and on-site paths in scope.",
      "Configure campaign structure in tools you own when included.",
      "Review early data for tracking errors before judging performance.",
      "Hand over access and notes named in the agreement.",
    ],
    technologies: [
      "Analytics and tag tools you authorize",
      "Ad or social platforms on accounts you control",
      "Landing pages on sites you operate",
      "CRM or form endpoints you authorize for lead capture",
      "Consent and privacy tooling required in your regions when scoped",
      "Search Console access when organic technical work is combined in the agreement",
    ],
    faqs: [
      {
        question: "Do you guarantee rankings or lead volume?",
        answer:
          "No. Digital marketing outcomes depend on offer, budget, competition and creative. This page does not guarantee rankings, leads or revenue.",
      },
      {
        question: "Is this the same as technical SEO?",
        answer:
          "Technical SEO focuses on crawl, templates and performance. Digital marketing covers broader channel and campaign setup. They can be combined when written into one scope.",
      },
      {
        question: "Will you buy backlinks for us?",
        answer:
          "No. Link buying and fake reviews are outside this service.",
      },
      {
        question: "Who pays for ads?",
        answer:
          "Ad spend stays on your accounts unless the agreement explicitly says otherwise. Agency fees are separate from media spend.",
      },
      {
        question: "Do you manage social posting forever?",
        answer:
          "Ongoing content calendars are included only when the agreement says so. Setup-only engagements hand accounts back with notes.",
      },
      {
        question: "Do you publish marketing package prices here?",
        answer: "No. Fees depend on channels and the written scope.",
      },
    ],
    related: ["technical-seo", "web-development", "ecommerce-development"],
    icon: "/icons/icon-digital-marketing.svg",
  },
  {
    slug: "saas-development",
    title: "SaaS development",
    card: "SaaS product development for multi-tenant software with accounts, billing hooks and operational basics named in the written scope.",
    seoTitle: "SaaS Product Development Company Services | QNVO Technologies",
    description:
      "SaaS development company services for multi-tenant software products with accounts, billing hooks and operational basics named in scope. Discuss SaaS product engineering with QNVO Technologies.",
    h1: "SaaS Product Development Company Services",
    summary:
      "SaaS development at QNVO Technologies means designing and building a software product delivered over the web with accounts, roles and tenant boundaries you define. It is for teams that can describe the subscriber, the core workflow and who will operate the service after launch. Contact QNVO Technologies about the product. This page does not promise subscriber growth, uptime percentages or a required billing vendor. Hosting, compliance and fees belong in a written agreement.",
    problem:
      "SaaS ideas stall when tenancy is unclear, admin tools are missing, billing is bolted on late or operations has no way to support subscribers. Feature lists grow while the first paying workflow stays incomplete. This service focuses on the subscriber journey, tenancy and operational basics for the first release — without inventing ARR forecasts on this website.",
    audience:
      "Founders and product leads who can name the subscriber, the paid workflow and the operators who will support it. Finance should join when billing and taxes matter. The service is a poor fit when nobody owns customer support or when the ask is only a pitch deck without a workflow.",
    deliverables: [
      "A product outline covering tenants, roles, permissions and non-goals for the first release",
      "Application implementation of the workflow named in the scope",
      "Account, auth and tenancy boundaries you authorize",
      "Billing or entitlement hooks for providers you can contract with when included",
      "Admin or support views named in the agreement",
      "Handover notes for repositories, environments and runbooks in scope",
      "A short operating note for onboarding and support roles",
    ],
    approach: [
      "Prove the paid workflow before expanding into adjacent modules",
      "Define tenant isolation and admin powers explicitly",
      "Integrate billing providers you can operate rather than inventing a payment stack",
      "Plan observability and support paths early enough to use them at launch",
      "Keep marketing sites and the product app boundaries clear when both exist",
    ],
    process: [
      "Capture subscriber, workflow, tenancy and compliance constraints.",
      "Agree first-release modules and non-goals in writing.",
      "Implement auth, tenancy and the core workflow in reviewable increments.",
      "Add billing or entitlements only when providers and tax rules are confirmed.",
      "Build admin or support paths named in the scope.",
      "Test upgrade, cancel and failure paths that the agreement includes.",
      "Hand over environments and notes named in scope.",
    ],
    technologies: [
      "TypeScript, Next.js and React when a web SaaS UI is the agreed stack",
      "APIs and webhooks for billing or integration partners you authorize",
      "Datastores and queues on infrastructure you control",
      "Auth providers or custom auth named in the scope",
      "Background jobs for provisioning and email you authorize",
      "Environment-based configuration so secrets stay out of source control",
    ],
    faqs: [
      {
        question: "Do you guarantee subscriber growth?",
        answer:
          "No. The service is the product build and integrations in the agreement. Acquisition and revenue depend on the offer and market.",
      },
      {
        question: "Will you host the SaaS forever?",
        answer:
          "Hosting and on-call operations are included only when the agreement says so. Otherwise handover covers how your team operates the service.",
      },
      {
        question: "Which billing provider is required?",
        answer:
          "None is required on this page. Providers are chosen from what you can contract with and are written into the scope.",
      },
      {
        question: "Is multi-tenant architecture always included?",
        answer:
          "Tenancy follows the product you describe. Single-tenant deployments can be correct when written into the scope.",
      },
      {
        question: "How does this differ from enterprise software?",
        answer:
          "Enterprise software often serves one organization workflow. SaaS emphasizes subscribers, tenancy and productized onboarding. Overlap is normal and can be scoped together.",
      },
      {
        question: "Do you publish SaaS package prices here?",
        answer: "No. Fees depend on modules, compliance and the written scope.",
      },
    ],
    related: ["enterprise-software-development", "cloud-devops", "api-development-integration"],
    icon: "/icons/icon-saas.svg",
  },
  {
    slug: "api-development-integration",
    title: "API development and integration",
    card: "API development and system integration for HTTP APIs and connections with auth, error handling and documentation you authorize.",
    seoTitle: "API Development & System Integration Services | QNVO Technologies",
    description:
      "API development and system integration services for HTTP APIs with auth, error handling and documentation. Connect systems you authorize with QNVO Technologies.",
    h1: "API Development and System Integration Services",
    summary:
      "API development and integration at QNVO Technologies means designing or connecting HTTP interfaces so systems you authorize can exchange data safely. It is for teams that can name the systems of record, the events that matter and who owns credentials. Contact QNVO Technologies about the interfaces required. This page does not promise that every third-party API is available or that partners will change their platforms for free. Scope and fees belong in a written agreement.",
    problem:
      "Integrations fail when contracts are verbal, error cases are ignored, retries duplicate orders or secrets are shared in tickets. Teams then debug production with no owner. This service writes the interface contract, auth and failure behaviour for connections you authorize — without inventing unlimited marketplace integrations.",
    audience:
      "Engineering and operations leads who can authorize API access and name business owners for each flow. The service is a poor fit when credentials cannot be issued or when the ask is to connect systems that have no supported interface.",
    deliverables: [
      "An interface outline covering resources, events, auth and non-goals",
      "API implementation or connector work named in the scope",
      "Error handling, idempotency and logging expectations you require",
      "Documentation for consumers named in the agreement",
      "Sandbox or non-production verification when providers allow it",
      "Handover of credentials storage notes and repositories in scope",
      "A short operating note for monitoring and failure ownership",
    ],
    approach: [
      "Write the contract before coding happy-path demos only",
      "Prefer least-privilege credentials and short-lived tokens when available",
      "Design for timeouts, retries and duplicate delivery explicitly",
      "Keep secrets out of source control and chat",
      "Treat partner rate limits and outages as external constraints",
    ],
    process: [
      "List systems, data fields and who owns each side of the flow.",
      "Confirm auth methods and environments you can use.",
      "Agree success and failure behaviour in writing.",
      "Implement and verify in non-production when possible.",
      "Document consumer usage and operational alerts in scope.",
      "Promote to production with the approval path you require.",
      "Hand over notes and access named in the agreement.",
    ],
    technologies: [
      "HTTP JSON APIs and webhooks",
      "OAuth, API keys or mTLS as named in the scope",
      "TypeScript or other server runtimes you standardize on",
      "Queue or retry mechanisms when included",
      "OpenAPI or equivalent documentation when scoped",
      "Observability hooks for latency and error rates you authorize",
    ],
    faqs: [
      {
        question: "Can you integrate any third-party product?",
        answer:
          "Only when that product provides a supported interface and you can authorize access. Unsupported or prohibited APIs are raised during scoping.",
      },
      {
        question: "Do you build public developer platforms?",
        answer:
          "Public developer portals can be included when named. A private integration between two systems does not automatically include a partner ecosystem.",
      },
      {
        question: "Who owns rate-limit incidents?",
        answer:
          "Partner limits are outside our control. The agreement should name who monitors and who pauses traffic when limits are hit.",
      },
      {
        question: "Will you store production secrets for us forever?",
        answer:
          "Credential handling follows the agreement. Long-term secret custody is not assumed with every integration build.",
      },
      {
        question: "Is realtime streaming always included?",
        answer:
          "Realtime transports are included only when named. Many flows are correctly done with webhooks or batch jobs.",
      },
      {
        question: "Do you publish API package prices here?",
        answer: "No. Fees depend on systems, risk and the written scope.",
      },
    ],
    related: ["enterprise-software-development", "saas-development", "cloud-devops"],
    icon: "/icons/icon-api.svg",
  },
  {
    slug: "database-management",
    title: "Database management",
    card: "Database management services for design, performance review and operational hygiene for data stores you authorize.",
    seoTitle: "Database Management & Performance Services | QNVO Technologies",
    description:
      "Database management and database optimization services for design, performance review and operational hygiene on data stores you authorize.",
    h1: "Database Management and Optimization Services",
    summary:
      "Database management at QNVO Technologies means helping you design, review or operate databases you authorize so data stays structured, accessible and recoverable within the limits you set. It is for teams that can grant controlled access and name change windows. Contact QNVO Technologies about the data stores in scope. This page does not guarantee query times, infinite scale or that every legacy schema can be fixed without application changes. Fees belong in a written agreement.",
    problem:
      "Applications slow down when indexes are missing, schemas drift, credentials are shared or backups are untested. Quick fixes in production create new incidents. This service improves structure and operations for stores you name — without claiming a universal performance multiplier.",
    audience:
      "Engineering and data leads who own schemas, access and maintenance windows. The service is a poor fit when production changes are forbidden yet miracles are expected, or when nobody can explain what the data represents.",
    deliverables: [
      "A review of schema, indexes and operational practices for stores in scope",
      "A prioritized change list separated into implement-now versus backlog",
      "Agreed migrations or configuration changes applied in your windows",
      "Access hygiene notes using least privilege",
      "Backup and restore checks when combined with backup scope",
      "Handover of scripts and documentation named in the agreement",
      "Residual risk notes for issues not fixed in this engagement",
    ],
    approach: [
      "Measure before rewriting — capture slow queries and growth patterns you authorize us to see",
      "Prefer additive, reversible migrations when risk is high",
      "Coordinate application changes when the schema alone cannot fix the issue",
      "Keep admin credentials limited and auditable",
      "Avoid production experiments without a rollback path",
    ],
    process: [
      "Confirm engines, environments and maintenance windows.",
      "Review schema, indexes, growth and backup posture for stores in scope.",
      "Agree which changes ship now versus later.",
      "Apply migrations in non-production first when possible.",
      "Promote with the approval path you require.",
      "Verify the checks named in the agreement.",
      "Hand over scripts and notes named in scope.",
    ],
    technologies: [
      "Relational and document databases you already run or can license",
      "Migration tooling compatible with your stack",
      "Query analysis features your engine provides",
      "Connection pooling and timeout settings when in scope",
      "Backup features of the engine or host you use",
      "Observability for connections, locks and storage you authorize",
    ],
    faqs: [
      {
        question: "Do you guarantee a specific query time?",
        answer:
          "No. Performance depends on data shape, hardware and application behaviour. Observations after work are not a public promise published in advance.",
      },
      {
        question: "Will you rewrite our entire schema?",
        answer:
          "Only when a rewrite is named in the scope. Many engagements improve indexes and hygiene without a full redesign.",
      },
      {
        question: "Can you work without production access?",
        answer:
          "Often we start in non-production. Some diagnoses need sanitized production insights you authorize. Silent production admin access is not assumed.",
      },
      {
        question: "Do you include data migration between engines?",
        answer:
          "Migrations can be included when source, target and cutover rules are written into the scope.",
      },
      {
        question: "Is backup part of this service?",
        answer:
          "Backup and restore can be combined with the data backup service or included here when named. It is not automatic with every tuning engagement.",
      },
      {
        question: "Do you publish database package prices here?",
        answer: "No. Fees depend on engines, risk and the written scope.",
      },
    ],
    related: ["data-backup-protection", "cloud-devops", "saas-development"],
    icon: "/icons/icon-database.svg",
  },
  {
    slug: "ui-ux-design",
    title: "UI and UX design",
    card: "UI UX design services for interface structure, wireframes and UI design — without vanity awards or conversion guarantees.",
    seoTitle: "UI UX Design Agency Services for Products | QNVO Technologies",
    description:
      "UI and UX design services for interface structure, wireframes and UI design for flows you can describe. QNVO Technologies does not promise vanity awards or conversion guarantees.",
    h1: "UI and UX Design Services for Digital Products",
    summary:
      "UI and UX design at QNVO Technologies means shaping the structure and interface of a product or website flow so people can complete tasks you define. It is for teams that can explain the audience and the job to be done. Contact QNVO Technologies about the flows in scope. This page does not promise conversion lifts, design awards or unlimited revision rounds. Implementation may be a related engineering service. Fees belong in a written agreement.",
    problem:
      "Interfaces fail when screens are decorated before tasks are clear, accessibility is skipped or design files diverge from what engineering can ship. Stakeholders argue taste while users still cannot complete a form. This service starts with tasks, content and constraints — without inventing research sample sizes or conversion percentages on this website.",
    audience:
      "Product and marketing leads who can name users, tasks and brand constraints, and who will attend review checkpoints. Engineering should join when implementation feasibility matters. The service is a poor fit when nobody can describe the task or when unlimited silent revisions are expected without a written round count.",
    deliverables: [
      "A task and content outline for the flows in scope",
      "Wireframes or user-flow diagrams for those tasks",
      "UI designs for the screens named in the agreement",
      "Accessibility notes for contrast, focus and labels on agreed components",
      "Handoff specs or annotated files engineering can use when included",
      "A defined number of revision rounds named in the scope",
      "Design tokens or style notes when a small system is included",
    ],
    approach: [
      "Clarify tasks and content before visual polish",
      "Design for keyboard use and readable text sizes on agreed templates",
      "Keep engineering constraints visible during reviews",
      "Limit revision rounds to what the agreement names",
      "Separate brand strategy retainers from UI delivery unless combined in writing",
    ],
    process: [
      "Capture audiences, tasks and success criteria for each flow.",
      "Audit current screens or content when redesigning.",
      "Produce wireframes for agreement before high fidelity when useful.",
      "Design UI for the screens in scope within revision limits.",
      "Review accessibility basics on agreed components.",
      "Prepare handoff artifacts named in the agreement.",
      "Support implementation questions only as the scope allows.",
    ],
    technologies: [
      "Figma or equivalent design files you can own",
      "Exported assets in formats engineering requests when scoped",
      "Design tokens aligned with CSS variables when a system is included",
      "Prototype links for stakeholder review when named",
      "Accessibility checklists for the components in scope",
      "Handoff notes that reference real content, not only lorem ipsum, when copy is available",
    ],
    faqs: [
      {
        question: "Do you guarantee higher conversion rates?",
        answer:
          "No. Design improves clarity for tasks in scope. Conversion depends on offer, traffic and factors outside a UI engagement.",
      },
      {
        question: "Is development included?",
        answer:
          "Implementation is included only when the agreement combines design with engineering. Otherwise handoff artifacts are the deliverable.",
      },
      {
        question: "How many revision rounds are included?",
        answer:
          "The number is written into the scope. Unlimited silent revisions are not assumed.",
      },
      {
        question: "Do you invent user research statistics?",
        answer:
          "No. Research activities are included only when scoped, and results are not fabricated for marketing.",
      },
      {
        question: "Can you match our existing brand?",
        answer:
          "Yes when brand guidelines or references are provided. Creating a full brand identity is a separate scope unless named.",
      },
      {
        question: "Do you publish design package prices here?",
        answer: "No. Fees depend on flows, screens and the written scope.",
      },
    ],
    related: ["web-development", "mobile-app-development", "saas-development"],
    icon: "/icons/icon-uiux.svg",
  },
  {
    slug: "iot-solutions",
    title: "IoT solutions",
    card: "IoT solutions for connected device workflows with security and update constraints written into the scope.",
    seoTitle: "IoT Solutions & Connected Device Services | QNVO Technologies",
    description:
      "IoT solutions and connected device services for device workflows, security and update constraints written into scope. Discuss IoT software with QNVO Technologies.",
    h1: "IoT Solutions and Connected Device Services",
    summary:
      "IoT solutions at QNVO Technologies means planning software and integration for connected devices so you can collect, secure and act on data you are allowed to own. It is for teams that can describe the device, the network path and who maintains firmware or field hardware. Contact QNVO Technologies about the workflow. This page does not promise device volumes, global coverage or that every industrial protocol is already certified. Hardware procurement, certifications and fees belong in a written agreement.",
    problem:
      "IoT initiatives stall when devices cannot be updated, credentials are shared, cloud costs surprise finance or field failures have no owner. Dashboards appear before security and provisioning are designed. This service focuses on the data path, identity and update model for devices you name — without inventing fleet sizes for marketing.",
    audience:
      "Operations and engineering leads who own devices or can partner with a hardware vendor, and who can authorize cloud or on-prem backends. Security owners should join when devices leave controlled premises. The service is a poor fit when nobody maintains hardware or when the ask is only a dashboard mock without connectivity reality.",
    deliverables: [
      "A workflow outline covering devices, data, networks and non-goals",
      "Backend or gateway integration named in the scope",
      "Device identity and credential handling you authorize",
      "Data storage and alert paths named in the agreement",
      "Update or configuration approach for devices in scope when included",
      "Handover notes for environments and operational ownership",
      "Residual risk notes for hardware or network limits outside software scope",
    ],
    approach: [
      "Confirm physical and network constraints before cloud architecture theatre",
      "Require device identity and least-privilege credentials",
      "Plan how devices receive updates or configuration changes",
      "Keep personal or sensitive data minimization visible in the design",
      "Separate hardware supply from software scope unless combined in writing",
    ],
    process: [
      "Capture device types, sites, data and who maintains hardware.",
      "Confirm connectivity, power and update constraints.",
      "Agree first-release telemetry and actions in writing.",
      "Implement backend and integration pieces named in the scope.",
      "Test failure modes such as offline devices when included.",
      "Document operational ownership and residual hardware risks.",
      "Hand over access and notes named in the agreement.",
    ],
    technologies: [
      "MQTT, HTTPS or other protocols named in the written scope",
      "Cloud or on-prem IoT platforms you can license and operate",
      "Device SDKs provided by hardware vendors you select",
      "Time-series or operational datastores you authorize",
      "Alerting tools connected to channels you monitor",
      "Certificate or token-based device identity when included",
    ],
    faqs: [
      {
        question: "Do you manufacture hardware?",
        answer:
          "Hardware supply is included only when explicitly named. Many engagements integrate devices from vendors you choose.",
      },
      {
        question: "Do you guarantee device uptime?",
        answer:
          "No. Field conditions, connectivity and hardware faults are outside a pure software promise. Objectives, if any, belong in a written agreement.",
      },
      {
        question: "Can you work with industrial protocols?",
        answer:
          "When the protocol, gateway and safety rules are named in the scope and you can authorize access. Unsupported protocols are raised early.",
      },
      {
        question: "Who owns the device data?",
        answer:
          "You do, subject to law and vendor terms. This page does not claim QNVO ownership of customer telemetry.",
      },
      {
        question: "Is mobile app control included?",
        answer:
          "Companion apps are included only when named. Mobile app development can be combined as a related service.",
      },
      {
        question: "Do you publish IoT package prices here?",
        answer: "No. Fees depend on devices, connectivity and the written scope.",
      },
    ],
    related: ["api-development-integration", "cloud-devops", "cybersecurity-risk-management"],
    icon: "/icons/icon-iot.svg",
  },
];
