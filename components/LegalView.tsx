import { InnerPage } from "@/components/InnerPage";
import { Container, TextLink } from "@/components/ui";
import type { LegalDocument } from "@/content/legal";
import { publicEmail } from "@/lib/site";

export function LegalView({
  document,
  path,
  lede,
}: {
  document: LegalDocument;
  path: string;
  lede: string;
}) {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: document.title, path },
      ]}
      eyebrow="Draft"
      title={document.title}
      lede={lede}
    >
      <section className="bg-white py-16">
        <Container>
          <p className="max-w-3xl rounded-md border border-navy/15 bg-offwhite px-4 py-3 font-semibold text-navy">
            {document.status}. Prepared 31 October 2026. Search engines are asked not to index this page until it is reviewed.
          </p>
          {document.sections.map((section) => (
            <section key={section.heading} className="mt-10 max-w-3xl">
              <h2 className="font-display text-[1.75rem] font-bold">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <p className="mt-10">
            <TextLink href={`mailto:${publicEmail}`}>{publicEmail}</TextLink>
          </p>
        </Container>
      </section>
    </InnerPage>
  );
}
