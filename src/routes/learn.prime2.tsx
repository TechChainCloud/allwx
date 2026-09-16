import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Segment } from "@/components/ui/segment";
import {
  P2_ALL,
  P2_ARITHMETIC,
  P2_ASOF,
  P2_EXITS,
  P2_GATES,
  P2_HEADLINE,
  P2_LIVING_WT,
  P2_METRICS,
  P2_OBJECTIONS,
  P2_OCF,
  P2_QUIET_WT,
  P2_SENTENCES,
  P2_STATUS,
  type P2Line,
} from "@/lib/prime2";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/learn/prime2")({ component: Prime2Page });

type Tab = "book" | "gates" | "verdict" | "sentences";

function Prime2Page() {
  const [tab, setTab] = useState<Tab>("book");
  const [open, setOpen] = useState("WNRG");
  const line = P2_ALL.find((l) => l.ticker === open) ?? P2_ALL[0]!;

  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <p className="stamp text-[11px] text-accent">
          {P2_STATUS} · {P2_ASOF} · FOMC 19:00 BST
        </p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">Invictus Prime II</h1>
        <p className="mt-4 font-sans text-base leading-relaxed text-muted">{P2_HEADLINE}</p>
      </header>

      <div className="grid gap-3 sm:grid-cols-4">
        <Stat k="Claimed lines" v="16" />
        <Stat k="Listed lines" v={String(P2_ALL.length)} warn />
        <Stat k="Living / quiet" v={`${P2_LIVING_WT} / ${P2_QUIET_WT}`} />
        <Stat k="Blended OCF" v={P2_OCF} />
      </div>

      <Segment
        ariaLabel="Prime II views"
        value={tab}
        onChange={setTab}
        options={[
          { value: "book", label: "BOOK" },
          { value: "gates", label: "GATES" },
          { value: "verdict", label: "DESK" },
          { value: "sentences", label: "SENTENCES" },
        ]}
      />

      {tab === "book" ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
          <div className="overflow-x-auto rounded-md border border-line">
            <table className="w-full min-w-[720px] text-left font-mono text-[11px]">
              <thead className="bg-bg-2 text-[10px] uppercase text-muted">
                <tr>
                  <th className="px-3 py-2">#</th>
                  <th className="px-3 py-2">Line</th>
                  <th className="px-3 py-2">Now</th>
                  <th className="px-3 py-2">II</th>
                  <th className="px-3 py-2">Δ</th>
                  <th className="px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {P2_ALL.map((r) => (
                  <tr
                    key={r.ticker}
                    onClick={() => setOpen(r.ticker)}
                    className={cn(
                      "cursor-pointer border-t border-line",
                      open === r.ticker ? "bg-line/60" : "hover:bg-panel",
                    )}
                  >
                    <td className="px-3 py-2 text-muted">{r.n}</td>
                    <td className="px-3 py-2">
                      <span className="text-cyan">{r.ticker}</span>
                      <span className="ml-2 text-muted">{r.farm}</span>
                    </td>
                    <td className="px-3 py-2 tabular-nums">{r.current.toFixed(2)}</td>
                    <td className="px-3 py-2 tabular-nums">{r.proposed.toFixed(1)}</td>
                    <td className={cn("px-3 py-2 tabular-nums", deltaClass(r))}>
                      {delta(r)}
                    </td>
                    <td className="px-3 py-2 font-sans text-[12px] text-muted">{r.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="rounded-md border border-line bg-panel p-5">
            <p className="stamp text-[10px] text-cyan">
              {line.sleeve.toUpperCase()} · {line.ticker}
            </p>
            <h2 className="mt-2 font-mono text-2xl">{line.farm}</h2>
            <p className="mt-3 font-sans text-sm leading-relaxed">{line.job}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              {line.current.toFixed(2)}% → {line.proposed.toFixed(1)}% · OCF {line.ocf} · YTD {line.ytd} · 3Y {line.y3}
            </p>
            <p className="mt-4 font-sans text-sm text-muted">{line.action}</p>
            {line.ticker === "WNRG" ? (
              <Link to="/learn/derrick" className="mt-4 inline-block stamp text-[11px] text-accent">
                WNRG VS IOGP →
              </Link>
            ) : null}
          </aside>
        </div>
      ) : null}

      {tab === "gates" ? (
        <ol className="space-y-3">
          {P2_GATES.map((g) => (
            <li key={g.id} className="rounded-md border border-line bg-panel p-5">
              <p className="stamp text-[10px] text-cyan">{g.when}</p>
              <p className="mt-2 font-mono text-lg">{g.action}</p>
              <ul className="mt-3 space-y-1">
                {g.pre.map((p) => (
                  <li key={p} className="font-sans text-sm text-muted">
                    — {p}
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-sans text-sm leading-relaxed text-accent-2">{g.fail}</p>
            </li>
          ))}
        </ol>
      ) : null}

      {tab === "verdict" ? (
        <div className="space-y-4">
          <article className="rounded-md border border-accent bg-panel p-5">
            <p className="stamp text-[10px] text-accent">ARITHMETIC</p>
            <p className="mt-2 font-sans text-base leading-relaxed">{P2_ARITHMETIC}</p>
          </article>
          <div className="grid gap-3 md:grid-cols-2">
            {P2_EXITS.map((e) => (
              <article key={e.ticker} className="rounded-md border border-line bg-panel p-5">
                <p className="stamp text-[10px] text-down">EXIT · {e.ticker}</p>
                <p className="mt-2 font-mono text-lg">{e.farm}</p>
                <p className="mt-2 font-sans text-sm text-muted">{e.claim}</p>
                <p className="mt-3 border-t border-line pt-3 font-sans text-sm leading-relaxed">{e.desk}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {P2_OBJECTIONS.map((o) => (
              <article key={o.k} className="rounded-md border border-line bg-panel p-5">
                <p className="stamp text-[10px] text-cyan">{o.k.toUpperCase()}</p>
                <p className="mt-2 font-sans text-sm leading-relaxed">{o.body}</p>
              </article>
            ))}
          </div>
          <div className="overflow-x-auto rounded-md border border-line">
            <table className="w-full min-w-[520px] text-left font-mono text-[11px]">
              <thead className="bg-bg-2 text-[10px] uppercase text-muted">
                <tr>
                  <th className="px-3 py-2">Metric</th>
                  <th className="px-3 py-2">V0 draft</th>
                  <th className="px-3 py-2">Prime II</th>
                </tr>
              </thead>
              <tbody>
                {P2_METRICS.map((m) => (
                  <tr key={m.k} className="border-t border-line">
                    <td className="px-3 py-2">{m.k}</td>
                    <td className="px-3 py-2 text-muted">{m.v0}</td>
                    <td className="px-3 py-2">{m.v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {tab === "sentences" ? (
        <ol className="space-y-3">
          {P2_SENTENCES.map((s, i) => (
            <li key={s} className="rounded-md border border-line bg-panel p-5">
              <p className="stamp text-[10px] text-accent">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-sans text-base leading-relaxed">{s}</p>
            </li>
          ))}
        </ol>
      ) : null}

      <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted">
        Education only. Lock is stamped. Pad is not rebuilt. Not a recommendation
        to buy WNRG, IWVL, or FLOT tonight.{" "}
        <Link to="/learn/universe" className="text-accent hover:text-fg">
          OPEN UNIVERSE →
        </Link>
      </p>
    </div>
  );
}

function delta(r: P2Line) {
  const d = r.proposed - r.current;
  const sign = d > 0.05 ? "+" : "";
  return `${sign}${d.toFixed(1)}`;
}
function deltaClass(r: P2Line) {
  const d = r.proposed - r.current;
  if (d > 0.15) return "text-up";
  if (d < -0.15) return "text-down";
  return "text-muted";
}
function Stat({ k, v, warn }: { k: string; v: string; warn?: boolean }) {
  return (
    <div className="rounded-md border border-line bg-panel px-4 py-3">
      <p className="stamp text-[10px] text-muted">{k}</p>
      <p className={cn("mt-1 font-mono text-lg", warn && "text-accent")}>{v}</p>
    </div>
  );
}
