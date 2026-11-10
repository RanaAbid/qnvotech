"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";
import { publicEmail, tagline } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/case-studies/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/process/", label: "Process" },
  { href: "/faq/", label: "FAQ" },
];

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 7h14M5 12h14M5 17h14" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function current(href: string): boolean {
    return pathname === href;
  }

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_10px_30px_rgba(2,40,95,0.08)]">
      <div className="bg-navy text-offwhite">
        <div className="flex w-full flex-wrap items-center justify-between gap-2 px-5 py-2 text-sm md:px-8 lg:px-12">
          <p>{tagline}</p>
          <a className="font-semibold text-white underline decoration-white/30 underline-offset-4" href={`mailto:${publicEmail}`}>
            {publicEmail}
          </a>
        </div>
      </div>
      <div className="w-full border-b border-navy/10 bg-white">
        <div className="relative flex w-full items-center justify-between gap-4 px-5 py-3 md:px-8 lg:px-12">
          <Link href="/" className="inline-flex shrink-0 items-center">
            <OptimizedImage
              base="/logo/qnvo-logo-horizontal-transparent"
              alt="QNVO Technologies"
              width={121}
              height={44}
              priority
              sizes="121px"
              className="h-10 w-auto md:h-11"
            />
          </Link>
          <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current(link.href) ? "page" : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-3 font-semibold xl:px-4 ${current(link.href) ? "bg-offwhite text-blue" : "text-navy"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact/" className="btn btn-blue hidden sm:inline-flex">
              Discuss a project
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-offwhite text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="w-full border-t border-navy/10 bg-white px-5 py-3 lg:hidden">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={current(link.href) ? "page" : undefined} className="flex min-h-11 items-center font-semibold text-navy">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="sm:hidden">
              <Link href="/contact/" className="flex min-h-11 items-center font-semibold text-blue">
                Discuss a project
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
