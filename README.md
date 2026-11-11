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
npm run start
# in another terminal, against the running server:
npm run verify:prod
npm run analyze:a11y
npm run analyze:perf
```

Copy `.env.example` to `.env.local` when a provider is ready. Empty values are safe: the site renders local content, and the contact form tells people to email info@qnvotech.com until Turnstile + Resend are configured.

## Production readiness (manual deploy)

Do not deploy from CI automatically. Before a release:

1. Set production env from `.env.example` (especially `NEXT_PUBLIC_SITE_URL`, Turnstile, Resend, `CONTACT_EMAIL`).
2. Run the checks above against `next start`.
3. Confirm hosting rollback (previous deployment / image tag) and that `SENTRY_DSN` is set if you want server error pings.
4. Keep legal pages `noindex` until `legalPagesIndexable` is flipped after owner review.
5. Prefer Upstash for contact rate limits on multi-instance hosts.

## Intentionally unfinished

- Legal pages live at `/privacy/`, `/terms/` and `/accessibility/`. They are drafts with owner placeholders and stay `noindex` until `legalPagesIndexable` in `lib/site.ts` is flipped after review. Older `/privacy-policy/`, `/terms-of-use/` and `/accessibility-statement/` paths redirect to the short routes.
- Case studies describe the BMS and CSM platforms. They do not name organizations or publish measured results. Draft insights stay unlinked/`noindex` until approved.
- Google Analytics loads only after Allow, and only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is a GA4 id.
- Turnstile, Resend, Sanity, Sentry and Upstash run only when their variables are set.
- The hero is CSS motion, paused for reduced-motion. A WebGL scene was not added, so the first load stays inside a small JavaScript budget.
