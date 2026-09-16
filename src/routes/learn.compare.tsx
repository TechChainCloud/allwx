import { Link, createFileRoute } from "@tanstack/react-router";
import { BOOKS, FAMILY_COMPARE, TICKERS } from "@/lib/library";
import { FARMER } from "@/lib/machine";

export const Route = createFileRoute("/learn/compare")({ component: ComparePage });

function ComparePage() {
  const core = TICKERS.filter((t) => t.classroom || t.prime || t.draft);

  return (
    <div className="space-y-10">
      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">Five books · do not flatten</p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">
          Classroom. Live. Prime. Draft. II.
        </h1>
        <p className="mt-4 font-sans text-base leading-relaxed text-muted">
          Same jobs. Different sentences. A briefing is not a lock-file change.
          Tonight’s T212 pad is still fourteen lines.
        </p>
      </header>

      <blockquote className="max-w-3xl border-l border-accent pl-5 font-sans text-lg leading-relaxed italic">
        {FARMER}
      </blockquote>

      <div className="grid gap-3 md:grid-cols-2">
        {BOOKS.map((b) => (
          <Link
            key={b.id}
            to={b.href}
            className="rounded-md border border-line bg-panel p-5 hover:border-accent"
          >
            <p className="stamp text-[10px] text-cyan">{b.asof}</p>
            <p className="mt-2 font-mono text-xl">{b.name}</p>
            <p className="mt-1 font-mono text-sm text-accent">{b.lines} lines</p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{b.job}</p>
          </Link>
        ))}
      </div>

      <section>
        <h2 className="font-mono text-2xl">Family weights</h2>
        <div className="mt-4 overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[640px] text-left font-mono text-[11px]">
            <thead className="bg-bg-2 text-[10px] uppercase text-muted">
              <tr>
                <th className="px-3 py-2">Family</th>
                <th className="px-3 py-2">Classroom</th>
                <th className="px-3 py-2">Live</th>
                <th className="px-3 py-2">Prime</th>
                <th className="px-3 py-2">Draft</th>
              </tr>
            </thead>
            <tbody>
              {FAMILY_COMPARE.map((r) => (
                <tr key={r.family} className="border-t border-line">
                  <td className="px-3 py-2 text-fg">{r.family}</td>
                  <td className="px-3 py-2 tabular-nums">{r.classroom}</td>
                  <td className="px-3 py-2 tabular-nums text-muted">{r.live}</td>
                  <td className="px-3 py-2 tabular-nums">{r.prime}</td>
                  <td className="px-3 py-2 text-muted">{r.draft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Same ticker, four sentences</h2>
        <p className="mt-2 font-sans text-sm text-muted">
          VWRP is 30 in the classroom, 25 live, 23.8 Prime, 45 in the draft. The
          job did not change. The sentence did.
        </p>
        <div className="mt-4 overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[720px] text-left font-mono text-[11px]">
            <thead className="bg-bg-2 text-[10px] uppercase text-muted">
              <tr>
                <th className="px-3 py-2">Ticker</th>
                <th className="px-3 py-2">7</th>
                <th className="px-3 py-2">14</th>
                <th className="px-3 py-2">15</th>
                <th className="px-3 py-2">16</th>
                <th className="px-3 py-2">Lesson</th>
              </tr>
            </thead>
            <tbody>
              {core
                .filter((t) => t.classroom || t.prime)
                .map((t) => (
                  <tr key={t.ticker} className="border-t border-line">
                    <td className="px-3 py-2 text-cyan">{t.ticker}</td>
                    <td className="px-3 py-2 tabular-nums">{fmt(t.classroom)}</td>
                    <td className="px-3 py-2 tabular-nums">{fmt(t.live)}</td>
                    <td className="px-3 py-2 tabular-nums">{fmt(t.prime)}</td>
                    <td className="px-3 py-2 tabular-nums">{fmt(t.draft)}</td>
                    <td className="px-3 py-2 font-sans text-[12px] text-muted">{t.lesson}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted">
        Prime II is the house lock. Count the lines. The live pad is still
        fourteen until the change date.{" "}
        <Link to="/learn/prime2" className="text-accent hover:text-fg">
          OPEN PRIME II →
        </Link>
      </p>
    </div>
  );
}

function fmt(n?: number) {
  return n == null ? "—" : n.toFixed(n % 1 === 0 ? 0 : 1);
}
