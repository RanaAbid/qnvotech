import { z } from "zod";
import {
  contactCountryValues,
  contactRegionValues,
  contactServiceValues,
  isCountryInRegion,
} from "@/lib/contact-options";

const regions = new Set<string>(contactRegionValues);
const countries = new Set(contactCountryValues());
const serviceInterests = new Set(contactServiceValues());

function choice(set: Set<string>, emptyMessage: string, invalidMessage: string) {
  return z
    .string()
    .trim()
    .min(1, emptyMessage)
    .refine((value) => set.has(value), invalidMessage);
}

const noNull = (value: string) => value.replace(/\0/g, "");

export const contactSchema = z
  .object({
    name: z
      .string()
      .transform(noNull)
      .pipe(
        z
          .string()
          .trim()
          .min(2, "Enter your name (at least 2 characters).")
          .max(80, "Name must be 80 characters or fewer.")
          .regex(/^[\p{L}\p{M}\s.'-]+$/u, "Use letters, spaces, apostrophes or hyphens in the name."),
      ),
    email: z
      .string()
      .transform(noNull)
      .pipe(
        z
          .string()
          .trim()
          .email("Enter a valid email address.")
          .max(254, "Email must be 254 characters or fewer."),
      ),
    organization: z
      .string()
      .transform(noNull)
      .pipe(z.string().trim().max(120, "Organization must be 120 characters or fewer."))
      .optional()
      .default(""),
    region: choice(regions, "Select a region.", "Select a valid region."),
    country: choice(countries, "Select a country.", "Select a valid country."),
    serviceInterest: choice(serviceInterests, "Select a service interest.", "Select a valid service interest."),
    message: z
      .string()
      .transform(noNull)
      .pipe(
        z
          .string()
          .trim()
          .min(20, "Message should be at least 20 characters.")
          .max(4000, "Message must be 4000 characters or fewer."),
      ),
    companyWebsite: z.string().optional().default(""),
    turnstileToken: z.string().max(2048).optional().default(""),
  })
  .superRefine((data, ctx) => {
    if (data.region && data.country && !isCountryInRegion(data.region, data.country)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["country"],
        message: "Select a country that belongs to the chosen region.",
      });
    }
  });

export type ContactInput = z.infer<typeof contactSchema>;

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !errors[key]) errors[key] = issue.message;
  }
  return errors;
}
