import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { JobMark, WeatherGlyph } from "@/components/marks";
import { DRILLS, jobById, type WeatherId, WEATHERS } from "@/lib/content";

export const Route = createFileRoute("/weathers")({ component: WeathersPage });

function WeathersPage() {
  const [picked, setPicked] = useState<Record<string, WeatherId | null>>({});

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        MACHINE · FOUR ROOMS
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">
        Two surprises. Four rooms.
      </h1>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted">
        Growth can surprise up or down. Inflation can surprise up or down. No
        liquid asset owns all four. That is the entire argument for a team.
        Assign the tape until it is automatic.
      </p>

      <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
        {WEATHERS.map((w) => (
          <article key={w.id} className="bg-panel p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">
                  G {w.growth} · I {w.inflation}
                </p>
                <h2 className="mt-1 font-mono text-2xl">{w.name}</h2>
              </div>
              <span className="text-accent">
                <WeatherGlyph id={w.id} className="size-10" />
              </span>
            </div>
            <p className="mt-3 font-mono text-[11px] text-muted">{w.bbg}</p>
            <p className="mt-3 font-sans text-sm leading-relaxed">{w.copy}</p>
            <p className="mt-2 font-sans text-sm italic text-muted">{w.young}</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-up">Paid</p>
                <ul className="mt-2 space-y-1.5">
                  {w.paid.map((id) => (
                    <li key={id}>
                      <Link
                        to="/jobs/$id"
                        params={{ id }}
                        className="inline-flex items-center gap-2 font-mono text-xs hover:text-accent"
                      >
                        <JobMark id={id} className="size-4" />
                        {jobById(id).name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-down">Fined</p>
                <ul className="mt-2 space-y-1.5">
                  {w.fined.map((id) => (
                    <li key={id} className="font-mono text-xs text-muted">
                      {jobById(id).name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="font-mono text-3xl tracking-tight">ASSIGN THE TAPE</h2>
        <p className="mt-3 max-w-xl font-sans text-base text-muted">
          Month one is this drill until it is automatic. The map is a map, not a clock.
        </p>
        <div className="mt-6 space-y-4">
          {DRILLS.map((d) => {
            const choice = picked[d.id];
            const revealed = Boolean(choice);
            const correct = choice === d.answer;
            return (
              <div key={d.id} className="rounded-md border border-line bg-panel p-5">
                <p className="font-sans text-base leading-relaxed">{d.headline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {WEATHERS.map((w) => (
                    <button
                      key={w.id}
                      onClick={() => setPicked((p) => ({ ...p, [d.id]: w.id }))}
                      className={`h-10 rounded-sm px-3 font-mono text-xs ${
                        choice === w.id
                          ? "bg-accent text-bg"
                          : "bg-line text-fg hover:bg-bg-2"
                      }`}
                    >
                      {w.name}
                    </button>
                  ))}
                </div>
                {revealed && (
                  <p className="mt-4 font-sans text-sm leading-relaxed">
                    <span className={correct ? "text-up" : "text-down"}>
                      {correct ? "RIGHT ROOM. " : "DIFFERENT ROOM. "}
                    </span>
                    {d.why}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
