import { createFileRoute } from "@tanstack/react-router";
import { DRILLS } from "@/lib/academy";
import { Button } from "@/components/ui/button";
import { score, useAcademy } from "@/store/academy";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/learn/quiz")({ component: QuizPage });

function QuizPage() {
  const answers = useAcademy((s) => s.answers);
  const mark = useAcademy((s) => s.mark);
  const reset = useAcademy((s) => s.reset);
  const { right, total } = score(answers);
  const done = Object.keys(answers).length;

  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">Drills</p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">Twelve questions. No costume.</h1>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
          Score {right}/{total} correct · {done} answered. Progress stays on this
          device. Education only.
        </p>
        <Button variant="outline" size="sm" className="mt-4" onClick={reset}>
          Reset drills
        </Button>
      </header>

      <ol className="space-y-4">
        {DRILLS.map((d, i) => {
          const picked = answers[d.id];
          const revealed = picked != null;
          return (
            <li key={d.id} className="rounded-md border border-line bg-panel p-5">
              <p className="stamp text-[10px] text-cyan">Q{i + 1}</p>
              <p className="mt-2 font-sans text-base">{d.q}</p>
              <div className="mt-4 grid gap-2">
                {d.choices.map((c, n) => {
                  const on = picked === n;
                  const good = revealed && n === d.answer;
                  const bad = revealed && on && n !== d.answer;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => mark(d.id, n)}
                      className={cn(
                        "min-h-11 rounded-sm border px-3 py-2 text-left font-sans text-sm",
                        good
                          ? "border-up bg-up/10 text-up"
                          : bad
                            ? "border-down bg-down/10 text-down"
                            : on
                              ? "border-accent text-fg"
                              : "border-line text-muted hover:border-accent",
                      )}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
              {revealed ? (
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{d.why}</p>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
