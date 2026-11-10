import { LegalView } from "@/components/LegalView";
import { privacyPolicy } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { legalPagesIndexable } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy for This Website | QNVO Technologies",
  description:
    "How QNVO Technologies handles website enquiries, cookies, third parties, privacy rights and contact. Draft — replace owner placeholders before publishing.",
  path: "/privacy/",
  index: legalPagesIndexable,
});

export default function PrivacyPage() {
  return (
    <LegalView
      document={privacyPolicy}
      path="/privacy/"
      lede="This draft outlines how website privacy topics are organized. It is not an approved privacy notice. Replace every owner placeholder before publication."
    />
  );
}
