import Image from "next/image";
import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { AbstractGraphic } from "@/components/Shapes";
import { Container, TextLink } from "@/components/ui";
import { regions } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { tagline } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About QNVO Technologies",
  description:
    "QNVO Technologies — Quality, Next-Gen, Vision and Operations — discusses software, AI and digital services. No client proof, address or headcount is published here.",
  path: "/about/",
});

const letters = [
  {
    term: "Quality",
    detail: "Requirements and review points are written down before build work is treated as agreed.",
  },
  {
    term: "Next-Gen",
    detail: "Current software and AI are used where they fit the task, with a person able to check the result.",
  },
  {
    term: "Vision",
    detail: "A system is described in terms of the people who will use it, not only the tools used to build it.",
  },
  {
    term: "Operations",
    detail: "Software is discussed in the context of day-to-day work: the steps, the data and the hand-off.",
  },
];

export default function AboutPage() {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "About", path: "/about/" },
      ]}
      title="About QNVO Technologies"
      lede="QNVO Technologies publishes this site so organizations can see the service areas and start a project conversation. The name stands for Quality, Next-Gen, Vision and Operations."
    >
      <section className="bg-white py-16 md:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,28rem)_1fr]">
          <div className="soft-card max-w-md p-6">
            <Image
              src="/logo/qnvo-logo-full-lockup-transparent.png"
              alt="QNVO Technologies"
              width={448}
              height={280}
              sizes="(min-width: 1024px) 448px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div>
            <h2 className="font-display text-[1.75rem] font-bold md:text-[2.25rem]">What the name means</h2>
            <p className="mt-4 text-lg">{tagline}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {letters.map((item) => (
                <div key={item.term} className="soft-card p-5">
                  <dt className="font-display text-xl font-semibold text-navy">
                    <span className="step-index mb-3 text-base">{item.term.slice(0, 1)}</span>
                    <span className="mt-3 block">{item.term}</span>
                  </dt>
                  <dd className="mt-2">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
      <section className="bg-offwhite py-16 md:py-20">
        <Container>
          <h2 className="font-display text-[1.75rem] font-bold md:text-[2.25rem]">What this page will not invent</h2>
          <p className="mt-4 max-w-3xl text-lg">
            Client names, testimonials, prices, founding year, headcount, certifications, social profiles and street addresses are omitted. They are not verified for publication. Markets listed below are the audiences the copy is written for.
          </p>
          <div className="mt-8 grid items-center gap-6 lg:grid-cols-[minmax(0,16rem)_1fr]">
            <AbstractGraphic className="graphic-frame h-auto w-full" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {regions.map((region) => (
                <li key={region} className="soft-card p-5 font-display text-xl font-semibold text-navy">
                  <span className="mb-3 block h-1.5 w-12 rounded-full bg-blue shadow-[0_6px_14px_rgba(0,112,232,0.35)]" />
                  {region}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8">
            <TextLink href="/services/">Explore our services</TextLink>
          </p>
        </Container>
      </section>
      <Cta />
    </InnerPage>
  );
}
