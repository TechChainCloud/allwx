import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BACKTEST,
  CANDIDATE_TABLE,
  HONEST,
  MONTE,
  NEVER,
  PHASES,
  SLEEVE_PRINTS,
  projectBook,
} from "@/lib/lab";
import {
  TWENTY,
  TWENTY_ASOF,
  TWENTY_HOLES,
  TWENTY_NAME,
  TWENTY_PRINCIPLES,
  TWENTY_REJECTS,
  TWENTY_RULE,
  TWENTY_SLEEVES,
  TWENTY_VS_HOUSE,
  sumTwenty,
} from "@/lib/twenty";
import {
  CONTRIB_ASOF,
  CONTRIB_CAGR,
  CONTRIB_CASES,
  CONTRIB_NOTE,
  CONTRIB_PHASES_C4,
  CONTRIB_PHASES_C5,
  CONTRIB_RULES,
} from "@/lib/contrib";
import { useBook } from "@/store/book";
import { usePlayer } from "@/store/player";

export const Route = createFileRoute("/lab")({ component: LabPage });

const TABS = ["HONEST", "BACKTEST", "FAN", "PHASES", "PATHS", "TWENTY", "GATES", "TARGETS"] as const;
type Tab = (typeof TABS)[number];

function LabPage() {
  const [tab, setTab] = useState<Tab>("HONEST");
  const play = usePlayer((s) => s.play);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        LAB · {HONEST.asof} · TEACHING TAPE
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">Numbers without the costume.</h1>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted">
        Weighted classroom versus a world tracker. Twenty-year proxy backtest.
        A contribution fan. Four phases triggered by book size. A twenty-line
        scale sketch. Targets you can type. Not a live NAV. Not a promise.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button size="sm" onClick={() => play("honest-numbers")}>
          PLAY EP 10
        </Button>
        <Button size="sm" variant="outline" onClick={() => play("years-that-paid")}>
          PLAY EP 11
        </Button>
        <Link to="/house" className="inline-flex h-11 items-center font-mono text-sm text-accent">
          OPEN HOUSE →
        </Link>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`h-11 rounded-sm px-3 font-mono text-xs ${
              tab === t ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "HONEST" && <Honest />}
      {tab === "BACKTEST" && <Backtest />}
      {tab === "FAN" && <Fan />}
      {tab === "PHASES" && <Phases />}
      {tab === "PATHS" && <Paths />}
      {tab === "TWENTY" && <Twenty />}
      {tab === "GATES" && <Gates />}
      {tab === "TARGETS" && <Targets />}
    </div>
  );
}

function Honest() {
  return (
    <section className="mt-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat k="CLASSROOM YTD" v={`${HONEST.invictusYtd}%`} d="Weighted estimate" />
        <Stat k="IWDA YTD" v={`${HONEST.iwdaYtd}%`} d="One fund, one room" />
        <Stat k="GAP" v={`${HONEST.gapBp}bp`} d="Reflation tax on insurance" />
        <Stat k="BOOK IN THE BRIEF" v={`£${HONEST.book}`} d="Scale is the plot" />
      </div>
      <p className="mt-4 font-sans text-sm leading-relaxed text-muted">{HONEST.note}</p>
      <div className="mt-6 overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[640px] text-left font-mono text-xs">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">Line</th>
              <th className="px-3 py-2">Job</th>
              <th className="px-3 py-2">YTD</th>
              <th className="px-3 py-2">3Y</th>
            </tr>
          </thead>
          <tbody>
            {SLEEVE_PRINTS.map((s) => (
              <tr key={s.ticker} className="border-t border-line">
                <td className="px-3 py-2 text-cyan">{s.ticker}</td>
                <td className="px-3 py-2">{s.job}</td>
                <td className={`px-3 py-2 tabular-nums ${s.ytd >= 0 ? "text-up" : "text-down"}`}>
                  {s.ytd.toFixed(2)}%
                </td>
                <td className="px-3 py-2 tabular-nums text-muted">
                  {s.y3 != null ? `${s.y3.toFixed(2)}%` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="mt-6 space-y-2 font-sans text-sm leading-relaxed text-muted">
        <li>The machine lagged a world tracker this year. That is the design in a reflation where residual claims are the paying job.</li>
        <li>Three-year gold at +109% is the other sentence. Insurance is only unemployed until it is not.</li>
        <li>On a small book most operational precision is smaller than a spread. Contribution direction is the rebalance. The framework is still the rehearsal for a larger book.</li>
      </ul>
    </section>
  );
}

function Backtest() {
  return (
    <section className="mt-8">
      <p className="max-w-3xl font-sans text-sm leading-relaxed text-muted">{BACKTEST.caveat}</p>
      <div className="mt-5 overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[800px] text-left font-mono text-xs">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">Book</th>
              <th className="px-3 py-2">Ann</th>
              <th className="px-3 py-2">Vol</th>
              <th className="px-3 py-2">Worst</th>
              <th className="px-3 py-2">Best</th>
              <th className="px-3 py-2">Sharpe</th>
              <th className="px-3 py-2">20Y cum</th>
            </tr>
          </thead>
          <tbody>
            {BACKTEST.stats.map((s) => (
              <tr key={s.name} className="border-t border-line">
                <td className="px-3 py-2 text-cyan">{s.name}</td>
                <td className="px-3 py-2 tabular-nums">{s.ann}%</td>
                <td className="px-3 py-2 tabular-nums">{s.vol}%</td>
                <td className="px-3 py-2 tabular-nums text-down">{s.worst}%</td>
                <td className="px-3 py-2 tabular-nums text-up">{s.best}%</td>
                <td className="px-3 py-2 tabular-nums">{s.sharpe}</td>
                <td className="px-3 py-2 tabular-nums">+{s.cum}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <YearChart />
      <div className="mt-6 overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[880px] text-left font-mono text-[11px]">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">Year</th>
              <th className="px-3 py-2">ALLWX</th>
              <th className="px-3 py-2">Equity</th>
              <th className="px-3 py-2">60/40</th>
              <th className="px-3 py-2">Gold £</th>
              <th className="px-3 py-2">BCOM</th>
              <th className="px-3 py-2">Long UST</th>
              <th className="px-3 py-2">Winner</th>
            </tr>
          </thead>
          <tbody>
            {BACKTEST.years.map((r) => (
              <tr key={r.y} className="border-t border-line">
                <td className="px-3 py-2 text-cyan">{r.y}</td>
                <td className={num(r.aw)}>{fmt(r.aw)}</td>
                <td className={num(r.eq)}>{fmt(r.eq)}</td>
                <td className={num(r.s64)}>{fmt(r.s64)}</td>
                <td className={num(r.gold)}>{fmt(r.gold)}</td>
                <td className={num(r.com)}>{fmt(r.com)}</td>
                <td className={num(r.long)}>{fmt(r.long)}</td>
                <td className="px-3 py-2">{r.win}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="mt-6 space-y-2">
        {BACKTEST.lessons.map((l) => (
          <li key={l} className="border-l-2 border-accent pl-3 font-sans text-sm leading-relaxed">
            {l}
          </li>
        ))}
      </ul>
    </section>
  );
}

function YearChart() {
  const w = 720;
  const h = 180;
  const pad = 16;
  const years = BACKTEST.years;
  const min = Math.min(...years.flatMap((y) => [y.aw, y.eq])) - 2;
  const max = Math.max(...years.flatMap((y) => [y.aw, y.eq])) + 2;
  const x = (i: number) => pad + (i * (w - pad * 2)) / (years.length - 1);
  const y = (v: number) => pad + ((max - v) * (h - pad * 2)) / (max - min);
  const path = (key: "aw" | "eq") =>
    years.map((row, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(row[key]).toFixed(1)}`).join(" ");
  const zero = y(0);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-6 w-full rounded-md border border-line bg-panel">
      <line x1={pad} x2={w - pad} y1={zero} y2={zero} stroke="currentColor" className="text-faint" strokeDasharray="3 3" />
      <path d={path("eq")} fill="none" stroke="#8be9fd" strokeWidth="1.5" />
      <path d={path("aw")} fill="none" stroke="#ff9900" strokeWidth="1.8" />
      <text x={pad} y={14} className="fill-accent" fontSize="10" fontFamily="IBM Plex Mono">
        ALLWX
      </text>
      <text x={70} y={14} className="fill-cyan" fontSize="10" fontFamily="IBM Plex Mono">
        EQUITY
      </text>
    </svg>
  );
}

function Fan() {
  const max = MONTE.fan[0].value;
  return (
    <section className="mt-8">
      <p className="max-w-3xl font-sans text-sm leading-relaxed text-muted">{MONTE.caveat}</p>
      <p className="mt-3 font-mono text-[11px] text-muted">
        START £{MONTE.start} · £{MONTE.monthly}/MO · {MONTE.years}Y · MEAN {MONTE.mean}% · VOL {MONTE.vol}% ·{" "}
        {MONTE.paths.toLocaleString()} PATHS
      </p>
      <ul className="mt-5 space-y-2">
        {MONTE.fan.map((f) => (
          <li key={f.p}>
            <div className="mb-1 flex justify-between font-mono text-[11px]">
              <span className="text-cyan">
                {f.p} · {f.label}
              </span>
              <span className="tabular-nums">£{f.value.toLocaleString("en-GB")}</span>
            </div>
            <div className="h-2 bg-bg-2">
              <div
                className={`h-full ${f.p === "P50" ? "bg-accent" : "bg-cyan/50"}`}
                style={{ width: `${(f.value / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {MONTE.crossings.map((c) => (
          <article key={c.gate} className="rounded-md border border-line bg-panel p-4">
            <p className="font-mono text-sm text-accent">{c.gate}</p>
            <p className="mt-1 font-mono text-[11px] text-cyan">{c.when}</p>
            <p className="mt-2 font-sans text-sm text-muted">{c.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Phases() {
  const [id, setId] = useState(PHASES[0].id);
  const p = PHASES.find((x) => x.id === id)!;
  return (
    <section className="mt-8">
      <div className="flex flex-wrap gap-2">
        {PHASES.map((x) => (
          <button
            key={x.id}
            onClick={() => setId(x.id)}
            className={`h-11 rounded-sm px-3 font-mono text-xs ${
              id === x.id ? "bg-cyan text-bg" : "bg-panel text-fg hover:bg-line"
            }`}
          >
            {x.name.toUpperCase()} · {x.band}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Stat k="LINES" v={String(p.lines)} />
        <Stat k="TER" v={p.ter} />
        <Stat k="GROWTH" v={`${p.growth}%`} />
        <Stat k="REAL" v={`${p.real}%`} />
        <Stat k="DEFENSIVE" v={`${p.def}%`} />
      </div>
      <p className="mt-4 font-sans text-sm">{p.action}</p>
      <p className="mt-1 font-mono text-[11px] text-muted">{p.hedged}</p>
      <div className="mt-5 overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[720px] text-left font-mono text-xs">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">Ticker</th>
              <th className="px-3 py-2">Line</th>
              <th className="px-3 py-2">W</th>
              <th className="px-3 py-2">TER</th>
              <th className="px-3 py-2">FX</th>
              <th className="px-3 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {p.rows.map((r) => (
              <tr key={r.ticker} className="border-t border-line">
                <td className="px-3 py-2 text-cyan">{r.ticker}</td>
                <td className="px-3 py-2">
                  {r.name}
                  {r.flag === "new" && <span className="ml-2 text-up">NEW</span>}
                  {r.flag === "cut" && <span className="ml-2 text-yellow">TRIM</span>}
                </td>
                <td className="px-3 py-2 tabular-nums">{r.w}%</td>
                <td className="px-3 py-2 tabular-nums text-muted">{r.ter}%</td>
                <td className="px-3 py-2 text-muted">{r.fx}</td>
                <td className="px-3 py-2">{r.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="mt-6 space-y-2">
        {NEVER.map((n) => (
          <li key={n} className="border-l-2 border-down pl-3 font-sans text-sm">
            {n}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Gates() {
  return (
    <section className="mt-8">
      <p className="max-w-2xl font-sans text-sm text-muted">
        Five-year candidate tape from the session. Sharpe uses a 3.5 percent
        cash hurdle. Teaching ranks, not a buy list.
      </p>
      <div className="mt-5 overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[860px] text-left font-mono text-[11px]">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">Ticker</th>
              <th className="px-3 py-2">5Y ann</th>
              <th className="px-3 py-2">Vol</th>
              <th className="px-3 py-2">Max DD</th>
              <th className="px-3 py-2">Sharpe</th>
              <th className="px-3 py-2">Mark</th>
              <th className="px-3 py-2">Why</th>
            </tr>
          </thead>
          <tbody>
            {CANDIDATE_TABLE.map((c) => (
              <tr key={c.ticker} className="border-t border-line">
                <td className="px-3 py-2 text-cyan">
                  {c.ticker}
                  <span className="mt-0.5 block text-[10px] text-muted">{c.name}</span>
                </td>
                <td className={num(c.ret5)}>{c.ret5.toFixed(2)}%</td>
                <td className="px-3 py-2 tabular-nums">{c.vol5.toFixed(2)}%</td>
                <td className="px-3 py-2 tabular-nums text-down">{c.dd5}%</td>
                <td className="px-3 py-2 tabular-nums">{c.sharpe.toFixed(2)}</td>
                <td
                  className={
                    c.mark === "ADD"
                      ? "text-up"
                      : c.mark === "VETO"
                        ? "text-down"
                        : c.mark === "WAIT"
                          ? "text-yellow"
                          : "text-muted"
                  }
                >
                  {c.mark}
                </td>
                <td className="px-3 py-2 font-sans text-[12px] text-muted">{c.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Paths() {
  const gbp = (n: number) =>
    "£" + Math.round(n).toLocaleString("en-GB");
  return (
    <section className="mt-8 space-y-8">
      <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted">{CONTRIB_NOTE}</p>
      <p className="font-mono text-[11px] text-cyan">
        {CONTRIB_ASOF} · {CONTRIB_CAGR.toFixed(2)}% CAGR · EDUCATION ONLY
      </p>
      <div className="overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[720px] text-left font-mono text-[11px]">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">Case</th>
              <th className="px-3 py-2">Yrs</th>
              <th className="px-3 py-2">Invested</th>
              <th className="px-3 py-2">Terminal</th>
              <th className="px-3 py-2">ISA</th>
            </tr>
          </thead>
          <tbody>
            {CONTRIB_CASES.map((c) => (
              <tr key={c.id} className="border-t border-line align-top">
                <td className="px-3 py-2">
                  <span className="text-cyan">{c.name}</span>
                  <p className="mt-1 font-sans text-[12px] text-muted">{c.structure}</p>
                </td>
                <td className="px-3 py-2 tabular-nums">{c.years}</td>
                <td className="px-3 py-2 tabular-nums">{gbp(c.invested)}</td>
                <td className="px-3 py-2 tabular-nums text-accent">{gbp(c.terminal)}</td>
                <td className="px-3 py-2 font-sans text-[12px] text-muted">{c.isaBreach}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {CONTRIB_CASES.filter((c) => c.id === "c4" || c.id === "c5" || c.id === "c2" || c.id === "flat").map((c) => (
          <article key={c.id} className="rounded-md border border-line bg-panel p-4">
            <p className="font-mono text-xs text-cyan">{c.name.toUpperCase()}</p>
            <p className="mt-1 font-mono text-[11px] text-muted">Realism {c.realistic}</p>
            <p className="mt-2 font-sans text-sm leading-relaxed">{c.verdict}</p>
          </article>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="font-mono text-sm text-accent">CASE 4 PHASES</h2>
          <ul className="mt-3 space-y-2">
            {CONTRIB_PHASES_C4.map((p) => (
              <li key={p.phase} className="rounded-md border border-line bg-panel p-3 font-mono text-[11px]">
                P{p.phase} · {p.when}
                <br />
                {p.monthly}
                <br />
                <span className="text-muted">
                  In {gbp(p.invested)} · out {gbp(p.value)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-sm text-accent">CASE 5 PHASES</h2>
          <ul className="mt-3 space-y-2">
            {CONTRIB_PHASES_C5.map((p) => (
              <li key={p.phase} className="rounded-md border border-line bg-panel p-3 font-mono text-[11px]">
                P{p.phase} · {p.when}
                <br />
                {p.monthly}
                <br />
                <span className="text-muted">
                  In {gbp(p.invested)} · out {gbp(p.value)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="space-y-2">
        {CONTRIB_RULES.map((r) => (
          <li key={r} className="font-sans text-sm leading-relaxed text-muted">
            {r}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Twenty() {
  const design = sumTwenty("design20");
  const listed = sumTwenty("live18");
  return (
    <section className="mt-8 space-y-8">
      <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted">
        {TWENTY_NAME}. Design dated {TWENTY_ASOF}. Not the live house. Not the
        classroom seven. A later-book sketch that buys factor granularity,
        curve geography, and commodity specificity — and pays for them with
        gold below the teaching floor and with INXG on probation.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat k="DESIGN 20" v={`${design.toFixed(0)}%`} d="Original vector" />
        <Stat k="LISTED 18" v={`${listed.toFixed(0)}%`} d="VVAL and TPSA dropped" />
        <Stat k="HOLE" v={`${(100 - listed).toFixed(0)}pp`} d="Does not confirm" />
        <Stat k="THEME" v="5%" d="Three tickets" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TWENTY_SLEEVES.map((s) => (
          <article key={s.id} className="rounded-md border border-line bg-panel p-4">
            <p className="font-mono text-[11px] text-cyan">{s.label.toUpperCase()}</p>
            <p className="mt-1 font-mono text-lg tabular-nums">
              {s.live}% <span className="text-xs text-muted">listed</span>
              <span className="ml-2 text-xs text-faint">des {s.design}</span>
            </p>
            <p className="mt-2 font-sans text-sm text-muted">{s.job}</p>
          </article>
        ))}
      </div>
      <div className="overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[720px] text-left font-mono text-[11px]">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">Ticker</th>
              <th className="px-3 py-2">Sleeve</th>
              <th className="px-3 py-2">20</th>
              <th className="px-3 py-2">18</th>
              <th className="px-3 py-2">1Y</th>
              <th className="px-3 py-2">Job</th>
            </tr>
          </thead>
          <tbody>
            {TWENTY.map((r) => (
              <tr key={r.ticker} className="border-t border-line">
                <td className="px-3 py-2 text-cyan">{r.ticker}</td>
                <td className="px-3 py-2 text-muted">{r.sleeve}</td>
                <td className="px-3 py-2 tabular-nums">{r.design20}</td>
                <td className={`px-3 py-2 tabular-nums ${r.live18 === 0 ? "text-down" : ""}`}>
                  {r.live18 === 0 ? "—" : r.live18}
                </td>
                <td className="px-3 py-2 tabular-nums text-muted">
                  {r.ret1y == null ? "—" : `${r.ret1y.toFixed(1)}%`}
                </td>
                <td className="px-3 py-2 font-sans text-[12px] text-muted">{r.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {TWENTY_HOLES.map((h) => (
          <article key={h.title} className="rounded-md border border-line bg-panel p-4">
            <p className="font-mono text-sm text-accent">{h.title}</p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{h.body}</p>
          </article>
        ))}
      </div>
      <div className="overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[560px] text-left font-mono text-xs">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">Dim</th>
              <th className="px-3 py-2">Classroom</th>
              <th className="px-3 py-2">House</th>
              <th className="px-3 py-2">Twenty</th>
            </tr>
          </thead>
          <tbody>
            {TWENTY_VS_HOUSE.map((r) => (
              <tr key={r.dim} className="border-t border-line">
                <td className="px-3 py-2 text-cyan">{r.dim}</td>
                <td className="px-3 py-2 font-sans text-[12px]">{r.classroom}</td>
                <td className="px-3 py-2 font-sans text-[12px]">{r.house}</td>
                <td className="px-3 py-2 font-sans text-[12px]">{r.twenty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-3">
        {TWENTY_PRINCIPLES.map((p) => (
          <article key={p.title} className="rounded-md border border-line bg-panel p-4">
            <p className="font-mono text-sm text-cyan">{p.title}</p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{p.body}</p>
          </article>
        ))}
      </div>
      <div>
        <h2 className="font-mono text-sm text-accent">REJECTED</h2>
        <ul className="mt-3 space-y-2">
          {TWENTY_REJECTS.map((r) => (
            <li key={r} className="font-sans text-sm text-muted">
              {r}
            </li>
          ))}
        </ul>
      </div>
      <p className="border-l-2 border-accent pl-3 font-sans text-sm leading-relaxed">{TWENTY_RULE}</p>
      <p className="font-sans text-sm text-muted">
        Live book stays on{" "}
        <Link to="/house" className="text-accent hover:underline">
          HOUSE
        </Link>
        . Classroom object stays on{" "}
        <Link to="/pie" className="text-cyan hover:underline">
          MIX
        </Link>
        .
      </p>
    </section>
  );
}

function Targets() {
  const start = useBook((s) => s.start);
  const monthly = useBook((s) => s.monthly);
  const years = useBook((s) => s.years);
  const ready = useBook((s) => s.ready);
  useEffect(() => {
    useBook.getState().rehydrate();
  }, []);
  const shownStart = ready ? start : 710;
  const shownMonthly = ready ? monthly : 200;
  const shownYears = ready ? years : 20;
  const mid = useMemo(
    () => projectBook(shownStart, shownMonthly, shownYears, MONTE.mean),
    [shownStart, shownMonthly, shownYears],
  );
  const slow = useMemo(
    () => projectBook(shownStart, shownMonthly, shownYears, 6),
    [shownStart, shownMonthly, shownYears],
  );
  const phase =
    mid.value >= 100000 ? "Phase 3 gate in view" : mid.value >= 50000 ? "Phase 2 territory" : mid.value >= 10000 ? "Phase 1 eligible" : "Phase 0 · fund it";

  return (
    <section className="mt-8">
      <p className="max-w-2xl font-sans text-sm text-muted">
        Teaching projector. Compound the classroom mean, or a slower 6 percent.
        Saved on this device only. Not a personal plan.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <Field
          label="STARTING BOOK £"
          value={shownStart}
          min={100}
          max={20000}
          step={10}
          onChange={(n) => useBook.getState().setStart(n)}
        />
        <Field
          label="MONTHLY £"
          value={shownMonthly}
          min={0}
          max={2000}
          step={10}
          onChange={(n) => useBook.getState().setMonthly(n)}
        />
        <Field
          label="YEARS"
          value={shownYears}
          min={1}
          max={40}
          step={1}
          onChange={(n) => useBook.getState().setYears(n)}
        />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat k="CONTRIBUTED" v={`£${Math.round(mid.contrib).toLocaleString("en-GB")}`} />
        <Stat k={`AT ${MONTE.mean}%`} v={`£${Math.round(mid.value).toLocaleString("en-GB")}`} />
        <Stat k="AT 6%" v={`£${Math.round(slow.value).toLocaleString("en-GB")}`} />
        <Stat k="GATE" v={phase} />
      </div>
      <p className="mt-5 font-sans text-sm leading-relaxed text-muted">
        Doubling the monthly contribution moves the median more than any sleeve
        debate available on a starter book. Set the date. Keep the date. File
        the principle.
      </p>
    </section>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block rounded-md border border-line bg-panel p-4">
      <span className="font-mono text-[10px] text-muted">{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="mt-2 w-full bg-transparent font-mono text-2xl tabular-nums text-fg outline-none"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--color-accent)]"
      />
    </label>
  );
}

function Stat({ k, v, d }: { k: string; v: string; d?: string }) {
  return (
    <div className="rounded-md border border-line bg-panel p-4">
      <p className="font-mono text-[10px] text-muted">{k}</p>
      <p className="mt-1 font-mono text-lg tabular-nums text-fg">{v}</p>
      {d && <p className="mt-1 font-mono text-[10px] text-faint">{d}</p>}
    </div>
  );
}

function fmt(n: number) {
  return `${n > 0 ? "+" : ""}${n.toFixed(1)}%`;
}
function num(n: number) {
  return `px-3 py-2 tabular-nums ${n > 0 ? "text-up" : n < 0 ? "text-down" : "text-muted"}`;
}
