import { permanentRedirect } from "next/navigation";

/** Fallback if config redirects are skipped; keep permanent for SEO. */
export default function AccessibilityStatementRedirect() {
  permanentRedirect("/accessibility/");
}
