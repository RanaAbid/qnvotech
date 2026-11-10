import { LegalView } from "@/components/LegalView";
import { privacyPolicy } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { legalPagesIndexable } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy | QNVO Technologies",
  description:
    "Learn how QNVO Technologies plans to handle website enquiries, technical data and privacy requests. Contact info@qnvotech.com with questions.",
  path: "/privacy-policy/",
  index: legalPagesIndexable,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalView
      document={privacyPolicy}
      path="/privacy-policy/"
      lede="This draft describes planned handling of contact enquiries and technical data. It is not an approved privacy notice."
    />
  );
}
