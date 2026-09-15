import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DEBATE_SECTIONS, ONE_ANSWER } from "@/lib/defence";
import { usePlayer } from "@/store/player";

export const Route = createFileRoute("/debate")({ component: DebatePage });

function DebatePage() {
  const [sec, setSec] = useState(DEBATE_SECTIONS[0].id);
  const [open, setOpen] = useState<string | null>(DEBATE_SECTIONS[0].items[0].q);
  const play = usePlayer((s) => s.play);
  const section = DEBATE_SECTIONS.find((s) => s.id === sec)!;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        DEBATE · DEFENCE MANUAL
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">
        Memorise the structure, not the script.
      </h1>
      <p className="mt-4 font-sans text-base leading-relaxed text-muted">
        Questions a sceptic, an adviser, a friend, or a future self will ask.
        Classroom answers grounded in Dalio's four rooms and the tape from
        this session. Education only — not a personal defence in front of a
        regulator.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button size="sm" onClick={() => play("if-you-are-wrong")}>
          PLAY EP 09
        </Button>
        <Button size="sm" variant="outline" onClick={() => play("prime-sentences")}>
          PLAY EP 13
        </Button>
        <Link to="/lab" className="inline-flex h-11 items-center font-mono text-sm text-cyan">
          OPEN LAB →
        </Link>
        <Link to="/house" className="inline-flex h-11 items-center font-mono text-sm text-accent">
          OPEN HOUSE →
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {DEBATE_SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setSec(s.id);
              setOpen(s.items[0]?.q ?? null);
            }}
            className={`h-11 rounded-sm px-3 font-mono text-xs ${
              sec === s.id ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"
            }`}
          >
            {s.title.toUpperCase()}
          </button>
        ))}
      </div>

      <ol className="mt-6 space-y-3">
        {section.items.map((item) => {
          const on = open === item.q;
          return (
            <li key={item.q} className="rounded-md border border-line bg-panel">
              <button
                onClick={() => setOpen(on ? null : item.q)}
                className="flex w-full items-start gap-3 px-4 py-4 text-left"
              >
                <span className="mt-0.5 font-mono text-[11px] text-accent">Q</span>
                <span className="font-mono text-sm leading-relaxed">{item.q}</span>
              </button>
              {on && (
                <div className="border-t border-line px-4 py-4">
                  <p className="font-mono text-[11px] text-cyan">DESK</p>
                  <p className="mt-2 font-sans text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <aside className="mt-10 rounded-md border border-accent/40 bg-panel p-5">
        <p className="font-mono text-[11px] text-accent">THE ONE ANSWER</p>
        <p className="mt-3 font-sans text-sm leading-relaxed">{ONE_ANSWER}</p>
      </aside>
    </div>
  );
}
