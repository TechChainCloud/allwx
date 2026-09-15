import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PieChart } from "@/components/pie-chart";
import { JobMark } from "@/components/marks";
import { JOBS, type JobId } from "@/lib/content";

export const Route = createFileRoute("/pie")({ component: PiePage });

function PiePage() {
  const [active, setActive] = useState<JobId>("shares");
  const job = JOBS.find((j) => j.id === active)!;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        MIX · CLASSROOM OBJECT
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">
        30 / 18 / 15 / 14 / 10 / 7 / 6
      </h1>
      <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-muted">
        Weights exist so seven engines can be heard. They are not sacred, not
        optimal, and not personalised. The live sterling ISA translation lives
        on{" "}
        <Link to="/house" className="text-accent hover:underline">
          HOUSE
        </Link>
        — core jobs plus an alt and six satellite tickets.
      </p>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-md border border-line bg-panel p-6">
          <PieChart active={active} onSelect={setActive} />
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Selected</p>
          <div className="mt-3 flex items-center gap-3">
            <span
              className="flex size-12 items-center justify-center rounded-sm text-bg"
              style={{ background: job.color }}
            >
              <JobMark id={job.id} className="size-7" />
            </span>
            <div>
              <h2 className="font-mono text-2xl">{job.role}</h2>
              <p className="font-mono text-sm text-muted">
                {job.name} · {job.weight}% · {job.bbg}
              </p>
            </div>
          </div>
          <p className="mt-5 font-sans leading-relaxed">{job.principle}</p>
          <p className="mt-3 font-sans text-sm text-muted">{job.forYoung}</p>
          <Link
            to="/jobs/$id"
            params={{ id: job.id }}
            className="mt-5 inline-block font-mono text-sm text-accent hover:underline"
          >
            OPEN SLEEVE →
          </Link>
        </div>
      </div>

      <ul className="mt-10 divide-y divide-line overflow-hidden rounded-md border border-line bg-panel">
        {JOBS.map((j) => (
          <li key={j.id}>
            <button
              onClick={() => setActive(j.id)}
              className="flex w-full items-center gap-4 px-4 py-3 text-left hover:bg-bg-2"
            >
              <span className="size-2.5 rounded-full" style={{ background: j.color }} />
              <span className="w-10 font-mono tabular-nums">{j.weight}%</span>
              <span className="flex-1 font-sans">{j.name}</span>
              <span className="hidden font-mono text-xs text-muted sm:inline">{j.bbg}</span>
            </button>
            <div className="h-1 bg-bg-2">
              <div className="h-full" style={{ width: `${j.weight}%`, background: j.color }} />
            </div>
          </li>
        ))}
      </ul>

      <aside className="mt-10 rounded-md border border-line bg-bg-2 p-6">
        <h2 className="font-mono text-xl">A younger saver</h2>
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          Future wages still ahead can often bear more listed equity than this
          classroom object shows. That is a conversation about the whole balance
          sheet, not a licence to delete the insurance jobs. Human capital does
          not pay out on the day the listed growth engine is marked down twenty
          percent.
        </p>
      </aside>
    </div>
  );
}
