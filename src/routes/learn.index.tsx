import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FOUR_BOOKS, GLOSSARY, LEARN_TRACKS } from "@/lib/academy";
import { KNOWLEDGE, searchKnowledge } from "@/lib/library";
import { FARMER, IF_THEN } from "@/lib/machine";
import { PRINCIPLES, STUDY } from "@/lib/content";
import { score, useAcademy } from "@/store/academy";
import { useHydrated } from "@/hooks/use-hydrated";

export const Route = createFileRoute("/learn/")({ component: LearnHub });

function LearnHub() {
  const hydrated = useHydrated();
  const answers = useAcademy((s) => s.answers);
  const { right, total } = score(hydrated ? answers : {});
  const [q, setQ] = useState("");
  const found = useMemo(() => searchKnowledge(q), [q]);
  const searching = q.trim().length > 0;

  return (
    <div className="space-y-12">
      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">Academy · the Invictus knowledge desk</p>
        <h1 className="mt-3 font-mono text-4xl leading-[1.1] tracking-tight">
          Jobs. Rooms. Protocol.
          <br />
          One searchable classroom.
        </h1>
        <p className="mt-4 font-sans text-base leading-relaxed text-muted">
          A farmer does not need the forecast. He needs a farm that still stands.
          Press the rooms. Look up a ticker. Sit the drill. Education only.
        </p>
        <label className="mt-6 block">
          <span className="sr-only">Search the academy</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search jobs, years, gates, 2022, walk-back…"
            className="h-12 w-full max-w-xl rounded-md border border-line bg-bg px-4 font-mono text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none"
          />
        </label>
        <p className="mt-3 font-mono text-[11px] text-muted">
          Drills {right}/{total}
          {hydrated ? "" : ""} · {KNOWLEDGE.length} cards in the library
        </p>
      </header>

      {searching ? (
        <section>
          <h2 className="font-mono text-2xl">Search</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {found.cards.map((c) => (
              <Link
                key={c.id}
                to={c.href}
                className="rounded-md border border-line bg-panel p-5 hover:border-accent"
              >
                <p className="stamp text-[10px] text-cyan">{c.group}</p>
                <p className="mt-2 font-mono text-lg">{c.title}</p>
                <p className="mt-2 font-sans text-sm text-muted">{c.body}</p>
              </Link>
            ))}
            {found.tickers.slice(0, 6).map((t) => (
              <Link
                key={t.ticker}
                to="/learn/library"
                className="rounded-md border border-line bg-panel p-5 hover:border-accent"
              >
                <p className="stamp text-[10px] text-cyan">TICKER</p>
                <p className="mt-2 font-mono text-lg">{t.ticker}</p>
                <p className="mt-2 font-sans text-sm text-muted">{t.job}</p>
              </Link>
            ))}
          </div>
          {found.cards.length + found.tickers.length === 0 ? (
            <p className="mt-4 font-sans text-sm text-muted">Nothing for that query.</p>
          ) : null}
        </section>
      ) : null}

      <blockquote className="max-w-3xl border-l border-accent pl-5 font-sans text-lg leading-relaxed italic text-fg">
        {FARMER}
      </blockquote>

      <section>
        <h2 className="font-mono text-2xl">Five books. Do not flatten them.</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {FOUR_BOOKS.map((b) => (
            <Link
              key={b.id}
              to={b.href}
              className="rounded-md border border-line bg-panel p-5 hover:border-accent"
            >
              <p className="stamp text-[10px] text-cyan">{b.asof}</p>
              <p className="mt-2 font-mono text-lg">{b.name}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{b.job}</p>
            </Link>
          ))}
        </div>
        <Link to="/learn/compare" className="mt-4 inline-block stamp text-[11px] text-accent">
          COMPARE WEIGHTS →
        </Link>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Tracks</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {LEARN_TRACKS.map((t) => (
            <Link
              key={t.id}
              to={t.href}
              className="flex flex-col rounded-md border border-line bg-panel p-5 hover:border-accent"
            >
              <p className="font-mono text-lg">{t.title}</p>
              <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-muted">{t.body}</p>
              <p className="mt-4 stamp text-[10px] text-accent">{t.label} →</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Twelve-month spine</h2>
        <ol className="mt-4 grid gap-2 md:grid-cols-2">
          {STUDY.map((m) => (
            <li key={m.month} className="rounded-md border border-line bg-panel p-4">
              <p className="stamp text-[10px] text-cyan">{m.month}</p>
              <p className="mt-1 font-mono">{m.title}</p>
              <p className="mt-2 font-sans text-sm text-muted">{m.body}</p>
            </li>
          ))}
        </ol>
        <Link to="/study" className="mt-4 inline-block stamp text-[11px] text-accent">
          OPEN STUDY →
        </Link>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Glossary</h2>
        <div className="mt-4 divide-y divide-line overflow-hidden rounded-md border border-line">
          {GLOSSARY.map((g) => (
            <div key={g.term} className="grid gap-1 bg-panel px-4 py-3 sm:grid-cols-[9rem_7rem_1fr] sm:gap-4">
              <p className="font-mono text-sm text-cyan">{g.term}</p>
              <p className="stamp text-[10px] text-muted">{g.group}</p>
              <p className="font-sans text-sm leading-relaxed text-muted">{g.def}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Fridge</h2>
        <ol className="mt-4 space-y-2">
          {PRINCIPLES.slice(0, 12).map((line, i) => (
            <li key={line} className="flex gap-4 font-sans text-sm leading-relaxed">
              <span className="w-5 font-mono text-accent">{i + 1}</span>
              {line}
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl font-sans text-sm italic text-muted">{IF_THEN}</p>
      </section>
    </div>
  );
}
