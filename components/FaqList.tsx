import type { Faq } from "@/lib/data";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="soft-card group px-5 py-2">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-md py-3 font-display text-lg font-semibold text-navy [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span aria-hidden="true" className="text-blue group-open:hidden">
              +
            </span>
            <span aria-hidden="true" className="hidden text-blue group-open:inline">
              −
            </span>
          </summary>
          <p className="max-w-3xl pb-4 leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
