import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/FaqList";
import { InnerPage } from "@/components/InnerPage";
import { ServiceCard } from "@/components/ServiceCard";
import { Container, TextLink } from "@/components/ui";
import { services, relatedServices } from "@/lib/data";
import { faqNode, pageMetadata, serviceNode } from "@/lib/seo";
import { getService, getServices } from "@/lib/sanity";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.description,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();
  const catalog = await getServices();
  const related = relatedServices(service, catalog);

  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/" },
        { name: service.title, path: `/services/${service.slug}/` },
      ]}
      title={service.h1}
      lede={service.summary}
      extraGraph={[serviceNode(service), faqNode(service.faqs)]}
    >
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
          <h2 className="font-display text-[1.75rem] font-bold md:text-[2.25rem]">Who it is for</h2>
          <p className="mt-4 text-lg">{service.audience}</p>
          <h2 className="mt-12 font-display text-[1.75rem] font-bold md:text-[2.25rem]">What a typical scope can include</h2>
          <ul className="mt-4 grid gap-3">
            {service.deliverables.map((item) => (
              <li key={item} className="soft-card flex gap-3 p-4">
                <span className="mark-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5 9.2 17 19 7" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h2 className="mt-12 font-display text-[1.75rem] font-bold md:text-[2.25rem]">How the work is approached</h2>
          <ol className="mt-4 grid gap-3">
            {service.approach.map((item, index) => (
              <li key={item} className="soft-card flex gap-3 p-4">
                <span className="step-index step-index-sm">{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            <TextLink href="/contact/">Discuss your project</TextLink>
            <span className="mx-2 text-navy/40" aria-hidden="true">
              ·
            </span>
            <TextLink href="/process/">Read the delivery process</TextLink>
          </p>
          </div>
        </Container>
      </section>
      <section className="bg-offwhite py-16 md:py-20">
        <Container>
          <h2 className="font-display text-[1.75rem] font-bold md:text-[2.25rem]">Related services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="font-display text-[1.75rem] font-bold md:text-[2.25rem]">Questions about this service</h2>
          <div className="mt-8">
            <FaqList items={service.faqs} />
          </div>
        </Container>
      </section>
      <Cta title={`Talk about ${service.title}`} body="Describe the workflow, the users and the systems involved. QNVO Technologies will tell you whether it fits this service." />
    </InnerPage>
  );
}
