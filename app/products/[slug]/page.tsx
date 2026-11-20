import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/FaqList";
import { InnerPage } from "@/components/InnerPage";
import { Reveal } from "@/components/Motion";
import {
  ProductCapabilityGrid,
  ProductGallery,
  ProductHeroMedia,
  ProductModuleBoard,
} from "@/components/ProductShowcase";
import { Container, TextLink } from "@/components/ui";
import { productBySlug, productSlugs, products } from "@/content/products";
import { services } from "@/lib/data";
import { faqNode, pageMetadata, softwareApplicationNode, webPageNode } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return productSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/products/${product.slug}/`,
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const related = product.relatedServiceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const appHost = product.appUrl ? product.appUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : null;

  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Products", path: "/products/" },
        { name: product.shortName, path: `/products/${product.slug}/` },
      ]}
      eyebrow="Product"
      title={product.name}
      lede={product.tagline}
      extraGraph={[
        webPageNode({
          name: product.name,
          description: product.seoDescription,
          path: `/products/${product.slug}/`,
        }),
        softwareApplicationNode({
          name: product.name,
          description: product.description,
          path: `/products/${product.slug}/`,
          applicationUrl: product.appUrl ?? absoluteUrl("/contact/"),
          featureList: product.modules,
          image: absoluteUrl(`${product.heroImage}.jpg`),
        }),
        faqNode(product.faqs),
      ]}
    >
      <section className="product-detail-hero bg-[#e8eef5] py-14 md:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Reveal variant="left">
            <p className="eyebrow">{product.statusLabel}</p>
            <h2 className="mt-3 font-display text-[1.75rem] font-bold text-navy md:text-[2.35rem]">
              {product.tagline}
            </h2>
            <p className="product-agentic-answer mt-4 text-lg leading-relaxed text-slate">
              <strong className="font-semibold text-navy">{product.name}</strong> — {product.description}
            </p>
            <p className="mt-4 leading-relaxed text-slate">{product.whoFor}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate">{product.prepNote}</p>
            <div className="product-detail-actions mt-7">
              {product.appUrl ? (
                <a href={product.appUrl} className="btn btn-blue" rel="noopener noreferrer" target="_blank">
                  {product.appCta}
                </a>
              ) : (
                <Link href="/contact/" className="btn btn-blue">
                  {product.appCta}
                </Link>
              )}
              <Link href="/contact/" className="btn btn-outline">
                Discuss access
              </Link>
            </div>
            {appHost ? (
              <p className="mt-4 text-sm text-slate">
                Product URL:{" "}
                <a
                  className="font-semibold text-navy underline decoration-blue/40 underline-offset-4"
                  href={product.appUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {appHost}
                </a>
              </p>
            ) : null}
          </Reveal>
          <Reveal variant="right">
            <ProductHeroMedia product={product} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20" aria-labelledby={`${product.slug}-capabilities-heading`}>
        <Container>
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 id={`${product.slug}-capabilities-heading`} className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              What {product.shortName} covers
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate">
              Capabilities match the published product scope. Exact access depends on roles, channels and the written agreement for your deployment.
            </p>
          </Reveal>
          <Reveal className="mt-8" variant="scale">
            <ProductCapabilityGrid product={product} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#e8eef5] py-14 md:py-20" aria-labelledby={`${product.slug}-gallery-heading`}>
        <Container>
          <Reveal>
            <p className="eyebrow">Visuals</p>
            <h2 id={`${product.slug}-gallery-heading`} className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              Product scenes
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate">
              Generated product photography for context — not screenshots of private customer or candidate data.
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <ProductGallery product={product} />
          </Reveal>
        </Container>
      </section>

      <section className="product-modules-stage py-14 md:py-20" aria-labelledby={`${product.slug}-modules-heading`}>
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-10">
            <Reveal variant="left">
              <p className="eyebrow">Modules</p>
              <h2 id={`${product.slug}-modules-heading`} className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
                Application areas
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate">
                Each chip is a product area in {product.shortName}. Permissions and channel setup still decide what each user can open.
              </p>
              <p className="mt-4 leading-relaxed text-slate">{product.notClaimed}</p>
              {related.length > 0 ? (
                <ul className="mt-5 grid gap-2">
                  {related.map((service) => (
                    <li key={service.slug}>
                      <TextLink href={`/services/${service.slug}/`}>Related: {service.title}</TextLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
            <Reveal variant="scale">
              <ProductModuleBoard product={product} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20" aria-labelledby={`${product.slug}-catalog-heading`}>
        <Container>
          <Reveal>
            <p className="eyebrow">Catalog</p>
            <h2 id={`${product.slug}-catalog-heading`} className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              More products
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {products
              .filter((item) => item.slug !== product.slug)
              .map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}/`} className="btn btn-outline">
                  {item.shortName}
                </Link>
              ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#e8eef5] py-14 md:py-20" aria-labelledby={`${product.slug}-faq-heading`}>
        <Container>
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 id={`${product.slug}-faq-heading`} className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              Common questions
            </h2>
          </Reveal>
          <div className="mt-8">
            <FaqList items={product.faqs} />
          </div>
        </Container>
      </section>

      <Cta
        title={`Ready to talk about ${product.shortName}?`}
        body="Ask about access, rollout or how this product fits a workflow you already run. A message starts a conversation — it is not a license quote."
      />
    </InnerPage>
  );
}
