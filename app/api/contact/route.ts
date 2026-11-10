import { NextResponse } from "next/server";
import { sendEnquiry } from "@/lib/email";
import { allowContact, clientIp } from "@/lib/rate-limit";
import { reportServerError } from "@/lib/report-error";
import { isAllowedOrigin, verifyTurnstile } from "@/lib/security";
import { contactSchema, fieldErrors } from "@/lib/validations";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const noStore = { "Cache-Control": "no-store" };

function json(body: unknown, status: number, extra?: HeadersInit) {
  return NextResponse.json(body, { status, headers: { ...noStore, ...extra } });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return json({ ok: false, error: "Send the form as JSON." }, 415);
  }
  if (!isAllowedOrigin(request)) {
    return json({ ok: false, error: "The request could not be verified." }, 403);
  }

  const ip = clientIp(request);
  if (!(await allowContact(ip))) {
    return json({ ok: false, error: "Too many submissions. Please wait and try again, or email info@qnvotech.com." }, 429, {
      "Retry-After": "600",
    });
  }

  const raw = await request.text();
  if (raw.length > 12000) {
    return json({ ok: false, error: "The message is too large." }, 413);
  }

  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "The form could not be read." }, 400);
  }

  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return json({ ok: false, errors: fieldErrors(parsed.error) }, 400);
  }
  if (parsed.data.companyWebsite.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const turnstile = await verifyTurnstile(parsed.data.turnstileToken, ip);
  if (turnstile === "fail") {
    return json({ ok: false, error: "The spam check failed. Try again, or email info@qnvotech.com." }, 403);
  }

  const result = await sendEnquiry(parsed.data);
  if (result === "sent") return json({ ok: true }, 200);
  if (result === "unconfigured") {
    return json(
      { ok: false, error: "Email sending is not configured yet. Write to info@qnvotech.com instead." },
      503,
    );
  }
  await reportServerError("contact delivery failed");
  return json({ ok: false, error: "The message could not be sent. Email info@qnvotech.com instead." }, 502);
}

export function GET() {
  return json({ ok: false, error: "Method not allowed." }, 405, { Allow: "POST" });
}
