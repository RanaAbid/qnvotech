"use client";

import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from "react";
import {
  contactRegions,
  contactServiceOptions,
  countriesForRegion,
} from "@/lib/contact-options";
import { ThemedSelect } from "@/components/ThemedSelect";
import { notify } from "@/lib/notify";
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
const serviceOptions = contactServiceOptions();

export function ContactForm({ siteKey }: { siteKey: string }) {
  const baseId = useId();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [token, setToken] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [serviceInterest, setServiceInterest] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);

  const countryOptions = useMemo(() => countriesForRegion(region), [region]);

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

  function focusFirstInvalid(nextErrors: FieldErrors) {
    const order = ["name", "email", "organization", "region", "country", "serviceInterest", "message"];
    const first = order.find((key) => nextErrors[key]);
    if (!first || !formRef.current) return;
    const idSuffix = first === "serviceInterest" ? "service" : first;
    formRef.current.querySelector<HTMLElement>(`#${CSS.escape(`${baseId}-${idSuffix}`)}`)?.focus();
  }

  function onRegionChange(next: string) {
    setRegion(next);
    setCountry("");
    if (errors.region || errors.country) {
      setErrors((current) => {
        const nextErrors = { ...current };
        delete nextErrors.region;
        delete nextErrors.country;
        return nextErrors;
      });
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending || submittingRef.current) return;

    setFormError("");
    setDone(false);
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      organization: String(form.get("organization") ?? ""),
      region: String(form.get("region") ?? ""),
      country: String(form.get("country") ?? ""),
      serviceInterest: String(form.get("serviceInterest") ?? ""),
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
      await notify.validation(next, {
        title: "Form needs attention",
        intro: "Messages appear after you press Send message — not while typing. Fix the items below, then submit again.",
      });
      focusFirstInvalid(next);
      return;
    }
    setErrors({});
    submittingRef.current = true;
    setPending(true);
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
        setRegion("");
        setCountry("");
        setServiceInterest("");
        await notify.success(
          "Message submitted",
          "If email delivery is configured, your message is on its way to the QNVO Technologies inbox. You can also write to info@qnvotech.com.",
        );
        return;
      }
      if (body && typeof body === "object" && "errors" in body && body.errors && typeof body.errors === "object") {
        const next: FieldErrors = {};
        for (const [key, value] of Object.entries(body.errors)) {
          if (typeof value === "string") next[key] = value;
        }
        setErrors(next);
        if (Object.keys(next).length) {
          await notify.validation(next);
          focusFirstInvalid(next);
          return;
        }
      }
      const message =
        body && typeof body === "object" && "error" in body && typeof body.error === "string"
          ? body.error
          : "The message could not be sent. Email info@qnvotech.com instead.";
      setFormError(message);
      await notify.error("Could not send message", message);
    } catch {
      const message = "The message could not be sent. Email info@qnvotech.com instead.";
      setFormError(message);
      await notify.error("Could not send message", message);
    } finally {
      submittingRef.current = false;
      setPending(false);
    }
  }

  function fieldError(name: string) {
    return errors[name] ? (
      <p id={`${baseId}-${name}-error`} className="field-error" role="alert">
        {errors[name]}
      </p>
    ) : null;
  }

  function describedBy(name: string, hintId?: string) {
    const parts = [hintId, errors[name] ? `${baseId}-${name}-error` : ""].filter(Boolean);
    return parts.length ? parts.join(" ") : undefined;
  }

  function RequiredMark() {
    return (
      <span className="font-normal text-slate">
        {" "}
        <span aria-hidden="true">*</span>
        <span className="sr-only">(required)</span>
      </span>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="soft-card contact-form relative space-y-5 p-6 md:p-8"
      aria-busy={pending}
    >
      <p className="text-sm text-slate">
        Required fields are marked with an asterisk (<span aria-hidden="true">*</span>). Validation messages appear when you submit the form.
      </p>
      {formError ? (
        <div role="alert" className="rounded-md border border-navy/20 bg-offwhite p-4 font-semibold text-navy">
          {formError}
        </div>
      ) : null}
      {done ? (
        <div role="status" className="rounded-md border border-navy/15 bg-offwhite p-4">
          <p className="font-semibold text-navy">Your message was submitted.</p>
          <p className="mt-2">
            If email delivery is configured, it is on its way to the QNVO Technologies inbox. You can also write to info@qnvotech.com. This page cannot confirm how quickly a person will read it.
          </p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${baseId}-name`} className="font-semibold text-navy">
            Full name
            <RequiredMark />
          </label>
          <input
            id={`${baseId}-name`}
            name="name"
            autoComplete="name"
            required
            maxLength={80}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            className={`${inputClass}${errors.name ? " is-invalid" : ""}`}
          />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor={`${baseId}-email`} className="font-semibold text-navy">
            Email
            <RequiredMark />
          </label>
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            className={`${inputClass}${errors.email ? " is-invalid" : ""}`}
          />
          {fieldError("email")}
        </div>
      </div>

      <div>
        <label htmlFor={`${baseId}-organization`} className="font-semibold text-navy">
          Organization <span className="font-normal">(optional)</span>
        </label>
        <input
          id={`${baseId}-organization`}
          name="organization"
          autoComplete="organization"
          maxLength={120}
          aria-invalid={Boolean(errors.organization)}
          aria-describedby={describedBy("organization")}
          className={`${inputClass}${errors.organization ? " is-invalid" : ""}`}
        />
        {fieldError("organization")}
      </div>

      <fieldset className="m-0 min-w-0 border-0 p-0">
        <legend className="sr-only">Location</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${baseId}-region`} className="font-semibold text-navy">
              Region
              <RequiredMark />
            </label>
            <ThemedSelect
              id={`${baseId}-region`}
              name="region"
              label="Region"
              value={region}
              onChange={onRegionChange}
              options={[...contactRegions]}
              placeholder="Select a region"
              required
              invalid={Boolean(errors.region)}
              describedBy={describedBy("region", `${baseId}-region-hint`)}
            />
            <p id={`${baseId}-region-hint`} className="mt-2 text-sm text-slate">
              Choose a world region. Country options load from that region.
            </p>
            {fieldError("region")}
          </div>
          <div>
            <label htmlFor={`${baseId}-country`} className="font-semibold text-navy">
              Country
              <RequiredMark />
            </label>
            <ThemedSelect
              id={`${baseId}-country`}
              name="country"
              label="Country"
              value={country}
              onChange={setCountry}
              options={countryOptions}
              placeholder={region ? "Select a country" : "Select a region first"}
              required
              disabled={!region}
              invalid={Boolean(errors.country)}
              describedBy={describedBy("country")}
              autoComplete="country-name"
            />
            {fieldError("country")}
          </div>
        </div>
      </fieldset>

      <div>
        <label htmlFor={`${baseId}-service`} className="font-semibold text-navy">
          Service interest
          <RequiredMark />
        </label>
        <ThemedSelect
          id={`${baseId}-service`}
          name="serviceInterest"
          label="Service interest"
          value={serviceInterest}
          onChange={setServiceInterest}
          groups={serviceOptions}
          placeholder="Select a service area"
          required
          invalid={Boolean(errors.serviceInterest)}
          describedBy={describedBy("serviceInterest", `${baseId}-service-hint`)}
        />
        <p id={`${baseId}-service-hint`} className="mt-2 text-sm text-slate">
          Choose the closest match. You can describe more than one area in the message.
        </p>
        {fieldError("serviceInterest")}
      </div>

      <div>
        <label htmlFor={`${baseId}-message`} className="font-semibold text-navy">
          Message
          <RequiredMark />
        </label>
        <textarea
          id={`${baseId}-message`}
          name="message"
          required
          minLength={20}
          maxLength={4000}
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message", `${baseId}-message-hint`)}
          className={`${inputClass}${errors.message ? " is-invalid" : ""}`}
        />
        <p id={`${baseId}-message-hint`} className="mt-2 text-sm text-slate">
          At least 20 characters. Do not include passwords, payment cards or other secrets.
        </p>
        {fieldError("message")}
      </div>

      <div aria-hidden="true" className="absolute left-[-10000px] h-px w-px overflow-hidden">
        <label htmlFor={`${baseId}-company`}>Company website</label>
        <input
          id={`${baseId}-company`}
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>
      {siteKey ? (
        <div ref={widgetRef} className="min-h-16" role="group" aria-label="Spam check" />
      ) : null}
      <button type="submit" disabled={pending} className="btn btn-blue disabled:cursor-not-allowed disabled:opacity-80">
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
