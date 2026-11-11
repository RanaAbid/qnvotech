import Link from "next/link";
import { CookieSettingsButton } from "@/components/ConsentBanner";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Container } from "@/components/ui";
import { services, servicesInOrder } from "@/lib/data";
import { publicEmail, tagline } from "@/lib/site";

const company = [
  { href: "/about/", label: "About" },
  { href: "/industries/", label: "Industries" },
  { href: "/technologies/", label: "Technologies" },
  { href: "/process/", label: "Process" },
  { href: "/case-studies/", label: "Work" },
  { href: "/insights/", label: "Insights" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

const legal = [
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
  { href: "/accessibility/", label: "Accessibility" },
];

function FooterOrbits() {
  const turns = [0, 60, 120, 180, 240, 300];
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <svg className="footer-orbit footer-orbit-a" viewBox="0 0 480 480" fill="none">
        <circle cx="240" cy="240" r="188" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="240" cy="240" r="146" stroke="currentColor" strokeWidth="1" strokeDasharray="3 9" />
        <circle cx="240" cy="240" r="104" stroke="#0070E8" strokeWidth="1.4" />
        <circle cx="240" cy="240" r="62" stroke="#05D597" strokeWidth="1.2" opacity="0.8" />
        {turns.map((angle) => (
          <g key={angle} transform={`rotate(${angle} 240 240)`}>
            <path d="M240 52h34v24h30" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="304" cy="76" r="3.5" fill="currentColor" />
            <circle cx="240" cy="52" r="4" fill="#0070E8" />
          </g>
        ))}
      </svg>
      <svg className="footer-orbit footer-orbit-b" viewBox="0 0 480 480" fill="none">
        <circle cx="240" cy="240" r="200" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="240" cy="240" r="158" stroke="currentColor" strokeWidth="1" />
        <circle cx="240" cy="240" r="112" stroke="#01A8D2" strokeWidth="1.2" strokeDasharray="16 12" />
        <circle cx="240" cy="240" r="68" stroke="currentColor" strokeWidth="1.2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 240 240)`}>
            <path d="M240 40v28h22" stroke="currentColor" strokeWidth="1.2" />
            <rect x="258" y="62" width="8" height="8" rx="1.5" fill="#01A8D2" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function Footer() {
  const serviceLinks = servicesInOrder(services).slice(0, 10);

  return (
    <footer className="site-footer relative mt-auto overflow-hidden bg-navy text-offwhite [overflow:clip]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-blue via-cyan to-teal" aria-hidden="true" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <FooterOrbits />

      <Container className="site-footer-inner relative z-10">
        <div className="site-footer-brand">
          <Link href="/" className="site-footer-logo" aria-label="QNVO Technologies home">
            <OptimizedImage
              base="/logo/qnvo-logo-horizontal-transparent"
              alt="QNVO Technologies"
              width={121}
              height={44}
              sizes="121px"
              className="h-9 w-auto"
            />
          </Link>
          <p className="site-footer-tagline">{tagline}</p>
          <a className="site-footer-email" href={`mailto:${publicEmail}`}>
            {publicEmail}
          </a>
        </div>

        <div className="site-footer-links">
          <nav className="site-footer-col site-footer-col--services" aria-label="Services">
            <h2 className="site-footer-heading">Services</h2>
            <ul className="site-footer-list site-footer-list--services">
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}/`}>{service.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/services/">All services</Link>
              </li>
            </ul>
          </nav>

          <nav className="site-footer-col" aria-label="Company">
            <h2 className="site-footer-heading">Company</h2>
            <ul className="site-footer-list">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer-col" aria-label="Legal">
            <h2 className="site-footer-heading">Legal drafts</h2>
            <ul className="site-footer-list">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <p className="site-footer-note">These pages are drafts and are not indexed.</p>
            <div className="site-footer-cookie">
              <CookieSettingsButton />
            </div>
          </nav>
        </div>
      </Container>

      <div className="site-footer-bar relative z-10">
        <Container className="site-footer-bar-inner">
          <p>
            © {new Date().getFullYear()} QNVO Technologies. No client names, prices or office addresses are published on
            this site.
          </p>
        </Container>
      </div>
    </footer>
  );
}
