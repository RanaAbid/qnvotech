# Case Studies Page Content — BMS & CSM (SEO-friendly + agentic)

> Status: WIRED into `app/case-studies/page.tsx` (approved 2026-11-10).
> Public page framing: enterprise platform case studies — not QNVO client wins.
> Public naming of VITA / Chesterfield County: **NO** (decided 2026-11-10).
> On the public site, describe CSM as serving public-sector organizations
> without naming them. Do not copy organization names into page copy,
> metadata, or schema.
>
> Framing decision (important): BMS and CSM are **SPS products**, not QNVO
> clients. This content therefore presents them as **enterprise platform
> case studies** — what the platforms are and what engineering they involve
> — with NO invented client, metric, testimonial, or "QNVO delivered X for
> Y" claim.

## 1. Page SEO (replace the current metadata in `app/case-studies/page.tsx`)

- **Title (52 chars):** `Case Studies: BMS & CSM Platforms | QNVO Technologies`
- **Meta description (154 chars):** `QNVO Technologies case studies: enterprise platform work on BMS and CSM — web development, modernization, performance and security. No hype, just the work.`
- **Canonical:** `https://qnvotech.com/case-studies/`
- **OG:** title + description above, OG image `og-default.png`
- **H1:** `Case Studies: BMS & CSM Enterprise Platforms`
- **JSON-LD (add beside the existing BreadcrumbList):** CollectionPage +
  ItemList with two entries (BMS platform, CSM platform) + FAQPage from §5.
  Validate in Google's Rich Results Test before publishing.

## 2. Intro — direct answer paragraph (agentic: answer first, then detail)

> QNVO Technologies works on enterprise platforms: large, real systems that
> teams rely on every day. This page presents two such platforms in depth —
> **BMS**, a business management platform, and **CSM (Cognitive Security
> Management)**, a security management platform. Each entry below covers what
> the platform is, the engineering it involves, and the QNVO services behind
> that kind of work. Measured results are published only with permission, so
> this page describes the work itself — not invented outcomes.

## 3. Case study 1 — BMS (Business Management Platform)

**Slug (if a detail page is added later):** `/case-studies/bms-platform/`
**Service links:** Web Development, Enterprise Software Development,
Website Security & Optimization, Technical SEO (performance track).

**What it is.**
BMS is a business management platform used inside an organization for
day-to-day operations. It includes TimeLive timesheet modules — employees
record work against clients, projects, and tasks, and managers review and
save those entries — alongside development, technical management, and
operational tooling around the platform.

**The engineering involved.**
- **Web development:** building and maintaining platform modules, including
  timesheet entry and review flows, with server-side validation, role-aware
  access, and clean, maintainable code.
- **Technical management:** day-to-day platform coordination — standups,
  issue follow-ups, and keeping development, operations, and users aligned.
- **Performance & reliability:** internal tools must stay fast and dependable
  under daily use; work here covers optimization, UI alignment, and
  follow-ups on sign-in and access issues.
- **Security:** access control, validated inputs, and careful handling of
  internal operational data.

**Services this maps to (QNVO):** Enterprise Software Development,
Web Development, Website Security & Optimization.

**What is NOT claimed here:** no client name, no user count, no time saved,
no uptime figure, no testimonial. Any such proof point is added only when
real and permissioned.

## 4. Case study 2 — CSM (Cognitive Security Management)

**Slug (if a detail page is added later):** `/case-studies/csm-platform/`
**Service links:** Web Development, Enterprise Software Development,
Website Security & Optimization.

**What it is. (public page wording — approved 2026-11-10)**
CSM (Cognitive Security Management) is a security management platform that
provides security to public-sector organizations. Its modules include
security controls and SSP (System Security Plan) modules, with additional
modules around them. Do **not** name organizations on the public page,
in metadata, or in schema.

**The engineering involved.**
- **Security controls management:** defining, tracking, and managing
  security controls across client organizations, so each organization's
  security posture is visible and maintainable in one place.
- **SSP modules:** structured System Security Plan documentation and
  workflows — the plans, controls, and evidence an organization needs to
  demonstrate its security position.
- **Ongoing development & support:** new features and fixes shipped against
  a live platform, with code and database health checks as part of routine
  care.
- **Security & optimization:** hardening and speed work as a continuous
  track, not a one-time task, because a security platform must stay
  dependable under daily use.

**Services this maps to (QNVO):** Web Development, Enterprise Software
Development, Website Security & Optimization.

**What is NOT claimed here:** no outcome metric, no testimonial, and no
organization names. Public-sector organizations are described only in
general terms.

## 5. FAQ (answer-first; also powers FAQPage JSON-LD)

1. **What is BMS?**
   BMS is a business management platform used for day-to-day operations,
   including TimeLive timesheet modules where work is recorded against
   clients, projects, and tasks, and reviewed before saving.
2. **What is CSM?**
   CSM stands for Cognitive Security Management. It is a security management
   platform that provides security to public-sector organizations. Its
   modules include security controls and SSP (System Security Plan) modules.
   This site does not name the organizations the platform serves.
3. **Are BMS and CSM QNVO clients?**
   No. BMS and CSM are presented here as enterprise platform case studies —
   the platforms and the work they involve — not as invented QNVO client
   wins. This page does not name organizations a platform serves. Measured
   results and testimonials are published only when real and permissioned.
4. **What kind of work does QNVO do on platforms like these?**
   Enterprise software development, web development, modernization,
   performance optimization, and security hardening — the services listed
   on the Services pages.
5. **Can QNVO build a platform like BMS or CSM for us?**
   Yes. If you need a business management platform, an internal tool, or a
   client-facing platform, start with the contact page and describe the
   workflow the platform must support.
6. **Why are there no results or numbers on this page?**
   Because results are published only when they are real and permissioned.
   A page with invented metrics would mislead buyers and damage trust.

## 6. Internal linking (every entry links out; no orphan content)

- BMS entry → `/services/enterprise-software-development/`,
  `/services/web-development/`,
  `/services/website-security-optimization/`
- CSM entry → `/services/web-development/`,
  `/services/enterprise-software-development/`,
  `/services/website-security-optimization/`
- Page CTA → `/contact/` ("Tell us about your platform.")
- Services hub → this page (add a "Case Studies" link in the services hub
  footer area when wiring).

## 7. llms.txt lines (append under the Case Studies entry when wiring)

```text
- [Case Studies](https://revamp.qnvotech.com/case-studies/): Enterprise platform case studies — BMS business management platform and CSM (Cognitive Security Management) security platform — covering web development, modernization, performance, and security work. No invented results.
```

## 8. Agentic notes (why this content works for AI agents + search)

- One H1 with the primary keyword; direct-answer intro paragraph.
- Each entry answers, in order: what it is → what engineering it involves
  → which services map to it → what is deliberately not claimed.
- Entity-rich, plain language: platform names, modules (TimeLive),
  workflows (record → review → save), and service names match the site's
  own service pages, so agents and search can connect the dots.
- FAQ answers lead with 2–4 sentences, then elaborate — the shape agents
  quote.
- No JS-only content: all copy is server-rendered HTML.

## 9. Needs the owner's confirmation (do NOT publish past these without it)

1. **CSM public naming — RESOLVED 2026-11-10:** Do **not** name VITA or
   Chesterfield County on the public site. Describe public-sector
   organizations in general terms only. Internal context that those orgs
   are served by CSM remains off-page.
2. **Framing — RESOLVED 2026-11-10:** platform case studies (not QNVO
   client wins).
3. **Detail pages:** still optional — `/case-studies/bms-platform/` and
   `/case-studies/csm-platform/` were not required for this wiring; the
   single `/case-studies/` page holds both profiles.
4. **Wiring approval — DONE 2026-11-10:** copy is in `lib/data.ts` +
   `app/case-studies/page.tsx`, with FAQ + CollectionPage/ItemList/Service
   + FAQPage JSON-LD. `public/llms.txt` lists the case studies page.
