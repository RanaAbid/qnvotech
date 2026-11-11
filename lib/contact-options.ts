import { serviceGroups, services, servicesForGroup, servicesInOrder } from "@/lib/data";
import {
  allWorldCountries,
  countriesForRegion,
  isCountryInRegion,
  worldRegions,
  type WorldRegion,
} from "@/lib/world-geo";

export {
  countriesForRegion,
  isCountryInRegion,
  worldRegions as contactRegions,
  type WorldRegion as ContactRegion,
};

export type ContactServiceOptionGroup = { group: string; options: { value: string; label: string }[] };

export const contactServiceExtras = [
  { value: "general", label: "General enquiry" },
  { value: "multiple", label: "Not sure / more than one area" },
] as const;

export function contactServiceOptions(): ContactServiceOptionGroup[] {
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
  return worldRegions.find((item) => item.value === value)?.label ?? value;
}

export function contactCountryLabel(value: string): string {
  const match = allWorldCountries().find((item) => item.value === value);
  return match?.label ?? value;
}

export const contactRegionValues = worldRegions.map((item) => item.value) as [WorldRegion, ...WorldRegion[]];

export function contactCountryValues(): string[] {
  return allWorldCountries().map((item) => item.value);
}

export function contactServiceValues(): string[] {
  return [
    ...contactServiceExtras.map((item) => item.value),
    ...servicesInOrder(services).map((service) => service.slug),
  ];
}
