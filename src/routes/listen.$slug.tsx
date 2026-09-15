import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  EPISODES,
  episodeBySlug,
  jobById,
  nextEpisode,
  prevEpisode,
  WEATHERS,
} from "@/lib/content";
import { formatDurationLabel, formatTime } from "@/lib/utils";
import { usePlayer } from "@/store/player";

export const Route = createFileRoute("/listen/$slug")({
  component: Listen,
  loader: ({ params }) => {
    const ep = episodeBySlug(params.slug);
    if (!ep) throw notFound();
    return ep;
  },
});

function Listen() {
  const ep = Route.useLoaderData();
  const play = usePlayer((s) => s.play);
  const playing = usePlayer((s) => s.playing && s.slug === ep.slug);
  const rawPos = usePlayer((s) => s.positions[ep.slug] ?? 0);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const pos = ready ? rawPos : 0;
  const nxt = nextEpisode(ep.slug);
  const prev = prevEpisode(ep.slug);
  const i = EPISODES.findIndex((e) => e.slug === ep.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Link to="/listen" className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent hover:text-fg">
          SERIES <span className="text-muted">{"<GO>"}</span>
        </Link>
        <p className="font-mono text-[11px] text-muted">
          {i + 1} / {EPISODES.length} · {formatDurationLabel(ep.duration)} · {ep.season ?? "S1"}
        </p>
      </div>

      <div className="mt-4 flex gap-1 overflow-x-auto pb-1">
        {EPISODES.map((e) => (
          <Link
            key={e.slug}
            to="/listen/$slug"
            params={{ slug: e.slug }}
            className={`flex size-9 shrink-0 items-center justify-center rounded-sm font-mono text-[11px] ${
              e.slug === ep.slug ? "bg-accent text-bg" : "bg-panel text-muted hover:text-fg"
            }`}
          >
            {e.code}
          </Link>
        ))}
      </div>

      <h1 className="mt-6 font-mono text-4xl leading-[1.05] tracking-tight">{ep.title}</h1>
      <p className="mt-4 font-sans text-lg leading-relaxed text-muted">{ep.subtitle}</p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
        Two-desk · DESK / RATES · education only
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button size="lg" onClick={() => play(ep.slug, pos > 12 ? pos : 0)}>
          <Play className="size-4 translate-x-px fill-current" />
          {playing ? "PLAYING" : pos > 12 ? "RESUME" : "PLAY"}
        </Button>
        {prev && (
          <Button variant="outline" size="lg" onClick={() => play(prev.slug)}>
            <ChevronLeft className="size-4" />
            {prev.code}
          </Button>
        )}
        {nxt && (
          <Button variant="outline" size="lg" onClick={() => play(nxt.slug)}>
            {nxt.code}
            <ChevronRight className="size-4" />
          </Button>
        )}
        <p className="self-center font-mono text-sm tabular-nums text-muted">
          {formatTime(pos)} / {formatTime(ep.duration)}
        </p>
      </div>

      <ul className="mt-8 flex flex-wrap gap-2">
        {ep.jobIds.map((id) => {
          const job = jobById(id);
          return (
            <Link
              key={id}
              to="/jobs/$id"
              params={{ id }}
              className="inline-flex items-center gap-2 rounded-sm bg-panel px-3 py-1.5 font-mono text-xs text-muted hover:text-fg"
            >
              <span className="size-2 rounded-full" style={{ background: job.color }} />
              {job.role}
            </Link>
          );
        })}
      </ul>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">TAKEAWAYS</h2>
        <ul className="mt-4 space-y-3">
          {ep.takeaways.map((t) => (
            <li key={t} className="border-l-2 border-accent pl-4 font-sans text-base leading-relaxed">
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">CHAPTERS</h2>
        <ol className="mt-4 divide-y divide-line rounded-md border border-line bg-panel">
          {ep.chapters.map((ch) => (
            <li key={ch.t}>
              <button
                className="flex min-h-11 w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-bg-2"
                onClick={() => play(ep.slug, ch.t)}
              >
                <span className="font-sans text-sm">{ch.label}</span>
                <span className="font-mono text-xs tabular-nums text-muted">{formatTime(ch.t)}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-2xl">ROOMS IN THIS EP</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {WEATHERS.filter((w) => ep.weatherIds.includes(w.id)).map((w) => (
            <Link
              key={w.id}
              to="/weathers"
              className="rounded-md border border-line bg-panel p-4 hover:border-accent"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                G {w.growth} · I {w.inflation}
              </span>
              <span className="mt-1 block font-mono text-lg">{w.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-2xl">TRANSCRIPT</h2>
        <div className="prose-episode mt-5 space-y-4 font-sans text-[1.05rem] leading-[1.65] text-fg">
          {ep.transcript.map((line, idx) => (
            <p key={`${line.who}-${idx}`} className="grid gap-1 sm:grid-cols-[4.5rem_1fr] sm:gap-4">
              <span className={`font-mono text-[10px] tracking-[0.18em] ${line.who === "DESK" ? "text-accent" : "text-cyan"}`}>
                {line.who}
              </span>
              <span>{line.text}</span>
            </p>
          ))}
        </div>
      </section>

      <nav className="mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
        {prev ? (
          <Link
            to="/listen/$slug"
            params={{ slug: prev.slug }}
            className="rounded-md border border-line bg-panel p-4 hover:border-accent"
          >
            <p className="font-mono text-[11px] text-muted">PREV</p>
            <p className="mt-1 font-mono text-sm">
              {prev.code} · {prev.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {nxt && (
          <Link
            to="/listen/$slug"
            params={{ slug: nxt.slug }}
            className="rounded-md border border-line bg-panel p-4 hover:border-accent"
          >
            <p className="font-mono text-[11px] text-muted">NEXT</p>
            <p className="mt-1 font-mono text-sm">
              {nxt.code} · {nxt.title}
            </p>
          </Link>
        )}
      </nav>
    </article>
  );
}
