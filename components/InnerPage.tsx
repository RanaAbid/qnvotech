import { StructuredData } from "@/components/JsonLd";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui";
import { breadcrumbNode } from "@/lib/seo";

export async function InnerPage({
  crumbs,
  title,
  lede,
  eyebrow,
  extraGraph = [],
  children,
}: {
  crumbs: Crumb[];
  title: string;
  lede: string;
  eyebrow?: string;
  extraGraph?: Record<string, unknown>[];
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={[breadcrumbNode(crumbs), ...extraGraph]} />
      <div className="page-banner page-banner-enter text-white">
        <Container className="relative z-10 py-14 md:py-20">
          <Breadcrumbs items={crumbs} onDark />
          {eyebrow ? (
            <p className="anim-eyebrow mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-amber">{eyebrow}</p>
          ) : null}
          <h1 className="anim-title mt-4 w-full font-display text-[2rem] font-bold leading-tight text-white md:text-[2.75rem] lg:text-[3.25rem]">
            {title}
          </h1>
          <p className="anim-copy mt-5 w-full text-lg leading-relaxed text-offwhite md:text-xl">{lede}</p>
        </Container>
      </div>
      {children}
    </>
  );
}
