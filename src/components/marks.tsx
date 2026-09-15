import type { JobId, WeatherId } from "@/lib/content";

export function JobMark({
  id,
  className = "size-10",
}: {
  id: JobId;
  className?: string;
}) {
  const common = "overflow-visible";
  if (id === "shares")
    return (
      <svg viewBox="0 0 40 40" className={className} aria-hidden>
        <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="20" cy="20" rx="7" ry="15" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 20h30M8 13h24M8 27h24" fill="none" stroke="currentColor" strokeWidth="1.1" className={common} />
      </svg>
    );
  if (id === "bonds")
    return (
      <svg viewBox="0 0 40 40" className={className} aria-hidden>
        <path
          d="M20 5 32 10v9c0 8-5.4 13.5-12 16-6.6-2.5-12-8-12-16v-9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M15 20l4 4 8-8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  if (id === "gold")
    return (
      <svg viewBox="0 0 40 40" className={className} aria-hidden>
        <path d="M8 28 16 10h8l8 18H8Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 22h16" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  if (id === "tips")
    return (
      <svg viewBox="0 0 40 40" className={className} aria-hidden>
        <rect x="12" y="6" width="16" height="28" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 14v12M16.5 20h7" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  if (id === "commodities")
    return (
      <svg viewBox="0 0 40 40" className={className} aria-hidden>
        <path d="M8 28c4-10 6-16 12-20 6 4 8 10 12 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 28c2-6 3-10 6-13 3 3 4 7 6 13" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 30h28" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  if (id === "cash")
    return (
      <svg viewBox="0 0 40 40" className={className} aria-hidden>
        <rect x="6" y="16" width="28" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="23" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 16V13h8" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M10 30 V14 l10-6 10 6v16" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 30v-8h8v8" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M14 8h4M22 8h4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function WeatherGlyph({
  id,
  className = "size-8",
}: {
  id: WeatherId;
  className?: string;
}) {
  if (id === "goldilocks")
    return (
      <svg viewBox="0 0 40 40" className={className} aria-hidden>
        <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M20 6v4M20 30v4M6 20h4M30 20h4M10 10l3 3M27 27l3 3M10 30l3-3M27 13l3-3"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    );
  if (id === "reflation")
    return (
      <svg viewBox="0 0 40 40" className={className} aria-hidden>
        <path d="M8 28c4-2 6-8 12-8s8 8 12 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 18c2-6 4-10 6-12 2 2 4 6 6 12" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  if (id === "stagflation")
    return (
      <svg viewBox="0 0 40 40" className={className} aria-hidden>
        <path d="M8 16h8l2-6 4 16 3-8h7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 28h20" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M8 24c3-8 8-12 12-12 3 0 5 2 8 2 5 0 8-3 8-3-1 10-6 16-14 16-6 0-11-2-14-3Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 32c2-3 3-4 4-4s2 1 4 4M22 32c2-3 3-4 4-4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
