"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function sendPageView(url: string, gaId: string, standaloneGa: boolean) {
  // GTM listens for this custom event (and/or History Change triggers).
  window.dataLayer?.push({
    event: "qnvo_page_view",
    page_path: url,
  });

  // Direct GA4 page_view only in standalone mode (no GTM) to avoid double hits.
  if (standaloneGa && gaId && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
      send_to: gaId,
    });
  }
}

function AnalyticsRouteListener({ gaId, standaloneGa }: { gaId: string; standaloneGa: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    sendPageView(url, gaId, standaloneGa);
  }, [pathname, searchParams, gaId, standaloneGa]);

  return null;
}

/** Fires a page_view on App Router client navigations (GTM dataLayer + optional standalone GA4). */
export function AnalyticsPageViews({
  gaId = "",
  standaloneGa = false,
}: {
  gaId?: string;
  standaloneGa?: boolean;
}) {
  return (
    <Suspense fallback={null}>
      <AnalyticsRouteListener gaId={gaId} standaloneGa={standaloneGa} />
    </Suspense>
  );
}
