type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function memoryAllow(key: string): boolean {
  const now = Date.now();
  if (buckets.size > 5000) {
    for (const [id, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(id);
    }
  }
  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (current.count >= LIMIT) return false;
  current.count += 1;
  return true;
}

function isResultRow(value: unknown): value is { result: unknown } {
  return typeof value === "object" && value !== null && "result" in value;
}

async function sharedAllow(key: string): Promise<boolean | null> {
  const base = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!base || !token) return null;

  try {
    const response = await fetch(`${base.replace(/\/$/, "")}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, 600, "NX"],
      ]),
      cache: "no-store",
      signal: AbortSignal.timeout(2500),
    });
    if (!response.ok) return null;
    const payload: unknown = await response.json();
    if (!Array.isArray(payload) || !isResultRow(payload[0])) return null;
    return typeof payload[0].result === "number" ? payload[0].result <= LIMIT : null;
  } catch {
    return null;
  }
}

export async function allowContact(ip: string): Promise<boolean> {
  const safeIp = ip.replace(/[^\w.:-]/g, "").slice(0, 64) || "unknown";
  const shared = await sharedAllow(`qnvo:contact:${safeIp}`);
  if (shared !== null) return shared;
  return memoryAllow(safeIp);
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim() ?? "";
    if (first) return first.slice(0, 64);
  }
  const real = request.headers.get("x-real-ip")?.trim();
  if (real) return real.slice(0, 64);
  return "unknown";
}
