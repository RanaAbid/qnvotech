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
import { productBySlug } from "@/content/products";
import { faqNode, pageMetadata, softwareApplicationNode, webPageNode } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const product = productBySlug("my-pos");

export const metadata = product
  ? pageMetadata({
      title: product.seoTitle,
      description: product.seoDescription,
      path: `/products/${product.slug}/`,
    })
  : {};

export default function MyPosProductPage() {
  if (!product) notFound();

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
          applicationUrl: product.appUrl,
          featureList: product.modules,
          image: absoluteUrl(`${product.heroImage}.jpg`),
        }),
        faqNode(product.faqs),
      ]}
    >
      <section className="product-detail-hero bg-[#e8eef5] py-14 md:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Reveal variant="left">
            <p className="eyebrow">Live product</p>
            <h2 className="mt-3 font-display text-[1.75rem] font-bold text-navy md:text-[2.35rem]">
              Point of sale built for day-to-day retail operations
            </h2>
            <p className="product-agentic-answer mt-4 text-lg leading-relaxed text-slate">
              <strong className="font-semibold text-navy">QNVO My POS</strong> is QNVO Technologies’ point-of-sale
              product. Open it at{" "}
              <a
                className="font-semibold text-navy underline decoration-blue/40 underline-offset-4"
                href={product.appUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                my-pos.qnvotech.com
              </a>
              . It covers checkout, catalogue, purchases, sales, returns, customers, suppliers, warehouses and
              operational reports. Sign-in uses credentials issued by QNVO — this page does not create accounts or
              publish prices.
            </p>
            <p className="mt-4 leading-relaxed text-slate">{product.whoFor}</p>
            <div className="product-detail-actions mt-7">
              <a href={product.appUrl} className="btn btn-blue" rel="noopener noreferrer" target="_blank">
                Open My POS
              </a>
              <Link href="/contact/" className="btn btn-outline">
                Discuss access
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate">
              App URL:{" "}
              <a className="font-semibold text-navy underline decoration-blue/40 underline-offset-4" href={product.appUrl} rel="noopener noreferrer" target="_blank">
                my-pos.qnvotech.com
              </a>
            </p>
          </Reveal>
          <Reveal variant="right">
            <ProductHeroMedia product={product} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20" aria-labelledby="my-pos-capabilities-heading">
        <Container>
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 id="my-pos-capabilities-heading" className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              What My POS covers
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate">
              Module list matches the live application. Permission flags decide which screens each user can open.
            </p>
          </Reveal>
          <Reveal className="mt-8" variant="scale">
            <ProductCapabilityGrid product={product} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#e8eef5] py-14 md:py-20" aria-labelledby="my-pos-gallery-heading">
        <Container>
          <Reveal>
            <p className="eyebrow">Visuals</p>
            <h2 id="my-pos-gallery-heading" className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              Product scenes
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate">
              Generated product photography for checkout, inventory and reporting contexts — not screenshots of private customer data.
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <ProductGallery product={product} />
          </Reveal>
        </Container>
      </section>

      <section className="product-modules-stage py-14 md:py-20" aria-labelledby="my-pos-modules-heading">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-10">
            <Reveal variant="left">
              <p className="eyebrow">Modules</p>
              <h2 id="my-pos-modules-heading" className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
                Application areas
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate">
                Each chip is a live module area in My POS. Hover to feel the board move — permissions still decide who can open each screen.
              </p>
              <p className="mt-4 leading-relaxed text-slate">{product.notClaimed}</p>
              <p className="mt-5">
                <TextLink href="/services/enterprise-software-development/">Related: enterprise software services</TextLink>
              </p>
            </Reveal>
            <Reveal variant="scale">
              <ProductModuleBoard product={product} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#e8eef5] py-14 md:py-20" aria-labelledby="my-pos-faq-heading">
        <Container>
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 id="my-pos-faq-heading" className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              Common questions
            </h2>
          </Reveal>
          <div className="mt-8">
            <FaqList items={product.faqs} />
          </div>
        </Container>
      </section>

      <Cta
        title="Ready to talk about My POS?"
        body="Ask about access, warehouses, user roles or a rollout plan. A message starts a conversation — it is not a license quote."
      />
    </InnerPage>
  );
}
