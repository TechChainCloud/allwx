import { REGIMES, type Regime } from "@/lib/machine";
import { cn } from "@/lib/utils";

export function RegimeBoard({
  active,
  onSelect,
}: {
  active: Regime;
  onSelect: (id: Regime) => void;
}) {
  const cells: Regime[] = ["goldilocks", "reflation", "deflation", "stagflation"];
  return (
    <div>
      <div className="mb-2 flex justify-between px-1 text-[10px] uppercase tracking-[0.16em] text-subtle">
        <span>Inflation falling</span>
        <span>Inflation rising</span>
      </div>
      <div className="grid grid-cols-2 gap-1 rounded-xl bg-surface p-1">
        {cells.map((id, i) => {
          const r = REGIMES.find((x) => x.id === id)!;
          const on = id === active;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelect(id)}
              className={cn(
                "relative min-h-28 rounded-lg px-4 py-4 text-left transition-colors duration-150",
                on ? "bg-accent text-accent-fg" : "bg-inset text-fg hover:bg-elevated",
              )}
            >
              {i === 0 || i === 1 ? (
                <span
                  className={cn(
                    "absolute right-3 top-3 text-[9px] uppercase tracking-[0.14em]",
                    on ? "text-accent-fg/70" : "text-subtle",
                  )}
                >
                  Growth rising
                </span>
              ) : (
                <span
                  className={cn(
                    "absolute right-3 top-3 text-[9px] uppercase tracking-[0.14em]",
                    on ? "text-accent-fg/70" : "text-subtle",
                  )}
                >
                  Growth falling
                </span>
              )}
              <p className="font-display text-xl leading-tight">{r.name}</p>
              <p
                className={cn(
                  "mt-2 max-w-[26ch] text-xs leading-relaxed",
                  on ? "text-accent-fg/80" : "text-muted",
                )}
              >
                {r.blurb}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
