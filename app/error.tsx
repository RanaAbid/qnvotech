"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Container } from "@/components/ui";
import { publicEmail } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="page-banner text-white" role="alert">
      <Container className="relative z-10 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">Something went wrong</p>
        <h1 className="mt-3 font-display text-[2rem] font-bold text-white md:text-[2.75rem]">This page could not load</h1>
        <p className="mt-4 max-w-xl text-lg text-offwhite">
          A temporary error stopped this view. You can try again, return home, or email {publicEmail}.
        </p>
        {error.digest ? <p className="mt-3 text-sm text-white/70">Reference: {error.digest}</p> : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn btn-white" onClick={() => reset()}>
            Try again
          </button>
          <Link href="/" className="btn btn-ghost">
            Back to home
          </Link>
          <a href={`mailto:${publicEmail}`} className="btn btn-blue">
            Email QNVO Technologies
          </a>
        </div>
      </Container>
    </section>
  );
}
