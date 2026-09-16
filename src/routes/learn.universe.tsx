import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { UNIVERSE } from "@/lib/prime2";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/learn/universe")({ component: UniversePage });

const SCREENS = ["All", "Gap", "Regime", "Factor", "Quiet"] as const;

function UniversePage() {
  const [screen, setScreen] = useState<(typeof SCREENS)[number]>("All");
  const [tier, setTier] = useState<"all" | "1" | "2" | "3">("all");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState("WNRG");

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase();
    return UNIVERSE.filter((r) => {
      if (screen !== "All" && r.screen !== screen) return false;
      if (tier !== "all" && String(r.tier) !== tier) return false;
      if (!query) return true;
      return (
        r.ticker.toLowerCase().includes(query) ||
        r.name.toLowerCase().includes(query) ||
        r.job.toLowerCase().includes(query) ||
        r.desk.toLowerCase().includes(query)
      );
    });
  }, [screen, tier, q]);
  const row = UNIVERSE.find((r) => r.ticker === open) ?? UNIVERSE[0]!;

  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <p className="stamp text-[11px] text-accent">Universe screen · five filters · every candidate</p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">
          The farm has not yet considered these. That is not the same as hiring them.
        </h1>
        <p className="mt-4 font-sans text-base leading-relaxed text-muted">
          3Y track. Two weathers. Fill a gap or replace a line. No seventeenth
          personality. Rank is a screen, not a ticket. Click a line. Read the desk.
        </p>
      </header>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <div className="flex flex-wrap gap-1">
          {SCREENS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setScreen(s)}
              className={cn(
                "h-10 rounded-sm px-3 font-mono text-[11px]",
                screen === s ? "bg-accent text-bg" : "border border-line text-muted hover:text-fg",
              )}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          {(["all", "1", "2", "3"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTier(t)}
              className={cn(
                "h-10 rounded-sm px-3 font-mono text-[11px]",
                tier === t ? "bg-line text-accent" : "border border-line text-muted hover:text-fg",
              )}
            >
              TIER {t.toUpperCase()}
            </button>
          ))}
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="WNRG, value, floater…"
          className="h-10 min-w-0 flex-1 rounded-md border border-line bg-bg px-3 font-mono text-sm placeholder:text-faint focus:border-accent focus:outline-none"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
        <div className="overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[680px] text-left font-mono text-[11px]">
            <thead className="bg-bg-2 text-[10px] uppercase text-muted">
              <tr>
                <th className="px-3 py-2">Rk</th>
                <th className="px-3 py-2">Ticker</th>
                <th className="px-3 py-2">Screen</th>
                <th className="px-3 py-2">3Y</th>
                <th className="px-3 py-2">OCF</th>
                <th className="px-3 py-2">Tier</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.ticker}
                  onClick={() => setOpen(r.ticker)}
                  className={cn(
                    "cursor-pointer border-t border-line",
                    open === r.ticker ? "bg-line/60" : "hover:bg-panel",
                  )}
                >
                  <td className="px-3 py-2 text-muted">{r.rank}</td>
                  <td className="px-3 py-2">
                    <span className="text-cyan">{r.ticker}</span>
                    <span className="ml-2 text-muted">{r.job}</span>
                  </td>
                  <td className="px-3 py-2">{r.screen}</td>
                  <td className="px-3 py-2 tabular-nums">{r.y3}</td>
                  <td className="px-3 py-2">{r.ocf}</td>
                  <td className={cn("px-3 py-2", r.tier === 1 ? "text-up" : r.tier === 3 ? "text-down" : "text-yellow")}>
                    {r.tier}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="rounded-md border border-line bg-panel p-5">
          <p className="stamp text-[10px] text-cyan">
            #{row.rank} · {row.screen.toUpperCase()} · TIER {row.tier}
          </p>
          <h2 className="mt-2 font-mono text-2xl">{row.ticker}</h2>
          <p className="mt-1 font-sans text-sm text-muted">{row.name}</p>
          <p className="mt-4 font-sans text-sm leading-relaxed">{row.desk}</p>
          <p className="mt-4 font-mono text-[11px] text-muted">
            {row.sleeve} · {row.wt} · 3Y {row.y3} · OCF {row.ocf}
          </p>
          {row.ticker === "WNRG" || row.ticker === "IOGP" ? (
            <Link to="/learn/derrick" className="mt-4 inline-block stamp text-[11px] text-accent">
              OPEN DERRICK →
            </Link>
          ) : null}
        </aside>
      </div>

      <p className="max-w-2xl font-sans text-sm text-muted">
        IWVL absorbing VWRP is the only move that does not add a line. WNRG is the
        largest named hole and the loudest number. FLOT is a gate.{" "}
        <Link to="/learn/prime2" className="text-accent hover:text-fg">
          OPEN PRIME II →
        </Link>
      </p>
    </div>
  );
}
