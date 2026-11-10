import Link from "next/link";
import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { Reveal } from "@/components/Motion";
import { Container } from "@/components/ui";
import { processSteps } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Technology Delivery Process | QNVO",
  description:
    "See how a QNVO Technologies project moves from a problem statement to a written scope, build, handover and any later support named in the agreement.",
  path: "/process/",
});

export default function ProcessPage() {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Process", path: "/process/" },
      ]}
      eyebrow="Delivery process"
      title="Our Technology Delivery Process"
      lede="A QNVO Technologies engagement moves from a conversation to a written scope, then to the work that scope names. The website does not set fees, deadlines or a support promise."
    >
      <section className="bg-[#e8eef5] py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-8 text-white shadow-[0_24px_50px_rgba(2,40,95,0.18)] md:px-10 md:py-10">
            <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">Five steps</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white">Nothing starts until it is written down</h2>
                <p className="mt-4 text-base leading-relaxed text-offwhite">
                  Each step below is how a conversation can move. It becomes an obligation only when an agreement names it.
                </p>
              </div>
              <Link href="/contact/" className="btn btn-blue shrink-0">
                Tell us what you are building
              </Link>
            </div>
            <ol className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <li key={step.title} className="rounded-2xl bg-white/10 px-4 py-3">
                  <p className="font-display text-sm font-bold text-amber">0{index + 1}</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-white">{step.title}</p>
                </li>
              ))}
            </ol>
          </div>
          <Reveal>
            <ol className="process-rail stagger-host mt-8 grid gap-5">
              {processSteps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[3.25rem_1fr] items-start gap-4">
                  <p className="step-index relative z-10">0{index + 1}</p>
                  <article className="soft-card relative overflow-hidden p-6 md:p-8">
                    <span className="pointer-events-none absolute -right-2 -top-3 font-display text-7xl font-bold text-navy/[0.06]" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue">
                      Step {index + 1} of {processSteps.length}
                    </p>
                    <h2 className="relative mt-2 font-display text-2xl font-bold md:text-[1.75rem]">{step.title}</h2>
                    <p className="relative mt-3 max-w-3xl text-lg leading-relaxed">{step.body}</p>
                  </article>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>
      <Cta title="Ready to describe the problem?" body="Share the system, the users and the constraints. QNVO Technologies will say whether it fits a service on this site. That reply is not a quote." />
    </InnerPage>
  );
}
