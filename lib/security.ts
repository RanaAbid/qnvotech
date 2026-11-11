import { siteUrl } from "@/lib/site";

function isLoopbackHost(hostname: string): boolean {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

/**
 * CSRF defense for the JSON contact API: require a browser Origin that matches
 * the configured site (or loopback in non-production). Do not trust
 * X-Forwarded-Host alone — that header is attacker-controlled without a
 * trusted reverse proxy strip.
 */
export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  const fetchSite = (request.headers.get("sec-fetch-site") ?? "").toLowerCase();
  if (fetchSite === "cross-site") return false;

  let originUrl: URL;
  try {
    originUrl = new URL(origin);
  } catch {
    return false;
  }
  if (originUrl.protocol !== "https:" && originUrl.protocol !== "http:") return false;

  // Local next start / WAMP uses production NODE_ENV but loopback Origin.
  if (isLoopbackHost(originUrl.hostname)) return true;

  try {
    return originUrl.host === new URL(siteUrl).host;
  } catch {
    return false;
  }
}

export async function verifyTurnstile(token: string, ip: string): Promise<"ok" | "skip" | "fail"> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  // Skip only when Turnstile is not configured at all. If a site key exists without a
  // secret, fail closed so a half-set deploy cannot be bypassed.
  if (!secret) return siteKey ? "fail" : "skip";
  if (!token) return "fail";

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip !== "unknown") body.set("remoteip", ip);

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) return "fail";
    const payload: unknown = await response.json();
    if (typeof payload === "object" && payload !== null && "success" in payload && payload.success === true) {
      return "ok";
    }
    return "fail";
  } catch {
    return "fail";
  }
}
