import { services, servicesInOrder, type Service } from "@/lib/data";

type RemoteService = {
  slug: string;
  title: string;
  summary: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function plainText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function allowedId(value: string, pattern: RegExp): boolean {
  return pattern.test(value);
}

async function fetchRemoteServices(): Promise<RemoteService[] | null> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ?? "";
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";
  if (!projectId) return null;
  if (!allowedId(projectId, /^[a-z0-9-]+$/i) || !allowedId(dataset, /^[a-z0-9_-]+$/i)) return null;

  const query = '*[_type == "service"]{title, "slug": slug.current, summary}';
  const endpoint = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${encodeURIComponent(query)}`;
  const headers: HeadersInit = {};
  const token = process.env.SANITY_API_READ_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await fetch(endpoint, {
      headers,
      signal: AbortSignal.timeout(2500),
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;
    const payload: unknown = await response.json();
    if (!isRecord(payload) || !Array.isArray(payload.result)) return null;

    const remote: RemoteService[] = [];
    for (const item of payload.result) {
      if (!isRecord(item)) continue;
      const slug = plainText(item.slug, 80);
      const title = plainText(item.title, 120);
      const summary = plainText(item.summary, 1200);
      if (!slug || !title || !summary) continue;
      remote.push({ slug, title, summary });
    }
    return remote;
  } catch {
    return null;
  }
}

export async function getServices(): Promise<Service[]> {
  const remote = await fetchRemoteServices();
  if (!remote) return servicesInOrder(services);
  return servicesInOrder(services.map((service) => {
    const match = remote.find((item) => item.slug === service.slug);
    if (!match) return service;
    return { ...service, title: match.title, summary: match.summary };
  }));
}

export async function getService(slug: string): Promise<Service | undefined> {
  const catalog = await getServices();
  return catalog.find((service) => service.slug === slug);
}
