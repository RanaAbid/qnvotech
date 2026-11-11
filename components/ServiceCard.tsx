import Link from "next/link";
import type { Service } from "@/lib/data";

export function ServiceCard({ service, heading = "h3", featured = false }: { service: Service; heading?: "h2" | "h3"; featured?: boolean }) {
  const Title = heading;
  return (
    <Link
      href={`/services/${service.slug}/`}
      className={
        featured
          ? "service-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-[0_24px_50px_rgba(2,40,95,0.18)]"
          : "service-card group flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_14px_36px_rgba(2,40,95,0.08)]"
      }
    >
      {featured ? <span className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" /> : null}
      <span className={featured ? "icon-tile relative bg-white" : "icon-tile"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={service.icon} alt="" width={32} height={32} decoding="async" loading="lazy" />
      </span>
      <Title className={`relative mt-5 font-display font-semibold ${featured ? "text-3xl text-white" : "text-xl text-navy"}`}>{service.title}</Title>
      <p className={`relative mt-3 flex-1 leading-relaxed ${featured ? "text-lg text-offwhite" : "text-base"}`}>{service.card}</p>
      <span className={`card-arrow relative mt-5 font-semibold ${featured ? "text-white" : "text-blue"}`}>Read more</span>
    </Link>
  );
}
