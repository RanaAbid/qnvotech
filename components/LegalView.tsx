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
          <p className="rounded-md border border-navy/15 bg-offwhite px-4 py-3 font-semibold text-navy md:max-w-3xl">
            {document.status}. Search engines are asked not to index this page until it is reviewed. Placeholder blocks below must be replaced before publication.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-[1.75rem] font-bold text-navy">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.placeholders?.map((placeholder) => (
                  <p
                    key={placeholder}
                    className="mt-4 rounded-md border border-amber/40 bg-[#fff8eb] px-4 py-3 text-sm leading-relaxed text-navy"
                  >
                    {placeholder}
                  </p>
                ))}
              </section>
            ))}
          </div>
          <p className="mt-10">
            <TextLink href={`mailto:${publicEmail}`}>{publicEmail}</TextLink>
          </p>
        </Container>
      </section>
    </InnerPage>
  );
}
