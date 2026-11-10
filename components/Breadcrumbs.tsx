import Link from "next/link";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, onDark = false }: { items: Crumb[]; onDark?: boolean }) {
  const current = onDark ? "font-semibold text-white" : "font-semibold text-navy";
  const link = onDark ? "text-offwhite underline decoration-white/30 underline-offset-4" : "text-navy underline decoration-blue/40 underline-offset-4";
  const slash = onDark ? "text-white/40" : "text-navy/40";
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-base">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className={slash}>
                  /
                </span>
              ) : null}
              {last ? (
                <span aria-current="page" className={current}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className={link}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
