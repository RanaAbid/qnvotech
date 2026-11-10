export type LegalSection = {
  heading: string;
  paragraphs: string[];
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
      heading: "Information you choose to share",
      paragraphs: [
        "When you contact us, you may provide your name, email address, organization (if requested), and the details of your enquiry. Do not send sensitive personal information, payment-card details or confidential credentials through our general contact form.",
      ],
    },
    {
      heading: "Information collected when you visit",
      paragraphs: [
        "Website operation may involve technical information such as device and browser data, request timestamps, IP addresses and diagnostic information used to maintain performance and security. Before publication, the operator needs to verify which categories are actually collected, how long logs are retained and whether any infrastructure, security, uptime or error-monitoring providers process them.",
      ],
    },
    {
      heading: "Why information may be used",
      paragraphs: [
        "Information submitted through the contact form is intended to respond to enquiries and, where appropriate, discuss requested services. Website operational information may be needed to keep the site functioning securely and to troubleshoot errors. Before publication, document the actual lawful bases used where GDPR or UK GDPR applies. Do not treat this draft as a statement that consent or legitimate interests have been assessed.",
      ],
    },
    {
      heading: "Analytics and cookies",
      paragraphs: [
        "The site can load Google Analytics 4 only after a visitor allows analytics. Rejecting analytics, or never being shown a measurement ID, means the analytics script is not added. Before publication, audit cookies, scripts, consent categories, withdrawal, the regions covered and the real analytics configuration. Do not treat this draft as confirmation that a production analytics property is active.",
      ],
    },
    {
      heading: "Service providers and international data handling",
      paragraphs: [
        "Depending on final configuration, the site may use Vercel for hosting, Resend for transactional email, Cloudflare Turnstile for abuse checks, Sanity for content, Sentry for error monitoring, and Google Analytics after consent. This is a planned technology list, not proof that every provider is active. Before publication, list only enabled providers and their roles.",
      ],
    },
    {
      heading: "Retention and security",
      paragraphs: [
        "Access to enquiry information should stay limited to people who need it to respond, and ordinary technical measures should be used. No internet service can guarantee absolute security. This draft does not state a retention period. A period should be added only after it is approved.",
      ],
    },
    {
      heading: "Your choices and privacy requests",
      paragraphs: [
        "Depending on your location and applicable law, you may be able to request access, correction or deletion of personal information, object to certain processing, or withdraw consent. Send privacy requests to info@qnvotech.com. Identity may need to be checked before a response. The legal entity, jurisdiction and complaints route are not stated here because they have not been confirmed for publication.",
      ],
    },
    {
      heading: "External links and updates",
      paragraphs: [
        "The site may link to other websites with their own privacy practices. This notice can change when the site changes. A reviewed date should be added when an approved version replaces this draft.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["For privacy-related requests, email info@qnvotech.com."],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  title: "Terms of Use",
  status: "Draft — not for publication",
  sections: [
    {
      heading: "Website purpose",
      paragraphs: [
        "The website provides general descriptions of QNVO Technologies services, including enterprise software, AI agents and automation, ERP, ecommerce, web development, technical SEO, and website security and optimization. Website content is informational. It is not a signed service agreement, a binding offer, or a warranty of deliverables.",
      ],
    },
    {
      heading: "Responsible use",
      paragraphs: [
        "Do not interfere with website operations, attempt unauthorized access, submit malware, use the contact form for spam, or misuse site content in a way that breaks applicable law.",
      ],
    },
    {
      heading: "Enquiries and engagements",
      paragraphs: [
        "Submitting the contact form is a request for a conversation. It is not a commitment by either party to enter a commercial arrangement. Project scope, fees, timelines, support, intellectual property and other obligations belong in a separately executed agreement.",
      ],
    },
    {
      heading: "Accuracy and changes",
      paragraphs: [
        "Service descriptions are meant to be useful and accurate, and they can change. They may not cover every condition of a future project. Contact QNVO Technologies to confirm current availability before relying on a general description.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The QNVO Technologies logo, original website copy and other brand materials may be protected by copyright, trademark or other rights. This draft does not claim a registration number, a jurisdiction or exclusive rights that have not been verified.",
      ],
    },
    {
      heading: "Third-party websites",
      paragraphs: [
        "Links to other websites are provided where they are relevant. Those sites have their own terms. A link is not an endorsement or a partnership.",
      ],
    },
    {
      heading: "Liability and jurisdiction",
      paragraphs: [
        "Warranty disclaimers, limits of liability, governing law and dispute terms are not written here. They need a confirmed contracting entity and operating jurisdictions. This draft does not name a court or a legal address.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["Questions about this website can be sent to info@qnvotech.com."],
    },
  ],
};

export const accessibilityStatement: LegalDocument = {
  title: "Accessibility Statement",
  status: "Draft — not for publication",
  sections: [
    {
      heading: "Our accessibility goals",
      paragraphs: [
        "The website is being built with WCAG 2.2 Level AA as the target and WCAG 2.1 Level AA as the baseline. The build uses semantic headings, keyboard-accessible navigation, visible focus, readable contrast, descriptive links, form labels and a reduced-motion path for decorative motion.",
      ],
    },
    {
      heading: "Current verification status",
      paragraphs: [
        "This statement does not claim that an independent WCAG audit has been completed. Before any conformance claim, the deployed site needs keyboard checks, screen-reader checks of the contact form, and an automated scan, with the date and environment recorded.",
      ],
    },
    {
      heading: "Feedback and assistance",
      paragraphs: [
        "If a page is difficult to use, email info@qnvotech.com and name the page and the barrier. That report can be used to investigate. Please do not include sensitive personal information in the report.",
      ],
    },
    {
      heading: "Known limitations and improvements",
      paragraphs: [
        "Unresolved problems, workarounds and dates should be listed from the deployed site. This draft does not invent audit findings or a repair deadline.",
      ],
    },
    {
      heading: "External services",
      paragraphs: [
        "Some third-party features follow their own accessibility practices. Integrations should be reviewed before they are treated as part of a conformance claim.",
      ],
    },
  ],
};
