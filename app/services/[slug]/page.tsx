import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/ServiceDetail";
import { insightForService } from "@/content/insights";
import { services, relatedServices } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
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
  const relatedInsight = insightForService(service.slug);

  return (
    <ServiceDetail
      service={service}
      catalog={catalog}
      related={related}
      relatedInsight={relatedInsight}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/" },
        { name: service.title, path: `/services/${service.slug}/` },
      ]}
    />
  );
}
