import { Link, createFileRoute } from "@tanstack/react-router";
import { FOUR_BOOKS, GLOSSARY, LEARN_TRACKS } from "@/lib/academy";
import { FARMER, IF_THEN } from "@/lib/machine";
import { PRINCIPLES, STUDY } from "@/lib/content";

export const Route = createFileRoute("/learn/")({ component: LearnHub });

function LearnHub() {
  return (
    <div className="space-y-12">
      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">Academy · education only</p>
        <h1 className="mt-3 font-mono text-4xl leading-[1.1] tracking-tight">
          The Invictus classroom.
          <br />
          Jobs, rooms, protocol.
        </h1>
        <p className="mt-4 font-sans text-base leading-relaxed text-muted">
          A farmer does not need the forecast. He needs a farm that still stands.
          This desk is the same idea, taught as a machine you can press.
        </p>
      </header>

      <blockquote className="max-w-3xl border-l border-accent pl-5 font-sans text-lg leading-relaxed italic text-fg">
        {FARMER}
      </blockquote>

      <section>
        <h2 className="font-mono text-2xl">Four books. Do not flatten them.</h2>
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
