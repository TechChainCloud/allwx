import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { JOBS, jobById } from "@/lib/content";
import {
  BASE_WEIGHTS,
  CANDIDATES,
  DRAWDOWN,
  DRIFT_RULES,
  GATES,
  META,
  MILESTONES,
  POSTURES,
  SCORECARD,
  SKELETON_GAPS,
  SKELETON_RIGHT,
  weightsFor,
  type PostureId,
} from "@/lib/ops";
import { HIERARCHY } from "@/lib/brief";

export const Route = createFileRoute("/rules")({ component: RulesPage });

const TABS = [
  "SCORE",
  "HIER",
  "DRIFT",
  "STAGE",
  "DRAWDOWN",
  "GATES",
  "SCALE",
] as const;
type Tab = (typeof TABS)[number];

function RulesPage() {
  const [tab, setTab] = useState<Tab>("SCORE");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        RULES · TWO CLOCKS
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">
        The machine runs. Upgrades wait.
      </h1>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted">
        Weight changes are mechanical and monthly. New instruments are rare and
        scale-triggered. Conflating the two clocks is how compounding dies.
        Classroom object — not a personal plan, not a live mandate.
      </p>

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

      {tab === "SCORE" && <ScoreTab />}
      {tab === "HIER" && <HierTab />}
      {tab === "DRIFT" && <DriftTab />}
      {tab === "STAGE" && <StageTab />}
      {tab === "DRAWDOWN" && <DrawdownTab />}
      {tab === "GATES" && <GatesTab />}
      {tab === "SCALE" && <ScaleTab />}

      <p className="mt-12 max-w-3xl font-sans text-sm leading-relaxed text-muted">
        {META}
      </p>
    </div>
  );
}

function HierTab() {
  return (
    <section className="mt-8 space-y-3">
      <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted">
        Six-priority stack. Higher number does not fire if a higher priority already claimed the cash. Walk-back currently inactive.
      </p>
      {HIERARCHY.map((h) => (
        <article key={h.n} className="rounded-md border border-line bg-panel p-4">
          <p className="font-mono text-xs text-cyan">
            {h.n} · {h.name.toUpperCase()}
          </p>
          <p className="mt-2 font-sans text-sm leading-relaxed">{h.rule}</p>
          <p className="mt-2 font-mono text-[11px] text-muted">{h.now}</p>
        </article>
      ))}
    </section>
  );
}

function ScoreTab() {
  const total = SCORECARD.reduce((a, d) => a + d.score, 0);
  const max = SCORECARD.reduce((a, d) => a + d.of, 0);
  const rating = Math.round((total / max) * 100) / 10;

  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-mono text-2xl">CLASSROOM SCORE</h2>
        <p className="font-mono text-3xl tabular-nums text-accent">
          {rating.toFixed(1)}
          <span className="text-sm text-muted"> / 10</span>
        </p>
      </div>
      <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
        Architecture is already a nine. The gap to ten is process, rules, and
        scale — not a new theme fund.
      </p>
      <div className="mt-5 space-y-3">
        {SCORECARD.map((d) => (
          <article key={d.dim} className="rounded-md border border-line bg-panel p-4">
            <div className="flex items-baseline justify-between gap-3 font-mono text-sm">
              <span className="text-cyan">{d.dim.toUpperCase()}</span>
              <span className="tabular-nums text-accent">
                {d.score}/{d.of}
              </span>
            </div>
            <div className="mt-2 h-1.5 bg-bg-2">
              <div
                className="h-full bg-accent"
                style={{ width: `${(d.score / d.of) * 100}%` }}
              />
            </div>
            <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{d.why}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-mono text-sm text-up">WHAT THE SKELETON GETS RIGHT</h3>
          <ul className="mt-3 space-y-2">
            {SKELETON_RIGHT.map((line) => (
              <li key={line} className="border-l-2 border-up pl-3 font-sans text-sm leading-relaxed">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-sm text-yellow">HONEST GAPS · SCALE-GATED</h3>
          <ul className="mt-3 space-y-2">
            {SKELETON_GAPS.map((line) => (
              <li key={line} className="border-l-2 border-yellow pl-3 font-sans text-sm leading-relaxed">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DriftTab() {
  return (
    <section className="mt-8">
      <h2 className="font-mono text-2xl">TRIGGER A · DRIFT</h2>
      <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
        The only frequent reason to touch a weight. Monthly. On the contribution
        date. ±3pp after new cash has already been pointed at the thin sleeve.
      </p>
      <ol className="mt-5 space-y-3">
        {DRIFT_RULES.map((line, i) => (
          <li key={i} className="flex gap-4 rounded-md border border-line bg-panel p-4">
            <span className="font-mono text-accent">{i + 1}</span>
            <p className="font-sans text-sm leading-relaxed">{line}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 font-mono text-[11px] text-muted">
        Any other reason to change a weight is noise — including a good week in
        commodities and a bad print in gold.
      </p>
    </section>
  );
}

function StageTab() {
  const [id, setId] = useState<PostureId>("base");
  const posture = POSTURES.find((p) => p.id === id)!;
  const w = weightsFor(id);

  return (
    <section className="mt-8">
      <h2 className="font-mono text-2xl">TRIGGER B · CONFIRMED STAGE</h2>
      <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
        A single print does not rotate the book. Three questions, two
        consecutive readings. The machine is slow on purpose.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {POSTURES.filter((p) => p.when !== "Risk protocol").map((p) => (
          <button
            key={p.id}
            onClick={() => setId(p.id)}
            className={`h-11 rounded-sm px-3 font-mono text-[11px] ${
              id === p.id ? "bg-cyan text-bg" : "bg-panel text-fg hover:bg-line"
            }`}
          >
            {p.name.toUpperCase()}
          </button>
        ))}
      </div>
      <article className="mt-5 rounded-md border border-line bg-panel p-5">
        <p className="font-mono text-[11px] text-cyan">{posture.when}</p>
        <h3 className="mt-1 font-mono text-xl">{posture.name}</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed">{posture.confirm}</p>
        <p className="mt-3 border-l-2 border-accent pl-3 font-sans text-sm">{posture.note}</p>
      </article>
      <WeightBars weights={w} />
    </section>
  );
}

function DrawdownTab() {
  const [id, setId] = useState<PostureId>("base");
  const risk = POSTURES.filter((p) => p.when === "Risk protocol" || p.id === "base");
  const w = weightsFor(id);

  return (
    <section className="mt-8">
      <h2 className="font-mono text-2xl">TRIGGER C · DRAWDOWN</h2>
      <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
        Written before the pain. Applied when the lock is hit. A protocol
        written during a drawdown is a rationalisation.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {DRAWDOWN.map((d) => (
          <article key={d.level} className="rounded-md border border-line bg-panel p-4">
            <p className="font-mono text-sm text-accent">{d.level}</p>
            <p className="mt-1 font-mono text-[11px] text-cyan">{d.band}</p>
            <p className="mt-3 font-sans text-sm leading-relaxed">{d.action}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        Simulator · teaching postures
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {risk.map((p) => (
          <button
            key={p.id}
            onClick={() => setId(p.id)}
            className={`h-11 rounded-sm px-3 font-mono text-[11px] ${
              id === p.id ? "bg-down text-fg" : "bg-panel text-fg hover:bg-line"
            }`}
          >
            {p.name.toUpperCase()}
          </button>
        ))}
      </div>
      <WeightBars weights={w} />
    </section>
  );
}

function GatesTab() {
  const [id, setId] = useState(CANDIDATES[0].id);
  const c = CANDIDATES.find((x) => x.id === id)!;

  return (
    <section className="mt-8">
      <h2 className="font-mono text-2xl">ADDING A LINE · FOUR GATES</h2>
      <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
        Fail any one gate and the line does not open. The bar is high on
        purpose.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {GATES.map((g) => (
          <article key={g.id} className="rounded-md border border-line bg-panel p-4">
            <p className="font-mono text-sm text-accent">{g.name.toUpperCase()}</p>
            <p className="mt-2 font-sans text-sm text-up">{g.pass}</p>
            <p className="mt-2 font-sans text-sm text-down">{g.fail}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        Sit a candidate in the gates
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {CANDIDATES.map((x) => (
          <button
            key={x.id}
            onClick={() => setId(x.id)}
            className={`h-11 rounded-sm px-3 font-mono text-[11px] ${
              id === x.id ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"
            }`}
          >
            {x.name.toUpperCase()}
          </button>
        ))}
      </div>
      <article className="mt-5 rounded-md border border-line bg-panel p-5">
        <p className="font-mono text-[11px] text-cyan">
          PHASE {c.phase === 0 ? "VETO" : c.phase} · TARGET {c.target}
        </p>
        <h3 className="mt-1 font-mono text-xl">{c.name}</h3>
        <p className="mt-2 font-sans text-sm text-muted">{c.fundedBy}</p>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {(Object.keys(c.gates) as Array<keyof typeof c.gates>).map((k) => (
            <li
              key={k}
              className={`rounded-sm px-2 py-2 font-mono text-[11px] ${
                c.gates[k] ? "bg-up/15 text-up" : "bg-down/15 text-down"
              }`}
            >
              {k.toUpperCase()} {c.gates[k] ? "PASS" : "FAIL"}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-sans text-sm leading-relaxed">{c.verdict}</p>
      </article>
    </section>
  );
}

function ScaleTab() {
  const stops = [1000, 5000, 10000, 20000, 50000, 100000];
  const [i, setI] = useState(0);
  const book = stops[i];
  const row = useMemo(() => {
    if (book < 5000) return MILESTONES[0];
    if (book === 5000) return MILESTONES[1];
    if (book < 10000) return MILESTONES[2];
    if (book === 10000) return MILESTONES[3];
    if (book < 20000) return MILESTONES[4];
    if (book < 50000) return MILESTONES[5];
    if (book === 50000) return MILESTONES[6];
    if (book < 100000) return MILESTONES[7];
    return MILESTONES[8];
  }, [book]);
  const onePct = (book * 0.01).toFixed(2);
  const extra50 = 50;

  return (
    <section className="mt-8">
      <h2 className="font-mono text-2xl">MILESTONE MAP</h2>
      <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
        Until roughly twenty thousand the contribution decision dwarfs every
        allocation decision. On a small book a one-percent better year is
        £{onePct}. An extra fifty in the debit is £{extra50}. This slider is a
        teaching scale, not the live pad.
      </p>
      <div className="mt-5">
        <input
          type="range"
          min={0}
          max={stops.length - 1}
          step={1}
          value={i}
          onChange={(e) => setI(Number(e.target.value))}
          className="w-full accent-[var(--color-accent)]"
        />
        <div className="mt-2 flex justify-between font-mono text-[10px] text-muted">
          {stops.map((s) => (
            <span key={s}>£{s >= 1000 ? `${s / 1000}k` : s}</span>
          ))}
        </div>
      </div>
      <article className="mt-5 rounded-md border border-accent/40 bg-panel p-5">
        <p className="font-mono text-[11px] text-cyan">{row.band}</p>
        <h3 className="mt-1 font-mono text-2xl tabular-nums">
          £{book.toLocaleString("en-GB")}
        </h3>
        <p className="mt-4 font-sans text-sm">
          <span className="font-mono text-accent">PRIMARY. </span>
          {row.focus}
        </p>
        <p className="mt-2 font-sans text-sm text-muted">
          <span className="font-mono text-cyan">SECONDARY. </span>
          {row.secondary}
        </p>
        <p className="mt-2 font-sans text-sm text-muted">
          <span className="font-mono text-yellow">IGNORE. </span>
          {row.ignore}
        </p>
        <p className="mt-2 font-sans text-sm">
          <span className="font-mono text-up">ACTION. </span>
          {row.action}
        </p>
      </article>
      <div className="mt-6 overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[720px] text-left font-mono text-[11px]">
          <thead className="bg-bg-2 text-muted">
            <tr>
              <th className="px-3 py-2">BAND</th>
              <th className="px-3 py-2">FOCUS</th>
              <th className="px-3 py-2">IGNORE</th>
            </tr>
          </thead>
          <tbody>
            {MILESTONES.map((m) => (
              <tr key={m.band} className="border-t border-line">
                <td className="px-3 py-2 text-cyan">{m.band}</td>
                <td className="px-3 py-2 text-fg">{m.focus}</td>
                <td className="px-3 py-2 text-muted">{m.ignore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 font-mono text-[11px] text-muted">
        Phase 2 additions live on{" "}
        <Link to="/cases" className="text-accent hover:underline">
          CASES
        </Link>{" "}
        as cousins, not as tonight's order ticket.
      </p>
    </section>
  );
}

function WeightBars({ weights }: { weights: Record<string, number> }) {
  return (
    <ul className="mt-5 space-y-2">
      {JOBS.map((j) => {
        const now = weights[j.id] ?? j.weight;
        const base = BASE_WEIGHTS[j.id];
        const delta = now - base;
        return (
          <li key={j.id}>
            <div className="mb-1 flex items-center justify-between font-mono text-[11px]">
              <Link to="/jobs/$id" params={{ id: j.id }} className="hover:text-accent">
                {jobById(j.id).name}
              </Link>
              <span className="tabular-nums text-muted">
                {now}%{" "}
                {delta !== 0 && (
                  <span className={delta > 0 ? "text-up" : "text-down"}>
                    {delta > 0 ? `+${delta}` : delta}
                  </span>
                )}
              </span>
            </div>
            <div className="h-1.5 bg-bg-2">
              <div className="h-full" style={{ width: `${now}%`, background: j.color }} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
