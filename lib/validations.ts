import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name (at least 2 characters).")
    .max(80, "Name must be 80 characters or fewer.")
    .regex(/^[\p{L}\p{M}\s.'-]+$/u, "Use letters, spaces, apostrophes or hyphens in the name."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email must be 254 characters or fewer."),
  organization: z.string().trim().max(120, "Organization must be 120 characters or fewer.").optional().default(""),
  message: z
    .string()
    .trim()
    .min(20, "Message should be at least 20 characters.")
    .max(4000, "Message must be 4000 characters or fewer."),
  companyWebsite: z.string().optional().default(""),
  turnstileToken: z.string().max(2048).optional().default(""),
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
