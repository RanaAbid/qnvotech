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

Committed `.env` holds non-secret defaults shared by local and production (`NEXT_PUBLIC_SITE_URL`, `CONTACT_EMAIL`, `RESEND_FROM_EMAIL`, `NEXT_PUBLIC_GTM_ID`). Put secrets in `.env.local` (local) or cPanel Node.js env (production). Empty secrets are safe: the site renders, and the contact form points people to info@qnvotech.com until Turnstile + Resend are configured.

## Production readiness (manual deploy)

Do not deploy from CI automatically. Before a release:

1. Deploy with committed `.env` defaults. Add secrets in cPanel (Turnstile, Resend, Sentry, Upstash) — do not duplicate the non-secret keys unless you intend to override them.
2. Run the checks above against `next start`.
3. Confirm hosting rollback (previous deployment / image tag) and that `SENTRY_DSN` is set if you want server error pings.
4. Keep legal pages `noindex` until `legalPagesIndexable` is flipped after owner review.
5. Prefer Upstash for contact rate limits on multi-instance hosts.

## Intentionally unfinished

- Legal pages live at `/privacy/`, `/terms/` and `/accessibility/`. They are drafts with owner placeholders and stay `noindex` until `legalPagesIndexable` in `lib/site.ts` is flipped after review. Older `/privacy-policy/`, `/terms-of-use/` and `/accessibility-statement/` paths redirect to the short routes.
- Case studies describe the BMS and CSM platforms. They do not name organizations or publish measured results. Draft insights stay unlinked/`noindex` until approved.
- Google Tag Manager (`NEXT_PUBLIC_GTM_ID`) is installed in the document head so Google can detect the tag. Consent Mode keeps analytics storage denied until Allow analytics. Optional `NEXT_PUBLIC_GA_MEASUREMENT_ID` remains a GA4 fallback.
- Turnstile, Resend, Sanity, Sentry and Upstash run only when their variables are set.
- The hero is CSS motion, paused for reduced-motion. A WebGL scene was not added, so the first load stays inside a small JavaScript budget.
