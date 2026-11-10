import { LegalView } from "@/components/LegalView";
import { termsOfUse } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { legalPagesIndexable } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Website Terms of Use Draft Page | QNVO Technologies",
  description:
    "Website terms for QNVO Technologies: site use, intellectual property, liability and governing law. Draft — replace owner placeholders before publishing.",
  path: "/terms/",
  index: legalPagesIndexable,
});

export default function TermsPage() {
  return (
    <LegalView
      document={termsOfUse}
      path="/terms/"
      lede="This draft explains how to use the website. It is not a client contract. Replace every owner placeholder before publication."
    />
  );
}
