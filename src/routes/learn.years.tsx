import { Link, createFileRoute } from "@tanstack/react-router";
import { YEARS } from "@/lib/library";

export const Route = createFileRoute("/learn/years")({ component: YearsPage });

function YearsPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">Year book · paid and fined</p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">
          Score the sleeve against its contract.
        </h1>
        <p className="mt-4 font-sans text-base leading-relaxed text-muted">
          The years that paid the architecture, and the years that invoiced it.
          A tracker owns goldilocks. All Weather is staffed for the year that
          wins you.
        </p>
      </header>

      <ol className="space-y-4">
        {YEARS.map((y) => (
          <li key={y.year} className="rounded-md border border-line bg-panel p-5 md:p-6">
            <p className="stamp text-[11px] text-cyan">
              {y.year} · {y.room}
            </p>
            <h2 className="mt-2 font-mono text-2xl">{y.title}</h2>
            <p className="mt-3 font-mono text-sm leading-relaxed text-fg">{y.numbers}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <p className="font-sans text-sm leading-relaxed">
                <span className="stamp text-[10px] text-up">PAID</span>
                <span className="mt-1 block text-muted">{y.paid}</span>
              </p>
              <p className="font-sans text-sm leading-relaxed">
                <span className="stamp text-[10px] text-down">FINED</span>
                <span className="mt-1 block text-muted">{y.fined}</span>
              </p>
            </div>
            <p className="mt-4 border-t border-line pt-4 font-sans text-sm leading-relaxed">
              {y.lesson}
            </p>
          </li>
        ))}
      </ol>

      <p className="max-w-2xl font-sans text-sm text-muted">
        Proxy backtests and ETF-weighted reconstructions. Gaps in the tape. Treat
        as a classroom, not an audit.{" "}
        <Link to="/lab" className="text-accent hover:text-fg">
          OPEN LAB →
        </Link>
      </p>
    </div>
  );
}
