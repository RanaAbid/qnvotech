import Link from "next/link";

export type Crumb = { name: string; path: string };

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="none">
      <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" width="15" height="15" aria-hidden="true" fill="none">
      <path
        d="M3.5 8.8 10 3.5l6.5 5.3V16a1 1 0 0 1-1 1h-3.4v-4.2H7.9V17H4.5a1 1 0 0 1-1-1V8.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Breadcrumbs({ items, onDark = false }: { items: Crumb[]; onDark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={onDark ? "crumb-trail crumb-trail-dark" : "crumb-trail"}>
      <ol className="crumb-list">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          const isHome = item.path === "/";
          return (
            <li key={`${item.path}-${index}`} className="crumb-item">
              {index > 0 ? (
                <span className="crumb-sep" aria-hidden="true">
                  <Chevron />
                </span>
              ) : null}
              {last ? (
                <span aria-current="page" className="crumb-current">
                  {isHome ? <HomeIcon /> : null}
                  <span>{item.name}</span>
                </span>
              ) : (
                <Link href={item.path} className="crumb-link">
                  {isHome ? <HomeIcon /> : null}
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
