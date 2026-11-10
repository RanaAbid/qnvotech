"use client";

import { useEffect, useId, useRef, useState } from "react";
import { contactSchema } from "@/lib/validations";

type FieldErrors = Record<string, string>;

type TurnstileRenderOptions = {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

interface TurnstileApi {
  render: (element: HTMLElement, options: TurnstileRenderOptions) => string;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const inputClass = "field";

export function ContactForm({ siteKey }: { siteKey: string }) {
  const baseId = useId();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [token, setToken] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!siteKey || !widgetRef.current) return;
    const nonce = document.body.dataset.cspNonce ?? "";
    let widgetId = "";
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    if (nonce) script.nonce = nonce;
    script.onload = () => {
      if (!widgetRef.current || !window.turnstile) return;
      widgetId = window.turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        callback: (value) => setToken(value),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    };
    document.head.appendChild(script);
    return () => {
      script.remove();
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [siteKey]);

  useEffect(() => {
    if (formError || Object.keys(errors).length > 0) summaryRef.current?.focus();
  }, [errors, formError]);

  useEffect(() => {
    if (done) successRef.current?.focus();
  }, [done]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    setDone(false);
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      organization: String(form.get("organization") ?? ""),
      message: String(form.get("message") ?? ""),
      companyWebsite: honeypot,
      turnstileToken: token,
    };
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setPending(true);
    const formElement = event.currentTarget;
    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const body: unknown = await response.json().catch(() => null);
      if (response.ok) {
        setDone(true);
        formElement.reset();
        setHoneypot("");
        setToken("");
        return;
      }
      if (body && typeof body === "object" && "errors" in body && body.errors && typeof body.errors === "object") {
        const next: FieldErrors = {};
        for (const [key, value] of Object.entries(body.errors)) {
          if (typeof value === "string") next[key] = value;
        }
        setErrors(next);
      }
      const message =
        body && typeof body === "object" && "error" in body && typeof body.error === "string"
          ? body.error
          : "The message could not be sent. Email info@qnvotech.com instead.";
      setFormError(message);
    } catch {
      setFormError("The message could not be sent. Email info@qnvotech.com instead.");
    } finally {
      setPending(false);
    }
  }

  function fieldError(name: string) {
    return errors[name] ? (
      <p id={`${baseId}-${name}-error`} className="mt-2 font-semibold text-navy">
        Error: {errors[name]}
      </p>
    ) : null;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="soft-card space-y-6 p-6 md:p-8">
      <div ref={summaryRef} tabIndex={-1} role={formError ? "alert" : undefined}>
        {formError ? <p className="rounded-md border border-navy/20 bg-offwhite p-4 font-semibold text-navy">{formError}</p> : null}
      </div>
      {done ? (
        <div ref={successRef} tabIndex={-1} role="status" className="rounded-md border border-navy/15 bg-offwhite p-4">
          <p className="font-semibold text-navy">Your message was submitted.</p>
          <p className="mt-2">
            If email delivery is configured, it is on its way to the QNVO Technologies inbox. You can also write to info@qnvotech.com. This page cannot confirm how quickly a person will read it.
          </p>
        </div>
      ) : null}
      <div>
        <label htmlFor={`${baseId}-name`} className="font-semibold text-navy">
          Full name
        </label>
        <input id={`${baseId}-name`} name="name" autoComplete="name" required maxLength={80} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${baseId}-name-error` : undefined} className={inputClass} />
        {fieldError("name")}
      </div>
      <div>
        <label htmlFor={`${baseId}-email`} className="font-semibold text-navy">
          Email
        </label>
        <input id={`${baseId}-email`} name="email" type="email" autoComplete="email" inputMode="email" required maxLength={254} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${baseId}-email-error` : undefined} className={inputClass} />
        {fieldError("email")}
      </div>
      <div>
        <label htmlFor={`${baseId}-organization`} className="font-semibold text-navy">
          Organization <span className="font-normal">(optional)</span>
        </label>
        <input id={`${baseId}-organization`} name="organization" autoComplete="organization" maxLength={120} aria-invalid={Boolean(errors.organization)} aria-describedby={errors.organization ? `${baseId}-organization-error` : undefined} className={inputClass} />
        {fieldError("organization")}
      </div>
      <div>
        <label htmlFor={`${baseId}-message`} className="font-semibold text-navy">
          Message
        </label>
        <textarea id={`${baseId}-message`} name="message" required minLength={20} maxLength={4000} rows={6} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${baseId}-message-error` : `${baseId}-message-hint`} className={inputClass} />
        <p id={`${baseId}-message-hint`} className="mt-2">
          At least 20 characters. Do not include passwords, payment cards or other secrets.
        </p>
        {fieldError("message")}
      </div>
      <div aria-hidden="true" className="absolute left-[-10000px] h-px w-px overflow-hidden">
        <label htmlFor={`${baseId}-company`}>Company website</label>
        <input id={`${baseId}-company`} name="companyWebsite" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
      </div>
      {siteKey ? <div ref={widgetRef} className="min-h-16" /> : null}
      <button type="submit" disabled={pending} className="btn btn-blue disabled:opacity-70">
        {pending ? "Sending" : "Send message"}
      </button>
    </form>
  );
}
