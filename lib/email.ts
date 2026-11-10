import type { ContactInput } from "@/lib/validations";

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function sendEnquiry(input: ContactInput): Promise<"sent" | "unconfigured" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_EMAIL?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!apiKey || !to || !from) return "unconfigured";

  const organization = input.organization ? singleLine(input.organization) : "Not provided";
  const text = [
    "New website enquiry",
    "",
    `Name: ${singleLine(input.name)}`,
    `Email: ${singleLine(input.email)}`,
    `Organization: ${organization}`,
    "",
    "Message:",
    input.message.replace(/\r\n/g, "\n"),
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
        subject: "Website enquiry",
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
