import { ContactForm } from "@/components/ContactForm";
import { InnerPage } from "@/components/InnerPage";
import { Container } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { publicEmail } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact QNVO Technologies",
  description:
    "Contact QNVO Technologies about a software, AI, ERP or website project. Email info@qnvotech.com or use the form. A message is not a contract.",
  path: "/contact/",
});

const notes = [
  { title: "What to send", body: "The system, the people who use it, and the constraint that matters most." },
  { title: "What not to send", body: "Passwords, payment cards, or other secrets. Email those to nobody." },
  { title: "What a message is", body: "A request to talk. It is not a quote, a contract, or a delivery date." },
];

function safeSiteKey(): string {
  const value = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";
  return /^[A-Za-z0-9_-]{10,200}$/.test(value) ? value : "";
}

export default function ContactPage() {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact/" },
      ]}
      eyebrow="Contact"
      title="Contact QNVO Technologies"
      lede="Send a project question to the public inbox. A form submission asks for a conversation. It does not create a contract, a quote or a delivery date."
    >
      <section className="bg-[#e8eef5] py-16 md:py-20">
        <Container className="grid items-start gap-6 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <aside className="relative overflow-hidden rounded-[2rem] bg-navy p-7 text-white shadow-[0_24px_50px_rgba(2,40,95,0.18)] md:p-8">
            <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
            <span className="cta-orb cta-orb-a" aria-hidden="true" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">Public inbox</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">Write to us directly</h2>
              <a className="mt-4 inline-flex font-semibold text-white underline decoration-white/40 underline-offset-4" href={`mailto:${publicEmail}`}>
                {publicEmail}
              </a>
              <ul className="mt-8 grid gap-4">
                {notes.map((note, index) => (
                  <li key={note.title} className="rounded-2xl bg-white/10 p-4">
                    <p className="font-display text-sm font-bold text-amber">0{index + 1}</p>
                    <p className="mt-1 font-display text-lg font-semibold text-white">{note.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-offwhite">{note.body}</p>
                  </li>
                ))}
              </ul>
              <noscript>
                <p className="mt-6 font-semibold text-white">The form needs JavaScript. Email info@qnvotech.com and your question still has a path.</p>
              </noscript>
            </div>
          </aside>
          <ContactForm siteKey={safeSiteKey()} />
        </Container>
      </section>
    </InnerPage>
  );
}
