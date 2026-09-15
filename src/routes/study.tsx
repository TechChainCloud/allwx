import { createFileRoute, Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EPISODES, PRINCIPLES, SEVEN_QUESTIONS, STUDY } from "@/lib/content";
import { usePlayer } from "@/store/player";

export const Route = createFileRoute("/study")({ component: StudyPage });

function StudyPage() {
  const play = usePlayer((s) => s.play);
  const completed = usePlayer((s) => s.completed);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        STUDY · TWELVE MONTHS · CLOSE 8 SEP
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">
        Learn the jobs before you decorate a platform
      </h1>
      <p className="mt-4 font-sans text-lg leading-relaxed text-muted">
        A weekend of tickers is how people collect uniforms. Twelve months of
        mechanisms is how a household still holds when the weather changes.
        Prime is the design lock. The live ISA is still fourteen lines.
      </p>

      <ol className="mt-10 space-y-3">
        {STUDY.map((m, i) => (
          <li key={m.month} className="rounded-md border border-line bg-panel p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan">
              {m.month}
            </p>
            <h2 className="mt-1 font-mono text-2xl">{m.title}</h2>
            <p className="mt-2 font-sans leading-relaxed text-muted">{m.body}</p>
            {EPISODES[Math.min(i, EPISODES.length - 1)] && (
              <div className="mt-4 flex items-center gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => play(EPISODES[Math.min(i, EPISODES.length - 1)].slug)}
                >
                  <Play className="size-3.5 translate-x-px" />
                  EP {EPISODES[Math.min(i, EPISODES.length - 1)].code}
                </Button>
                {ready && completed.includes(EPISODES[Math.min(i, EPISODES.length - 1)].slug) && (
                  <span className="font-mono text-xs text-up">HEARD</span>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">SEVEN QUESTIONS</h2>
        <ol className="mt-4 space-y-3">
          {SEVEN_QUESTIONS.map((q) => (
            <li key={q.n} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-sm text-accent">
                Q{q.n} · {q.q}
              </p>
              <p className="mt-2 font-sans text-sm text-muted">{q.how}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">FRIDGE</h2>
        <ol className="mt-4 space-y-3">
          {PRINCIPLES.map((line, i) => (
            <li key={line} className="flex gap-4 font-sans leading-relaxed">
              <span className="w-5 font-mono text-accent">{i + 1}</span>
              {line}
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-12 font-sans text-sm leading-relaxed text-muted">
        Starting points, none of which are endorsements: Dalio, How the Economic
        Machine Works; public Bridgewater notes on All Weather and risk parity;
        Antti Ilmanen on expected returns; standard fixed-income chapters on
        duration. Read the disagreements. A framework that cannot survive a
        smart opponent is a slogan.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link to="/debate" className="font-mono text-sm text-accent hover:underline">
          DEBATE {"<GO>"}
        </Link>
        <Link to="/lab" className="font-mono text-sm text-cyan hover:underline">
          LAB
        </Link>
        <Link to="/tape" className="font-mono text-sm text-cyan hover:underline">
          TONIGHT'S TAPE
        </Link>
        <Link to="/" className="font-mono text-sm text-muted hover:underline">
          ALLWX {"<GO>"}
        </Link>
      </div>
    </div>
  );
}
