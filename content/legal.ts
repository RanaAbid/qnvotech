export type LegalSection = {
  heading: string;
  paragraphs: string[];
  placeholders?: string[];
};

export type LegalDocument = {
  title: string;
  status: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  status: "Draft — not for publication",
  sections: [
    {
      heading: "Data collected",
      paragraphs: [
        "This website may collect information that a visitor chooses to send through the contact form, such as a name, email address, organization, region, country, service interest, and the text of an enquiry.",
        "Technical data may also be processed when a page is requested, for example to keep the site running and to limit abuse. This draft does not claim a full inventory of every field or log.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] List every category of personal data actually collected, including form fields, server logs, and any analytics identifiers.",
        "[OWNER TO PROVIDE — do not publish with this text] State how long each category is retained. Do not invent retention periods.",
      ],
    },
    {
      heading: "Use",
      paragraphs: [
        "Contact details submitted through the form are intended to answer the enquiry and, where appropriate, continue a conversation about a possible project.",
        "Technical data may be used to operate, secure, and troubleshoot the website.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Confirm the lawful bases used where GDPR, UK GDPR, or other privacy law applies. Do not invent a lawful-basis assessment.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "The site can load analytics only after a visitor allows analytics cookies. If analytics is declined, or if no measurement ID is configured, the analytics script is not added.",
        "Essential cookies or similar storage may be needed for security or preference settings. This draft does not claim a finished cookie inventory.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Publish the real cookie list, purposes, durations, and how a visitor can change or withdraw consent.",
      ],
    },
    {
      heading: "Third parties",
      paragraphs: [
        "Depending on configuration, hosting, email delivery, abuse checks, content, error monitoring, or analytics providers may process limited data needed for those tasks.",
        "A planned provider list is not proof that every service is active on the live site.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Name only the providers that are enabled in production, what they receive, and where processing occurs. Do not invent transfer mechanisms or DPA status.",
      ],
    },
    {
      heading: "Rights",
      paragraphs: [
        "Depending on where you live and which law applies, you may be able to ask for access, correction, deletion, restriction, objection, or withdrawal of consent for personal information held about you.",
        "Identity may need to be checked before a request is answered. This draft does not invent a complaints authority or response deadline.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Confirm the legal entity that decides how personal data is used, any data-protection contact role, and the complaints route that applies.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "For privacy questions about this website, email info@qnvotech.com.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Add a postal address or registered office only if it is confirmed for public use. Do not invent an address or DPO mailbox.",
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  title: "Terms of Use",
  status: "Draft — not for publication",
  sections: [
    {
      heading: "Services",
      paragraphs: [
        "This website describes QNVO Technologies services at a general level, including software, AI, cloud, security, web, ecommerce, CMS platforms, technical SEO, and related digital services.",
        "Website content is informational. A page, a form submission, or a conversation started from this site is not a signed service agreement, a quote, or a warranty of deliverables.",
        "Do not interfere with website operations, attempt unauthorized access, submit malware, or use the contact form for spam.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Confirm any service-specific restrictions, export rules, or prohibited uses that must appear in the public terms.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The QNVO Technologies name, logo, and original website copy may be protected by copyright, trademark, or other rights.",
        "You may view and share links to public pages for ordinary personal or business reference. Do not copy the site design, logo, or text for commercial reuse without permission.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Add trademark registration numbers or ownership claims only if they are verified. Do not invent registrations or exclusive rights.",
      ],
    },
    {
      heading: "Liability",
      paragraphs: [
        "The website is provided for general information. Service descriptions can change and may not cover every condition of a future project.",
        "This draft does not set warranty language, damages caps, or indemnity terms for client work. Those belong in a separate written agreement when an engagement starts.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Provide reviewed disclaimer and limitation-of-liability wording for website use after legal review. Do not invent caps, exclusions, or insurance claims.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "Questions about this website can be sent to info@qnvotech.com.",
        "This draft does not name a governing law, court, or dispute forum.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Name the governing law and forum only after the contracting entity and operating jurisdictions are confirmed. Do not invent a court or legal address.",
      ],
    },
  ],
};

export const accessibilityStatement: LegalDocument = {
  title: "Accessibility Statement",
  status: "Draft — not for publication",
  sections: [
    {
      heading: "WCAG 2.2 AA commitment",
      paragraphs: [
        "QNVO Technologies aims to make this website usable for as many people as possible.",
        "The build target is WCAG 2.2 Level AA, with WCAG 2.1 Level AA as the baseline. The site uses semantic headings, keyboard-accessible navigation, visible focus, readable contrast, descriptive links, form labels, and a reduced-motion path for decorative animation.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Do not publish a conformance claim until a dated review of the live site supports it. Record the review method and environment when ready.",
      ],
    },
    {
      heading: "Known limitations",
      paragraphs: [
        "This statement does not claim that an independent WCAG audit has been completed.",
        "Third-party features, when enabled, follow their own accessibility practices and may need separate review.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] List real barriers found on the live site, workarounds if any, and planned fix dates. Do not invent audit findings or deadlines.",
      ],
    },
    {
      heading: "Contact for issues",
      paragraphs: [
        "If a page is difficult to use, email info@qnvotech.com. Name the page URL and describe the barrier. Please do not include sensitive personal information in the report.",
      ],
      placeholders: [
        "[OWNER TO PROVIDE — do not publish with this text] Add an alternative contact channel or response-time commitment only if it is approved for public use.",
      ],
    },
  ],
};
