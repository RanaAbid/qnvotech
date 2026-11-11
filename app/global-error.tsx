"use client";

import { useEffect } from "react";

const email = "info@qnvotech.com";

export default function GlobalError({
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
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#02285f", color: "#f4f7fa" }}>
        <main style={{ maxWidth: "40rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
          <p style={{ margin: 0, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: "0.8rem", color: "#f5b942" }}>
            Critical error
          </p>
          <h1 style={{ margin: "0.75rem 0 0", fontSize: "2rem", lineHeight: 1.2 }}>QNVO Technologies could not render</h1>
          <p style={{ margin: "1rem 0 0", lineHeight: 1.6, color: "rgba(244,247,250,0.9)" }}>
            A root-level error interrupted the app shell. Try again, or email {email}.
          </p>
          {error.digest ? (
            <p style={{ margin: "0.75rem 0 0", fontSize: "0.875rem", color: "rgba(244,247,250,0.7)" }}>Reference: {error.digest}</p>
          ) : null}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.75rem" }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                border: 0,
                borderRadius: "999px",
                background: "#ffffff",
                color: "#02285f",
                fontWeight: 700,
                padding: "0.75rem 1.15rem",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {/* global-error replaces the root layout; plain anchor is the safe recovery path */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              style={{
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#ffffff",
                fontWeight: 700,
                padding: "0.75rem 1.15rem",
                textDecoration: "none",
              }}
            >
              Back to home
            </a>
            <a
              href={`mailto:${email}`}
              style={{
                borderRadius: "999px",
                background: "#0070e8",
                color: "#ffffff",
                fontWeight: 700,
                padding: "0.75rem 1.15rem",
                textDecoration: "none",
              }}
            >
              Email QNVO Technologies
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
