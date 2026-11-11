"use client";

import Swal, { type SweetAlertOptions, type SweetAlertResult } from "sweetalert2";

const fieldLabels: Record<string, string> = {
  name: "Full name",
  email: "Email",
  organization: "Organization",
  region: "Region",
  country: "Country",
  serviceInterest: "Service interest",
  message: "Message",
  turnstileToken: "Spam check",
};

const themed = Swal.mixin({
  buttonsStyling: false,
  reverseButtons: true,
  focusConfirm: true,
  customClass: {
    popup: "qnvo-swal-popup",
    title: "qnvo-swal-title",
    htmlContainer: "qnvo-swal-html",
    confirmButton: "qnvo-swal-confirm",
    cancelButton: "qnvo-swal-cancel",
    icon: "qnvo-swal-icon",
    actions: "qnvo-swal-actions",
    validationMessage: "qnvo-swal-validation",
  },
});

function fire(options: SweetAlertOptions): Promise<SweetAlertResult> {
  return themed.fire(options);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatFieldLabel(key: string): string {
  return fieldLabels[key] ?? key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

export function notifySuccess(title: string, text?: string): Promise<SweetAlertResult> {
  return fire({
    icon: "success",
    title,
    text,
    confirmButtonText: "OK",
  });
}

export function notifyError(title: string, text?: string): Promise<SweetAlertResult> {
  return fire({
    icon: "error",
    title,
    text,
    confirmButtonText: "OK",
  });
}

export function notifyInfo(title: string, text?: string): Promise<SweetAlertResult> {
  return fire({
    icon: "info",
    title,
    text,
    confirmButtonText: "OK",
  });
}

export function notifyWarning(title: string, text?: string): Promise<SweetAlertResult> {
  return fire({
    icon: "warning",
    title,
    text,
    confirmButtonText: "OK",
  });
}

/** Submit-time validation summary: lists every field message in one alert. */
export function notifyValidation(
  errors: Record<string, string>,
  options?: { title?: string; intro?: string },
): Promise<SweetAlertResult> {
  const entries = Object.entries(errors).filter(([, message]) => Boolean(message));
  const list = entries
    .map(
      ([key, message]) =>
        `<li><strong>${escapeHtml(formatFieldLabel(key))}:</strong> ${escapeHtml(message)}</li>`,
    )
    .join("");

  return fire({
    icon: "warning",
    title: options?.title ?? "Please fix the form",
    html: `<p class="qnvo-swal-intro">${escapeHtml(
      options?.intro ?? "Complete or correct the items below, then submit again.",
    )}</p><ul class="qnvo-swal-list">${list}</ul>`,
    confirmButtonText: "Review fields",
  });
}

export function notifyConfirm(options: {
  title: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}): Promise<boolean> {
  return fire({
    icon: "question",
    title: options.title,
    text: options.text,
    showCancelButton: true,
    confirmButtonText: options.confirmButtonText ?? "Confirm",
    cancelButtonText: options.cancelButtonText ?? "Cancel",
  }).then((result) => Boolean(result.isConfirmed));
}

export const notify = {
  success: notifySuccess,
  error: notifyError,
  info: notifyInfo,
  warning: notifyWarning,
  validation: notifyValidation,
  confirm: notifyConfirm,
};
