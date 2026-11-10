import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { Container } from "@/components/ui";

export function Cta({
  title = "Discuss your project",
  body = "Tell us what you are building. A message starts a conversation. It is not a quote or a contract.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-scene bg-transparent px-4 py-8 md:py-12" aria-labelledby="cta-heading">
      <SectionBackdrop tone="mint" />
      <Container>
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-white md:px-12">
            <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
            <span className="cta-orb cta-orb-a" aria-hidden="true" />
            <span className="cta-orb cta-orb-b" aria-hidden="true" />
            <span className="shape-slash !right-10 !top-10 opacity-70" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <h2 id="cta-heading" className="anim-title font-display text-[1.85rem] font-bold text-white md:text-4xl">
                {title}
              </h2>
              <p className="anim-copy mt-4 text-lg leading-relaxed text-offwhite">{body}</p>
              <div className="anim-cta mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact/" className="btn btn-blue">
                  Contact QNVO Technologies
                </Link>
                <Link href="/services/" className="btn btn-ghost">
                  Explore our services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
