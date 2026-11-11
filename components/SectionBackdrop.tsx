type Tone = "navy" | "deep";

/** Full-bleed dark band with animated shapes. Prefer home only (up to 2). */
export function ColorBand({
  tone = "navy",
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
