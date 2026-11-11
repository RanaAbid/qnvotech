import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/FaqList";
import { InnerPage } from "@/components/InnerPage";
import { Container, TextLink } from "@/components/ui";
import { faqs } from "@/lib/data";
import { faqNode, pageMetadata, webPageNode } from "@/lib/seo";

const faqTitle = "FAQ: Services, Regions & Contact | QNVO Technologies";
const faqDescription =
  "Answers about QNVO Technologies services, regions, contact, case studies and what this website does not promise. Email info@qnvotech.com to ask.";

export const metadata = pageMetadata({
  title: faqTitle,
  description: faqDescription,
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq/" },
      ]}
      title="Frequently Asked Questions"
      lede="Straight answers about what QNVO Technologies publishes, how to start a conversation, and what this website does not claim."
      extraGraph={[
        webPageNode({
          name: "Frequently Asked Questions",
          description: faqDescription,
          path: "/faq/",
        }),
        faqNode(faqs),
      ]}
    >
      <section className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="font-display text-[1.75rem] font-bold md:text-[2.25rem]">Answers</h2>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
          <p className="mt-8">
            Still deciding where a project fits? <TextLink href="/services/">Explore our services</TextLink> or{" "}
            <TextLink href="/contact/">contact QNVO Technologies</TextLink>.
          </p>
        </Container>
      </section>
      <Cta />
    </InnerPage>
  );
}
