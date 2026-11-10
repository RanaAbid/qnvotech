import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found on This Site | QNVO Technologies",
  description:
    "This page is not on the QNVO Technologies website. Go back to the homepage, browse services, or contact info@qnvotech.com about a project.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="page-banner text-white">
      <Container className="relative z-10 py-24">
        <h1 className="font-display text-[2rem] font-bold text-white md:text-[2.75rem]">Page not found</h1>
        <p className="mt-4 max-w-xl text-lg text-offwhite">That address is not part of this website. The links below go to pages that do exist.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-white">
            Back to home
          </Link>
          <Link href="/services/" className="btn btn-ghost">
            Explore our services
          </Link>
          <Link href="/contact/" className="btn btn-blue">
            Contact QNVO Technologies
          </Link>
        </div>
      </Container>
    </section>
  );
}
