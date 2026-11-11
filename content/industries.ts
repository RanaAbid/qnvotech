export type Industry = {
  slug: string;
  title: string;
  card: string;
  seoTitle: string;
  description: string;
  h1: string;
  summary: string;
  realities: string[];
  challenges: string[];
  howWeHelp: string[];
  services: { href: string; label: string }[];
  note: string;
};

export const industries: Industry[] = [
  {
    slug: "banking-fintech",
    title: "Banking and fintech",
    card: "Controls, audit trails and careful change for money-moving workflows.",
    seoTitle: "Banking and Fintech Technology Services | QNVO Technologies",
    description:
      "Discuss software, security, cloud and support for banking and fintech workflows with QNVO Technologies. Scope is agreed in writing. Compliance certificates are not sold on this page.",
    h1: "Technology Services for Banking and Fintech",
    summary:
      "Banking and fintech work at QNVO Technologies means software, integrations and operational controls for workflows that move money or customer financial data. Conversations start with the process, the systems of record and who may approve production changes. This page does not invent client logos, audit outcomes or regulatory certifications.",
    realities: [
      "Change windows and dual control matter more than flashy demos",
      "Identity, logging and least privilege are part of the product, not an afterthought",
      "Vendor and cloud choices often follow procurement and residency rules you already have",
    ],
    challenges: [
      "Legacy cores and new channels that must share a single customer view without unsafe shortcuts",
      "Access reviews that stall because entitlements live in too many places",
      "Backup and recovery plans that exist on paper but are rarely restore-tested",
    ],
    howWeHelp: [
      "Map the workflow, data classes and approval paths before proposing a stack",
      "Build or integrate only the interfaces named in the written scope",
      "Harden access, logging and recovery items you authorize — without publishing fake grades",
    ],
    services: [
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
      { href: "/services/data-backup-protection/", label: "Data backup and protection" },
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
    ],
    note: "No bank names, AUM figures or compliance badges are claimed here.",
  },
  {
    slug: "ecommerce-retail",
    title: "Ecommerce and retail",
    card: "Catalogue, checkout and peak-traffic readiness for stores you can operate.",
    seoTitle: "Ecommerce and Retail Technology Services | QNVO Technologies",
    description:
      "Plan ecommerce storefronts, integrations and performance work with QNVO Technologies. Sales and ranking outcomes are not guaranteed on this website.",
    h1: "Technology Services for Ecommerce and Retail",
    summary:
      "Retail and ecommerce engagements focus on catalogue structure, purchasing flows and the systems that fulfil an order after payment. Platform choice — including Shopify, WordPress/WooCommerce or a custom storefront — belongs in the written scope. Revenue and conversion promises are not published here.",
    realities: [
      "Merchandising teams need editable product data after launch",
      "Payment, tax and shipping providers must be ones you can contract with",
      "Seasonal traffic needs capacity planning, not hope",
    ],
    challenges: [
      "Checkout paths that cannot record what operations needs after payment",
      "Theme or plugin debt that blocks campaign pages",
      "POS and online channels that still require double entry",
    ],
    howWeHelp: [
      "Agree catalogue, checkout and provider boundaries before build",
      "Implement storefront and integrations named in scope, with non-production payment tests when available",
      "Plan performance and scaling work against observed bottlenecks you authorize us to measure",
    ],
    services: [
      { href: "/services/ecommerce-development/", label: "Ecommerce development" },
      { href: "/services/shopify-development/", label: "Shopify development" },
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
    ],
    note: "No GMV, conversion rates or partner badges are claimed here.",
  },
  {
    slug: "travel-hospitality",
    title: "Travel and hospitality",
    card: "Booking, availability and channel integrations with clear failure handling.",
    seoTitle: "Travel and Hospitality Technology Services | QNVO Technologies",
    description:
      "Discuss booking platforms, channel APIs and guest-facing sites with QNVO Technologies. Uptime SLAs are agreed in writing if at all — not invented on this page.",
    h1: "Technology Services for Travel and Hospitality",
    summary:
      "Travel and hospitality work centers on availability, booking and the hand-off to operations. API contracts, idempotency and partner rate limits matter as much as the guest UI. This page does not invent occupancy metrics or channel-manager endorsements.",
    realities: [
      "Inventory can change while a guest is mid-checkout",
      "Partners and OTAs often force integration constraints you do not control",
      "Support hours for guest-facing incidents should be written, not assumed",
    ],
    challenges: [
      "Booking logic trapped inside one vendor UI with no reusable API",
      "Channel updates that duplicate or drop reservations under load",
      "Content sites that cannot keep rates and offers consistent across languages",
    ],
    howWeHelp: [
      "Define booking and inventory contracts before adding new frontends",
      "Integrate only channels and providers named in the agreement",
      "Document failure queues and support ownership for guest-facing paths in scope",
    ],
    services: [
      { href: "/services/api-development-integration/", label: "API development and integration" },
      { href: "/services/saas-development/", label: "SaaS development" },
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/it-helpdesk-support/", label: "IT helpdesk and support" },
    ],
    note: "No hotel brands, booking volume or uptime percentages are claimed here.",
  },
  {
    slug: "healthcare-pharmaceuticals",
    title: "Healthcare and pharmaceuticals",
    card: "Careful handling of sensitive data, access and change control.",
    seoTitle: "Healthcare Technology Services | QNVO Technologies",
    description:
      "Discuss software, security and backup for healthcare and pharmaceutical workflows with QNVO Technologies. Clinical claims and certifications are not published on this page.",
    h1: "Technology Services for Healthcare and Pharmaceuticals",
    summary:
      "Healthcare and pharmaceutical conversations emphasize data classification, access control and auditable change. QNVO Technologies does not practice medicine and does not sell clinical outcomes. Engagements stay inside the systems and environments you authorize.",
    realities: [
      "Wrong access can be more damaging than a slow screen",
      "Vendors and cloud regions may be constrained by policy you already follow",
      "Restore tests matter when records cannot be reconstructed from memory",
    ],
    challenges: [
      "Portals and internal tools that grew without a clear permission model",
      "Backups that sit on the same reachable path as production",
      "Integrations that move patient or product data without durable logs",
    ],
    howWeHelp: [
      "Write data classes, roles and non-goals into the scope before build",
      "Harden and review systems you authorize; residual risk stays visible",
      "Plan backup and recovery drills for stores named in the agreement",
    ],
    services: [
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/data-backup-protection/", label: "Data backup and protection" },
      { href: "/services/website-security-optimization/", label: "Website security and optimization" },
    ],
    note: "No hospital names, patient counts or HIPAA/certification badges are claimed here.",
  },
  {
    slug: "medical-devices-diagnostics",
    title: "Medical devices and diagnostics",
    card: "Traceable software changes and data platforms around regulated products.",
    seoTitle: "Medical Devices and Diagnostics Software | QNVO Technologies",
    description:
      "Discuss software and data platforms around medical devices and diagnostics with QNVO Technologies. Device certification and clinical validation are not sold on this website.",
    h1: "Technology Services for Medical Devices and Diagnostics",
    summary:
      "Device and diagnostics adjacent software needs traceable changes, clear ownership of configurations and careful interfaces to instruments or lab systems. QNVO Technologies does not claim to certify devices. Scope stays with the software and data paths you authorize.",
    realities: [
      "Change history is part of trust, not optional documentation",
      "Instrument and LIS interfaces are often vendor-constrained",
      "Environments for validation and production should stay separated",
    ],
    challenges: [
      "Configuration drift between sites with no single source of truth",
      "Data pipelines that cannot explain who changed a mapping",
      "Updates that skip a documented rollback path",
    ],
    howWeHelp: [
      "Capture configuration ownership and environment rules in writing",
      "Implement interfaces and platforms named in scope with audit-friendly notes when required",
      "Coordinate releases with the approval path your quality process needs",
    ],
    services: [
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/iot-solutions/", label: "IoT solutions" },
      { href: "/services/api-development-integration/", label: "API development and integration" },
      { href: "/services/database-management/", label: "Database management" },
    ],
    note: "No device brands, clearance numbers or clinical study results are claimed here.",
  },
  {
    slug: "energy-oil-gas",
    title: "Energy, oil and gas",
    card: "Segmented networks, remote sites and continuity for operational systems.",
    seoTitle: "Energy and Oil & Gas Technology Services | QNVO Technologies",
    description:
      "Discuss cloud, security, IoT and continuity work for energy operations with QNVO Technologies. Field uptime guarantees are not invented on this page.",
    h1: "Technology Services for Energy, Oil and Gas",
    summary:
      "Energy sector work often spans remote sites, segmented networks and systems that cannot be treated like a simple office SaaS. Engagements focus on connectivity, identity and continuity for the environments you name. Safety-critical process control remains outside marketing claims on this site.",
    realities: [
      "Connectivity and power constraints shape architecture more than slide decks",
      "OT and IT boundaries need explicit owners",
      "Recovery plans must name who can authorize a failover",
    ],
    challenges: [
      "Flat networks that make lateral movement too easy",
      "Telemetry without a clear device identity model",
      "Backups that were never restore-tested for critical sites",
    ],
    howWeHelp: [
      "Inventory sites, networks and systems before proposing changes",
      "Segment and harden only what you authorize, with documented residual risk",
      "Design backup and IoT data paths that match field constraints in scope",
    ],
    services: [
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
      { href: "/services/iot-solutions/", label: "IoT solutions" },
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/data-backup-protection/", label: "Data backup and protection" },
    ],
    note: "No operator names, production volumes or safety certifications are claimed here.",
  },
  {
    slug: "telecoms",
    title: "Telecoms",
    card: "Scalable services, automation and monitoring for always-on platforms.",
    seoTitle: "Telecom Technology Services | QNVO Technologies",
    description:
      "Discuss automation, APIs and platform engineering for telecom workflows with QNVO Technologies. Network SLA marketing numbers are not published here.",
    h1: "Technology Services for Telecoms",
    summary:
      "Telecom engagements emphasize automation, careful integrations and operational visibility for platforms that must stay available. QNVO Technologies discusses the software and cloud work you authorize — not carrier-grade claims invented for this website.",
    realities: [
      "Manual provisioning does not scale with product catalogues",
      "Partner APIs fail; retries must be safe",
      "Observability is part of delivery, not a later wishlist",
    ],
    challenges: [
      "Release processes that still depend on undocumented console steps",
      "Customer portals disconnected from fulfilment systems",
      "Alert noise that hides real incidents",
    ],
    howWeHelp: [
      "Move agreed environments toward repeatable configuration and pipelines",
      "Build portals and APIs against written contracts",
      "Wire monitoring for the services named in scope, with owners for escalation",
    ],
    services: [
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/api-development-integration/", label: "API development and integration" },
      { href: "/services/saas-development/", label: "SaaS development" },
      { href: "/services/it-helpdesk-support/", label: "IT helpdesk and support" },
    ],
    note: "No carrier brands, subscriber counts or five-nines claims are published here.",
  },
  {
    slug: "manufacturing-industrial",
    title: "Manufacturing and industrial",
    card: "Multi-site systems, migrations and operational tooling around the plant.",
    seoTitle: "Manufacturing Technology Services | QNVO Technologies",
    description:
      "Discuss industrial software, cloud migration and multi-site networking patterns with QNVO Technologies. Plant uptime warranties are not invented on this page.",
    h1: "Technology Services for Manufacturing and Industrial",
    summary:
      "Manufacturing work connects office systems, plant floors and suppliers. Projects succeed when the workflow and site constraints are written down first. QNVO Technologies does not claim to run your production line; it discusses the software and infrastructure scopes you authorize.",
    realities: [
      "Downtime windows are scarce and must be scheduled",
      "OT equipment may outlive the software that talks to it",
      "Multi-site identity and network policy need a single owner",
    ],
    challenges: [
      "Spreadsheets bridging MES, ERP and quality steps",
      "On-prem servers that are a single point of failure",
      "Predictive ideas that lack clean labeled data",
    ],
    howWeHelp: [
      "Map systems and cutover windows before migration or build",
      "Integrate ERP and operational tools named in scope",
      "Discuss IoT or ML only when data and ownership exist",
    ],
    services: [
      { href: "/services/erp-solutions/", label: "ERP solutions" },
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/iot-solutions/", label: "IoT solutions" },
      { href: "/services/ai-machine-learning/", label: "AI and machine learning" },
    ],
    note: "No plant names, OEE percentages or OEM partnerships are claimed here.",
  },
  {
    slug: "logistics-supply-chain",
    title: "Logistics and supply chain",
    card: "Tracking, mobile workflows and integrations across partners.",
    seoTitle: "Logistics and Supply Chain Technology | QNVO Technologies",
    description:
      "Discuss logistics software, mobile workflows and partner integrations with QNVO Technologies. On-time delivery metrics are not guaranteed on this website.",
    h1: "Technology Services for Logistics and Supply Chain",
    summary:
      "Logistics engagements focus on shipment visibility, warehouse or driver workflows and the APIs that connect partners. Outcomes depend on carrier and partner systems you do not fully control. This page does not invent delivery KPIs.",
    realities: [
      "Mobile connectivity is uneven in the field",
      "Partner EDI/API quirks belong in the scope, not in surprise tickets",
      "Support coverage should match the hours operations actually runs",
    ],
    challenges: [
      "Status updates trapped in email threads",
      "Driver apps that break offline",
      "Inventory and transport systems that disagree on the same shipment",
    ],
    howWeHelp: [
      "Define events and owners for each status change",
      "Build mobile or web workflows with offline rules when needed",
      "Integrate partners named in the agreement with safe retries",
    ],
    services: [
      { href: "/services/mobile-app-development/", label: "Mobile app development" },
      { href: "/services/api-development-integration/", label: "API development and integration" },
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/services/it-helpdesk-support/", label: "IT helpdesk and support" },
    ],
    note: "No 3PL brands, shipment volumes or on-time percentages are claimed here.",
  },
  {
    slug: "education-elearning",
    title: "Education and e-learning",
    card: "Learning platforms, content workflows and careful student data handling.",
    seoTitle: "Education and E-Learning Technology | QNVO Technologies",
    description:
      "Discuss learning platforms, school or training sites and student data handling with QNVO Technologies. Enrollment outcomes are not promised on this page.",
    h1: "Technology Services for Education and E-Learning",
    summary:
      "Education work covers course delivery, content workflows and access control for learners and staff. Privacy expectations vary by region and must be named in scope. QNVO Technologies does not invent student outcome metrics.",
    realities: [
      "Editors and instructors need clear publishing roles",
      "Accessibility on agreed templates is part of public-facing sites",
      "Data retention for learners should follow policy you approve",
    ],
    challenges: [
      "Licensed LMS tools that miss the certification steps you actually run",
      "Sites that fail basic accessibility checks",
      "Accounts shared across staff with no audit trail",
    ],
    howWeHelp: [
      "Scope platforms around courses, assessments and roles you describe",
      "Build or harden web properties with accessibility checks named in the agreement",
      "Limit admin privilege and document who may export learner data",
    ],
    services: [
      { href: "/services/saas-development/", label: "SaaS development" },
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/ui-ux-design/", label: "UI and UX design" },
      { href: "/services/website-security-optimization/", label: "Website security and optimization" },
    ],
    note: "No school names, enrollment figures or learning-outcome guarantees are claimed here.",
  },
  {
    slug: "government-public-sector",
    title: "Government and public sector",
    card: "Accessible, documented systems with clear procurement boundaries.",
    seoTitle: "Public Sector Technology Services | QNVO Technologies",
    description:
      "Discuss public-sector websites, platforms and security work with QNVO Technologies. Government contract vehicles and clearances are not invented on this page.",
    h1: "Technology Services for Government and Public Sector",
    summary:
      "Public-sector engagements emphasize accessibility, documentation and systems the public or staff can trust. The CSM platform case study on the Work page describes one security-management pattern in general terms. This industries page does not claim contract awards or clearances.",
    realities: [
      "Procurement and security review can shape timelines more than coding speed",
      "Public sites need keyboard access and clear content structure",
      "Evidence and control tracking may be part of the product itself",
    ],
    challenges: [
      "Sites that fail accessibility standards the organization must meet",
      "Security control tracking spread across disconnected files",
      "Undocumented production changes that fail audit questions",
    ],
    howWeHelp: [
      "Write accessibility and documentation deliverables into the scope when required",
      "Build or improve platforms for controls and workflows you can describe",
      "Keep residual risk and out-of-scope items visible in handover notes",
    ],
    services: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
      { href: "/services/enterprise-software-development/", label: "Enterprise software" },
      { href: "/case-studies/#csm-platform", label: "CSM platform case study" },
    ],
    note: "No agency names, contract IDs or clearance levels are claimed here.",
  },
  {
    slug: "gaming-entertainment",
    title: "Gaming and entertainment",
    card: "Launch-ready platforms, content sites and scaling patterns for events.",
    seoTitle: "Gaming and Entertainment Technology | QNVO Technologies",
    description:
      "Discuss entertainment platforms, content sites and launch scaling with QNVO Technologies. Player counts and chart rankings are not promised on this website.",
    h1: "Technology Services for Gaming and Entertainment",
    summary:
      "Gaming and entertainment work often pairs content experiences with backends that must survive launches and spikes. Scope stays honest about what can be load-tested and what depends on third-party stores or CDNs. This page does not invent player metrics.",
    realities: [
      "Launch traffic is spiky and should be rehearsed where possible",
      "Content teams need safe publishing workflows",
      "Anti-abuse and account security belong in the first release conversation",
    ],
    challenges: [
      "Marketing sites that cannot ship updates without developers",
      "APIs that buckle when a title or event trends",
      "Account systems without clear recovery and rate limits",
    ],
    howWeHelp: [
      "Separate content publishing from release engineering when useful",
      "Load-test and scale paths you authorize before a known event",
      "Harden account and API edges named in the agreement",
    ],
    services: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/saas-development/", label: "SaaS development" },
      { href: "/services/digital-marketing/", label: "Digital marketing" },
    ],
    note: "No studio names, DAU figures or chart positions are claimed here.",
  },
  {
    slug: "saas-technology",
    title: "SaaS and technology companies",
    card: "Product engineering, DevOps and security baselines for software businesses.",
    seoTitle: "SaaS and Technology Company Services | QNVO Technologies",
    description:
      "Discuss SaaS product engineering, DevOps and security baselines with QNVO Technologies. ARR and SOC 2 outcomes are not guaranteed on this page.",
    h1: "Technology Services for SaaS and Software Companies",
    summary:
      "SaaS and technology company engagements cover multi-tenant products, delivery pipelines and security baselines buyers ask about. Certifications from accredited auditors are not sold as a badge on this website; readiness work can be scoped separately when named.",
    realities: [
      "Tenancy and billing edge cases appear early if ignored",
      "Customers ask how you ship and how you secure data",
      "Founders need a written first-release boundary",
    ],
    challenges: [
      "Manual deploys that block frequent safe releases",
      "Networks and secrets that fail customer security questionnaires",
      "Product debt that blocks the paid workflow",
    ],
    howWeHelp: [
      "Build or harden the product modules named in scope",
      "Introduce infrastructure as code and pipelines you can operate",
      "Address security questionnaire gaps with fixes, not invented scores",
    ],
    services: [
      { href: "/services/saas-development/", label: "SaaS development" },
      { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
      { href: "/services/cybersecurity-risk-management/", label: "Cybersecurity and risk" },
      { href: "/services/api-development-integration/", label: "API development and integration" },
    ],
    note: "No customer logos, ARR figures or audit pass claims are published here.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((item) => item.slug === slug);
}
