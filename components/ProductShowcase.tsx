"use client";

import Link from "next/link";
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

export function ProductCard({ product }: { product: Product }) {
  return (
    <Reveal variant="scale">
      <article className="product-card">
        <div className="product-card-media">
          <PictureFill
            base={product.heroImage}
            alt={product.heroAlt}
            sizes="(max-width: 768px) 100vw, 40vw"
            width={1200}
            height={675}
          />
        </div>
        <div className="product-card-body">
          <p className="eyebrow">Product</p>
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">{product.name}</h2>
          <p className="mt-3 text-lg leading-relaxed text-slate">{product.tagline}</p>
          <p className="mt-4 leading-relaxed text-slate">{product.description}</p>
          <div className="product-card-actions">
            <Link href={`/products/${product.slug}/`} className="btn btn-blue">
              View product details
            </Link>
            <a href={product.appUrl} className="btn btn-ghost" rel="noopener noreferrer" target="_blank">
              Open live app
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
