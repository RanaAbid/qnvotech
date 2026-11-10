import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { AbstractGraphic } from "@/components/Shapes";
import { Container, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights | QNVO Technologies",
  description:
    "QNVO Technologies has not published articles yet. Insights will appear here only as original writing, linked to a relevant service.",
  path: "/insights/",
});

export default function InsightsPage() {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Insights", path: "/insights/" },
      ]}
      title="Insights"
      lede="No articles are published yet. When writing is added, it will be original and linked to at least one service page."
    >
      <section className="bg-white py-16 md:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,16rem)_1fr]">
          <AbstractGraphic className="graphic-frame h-auto w-full" />
          <div className="soft-card p-8">
            <h2 className="font-display text-[1.75rem] font-bold md:text-[2.25rem]">Coming when there is something to say</h2>
            <p className="mt-4 max-w-3xl text-lg">
              This page is not filled with generated posts, sample headlines or borrowed statistics. An insight is added when QNVO Technologies has a finished article.
            </p>
            <p className="mt-8">
              <TextLink href="/services/">Browse technology services</TextLink>
            </p>
          </div>
        </Container>
      </section>
      <Cta />
    </InnerPage>
  );
}
