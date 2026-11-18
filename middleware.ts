import { NextRequest, NextResponse } from "next/server";

function contentSecurityPolicy(nonce: string, isLocal: boolean, mode: "enforce" | "report"): string {
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    "https://challenges.cloudflare.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
  ];
  if (process.env.NODE_ENV !== "production") scriptSrc.push("'unsafe-eval'");

  // Enforce keeps style unsafe-inline (SweetAlert2 + React style attrs). Report-Only
  // drops it so violations can be collected before a stricter enforce pass.
  const styleSrc = mode === "enforce" ? "style-src 'self' 'unsafe-inline'" : "style-src 'self'";

  const directives = [
    "default-src 'self'",
    `script-src ${scriptSrc.join(" ")}`,
    "script-src-attr 'none'",
    styleSrc,
    "img-src 'self' blob: data: https://www.google-analytics.com",
    "font-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "frame-src https://challenges.cloudflare.com",
    "connect-src 'self' https://challenges.cloudflare.com https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
    "manifest-src 'self'",
    "worker-src 'self'",
    "media-src 'self'",
  ];
  if (!isLocal) directives.push("upgrade-insecure-requests");
  return directives.join("; ");
}

export function middleware(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID());
  const host = request.nextUrl.hostname;
  const isLocal = host === "localhost" || host === "127.0.0.1";
  const policy = contentSecurityPolicy(nonce, isLocal, "enforce");
  const reportOnly = contentSecurityPolicy(nonce, isLocal, "report");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", policy);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", policy);
  // Stricter policy in report-only: collect style/script violations without breaking pages.
  response.headers.set("Content-Security-Policy-Report-Only", reportOnly);
  return response;
}

export const config = {
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:avif|webp|png|jpe?g|gif|svg|ico|txt|xml|webmanifest|woff2?|mp4|webm)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
