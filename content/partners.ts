/**
 * Partners page content — collaboration models only.
 * No inventing vendor logos, certifications or named partner programs.
 */

export type PartnerModel = {
  title: string;
  body: string;
};

export type PartnerStep = {
  title: string;
  body: string;
};

export const partnerIntro = {
  title: "How teams work with QNVO Technologies",
  lede:
    "This page describes engagement patterns — not a logo wall. QNVO Technologies does not publish invented vendor partnerships, reseller badges or unnamed client brands here.",
};

export const partnerModels: PartnerModel[] = [
  {
    title: "Project engagement",
    body: "A defined piece of work — website, product feature, integration, migration or hardening — named in a written scope with deliverables and access.",
  },
  {
    title: "Product collaboration",
    body: "Work around a QNVO product such as My POS, or a product you operate. Access, roles and rollout belong in the agreement.",
  },
  {
    title: "Agency or internal-team extension",
    body: "When your team needs extra capacity on a named stack, we discuss hours, tools and communication in writing. We do not invent white-label claims on this page.",
  },
  {
    title: "Technology choices in scope",
    body: "Stacks follow the written scope. See the Technologies page for groups we discuss — it is not a partner badge wall.",
  },
];

export const partnerSteps: PartnerStep[] = [
  {
    title: "Short conversation",
    body: "You describe the work, the systems and the constraint. We say whether it fits a service on this site.",
  },
  {
    title: "Written terms",
    body: "Fees, access, confidentiality and deliverables belong in an agreement. The website does not create one.",
  },
  {
    title: "Named start",
    body: "Work starts when the agreement says so — with the checkpoints and handover items that agreement lists.",
  },
];

export const partnerNonClaims = [
  "No invented Microsoft, cloud or marketplace partner logos on this page.",
  "No reseller price list or margin claims.",
  "No promise that QNVO Technologies will appear under another company’s brand unless a written agreement says so.",
  "Named vendor relationships are published only when they are real and permissioned.",
];
