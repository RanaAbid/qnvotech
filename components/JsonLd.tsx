import { headers } from "next/headers";
import type { Faq } from "@/lib/data";
import { faqNode } from "@/lib/seo";

async function jsonLdNonce(): Promise<string | undefined> {
  const headerNonce = (await headers()).get("x-nonce")?.trim();
  return headerNonce || undefined;
}

function JsonLdScript({ payload, nonce }: { payload: string; nonce?: string }) {
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

export async function StructuredData({ data }: { data: Record<string, unknown>[] }) {
  const nonce = await jsonLdNonce();
  const payload = JSON.stringify({ "@context": "https://schema.org", "@graph": data }).replace(/</g, "\\u003c");
  return <JsonLdScript payload={payload} nonce={nonce} />;
}

/** Standalone FAQPage script (not nested under @graph) for Google Rich Results detection. */
export async function FaqStructuredData({ items }: { items: Faq[] }) {
  const nonce = await jsonLdNonce();
  const payload = JSON.stringify({
    "@context": "https://schema.org",
    ...faqNode(items),
  }).replace(/</g, "\\u003c");
  return <JsonLdScript payload={payload} nonce={nonce} />;
}
