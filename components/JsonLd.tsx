import { headers } from "next/headers";

export async function StructuredData({ data }: { data: Record<string, unknown>[] }) {
  const headerNonce = (await headers()).get("x-nonce")?.trim();
  const nonce = headerNonce || undefined;
  const payload = JSON.stringify({ "@context": "https://schema.org", "@graph": data }).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      {...(nonce ? { nonce } : {})}
      // JSON-LD is static markup; suppress false mismatches from empty nonce attrs.
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: payload }}
    />
  );
}
