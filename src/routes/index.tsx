import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PieChart } from "@/components/pie-chart";
import { JobMark } from "@/components/marks";
import {
  EPISODES,
  JOBS,
  PRINCIPLES,
  SERIES,
  SEVEN_QUESTIONS,
  TOTAL_DURATION,
} from "@/lib/content";
import { SCORECARD } from "@/lib/ops";
import { HOUSE_NAV, HOUSE_NAV_ASOF } from "@/lib/house";
import { TAPE, TAPE_OVERLAY, TAPE_REGIME, TAPE_STAGE } from "@/lib/tape";
import { formatDurationLabel } from "@/lib/utils";
import { usePlayer } from "@/store/player";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const play = usePlayer((s) => s.play);
  const completed = usePlayer((s) => s.completed);
  const positions = usePlayer((s) => s.positions);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const done = ready ? completed.length : 0;
  const mins = Math.round(TOTAL_DURATION / 60);

  return (
    <div>
      <section className="border-b border-line bg-bg-2">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {SERIES.season} · 25–35 · ISA CLASSROOM
            </p>
            <h1 className="mt-4 font-mono text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] text-fg">
              What do you own
              <br />
              if you are wrong?
            </h1>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-muted">
              The Invictus knowledge desk. Four rooms you can press. A library
              of every ticker and year. A protocol that answers sell / add /
              walk-back. Classroom seven, live fourteen, Prime lock, machine
              draft — do not flatten them. Education only.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/learn"
                className="inline-flex h-12 items-center rounded-md bg-accent px-5 font-mono text-sm text-bg"
              >
                OPEN LEARN
              </Link>
              <Button size="lg" onClick={() => play(EPISODES[0].slug)}>
                <Play className="size-4 translate-x-px fill-current" />
                PLAY EP 01
              </Button>
              <Button size="lg" variant="outline" onClick={() => play("full-lesson")}>
                <Play className="size-4 translate-x-px fill-current" />
                PLAY FULL LESSON
              </Button>
              <Link
                to="/tape"
                className="inline-flex h-12 items-center font-mono text-sm text-cyan hover:text-fg"
              >
                OPEN TAPE →
              </Link>
              <Link
                to="/house"
                className="inline-flex h-12 items-center font-mono text-sm text-accent hover:text-fg"
              >
                OPEN HOUSE →
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-muted">
              <Link to="/learn" className="hover:text-fg">
                LEARN
              </Link>
              <Link to="/learn/prime2" className="hover:text-fg">
                PRIME II
              </Link>
              <Link to="/learn/universe" className="hover:text-fg">
                UNIVERSE
              </Link>
              <Link to="/learn/years" className="hover:text-fg">
                YEARS
              </Link>
              <Link to="/jobs" className="hover:text-fg">
                SLEEVES
              </Link>
              <Link to="/cases" className="hover:text-fg">
                CASES
              </Link>
              <Link to="/rules" className="hover:text-fg">
                RULES
              </Link>
              <Link to="/study" className="hover:text-fg">
                STUDY
              </Link>
              <Link to="/debate" className="hover:text-fg">
                DEBATE
              </Link>
              <Link to="/weathers" className="hover:text-fg">
                ROOMS
              </Link>
            </div>
            <p className="mt-5 font-mono text-xs tabular-nums text-faint">
              {EPISODES.length} EP · {mins} MIN · {done}/{EPISODES.length} HEARD · HOUSE £
              {HOUSE_NAV.toFixed(0)} · {HOUSE_NAV_ASOF}
            </p>
          </div>
          <div className="rounded-md border border-line bg-panel p-4">
            <PieChart />
            <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Classroom object · not a prescription
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-mono text-sm text-accent">TAPE · AS OF CLASSROOM SNAPSHOT</h2>
            <p className="font-mono text-[11px] text-muted">
              REGIME {TAPE_REGIME.toUpperCase()} · {TAPE_OVERLAY}
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {TAPE.slice(0, 10).map((p) => (
              <Link
                key={p.mnemonic}
                to="/tape"
                className="bg-panel p-3 hover:bg-bg-2"
              >
                <p className="font-mono text-[10px] text-cyan">{p.fn}</p>
                <p className="mt-1 font-mono text-xs text-muted">{p.mnemonic}</p>
                <p className="mt-1 font-mono text-lg tabular-nums text-fg">
                  {p.value}
                  <span className="ml-1 text-xs text-muted">{p.unit}</span>
                </p>
                <p
                  className={`font-mono text-[11px] ${
                    p.dir === "up" ? "text-up" : p.dir === "down" ? "text-down" : "text-muted"
                  }`}
                >
                  {p.chg}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-mono text-xl text-fg">SERIES</h2>
          <p className="max-w-sm font-sans text-sm text-muted">
            Twelve teaching reads. Jobs, then the argument, then the tape.{" "}
            <Link to="/debate" className="text-accent hover:underline">
              DEBATE
            </Link>
            {" · "}
            <Link to="/lab" className="text-cyan hover:underline">
              LAB
            </Link>
            {" · "}
            <Link to="/study" className="text-muted hover:underline">
              STUDY
            </Link>
          </p>
        </div>
        <ol className="mt-6 divide-y divide-line overflow-hidden rounded-md border border-line bg-panel">
          {EPISODES.map((ep, i) => {
            const heard = ready && completed.includes(ep.slug);
            const started = ready && (positions[ep.slug] ?? 0) > 12;
            return (
              <li key={ep.slug} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                <span className="w-10 shrink-0 font-mono text-lg text-accent">{ep.code}</span>
                <div className="min-w-0 flex-1">
                  <Link
                    to="/listen/$slug"
                    params={{ slug: ep.slug }}
                    className="font-mono text-base text-fg hover:text-cyan"
                  >
                    {ep.title}
                  </Link>
                  <p className="mt-1 font-sans text-sm text-muted">{ep.subtitle}</p>
                  <p className="mt-2 font-mono text-[11px] tabular-nums text-faint">
                    {formatDurationLabel(ep.duration)}
                    {heard ? " · HEARD" : started ? " · IN PROGRESS" : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {heard && (
                    <span className="inline-flex size-8 items-center justify-center rounded-sm bg-up/15 text-up">
                      <Check className="size-4" />
                    </span>
                  )}
                  <Button
                    variant={i === 0 ? "primary" : "outline"}
                    size="sm"
                    onClick={() => play(ep.slug)}
                  >
                    <Play className="size-3.5 translate-x-px" />
                    PLAY
                  </Button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="border-y border-line bg-bg-2">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="font-mono text-xl">SEVEN QUESTIONS</h2>
          <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
            Morning operating system. Run them before you touch a weight.
          </p>
          <ol className="mt-6 grid gap-2 md:grid-cols-2">
            {SEVEN_QUESTIONS.map((q) => (
              <li key={q.n} className="rounded-md border border-line bg-panel p-4">
                <p className="font-mono text-[11px] text-accent">Q{q.n}</p>
                <p className="mt-1 font-mono text-sm text-fg">{q.q}</p>
                <p className="mt-2 font-sans text-xs leading-relaxed text-muted">{q.how}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-mono text-xl">SLEEVES</h2>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {JOBS.map((job) => (
            <Link
              key={job.id}
              to="/jobs/$id"
              params={{ id: job.id }}
              className="flex gap-4 rounded-md border border-line bg-panel p-4 hover:border-accent"
            >
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-sm text-bg"
                style={{ background: job.color }}
              >
                <JobMark id={job.id} className="size-7" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {job.weight}% · {job.bbg}
                </span>
                <span className="mt-1 block font-mono text-base">{job.name}</span>
                <span className="mt-1 block font-sans text-sm text-muted">{job.principle}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-mono text-xl">HOUSE · INVICTUS PRIME</h2>
          <Link to="/house" className="font-mono text-xs text-accent hover:underline">
            HOUSE <span className="text-muted">{"<GO>"}</span>
          </Link>
        </div>
        <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
          Design lock is Invictus Prime — fifteen lines. Live T212 is still
          fourteen at £{HOUSE_NAV.toFixed(2)} on {HOUSE_NAV_ASOF}. Classroom
          seven stays the teaching object. Do not rebuild this week.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="rounded-md border border-line bg-panel p-3">
            <p className="font-mono text-[10px] text-muted">NAV</p>
            <p className="mt-1 font-mono text-lg tabular-nums">£{HOUSE_NAV.toFixed(0)}</p>
          </div>
          <div className="rounded-md border border-line bg-panel p-3">
            <p className="font-mono text-[10px] text-muted">CORE</p>
            <p className="mt-1 font-mono text-lg tabular-nums">80%</p>
          </div>
          <div className="rounded-md border border-line bg-panel p-3">
            <p className="font-mono text-[10px] text-muted">ALT+SAT</p>
            <p className="mt-1 font-mono text-lg tabular-nums">20%</p>
          </div>
          <div className="rounded-md border border-line bg-panel p-3">
            <p className="font-mono text-[10px] text-muted">NEXT CASH</p>
            <p className="mt-1 font-mono text-lg">3 OCT</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-mono text-xl">CLASSROOM SCORE · 7 / 10</h2>
          <Link to="/rules" className="font-mono text-xs text-accent hover:underline">
            RULES <span className="text-muted">{"<GO>"}</span>
          </Link>
        </div>
        <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
          Architecture is a nine. The missing points are written protocols,
          automated contributions, and scale-gated upgrades — not an eighth theme.
        </p>
        <div className="mt-5 grid gap-2 sm:grid-cols-5">
          {SCORECARD.map((d) => (
            <div key={d.dim} className="rounded-md border border-line bg-panel p-3">
              <p className="font-mono text-[10px] text-muted">{d.dim.toUpperCase()}</p>
              <p className="mt-1 font-mono text-lg tabular-nums text-accent">
                {d.score}
                <span className="text-xs text-muted">/{d.of}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-mono text-xl">FRIDGE</h2>
        <ol className="mt-5 space-y-2">
          {PRINCIPLES.map((line, i) => (
            <li key={line} className="flex gap-4 font-sans text-sm leading-relaxed text-fg">
              <span className="w-6 shrink-0 font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
              {line}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
