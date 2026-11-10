import { LegalView } from "@/components/LegalView";
import { accessibilityStatement } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { legalPagesIndexable } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Accessibility Statement | QNVO",
  description:
    "Read QNVO Technologies' accessibility goals, current verification status and how to report barriers on our website.",
  path: "/accessibility-statement/",
  index: legalPagesIndexable,
});

export default function AccessibilityPage() {
  return (
    <LegalView
      document={accessibilityStatement}
      path="/accessibility-statement/"
      lede="This draft records the accessibility goal for the website and how to report a barrier. It is not a conformance claim."
    />
  );
}
