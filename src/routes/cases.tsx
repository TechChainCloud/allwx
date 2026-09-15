import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CASES, EXAMS, SCORE, type CaseId } from "@/lib/cases";
import { JOBS, WEATHERS, jobById } from "@/lib/content";

export const Route = createFileRoute("/cases")({ component: CasesPage });

function CasesPage() {
  const [id, setId] = useState<CaseId>("aw");
  const [room, setRoom] = useState<(typeof WEATHERS)[number]["id"]>("stagflation");
  const cs = CASES.find((c) => c.id === id)!;
  const weather = WEATHERS.find((w) => w.id === room)!;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        CASES · PORT STRESS AS THOUGHT EXPERIMENT
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">Alternative mixes</h1>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted">
        Same four rooms. Different employee lists. The ALLWX classroom is one
        translation of All Weather into an unlevered ISA. The others are
        cousins, slogans, or traps. 2022 is the exam a two-employee firm failed
        in public.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {CASES.map((c) => (
          <button
            key={c.id}
            onClick={() => setId(c.id)}
            className={`h-11 rounded-sm px-3 font-mono text-xs ${
              id === c.id ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"
            }`}
          >
            {c.name.toUpperCase()}
          </button>
        ))}
      </div>

      <article className="mt-6 rounded-md border border-line bg-panel p-5">
        <p className="font-mono text-[11px] text-cyan">{cs.tag}</p>
        <h2 className="mt-1 font-mono text-2xl">{cs.name}</h2>
        <p className="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-muted">{cs.copy}</p>
        <ul className="mt-5 space-y-2">
          {cs.mix.map((m) => {
            const job = jobById(m.id);
            return (
              <li key={m.id}>
                <div className="mb-1 flex items-center justify-between font-mono text-xs">
                  <Link to="/jobs/$id" params={{ id: m.id }} className="hover:text-accent">
                    {job.name}
                  </Link>
                  <span className="tabular-nums text-muted">{m.w}%</span>
                </div>
                <div className="h-1.5 bg-bg-2">
                  <div className="h-full" style={{ width: `${m.w}%`, background: job.color }} />
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-5 border-l-2 border-accent pl-3 font-sans text-sm">{cs.lesson}</p>
      </article>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">WIN / MIX / FAIL</h2>
        <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
          Same four rooms. Six mixes. A teaching score, not a forecast.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse font-mono text-[11px]">
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="px-2 py-2 text-left">MIX</th>
                {WEATHERS.map((w) => (
                  <th key={w.id} className="px-2 py-2 text-left">
                    {w.name.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CASES.map((c) => (
                <tr
                  key={c.id}
                  className={`border-b border-line ${c.id === id ? "bg-bg-2" : ""}`}
                >
                  <td className="px-2 py-2 text-cyan">{c.name.toUpperCase()}</td>
                  {WEATHERS.map((w) => {
                    const mark = SCORE[c.id][w.id];
                    const cls =
                      mark === "WIN"
                        ? "text-up"
                        : mark === "FAIL"
                          ? "text-down"
                          : "text-yellow";
                    return (
                      <td key={w.id} className={`px-2 py-2 ${cls}`}>
                        {mark}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">SIT THE EXAM</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {WEATHERS.map((w) => (
            <button
              key={w.id}
              onClick={() => setRoom(w.id)}
              className={`h-11 rounded-sm px-3 font-mono text-xs ${
                room === w.id ? "bg-cyan text-bg" : "bg-panel text-fg hover:bg-line"
              }`}
            >
              {w.name.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {CASES.map((c) => (
            <div
              key={c.id}
              className={`rounded-md border p-4 ${
                c.id === id ? "border-accent bg-panel" : "border-line bg-panel"
              }`}
            >
              <p className="font-mono text-xs text-muted">{c.name}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed">{c.exam[room]}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[11px] text-cyan">
          {weather.name.toUpperCase()} · GROWTH {weather.growth.toUpperCase()} · INFLATION{" "}
          {weather.inflation.toUpperCase()}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">HISTORICAL TAPE</h2>
        <div className="mt-4 space-y-3">
          {EXAMS.map((e) => (
            <article key={e.year} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-sm text-accent">
                {e.year} · {e.room.toUpperCase()}
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{e.note}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="mt-10 font-mono text-[11px] leading-relaxed text-muted">
        Missing sleeves in a cartoon mix (small-cap value inside equities, private
        alts, timber) are still residual claims or illiquid stories. If two lines
        are paid by the same surprise, one of them is costume.{" "}
        {JOBS.length} classroom jobs. Not more.
      </p>
    </div>
  );
}
