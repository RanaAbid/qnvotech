import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { Container, TextLink } from "@/components/ui";
import {
  formatInsightDate,
  getInsight,
  insightReadingMinutes,
  insights,
} from "@/content/insights";
import { articleNode, pageMetadata } from "@/lib/seo";
import { companyName } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/insights/${article.slug}/`,
    index: !article.draft,
    type: "article",
    publishedTime: `${article.publishedAt}T00:00:00.000Z`,
  });
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();
  const minutes = insightReadingMinutes(article);

  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Insights", path: "/insights/" },
        { name: article.title, path: `/insights/${article.slug}/` },
      ]}
      eyebrow={article.draft ? "Draft insight" : "Insight"}
      title={article.title}
      lede={article.description}
      extraGraph={[articleNode(article)]}
    >
      <article className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          {article.draft ? (
            <p className="rounded-md border border-amber/40 bg-[#fff8eb] px-4 py-3 text-sm font-semibold text-navy">
              Draft for owner review. Replace or approve this copy before treating it as a final published article.
            </p>
          ) : null}
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate">
            <span>{formatInsightDate(article.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span>{minutes} min read</span>
            <span aria-hidden="true">·</span>
            <span>By {companyName}</span>
          </p>
          <div className="mt-10 space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-[1.75rem] font-bold text-navy md:text-[2rem]">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
          <p className="mt-12 rounded-2xl bg-offwhite p-6 text-lg leading-relaxed">
            Related service:{" "}
            <TextLink href={`/services/${article.relatedServiceSlug}/`}>{article.relatedServiceLabel}</TextLink>
          </p>
        </Container>
      </article>
      <Cta title="Discuss this topic for your team" body="Describe the workflow and the systems involved. A message starts a conversation. It is not a quote or a contract." />
    </InnerPage>
  );
}
