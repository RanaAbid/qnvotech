import Link from "next/link";
import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { Reveal } from "@/components/Motion";
import { Container, TextLink } from "@/components/ui";
import { partnerIntro, partnerModels, partnerNonClaims, partnerSteps } from "@/content/partners";
import { pageMetadata, webPageNode } from "@/lib/seo";

const title = "Partner With QNVO Technologies | Engagement Models";
const description =
  "How teams work with QNVO Technologies: project engagement, product collaboration and capacity discussions. No invented partner logos, reseller badges or unnamed client brands on this page.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/partners/",
});

export default function PartnersPage() {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Partners", path: "/partners/" },
      ]}
      eyebrow="Engage"
      title={partnerIntro.title}
      lede={partnerIntro.lede}
      extraGraph={[
        webPageNode({
          name: "Partners",
          description,
          path: "/partners/",
        }),
      ]}
    >
      <section className="partner-hero bg-[#e8eef5] py-14 md:py-20" aria-labelledby="partner-models-heading">
        <Container>
          <Reveal>
            <p className="eyebrow">Models</p>
            <h2 id="partner-models-heading" className="mt-3 font-display text-[1.75rem] font-bold text-navy md:text-[2.35rem]">
              Engagement patterns — not a badge wall
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate">
              Choose the shape of the conversation. Stacks and hours still belong in a written agreement.
            </p>
          </Reveal>
          <div className="partner-model-grid mt-10">
            {partnerModels.map((model, index) => (
              <Reveal key={model.title} variant="scale">
                <article className={`partner-model-card partner-model-card-${(index % 4) + 1}`}>
                  <p className="partner-model-index">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="font-display text-xl font-bold text-navy md:text-2xl">{model.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{model.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20" aria-labelledby="partner-steps-heading">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal variant="left">
            <p className="eyebrow">Start</p>
            <h2 id="partner-steps-heading" className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              How a collaboration starts
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              The path is short on purpose. Nothing becomes binding until it is written.
            </p>
            <p className="mt-6">
              <TextLink href="/technologies/">See technology groups we discuss</TextLink>
            </p>
            <p className="mt-3">
              <TextLink href="/how-we-deliver/">See how delivery works</TextLink>
            </p>
          </Reveal>
          <ol className="partner-step-rail">
            {partnerSteps.map((step, index) => (
              <li key={step.title}>
                <Reveal variant="right">
                  <article className="partner-step-card">
                    <p className="partner-step-num">{String(index + 1).padStart(2, "0")}</p>
                    <div>
                      <h3 className="font-display text-xl font-bold text-navy">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate">{step.body}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="partner-honesty py-14 md:py-20" aria-labelledby="partner-honesty-heading">
        <Container>
          <Reveal>
            <div className="partner-honesty-panel">
              <p className="eyebrow text-amber">Honesty</p>
              <h2 id="partner-honesty-heading" className="mt-3 font-display text-[1.75rem] font-bold text-white md:text-[2.25rem]">
                What this page does not claim
              </h2>
              <ul className="partner-honesty-list mt-6">
                {partnerNonClaims.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact/" className="btn btn-blue">
                  Discuss a collaboration
                </Link>
                <Link href="/services/" className="btn btn-ghost">
                  Browse services
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Cta
        title="Have work to discuss?"
        body="Tell us the system, the users and the constraint. A message starts a conversation — it is not a partner contract."
      />
    </InnerPage>
  );
}
