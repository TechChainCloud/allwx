import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PieDonut } from "@/components/pie-donut";
import { Segment } from "@/components/ui/segment";
import {
  COOPERATION,
  FARMER_MAP,
  REGIMES,
  regimeFromFlags,
  type Line,
  type RegimeFit,
} from "@/lib/machine";
import { selectPie, useInvictus } from "@/store/machine";
import { cn, formatPct } from "@/lib/utils";

export const Route = createFileRoute("/learn/atlas")({ component: AtlasPage });

function fitTone(fit: RegimeFit): "earn" | "suffer" | "hold" {
  if (fit === "earn") return "earn";
  if (fit === "suffer") return "suffer";
  return "hold";
}

function AtlasPage() {
  const store = useInvictus();
  const pie = selectPie(store.pieMode);
  const regime = regimeFromFlags(store.growth, store.inflation);
  const [filter, setFilter] = useState<"all" | "1" | "2">("all");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(pie[0]?.ticker ?? "VWRP");

  const visible = useMemo(() => {
    const query = q.trim().toLowerCase();
    return pie.filter((l) => {
      if (filter === "1" && l.sleeve !== 1) return false;
      if (filter === "2" && l.sleeve !== 2) return false;
      if (!query) return true;
      return (
        l.ticker.toLowerCase().includes(query) ||
        l.name.toLowerCase().includes(query) ||
        l.job.toLowerCase().includes(query)
      );
    });
  }, [pie, filter, q]);

  const s1 = pie.filter((l) => l.sleeve === 1).reduce((s, l) => s + l.weight, 0);
  const s2 = pie.filter((l) => l.sleeve === 2).reduce((s, l) => s + l.weight, 0);

  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">
          {store.pieMode === "revised" ? "Revised preview" : "12 Sep machine draft"}
        </p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">Sixteen lines. Sixteen jobs.</h1>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
          No line suffers alone. Search a ticker. Open the story. This is the
          draft atlas — not Prime weights.
        </p>
      </header>

      <Segment
        ariaLabel="Working pie"
        value={store.pieMode}
        onChange={store.setPieMode}
        options={[
          { value: "locked", label: "12 Sep lock" },
          { value: "revised", label: "Revised preview" },
        ]}
      />

      <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
        <PieDonut pie={pie} />
        <div className="grid grid-cols-2 gap-3">
          <Stat k="Sleeve 1 · growth & real" v={`${s1.toFixed(1)}%`} />
          <Stat k="Sleeve 2 · defensive" v={`${s2.toFixed(1)}%`} />
          <Stat k="Equity look-through" v="~57%" />
          <Stat k="Real assets" v="18%" />
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex rounded-md border border-line bg-panel p-1">
          {(
            [
              ["all", "All"],
              ["1", "Sleeve 1"],
              ["2", "Sleeve 2"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={cn(
                "h-9 rounded-sm px-3 font-mono text-xs",
                filter === id ? "bg-accent text-bg" : "text-muted",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search ticker, job…"
          className="h-11 min-h-11 flex-1 rounded-md border border-line bg-panel px-3 font-mono text-sm text-fg placeholder:text-faint"
        />
      </div>

      <ul className="space-y-2">
        {visible.map((line) => (
          <LineRow
            key={line.ticker}
            line={line}
            regime={regime}
            open={open === line.ticker}
            onToggle={() => setOpen(open === line.ticker ? null : line.ticker)}
          />
        ))}
      </ul>

      <section>
        <h2 className="font-mono text-2xl">Cooperation map</h2>
        <p className="mt-2 max-w-prose font-sans text-sm text-muted">
          Every line has at least one partner that earns when it suffers.
        </p>
        <div className="mt-4 divide-y divide-line overflow-hidden rounded-md border border-line">
          {COOPERATION.map((row) => (
            <div key={row.suffers} className="grid gap-1 bg-panel px-5 py-3 sm:grid-cols-2 sm:gap-6">
              <p className="font-sans text-sm text-down">{row.suffers}</p>
              <p className="font-sans text-sm text-up">{row.earns}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-md border border-line bg-panel px-4 py-4">
      <p className="stamp text-[10px] text-muted">{k}</p>
      <p className="mt-2 font-mono text-2xl tabular-nums">{v}</p>
    </div>
  );
}

function LineRow({
  line,
  regime,
  open,
  onToggle,
}: {
  line: Line;
  regime: ReturnType<typeof regimeFromFlags>;
  open: boolean;
  onToggle: () => void;
}) {
  const fit = line.regimes[regime];
  return (
    <li className="rounded-md border border-line bg-panel">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-11 w-full items-center gap-3 px-4 py-3 text-left sm:px-5"
        aria-expanded={open}
      >
        <span className="w-14 font-mono text-sm text-cyan">{line.ticker}</span>
        <span className="hidden flex-1 truncate font-sans text-sm text-muted sm:block">{line.job}</span>
        <span className="ml-auto flex items-center gap-2">
          <Badge tone={fitTone(fit)}>{fit}</Badge>
          <span className="font-mono text-sm tabular-nums">{line.weight.toFixed(1)}%</span>
        </span>
      </button>
      {open ? (
        <div className="border-t border-line px-4 py-5 sm:px-5">
          <p className="font-mono text-sm">{line.name}</p>
          <p className="mt-2 max-w-prose font-sans text-sm leading-relaxed text-muted">{line.story}</p>
          <p className="mt-3 font-sans text-[15px] italic">{line.analogy}</p>
          {FARMER_MAP[line.ticker] ? (
            <p className="mt-2 font-mono text-xs text-faint">On the farm: {FARMER_MAP[line.ticker]}.</p>
          ) : (
            <p className="mt-2 font-mono text-xs text-faint">Specialist tool — a small job no other line does.</p>
          )}
          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <Mini k="Floor–cap" v={`${line.floor}–${line.cap}%`} />
            <Mini k="5-year" v={formatPct(line.fiveYear, 1)} />
            <Mini k="2022" v={line.y2022 === null ? "n/a" : formatPct(line.y2022, 1)} />
            <Mini k="TER" v={line.ter} />
          </dl>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {REGIMES.map((r) => (
              <Badge key={r.id} tone={fitTone(line.regimes[r.id])}>
                {r.name}: {line.regimes[r.id]}
              </Badge>
            ))}
          </div>
          {line.partnersWhenSuffers.length > 0 ? (
            <p className="mt-4 font-sans text-xs text-muted">
              When this suffers: <span className="text-up">{line.partnersWhenSuffers.join(", ")}</span>
            </p>
          ) : null}
          {line.probation ? <p className="mt-2 font-mono text-xs text-yellow">{line.probation}</p> : null}
          {line.notes ? <p className="mt-2 font-sans text-xs text-faint">{line.notes}</p> : null}
        </div>
      ) : null}
    </li>
  );
}

function Mini({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="stamp text-[10px] text-muted">{k}</dt>
      <dd className="mt-1 font-mono tabular-nums">{v}</dd>
    </div>
  );
}
