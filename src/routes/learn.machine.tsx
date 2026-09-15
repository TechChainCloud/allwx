import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Segment } from "@/components/ui/segment";
import { RegimeBoard } from "@/components/regime-board";
import { VerdictCard } from "@/components/verdict-card";
import { useHydrated } from "@/hooks/use-hydrated";
import {
  FARMER,
  FOMC_AT,
  IF_THEN,
  REGIMES,
  SIGNED_SENTENCE_LOCKED,
  SIGNED_SENTENCE_REVISED,
  regimeFromFlags,
} from "@/lib/machine";
import { earners, idtlFlag, routeContribution, sufferers, walkBackActive } from "@/lib/verdict";
import { selectPie, useInvictus } from "@/store/machine";

export const Route = createFileRoute("/learn/machine")({ component: MachinePage });

function fomcCopy(now: Date): { title: string; sub: string } {
  const target = new Date(FOMC_AT);
  const ms = target.getTime() - now.getTime();
  if (ms <= 0) {
    return {
      title: "FOMC has occurred",
      sub: "Sign the sentence. Write the lock file. AutoInvest the next calendar day. Not the same day.",
    };
  }
  const hours = Math.floor(ms / 3_600_000);
  const days = Math.floor(hours / 24);
  const remH = hours % 24;
  return {
    title: days > 0 ? `${days}d ${remH}h to FOMC` : `${hours}h to FOMC`,
    sub: "16 September 2026, 19:00 BST. This is the machine draft, not Prime, not the live ISA.",
  };
}

function MachinePage() {
  const hydrated = useHydrated();
  const store = useInvictus();
  const pie = selectPie(store.pieMode);
  const regime = regimeFromFlags(store.growth, store.inflation);
  const meta = REGIMES.find((r) => r.id === regime)!;
  const routing = useMemo(
    () => routeContribution(pie, store),
    [pie, store.pmi, store.curveInverted, store.contribution, store.weights, store.pieMode],
  );
  const now = hydrated ? new Date() : new Date("2026-09-15T09:47:00+01:00");
  const clock = fomcCopy(now);
  const wb = walkBackActive(store.pmi, store.curveInverted);
  const earn = earners(pie, regime);
  const hurt = sufferers(pie, regime);
  const sentence =
    store.pieMode === "revised" ? SIGNED_SENTENCE_REVISED : SIGNED_SENTENCE_LOCKED;

  return (
    <div className="space-y-10">
      <section className="rounded-md border border-line bg-panel p-5">
        <p className="stamp text-[10px] text-yellow">{clock.title}</p>
        <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-muted">{clock.sub}</p>
      </section>

      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">Interactive machine · 12 Sep draft</p>
        <h1 className="mt-3 font-mono text-4xl leading-[1.1] tracking-tight">
          The machine does not need to know which regime comes next.
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
          Press the rooms. This pie is a teaching draft — engine 45%, ICOM 8%,
          SGLN 8%. It is not Prime. It is not T212. Contributions on the 3rd do
          the work. The signed sentence stays the hand.
        </p>
      </header>

      <blockquote className="max-w-3xl border-l border-line pl-5 font-sans text-lg leading-relaxed italic">
        {sentence}
      </blockquote>

      <div className="flex flex-wrap gap-2">
        <Segment
          ariaLabel="Working pie"
          value={store.pieMode}
          onChange={store.setPieMode}
          options={[
            { value: "locked", label: "12 Sep lock" },
            { value: "revised", label: "Revised preview" },
          ]}
        />
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Segment
              ariaLabel="Growth"
              value={store.growth}
              onChange={store.setGrowth}
              options={[
                { value: "up", label: "Growth ↑" },
                { value: "down", label: "Growth ↓" },
              ]}
            />
            <Segment
              ariaLabel="Inflation"
              value={store.inflation}
              onChange={store.setInflation}
              options={[
                { value: "up", label: "Inflation ↑" },
                { value: "down", label: "Inflation ↓" },
              ]}
            />
          </div>
          <RegimeBoard
            active={regime}
            onSelect={(id) => {
              const r = REGIMES.find((x) => x.id === id)!;
              store.setGrowth(r.growth);
              store.setInflation(r.inflation);
            }}
          />
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted">{meta.response}</p>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-line bg-panel p-5">
            <p className="stamp text-[10px] text-muted">Who earns</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {earn.map((l) => (
                <Badge key={l.ticker} tone="earn">
                  {l.ticker}
                </Badge>
              ))}
            </div>
            <p className="stamp mt-5 text-[10px] text-muted">Who suffers</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {hurt.map((l) => (
                <Badge key={l.ticker} tone="suffer">
                  {l.ticker}
                </Badge>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-line bg-panel p-5">
            <p className="stamp text-[10px] text-muted">Sensors</p>
            <dl className="mt-3 space-y-2 font-mono text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Walk-back</dt>
                <dd className={wb ? "text-yellow" : "text-up"}>{wb ? "Active — 100% XSTR" : "Inactive"}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">PMI</dt>
                <dd className="tabular-nums">{store.pmi.toFixed(1)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">2s10s</dt>
                <dd>{store.curveInverted ? "Inverted" : "Not inverted"}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">GT30</dt>
                <dd className={idtlFlag(store.gt30) ? "text-yellow tabular-nums" : "tabular-nums"}>
                  {store.gt30.toFixed(3)}%{idtlFlag(store.gt30) ? " · flag" : ""}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="stamp text-[11px] text-muted">This month · the 3rd</p>
            <h2 className="mt-2 font-mono text-2xl">Contribution routing</h2>
          </div>
          <Link to="/learn/decide" className="stamp text-[11px] text-accent">
            FULL PROTOCOL →
          </Link>
        </div>
        <VerdictCard verdict={routing} />
      </section>

      <section className="max-w-2xl">
        <p className="font-sans text-lg leading-relaxed italic text-muted">{FARMER}</p>
        <p className="mt-4 font-sans text-sm leading-relaxed text-faint">{IF_THEN}</p>
      </section>
    </div>
  );
}
