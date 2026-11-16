"use client";

import { useEffect, useMemo, useState } from "react";

type SalahRow = {
  id: string;
  name: string;
  begins: string;
  jamaat: string;
};

/** Sample timetable only — not live mosque data. */
const SAMPLE_ROWS: SalahRow[] = [
  { id: "fajr", name: "Fajr", begins: "05:42", jamaat: "06:15" },
  { id: "dhuhr", name: "Dhuhr", begins: "12:08", jamaat: "12:30" },
  { id: "asr", name: "Asr", begins: "14:32", jamaat: "15:00" },
  { id: "maghrib", name: "Maghrib", begins: "16:48", jamaat: "16:48" },
  { id: "isha", name: "Isha", begins: "18:20", jamaat: "19:00" },
];

const SAMPLE_SUNRISE = "07:05";
const SLIDE_COUNT = 3;

function parseToday(hhmm: string, now: Date): Date {
  const [hours, minutes] = hhmm.split(":").map(Number);
  const date = new Date(now);
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function formatRemaining(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;
  if (hours > 0) return `${hours} hr ${minutes} min ${seconds} sec`;
  return `${minutes} min ${seconds} sec`;
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

export function IceHallDisplay() {
  const [now, setNow] = useState(() => new Date());
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % SLIDE_COUNT);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const next = useMemo(() => {
    for (const row of SAMPLE_ROWS) {
      const jamaatAt = parseToday(row.jamaat, now);
      if (jamaatAt.getTime() > now.getTime()) {
        return {
          row,
          remainingSec: Math.floor((jamaatAt.getTime() - now.getTime()) / 1000),
        };
      }
    }
    const first = SAMPLE_ROWS[0];
    const tomorrow = parseToday(first.jamaat, now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return {
      row: first,
      remainingSec: Math.floor((tomorrow.getTime() - now.getTime()) / 1000),
    };
  }, [now]);

  const dateLabel = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);

  return (
    <article className="ice-hall" aria-label="Ice Hall sample prayer display">
      <header className="ice-hall-top">
        <div className="ice-hall-brand">
          <span className="ice-hall-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
              <rect x="3" y="3" width="26" height="26" rx="7" fill="#2f6bff" />
              <path d="M10 21V11h4.2c2.2 0 3.5 1.1 3.5 2.9 0 1.2-.6 2.1-1.7 2.5L19.2 21h-2.5l-2.9-4.2H12.4V21H10Zm2.4-6.2h1.6c1 0 1.6-.5 1.6-1.2s-.6-1.2-1.6-1.2h-1.6v2.4Z" fill="#fff" />
            </svg>
          </span>
          <div>
            <p className="ice-hall-title">Ice Hall</p>
            <p className="ice-hall-place">Sample venue</p>
          </div>
        </div>
        <p className="ice-hall-date">{dateLabel.replace(",", " •")}</p>
        <p className="ice-hall-clock" aria-live="polite">
          <span>
            {pad(now.getHours())}:{pad(now.getMinutes())}
          </span>
          <em>{pad(now.getSeconds())}</em>
        </p>
      </header>

      <div className="ice-hall-body">
        <div className="ice-hall-stage">
          <div className={`ice-hall-slides is-slide-${slide}`} aria-hidden="true">
            <div className="ice-hall-arch ice-hall-arch-l" />
            <div className="ice-hall-arch ice-hall-arch-c" />
            <div className="ice-hall-arch ice-hall-arch-r" />
          </div>
          <div className="ice-hall-stage-foot">
            <div className="ice-hall-dots" role="tablist" aria-label="Masjid slideshow">
              {Array.from({ length: SLIDE_COUNT }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`ice-hall-dot${slide === index ? " is-on" : ""}`}
                  aria-label={`Slide ${index + 1}`}
                  aria-pressed={slide === index}
                  onClick={() => setSlide(index)}
                />
              ))}
            </div>
            <p>Masjid slideshow</p>
          </div>
        </div>

        <div className="ice-hall-times">
          <div className="ice-hall-times-head" aria-hidden="true">
            <span>Salah</span>
            <span>Begins</span>
            <span>Jamaat</span>
          </div>
          <ul className="ice-hall-times-list">
            {SAMPLE_ROWS.map((row) => {
              const isNext = row.id === next.row.id;
              return (
                <li key={row.id} className={`ice-hall-row${isNext ? " is-next" : ""}`}>
                  <span className="ice-hall-salah">
                    {row.name}
                    {isNext ? <strong>Next</strong> : null}
                  </span>
                  <span>{row.begins}</span>
                  <span>{row.jamaat}</span>
                </li>
              );
            })}
          </ul>
          <div className="ice-hall-next">
            <div>
              <p>Next jamaat</p>
              <strong>
                {next.row.name} {next.row.jamaat}
              </strong>
            </div>
            <div>
              <p>Remaining</p>
              <strong>{formatRemaining(next.remainingSec)}</strong>
            </div>
          </div>
        </div>
      </div>

      <footer className="ice-hall-foot">
        <span>Sunrise {SAMPLE_SUNRISE}</span>
        <span>Please keep your phone on silent</span>
        <span>Sample times</span>
      </footer>
    </article>
  );
}
