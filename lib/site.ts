export const companyName = "QNVO Technologies";
export const tagline = "Quality • Next-Gen • Vision • Operations";
export const publicEmail = "info@qnvotech.com";
export const contentUpdated = "2026-10-31";
export const legalPagesIndexable = false;

export const defaultDescription =
  "QNVO Technologies shares enterprise software, AI agent, automation, ERP and digital services for teams in the USA, UK, Middle East and Pakistan.";

const DEFAULT_SITE_URL = "https://revamp.qnvotech.com";

function normalizeSiteUrl(value: string | undefined): string {
  const trimmed = value?.trim().replace(/\/$/, "") ?? "";
  if (!trimmed) return DEFAULT_SITE_URL;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:" && url.protocol !== "http:") return DEFAULT_SITE_URL;
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export function absoluteUrl(path: string): string {
  if (path === "/") return `${siteUrl}/`;
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${withLeading.endsWith("/") ? withLeading : `${withLeading}/`}`;
}
