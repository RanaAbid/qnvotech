import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { ColorBand } from "@/components/SectionBackdrop";
import { ServiceCard } from "@/components/ServiceCard";
import { Container, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { getServices } from "@/lib/sanity";

export const metadata = pageMetadata({
  title: "Software Development & AI Services | QNVO Technologies",
  description:
    "Browse QNVO Technologies services: enterprise software, AI agents, automation, ERP, ecommerce, web development, technical SEO and website security.",
  path: "/services/",
});

export default async function ServicesPage() {
  const catalog = await getServices();
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/" },
      ]}
      title="Technology Services for Growing Businesses"
      lede="QNVO Technologies groups its work into eight service areas. Each page explains who the service is for, what a typical engagement can include, and how to start a conversation. Nothing here is a quote or a guaranteed result."
    >
      <section className="bg-[#e8eef5] py-16 md:py-20">
        <Container>
          <h2 className="font-display text-[1.75rem] font-bold md:text-[2.25rem]">AI services</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {catalog.filter((service) => service.slug.startsWith("ai-")).map((service) => (
              <ServiceCard key={service.slug} service={service} featured />
            ))}
          </div>
          <h2 className="mt-14 font-display text-[1.75rem] font-bold md:text-[2.25rem]">Other service areas</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {catalog.filter((service) => !service.slug.startsWith("ai-")).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <ColorBand tone="blue" className="py-16 md:py-20">
        <Container>
          <h2 className="font-display text-[1.75rem] font-bold text-white md:text-[2.25rem]">See the work on real platforms</h2>
          <p className="mt-4 max-w-3xl text-lg text-white/90">
            BMS and CSM show the kind of enterprise engineering these services support — without invented client wins or guaranteed metrics.
          </p>
          <p className="mt-8">
            <TextLink href="/case-studies/">Read the BMS and CSM case studies</TextLink>
          </p>
        </Container>
      </ColorBand>
      <Cta />
    </InnerPage>
  );
}
