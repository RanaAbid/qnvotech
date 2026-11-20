/**
 * QNVO product catalog for the public website.
 * Capability lists follow the published product pages the owner operates —
 * rewritten under QNVO names. Prices, customer counts and uptime guarantees are omitted.
 */

export type ProductStatus = "live" | "private-beta" | "live-demo" | "mobile";

export type ProductCapability = {
  title: string;
  body: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  status: ProductStatus;
  statusLabel: string;
  /** Live product / demo / store URL when one exists. */
  appUrl?: string;
  appCta: string;
  heroImage: string;
  heroAlt: string;
  gallery: { base: string; alt: string }[];
  whoFor: string;
  prepNote: string;
  notClaimed: string;
  relatedServiceSlugs: string[];
  capabilities: ProductCapability[];
  modules: string[];
  faqs: ProductFaq[];
};

const noPrices =
  "This page does not publish prices, license tiers, customer counts, uptime SLAs or named client logos. Those belong in a verified agreement or store listing.";

export const products: Product[] = [
  {
    slug: "my-pos",
    name: "QNVO My POS",
    shortName: "My POS",
    tagline: "Point of sale, inventory and sales operations in one product.",
    description:
      "QNVO My POS is QNVO Technologies’ point-of-sale product for retail and warehouse-style operations. It covers the POS screen, catalogue, purchases, sales, returns, customers, suppliers, warehouses and operational reports. Access is role-based. Fees, hosting and rollout details belong in a written agreement — not on this page.",
    seoTitle: "QNVO My POS | Point of Sale Product | QNVO Technologies",
    seoDescription:
      "QNVO My POS is a point-of-sale product from QNVO Technologies for sales, inventory, purchases, customers, warehouses and reports. Open the live app at my-pos.qnvotech.com.",
    status: "live",
    statusLabel: "Live product",
    appUrl: "https://my-pos.qnvotech.com/",
    appCta: "Open My POS",
    heroImage: "/images/product-my-pos-counter",
    heroAlt: "Retail counter with a touchscreen POS terminal ready for checkout",
    gallery: [
      { base: "/images/product-my-pos-counter", alt: "Checkout counter with POS screen, scanner and payment terminal" },
      { base: "/images/product-my-pos-handheld", alt: "Handheld POS tablet at the counter with scanner and receipt printer" },
      { base: "/images/product-my-pos-inventory", alt: "Warehouse aisle with stock checked on a tablet" },
      { base: "/images/product-my-pos-reports", alt: "Desk monitors showing sales and stock report dashboards" },
    ],
    whoFor:
      "Retail and operations teams that need a POS screen, product catalogue, purchase and sale flows, customer and supplier records, warehouse stock views and reports — with users and permissions they can control.",
    prepNote:
      "Credentials are issued by QNVO Technologies. A website visit does not create an account.",
    notClaimed: noPrices,
    relatedServiceSlugs: ["enterprise-software-development", "ecommerce-development", "saas-development"],
    capabilities: [
      { title: "POS checkout screen", body: "A dedicated POS screen for counter sales, with catalogue access and sale completion for staff who have the POS permission." },
      { title: "Catalogue and stock", body: "Products, categories, variations, units, brands and stock adjustments so the shelf count and the system stay aligned." },
      { title: "Purchases and sales", body: "Purchase and sale records, purchase returns and sale returns, plus quotations that can convert into a sale when you choose." },
      { title: "People and places", body: "Customers, suppliers, warehouses and user accounts with role-based permissions for the modules you assign." },
      { title: "Reports", body: "Operational reports for sales, purchases, stock, warehouses, top-selling products, product quantity, suppliers and profit-loss views available in the product." },
      { title: "Settings and receipts", body: "Company settings, document prefixes, mail settings, receipt settings and barcode printing for labelled stock." },
    ],
    modules: [
      "Dashboard",
      "POS screen",
      "Products and categories",
      "Variations and units",
      "Brands and currencies",
      "Warehouses",
      "Stock adjustments",
      "Purchases and purchase returns",
      "Sales and sale returns",
      "Quotations",
      "Customers and suppliers",
      "Expenses",
      "Users and roles",
      "Sales, stock and warehouse reports",
      "Top-selling and product-quantity reports",
      "Supplier and profit-loss reports",
      "Barcode printing",
      "Receipt and mail settings",
    ],
    faqs: [
      {
        question: "Where do I open My POS?",
        answer:
          "The live product is at https://my-pos.qnvotech.com/. Sign-in uses credentials issued for your organisation. This marketing page cannot create accounts.",
      },
      {
        question: "What does My POS include?",
        answer:
          "POS screen, catalogue tools, purchases and sales with returns, quotations, customers, suppliers, warehouses, expenses, user permissions and operational reports. Exact module access depends on roles.",
      },
      {
        question: "Does this page publish prices?",
        answer: "No. Pricing, hosting and rollout terms are not listed here. Email info@qnvotech.com or use the contact form.",
      },
      {
        question: "Is My POS a custom project or a product?",
        answer:
          "My POS is a QNVO Technologies product. Custom configuration, data migration and training can be discussed as related services when written into an agreement.",
      },
    ],
  },
  {
    slug: "ayrochat",
    name: "QNVO Chat",
    shortName: "QNVO Chat",
    tagline: "WhatsApp AI workspace for replies, leads, appointments, follow-ups and human handover.",
    description:
      "QNVO Chat is a WhatsApp AI workspace that keeps customer replies and the work around them in one place. It suits teams handling recurring questions, new leads, appointments and follow-ups — with human handover when a person needs to take over.",
    seoTitle: "QNVO Chat | WhatsApp AI Workspace | QNVO Technologies",
    seoDescription:
      "QNVO Chat is a WhatsApp AI workspace from QNVO Technologies for replies, leads, appointments, follow-ups and human handover. Live product link and setup terms discussed separately.",
    status: "live",
    statusLabel: "Live product",
    appUrl: "https://whatsapp.ayroflow.com/",
    appCta: "Open QNVO Chat",
    heroImage: "/images/product-ayrochat",
    heroAlt: "Support desk with WhatsApp conversation workspace on a laptop and phone",
    gallery: [
      { base: "/images/product-ayrochat", alt: "WhatsApp AI workspace on laptop beside a phone" },
      { base: "/images/product-generic-suite", alt: "Multi-device software workspace on a desk" },
    ],
    whoFor:
      "Teams that answer recurring WhatsApp questions, capture leads, book appointments and need a clear path for a person to take over a conversation.",
    prepNote:
      "Prepare the business information the agent may use, identify who owns incoming conversations, and decide which situations need human review before connecting a business account.",
    notClaimed: noPrices,
    relatedServiceSlugs: ["ai-agent-development", "ai-automation", "mobile-app-development"],
    capabilities: [
      { title: "AI-assisted replies", body: "Suggested replies grounded in the business knowledge you approve for the workspace." },
      { title: "Lead capture", body: "Conversation flows that collect lead details into the workspace instead of leaving them in chat history alone." },
      { title: "Appointments and follow-ups", body: "Scheduling and follow-up patterns for teams that repeat the same next steps after a reply." },
      { title: "Human handover", body: "A person can take over when the situation needs judgment, tone or an exception the agent should not handle alone." },
      { title: "Conversation reporting", body: "Workspace reporting so operators can review how conversations moved — without inventing outcome metrics on this page." },
    ],
    modules: ["WhatsApp inbox", "AI replies", "Lead capture", "Appointments", "Follow-ups", "Human handover", "Conversation reporting", "Business knowledge"],
    faqs: [
      {
        question: "Can a person take over a conversation?",
        answer:
          "Human handover is part of the QNVO Chat workflow. Which situations trigger it and who is responsible should be agreed during setup.",
      },
      {
        question: "Is QNVO Chat the same as QNVO B.R.A.I.N.?",
        answer:
          "QNVO Chat focuses on WhatsApp operations. QNVO B.R.A.I.N. covers a wider set of business agent workflows including website support, interviews, scheduling and lead research.",
      },
      {
        question: "Where do I open QNVO Chat?",
        answer:
          "The live product is linked from this page. Account connection, WhatsApp requirements and commercial terms are confirmed with QNVO Technologies — not created by visiting the marketing site.",
      },
    ],
  },
  {
    slug: "ayrolink",
    name: "QNVO Link",
    shortName: "QNVO Link",
    tagline: "Real-time WhatsApp voice agent with shared context, operator takeover and authorized MCP access.",
    description:
      "QNVO Link carries conversation context across live WhatsApp calls, text, images and voice notes. Operators can review conversations, transcripts and call summaries in one workspace. Follow-up calls require opt-in, and approved users can work through authorized MCP clients.",
    seoTitle: "QNVO Link | WhatsApp Voice Agent | QNVO Technologies",
    seoDescription:
      "QNVO Link is a WhatsApp voice agent product with shared conversation context, operator takeover and authorized MCP client access. Listed as private beta — access is approved by an administrator.",
    status: "private-beta",
    statusLabel: "Private beta",
    appUrl: "https://ayrolink.ayroflow.com/",
    appCta: "Request QNVO Link access",
    heroImage: "/images/product-ayrolink",
    heroAlt: "Headset and laptop showing a live voice-agent call workspace",
    gallery: [
      { base: "/images/product-ayrolink", alt: "Operator desk with headset and voice-agent dashboard" },
      { base: "/images/product-generic-suite", alt: "Multi-device software workspace on a desk" },
    ],
    whoFor:
      "Teams that need WhatsApp voice and message context in one place, with operator takeover and controlled access for approved operators.",
    prepNote:
      "Private beta access is approved by an administrator before a WhatsApp account can be linked. Opt-in rules for follow-up calls should be agreed before rollout.",
    notClaimed: noPrices,
    relatedServiceSlugs: ["ai-agent-development", "ai-automation", "api-development-integration"],
    capabilities: [
      { title: "Shared call and message context", body: "Conversation context continues across live WhatsApp calls, text, images and voice notes." },
      { title: "Operator workspace", body: "Operators can review conversations, transcripts and call summaries without leaving the workspace." },
      { title: "Operator takeover", body: "A person can take over when a live conversation needs a human response." },
      { title: "Consent for follow-up calls", body: "Follow-up calls require opt-in so outbound voice contact stays under agreed consent rules." },
      { title: "Authorized MCP access", body: "Approved users can initiate calls and review outcomes through compatible MCP clients when access is granted." },
    ],
    modules: ["Live voice calls", "WhatsApp text", "Images and voice notes", "Transcripts", "Call summaries", "Operator takeover", "Opt-in follow-ups", "MCP client access"],
    faqs: [
      {
        question: "How do I join the private beta?",
        answer:
          "Request access from the QNVO Link product link. An administrator approves access before you can link a WhatsApp account and use the agent.",
      },
      {
        question: "Does every call happen automatically?",
        answer:
          "Operators retain takeover control, and follow-up calls require opt-in. Exact call policies belong in your deployment agreement.",
      },
    ],
  },
  {
    slug: "brain",
    name: "QNVO B.R.A.I.N.",
    shortName: "B.R.A.I.N.",
    tagline: "Multi-agent platform for website support, WhatsApp, interviews, scheduling and lead research.",
    description:
      "QNVO B.R.A.I.N. is a multi-agent platform for business automation. It brings website and WhatsApp agents together with interview, scheduling and lead research workflows — so you can start with one process and expand when the systems and permissions are ready.",
    seoTitle: "QNVO B.R.A.I.N. Multi-Agent Platform | QNVO Technologies",
    seoDescription:
      "QNVO B.R.A.I.N. is a multi-agent platform for website support, WhatsApp, interviews, scheduling and lead research. Live product link available; scope and integrations are agreed in writing.",
    status: "live",
    statusLabel: "Live product",
    appUrl: "https://brain.ayroflow.com/",
    appCta: "Open B.R.A.I.N.",
    heroImage: "/images/product-brain",
    heroAlt: "Operations desk with multiple agent workflow screens",
    gallery: [
      { base: "/images/product-brain", alt: "Multi-agent workflow screens on a modern operations desk" },
      { base: "/images/product-generic-suite", alt: "Multi-device software workspace on a desk" },
    ],
    whoFor:
      "Organizations that want business agents across website support, WhatsApp, interviews, scheduling or lead research — starting with one workflow rather than everything at once.",
    prepNote:
      "Start with one workflow and its approved knowledge. Identify the systems it needs to reach, what actions it may take, and who handles exceptions.",
    notClaimed: noPrices,
    relatedServiceSlugs: ["ai-agent-development", "ai-automation", "ai-machine-learning", "saas-development"],
    capabilities: [
      { title: "Website support agents", body: "Customer-facing agents for website support when knowledge and escalation paths are defined." },
      { title: "WhatsApp business conversations", body: "WhatsApp workflows that sit alongside the wider agent platform rather than as a standalone inbox only." },
      { title: "Voice interviews and scheduling", body: "Interview and scheduling workflows that keep people responsible for final decisions." },
      { title: "Lead research", body: "Lead research and administration patterns for teams that need structured next steps from agent output." },
      { title: "Focused rollout", body: "A focused implementation can begin with one workflow before channels and integrations expand." },
    ],
    modules: ["Website support", "WhatsApp agents", "Voice interviews", "Scheduling", "Lead research", "Administration", "Approved knowledge", "Exception handling"],
    faqs: [
      {
        question: "Do all agents have to launch at once?",
        answer: "No. A focused implementation can begin with one workflow. Discuss required channels and integration scope before expanding.",
      },
      {
        question: "Where do I explore the platform?",
        answer:
          "Open the live B.R.A.I.N. product link from this page. Tailored implementation still needs the workflow and systems written into a conversation with QNVO Technologies.",
      },
    ],
  },
  {
    slug: "securedesk-ai",
    name: "QNVO SecureDesk AI",
    shortName: "SecureDesk AI",
    tagline: "Human-first AI helpdesk for IT, security, cloud and operations teams.",
    description:
      "QNVO SecureDesk AI is an AI-assisted helpdesk for IT, security, cloud and operations teams. It brings email, web requests and chat into a support workflow where people remain responsible for decisions, approvals and audit history.",
    seoTitle: "QNVO SecureDesk AI | Human-First AI Helpdesk | QNVO Technologies",
    seoDescription:
      "QNVO SecureDesk AI is a human-first AI helpdesk for IT, security, cloud and operations teams — request intake, AI-assisted triage, approvals and audit history. Live product linked from this page.",
    status: "live",
    statusLabel: "Live product",
    appUrl: "https://securedesk.ayroflow.com/",
    appCta: "Open SecureDesk AI",
    heroImage: "/images/product-securedesk",
    heroAlt: "IT operations helpdesk with ticket queues on dual monitors",
    gallery: [
      { base: "/images/product-securedesk", alt: "Helpdesk monitors showing ticket triage and approvals" },
      { base: "/images/product-generic-suite", alt: "Multi-device software workspace on a desk" },
    ],
    whoFor:
      "IT, security, cloud and operations teams that need request intake, assisted triage and human approvals in one helpdesk workflow.",
    prepNote:
      "Identify request owners, approval requirements and the information each role may access before configuring channels and service-level rules.",
    notClaimed: noPrices,
    relatedServiceSlugs: ["it-helpdesk-support", "cybersecurity-risk-management", "cloud-devops", "ai-automation"],
    capabilities: [
      { title: "Multi-channel intake", body: "Request intake across email, web and chat into one support workflow." },
      { title: "AI-assisted triage", body: "Assisted triage that still expects human review where your rules require it." },
      { title: "Human approvals", body: "Approval steps stay with people — AI does not replace the approval process by default." },
      { title: "Service-level workflows", body: "Support workflows that can reflect the service-level configuration agreed for your deployment." },
      { title: "Audit history", body: "History of how requests moved so operators can review decisions later." },
    ],
    modules: ["Email intake", "Web requests", "Chat intake", "AI triage", "Human approvals", "Service-level workflows", "Audit history", "Role access"],
    faqs: [
      {
        question: "Does AI replace the approval process?",
        answer:
          "QNVO SecureDesk AI is presented as a human-first helpdesk with governed triage and approvals. Approval rules and permitted actions need to be agreed for your deployment.",
      },
      {
        question: "Which teams is it for?",
        answer: "IT, security, cloud and operations teams that handle support requests and need people accountable for decisions.",
      },
    ],
  },
  {
    slug: "ayrovoice",
    name: "QNVO Voice",
    shortName: "QNVO Voice",
    tagline: "Role-aware AI interviews that turn conversations into structured recruiter-ready outcomes.",
    description:
      "QNVO Voice demonstrates role-aware AI interviews. Candidates take part in a natural conversation, and the workflow produces structured outcomes for recruiter review — while hiring decisions stay with people.",
    seoTitle: "QNVO Voice | AI Interview Demo | QNVO Technologies",
    seoDescription:
      "QNVO Voice is a live demo of role-aware AI interviews that produce structured recruiter-ready outcomes. Production hiring scope is discussed separately — this page does not publish prices.",
    status: "live-demo",
    statusLabel: "Live demo",
    appUrl: "https://ayrovoice.ayroflow.com/",
    appCta: "Open QNVO Voice demo",
    heroImage: "/images/product-ayrovoice",
    heroAlt: "Interview desk with headset and structured candidate review screen",
    gallery: [
      { base: "/images/product-ayrovoice", alt: "Voice interview setup with recruiter review screen" },
      { base: "/images/product-generic-suite", alt: "Multi-device software workspace on a desk" },
    ],
    whoFor: "Recruiters and hiring teams exploring a voice interview workflow that keeps final decisions with people.",
    prepNote:
      "Have the role description, evaluation topics and review process ready. Agree recording, consent and retention requirements before a real candidate rollout.",
    notClaimed: noPrices,
    relatedServiceSlugs: ["ai-agent-development", "ai-machine-learning", "ui-ux-design"],
    capabilities: [
      { title: "Role-aware conversations", body: "Voice conversations shaped around a role description you provide for the demonstration or deployment." },
      { title: "Structured outcomes", body: "Interview information organized for recruiter review instead of leaving only a raw recording." },
      { title: "Human hiring decisions", body: "The workflow keeps hiring decisions with people — it does not claim automatic hiring." },
      { title: "Demo-first access", body: "Listed as a live demo. Production access and deployment scope are discussed separately." },
    ],
    modules: ["Role setup", "Voice conversation", "Evaluation topics", "Structured outcomes", "Recruiter review", "Consent and retention notes"],
    faqs: [
      {
        question: "Is QNVO Voice a production hiring service on this page?",
        answer:
          "It is listed as a live demo. Production requirements, access and deployment scope should be discussed separately with QNVO Technologies.",
      },
      {
        question: "Who makes the hiring decision?",
        answer: "People do. The product organizes interview outcomes for recruiter review.",
      },
    ],
  },
  {
    slug: "budgetiq",
    name: "QNVO BudgetIQ",
    shortName: "BudgetIQ",
    tagline: "Local-first expense and income tracking with AI-assisted voice, chat and budget planning.",
    description:
      "QNVO BudgetIQ is a mobile app for tracking expenses and income, reviewing spending and planning budgets. AI-assisted voice and chat give people additional ways to work with their records, with local-first record keeping.",
    seoTitle: "QNVO BudgetIQ | Local-First Budget App | QNVO Technologies",
    seoDescription:
      "QNVO BudgetIQ is a local-first mobile app for expense and income tracking with AI-assisted voice, chat and budget planning. Current store availability belongs on the app listing — not as invented prices here.",
    status: "mobile",
    statusLabel: "Mobile app",
    appCta: "Discuss BudgetIQ access",
    heroImage: "/images/product-budgetiq",
    heroAlt: "Smartphone showing a personal budget and expense tracking app",
    gallery: [
      { base: "/images/product-budgetiq", alt: "Phone displaying expense tracking and budget charts" },
      { base: "/images/product-generic-suite", alt: "Multi-device software workspace on a desk" },
    ],
    whoFor:
      "People who want everyday expense and income tracking with optional voice and chat assistance, without this marketing page quoting store prices.",
    prepNote:
      "Check the current app store listing for device requirements and purchase information before installing. Review privacy and terms for the app before use.",
    notClaimed: noPrices,
    relatedServiceSlugs: ["mobile-app-development", "ai-agent-development", "saas-development"],
    capabilities: [
      { title: "Expense and income tracking", body: "Record everyday money movement in a focused mobile workflow." },
      { title: "AI-assisted voice and chat", body: "Optional voice and chat interactions for working with records when typing is slower." },
      { title: "Spending summaries", body: "Summaries that help people review where money went — without invented savings claims." },
      { title: "Budget planning", body: "Budget planning tools for people who want a plan next to their records." },
      { title: "Local-first records", body: "Local-first record keeping as described for the product — confirm current store details before install." },
    ],
    modules: ["Expenses", "Income", "Voice capture", "Chat assist", "Spending summaries", "Budget plans", "Local records"],
    faqs: [
      {
        question: "Where is current pricing?",
        answer:
          "Use the current app store listing for availability and purchase information. This overview does not quote subscription prices.",
      },
      {
        question: "How do I get access?",
        answer:
          "Email info@qnvotech.com or use the contact form if you need help finding the current listing or discussing a related build.",
      },
    ],
  },
  {
    slug: "dump",
    name: "QNVO Dump",
    shortName: "Dump",
    tagline: "A focused mobile app for capturing thoughts through text or voice.",
    description:
      "QNVO Dump is a focused mobile app for capturing and organizing thoughts through text or voice, with local persistence. It is practical everyday software for people who need a fast place to put an idea.",
    seoTitle: "QNVO Dump | Thought Capture Mobile App | QNVO Technologies",
    seoDescription:
      "QNVO Dump is a focused mobile app for capturing thoughts through text or voice with local persistence. Current store availability belongs on the app listing.",
    status: "mobile",
    statusLabel: "Mobile app",
    appCta: "Discuss Dump access",
    heroImage: "/images/product-dump",
    heroAlt: "Smartphone note-capture app with text and voice input",
    gallery: [
      { base: "/images/product-dump", alt: "Phone showing a simple thought-capture notes interface" },
      { base: "/images/product-generic-suite", alt: "Multi-device software workspace on a desk" },
    ],
    whoFor: "Anyone who wants a simple place to capture thoughts by text or voice and keep them organized on the device.",
    prepNote:
      "Visit the current app store listing for availability and device requirements. Review the app’s privacy practices before use.",
    notClaimed: noPrices,
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design"],
    capabilities: [
      { title: "Text capture", body: "Capture a thought in text when typing is the fastest option." },
      { title: "Voice capture", body: "Use voice when speaking is easier than typing." },
      { title: "Organize thoughts", body: "Keep and organize captured thoughts in a focused mobile workflow." },
      { title: "Local persistence", body: "Local persistence for captured notes as described for the product — confirm store details before install." },
    ],
    modules: ["Text notes", "Voice notes", "Organize", "Local persistence"],
    faqs: [
      {
        question: "Where do I download Dump?",
        answer:
          "Use the current app store listing for availability. Contact info@qnvotech.com if you need help locating it or discussing a related build.",
      },
      {
        question: "Is Dump an AI agent platform?",
        answer: "No. Dump is a focused capture app. Multi-agent workflows live under QNVO B.R.A.I.N. and related products.",
      },
    ],
  },
];

export function productBySlug(slug: string): Product | undefined {
  return products.find((item) => item.slug === slug);
}

export function productsInOrder(): Product[] {
  return [...products];
}

export function productSlugs(): string[] {
  return products.map((item) => item.slug);
}
