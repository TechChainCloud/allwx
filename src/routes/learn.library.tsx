import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { KNOWLEDGE, TICKERS, YEARS, searchKnowledge } from "@/lib/library";

export const Route = createFileRoute("/learn/library")({ component: LibraryPage });

function LibraryPage() {
  const [q, setQ] = useState("");
  const found = useMemo(() => searchKnowledge(q), [q]);

  return (
    <div className="space-y-10">
      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">Library · the whole desk in one search</p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">
          Every job, year, gate, and sentence.
        </h1>
        <p className="mt-4 font-sans text-base leading-relaxed text-muted">
          The knowledge graph behind Invictus. Search a ticker, a year, a rule.
          Education only. Not a ticket pad.
        </p>
        <label className="mt-6 block">
          <span className="sr-only">Search the library</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Walk-back, ICOM, 2022, gold floor, debit…"
            className="h-12 w-full rounded-md border border-line bg-bg px-4 font-mono text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none"
          />
        </label>
        <p className="mt-2 font-mono text-[11px] text-muted">
          {found.cards.length} cards · {found.tickers.length} tickers · {found.years.length} years
        </p>
      </header>

      <section>
        <h2 className="font-mono text-2xl">Cards</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {found.cards.map((c) => (
            <Link
              key={c.id}
              to={c.href}
              className="rounded-md border border-line bg-panel p-5 hover:border-accent"
            >
              <p className="stamp text-[10px] text-cyan">{c.group}</p>
              <p className="mt-2 font-mono text-lg">{c.title}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{c.body}</p>
              <p className="mt-4 stamp text-[10px] text-accent">{c.label} →</p>
            </Link>
          ))}
        </div>
        {found.cards.length === 0 ? <Empty /> : null}
      </section>

      <section>
        <h2 className="font-mono text-2xl">Tickers</h2>
        <div className="mt-4 overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[720px] text-left font-mono text-[11px]">
            <thead className="bg-bg-2 text-[10px] uppercase text-muted">
              <tr>
                <th className="px-3 py-2">Ticker</th>
                <th className="px-3 py-2">Job</th>
                <th className="px-3 py-2">7</th>
                <th className="px-3 py-2">14</th>
                <th className="px-3 py-2">15</th>
                <th className="px-3 py-2">16</th>
                <th className="px-3 py-2">2022</th>
              </tr>
            </thead>
            <tbody>
              {found.tickers.map((t) => (
                <tr key={t.ticker} className="border-t border-line">
                  <td className="px-3 py-2 text-cyan">{t.ticker}</td>
                  <td className="px-3 py-2 font-sans text-[12px] text-muted">{t.job}</td>
                  <td className="px-3 py-2 tabular-nums">{fmt(t.classroom)}</td>
                  <td className="px-3 py-2 tabular-nums">{fmt(t.live)}</td>
                  <td className="px-3 py-2 tabular-nums">{fmt(t.prime)}</td>
                  <td className="px-3 py-2 tabular-nums">{fmt(t.draft)}</td>
                  <td className="px-3 py-2 text-muted">{t.y2022}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 font-mono text-[10px] text-muted">
          Columns: classroom 7 · live 14 · Prime 15 · draft 16. Blank = not in that book.
        </p>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Years</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {found.years.map((y) => (
            <article key={y.year} className="rounded-md border border-line bg-panel p-5">
              <p className="stamp text-[10px] text-cyan">
                {y.year} · {y.room}
              </p>
              <p className="mt-2 font-mono text-lg">{y.title}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{y.lesson}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="max-w-2xl font-sans text-sm text-muted">
        {KNOWLEDGE.length} cards · {TICKERS.length} tickers · {YEARS.length} years in the
        graph. The pie does not need to be perfect. The contribution schedule does
        the compounding.
      </p>
    </div>
  );
}

function fmt(n?: number) {
  return n == null ? "—" : n.toFixed(n % 1 === 0 ? 0 : 1);
}

function Empty() {
  return <p className="mt-4 font-sans text-sm text-muted">No cards for that query. Try a ticker or a year.</p>;
}
