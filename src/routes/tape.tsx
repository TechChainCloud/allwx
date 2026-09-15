import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { JobMark } from "@/components/marks";
import { JOBS, WEATHERS, jobById } from "@/lib/content";
import {
  DESK_ASOF,
  DESK_CLOCK,
  DESK_EVENT,
  FOMC,
  RHYTHM,
  SEVEN_TONIGHT,
  WATCH,
} from "@/lib/ops";
import {
  SESSION_CHAIN,
  SESSION_CLOCK,
  SESSION_HEADLINE,
  SESSION_LINES,
  SESSION_NEWS,
  SESSION_TRIGGERS,
} from "@/lib/session";
import {
  CORRELATIONS,
  FUNCTIONS,
  SHOCKS,
  STAGES,
  TAPE,
  TAPE_ASOF,
  TAPE_OVERLAY,
  TAPE_REGIME,
  TAPE_STAGE,
  type Shock,
} from "@/lib/tape";

export const Route = createFileRoute("/tape")({ component: TapePage });

function TapePage() {
  const [open, setOpen] = useState<string | null>(TAPE[0]?.mnemonic ?? null);
  const [shock, setShock] = useState<Shock>(SHOCKS[1]);
  const room = WEATHERS.find((w) => w.id === shock.room)!;
  const print = TAPE.find((p) => p.mnemonic === open) ?? TAPE[0];

  const sleeveState = useMemo(() => {
    const paid = new Set(room.paid);
    const fined = new Set(room.fined);
    return JOBS.map((j) => ({
      job: j,
      state: paid.has(j.id) ? "PAID" : fined.has(j.id) ? "FINED" : "FLAT",
    }));
  }, [room]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        TAPE · {TAPE_ASOF} · {DESK_CLOCK} · READ ONLY
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">Measurement system</h1>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted">
        {SESSION_HEADLINE} Not a live B-PIPE. Not a ticket. Next print: Thursday CPI.
        Then 16 Sep FOMC. Then 3 Oct. See HOUSE → PLAN.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat k="STAGE" v={TAPE_STAGE} />
        <Stat k="REGIME" v={TAPE_REGIME.toUpperCase()} />
        <Stat k="TAIL" v={TAPE_OVERLAY} />
        <Stat k="NEXT EVENT" v={DESK_EVENT} />
      </div>
      <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-muted">{SESSION_CHAIN}</p>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">TRIGGERS · {SESSION_CLOCK}</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {SESSION_TRIGGERS.map((t) => (
            <article key={t.name} className="rounded-md border border-line bg-panel p-4">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-mono text-sm text-cyan">{t.name.toUpperCase()}</p>
                <p
                  className={`font-mono text-[11px] ${
                    t.status === "ON" ? "text-accent" : t.status === "WATCH" ? "text-yellow" : "text-muted"
                  }`}
                >
                  {t.status}
                </p>
              </div>
              <p className="mt-1 font-mono text-[11px] text-muted">
                {t.object} · {t.now}
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{t.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">SESSION MARKS · 1D</h2>
        <p className="mt-2 font-sans text-sm text-muted">
          Price, not drift. Drift needs T212 units before 3 Oct. Education only.
        </p>
        <div className="mt-4 overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[640px] text-left font-mono text-[11px]">
            <thead className="bg-bg-2 text-[10px] uppercase text-muted">
              <tr>
                <th className="px-3 py-2">Line</th>
                <th className="px-3 py-2">Wt</th>
                <th className="px-3 py-2">1D</th>
                <th className="px-3 py-2">Signal</th>
              </tr>
            </thead>
            <tbody>
              {SESSION_LINES.map((r) => (
                <tr key={r.ticker} className="border-t border-line">
                  <td className="px-3 py-2 text-cyan">{r.ticker}</td>
                  <td className="px-3 py-2 tabular-nums">{r.w.toFixed(1)}</td>
                  <td className={`px-3 py-2 tabular-nums ${r.day >= 0 ? "text-up" : "text-down"}`}>
                    {r.day >= 0 ? "+" : ""}
                    {r.day.toFixed(2)}%
                  </td>
                  <td className="px-3 py-2 font-sans text-[12px] text-muted">{r.signal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">SESSION NEWS</h2>
        <ul className="mt-4 space-y-2">
          {SESSION_NEWS.map((n) => (
            <li key={n.k} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-xs text-accent">{n.k}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed">{n.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">SEVEN QUESTIONS · TONIGHT</h2>
        <ol className="mt-4 space-y-2">
          {SEVEN_TONIGHT.map((q) => (
            <li key={q.n} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-sm text-accent">
                Q{q.n} · {q.q}
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed">{q.answer}</p>
              <p className="mt-2 font-mono text-[11px] text-muted">VS AM · {q.vsMorning}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">WATCH LEVELS</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {WATCH.map((w) => (
            <article key={w.mnemonic} className="rounded-md border border-line bg-panel p-4">
              <div className="flex items-baseline justify-between gap-3 font-mono text-sm">
                <span className="text-cyan">{w.mnemonic}</span>
                <span className="tabular-nums">{w.now}</span>
              </div>
              <p className="mt-1 font-mono text-[11px] text-muted">
                {w.green ? `GREEN ${w.green}` : ""}
                {w.green && w.pain ? " · " : ""}
                {w.pain ? `PAIN ${w.pain}` : ""}
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{w.note}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[720px] border-collapse text-left font-mono text-xs">
          <thead className="bg-bg-2 text-[10px] uppercase tracking-wide text-muted">
            <tr>
              <th className="px-3 py-2">FN</th>
              <th className="px-3 py-2">Mnemonic</th>
              <th className="px-3 py-2">Print</th>
              <th className="px-3 py-2">Chg</th>
              <th className="px-3 py-2">Reads</th>
            </tr>
          </thead>
          <tbody>
            {TAPE.map((p) => (
              <tr
                key={p.mnemonic}
                onClick={() => setOpen(p.mnemonic)}
                className={`cursor-pointer border-t border-line ${
                  open === p.mnemonic ? "bg-line/60" : "hover:bg-panel"
                }`}
              >
                <td className="px-3 py-2 text-cyan">{p.fn}</td>
                <td className="px-3 py-2 text-fg">{p.mnemonic}</td>
                <td className="px-3 py-2 tabular-nums">
                  {p.value}
                  {p.unit}
                </td>
                <td
                  className={`px-3 py-2 tabular-nums ${
                    p.dir === "up" ? "text-up" : p.dir === "down" ? "text-down" : "text-muted"
                  }`}
                >
                  {p.chg}
                </td>
                <td className="px-3 py-2 text-muted">{p.reads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {print && (
        <aside className="mt-4 rounded-md border border-accent/40 bg-panel p-5">
          <p className="font-mono text-[11px] text-cyan">
            {print.fn} · {print.mnemonic} · {print.name}
          </p>
          <p className="mt-3 font-sans text-sm leading-relaxed">{print.lever}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {print.sleeve.map((id) => (
              <Link
                key={id}
                to="/jobs/$id"
                params={{ id }}
                className="inline-flex items-center gap-1.5 rounded-sm bg-line px-2 py-1 font-mono text-[11px] text-fg hover:text-accent"
              >
                <JobMark id={id} className="size-3.5" />
                {jobById(id).name}
              </Link>
            ))}
          </div>
        </aside>
      )}

      <section className="mt-12">
        <h2 className="font-mono text-2xl">OPERATING RHYTHM</h2>
        <div className="mt-4 overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[640px] text-left font-mono text-xs">
            <thead className="bg-bg-2 text-[10px] uppercase text-muted">
              <tr>
                <th className="px-3 py-2">When</th>
                <th className="px-3 py-2">Action</th>
                <th className="px-3 py-2">Decide?</th>
              </tr>
            </thead>
            <tbody>
              {RHYTHM.map((r) => (
                <tr key={r.when} className="border-t border-line">
                  <td className="px-3 py-2 text-cyan">{r.when}</td>
                  <td className="px-3 py-2">{r.action}</td>
                  <td className="px-3 py-2 text-muted">{r.decide}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">16 SEP FOMC · TEACHING PATHS</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {FOMC.map((f) => (
            <article key={f.path} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-sm text-accent">{f.path}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed">{f.then}</p>
              <p className="mt-3 font-mono text-[11px] text-cyan">{f.act}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 font-sans text-sm text-muted">
          {DESK_ASOF}, {DESK_CLOCK}. Close the brokerage screen. File GTII10 at
          2.44. Set one alarm: GT30 at 5.40. That is tomorrow's first check.
          Protocols live on{" "}
          <Link to="/rules" className="text-accent hover:underline">
            RULES
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">SHOCK THE REGIME</h2>
        <p className="mt-2 max-w-xl font-sans text-sm text-muted">
          Two surprises. Four rooms. Toggle a shock and watch who is paid. PORT
          stress as a thought experiment, not a forecast.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {SHOCKS.map((s) => (
            <button
              key={s.id}
              onClick={() => setShock(s)}
              className={`h-11 rounded-sm px-3 font-mono text-xs ${
                shock.id === s.id ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"
              }`}
            >
              {s.name.toUpperCase()}
            </button>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs text-cyan">
          GROWTH {shock.growth.toUpperCase()} · INFLATION {shock.inflation.toUpperCase()} · ROOM{" "}
          {room.name.toUpperCase()}
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {sleeveState.map(({ job, state }) => (
            <li
              key={job.id}
              className="flex items-center justify-between rounded-md border border-line bg-panel px-3 py-2"
            >
              <span className="flex items-center gap-2 font-mono text-sm">
                <span className="size-2 rounded-full" style={{ background: job.color }} />
                {job.name}
              </span>
              <span
                className={
                  state === "PAID" ? "text-up" : state === "FINED" ? "text-down" : "text-muted"
                }
              >
                {state}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">FUNCTIONS</h2>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {FUNCTIONS.map((f) => (
            <article key={f.fn} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-sm text-accent">
                {f.fn} {"<GO>"} <span className="text-muted">· {f.name}</span>
              </p>
              <p className="mt-2 font-sans text-sm text-fg">{f.use}</p>
              <p className="mt-2 font-sans text-xs text-muted">{f.allwx}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">SHORT CYCLE · 6 STAGES</h2>
        <div className="mt-4 overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[640px] text-left font-mono text-xs">
            <thead className="bg-bg-2 text-[10px] uppercase text-muted">
              <tr>
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">Stage</th>
                <th className="px-3 py-2">Curve</th>
                <th className="px-3 py-2">Paid</th>
                <th className="px-3 py-2">Fined</th>
              </tr>
            </thead>
            <tbody>
              {STAGES.map((s) => (
                <tr
                  key={s.n}
                  className={`border-t border-line ${s.n === 3 ? "bg-line/40" : ""}`}
                >
                  <td className="px-3 py-2 text-accent">{s.n}</td>
                  <td className="px-3 py-2">{s.name}</td>
                  <td className="px-3 py-2 text-cyan">{s.curve}</td>
                  <td className="px-3 py-2 text-up">{s.paid}</td>
                  <td className="px-3 py-2 text-down">{s.fined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">CORRELATIONS THAT LIE</h2>
        <div className="mt-4 space-y-2">
          {CORRELATIONS.map((c) => (
            <article key={c.when} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-sm">
                <span className="text-cyan">IF</span> {c.when}{" "}
                <span className="text-accent">THEN</span> {c.then}
              </p>
              <p className="mt-2 font-sans text-xs text-muted">
                {c.strength}. Breaks when: {c.breaks}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-md border border-line bg-panel p-4">
      <p className="font-mono text-[10px] text-muted">{k}</p>
      <p className="mt-1 font-mono text-sm text-fg">{v}</p>
    </div>
  );
}
