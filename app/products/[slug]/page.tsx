import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/FaqList";
import { InnerPage } from "@/components/InnerPage";
import { Reveal } from "@/components/Motion";
import {
  ProductCapabilityGrid,
  ProductDemoVideo,
  ProductGallery,
  ProductHeroMedia,
  ProductModuleBoard,
} from "@/components/ProductShowcase";
import { Container } from "@/components/ui";
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
              {product.demoVideo ? (
                <a href={`#${product.slug}-demo`} className="btn btn-outline">
                  Watch demo
                </a>
              ) : null}
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

      {product.demoVideo ? (
        <section
          id={`${product.slug}-demo`}
          className="product-demo-section bg-white py-14 md:py-20"
          aria-labelledby={`${product.slug}-demo-heading`}
        >
          <Container>
            <Reveal>
              <p className="eyebrow">Product demo</p>
              <h2
                id={`${product.slug}-demo-heading`}
                className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]"
              >
                See {product.shortName} in action
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-slate">
                A short walkthrough of the product workspace. Press play when you are ready — the video loads only after you start it.
              </p>
            </Reveal>
            <Reveal className="mt-8" variant="scale">
              <ProductDemoVideo product={product} />
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section
        className={`${product.demoVideo ? "bg-[#e8eef5]" : "bg-white"} py-14 md:py-20`}
        aria-labelledby={`${product.slug}-capabilities-heading`}
      >
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

      <section
        className={`${product.demoVideo ? "bg-white" : "bg-[#e8eef5]"} py-14 md:py-20`}
        aria-labelledby={`${product.slug}-gallery-heading`}
      >
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
          <Reveal>
            <header className="product-modules-head">
              <div className="product-modules-head-copy">
                <p className="eyebrow">Modules</p>
                <h2 id={`${product.slug}-modules-heading`} className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.35rem]">
                  Application areas
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
                  Each tile is a product area in {product.shortName}. Hover or tap to focus one — permissions and setup still
                  decide what each user can open.
                </p>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate">{product.notClaimed}</p>
              </div>
              <div className="product-modules-head-badge" aria-hidden="true">
                <span className="product-modules-head-badge-label">{product.statusLabel}</span>
                <strong>{product.modules.length}</strong>
                <span>modules</span>
              </div>
            </header>
          </Reveal>

          <Reveal className="mt-8" variant="scale">
            <ProductModuleBoard product={product} />
          </Reveal>

          {related.length > 0 ? (
            <Reveal className="mt-8">
              <div className="product-modules-related">
                <p className="product-modules-related-label">Related services</p>
                <ul>
                  {related.map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}/`} className="product-modules-related-link">
                        <span>{service.title}</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}
        </Container>
      </section>

      <section
        className={`${product.demoVideo ? "bg-[#e8eef5]" : "bg-white"} py-14 md:py-20`}
        aria-labelledby={`${product.slug}-catalog-heading`}
      >
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

      <section
        className={`${product.demoVideo ? "bg-white" : "bg-[#e8eef5]"} py-14 md:py-20`}
        aria-labelledby={`${product.slug}-faq-heading`}
      >
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
