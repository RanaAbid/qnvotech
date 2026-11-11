import { serviceGroups, services, servicesForGroup, servicesInOrder } from "@/lib/data";

/** Markets this site is written for, plus honest catch-alls. */
export const contactRegions = [
  { value: "united-states", label: "United States" },
  { value: "united-kingdom", label: "United Kingdom" },
  { value: "middle-east", label: "Middle East" },
  { value: "pakistan", label: "Pakistan" },
  { value: "elsewhere", label: "Elsewhere" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
] as const;

export type ContactRegion = (typeof contactRegions)[number]["value"];

/**
 * Curated country list for the contact form (native select — no heavy picker dependency).
 * Kept focused on markets this site writes for, plus common neighbours and “Other”.
 */
export const contactCountries: { group: string; options: { value: string; label: string }[] }[] = [
  {
    group: "United States and Canada",
    options: [
      { value: "united-states", label: "United States" },
      { value: "canada", label: "Canada" },
    ],
  },
  {
    group: "United Kingdom and Ireland",
    options: [
      { value: "united-kingdom", label: "United Kingdom" },
      { value: "ireland", label: "Ireland" },
    ],
  },
  {
    group: "Middle East",
    options: [
      { value: "united-arab-emirates", label: "United Arab Emirates" },
      { value: "saudi-arabia", label: "Saudi Arabia" },
      { value: "qatar", label: "Qatar" },
      { value: "bahrain", label: "Bahrain" },
      { value: "kuwait", label: "Kuwait" },
      { value: "oman", label: "Oman" },
      { value: "jordan", label: "Jordan" },
      { value: "egypt", label: "Egypt" },
    ],
  },
  {
    group: "South Asia",
    options: [
      { value: "pakistan", label: "Pakistan" },
      { value: "india", label: "India" },
      { value: "bangladesh", label: "Bangladesh" },
      { value: "sri-lanka", label: "Sri Lanka" },
    ],
  },
  {
    group: "Europe",
    options: [
      { value: "germany", label: "Germany" },
      { value: "france", label: "France" },
      { value: "netherlands", label: "Netherlands" },
      { value: "spain", label: "Spain" },
      { value: "italy", label: "Italy" },
      { value: "sweden", label: "Sweden" },
      { value: "switzerland", label: "Switzerland" },
    ],
  },
  {
    group: "Asia-Pacific",
    options: [
      { value: "singapore", label: "Singapore" },
      { value: "australia", label: "Australia" },
      { value: "new-zealand", label: "New Zealand" },
      { value: "malaysia", label: "Malaysia" },
      { value: "japan", label: "Japan" },
    ],
  },
  {
    group: "Other",
    options: [
      { value: "other", label: "Other / not listed" },
      { value: "prefer-not-to-say", label: "Prefer not to say" },
    ],
  },
];

export const contactServiceExtras = [
  { value: "general", label: "General enquiry" },
  { value: "multiple", label: "Not sure / more than one area" },
] as const;

export function contactServiceOptions(): { group: string; options: { value: string; label: string }[] }[] {
  const groups = serviceGroups.map((group) => ({
    group: group.title,
    options: servicesForGroup(group, services).map((service) => ({
      value: service.slug,
      label: service.title,
    })),
  }));
  return [
    { group: "General", options: contactServiceExtras.map((item) => ({ value: item.value, label: item.label })) },
    ...groups,
  ];
}

export function contactServiceLabel(value: string): string {
  for (const item of contactServiceExtras) {
    if (item.value === value) return item.label;
  }
  const match = servicesInOrder(services).find((service) => service.slug === value);
  return match?.title ?? value;
}

export function contactRegionLabel(value: string): string {
  return contactRegions.find((item) => item.value === value)?.label ?? value;
}

export function contactCountryLabel(value: string): string {
  for (const group of contactCountries) {
    const match = group.options.find((item) => item.value === value);
    if (match) return match.label;
  }
  return value;
}

export const contactRegionValues = contactRegions.map((item) => item.value) as [ContactRegion, ...ContactRegion[]];

export function contactCountryValues(): string[] {
  return contactCountries.flatMap((group) => group.options.map((item) => item.value));
}

export function contactServiceValues(): string[] {
  return [
    ...contactServiceExtras.map((item) => item.value),
    ...servicesInOrder(services).map((service) => service.slug),
  ];
}
