# QNVO Technologies website

Next.js 15 site for https://qnvotech.com/. Public contact is info@qnvotech.com.

## Run locally

```bash
npm ci
npm run dev
```

Checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Copy `.env.example` to `.env.local` when a provider is ready. Empty values are safe: the site renders local content, and the contact form tells people to email info@qnvotech.com until Resend is configured.

## Intentionally unfinished

- Legal pages live at `/privacy/`, `/terms/` and `/accessibility/`. They are drafts with owner placeholders and stay `noindex` until `legalPagesIndexable` in `lib/site.ts` is flipped after review. Older `/privacy-policy/`, `/terms-of-use/` and `/accessibility-statement/` paths redirect to the short routes.
- Case studies describe the BMS and CSM platforms. They do not name organizations or publish measured results. Insights stay empty until original articles are approved.
- Google Analytics loads only after Allow, and only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is a GA4 id.
- Turnstile, Resend, Sanity, Sentry and Upstash run only when their variables are set.
- The hero is CSS motion, paused for reduced-motion. A WebGL scene was not added, so the first load stays inside a small JavaScript budget.
