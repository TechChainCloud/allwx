import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  MILESTONE_1M,
  PLAN_PATHS,
  STATS_LOCKED,
  STATS_REVISED,
  STRESS_SCENARIOS,
  YEARLY_REVISED,
} from "@/lib/machine";
import { pathSeries } from "@/lib/verdict";
import { useInvictus } from "@/store/machine";
import { cn, formatCompactGbp, formatGbp, formatPct } from "@/lib/utils";

export const Route = createFileRoute("/learn/path")({ component: PathPage });

type Scenario = "stress" | "bayesian" | "historical";

function PathPage() {
  const contribution = useInvictus((s) => s.contribution);
  const setContribution = useInvictus((s) => s.setContribution);
  const pieMode = useInvictus((s) => s.pieMode);
  const [scenario, setScenario] = useState<Scenario>("bayesian");
  const stats = pieMode === "revised" ? STATS_REVISED : STATS_LOCKED;
  const plan = PLAN_PATHS[scenario];

  const chart = useMemo(() => {
    const years = 30;
    const stress = pathSeries(contribution, 0.05, years);
    const bayes = pathSeries(contribution, 0.075, years);
    const hist = pathSeries(contribution, 0.0818, years);
    return Array.from({ length: years }, (_, i) => ({
      year: i + 1,
      stress: Math.round(stress[i]!),
      bayesian: Math.round(bayes[i]!),
      historical: Math.round(hist[i]!),
    }));
  }, [contribution]);

  const terminal = chart[29]!;

  return (
    <div className="space-y-10">
      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">Thirty years</p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">
          Plan around 5%. Work from 7.5%. Do not plan around history.
        </h1>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
          Getting the debit up is the single most important lever. At £200/month
          the contribution is the binding constraint — not the mix.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-4">
        <Stat k="Mean (verified)" v={formatPct(stats.mean, 2)} />
        <Stat k="Volatility" v={formatPct(stats.vol, 2)} />
        <Stat k={`Worst (${stats.worst.year})`} v={formatPct(stats.worst.value, 2)} />
        <Stat k={`Best (${stats.best.year})`} v={formatPct(stats.best.value, 2)} />
      </div>

      <section className="rounded-md border border-line bg-panel p-4 sm:p-6">
        <label className="block max-w-xs">
          <span className="mb-2 block stamp text-[10px] text-muted">Monthly contribution</span>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={200}
              max={2000}
              step={50}
              value={contribution}
              onChange={(e) => setContribution(Number(e.target.value))}
              className="w-full accent-[var(--color-accent)]"
            />
            <span className="w-20 font-mono tabular-nums">{formatGbp(contribution)}</span>
          </div>
        </label>
        <div className="mt-4 flex flex-wrap gap-2">
          {(["stress", "bayesian", "historical"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setScenario(id)}
              className={cn(
                "h-9 rounded-sm px-3 font-mono text-xs",
                scenario === id ? "bg-accent text-bg" : "border border-line text-muted",
              )}
            >
              {PLAN_PATHS[id].label.split(" — ")[0]}
            </button>
          ))}
        </div>
        <p className="mt-3 font-sans text-xs text-muted">{plan.label}</p>
        <div className="mt-6 h-64 min-h-[16rem]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chart}>
              <CartesianGrid stroke="var(--color-line)" strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fill: "var(--color-muted)", fontSize: 11 }} />
              <YAxis
                tickFormatter={(v) => formatCompactGbp(Number(v))}
                tick={{ fill: "var(--color-muted)", fontSize: 11 }}
                width={56}
              />
              <Tooltip
                contentStyle={{ background: "var(--color-panel)", border: "1px solid var(--color-line)" }}
                formatter={(v) => formatGbp(Number(v))}
              />
              <Area type="monotone" dataKey="stress" stroke="var(--color-muted)" fill="var(--color-line)" fillOpacity={0.4} />
              <Area type="monotone" dataKey="bayesian" stroke="var(--color-accent)" fill="var(--color-accent)" fillOpacity={0.15} />
              <Area type="monotone" dataKey="historical" stroke="var(--color-cyan)" fill="transparent" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 font-mono text-sm">
          Year 30 · stress {formatGbp(terminal.stress)} · working {formatGbp(terminal.bayesian)} · history{" "}
          {formatGbp(terminal.historical)}
        </p>
      </section>

      <section>
        <h2 className="font-mono text-2xl">£1m milestone</h2>
        <p className="mt-2 font-sans text-sm text-muted">
          At this debit: stress {MILESTONE_1M.stress["1600"]} · working {MILESTONE_1M.bayesian["1600"]}. At
          £200 the million is not in the 30-year window.
        </p>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Verified years (revised)</h2>
        <div className="mt-4 overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[520px] text-left font-mono text-[11px]">
            <thead className="bg-bg-2 text-[10px] uppercase text-muted">
              <tr>
                <th className="px-3 py-2">Year</th>
                <th className="px-3 py-2">Return</th>
                <th className="px-3 py-2">Driver</th>
              </tr>
            </thead>
            <tbody>
              {YEARLY_REVISED.map((y) => (
                <tr key={y.year} className="border-t border-line">
                  <td className="px-3 py-2">{y.year}</td>
                  <td className={`px-3 py-2 ${y.ret >= 0 ? "text-up" : "text-down"}`}>{formatPct(y.ret, 2)}</td>
                  <td className="px-3 py-2 font-sans text-[12px] text-muted">{y.driver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Stress cases</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {STRESS_SCENARIOS.map((s) => (
            <li key={s.id} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-sm">{s.name}</p>
              <p className="mt-2 font-mono text-xs text-yellow">{s.impact}</p>
              <p className="mt-2 font-sans text-sm text-muted">{s.cushion}</p>
            </li>
          ))}
        </ul>
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
