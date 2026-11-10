import { LegalView } from "@/components/LegalView";
import { accessibilityStatement } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { legalPagesIndexable } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Website Accessibility Statement | QNVO Technologies",
  description:
    "QNVO Technologies accessibility goals for WCAG 2.2 AA, known site limits, and how to report barriers. Draft — replace owner placeholders before publishing.",
  path: "/accessibility/",
  index: legalPagesIndexable,
});

export default function AccessibilityPage() {
  return (
    <LegalView
      document={accessibilityStatement}
      path="/accessibility/"
      lede="This draft records the accessibility goal for the website and how to report a barrier. It is not a conformance claim. Replace every owner placeholder before publication."
    />
  );
}
