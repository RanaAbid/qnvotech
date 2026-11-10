export type InsightSection = {
  heading: string;
  paragraphs: string[];
};

export type Insight = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  focusKeyword: string;
  publishedAt: string;
  draft: boolean;
  relatedServiceSlug: string;
  relatedServiceLabel: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "ai-agent-development-company",
    title: "What to look for in an AI agent development company",
    seoTitle: "AI Agent Development Company Guide | QNVO Technologies",
    description:
      "How to evaluate an AI agent development company: bounded tasks, approved data, human review, and a written scope before any build starts.",
    focusKeyword: "AI agent development company",
    publishedAt: "2026-11-10",
    draft: true,
    relatedServiceSlug: "ai-agent-development",
    relatedServiceLabel: "AI agent development",
    sections: [
      {
        heading: "Start with the job, not the model",
        paragraphs: [
          "An AI agent development company should begin with a clear job: which user starts the task, which systems may be read or updated, and which result a person must review before anything is treated as final. The model choice matters later. The workflow definition comes first.",
          "A useful first conversation names the inputs that are allowed, the tools the agent may call, and the hand-off when the answer is incomplete. Without that boundary, a demo can look clever while still being unsafe for day-to-day work.",
          "Ask for a short written description of the task before any prototype. If a vendor cannot describe the agent as a bounded process with a review step, the engagement is not ready for a build.",
          "Write the job in plain language that a new teammate could follow. If two stakeholders describe different outcomes for the same agent, resolve that conflict before anyone opens a code repository.",
        ],
      },
      {
        heading: "Data access has to be deliberate",
        paragraphs: [
          "Agents that can reach every document, ticket, or database create risk that is hard to unwind later. A careful AI agent development company maps approved sources, denies everything else by default, and records how credentials are stored and rotated.",
          "Expect questions about retention, logging, and who can see the conversation history. Those topics are part of the product, not afterthoughts. If the answer is only “we will use your existing login,” press for a narrower design.",
          "When a source contains personal or confidential data, ask how redaction, role-based access, and audit trails will work. A written scope should say what is in and what is out.",
          "Prefer read-only access during early trials. Write access to production records should wait until the review path, rollback plan, and ownership of secrets are agreed in writing.",
        ],
      },
      {
        heading: "Human review belongs in the design",
        paragraphs: [
          "For most business use, an agent should return a draft, a recommendation, or a queued action that a person can accept, edit, or reject. Automatic write-back into finance, access control, or customer records needs its own risk discussion and should not be assumed.",
          "Look for a clear UI or ticket state for review, not only a chat window. Reviewers need the source snippet, the tool calls that ran, and a place to leave a note when they change the result.",
          "QNVO Technologies describes AI agent work as bounded tasks with approved data and human review. That framing is intentional: it keeps the conversation on process design rather than on a promise of unsupervised automation.",
          "Train reviewers on the same acceptance rules used to score the pilot. If reviewers improvise their own rules, the agent will learn from noise instead of from a shared standard.",
        ],
      },
      {
        heading: "Tool use, memory, and failure modes",
        paragraphs: [
          "Agents that call tools need an allow-list. Each tool should have a purpose, a timeout, and a defined response when the remote system is unavailable.",
          "Memory is useful when it stores durable facts the agent is allowed to keep. It is harmful when it quietly retains sensitive content that was only meant for one session. Ask what is stored, where it lives, and how it is deleted.",
          "Failure modes deserve the same attention as the happy path. Timeouts, empty tool results, policy refusals, and conflicting answers should produce a state a person can act on, not a silent half-complete change.",
        ],
      },
      {
        heading: "Questions that separate a vendor from a partner",
        paragraphs: [
          "Ask how failures are handled when a tool times out, when the model refuses a request, or when the answer conflicts with a policy. A serious reply names retries, fallbacks, and who is notified.",
          "Ask for the evaluation plan: which sample tasks will be used, who scores them, and what “good enough” means before a wider rollout. Scores and sample sets belong in the agreement, not in a marketing slide.",
          "Ask what the handover includes: environment notes, prompt or policy files that you own, and how to disable the agent if something goes wrong. Ownership of configuration should be explicit.",
          "Ask who will maintain the agent after the first release. Support is a separate decision from the initial build and should not be assumed from a website page.",
        ],
      },
      {
        heading: "Scope before slogans",
        paragraphs: [
          "An AI agent development company should be willing to stop at discovery when the task is vague. A short discovery note that lists users, data, tools, and review steps is more valuable than an early prototype with no guardrails.",
          "Fees, timelines, and environments belong in a separate written agreement. A website page or a contact form is not that agreement.",
          "If you are comparing vendors, score them on clarity of the task boundary, quality of the data plan, and honesty about human review. Those criteria predict a usable system more reliably than a flashy demo.",
          "When you contact QNVO Technologies about AI agent development, bring the task description, the approved systems, and the review step you already trust. That package is enough to start a useful conversation.",
        ],
      },
    ],
  },
  {
    slug: "custom-erp-software-development",
    title: "Custom ERP software development: when it fits and when it does not",
    seoTitle: "When Custom ERP Development Fits | QNVO Technologies",
    description:
      "A practical guide to custom ERP software development: fit with existing systems, configuration vs custom build, and what belongs in a written scope.",
    focusKeyword: "custom ERP software development",
    publishedAt: "2026-11-09",
    draft: true,
    relatedServiceSlug: "erp-solutions",
    relatedServiceLabel: "ERP solutions",
    sections: [
      {
        heading: "What “custom ERP” usually means",
        paragraphs: [
          "Custom ERP software development can mean configuring a commercial product, building modules around it, or creating a narrower operations system when a full suite is the wrong fit. The label is broad. The first job is to say which meaning applies.",
          "Many teams do not need a greenfield ERP. They need finance, inventory, or operations workflows to match how people already work, with integrations to software they already run. Naming that target early prevents a project from drifting into an endless rebuild.",
          "QNVO Technologies discusses ERP work as configuration and integration for defined workflows. Partnership with a specific ERP vendor is not claimed on this site. The right product choice belongs in discovery, not in a slogan.",
          "If a provider leads with a rebuild before asking about your current product and processes, treat that as a warning. Custom work should earn its place against simpler options.",
        ],
      },
      {
        heading: "Signals that customization is warranted",
        paragraphs: [
          "Customization makes sense when a standard screen forces people into workarounds that create bad data, when two systems must share a process that neither supports cleanly, or when a regulated step needs a recorded review that the base product does not provide.",
          "It is a weaker fit when the pain is mainly training, unclear ownership, or missing reports that could be built without changing core transactions. Changing the ERP core for a report is often more expensive than fixing the reporting path.",
          "Write down the three workflows that hurt most. If none of them touches a transaction people must complete every day, pause before commissioning custom modules.",
          "Also note how many people touch each workflow and how often. A painful process that runs once a quarter may not justify the same investment as a daily operations path.",
        ],
      },
      {
        heading: "Configuration, extension, and replacement",
        paragraphs: [
          "Configuration stays inside product settings: fields, roles, approval chains, and document types. Extension adds adjacent apps or services that talk to the ERP through supported APIs. Replacement rebuilds a major process outside the product.",
          "A careful plan prefers configuration, then extension, then replacement. Each step raises cost and long-term ownership. Ask vendors which layer they are proposing and why the lighter layer is not enough.",
          "Custom ERP software development that ignores upgrade paths creates a private fork that is hard to maintain. Ask how proposed changes survive product upgrades and who owns regression testing.",
          "When an extension is chosen, define the system of record for each field. Dual maintenance between the ERP and a side application is a common source of quiet errors.",
        ],
      },
      {
        heading: "Master data and cutover discipline",
        paragraphs: [
          "Custom screens cannot fix unclean customers, items, chart of accounts, or location records. Plan a data quality pass before any cutover date is treated as firm.",
          "Decide which historical transactions must move and which can stay archived in the old system. Moving everything “just in case” often delays go-live without helping daily work.",
          "Run a rehearsal in a non-production environment with the same import tools and the same people who will perform the real cutover. Surprises found in rehearsal are cheaper than surprises found on Monday morning.",
        ],
      },
      {
        heading: "What belongs in the written scope",
        paragraphs: [
          "A useful scope names the company codes, warehouses, or business units in play; the roles that approve each step; the systems that must exchange data; and the environments used for build and review.",
          "It also names what will not change. If inventory valuation, tax engines, or payroll stay out of scope, say so. Silence invites assumptions.",
          "Data migration deserves its own checklist: which records move, who cleans them, and how duplicates are handled. Migration is often the longest path, not the screens.",
          "Support after go-live should be written separately. Hypercare, backlog triage, and later enhancements are not free by default.",
        ],
      },
      {
        heading: "How to start a conversation",
        paragraphs: [
          "Bring a short map of the current process, the systems involved, and the failure that happens most often. That package helps a vendor say whether the work is configuration, integration, or a larger build.",
          "Do not expect a fixed price from a website page. Fees and timelines belong in an agreement after the workflows are clear enough to estimate.",
          "If you need help deciding the next step, describe the workflow and the ERP you use or plan to choose. A conversation can end without a project when the fit is poor, and that outcome is still useful.",
          "QNVO Technologies can discuss ERP solutions in that framing: defined workflows, clear integrations, and a written scope before delivery promises are made.",
          "Bring sample screenshots of the current workaround if you can share them safely. Concrete examples shorten discovery more than abstract statements about “complex processes.”",
          "If multiple business units share the ERP, say which unit is in the first release. A phased boundary is easier to estimate than an unspoken ambition to cover every unit at once.",
        ],
      },
    ],
  },
  {
    slug: "enterprise-software-development-services",
    title: "Enterprise software development services that stay tied to a written scope",
    seoTitle: "Scoped Enterprise Software Services | QNVO Technologies",
    description:
      "How enterprise software development services should define users, data, integrations, and handover — without treating a website page as a contract.",
    focusKeyword: "enterprise software development services",
    publishedAt: "2026-11-08",
    draft: true,
    relatedServiceSlug: "enterprise-software-development",
    relatedServiceLabel: "Enterprise software",
    sections: [
      {
        heading: "Enterprise software is a process, not a brochure",
        paragraphs: [
          "Enterprise software development services should start with the people who will use the system, the data they need, and the hand-offs between teams. A feature list without that context invites rebuilds.",
          "Internal tools, portals, and connections to software you already run are common shapes for this work. The shared requirement is a defined workflow that can be described in writing.",
          "QNVO Technologies frames enterprise software around a defined business workflow. Deliverables and fees are set in a project agreement, not on a marketing page.",
          "If a proposal lists technologies first and users second, ask for the order to be reversed. Tools should follow the process, not the other way around.",
        ],
      },
      {
        heading: "Discovery that reduces later rework",
        paragraphs: [
          "Good discovery produces a short document: who the users are, which actions they must complete, which systems hold the source of truth, and which steps need a human approval.",
          "Workshops are useful when they create decisions, not when they generate decks. Leave each session with named owners for open questions and a list of assumptions that still need proof.",
          "If stakeholders disagree about the process, stop and resolve that before coding. Software cannot settle an organizational argument by itself.",
          "Capture non-goals with the same care as goals. Saying what the first release will not do protects the team from silent expansion.",
        ],
      },
      {
        heading: "Integrations need contracts of their own",
        paragraphs: [
          "Many enterprise builds fail at the edges: identity, email, storage, payment, or an older line-of-business system. Each connection needs an interface contract, error behavior, and a plan for authentication secrets.",
          "Prefer read-only access first when exploring a new source. Write access should wait until the review path and rollback plan are clear.",
          "Document rate limits, expected latency, and who gets alerted when a sync stalls. Silent failure is worse than a loud, contained error.",
          "Include a test plan for each integration that uses realistic identifiers and failure cases, not only a successful sample payload.",
        ],
      },
      {
        heading: "Security and access as product requirements",
        paragraphs: [
          "Roles, permissions, and audit trails belong in the first design, not as a patch after screens look finished. Ask who can create, approve, export, and delete records.",
          "Secrets must stay out of tickets, chat threads, and client-side code. A provider should explain how environment values are stored and who can rotate them.",
          "Accessibility and keyboard use are part of enterprise software quality when staff must complete tasks under time pressure. They are not optional decoration.",
        ],
      },
      {
        heading: "Delivery habits that protect the scope",
        paragraphs: [
          "Break the work into reviewable increments that match the written scope. Each increment should leave something stakeholders can try, even if it is only a slice of the workflow.",
          "Change requests are normal. They should update the agreement or an attached change note rather than accumulate as unspoken expectations.",
          "Handover should include access notes, deployment steps, and the documentation named in the scope. Items that were not agreed are not implied.",
          "Schedule a short period after release where the same people who built the system help triage issues. Call that period out in writing so it is not confused with unlimited support.",
        ],
      },
      {
        heading: "Choosing a provider for enterprise software development services",
        paragraphs: [
          "Score providers on how clearly they restate your workflow, how they handle integrations, and how they talk about non-goals. Vague confidence is a risk signal.",
          "Ask who will be accountable for architecture decisions and who will be available for reviews. Named roles matter more than a large, anonymous bench claim.",
          "When you are ready to talk, describe the users, the data, and the systems that must connect. That is enough to start a useful conversation without inventing a finished specification in advance.",
          "QNVO Technologies discusses enterprise software development services in that shape: a defined workflow, a written scope, and an honest list of what the first agreement will not cover.",
          "Ask for a sample of the discovery output format before you sign. You should know what decisions the discovery phase is expected to produce.",
          "Prefer providers who can explain trade-offs in plain language. If every answer requires a proprietary framework diagram, the operational team that must live with the system may never own it.",
        ],
      },
      {
        heading: "Environments and release hygiene",
        paragraphs: [
          "Enterprise software needs at least a place to build, a place to review, and a place that serves real users. Mixing those roles creates accidents that look like product bugs.",
          "Agree how releases are approved, who can promote a build, and how a bad release is rolled back. Those habits matter as much as the feature list.",
          "Keep seed or anonymized data for review environments so stakeholders can test without exposing production records. Access to production data for debugging should be exceptional and logged.",
          "Write the release checklist once and reuse it. Teams that improvise each promotion tend to skip the same verification steps under pressure.",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-for-business-processes",
    title: "AI automation for business processes: design the hand-off first",
    seoTitle: "AI Automation Process Hand-Offs | QNVO Technologies",
    description:
      "How to approach AI automation for business processes with documented steps, system hand-offs, and human checkpoints — without a savings guarantee.",
    focusKeyword: "AI automation for business processes",
    publishedAt: "2026-11-07",
    draft: true,
    relatedServiceSlug: "ai-automation",
    relatedServiceLabel: "AI automation",
    sections: [
      {
        heading: "Automation follows a documented process",
        paragraphs: [
          "AI automation for business processes works best when the steps are already clear enough to write down. If people disagree about the sequence, status values, or owners, automation will amplify the confusion.",
          "Start by listing the trigger, the checks that must pass, the systems that receive an update, and the person who closes the loop when something looks wrong. That map is the product outline.",
          "QNVO Technologies describes AI automation as connecting documented business steps so routine hand-offs need less manual copying between systems. It does not promise a savings figure on this site.",
          "Keep the first process narrow. A single path with one common exception teaches more than a diagram that tries to cover every branch on day one.",
        ],
      },
      {
        heading: "Where AI helps inside a process",
        paragraphs: [
          "AI can draft classifications, extract fields from structured documents, suggest the next queue, or summarize a long thread for a reviewer. Those are assistive steps. They still need acceptance criteria.",
          "AI is a weaker fit when the process depends on informal judgment that nobody can describe, or when the cost of a wrong write is high and there is no review gate.",
          "Keep model calls behind a service you control. Logging the prompt version, the tools used, and the reviewer action makes later audits possible.",
          "Separate “the model suggested” from “the system committed.” That separation keeps people from treating a draft as a completed transaction.",
        ],
      },
      {
        heading: "Hand-offs between systems",
        paragraphs: [
          "Most process pain sits between tools: a form in one product, a ticket in another, a spreadsheet that still reconciles both. Automation should reduce that copying, not add another screen that people ignore.",
          "Define the payload for each hand-off, including identifiers that keep records aligned. Without shared keys, automation creates duplicates that people must clean by hand.",
          "Plan for partial failure. If step three fails after step two succeeded, the process needs a recoverable state, not a silent half-update.",
          "Agree who owns each system’s side of the contract. Automation projects stall when nobody can approve an API change or a field rename.",
        ],
      },
      {
        heading: "Controls, exceptions, and auditability",
        paragraphs: [
          "Every automated path needs an exception queue. People should know where to look when a case cannot complete, and how to finish it without inventing a private workaround.",
          "Record the inputs used for an AI suggestion, the version of the policy or prompt, and the reviewer decision. Those records support later questions from operations or compliance teams.",
          "Access to re-run, override, or disable an automation should be limited to named roles. Broad admin rights turn a helpful process into an untracked change channel.",
        ],
      },
      {
        heading: "Measuring readiness without inventing results",
        paragraphs: [
          "Before a build, count how often the process runs, how many systems it touches, and where errors are found today. Those facts come from your team. A vendor should not invent them for you.",
          "During a pilot, track completion of the documented steps and the number of items sent back for human review. Avoid publishing savings claims until you have permissioned measurements from a real run.",
          "If a pilot cannot show a stable path through the happy case and one common exception, widen the documentation before expanding volume.",
          "Treat “time saved” as a later metric, not a sales promise. Process quality and fewer broken hand-offs are earlier signals that the design is working.",
        ],
      },
      {
        heading: "How to begin",
        paragraphs: [
          "Pick one process with a clear owner and a small number of systems. Write the steps as they are, not as you wish they were. Then mark which steps are candidates for assistive AI and which must stay fully manual.",
          "Bring that note to a discovery conversation. A good partner will challenge weak steps, not rush to connect every tool.",
          "When you contact QNVO Technologies, describe the process, the systems, and the review point you already trust. That is enough to discuss whether AI automation for business processes is the right next move.",
          "A message starts a conversation. It is not a quote, a savings guarantee, or a contract. Scope and fees belong in a separate written agreement when both sides are ready.",
          "If several processes compete for attention, rank them by clarity of ownership and frequency, not by how exciting the AI story sounds. Clear ownership predicts a cleaner pilot.",
          "Share the current checklist or SOP if one exists. Automation that ignores the document people already use will fight the organization instead of helping it.",
        ],
      },
      {
        heading: "What this article does not claim",
        paragraphs: [
          "This page does not publish client names, cycle-time reductions, or cost savings. Those numbers belong only in permissioned reporting after a real process has been measured.",
          "It also does not claim that every business process should use AI. Many processes need clearer ownership and better hand-offs before a model adds value.",
          "Use the article as a planning checklist. Use a written agreement for anything that commits budget, access, or delivery dates.",
        ],
      },
    ],
  },
];

export function insightsNewestFirst(): Insight[] {
  return [...insights].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getInsight(slug: string): Insight | undefined {
  return insights.find((item) => item.slug === slug);
}

export function insightForService(serviceSlug: string): Insight | undefined {
  return insightsNewestFirst().find((item) => item.relatedServiceSlug === serviceSlug);
}

export function insightWordCount(article: Insight): number {
  return article.sections.reduce((total, section) => {
    const headingWords = section.heading.trim().split(/\s+/).length;
    const bodyWords = section.paragraphs.reduce((sum, paragraph) => sum + paragraph.trim().split(/\s+/).length, 0);
    return total + headingWords + bodyWords;
  }, article.title.trim().split(/\s+/).length);
}

export function insightReadingMinutes(article: Insight): number {
  return Math.max(1, Math.round(insightWordCount(article) / 200));
}

export function formatInsightDate(value: string): string {
  const date = new Date(`${value}T00:00:00.000Z`);
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
}
