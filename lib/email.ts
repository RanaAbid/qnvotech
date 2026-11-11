import {
  contactCountryLabel,
  contactRegionLabel,
  contactServiceLabel,
} from "@/lib/contact-options";
import type { ContactInput } from "@/lib/validations";

function singleLine(value: string): string {
  return value.replace(/[\r\n\0]+/g, " ").trim();
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

/** Resend "Name <email@domain>" or bare address. */
function looksLikeFromAddress(value: string): boolean {
  const bare = value.match(/<([^>]+)>$/)?.[1]?.trim() ?? value.trim();
  return looksLikeEmail(bare);
}

export async function sendEnquiry(input: ContactInput): Promise<"sent" | "unconfigured" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_EMAIL?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!apiKey || !to || !from) return "unconfigured";
  if (!looksLikeEmail(to) || !looksLikeFromAddress(from)) return "unconfigured";

  const organization = input.organization ? singleLine(input.organization) : "Not provided";
  const region = contactRegionLabel(input.region);
  const country = contactCountryLabel(input.country);
  const service = contactServiceLabel(input.serviceInterest);
  const safeMessage = input.message.replace(/\0/g, "").replace(/\r\n/g, "\n");
  const text = [
    "New website enquiry",
    "",
    `Name: ${singleLine(input.name)}`,
    `Email: ${singleLine(input.email)}`,
    `Organization: ${organization}`,
    `Region: ${region}`,
    `Country: ${country}`,
    `Service interest: ${service}`,
    "",
    "Message:",
    safeMessage,
    "",
    "Reply to the visitor. The automated from-address is not a contact inbox.",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: input.email,
        subject: `Website enquiry — ${service}`,
        text,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
