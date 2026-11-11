import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { AbstractGraphic } from "@/components/Shapes";
import { Container, TextLink } from "@/components/ui";
import { formatInsightDate, insightReadingMinutes, insightsNewestFirst } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

const articles = insightsNewestFirst();

export const metadata = pageMetadata({
  title: "Insights on Software & AI Work | QNVO Technologies",
  description: articles.length
    ? "Original QNVO Technologies writing on AI agents, ERP, enterprise software and process automation, linked to the related service pages."
    : "QNVO Technologies has not published articles yet. Insights will appear here only as original writing linked to a service.",
  path: "/insights/",
});

export default function InsightsPage() {
  if (!articles.length) {
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

  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Insights", path: "/insights/" },
      ]}
      eyebrow="Insights"
      title="Insights"
      lede="Original writing on the services QNVO Technologies discusses. Articles are linked to a related service page. Draft pieces are marked until the copy is approved."
    >
      <section className="bg-[#e8eef5] py-16 md:py-20">
        <Container className="grid gap-6">
          {articles.map((article) => (
            <article key={article.slug} className="soft-card p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate">
                <span>{formatInsightDate(article.publishedAt)}</span>
                <span aria-hidden="true">·</span>
                <span>{insightReadingMinutes(article)} min read</span>
                {article.draft ? (
                  <span className="rounded-full bg-[#fff1d6] px-3 py-1 font-semibold text-navy">Draft · not indexed</span>
                ) : null}
              </div>
              <h2 className="mt-4 font-display text-[1.75rem] font-bold text-navy md:text-[2rem]">
                {article.draft ? (
                  <span>{article.title}</span>
                ) : (
                  <TextLink href={`/insights/${article.slug}/`}>{article.title}</TextLink>
                )}
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed">{article.description}</p>
              <p className="mt-5">
                <TextLink href={`/services/${article.relatedServiceSlug}/`}>Related: {article.relatedServiceLabel}</TextLink>
                {!article.draft ? (
                  <>
                    {" · "}
                    <TextLink href={`/insights/${article.slug}/`}>Read article</TextLink>
                  </>
                ) : (
                  <span className="ml-2 text-sm font-semibold text-slate">Draft copy is not linked for crawling.</span>
                )}
              </p>
            </article>
          ))}
        </Container>
      </section>
      <Cta />
    </InnerPage>
  );
}
