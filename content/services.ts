import type { Service } from "@/lib/data";
import { extendedServiceCatalog } from "@/content/services-extended";

const coreServiceCatalog: Service[] = [
  {
    slug: "enterprise-software-development",
    title: "Enterprise software",
    card: "Custom enterprise software development for defined workflows, portals and integrations with systems you already run.",
    seoTitle: "Enterprise Software Development Company | QNVO Technologies",
    description:
      "Custom enterprise software development services for internal tools, portals and system integrations. QNVO Technologies serves teams in the USA, UK, Middle East and Pakistan. Scope and fees are agreed in writing.",
    h1: "Enterprise Software Development Company Services",
    summary:
      "Enterprise software development at QNVO Technologies means designing and building custom systems for a defined business workflow, such as an internal tool, a portal or a connection to software you already run. It is for teams that can describe who will use the system, what data it must hold and which existing products it must respect. Contact QNVO Technologies to discuss requirements. Deliverables, fees and timelines are set in a project agreement, not on this page. This page describes the shape of the work. It is not a fixed package, a product license or a public price list.",
    problem:
      "Teams often run critical work across spreadsheets, email threads and systems that were never designed to share a process. People re-enter the same data, approvals get lost in inboxes, and nobody can see the status of a request without asking around. Reporting then depends on whoever last updated a file. Buying another generic product can leave the same gaps if the workflow itself was never written down — screens multiply while the hand-offs stay informal. A website mockup alone is also not enough: without permissions, exception paths and a clear owner for each system of record, software becomes another place where work stalls. The problem this service addresses is a defined process that needs software shaped around the users, the data and the systems you already run. The conversation starts with that process. It does not start with a catalogue of features, a percentage of efficiency or a timeline invented for marketing. Scope, fees and cutover remain written commitments, not assumptions from this page.",
    audience:
      "Operations, product and technology leads who need software shaped around a process they can describe in plain language. A useful first conversation names the users, the data involved, the systems that must connect and who will administer the result after handover. Finance, operations and IT sponsors can join when access, environments or compliance constraints matter. A finished specification is not required before that conversation. An engagement is a poor fit when nobody owns the process, when access to required systems cannot be authorized, or when the ask is an open-ended “build something modern” without users or outcomes.",
    deliverables: [
      "A written outline of the problem, users, permissions, non-goals and constraints for the first release",
      "An implementation plan tied to an agreed scope, environments and review checkpoints",
      "The application, portal or integration described in that scope — not an implied second product",
      "Interface notes for systems you authorize, including error handling and identifier expectations",
      "Handover notes the agreement calls for, such as access, environments, repositories and what was built",
      "A short operating note for the roles that will use or administer the system day to day",
      "A change log of material decisions so later enhancements do not rewrite history by accident",
    ],
    approach: [
      "Confirm the workflow in plain language before proposing screens, stacks or integrations",
      "Identify the data, permissions and existing systems the work depends on, including least privilege",
      "Separate must-have paths for the first release from later enhancements that need their own note",
      "Build in the review steps named in the agreement rather than on an assumed calendar",
      "Hand over only what the agreement includes — access, notes and operating guidance as scoped",
    ],
    process: [
      "Capture who starts the process, who approves each step, what “done” means and where exceptions land.",
      "List systems of record and whether access will be read-only, write or both, with an owner for each.",
      "Agree non-goals for the first release so silent expansion is harder to treat as free work.",
      "Confirm environments, credentials handling and who can approve production changes.",
      "Implement in reviewable increments against the written scope, with demos at the checkpoints named.",
      "Retest the happy path and at least one exception path before treating handover as complete.",
      "Transfer access, notes and the items named in the agreement — nothing more by implication.",
    ],
    technologies: [
      "TypeScript for application logic when a custom web application is in scope",
      "Next.js and React for server-rendered business interfaces when that stack fits the agreement",
      "Tailwind CSS for maintainable UI styling when included in the build",
      "HTTP APIs, webhooks or file exports you authorize for integrations with existing systems",
      "Environment-based configuration so secrets stay out of source, tickets and chat threads",
      "Structured logging and audit-friendly event notes when the agreement requires an operational trail",
    ],
    faqs: [
      {
        question: "Do you sell a ready-made enterprise product?",
        answer:
          "This page describes custom development and integration. QNVO Technologies does not publish a packaged product, a price list or a license here. If a third-party product is part of the work, that choice is made with you and written into the scope. The Work page presents BMS and CSM as platform case studies; those are not sold as unnamed white-label packages on this service page.",
      },
      {
        question: "Can you work with the systems we already use?",
        answer:
          "Often, when those systems provide access such as an API, an export or a supported integration and you can authorize it. Access limits, rate limits and unsupported endpoints are raised during scoping rather than assumed away. If a system cannot be connected safely, the honest outcome may be a manual bridge, a narrower first release or a decision not to proceed until access exists.",
      },
      {
        question: "Do we need a finished specification before talking?",
        answer:
          "No. A conversation can start with users, data and the systems involved. A written scope still comes before build work is treated as agreed. Early notes from discovery are not a substitute for that agreement.",
      },
      {
        question: "What happens when requirements change mid-project?",
        answer:
          "Change is normal. Material changes should update the written agreement or an attached change note, including any effect on timeline and fees. Unspoken expansion is not an agreed deliverable. Small clarifications inside an existing acceptance path can stay inside the original scope when both sides agree they do not change the boundary.",
      },
      {
        question: "Will you host and support the system forever?",
        answer:
          "Hosting and ongoing support are separate from the first build unless the agreement says otherwise. Handover can include the access and notes named in scope so your team can operate what was delivered. A later support retainer, if any, is its own written engagement.",
      },
      {
        question: "Do you publish prices or typical project lengths here?",
        answer:
          "No. Fees and timelines depend on access, complexity and the written scope. Anything quoted belongs in a project conversation and agreement, not in a public catalogue on this website.",
      },
    ],
    related: ["web-development", "erp-solutions", "website-security-optimization"],
    icon: "/icons/icon-enterprise-software.svg",
  },
  {
    slug: "ai-agent-development",
    title: "AI agent development",
    card: "AI agent development for bounded tasks that use approved data and tools, then return a result a person can review.",
    seoTitle: "AI Agent Development Company & Services | QNVO Technologies",
    description:
      "AI agent development services for bounded business tasks with approved data and human review. Discuss AI agent software with QNVO Technologies. No autonomous outcome or accuracy guarantees on this page.",
    h1: "AI Agent Development Company Services",
    summary:
      "AI agent development company services at QNVO Technologies mean software that can carry out a bounded task using instructions, approved data and tools you allow, then return a result a person can check. It is for teams with a repeatable task, known inputs and a clear definition of done. Contact QNVO Technologies to discuss AI agent software for business workflows. QNVO Technologies does not claim an agent that runs a business on its own, does not guarantee accuracy and does not publish a required model vendor on this website. Fees and timelines belong in a written agreement after the task boundary is clear.",
    problem:
      "Organizations try AI agents when people spend time on repeatable work that still needs judgment at the end: drafting from approved sources, preparing a queue item, classifying a request or gathering facts before a human decides. The risk is an unbounded agent with too much access and no review step. Wrong answers then look like finished work, especially when the agent can write to production systems or invent sources it was never given. Tool sprawl makes this worse: chat interfaces, tickets and documents all become places where an incomplete answer can be copied forward. This service focuses on a bounded task, an allow-list of data and tools, sample evaluation cases and a person who reviews the result before it is used. Model choice, if any, comes after that boundary is written — not before. The engagement is about task design and safe limits. It is not a claim of autonomous operations, guaranteed savings or a particular accuracy rate.",
    audience:
      "Teams that can point to a task with known inputs, allowed sources and a person who reviews the output before it affects customers, money or compliance records. Product, operations and risk owners should be able to name what “good enough to try” means and what must never happen. An agent is a poor fit when the task is undefined, when nobody owns review, when write access is demanded on day one without a rollback plan, or when a wrong answer would be acted on with no human checkpoint.",
    deliverables: [
      "A written description of the task, inputs, limits, failure modes and review step",
      "An allow-list of data sources and tools the agent may use, plus explicit non-goals",
      "An agent design that stays inside those limits, including least-privilege access notes",
      "An implementation of that design, if you agree a build scope after the boundary is clear",
      "Notes on how a person checks the result before it is used in a live process",
      "A simple failure path when a tool times out, a source is missing or the answer is incomplete",
      "Sample evaluation cases used to judge readiness for a wider trial",
    ],
    approach: [
      "Define the task and the definition of done before choosing a model, vendor or orchestration tool",
      "List the data and actions the agent may use, and what it must not do under any prompt",
      "Keep a human checkpoint where the outcome matters to customers, money or compliance",
      "Treat evaluation cases and failure paths as part of the scope, not an afterthought",
      "Prefer read-only or draft outputs until review and rollback are agreed in writing",
    ],
    process: [
      "Write the job in plain language: trigger, inputs, allowed tools, non-goals and review owner.",
      "Confirm which systems may be read or updated, starting with the least privilege needed.",
      "Agree sample tasks used to judge whether the agent is ready for a wider trial.",
      "Document how prompts, tools and sources will be versioned so changes are reviewable.",
      "Build only after the task boundary and review step are written down.",
      "Run the sample set, capture misses, and decide whether to widen, narrow or stop.",
      "Hand over configuration ownership and a way to disable the agent if something goes wrong.",
    ],
    technologies: [
      "Task and policy definitions owned by your team, stored outside opaque chat history when possible",
      "Approved data sources and tools reached only through access you authorize",
      "Human review states in a UI or ticket workflow when included in scope",
      "Logging of tool calls and review decisions when the agreement requires an audit trail",
      "Application interfaces built with TypeScript and Next.js when a custom review UI is in scope",
      "Environment-based secrets for any model or tool credentials — never pasted into tickets",
    ],
    faqs: [
      {
        question: "Will the agent make business decisions for us?",
        answer:
          "No. The service is scoped as software that prepares or carries out a defined task and returns something a person can review. Authority to act stays with your organization unless a separate agreement says otherwise. Marketing language about “autonomous AI” is not part of this engagement.",
      },
      {
        question: "Do you guarantee accuracy?",
        answer:
          "No. Model output can be wrong or incomplete. The engagement is about the task design, the allowed data and the review step. It is not a promise of accuracy, savings, uptime or a particular model. Evaluation samples show how the agent behaves on those cases; they are not a public performance claim.",
      },
      {
        question: "Which AI model do you require?",
        answer:
          "This website does not mandate a model vendor or orchestration product. Model choice belongs in the written scope after the task, data limits and review step are clear. Naming a specific model or reseller relationship on this page would require owner confirmation and is not invented here.",
      },
      {
        question: "Can the agent write to production systems on day one?",
        answer:
          "Write access should wait until the review path and rollback plan are agreed. Early trials often stay read-only or produce drafts for a person to apply. Production writes without a disable switch and an owner are out of line with how this service is described.",
      },
      {
        question: "Is this the same as AI automation?",
        answer:
          "Related, not identical. An AI agent engagement centers on a bounded task with a reviewable result. AI automation centers on connecting documented process steps and system hand-offs. A project can include both only when the scope says so.",
      },
      {
        question: "Will you train a private model on our confidential data by default?",
        answer:
          "No default training claim is made on this page. Any use of your data with a model provider, including retention settings and whether fine-tuning is in scope, must be written into the agreement after you authorize it. Secrets and customer data stay out of tickets and chat threads.",
      },
    ],
    related: ["ai-automation", "enterprise-software-development"],
    icon: "/icons/icon-ai-agents.svg",
  },
  {
    slug: "ai-automation",
    title: "AI automation",
    card: "AI business process automation that connects documented steps so routine hand-offs need less manual copying between systems.",
    seoTitle: "AI Business Process Automation Services | QNVO Technologies",
    description:
      "AI automation services for documented business workflows and system hand-offs. QNVO Technologies helps connect steps you authorize — without inventing full autonomy or savings guarantees.",
    h1: "AI Business Process Automation Services",
    summary:
      "AI automation means connecting a documented process so routine steps need less manual copying between systems. It is for teams that can describe the steps, the exceptions and who remains responsible for the result. Contact QNVO Technologies with the process you want to review. We do not promise a percentage of time or cost saved, do not mandate a single automation product on this website and do not treat an undocumented process as ready to automate. Scope and fees belong in a written agreement.",
    problem:
      "Many processes stall between tools: a form in one product, a ticket in another, and a spreadsheet that still reconciles both. People copy fields by hand, miss exceptions and cannot see where an item stopped. Status meetings replace a shared identifier. Adding AI without a written process usually spreads that confusion — an assistive step drafts text into the wrong queue or updates the wrong record because the hand-off was never defined. Vendors then get blamed for “automation” that was really an undocumented workflow. This service starts from documented steps, clear owners and hand-offs that can fail safely. Assistive AI belongs only where acceptance criteria are written. The goal is fewer fragile copies between systems you authorize, not a public claim of hours saved or a required tool logo on this page.",
    audience:
      "Operations teams with a process that is already written down, including what happens when a step fails and who owns each system involved. Process owners, system administrators and the people who still approve high-impact outcomes should be available during discovery. Automation of an unclear process usually spreads the confusion rather than removing it. The service is a poor fit when nobody can name exception owners, when API or export access cannot be granted, or when every step is expected to become fully automatic on day one without a risk discussion.",
    deliverables: [
      "A map of the current steps, exceptions, shared identifiers and responsible roles",
      "A proposal for which steps can be assisted, connected or left manual — with reasons",
      "Payload and identifier notes for each system hand-off in scope",
      "The automation described in an agreed scope, including pause and rollback expectations",
      "An exception path for items that cannot complete automatically",
      "A short operating note for the people who still own the outcome",
      "A pilot checklist covering happy-path and one common exception before volume expands",
    ],
    approach: [
      "Start from the process you run today, including exceptions and informal workarounds",
      "Separate steps a person must still approve from steps that can move automatically",
      "Connect systems only where access, identifiers and error handling are clear",
      "Place assistive AI only behind written acceptance criteria, not as decoration",
      "Leave room in the scope to pause or stop a step that behaves unexpectedly",
    ],
    process: [
      "Write the process as it runs today, not as people wish it ran, including shadow spreadsheets.",
      "Mark each step as manual, assistive AI or automatic hand-off, with an owner for each.",
      "Define shared identifiers so records stay aligned across systems when something retries.",
      "Agree who owns each system’s side of an integration change and how secrets are stored.",
      "Pilot the happy path and one common exception before expanding volume.",
      "Document how to pause or roll back a step that misbehaves, including who can disable it.",
      "Only then consider widening to additional queues, markets or system writes.",
    ],
    technologies: [
      "Documented process maps and exception queues owned by your team",
      "Integrations through APIs, webhooks or exports you authorize",
      "Assistive AI steps only where acceptance criteria are written into the scope",
      "Application or admin interfaces in TypeScript and Next.js when a custom control surface is in scope",
      "Environment configuration for credentials, never secrets in tickets or chat",
      "Operational logs for hand-offs when the agreement requires a trace of what moved",
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
          "None is mandated on this website. Tool choice depends on the systems you already use and the access you can grant. The choice belongs in the written scope. Naming a preferred vendor or reseller claim here would require owner confirmation and is not invented on this page.",
      },
      {
        question: "Do you guarantee time or cost savings?",
        answer:
          "No. This page does not publish savings percentages, headcount claims or ROI models. Any measured result belongs only in permissioned reporting after a real process has been observed under an agreement that allows that measurement.",
      },
      {
        question: "What if our process is not written down yet?",
        answer:
          "Then discovery should start with documenting steps and owners. Automating an undocumented process usually creates more cleanup than relief. That documentation work can be part of an early engagement when the agreement says so; it is not skipped by adding AI labels to the conversation.",
      },
      {
        question: "Can every step be fully automatic?",
        answer:
          "Usually not. Approvals, exceptions and high-impact writes should keep a human checkpoint unless a separate risk discussion and agreement say otherwise. Fully automatic paths without an owner for failures are outside how this service is described.",
      },
      {
        question: "Will you reverse-engineer systems we cannot authorize?",
        answer:
          "No. Integrations stay within access you can grant through supported APIs, webhooks, exports or other channels you authorize. Unsupported scraping or credential sharing outside your policies is out of scope.",
      },
    ],
    related: ["ai-agent-development", "erp-solutions"],
    icon: "/icons/icon-ai-automation.svg",
  },
  {
    slug: "erp-solutions",
    title: "ERP solutions",
    card: "ERP solutions and integration for finance, inventory or operations workflows in the ERP you use or choose.",
    seoTitle: "ERP Solutions & ERP Integration Services | QNVO Technologies",
    description:
      "ERP solutions and ERP integration services for finance, inventory and operations workflows. QNVO Technologies discusses configuration and connections for the ERP you use or choose.",
    h1: "ERP Solutions and ERP Integration Services",
    summary:
      "ERP work at QNVO Technologies covers discussion, configuration and integration of enterprise resource planning workflows such as finance, inventory or operations. It is for organizations that already use an ERP or are choosing one and can describe the process the product must support. Contact QNVO Technologies before assuming a product fit. We do not claim to be a vendor partner on this website, do not name one product as the only option and do not publish migration guarantees or price lists here. Product choice, modules and fees belong in a written scope.",
    problem:
      "Finance, inventory and operations teams often need the ERP to match how work actually runs: approvals, locations, item data, costing and hand-offs to other systems. Out-of-the-box screens can force workarounds that create bad data — duplicate items, informal approvals outside the system or reports that nobody trusts. Spreadsheets then become the real system of record. A full rebuild is not always the answer; unsupported custom forks can also make upgrades painful. Reporting requests sometimes get solved by changing core transactions when a cleaner reporting path would have been enough. This service focuses on the process first, then configuration and integration in the ERP you use or choose. It does so without claiming a reseller relationship, a preferred vendor logo or a single required product on this website. Cutover dates stay contingent on data readiness and access, not on a marketing timeline.",
    audience:
      "Finance, operations and IT leads who can describe the process they need the ERP to support and who can grant access to the product they use or plan to use. Controllers, warehouse or project leads and administrators who will live with the configuration after go-live should be reachable during discovery. The service is a poor fit when no product is licensed or choosable, when master data has no owner, or when every historical transaction is assumed to migrate without a written rule set.",
    deliverables: [
      "A process summary tied to the ERP areas and modules actually in scope",
      "A configuration or integration plan for the product you select, including environments",
      "Confirmed license constraints, roles and access limits before build work",
      "The agreed configuration, import or integration work — not an implied full-suite rollout",
      "Handover notes for the administrators you name, including what changed and why",
      "A cutover checklist when data movement is part of the scope, with rollback notes where agreed",
      "A written split between go-live hypercare and later enhancements",
    ],
    approach: [
      "Start with the business process, then the product screens, master data and reports",
      "Confirm license, environment and access limits before build work begins",
      "Prefer configuration, then supported extension, then replacement — and write which layer you chose",
      "Change configuration in the environment the agreement names, with a rehearsal when access allows",
      "Document what was changed so your administrators can support upgrades later",
    ],
    process: [
      "Name the workflows in pain and the modules those workflows touch; leave others out of scope.",
      "Prefer configuration, then extension, then replacement — and write which layer you are choosing.",
      "Clean master data before treating any cutover date as firm.",
      "Rehearse imports and integrations in a non-production environment when access allows.",
      "Document configuration changes for administrators who will support the system after go-live.",
      "Separate go-live hypercare from later enhancements in writing so silent expansion is harder.",
      "Confirm residual manual steps that remain outside the ERP so they are not treated as defects.",
    ],
    technologies: [
      "The ERP product and modules you already license or choose in the written scope",
      "Vendor-supported configuration, imports and extension points for that product",
      "Integrations through APIs, files or middleware you authorize",
      "Adjacent custom interfaces in TypeScript and Next.js when an extension UI is agreed",
      "Documented admin procedures for roles, environments and rollback",
      "Non-production rehearsal environments when your license and access allow them",
    ],
    faqs: [
      {
        question: "Are you a reseller for a specific ERP?",
        answer:
          "This website does not claim a reseller agreement, a vendor partnership or a preferred product. If a project uses a named ERP, that product is the one you already have or the one you choose in the scope. Any partnership badge or certified-partner claim would need owner confirmation and is not stated here.",
      },
      {
        question: "Can every module be included?",
        answer:
          "No. Finance, inventory, projects and other modules are included only when they are written into the scope. A general ERP conversation does not mean every module is in the engagement. Expanding modules later needs its own change note.",
      },
      {
        question: "Do you migrate all historical transactions by default?",
        answer:
          "No. Migration scope lists which records move and which stay archived. Moving everything “just in case” often delays go-live without helping daily work. Field mapping and cleanup rules belong in writing before cutover is treated as firm.",
      },
      {
        question: "Will customizations survive product upgrades?",
        answer:
          "That depends on whether the change uses supported configuration and extension points. Unsupported forks raise long-term cost and should be called out before they are chosen. This page does not promise upgrade immunity for any customization style.",
      },
      {
        question: "Can you fix reporting without changing core transactions?",
        answer:
          "Often that is the better first path. Changing core ERP behavior for a report alone can be more expensive than fixing the reporting path, and that trade-off belongs in discovery before anyone edits posting rules.",
      },
      {
        question: "Do you publish ERP project prices or fixed go-live dates here?",
        answer:
          "No. Fees and dates depend on product access, data readiness and the written scope. Public numbers on this page would be invented; they are not provided.",
      },
    ],
    related: ["enterprise-software-development", "ai-automation"],
    icon: "/icons/icon-erp.svg",
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce development",
    card: "Ecommerce website development for catalogue structure, purchasing flow and connections to payment or shipping providers you already use.",
    seoTitle: "Ecommerce Website Development Company | QNVO Technologies",
    description:
      "Ecommerce website development services for catalogues, checkout and payment connections. Talk to QNVO Technologies about ecommerce development for stores you can operate after handover.",
    h1: "Ecommerce Website Development Services",
    summary:
      "Ecommerce development covers the website and purchasing flow for selling online: catalogue structure, product information, checkout considerations and connections you specify, such as payment or shipping providers you already use. It is for businesses that can describe what they sell, where they sell and how an order should be handled after payment. Contact QNVO Technologies to discuss the catalogue. We do not promise revenue, conversion rates or a required store platform on this website. Platform choice, providers and fees belong in a written scope.",
    problem:
      "Selling online fails in quiet ways when product data is unclear, variants are incomplete, checkout cannot record what operations needs, or payment and shipping providers are bolted on without an owner. Marketing may want campaign pages that engineering cannot maintain. Tax and shipping rules get guessed at launch and then create refunds. Catalogue migrations move fields without cleanup rules, so the new store inherits the same mess. This service focuses on catalogue structure, purchasing flow and the connections you can actually contract — payment, tax and shipping providers you already use or can sign with. It does so without promising sales volume, ranking positions or naming one required store platform on this website. Launch means the surfaces and providers in the agreement, not an implied marketplace expansion.",
    audience:
      "Teams that can explain the products, the markets they sell to, tax and shipping constraints they already know, and which payment provider they intend to use. Merchandising, operations and whoever will edit the catalogue after launch should be reachable. Legal or finance input helps when refunds, invoices or restricted goods matter. The service is a poor fit when nobody owns product data, when payment credentials cannot be provided in a non-production mode first, or when the ask is “build a store that will make revenue” without an offer and fulfilment path.",
    deliverables: [
      "A catalogue and page outline for the products, variants and content types in scope",
      "A storefront implementation of that outline on the platform named in the scope",
      "Connections to the payment, tax or shipping providers named in the scope, where those providers allow it",
      "Editorial guidance for the people who will add or update products after launch",
      "Handover notes for repository or admin access named in the agreement",
      "A launch checklist covering environments, payment modes and the URLs you authorize",
      "Redirect or migration notes when an existing catalogue or URL set is in scope",
    ],
    approach: [
      "Confirm what is sold, to whom, and what the order flow must record for operations",
      "Use the commerce platform and payment provider you can contract with and operate",
      "Keep product data editable by your team where the scope includes that responsibility",
      "Treat taxes, shipping, refunds and restricted goods as explicit scope items, not assumptions",
      "Build and test checkout in a non-production mode first when the provider allows it",
    ],
    process: [
      "List products, variants and the fields operations needs after an order is paid.",
      "Choose the store platform you can license and operate, then write it into the scope.",
      "Confirm payment, tax and shipping providers before treating checkout as agreed.",
      "Build catalogue and checkout paths in a non-production mode first when the provider allows it.",
      "Train or document how your team adds products without developer help, if that is in scope.",
      "Agree redirects and field mappings when migrating from an existing catalogue.",
      "Launch only the surfaces and providers named in the agreement.",
    ],
    technologies: [
      "The ecommerce platform you license and name in the written scope",
      "Payment, tax and shipping providers you already use or can contract with",
      "Server-rendered storefront pages when a custom web build is included",
      "TypeScript, Next.js and React when a custom storefront interface is the agreed approach",
      "Tailwind CSS for storefront styling when that stack is part of the build",
      "Admin and catalogue workflows your team can operate after handover",
    ],
    faqs: [
      {
        question: "Do you guarantee online sales?",
        answer:
          "No. The service is the storefront and the integrations in the agreement. Traffic, conversion and revenue depend on the offer, the market and work that may sit outside the scope. This page does not publish sales forecasts.",
      },
      {
        question: "Which store platform is required?",
        answer:
          "This website does not require one platform. The platform is chosen from what you can license and operate, and it is named in the scope before build work is treated as agreed. A preferred-platform claim or partnership badge is not invented here.",
      },
      {
        question: "Do you handle taxes and shipping rules automatically?",
        answer:
          "Only when those providers and rules are named in the scope. Tax and shipping are not assumed from a generic template. Cross-border rules especially need explicit confirmation.",
      },
      {
        question: "Can our team edit products after launch?",
        answer:
          "Yes when the scope includes admin handover and editable catalogue fields. Unlimited content redesign, photography or merchandising strategy is not implied by a storefront build alone.",
      },
      {
        question: "Will you migrate an existing catalogue?",
        answer:
          "Migration can be included when the source, field mapping and cleanup rules are written into the scope. It is not automatic with every storefront build. Incomplete source data remains your cleanup responsibility unless the agreement says otherwise.",
      },
      {
        question: "Do you promise search rankings for product pages?",
        answer:
          "No. Technical SEO for ecommerce URLs can be a related engagement when scoped separately. This ecommerce page does not guarantee rankings, traffic or a results position.",
      },
    ],
    related: ["shopify-development", "wordpress-development", "web-development", "technical-seo"],
    icon: "/icons/icon-ecommerce.svg",
  },
  {
    slug: "web-development",
    title: "Web development",
    card: "Business web development company services for server-rendered websites with clear navigation, accessibility and page speed.",
    seoTitle: "Web Development Company for Businesses | QNVO Technologies",
    description:
      "Web development company services for business websites, SEO-friendly structure, accessibility and speed. QNVO Technologies builds sites for teams in the USA, UK, Middle East and Pakistan.",
    h1: "Web Development Company Services for Businesses",
    summary:
      "Web development company services at QNVO Technologies mean planning and building a business website with server-rendered content, SEO-friendly structure, clear navigation and attention to accessibility and speed. It is for organizations that need a site people and search engines such as Google can read, with pages and forms you can operate after handover. Contact QNVO Technologies with the pages you need. This website describes the approach. It is not a client case study, a Lighthouse score promise, a Google ranking guarantee or an unlimited content engagement. Fees and timelines belong in a written agreement.",
    problem:
      "Businesses need a website visitors can read, navigate and trust: clear pages, working forms and content that is not locked inside files or animation alone. Many sites fail because structure was never decided, accessibility was skipped, metadata was copied from a template or performance was left for later. Forms arrive without spam controls or without an owner for the inbox. Redesigns sometimes migrate URLs without redirects, breaking both visitors and search. Teams then measure vanity scores while primary tasks — understanding a service, finding contact paths — still fail. This service plans and builds server-rendered business websites with navigation, metadata and handover you can operate. It does so without treating qnvotech.com as a client case study and without publishing a performance score in advance. The Work page presents BMS and CSM as platform case studies; those are separate from a marketing-site build described here.",
    audience:
      "Organizations that can say who the site is for and which tasks a visitor should be able to complete, such as understanding a service or sending an enquiry. Marketing and engineering sponsors should agree who owns copy, who approves design and who will maintain the repository or CMS after launch. The service is a poor fit when nobody can list the pages, when hosting access cannot be granted, or when the brief is only “make it look premium” without audience or tasks.",
    deliverables: [
      "A page map and content outline for the URLs in scope, including navigation labels",
      "A responsive implementation of the agreed pages on the stack named in the agreement",
      "Metadata, headings and internal links for those pages",
      "Form handling for the enquiry paths named in the scope, including spam controls you authorize",
      "Accessibility and reduced-motion checks on the agreed templates",
      "A handover of the repository or hosting access named in the agreement",
      "Redirect notes when replacing an existing URL set is part of the scope",
    ],
    approach: [
      "Write the content structure before decorating the page or choosing motion",
      "Keep primary information in HTML rather than in animation, carousels or downloadable files alone",
      "Check keyboard use, labels, contrast and reduced-motion behavior on the agreed pages",
      "Measure performance on the pages in scope instead of claiming a score in advance",
      "Wire only the forms and third-party scripts you authorize, with an owner for each",
    ],
    process: [
      "Agree audiences, primary tasks and the page list before visual polish.",
      "Draft information architecture and content ownership for each URL.",
      "Implement server-rendered templates with clear headings and navigation.",
      "Wire forms and spam controls only for paths you authorize.",
      "Review keyboard use, labels, contrast and reduced motion on agreed pages.",
      "Check redirects and metadata when replacing an existing site.",
      "Hand over repository or hosting access and the documentation named in scope.",
    ],
    technologies: [
      "Next.js for App Router sites with trailing-slash URLs when that stack is chosen",
      "TypeScript and React for maintainable UI and server components",
      "Tailwind CSS for layout and brand styling",
      "Server-rendered HTML as the primary content delivery method",
      "Optional Cloudflare Turnstile on forms when you configure and authorize it",
      "Metadata, sitemap and robots patterns aligned with the URLs in scope",
    ],
    faqs: [
      {
        question: "Is this marketing site an example of client work?",
        answer:
          "No. qnvotech.com is the QNVO Technologies website. The Work page presents the BMS and CSM platforms as case studies. It does not present this site as client work, and it does not invent third-party testimonials for the build approach described here.",
      },
      {
        question: "Do you include copywriting?",
        answer:
          "Only when the scope says so. You can supply the copy, or a writing task can be described as its own deliverable. This page does not assume an unlimited content engagement or ongoing editorial retainer.",
      },
      {
        question: "Do you guarantee a Lighthouse score?",
        answer:
          "No. Performance is measured on the pages in scope. A score is an observation after work, not a promise published in advance. Hosting, images and third-party scripts you add later can change the result.",
      },
      {
        question: "Can you migrate an existing site?",
        answer:
          "Yes when URLs, redirects and content sources are written into the scope. Migration is not implied by a redesign request alone. Broken source content remains a cleanup task unless the agreement covers it.",
      },
      {
        question: "Will the site work without JavaScript?",
        answer:
          "Primary information should remain in HTML. Progressive enhancements can exist, but critical content and navigation should not depend on a single client script. Exact graceful-degradation behavior for each widget belongs in the scope when it matters.",
      },
      {
        question: "Do you host the site indefinitely as part of the build?",
        answer:
          "Hosting is included only when the agreement says so. Otherwise handover covers the repository or hosting access named in scope so your team can operate the site. Ongoing hosting or retainers are separate engagements.",
      },
    ],
    related: ["wordpress-development", "wix-development", "mobile-app-development", "ecommerce-development"],
    icon: "/icons/icon-web-development.svg",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    card: "Technical SEO for Google and search engines: crawl, metadata, structured data, internal links and page speed. Rankings are not guaranteed.",
    seoTitle: "Technical SEO Services for Google & Search | QNVO Technologies",
    description:
      "Technical SEO services for Google crawlability, metadata, structured data, internal links and page speed. QNVO Technologies does not guarantee rankings, traffic or a Google results position.",
    h1: "Technical SEO Services for Google and Search Engines",
    summary:
      "Technical SEO services for Google and other search engines make a website easier to crawl, understand and load. That includes indexation, metadata, structured data, internal links and performance on a domain you control — including Google Search Console properties you authorize. It is for teams that already have a site or are building one and can grant access to templates and hosting. Contact QNVO Technologies about the domain you control. QNVO Technologies does not guarantee Google rankings, traffic or a results position, does not buy links and does not invent reviews or schema that visitors cannot see. Fees belong in a written agreement.",
    problem:
      "Search engines cannot help visitors if pages are blocked from crawling, duplicated without a clear canonical, missing meaningful metadata, trapped behind client-only rendering or too heavy to load. Teams often chase rankings while templates still send mixed signals: conflicting titles, thin placeholders, orphan URLs or sitemaps that list pages robots cannot fetch. Structured data sometimes describes prices, reviews or organizations that are not visible on the page. Link buying and unverified promotional claims create a different kind of risk and are outside this service. Technical SEO removes crawl and understanding barriers on a domain you authorize. It does not buy links, invent reviews, publish fake ratings or promise a results position. Content strategy and paid media are separate conversations unless the written scope adds them.",
    audience:
      "Marketing and engineering leads who can provide access to the site, the sitemap and the search-console property for the domain they own. Someone must be able to approve template or header changes and to confirm which environments may be edited. The work does not include buying links, publishing unverified claims or working on hosts you do not control. It is a poor fit when ownership of the domain is unclear or when the only request is “get us to page one” without access to fix templates.",
    deliverables: [
      "A review of crawl, indexation, metadata, structured data, internal links and relevant headers",
      "A prioritized list of changes, separated into what is agreed for implementation versus later backlog",
      "Implementation of the items named in the scope — not an implied full-site rewrite",
      "Canonical, robots and sitemap alignment for the URLs in scope",
      "Notes on how to recheck those items after release",
      "A short retest pass for the fixes that shipped",
      "Explicit residual issues that remain out of scope so they are not mistaken for guarantees",
    ],
    approach: [
      "Read the current templates and response headers before recommending tags",
      "Prefer one clear title, description and canonical per URL",
      "Add structured data only for content that is visible on the page",
      "Fix crawl and understanding barriers before cosmetic tag churn",
      "Treat rankings and traffic as outcomes we do not control and do not promise",
    ],
    process: [
      "Confirm domain ownership and the environments that may be changed.",
      "Crawl and review templates, headers, sitemaps and indexation signals.",
      "Prioritize fixes that unblock understanding before cosmetic tag edits.",
      "Implement only the items written into the scope.",
      "Recheck shipped URLs and record what changed.",
      "Leave rankings and traffic outside any guarantee language.",
      "Hand back a short retest note so your team can repeat checks after later releases.",
    ],
    technologies: [
      "Crawl and indexation review of the templates and headers you authorize",
      "Metadata, canonical tags and XML sitemaps for URLs in scope",
      "Structured data that matches visible page content only",
      "Next.js metadata and routing patterns when the site uses that stack",
      "Performance checks on page weight and server responses for pages in scope",
      "Robots and trailing-slash URL consistency when those patterns are part of the site",
    ],
    faqs: [
      {
        question: "Can you guarantee the first page of Google?",
        answer:
          "No. Technical SEO removes barriers that stop pages from being crawled and understood. It does not control the ranking algorithm, competitors or demand for a query. This page will not publish ranking promises.",
      },
      {
        question: "Do you write misleading schema or reviews?",
        answer:
          "No. Structured data on a QNVO engagement should match content a visitor can see. Invented reviews, ratings, prices or organization details are out of scope and are not added to make rich results appear.",
      },
      {
        question: "Do you buy backlinks?",
        answer:
          "No. Link buying and unverified promotional claims are outside this service. Internal linking on URLs you control can be in scope when the agreement says so; purchased links are not.",
      },
      {
        question: "Will you work on a site we do not control?",
        answer:
          "No. Access and authority for the domain must be clear. Work stays on hosts and properties you authorize. Discovering a related host is a reason to stop and ask, not a reason to continue without permission.",
      },
      {
        question: "Is content writing included?",
        answer:
          "Only when the scope adds a writing deliverable. Technical SEO alone does not include unlimited page copy, blog production or ongoing editorial calendars.",
      },
      {
        question: "Will you change production without a staging check?",
        answer:
          "Production edits need an approval path you control. When staging is available and representative, fixes should be verified there first. Exact environments belong in the written scope.",
      },
    ],
    related: ["digital-marketing", "web-development", "website-security-optimization"],
    icon: "/icons/icon-technical-seo.svg",
  },
  {
    slug: "website-security-optimization",
    title: "Website security and optimization",
    card: "Website security and performance optimization — headers, forms, dependencies and page weight on a site you authorize us to inspect.",
    seoTitle: "Website Security & Performance Optimization | QNVO Technologies",
    description:
      "Website security and performance optimization services: headers, forms, dependencies and page weight reviews on sites you authorize. Discuss website hardening with QNVO Technologies.",
    h1: "Website Security and Performance Optimization Services",
    summary:
      "Website security and optimization means reviewing how a site is exposed and how it performs, including transport, headers, form handling, dependencies and page weight, then agreeing what to change. It is for organizations that own a website and can provide review access to defined hosts and paths. Contact QNVO Technologies about the site you control. This is not a certification, a penetration-test badge, an uptime promise or a legal compliance guarantee. Scope and fees belong in a written agreement before fixes are treated as committed.",
    problem:
      "Public websites collect forms, load third-party scripts and expose headers that quietly weaken trust. Teams also ship pages that are heavier than they need to be: unoptimized assets, unused dependencies or scripts that block rendering. Forms may lack spam controls or send mail without rate limits. Staging and production sometimes share credentials in tickets. A full penetration test, a bug-bounty program or a legal compliance opinion is a different engagement with different authorization. This service reviews authorized surfaces — transport, headers, forms, dependencies and page weight — then fixes what the agreement includes. It does so without inventing a certification badge, without promising the site cannot be breached and without expanding into hosts that were never authorized. Residual risk that remains out of scope is written down so it is not mistaken for a clean bill of health.",
    audience:
      "Site owners and engineering leads who can share a staging environment or a defined production scope, and who can approve changes before they ship. Someone must own secrets handling and must be able to say which third-party scripts are required. The service is a poor fit when no authorization letter or agreement defines the hosts, when real personal data is the only test data available, or when the ask is a compliance certificate for a regulator without a separate legal engagement.",
    deliverables: [
      "A review of the agreed surfaces, such as headers, forms, dependencies or page weight",
      "Findings written so a developer can reproduce the issue, not only a severity label",
      "Fixes for the findings the agreement includes",
      "Hardening notes for forms and headers in scope",
      "A short retest note for those fixes",
      "Guidance on what remains outside the review and still needs a separate engagement",
      "An explicit list of hosts and paths that were in bounds for the review",
    ],
    approach: [
      "Limit the review to hosts and paths you authorize in writing",
      "Prefer concrete fixes over a generic score or marketing grade",
      "Keep secrets, tokens and customer data out of tickets and email threads",
      "Separate a website review from a formal audit, certification or legal opinion",
      "Stop and ask if a related host appears that was never authorized",
    ],
    process: [
      "Write the hosts, paths and environments that are in bounds before any probing begins.",
      "Review transport, headers, form handling, dependencies and page weight on those surfaces.",
      "Report findings with reproduction steps, not vague severity labels alone.",
      "Implement only the fixes named in the agreement.",
      "Retest those fixes and record residual risk that remains out of scope.",
      "Confirm spam controls and form paths still behave for legitimate visitors after hardening.",
      "Stop and ask if a related host appears that was never authorized.",
    ],
    technologies: [
      "HTTP security headers and transport checks on authorized hosts",
      "Form handling review, including spam controls such as honeypots and optional Turnstile when configured",
      "Dependency and page-weight review for the templates in scope",
      "Next.js and TypeScript application fixes when the site uses that stack",
      "Content-security and caching headers only where they fit the agreed architecture",
      "Environment-based secrets handling so credentials are not shared in tickets",
    ],
    faqs: [
      {
        question: "Is this a penetration test or a compliance certificate?",
        answer:
          "No. The service described here is a website review and the fixes you agree. A penetration test, a certification or a legal compliance opinion would need its own scope and is not claimed on this page. No badge on this website should be read as a formal audit result.",
      },
      {
        question: "Will you test systems you were not given?",
        answer:
          "No. Work stays on the environments and URLs in the agreement. Finding a related host is a reason to stop and ask, not a reason to continue without permission. Unauthorized scanning is out of scope.",
      },
      {
        question: "Do you guarantee the site cannot be breached?",
        answer:
          "No. No public website review can promise that. The engagement covers the surfaces and fixes written into the scope. Uptime, insurance and legal compliance are not implied.",
      },
      {
        question: "Can you review a staging site only?",
        answer:
          "Yes when staging is representative and access is authorized. Production changes still need their own approval path. Differences between staging and production should be called out so findings are not misapplied.",
      },
      {
        question: "Will you store customer data from our forms while testing?",
        answer:
          "Testing should avoid real personal data. Use staging or anonymized samples. Secrets and customer data stay out of tickets and email threads. If production form traffic must be observed, that needs explicit authorization and a data-handling note in the agreement.",
      },
      {
        question: "Do you publish vulnerability scores or letter grades on this page?",
        answer:
          "No. Findings belong in the engagement report for the hosts you authorized. Public grades, invented severity counts or marketing “A+ security” claims are not part of how this service is described.",
      },
    ],
    related: ["cybersecurity-risk-management", "web-development", "technical-seo"],
    icon: "/icons/icon-security-optimization.svg",
  },
];

export const serviceCatalog: Service[] = [...coreServiceCatalog, ...extendedServiceCatalog];
