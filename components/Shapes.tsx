import { useId } from "react";

export function AbstractGraphic({ className = "" }: { className?: string }) {
  const paint = `qnvoOrb${useId().replace(/:/g, "")}`;
  return (
    <svg className={className} viewBox="0 0 520 400" fill="none" aria-hidden="true">
      <rect width="520" height="400" rx="36" fill="#F4F7FA" />
      <circle cx="360" cy="168" r="108" fill={`url(#${paint})`} />
      <circle cx="360" cy="168" r="148" stroke="#01A8D2" strokeOpacity="0.55" />
      <circle cx="360" cy="168" r="178" stroke="#0070E8" strokeOpacity="0.28" />
      <rect x="48" y="64" width="168" height="112" rx="24" fill="#02285F" />
      <rect x="72" y="88" width="72" height="10" rx="5" fill="#F59E0B" />
      <rect x="72" y="110" width="112" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.85" />
      <rect x="72" y="128" width="88" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.45" />
      <rect x="48" y="196" width="210" height="140" rx="28" fill="#FFFFFF" />
      <circle cx="96" cy="252" r="26" fill="#0070E8" />
      <path d="M86 252l7 7 14-16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="138" y="236" width="88" height="10" rx="5" fill="#02285F" />
      <rect x="138" y="256" width="64" height="8" rx="4" fill="#2B4473" fillOpacity="0.45" />
      <rect x="280" y="250" width="188" height="86" rx="24" fill="#02285F" />
      <rect x="304" y="274" width="46" height="38" rx="10" fill="#05D597" />
      <rect x="360" y="274" width="80" height="10" rx="5" fill="#FFFFFF" />
      <rect x="360" y="294" width="56" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.45" />
      <defs>
        <linearGradient id={paint} x1="260" y1="70" x2="460" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0070E8" />
          <stop offset="0.55" stopColor="#01A8D2" />
          <stop offset="1" stopColor="#05D597" />
        </linearGradient>
      </defs>
    </svg>
  );
}
