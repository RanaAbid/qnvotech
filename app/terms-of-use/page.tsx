import { LegalView } from "@/components/LegalView";
import { termsOfUse } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { legalPagesIndexable } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use | QNVO Technologies",
  description:
    "Read QNVO Technologies' website Terms of Use, including responsible site use, enquiries, intellectual property and contact details.",
  path: "/terms-of-use/",
  index: legalPagesIndexable,
});

export default function TermsPage() {
  return (
    <LegalView
      document={termsOfUse}
      path="/terms-of-use/"
      lede="This draft explains how to use the website. It is not a client contract and it is not approved for publication."
    />
  );
}
