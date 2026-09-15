import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw, RotateCw } from "lucide-react";
import { EPISODES, episodeBySlug, nextEpisode, prevEpisode } from "@/lib/content";
import { formatTime } from "@/lib/utils";
import { usePlayer } from "@/store/player";
import { Button } from "@/components/ui/button";

const RATES = [0.9, 1, 1.1, 1.25];

export function StickyPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const slug = usePlayer((s) => s.slug);
  const playing = usePlayer((s) => s.playing);
  const rate = usePlayer((s) => s.rate);
  const seekTo = usePlayer((s) => s.seekTo);
  const pos = usePlayer((s) => (s.slug ? (s.positions[s.slug] ?? 0) : 0));
  const play = usePlayer((s) => s.play);
  const toggle = usePlayer((s) => s.toggle);
  const setPosition = usePlayer((s) => s.setPosition);
  const skip = usePlayer((s) => s.skip);
  const markComplete = usePlayer((s) => s.markComplete);
  const setRate = usePlayer((s) => s.setRate);
  const clearSeek = usePlayer((s) => s.clearSeek);
  const episode = slug ? episodeBySlug(slug) : undefined;
  const prev = slug ? prevEpisode(slug) : undefined;
  const nxt = slug ? nextEpisode(slug) : undefined;

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !episode) return;
    if (el.dataset.src !== episode.audio) {
      el.dataset.src = episode.audio;
      el.dataset.slug = episode.slug;
      el.src = episode.audio;
      const saved = usePlayer.getState().positions[episode.slug] ?? 0;
      el.currentTime = Math.min(saved, Math.max(0, episode.duration - 0.5));
    }
    el.playbackRate = rate;
    if (playing) {
      void el.play().catch(() => usePlayer.getState().pause());
    } else {
      el.pause();
    }
  }, [episode, playing, rate]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || seekTo == null) return;
    el.currentTime = seekTo;
    clearSeek();
  }, [seekTo, clearSeek]);

  if (!episode) {
    const first = EPISODES[0];
    const full = EPISODES.find((e) => e.slug === "full-lesson");
    return (
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="pointer-events-auto mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-md border border-line bg-panel px-4 py-3">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              SERIES · TWO-DESK
            </p>
            <p className="truncate font-mono text-sm text-fg">EP 01 · The machine</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => play(full?.slug ?? first.slug)}>
              FULL
            </Button>
            <Button variant="primary" size="sm" onClick={() => play(first.slug)}>
              <Play className="size-3.5 translate-x-px" />
              PLAY
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const pct = episode.duration ? Math.min(100, (pos / episode.duration) * 100) : 0;
  const chapter = [...episode.chapters].reverse().find((c) => pos >= c.t);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-md border border-line bg-panel">
        <audio
          ref={audioRef}
          preload="metadata"
          onTimeUpdate={(e) => {
            const t = e.currentTarget.currentTime;
            setPosition(episode.slug, t);
          }}
          onEnded={() => {
            markComplete(episode.slug);
            if (nxt) play(nxt.slug);
            else usePlayer.getState().pause();
          }}
        />
        <input
          type="range"
          min={0}
          max={episode.duration}
          step={1}
          value={Math.min(pos, episode.duration)}
          aria-label="Seek"
          className="block h-1 w-full cursor-pointer appearance-none bg-line accent-accent"
          onChange={(e) => usePlayer.getState().seek(Number(e.target.value))}
        />
        <div className="flex items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-10 shrink-0 text-muted sm:inline-flex"
            disabled={!prev}
            onClick={() => prev && play(prev.slug)}
            aria-label="Previous episode"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="primary"
            size="icon"
            className="size-11 shrink-0"
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <Pause className="size-4 fill-current" />
            ) : (
              <Play className="size-4 translate-x-px" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-10 shrink-0 text-muted sm:inline-flex"
            disabled={!nxt}
            onClick={() => nxt && play(nxt.slug)}
            aria-label="Next episode"
          >
            <ChevronRight className="size-4" />
          </Button>
          <div className="min-w-0 flex-1">
            <Link
              to="/listen/$slug"
              params={{ slug: episode.slug }}
              className="block truncate font-mono text-[13px] leading-tight text-fg hover:text-accent"
            >
              {episode.code} · {episode.title}
            </Link>
            <p className="mt-0.5 truncate font-mono text-xs tabular-nums text-muted">
              {formatTime(pos)} / {formatTime(episode.duration)}
              {chapter ? ` · ${chapter.label}` : ""}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="size-10 text-muted hover:bg-line hover:text-fg"
              onClick={() => skip(-15, episode.duration)}
              aria-label="Back 15 seconds"
            >
              <RotateCcw className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="size-10 text-muted hover:bg-line hover:text-fg"
              onClick={() => skip(15, episode.duration)}
              aria-label="Forward 15 seconds"
            >
              <RotateCw className="size-4" />
            </Button>
          </div>
          <div className="hidden shrink-0 items-center gap-1 md:flex">
            {RATES.map((r) => (
              <button
                key={r}
                onClick={() => setRate(r)}
                className={`h-8 min-w-8 rounded-sm px-1.5 font-mono text-[11px] tabular-nums ${
                  rate === r ? "bg-accent text-bg" : "text-muted hover:bg-line hover:text-fg"
                }`}
              >
                {r}×
              </button>
            ))}
          </div>
        </div>
        {episode.chapters.length > 1 && (
          <div className="flex gap-1 overflow-x-auto border-t border-line px-3 py-2">
            {episode.chapters.map((ch) => {
              const on = chapter?.t === ch.t;
              return (
                <button
                  key={ch.t}
                  onClick={() => usePlayer.getState().play(episode.slug, ch.t)}
                  className={`h-8 shrink-0 rounded-sm px-2 font-mono text-[10px] ${
                    on ? "bg-line text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  {ch.label}
                </button>
              );
            })}
            <Link
              to="/listen"
              className="ml-auto h-8 shrink-0 px-2 font-mono text-[10px] leading-8 text-cyan"
            >
              SERIES
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
