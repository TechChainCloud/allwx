import { Link, createFileRoute } from "@tanstack/react-router";
import { DERRICK } from "@/lib/prime2";

export const Route = createFileRoute("/learn/derrick")({ component: DerrickPage });

function DerrickPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="stamp text-[11px] text-accent">The Derrick · WNRG vs IOGP</p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">
          The structure above the well, not the well.
        </h1>
        <p className="mt-4 font-sans text-base leading-relaxed text-muted">{DERRICK.headline}</p>
      </header>

      <section>
        <h2 className="font-mono text-2xl">Sub-sectors. Almost no overlap.</h2>
        <div className="mt-4 space-y-4">
          {DERRICK.sectors.map((s) => (
            <div key={s.name}>
              <div className="mb-1 flex justify-between font-mono text-[11px] text-muted">
                <span>{s.name}</span>
                <span>
                  WNRG {s.wnrg.toFixed(1)} · IOGP {s.iogp.toFixed(1)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Bar pct={s.wnrg} tone="cyan" />
                <Bar pct={s.iogp} tone="accent" />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[10px] text-muted">Left WNRG · right IOGP. Scale 0–100.</p>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        <article className="rounded-md border border-line bg-panel p-5">
          <p className="stamp text-[10px] text-cyan">WNRG WINS WHEN</p>
          <ul className="mt-3 space-y-2">
            {DERRICK.wnrgWins.map((w) => (
              <li key={w} className="font-sans text-sm leading-relaxed text-muted">
                {w}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-md border border-line bg-panel p-5">
          <p className="stamp text-[10px] text-accent">IOGP WINS WHEN</p>
          <ul className="mt-3 space-y-2">
            {DERRICK.iogpWins.map((w) => (
              <li key={w} className="font-sans text-sm leading-relaxed text-muted">
                {w}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Fund tape</h2>
        <div className="mt-4 overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[480px] text-left font-mono text-[11px]">
            <thead className="bg-bg-2 text-[10px] uppercase text-muted">
              <tr>
                <th className="px-3 py-2">Metric</th>
                <th className="px-3 py-2">WNRG</th>
                <th className="px-3 py-2">IOGP</th>
              </tr>
            </thead>
            <tbody>
              {DERRICK.metrics.map((m) => (
                <tr key={m.k} className="border-t border-line">
                  <td className="px-3 py-2">{m.k}</td>
                  <td className="px-3 py-2 text-cyan">{m.wnrg}</td>
                  <td className="px-3 py-2 text-accent">{m.iogp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-2xl">The two names in both top tens</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {DERRICK.overlap.map((o) => (
            <article key={o.name} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-sm">{o.name}</p>
              <p className="mt-2 font-mono text-[11px] text-muted">
                WNRG {o.wnrg.toFixed(2)}% · IOGP {o.iogp.toFixed(2)}%
              </p>
            </article>
          ))}
        </div>
      </section>

      <blockquote className="max-w-3xl border-l border-accent pl-5 font-sans text-lg leading-relaxed">
        {DERRICK.verdict}
      </blockquote>

      <p className="font-sans text-sm text-muted">
        <Link to="/learn/prime2" className="text-accent hover:text-fg">
          PRIME II →
        </Link>
        <span className="mx-2 text-faint">·</span>
        <Link to="/learn/universe" className="text-accent hover:text-fg">
          UNIVERSE →
        </Link>
      </p>
    </div>
  );
}

function Bar({ pct, tone }: { pct: number; tone: "cyan" | "accent" }) {
  const w = Math.min(100, Math.max(0, pct));
  return (
    <div className="h-3 overflow-hidden rounded-sm bg-bg-2">
      <div
        className={tone === "cyan" ? "h-full bg-cyan" : "h-full bg-accent"}
        style={{ width: `${w}%` }}
      />
    </div>
  );
}
