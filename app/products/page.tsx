import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { ProductCard } from "@/components/ProductShowcase";
import { Reveal } from "@/components/Motion";
import { Container, TextLink } from "@/components/ui";
import { PictureFill } from "@/components/OptimizedImage";
import { productsInOrder } from "@/content/products";
import { pageMetadata, webPageNode } from "@/lib/seo";
import { absoluteUrl, siteUrl } from "@/lib/site";

const title = "QNVO Products | My POS, Chat, Link, B.R.A.I.N. and more";
const description =
  "QNVO Technologies product catalog: My POS, QNVO Chat, QNVO Link, B.R.A.I.N., SecureDesk AI, QNVO Voice, BudgetIQ and Dump. Live apps, demos and mobile releases — no invented prices.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/products/",
});

export default function ProductsPage() {
  const catalog = productsInOrder();

  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Products", path: "/products/" },
      ]}
      eyebrow="Products"
      title="Software products from QNVO Technologies"
      lede="Eight products across retail POS, WhatsApp AI, multi-agent workflows, IT helpdesk, voice interviews, budgets and thought capture. Each page lists modules, honest status and a live link or access path when one exists."
      extraGraph={[
        webPageNode({
          name: "QNVO Products",
          description,
          path: "/products/",
          type: "CollectionPage",
        }),
        {
          "@type": "ItemList",
          name: "QNVO Technologies products",
          itemListElement: catalog.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: absoluteUrl(`/products/${product.slug}/`),
          })),
          isPartOf: { "@id": `${siteUrl}/#website` },
        },
      ]}
    >
      <section className="product-index-hero bg-[#e8eef5] py-14 md:py-20" aria-labelledby="products-catalog-heading">
        <Container>
          <Reveal>
            <div className="product-index-banner">
              <div className="product-index-banner-copy">
                <p className="eyebrow">Catalog</p>
                <h2 id="products-catalog-heading" className="font-display text-[1.75rem] font-bold text-navy md:text-[2.25rem]">
                  Products you can open and operate
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
                  These pages are for product discovery and agentic browsing: clear modules, honest non-claims, and links to the live application when one exists.
                </p>
                <p className="mt-4">
                  <TextLink href="/services/">Looking for custom project services instead?</TextLink>
                </p>
              </div>
              <div className="product-index-banner-media" aria-hidden="true">
                <PictureFill
                  base="/images/product-generic-suite"
                  alt=""
                  sizes="(max-width: 900px) 100vw, 420px"
                  width={1200}
                  height={675}
                />
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8">
            {catalog.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <Cta
        title="Need access or a rollout conversation?"
        body="Credentials are issued by QNVO Technologies. A website visit does not create an account. Tell us about the counters, warehouses and users you need to support."
      />
    </InnerPage>
  );
}
