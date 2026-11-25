/**
 * Analytics IDs for the public site.
 * NEXT_PUBLIC_* values are baked at build time. Empty/invalid env values
 * fall back to these defaults so production never ships with a blank tag.
 * Set NEXT_PUBLIC_ANALYTICS_DISABLED=1 to turn measurement off entirely.
 */

export const DEFAULT_GTM_ID = "GTM-MZHN4NQS";
export const DEFAULT_GA_MEASUREMENT_ID = "G-KC8ERNZR58";

const GTM_PATTERN = /^GTM-[A-Z0-9]+$/i;
const GA_PATTERN = /^G-[A-Z0-9]{4,32}$/;

export type AnalyticsConfig = {
  disabled: boolean;
  gtmId: string;
  gaId: string;
  /** Primary id passed to consent UI / install detection (GTM preferred). */
  primaryId: string;
};

function pickId(envValue: string | undefined, fallback: string, pattern: RegExp): string {
  const trimmed = envValue?.trim() ?? "";
  if (trimmed && pattern.test(trimmed)) return trimmed;
  return fallback;
}

export function resolveAnalyticsConfig(): AnalyticsConfig {
  const disabled =
    process.env.NEXT_PUBLIC_ANALYTICS_DISABLED === "1" ||
    process.env.NEXT_PUBLIC_ANALYTICS_DISABLED?.toLowerCase() === "true";

  if (disabled) {
    return { disabled: true, gtmId: "", gaId: "", primaryId: "" };
  }

  const gtmId = pickId(process.env.NEXT_PUBLIC_GTM_ID, DEFAULT_GTM_ID, GTM_PATTERN);
  const gaId = pickId(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, DEFAULT_GA_MEASUREMENT_ID, GA_PATTERN);

  return {
    disabled: false,
    gtmId,
    gaId,
    primaryId: gtmId || gaId,
  };
}

export function isGtmId(id: string): boolean {
  return GTM_PATTERN.test(id);
}

export function isGaId(id: string): boolean {
  return GA_PATTERN.test(id);
}
