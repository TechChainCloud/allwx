import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Segment } from "@/components/ui/segment";
import { VerdictCard } from "@/components/verdict-card";
import { LOCKED_PIE, PERMANENTLY_DEAD, REVISED_PIE, SIZE_GATES } from "@/lib/machine";
import {
  routeContribution,
  verdictAddLine,
  verdictAutoInvest,
  verdictDead,
  verdictSell,
  verdictSizeGate,
  walkBackActive,
  type Verdict,
} from "@/lib/verdict";
import { selectPie, useInvictus } from "@/store/machine";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/learn/decide")({ component: DecidePage });

type Intent =
  | "contribute"
  | "sell"
  | "autoinvest"
  | "walkback"
  | "addline"
  | "gates"
  | "dead";

const INTENTS: { id: Intent; title: string; blurb: string }[] = [
  { id: "contribute", title: "Route this month’s contribution", blurb: "The 3rd does the work. Nothing is sold." },
  { id: "sell", title: "Should I sell a line?", blurb: "The signed sentence already answered." },
  { id: "autoinvest", title: "Change AutoInvest", blurb: "Lock file first. Decision date first." },
  { id: "walkback", title: "Has walk-back fired?", blurb: "PMI < 50 and 2s10s inverted." },
  { id: "addline", title: "Add a 17th line", blurb: "No 17th personality." },
  { id: "gates", title: "Size-gate a replacement", blurb: "FLOT, VHYL, ROLL — gates, not orders." },
  { id: "dead", title: "Revive a dead idea", blurb: "D-Prime, IITU, crypto, 8% planning return." },
];

function DecidePage() {
  const store = useInvictus();
  const pie = selectPie(store.pieMode);
  const [intent, setIntent] = useState<Intent>("contribute");
  const [sellTicker, setSellTicker] = useState("VAGS");
  const [addTicker, setAddTicker] = useState("IITU");
  const [gateId, setGateId] = useState<(typeof SIZE_GATES)[number]["id"]>("FLOT");
  const [deadId, setDeadId] = useState(PERMANENTLY_DEAD[0]!.id);

  const allTickers = useMemo(() => {
    const set = new Set<string>();
    for (const l of LOCKED_PIE) set.add(l.ticker);
    for (const l of REVISED_PIE) set.add(l.ticker);
    return [...set];
  }, []);

  const verdict: Verdict = useMemo(() => {
    switch (intent) {
      case "contribute":
        return routeContribution(pie, store);
      case "sell":
        return verdictSell(pie, sellTicker);
      case "autoinvest":
        return verdictAutoInvest(store);
      case "walkback": {
        const active = walkBackActive(store.pmi, store.curveInverted);
        if (active) return routeContribution(pie, store);
        return {
          kind: "hold",
          stamp: "WALK-BACK INACTIVE",
          rule: "PMI < 50 AND 2s10s inverted. Both must be true.",
          reason: `PMI is ${store.pmi.toFixed(1)}${store.pmi < 50 ? " (below 50)" : " (above 50)"} and the curve is ${store.curveInverted ? "inverted" : "not inverted"}. Contributions follow floors, caps and target weights.`,
          ifThen:
            "If the front line is intact, the reserve stays the reserve. Do not hide in cash because a single line had a bad month.",
        };
      }
      case "addline":
        return verdictAddLine(addTicker);
      case "gates":
        return verdictSizeGate(gateId, store.nav);
      case "dead":
        return verdictDead(deadId);
    }
  }, [intent, pie, store, sellTicker, addTicker, gateId, deadId]);

  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">Protocol simulator</p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">Decide</h1>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
          Name the action. The machine applies the lock file. A briefing is not
          a change log entry. Teaching object — not a ticket.
        </p>
      </header>

      <div className="grid gap-2 sm:grid-cols-2">
        {INTENTS.map((item) => {
          const on = item.id === intent;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setIntent(item.id)}
              className={cn(
                "min-h-11 rounded-md px-4 py-4 text-left",
                on ? "bg-accent text-bg" : "border border-line bg-panel hover:border-accent",
              )}
            >
              <p className="font-mono text-sm">{item.title}</p>
              <p className={cn("mt-1 font-sans text-xs leading-relaxed", on ? "text-bg/80" : "text-muted")}>
                {item.blurb}
              </p>
            </button>
          );
        })}
      </div>

      {intent === "contribute" || intent === "walkback" ? (
        <ControlsPanel>
          {intent === "contribute" ? (
            <Field label="This month’s contribution">
              <NumberField value={store.contribution} onChange={store.setContribution} prefix="£" step={50} min={0} />
            </Field>
          ) : null}
          <Field label="PMI">
            <NumberField value={store.pmi} onChange={store.setPmi} step={0.1} min={20} max={80} />
          </Field>
          <Field label="2s10s curve">
            <Segment
              ariaLabel="Curve"
              value={store.curveInverted ? "inv" : "norm"}
              onChange={(v) => store.setCurveInverted(v === "inv")}
              options={[
                { value: "norm", label: "Not inverted" },
                { value: "inv", label: "Inverted" },
              ]}
            />
          </Field>
        </ControlsPanel>
      ) : null}

      {intent === "sell" ? (
        <ControlsPanel>
          <Field label="Line under review">
            <select
              value={sellTicker}
              onChange={(e) => setSellTicker(e.target.value)}
              className="h-11 w-full rounded-md border border-line bg-bg-2 px-3 font-mono text-sm"
            >
              {allTickers.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </ControlsPanel>
      ) : null}

      {intent === "addline" ? (
        <ControlsPanel>
          <Field label="Proposed ticker">
            <input
              value={addTicker}
              onChange={(e) => setAddTicker(e.target.value.toUpperCase())}
              className="h-11 w-full rounded-md border border-line bg-bg-2 px-3 font-mono text-sm"
              placeholder="IITU"
            />
          </Field>
        </ControlsPanel>
      ) : null}

      {intent === "gates" ? (
        <ControlsPanel>
          <Field label="Gate">
            <Segment
              ariaLabel="Size gate"
              value={gateId}
              onChange={(v) => setGateId(v as typeof gateId)}
              options={SIZE_GATES.map((g) => ({ value: g.id, label: g.id }))}
            />
          </Field>
          <Field label="ISA NAV">
            <NumberField value={store.nav} onChange={store.setNav} prefix="£" step={50} min={0} />
          </Field>
        </ControlsPanel>
      ) : null}

      {intent === "dead" ? (
        <div className="flex flex-wrap gap-1.5">
          {PERMANENTLY_DEAD.map((d) => (
            <button key={d.id} type="button" onClick={() => setDeadId(d.id)} className="min-h-11">
              <Badge tone={deadId === d.id ? "invert" : "default"}>{d.name}</Badge>
            </button>
          ))}
        </div>
      ) : null}

      <VerdictCard verdict={verdict} />
      {intent === "contribute" ? <WeightsEditor /> : null}
    </div>
  );
}

function ControlsPanel({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 rounded-md border border-line bg-panel p-4 sm:grid-cols-3 sm:p-5">{children}</div>;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block stamp text-[10px] text-muted">{label}</span>
      {children}
    </label>
  );
}

function NumberField({
  value,
  onChange,
  prefix,
  step = 1,
  min,
  max,
}: {
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
  step?: number;
  min?: number;
  max?: number;
}) {
  return (
    <div className="relative">
      {prefix ? (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-sm text-faint">
          {prefix}
        </span>
      ) : null}
      <input
        type="number"
        value={Number.isFinite(value) ? value : 0}
        step={step}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        className={cn(
          "h-11 w-full rounded-md border border-line bg-bg-2 font-mono text-sm tabular-nums",
          prefix ? "pl-7 pr-3" : "px-3",
        )}
      />
    </div>
  );
}

function WeightsEditor() {
  const store = useInvictus();
  const pie = selectPie(store.pieMode);
  const sum = pie.reduce((s, l) => s + (store.weights[l.ticker] ?? l.weight), 0);

  return (
    <section>
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-mono text-xl">Current weights</h2>
          <p className="mt-1 font-sans text-xs text-muted">
            Drift the pie to see how the 3rd rebalances. Sum {sum.toFixed(1)}%.
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={store.resetWeights}>
          Reset
        </Button>
      </div>
      <div className="overflow-hidden rounded-md border border-line">
        {pie.map((l) => {
          const w = store.weights[l.ticker] ?? l.weight;
          return (
            <div
              key={l.ticker}
              className="grid grid-cols-[1fr_4.5rem_4.5rem] items-center gap-2 border-t border-line px-4 py-2 first:border-0"
            >
              <div>
                <p className="font-mono text-sm text-cyan">{l.ticker}</p>
                <p className="font-mono text-[11px] text-faint">
                  {l.floor}–{l.cap}%
                  {w < l.floor ? " · below floor" : w > l.cap ? " · above cap" : ""}
                </p>
              </div>
              <input
                type="number"
                step={0.5}
                min={0}
                max={60}
                value={w}
                onChange={(e) => store.setWeight(l.ticker, Number(e.target.value))}
                className="h-10 rounded-sm border border-line bg-bg-2 px-2 text-right font-mono text-sm tabular-nums"
              />
              <span className="text-right font-mono text-sm tabular-nums text-muted">{l.weight.toFixed(1)}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
