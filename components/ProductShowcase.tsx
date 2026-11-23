"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PictureFill } from "@/components/OptimizedImage";
import { Reveal } from "@/components/Motion";
import type { Product } from "@/content/products";

export function ProductHeroMedia({ product }: { product: Product }) {
  return (
    <div className="product-hero-media">
      <PictureFill
        base={product.heroImage}
        alt={product.heroAlt}
        sizes="(max-width: 900px) 100vw, 56vw"
        className="product-hero-picture"
        width={1600}
        height={900}
        priority
      />
      <div className="product-hero-glow" aria-hidden="true" />
    </div>
  );
}

export function ProductDemoVideo({ product }: { product: Product }) {
  if (!product.demoVideo) return null;

  const title = product.demoVideoTitle ?? `${product.shortName} product demo`;

  return (
    <div className="product-demo">
      <div className="product-demo-frame">
        <video
          className="product-demo-video"
          controls
          playsInline
          preload="none"
          poster={`${product.heroImage}.jpg`}
          aria-label={title}
        >
          <source src={product.demoVideo} type="video/mp4" />
        </video>
      </div>
      <p className="product-demo-caption">{title}</p>
    </div>
  );
}

export function ProductCapabilityGrid({ product }: { product: Product }) {
  return (
    <div className="product-capability-grid stagger-host">
      {product.capabilities.map((item, index) => (
        <article key={item.title} className="product-capability-card">
          <p className="product-capability-index">{String(index + 1).padStart(2, "0")}</p>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function ProductGallery({ product }: { product: Product }) {
  return (
    <div className="product-gallery stagger-host">
      {product.gallery.map((shot, index) => (
        <figure key={shot.base} className={`product-gallery-item product-gallery-item-${index + 1}`}>
          <PictureFill
            base={shot.base}
            alt={shot.alt}
            sizes="(max-width: 768px) 100vw, 33vw"
            width={1200}
            height={675}
          />
          <figcaption>{shot.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ProductModuleBoard({ product }: { product: Product }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = product.modules.length;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [visible, paused, total]);

  const activeLabel = product.modules[active] ?? product.modules[0] ?? "";

  return (
    <div
      ref={rootRef}
      className={`product-module-deck${visible ? " is-visible" : ""}`}
      aria-label={`${product.shortName} application modules`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="product-module-deck-fx" aria-hidden="true">
        <span className="product-module-beam" />
        <span className="product-module-gridline" />
      </div>

      <div className="product-module-focus">
        <span className="product-module-focus-watermark" aria-hidden="true" key={`wm-${active}`}>
          {String(active + 1).padStart(2, "0")}
        </span>
        <div className="product-module-focus-meta">
          <span className="product-module-focus-status">{product.statusLabel}</span>
          <span className="product-module-focus-count">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <p className="product-module-focus-kicker">{product.shortName} module</p>
        <p className="product-module-focus-title" key={activeLabel}>
          {activeLabel}
        </p>
        <div className="product-module-focus-track" aria-hidden="true">
          <span
            className="product-module-focus-progress"
            style={{ width: `${((active + 1) / Math.max(total, 1)) * 100}%` }}
          />
        </div>
      </div>

      <ul className="product-module-mosaic">
        {product.modules.map((module, index) => {
          const isActive = index === active;
          return (
            <li key={module} className="product-module-mosaic-item" style={{ ["--i" as string]: index }}>
              <button
                type="button"
                className={`product-module-tile${isActive ? " is-active" : ""}`}
                aria-pressed={isActive}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <span className="product-module-tile-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="product-module-tile-label">{module}</span>
                <span className="product-module-tile-pulse" aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Reveal variant="scale">
      <article className="product-card">
        <div className="product-card-media">
          <PictureFill
            base={product.heroImage}
            alt={product.heroAlt}
            sizes="(max-width: 900px) 100vw, 42vw"
            width={1200}
            height={750}
          />
        </div>
        <div className="product-card-body">
          <p className="eyebrow">Product</p>
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">{product.name}</h2>
          <p className="mt-3 text-lg leading-relaxed text-slate">{product.tagline}</p>
          <p className="mt-4 leading-relaxed text-slate">{product.description}</p>
          <div className="product-card-actions mt-6">
            <Link href={`/products/${product.slug}/`} className="btn btn-blue">
              View product details
            </Link>
            {product.appUrl ? (
              <a href={product.appUrl} className="btn btn-outline" rel="noopener noreferrer" target="_blank">
                {product.appCta}
              </a>
            ) : (
              <Link href="/contact/" className="btn btn-outline">
                {product.appCta}
              </Link>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
