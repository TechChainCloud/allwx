import type { Verdict } from "@/lib/verdict";
import { formatGbp } from "@/lib/utils";
import { cn } from "@/lib/utils";

const KIND_CLASS: Record<Verdict["kind"], string> = {
  hold: "text-hold",
  route: "text-accent",
  "walk-back": "text-warn",
  blocked: "text-suffer",
  allowed: "text-earn",
  dead: "text-suffer",
  watch: "text-warn",
};

export function VerdictCard({ verdict }: { verdict: Verdict }) {
  return (
    <article className="rounded-xl bg-surface p-1 shadow-[var(--shadow-border)]">
      <div className="rounded-lg border border-line bg-inset px-5 py-6 sm:px-7 sm:py-8">
        <p className={cn("stamp text-[11px]", KIND_CLASS[verdict.kind])}>
          Verdict
        </p>
        <h2 className="font-display mt-3 text-3xl leading-tight text-fg sm:text-4xl">
          {verdict.stamp}
        </h2>
        <p className="mt-4 text-sm font-medium text-fg">{verdict.rule}</p>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
          {verdict.reason}
        </p>
        {verdict.allocations && verdict.allocations.length > 0 ? (
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {verdict.allocations.map((a) => (
              <li
                key={a.ticker}
                className="flex items-baseline justify-between gap-4 py-2.5"
              >
                <span className="text-sm tracking-wide text-fg">{a.ticker}</span>
                <span className="tabular text-sm text-muted">
                  {a.pct.toFixed(1)}%
                  <span className="ml-4 text-fg">{formatGbp(a.pounds)}</span>
                </span>
              </li>
            ))}
          </ul>
        ) : null}
        {verdict.flags?.length ? (
          <ul className="mt-5 space-y-1.5">
            {verdict.flags.map((f) => (
              <li key={f} className="text-xs leading-relaxed text-subtle">
                {f}
              </li>
            ))}
          </ul>
        ) : null}
        <p className="font-display mt-6 border-t border-line pt-5 text-[15px] leading-relaxed text-muted italic">
          {verdict.ifThen}
        </p>
      </div>
    </article>
  );
}
