type Tone = "cool" | "mint" | "sunset" | "navy" | "soft";

export function SectionBackdrop({ tone = "cool", className = "" }: { tone?: Tone; className?: string }) {
  return (
    <div className={`section-backdrop section-backdrop-${tone} ${className}`} aria-hidden="true">
      <span className="shape-blob shape-blob-a" />
      <span className="shape-blob shape-blob-b" />
      <span className="shape-ring shape-ring-a" />
      <span className="shape-ring shape-ring-b" />
      <span className="shape-slash" />
      <span className="shape-dot shape-dot-a" />
      <span className="shape-dot shape-dot-b" />
      <span className="shape-dot shape-dot-c" />
    </div>
  );
}
