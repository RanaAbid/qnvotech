type Tone = "blue" | "teal" | "amber";

/** Full-bleed colorful band with animated shapes. Use at most 1–2 times per page. */
export function ColorBand({
  tone = "blue",
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLElement> & { tone?: Tone }) {
  return (
    <section className={`color-band color-band-${tone} ${className}`} {...rest}>
      <div className="section-backdrop" aria-hidden="true">
        <span className="shape-blob shape-blob-a" />
        <span className="shape-blob shape-blob-b" />
        <span className="shape-ring shape-ring-a" />
        <span className="shape-ring shape-ring-b" />
        <span className="shape-slash" />
        <span className="shape-dot shape-dot-a" />
        <span className="shape-dot shape-dot-b" />
        <span className="shape-dot shape-dot-c" />
      </div>
      <div className="color-band-content">{children}</div>
    </section>
  );
}
