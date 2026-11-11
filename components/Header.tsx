"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { OptimizedImage, PictureFill } from "@/components/OptimizedImage";
import { Container } from "@/components/ui";
import { pathMatches, primaryNav, type NavEntry } from "@/lib/navigation";
import { publicEmail, tagline } from "@/lib/site";

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

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      className={`mega-chevron${open ? " is-open" : ""}`}
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function entryActive(pathname: string, entry: NavEntry): boolean {
  if (entry.type === "link") return pathMatches(pathname, entry.href);
  if (pathMatches(pathname, entry.href)) return true;
  return entry.columns.some((column) => column.items.some((item) => pathMatches(pathname, item.href.split("#")[0])));
}

function getFocusable(root: HTMLElement): HTMLElement[] {
  return [...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])')].filter(
    (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true",
  );
}

export function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const mobileMenuId = `${menuId}-mobile`;
  const rootRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const closeDesktop = useCallback(() => setDesktopOpen(null), []);

  const closeMobile = useCallback((restoreFocus = false) => {
    setMobileOpen(false);
    setMobileSection(null);
    if (restoreFocus) {
      window.requestAnimationFrame(() => burgerRef.current?.focus());
    }
  }, []);

  const openDesktop = useCallback((id: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setDesktopOpen(id);
  }, []);

  const scheduleCloseDesktop = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setDesktopOpen(null), 140);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopOpen(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");
    const topline = rootRef.current?.querySelector(".site-topline");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    topline?.setAttribute("inert", "");
    return () => {
      document.body.style.overflow = previous;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      topline?.removeAttribute("inert");
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen || !mobilePanelRef.current) return;
    const panel = mobilePanelRef.current;

    function cycle() {
      const inPanel = getFocusable(panel);
      const burger = burgerRef.current;
      return burger ? [burger, ...inPanel] : inPanel;
    }

    const focusTimer = window.setTimeout(() => {
      getFocusable(panel)[0]?.focus();
    }, 0);

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobile(true);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = cycle();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen, closeMobile]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape" || !desktopOpen) return;
      const trigger = rootRef.current?.querySelector(
        `button[aria-controls="${menuId}-${desktopOpen}"]`,
      ) as HTMLButtonElement | null;
      setDesktopOpen(null);
      trigger?.focus();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [desktopOpen, menuId]);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setDesktopOpen(null);
      }
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  return (
    <header ref={rootRef} className="site-header">
      <div className="site-topline">
        <Container className="site-topline-inner">
          <p>{tagline}</p>
          <a href={`mailto:${publicEmail}`}>{publicEmail}</a>
        </Container>
      </div>

      <div className="site-nav-bar">
        <Container className="site-nav-inner">
          <Link href="/" className="site-logo site-logo--live" aria-label="QNVO Technologies home" onClick={closeDesktop}>
            <OptimizedImage
              base="/logo/qnvo-logo-horizontal-transparent"
              alt=""
              width={121}
              height={44}
              // Eager but not link-preloaded — keep bandwidth for the LCP hero.
              loading="eager"
              fetchPriority="high"
              sizes="121px"
              className="h-9 w-auto sm:h-10 md:h-11"
            />
          </Link>

          <nav aria-label="Primary" className="site-nav-desktop">
            <ul className="site-nav-list">
              {primaryNav.map((entry) => {
                const active = entryActive(pathname, entry);
                if (entry.type === "link") {
                  return (
                    <li key={entry.id}>
                      <Link
                        href={entry.href}
                        aria-current={active ? "page" : undefined}
                        className={`site-nav-link${active ? " is-active" : ""}`}
                        onClick={closeDesktop}
                      >
                        {entry.label}
                      </Link>
                    </li>
                  );
                }

                const open = desktopOpen === entry.id;
                const panelId = `${menuId}-${entry.id}`;
                return (
                  <li
                    key={entry.id}
                    className={`site-nav-item${open ? " is-open" : ""}`}
                    onMouseEnter={() => openDesktop(entry.id)}
                    onMouseLeave={scheduleCloseDesktop}
                  >
                    <button
                      type="button"
                      className={`site-nav-trigger${active ? " is-active" : ""}${open ? " is-open" : ""}`}
                      aria-expanded={open}
                      aria-controls={panelId}
                      aria-haspopup="true"
                      onClick={() => setDesktopOpen((current) => (current === entry.id ? null : entry.id))}
                      onKeyDown={(event) => {
                        if (event.key === "ArrowDown" && !open) {
                          event.preventDefault();
                          openDesktop(entry.id);
                        }
                      }}
                    >
                      {entry.label}
                      <Chevron open={open} />
                    </button>
                    <div
                      id={panelId}
                      className={`mega-panel${open ? " is-open" : ""}`}
                      role="region"
                      aria-label={`${entry.label} menu`}
                      aria-hidden={!open}
                      inert={!open ? true : undefined}
                      onMouseEnter={() => openDesktop(entry.id)}
                      onMouseLeave={scheduleCloseDesktop}
                    >
                      <div
                        className={`mega-panel-inner mega-panel-inner--${entry.id}${
                          entry.spotlight ? "" : " mega-panel-inner--no-spotlight"
                        }`}
                      >
                        <div className={`mega-columns mega-columns-${Math.min(entry.columns.length, 5)}`}>
                          {entry.columns.map((column) => (
                            <div key={`${entry.id}-${column.title}`} className="mega-column">
                              {column.href ? (
                                <Link href={column.href} className="mega-column-title" onClick={closeDesktop}>
                                  {column.title}
                                </Link>
                              ) : (
                                <p className="mega-column-title">{column.title}</p>
                              )}
                              <ul className="mega-link-list">
                                {column.items.map((item) => (
                                  <li key={item.href + item.label}>
                                    <Link href={item.href} className="mega-link" onClick={closeDesktop}>
                                      <span>{item.label}</span>
                                      {item.description ? <em>{item.description}</em> : null}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {entry.spotlight ? (
                          <aside className="mega-spotlight">
                            <PictureFill
                              base={entry.spotlight.image}
                              alt={entry.spotlight.imageAlt}
                              sizes="280px"
                              className="mega-spotlight-media"
                              responsive={false}
                              width={560}
                              height={373}
                            />
                            <div className="mega-spotlight-scrim" aria-hidden="true" />
                            <div className="mega-spotlight-body">
                              <div className="mega-spotlight-card">
                                <p className="mega-spotlight-kicker">Next step</p>
                                <Link href={entry.spotlight.href} className="mega-spotlight-title" onClick={closeDesktop}>
                                  {entry.spotlight.title}
                                </Link>
                                <p>{entry.spotlight.body}</p>
                                <Link href={entry.spotlight.href} className="mega-spotlight-cta" onClick={closeDesktop}>
                                  {entry.spotlight.cta}
                                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          </aside>
                        ) : null}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="site-nav-actions">
            <Link href="/contact/" className="btn btn-blue site-nav-cta" onClick={closeDesktop}>
              Discuss a project
            </Link>
            <button
              ref={burgerRef}
              type="button"
              className="site-nav-burger"
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              onClick={() => {
                if (mobileOpen) closeMobile(false);
                else {
                  setDesktopOpen(null);
                  setMobileOpen(true);
                }
              }}
            >
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </Container>
      </div>

      <div
        ref={mobilePanelRef}
        id={mobileMenuId}
        className={`site-mobile${mobileOpen ? " is-open" : ""}`}
        hidden={!mobileOpen}
      >
        <Container className="site-mobile-inner">
          <nav aria-label="Mobile">
            <ul className="site-mobile-list">
              {primaryNav.map((entry) => {
                if (entry.type === "link") {
                  return (
                    <li key={entry.id}>
                      <Link
                        href={entry.href}
                        aria-current={entryActive(pathname, entry) ? "page" : undefined}
                        className="site-mobile-link"
                        onClick={() => closeMobile(false)}
                      >
                        {entry.label}
                      </Link>
                    </li>
                  );
                }

                const expanded = mobileSection === entry.id;
                const sectionId = `${mobileMenuId}-${entry.id}`;
                return (
                  <li key={entry.id} className="site-mobile-group">
                    <div className="site-mobile-group-bar">
                      <Link href={entry.href} className="site-mobile-link" onClick={() => closeMobile(false)}>
                        {entry.label}
                      </Link>
                      <button
                        type="button"
                        className="site-mobile-toggle"
                        aria-expanded={expanded}
                        aria-controls={sectionId}
                        onClick={() => setMobileSection(expanded ? null : entry.id)}
                      >
                        <span className="sr-only">{expanded ? `Collapse ${entry.label}` : `Expand ${entry.label}`}</span>
                        <Chevron open={expanded} />
                      </button>
                    </div>
                    <div id={sectionId} className="site-mobile-panel" hidden={!expanded}>
                      {entry.columns.map((column) => (
                        <div key={`${entry.id}-m-${column.title}`} className="site-mobile-column">
                          <p className="site-mobile-column-title">{column.title}</p>
                          <ul>
                            {column.items.map((item) => (
                              <li key={item.href + item.label}>
                                <Link href={item.href} onClick={() => closeMobile(false)}>
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {entry.spotlight ? (
                        <Link href={entry.spotlight.href} className="site-mobile-spotlight" onClick={() => closeMobile(false)}>
                          {entry.spotlight.cta}
                        </Link>
                      ) : null}
                    </div>
                  </li>
                );
              })}
              <li>
                <Link href="/contact/" className="site-mobile-cta" onClick={() => closeMobile(false)}>
                  Discuss a project
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
