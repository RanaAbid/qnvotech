import { siteUrl } from "@/lib/site";

export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  let originHost = "";
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }
  const hostname = originHost.split(":")[0] ?? "";
  if (hostname === "localhost" || hostname === "127.0.0.1") return true;
  const requestHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (requestHost && originHost === requestHost.split(",")[0]?.trim()) return true;
  try {
    return originHost === new URL(siteUrl).host;
  } catch {
    return false;
  }
}

export async function verifyTurnstile(token: string, ip: string): Promise<"ok" | "skip" | "fail"> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) return "skip";
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
