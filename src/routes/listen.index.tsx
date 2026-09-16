import { createFileRoute, Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { EPISODES, SEASONS, TOTAL_DURATION } from "@/lib/content";
import { formatDurationLabel } from "@/lib/utils";
import { usePlayer } from "@/store/player";

export const Route = createFileRoute("/listen/")({ component: ListenIndex });

function ListenIndex() {
  const play = usePlayer((s) => s.play);
  const completed = usePlayer((s) => s.completed);
  const positions = usePlayer((s) => s.positions);
  const slug = usePlayer((s) => s.slug);
  const [ready, setReady] = useState(false);
  const [season, setSeason] = useState<"ALL" | (typeof SEASONS)[number]["id"]>("ALL");
  useEffect(() => setReady(true), []);

  const resume = useMemo(() => {
    if (!ready) return undefined;
    if (slug) return EPISODES.find((e) => e.slug === slug);
    const started = EPISODES.find((e) => (positions[e.slug] ?? 0) > 12 && !completed.includes(e.slug));
    return started ?? EPISODES.find((e) => !completed.includes(e.slug)) ?? EPISODES[0];
  }, [ready, slug, positions, completed]);

  const list = season === "ALL" ? EPISODES : EPISODES.filter((e) => (e.season ?? "S1") === season);
  const heard = ready ? completed.length : 0;
  const mins = Math.round(TOTAL_DURATION / 60);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        SERIES · TWO-DESK · {EPISODES.length} EP · {mins} MIN
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">Listen in order. Skip by chapter.</h1>
      <p className="mt-4 font-sans text-base leading-relaxed text-muted">
        Season one teaches the seven jobs. Season two is the house and Prime I.
        Season three is the lock: Prime II, the derrick, the universe, the third.
        Education only.
      </p>

      {resume && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-md border border-accent/40 bg-panel p-4">
          <div>
            <p className="font-mono text-[11px] text-accent">CONTINUE</p>
            <p className="mt-1 font-mono text-sm">
              EP {resume.code} · {resume.title}
            </p>
          </div>
          <Button onClick={() => play(resume.slug)}>
            <Play className="size-3.5 translate-x-px fill-current" />
            {ready && (positions[resume.slug] ?? 0) > 12 ? "RESUME" : "PLAY"}
          </Button>
        </div>
      )}

      <p className="mt-6 font-mono text-[11px] text-muted">
        {heard}/{EPISODES.length} HEARD
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {(["ALL", ...SEASONS.map((s) => s.id)] as const).map((id) => (
          <button
            key={id}
            onClick={() => setSeason(id)}
            className={`h-11 rounded-sm px-3 font-mono text-xs ${
              season === id ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"
            }`}
          >
            {id === "ALL" ? "ALL" : id}
          </button>
        ))}
      </div>

      {season !== "ALL" && (
        <p className="mt-3 font-sans text-sm text-muted">
          {SEASONS.find((s) => s.id === season)?.hint}
        </p>
      )}

      <ol className="mt-6 divide-y divide-line overflow-hidden rounded-md border border-line bg-panel">
        {list.map((ep) => {
          const done = ready && completed.includes(ep.slug);
          const started = ready && (positions[ep.slug] ?? 0) > 12;
          const here = ready && slug === ep.slug;
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
                  {ep.season ?? "S1"} · {formatDurationLabel(ep.duration)}
                  {here ? " · NOW" : done ? " · HEARD" : started ? " · IN PROGRESS" : ""}
                </p>
              </div>
              <Button variant={ep.code === "01" || ep.code === "14" ? "primary" : "outline"} size="sm" onClick={() => play(ep.slug)}>
                <Play className="size-3.5 translate-x-px" />
                {started && !done ? "RESUME" : "PLAY"}
              </Button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
