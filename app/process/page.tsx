import { permanentRedirect } from "next/navigation";

/** Legacy URL — canonical delivery page is /how-we-deliver/. */
export default function ProcessRedirectPage() {
  permanentRedirect("/how-we-deliver/");
}
