import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePlayer } from "@/store/player";
import {
  BROKEN_PIES,
  CLASSROOM_VS_HOUSE,
  HONEST,
  HOUSE,
  HOUSE_ASOF,
  HOUSE_CASH,
  HOUSE_NAME,
  HOUSE_NAV,
  HOUSE_NAV_ASOF,
  HOUSE_REGIME,
  MAXIMUS_WARN,
  NEXT_CONTRIB,
  NEXT_LEVER,
  POWDER_VARIANT,
  PRIOR_SEVEN,
  REGIME_MATRIX,
  SAT_CAPS,
  TENSIONS,
  sumFamily,
  sumField,
} from "@/lib/house";
import {
  PRIME,
  PRIME_ASOF,
  PRIME_CORE,
  PRIME_LESSONS,
  PRIME_NAME,
  PRIME_SAT,
  PRIME_TARGETS,
  PRIME_VERDICT,
  PRIME_VS_LIVE,
  PRIME_YEAR,
  sumPrime,
} from "@/lib/prime";
import {
  BRIEF_ASOF,
  BRIEF_PARA,
  BRIEF_WHEN,
  BUILD,
  CONTRIB_LEVER,
  DCA_30,
  DBMF,
  HIERARCHY,
  HORMUZ,
  LIMITS,
  MC30,
  OVERNIGHT,
  PENDING,
  PRIME_LOCKED,
  PRIME_SENTENCES,
  PRIME_STATS,
  SUNNY,
  YEAR_TAPE,
  CONCEPTS,
} from "@/lib/brief";
import {
  CALENDAR,
  CONTRIB_TREE,
  INGREDIENTS,
  LINE_CARDS,
  NOT_THE_PLAN,
  PLAN_ASOF,
  PLAN_SENTENCE,
  SHARPE,
  TASTELESS,
  TRIM,
  WALKBACK,
} from "@/lib/plan";

export const Route = createFileRoute("/house")({ component: HousePage });

const TABS = ["PRIME", "PIE", "DRIFT", "REGIME", "PLAN", "SCORE", "CORE", "WARN"] as const;
type Tab = (typeof TABS)[number];
type Field = "target" | "locked" | "live";

function HousePage() {
  const [tab, setTab] = useState<Tab>("PRIME");
  const [field, setField] = useState<Field>("target");
  const play = usePlayer((s) => s.play);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        HOUSE · {PRIME_NAME} LOCKED {PRIME_LOCKED} · BRIEF {BRIEF_ASOF} {BRIEF_WHEN}
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">Fifteen lines. Two sleeves. Nine sentences.</h1>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted">
        {BRIEF_PARA}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Stat k="NAV" v={`£${HOUSE_NAV.toFixed(2)}`} d={`Cash £${HOUSE_CASH.toFixed(2)}`} />
        <Stat k="CORE TGT" v={`${sumFamily("core", "target").toFixed(0)}%`} d="Seven jobs" />
        <Stat k="ALT + SAT" v={`${(sumFamily("alt", "target") + sumFamily("sat", "target")).toFixed(0)}%`} d="DBMG + six themes" />
        <Stat k="LINES" v={String(HOUSE.length)} d={`${sumField("target").toFixed(0)}% vector`} />
        <Stat k="NEXT CASH" v="3 OCT" d={NEXT_CONTRIB} />
      </div>
      <p className="mt-3 font-mono text-[11px] text-cyan">{HOUSE_REGIME}</p>
      <div className="mt-4">
        <Button size="sm" onClick={() => play("prime-sentences")}>
          PLAY EP 13
        </Button>
        <p className="mt-2 font-mono text-[11px] text-muted">
          PRIME panes: LOCK · YEARS · SUNNY · GATE · LIMITS · CLOSE
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`h-11 rounded-sm px-3 font-mono text-xs ${
              tab === t ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "PRIME" && <PrimeDesk />}
      {tab === "PIE" && (
        <section className="mt-8">
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["target", "T212 TARGET"],
                ["locked", "LOCK 6 SEP"],
                ["live", "LIVE NAV"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setField(k)}
                className={`h-10 rounded-sm px-3 font-mono text-[11px] ${
                  field === k ? "bg-cyan text-bg" : "bg-panel text-fg hover:bg-line"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="mt-3 max-w-2xl font-sans text-sm text-muted">
            {field === "locked"
              ? "Thirteen-line research lock. No DBMG. Copper printed as COPA."
              : field === "live"
                ? "Platform holdings on the 7 Sep evening print. Balance score 10. AutoInvest off."
                : "Operational targets on T212. Fourteen lines. One copper wrapper: COPG."}
          </p>
          <div className="mt-6 grid items-start gap-8 overflow-x-hidden lg:grid-cols-[280px_1fr]">
            <HousePie field={field} />
            <LineTable field={field} />
          </div>
        </section>
      )}

      {tab === "DRIFT" && <Drift />}
      {tab === "REGIME" && <Regime />}
      {tab === "PLAN" && <Plan />}
      {tab === "SCORE" && <Score />}
      {tab === "CORE" && <CoreCompare />}
      {tab === "WARN" && <Warn />}

      <p className="mt-10 max-w-3xl font-sans text-sm leading-relaxed text-muted">{MAXIMUS_WARN}</p>
      <p className="mt-4 max-w-3xl border-l-2 border-accent pl-3 font-sans text-sm leading-relaxed">{NEXT_LEVER}</p>
    </div>
  );
}

function HousePie({ field }: { field: Field }) {
  const slices = useMemo(() => {
    const cx = 100;
    const cy = 100;
    const r = 78;
    const ir = 44;
    const polar = (radR: number, a: number) => {
      const rad = ((a - 90) * Math.PI) / 180;
      return [cx + radR * Math.cos(rad), cy + radR * Math.sin(rad)] as const;
    };
    let acc = 0;
    return HOUSE.filter((h) => h[field] > 0).map((h) => {
      const w = h[field];
      const start = (acc / 100) * 360;
      acc += w;
      const end = (acc / 100) * 360;
      const [sx, sy] = polar(r, end);
      const [ex, ey] = polar(r, start);
      const [six, siy] = polar(ir, end);
      const [eix, eiy] = polar(ir, start);
      const large = end - start > 180 ? 1 : 0;
      const d = `M ${sx.toFixed(3)} ${sy.toFixed(3)} A ${r} ${r} 0 ${large} 0 ${ex.toFixed(3)} ${ey.toFixed(3)} L ${eix.toFixed(3)} ${eiy.toFixed(3)} A ${ir} ${ir} 0 ${large} 1 ${six.toFixed(3)} ${siy.toFixed(3)} Z`;
      return { h, d, w };
    });
  }, [field]);

  const total = slices.reduce((a, s) => a + s.w, 0);

  return (
    <div className="rounded-md border border-line bg-panel p-4">
      <svg viewBox="0 0 200 200" className="mx-auto w-full max-w-[260px]">
        {slices.map((s) => (
          <path key={s.h.ticker} d={s.d} fill={s.h.color} opacity={s.h.family === "sat" ? 0.78 : 1} />
        ))}
        <circle cx="100" cy="100" r="36" fill="#0a0e16" />
        <text x="100" y="96" textAnchor="middle" fill="#ff9900" fontSize="8" fontFamily="IBM Plex Mono">
          {field.toUpperCase()}
        </text>
        <text x="100" y="110" textAnchor="middle" fill="#f8f8f2" fontSize="11" fontFamily="IBM Plex Mono">
          {total.toFixed(1)}%
        </text>
      </svg>
      <ul className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1">
        {slices.map((s) => (
          <li key={s.h.ticker} className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
            <span className="size-2 shrink-0 rounded-full" style={{ background: s.h.color }} />
            {s.h.ticker} {s.w.toFixed(s.w % 1 ? 1 : 0)}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LineTable({ field }: { field: Field }) {
  return (
    <div className="overflow-x-auto rounded-md border border-line">
      <table className="w-full min-w-[420px] text-left font-mono text-[11px]">
        <thead className="bg-bg-2 text-[10px] uppercase text-muted">
          <tr>
            <th className="px-3 py-2">Ticker</th>
            <th className="hidden px-3 py-2 sm:table-cell">Fam</th>
            <th className="px-3 py-2">Lock</th>
            <th className="px-3 py-2">Target</th>
            <th className="px-3 py-2">Live</th>
            <th className="hidden px-3 py-2 md:table-cell">£</th>
            <th className="px-3 py-2">Fit</th>
            <th className="hidden px-3 py-2 lg:table-cell">Signal</th>
          </tr>
        </thead>
        <tbody>
          {HOUSE.map((h) => (
            <tr
              key={h.ticker}
              className={`border-t border-line ${field === "live" && Math.abs(h.live - h.target) >= 0.4 ? "bg-line/40" : ""}`}
            >
              <td className="px-3 py-2">
                <span className="inline-block size-2 rounded-full" style={{ background: h.color }} />{" "}
                <span className="text-cyan">{h.ticker}</span>
              </td>
              <td className="hidden px-3 py-2 text-muted sm:table-cell">{h.family}</td>
              <td className="px-3 py-2 tabular-nums">{h.locked ? h.locked.toFixed(1) : "—"}</td>
              <td className="px-3 py-2 tabular-nums">{h.target.toFixed(0)}</td>
              <td className="px-3 py-2 tabular-nums">{h.live.toFixed(2)}</td>
              <td className="hidden px-3 py-2 tabular-nums text-muted md:table-cell">{h.pounds.toFixed(2)}</td>
              <td
                className={
                  h.fit === "PAY"
                    ? "text-up"
                    : h.fit === "TAX"
                      ? "text-down"
                      : h.fit === "POWDER"
                        ? "text-purple"
                        : "text-yellow"
                }
              >
                {h.fit}
              </td>
              <td className="hidden px-3 py-2 font-sans text-[11px] text-muted lg:table-cell">{h.signal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Drift() {
  return (
    <section className="mt-8">
      <p className="max-w-2xl font-sans text-sm text-muted">
        Live versus T212 target on the {HOUSE_NAV_ASOF} snapshot. At £950 a 3pp
        drift is about £28 — still cheaper to close with the next contribution
        than with a sale.
      </p>
      <ul className="mt-5 space-y-2">
        {HOUSE.map((h) => {
          const d = h.live - h.target;
          return (
            <li key={h.ticker}>
              <div className="mb-1 flex justify-between font-mono text-[11px]">
                <span className="text-cyan">{h.ticker}</span>
                <span className={`tabular-nums ${d > 0.15 ? "text-up" : d < -0.15 ? "text-down" : "text-muted"}`}>
                  {h.live.toFixed(2)} vs {h.target} ({d >= 0 ? "+" : ""}
                  {d.toFixed(2)}pp)
                </span>
              </div>
              <div className="relative h-1.5 bg-bg-2">
                <div className="absolute inset-y-0 left-0 bg-faint" style={{ width: `${Math.min(h.target, 40) * 2.4}%` }} />
                <div className="absolute inset-y-0 left-0 bg-accent" style={{ width: `${Math.min(h.live, 40) * 2.4}%` }} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Regime() {
  return (
    <section className="mt-8">
      <p className="max-w-2xl font-sans text-sm text-muted">
        Confirmed teaching regime: reflation primary, stagflation overlay.
        Structurally yes. Tactically no. The gaps are the premium for being
        all-weather rather than a one-room optimizer.
      </p>
      <div className="mt-5 overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[640px] text-left font-mono text-[11px]">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">Box</th>
              <th className="px-3 py-2">Winners</th>
              <th className="px-3 py-2">Losers</th>
              <th className="px-3 py-2">Satellites</th>
            </tr>
          </thead>
          <tbody>
            {REGIME_MATRIX.map((r) => (
              <tr key={r.box} className="border-t border-line">
                <td className="px-3 py-2 text-cyan">{r.box}</td>
                <td className="px-3 py-2 text-up">{r.winners}</td>
                <td className="px-3 py-2 text-down">{r.losers}</td>
                <td className="px-3 py-2 text-muted">{r.sats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 font-sans text-xs text-muted">
        *ITPS pays in stagflation only if real yields do not rise faster than CPI indexation.
      </p>
      <div className="mt-6 space-y-3">
        {HOUSE.map((h) => (
          <article key={h.ticker} className="rounded-md border border-line bg-panel p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-mono text-sm text-cyan">
                {h.ticker} · {h.role}
              </p>
              <p
                className={`font-mono text-[11px] ${
                  h.fit === "PAY" ? "text-up" : h.fit === "TAX" ? "text-down" : "text-yellow"
                }`}
              >
                {h.fit} · TGT {h.target}% · LOCK {h.locked || "—"}
              </p>
            </div>
            <p className="mt-2 font-sans text-sm leading-relaxed">{h.note}</p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{h.thesis}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-3xl font-sans text-sm leading-relaxed text-muted">{HONEST}</p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {TENSIONS.map((t) => (
          <article key={t.title} className="rounded-md border border-line bg-panel p-4">
            <p className="font-mono text-sm text-accent">{t.title}</p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{t.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CoreCompare() {
  return (
    <section className="mt-8">
      <p className="max-w-2xl font-sans text-sm text-muted">
        Classroom object versus house operational targets. The seven jobs
        remain. Twenty points were opened for an alt and six satellite tickets.
      </p>
      <div className="mt-5 overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[560px] text-left font-mono text-xs">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">Line</th>
              <th className="px-3 py-2">Classroom</th>
              <th className="px-3 py-2">House</th>
              <th className="px-3 py-2">Read</th>
            </tr>
          </thead>
          <tbody>
            {CLASSROOM_VS_HOUSE.map((r) => (
              <tr key={r.ticker} className="border-t border-line">
                <td className="px-3 py-2 text-cyan">{r.ticker}</td>
                <td className="px-3 py-2 tabular-nums">{r.classroom}%</td>
                <td className="px-3 py-2 tabular-nums">{r.house}%</td>
                <td className="px-3 py-2 font-sans text-[12px] text-muted">{r.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-10 font-mono text-sm text-accent">PRIOR SEVEN · £{PRIOR_SEVEN.nav}</h2>
      <p className="mt-2 font-sans text-sm text-muted">
        The last 7-line Invictus print before the revamp. Same jobs. No alt. No
        satellites. Cost basis £{PRIOR_SEVEN.cost.toFixed(2)}.
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {PRIOR_SEVEN.lines.map((l) => (
          <li key={l.ticker} className="rounded-md border border-line bg-panel px-3 py-2 font-mono text-[11px]">
            <span className="text-cyan">{l.ticker}</span>{" "}
            <span className="tabular-nums text-muted">
              {l.pct.toFixed(2)}% · £{l.pounds.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-8 font-sans text-sm text-muted">
        A pure reflation optimizer would fatten VWRP and ICOM, zero VAGS and
        IDTL, trim SGLN, and max the paying satellites. That book would have
        won the last twelve months and would be naked in a rotation. The house
        refuses that trade. See{" "}
        <Link to="/pie" className="text-accent hover:underline">
          MIX
        </Link>{" "}
        for the original object and{" "}
        <Link to="/debate" className="text-cyan hover:underline">
          DEBATE
        </Link>{" "}
        for the argument.
      </p>
    </section>
  );
}

function Warn() {
  const powderSum = POWDER_VARIANT.reduce((a, l) => a + l.w, 0);
  return (
    <section className="mt-8 space-y-8">
      <div>
        <h2 className="font-mono text-sm text-accent">BROKEN VECTORS</h2>
        <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
          Draft pies that would not confirm. They are in the folder so nobody
          mistakes a shopping list for a house.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {BROKEN_PIES.map((b) => (
            <article key={b.name} className="rounded-md border border-down/40 bg-panel p-4">
              <p className="font-mono text-lg text-down">{b.total}%</p>
              <p className="mt-1 font-mono text-xs text-fg">{b.name}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{b.fault}</p>
            </article>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-mono text-sm text-accent">SATELLITE CAPS</h2>
        <ul className="mt-4 divide-y divide-line overflow-hidden rounded-md border border-line">
          {SAT_CAPS.map((s) => (
            <li key={s.ticker} className="flex flex-wrap items-baseline justify-between gap-2 bg-panel px-4 py-3">
              <span className="font-mono text-sm text-cyan">{s.ticker}</span>
              <span className="font-mono text-xs text-accent">CAP {s.cap}%</span>
              <span className="w-full font-sans text-sm text-muted">{s.why}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-mono text-sm text-accent">POWDER VARIANT · NOT ADOPTED</h2>
        <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
          A 100% candidate that lifts CSH2 to 11 and cuts VWRP to 22. Useful as
          a Stage-4 sketch. Not the live house. Sum {powderSum}%.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {POWDER_VARIANT.map((l) => (
            <span key={l.ticker} className="rounded-sm border border-line bg-panel px-2 py-1 font-mono text-[11px]">
              {l.ticker} {l.w}
            </span>
          ))}
        </div>
      </div>
      <p className="font-sans text-sm leading-relaxed text-muted">{MAXIMUS_WARN}</p>
      <p className="font-sans text-sm leading-relaxed text-muted">
        A twenty-line scale sketch lives on{" "}
        <Link to="/lab" className="text-accent hover:underline">
          LAB → TWENTY
        </Link>
        . It is not this house. The listed 18-line table sums to 91%. Confirm
        before you hire.
      </p>
    </section>
  );
}

function PrimeDesk() {
  const [pane, setPane] = useState<"LOCK" | "YEARS" | "SUNNY" | "GATE" | "LIMITS" | "CLOSE">("LOCK");
  const slices = useMemo(() => {
    const cx = 100;
    const cy = 100;
    const r = 78;
    const ir = 44;
    const polar = (radR: number, a: number) => {
      const rad = ((a - 90) * Math.PI) / 180;
      return [cx + radR * Math.cos(rad), cy + radR * Math.sin(rad)] as const;
    };
    let acc = 0;
    const total = sumPrime();
    return PRIME.map((h) => {
      const w = h.w;
      const start = (acc / total) * 360;
      acc += w;
      const end = (acc / total) * 360;
      const [sx, sy] = polar(r, end);
      const [ex, ey] = polar(r, start);
      const [six, siy] = polar(ir, end);
      const [eix, eiy] = polar(ir, start);
      const large = end - start > 180 ? 1 : 0;
      const d = `M ${sx.toFixed(3)} ${sy.toFixed(3)} A ${r} ${r} 0 ${large} 0 ${ex.toFixed(3)} ${ey.toFixed(3)} L ${eix.toFixed(3)} ${eiy.toFixed(3)} A ${ir} ${ir} 0 ${large} 1 ${six.toFixed(3)} ${siy.toFixed(3)} Z`;
      return { h, d };
    });
  }, []);
  const gbp = (n: number) => "£" + Math.round(n).toLocaleString("en-GB");
  const panes = ["LOCK", "YEARS", "SUNNY", "GATE", "LIMITS", "CLOSE"] as const;

  return (
    <section className="mt-8 space-y-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat k="CORE" v={`${PRIME_CORE}%`} d="Nine jobs" />
        <Stat k="SAT" v={`${PRIME_SAT}%`} d="Six themes" />
        <Stat k="CAGR / VOL" v={`${PRIME_STATS.cagr}% · ${PRIME_STATS.vol}%`} d={`Sharpe ${PRIME_STATS.sharpe} · TER ${PRIME_STATS.ter}%`} />
        <Stat k="WORST ETF" v={`${PRIME_STATS.worstEtf}%`} d={`${PRIME_STATS.worstEtfYear} · S&P −18.64`} />
      </div>
      <p className="max-w-3xl font-sans text-sm leading-relaxed text-muted">{PRIME_YEAR}</p>
      <p className="max-w-3xl font-sans text-sm leading-relaxed text-muted">{HORMUZ}</p>
      <div className="flex flex-wrap gap-2">
        {panes.map((p) => (
          <button
            key={p}
            onClick={() => setPane(p)}
            className={`h-11 rounded-sm px-3 font-mono text-xs ${
              pane === p ? "bg-cyan text-bg" : "bg-panel text-fg hover:bg-line"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {pane === "LOCK" && (
        <>
          <div className="grid items-start gap-8 overflow-hidden lg:grid-cols-[260px_1fr]">
            <div className="rounded-md border border-line bg-panel p-4">
              <svg viewBox="0 0 200 200" className="mx-auto w-full max-w-[240px]">
                {slices.map((s) => (
                  <path key={s.h.ticker} d={s.d} fill={s.h.color} opacity={s.h.sleeve === "sat" ? 0.75 : 1} />
                ))}
                <circle cx="100" cy="100" r="36" fill="#0a0e16" />
                <text x="100" y="96" textAnchor="middle" fill="#ff9900" fontSize="9" fontFamily="IBM Plex Mono">
                  PRIME
                </text>
                <text x="100" y="110" textAnchor="middle" fill="#f8f8f2" fontSize="11" fontFamily="IBM Plex Mono">
                  15
                </text>
              </svg>
            </div>
            <div className="overflow-x-auto rounded-md border border-line">
              <table className="w-full min-w-[560px] text-left font-mono text-[11px]">
                <thead className="bg-bg-2 text-[10px] uppercase text-muted">
                  <tr>
                    <th className="px-3 py-2">#</th>
                    <th className="px-3 py-2">Line</th>
                    <th className="px-3 py-2">Wt</th>
                    <th className="hidden px-3 py-2 lg:table-cell">TER</th>
                    <th className="px-3 py-2">Job</th>
                    <th className="hidden px-3 py-2 sm:table-cell">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {PRIME.map((p, i) => {
                    const s = PRIME_SENTENCES.find((x) => x.ticker === p.ticker);
                    return (
                      <tr key={p.ticker} className="border-t border-line">
                        <td className="px-3 py-2 text-muted">{i + 1}</td>
                        <td className="px-3 py-2 text-cyan">{p.ticker}</td>
                        <td className="px-3 py-2 tabular-nums">{p.w.toFixed(1)}</td>
                        <td className="hidden px-3 py-2 tabular-nums text-muted lg:table-cell">
                          {s ? s.ter.toFixed(2) : "—"}
                        </td>
                        <td className="px-3 py-2 font-sans text-[12px]">{p.job}</td>
                        <td className="hidden px-3 py-2 text-muted sm:table-cell">{p.year}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-mono text-sm text-accent">SIX-PRIORITY HIERARCHY</h2>
            <ol className="mt-3 space-y-2">
              {HIERARCHY.map((h) => (
                <li key={h.n} className="rounded-md border border-line bg-panel p-4">
                  <p className="font-mono text-xs text-cyan">
                    {h.n} · {h.name.toUpperCase()} · {h.now}
                  </p>
                  <p className="mt-2 font-sans text-sm leading-relaxed">{h.rule}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-mono text-sm text-accent">BUILD DECISIONS</h2>
            <ul className="mt-3 space-y-2">
              {BUILD.map((b) => (
                <li key={b.ticker} className="rounded-md border border-line bg-panel p-4">
                  <p className="font-mono text-xs text-cyan">
                    {b.ticker} · {b.move}
                  </p>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{b.why}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            {PRIME.map((p) => {
              const s = PRIME_SENTENCES.find((x) => x.ticker === p.ticker);
              return (
                <article key={p.ticker} className="rounded-md border border-line bg-panel p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-mono text-sm text-cyan">
                      {p.ticker} · {p.w}%
                    </p>
                    <p className="font-mono text-[11px] text-accent">{p.year}</p>
                  </div>
                  {s && <p className="mt-2 font-sans text-sm font-medium leading-relaxed">{s.sentence}</p>}
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{p.best}</p>
                </article>
              );
            })}
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {PRIME_VERDICT.map((v) => (
              <article key={v.name} className="rounded-md border border-line bg-panel p-4">
                <p className="font-mono text-[11px] text-muted">{v.name}</p>
                <p className="mt-2 font-mono text-lg tabular-nums">
                  {v.cagr}% · £{v.terminal}
                </p>
                <p className="mt-2 font-sans text-sm text-muted">{v.note}</p>
              </article>
            ))}
          </div>
          <div className="overflow-x-auto rounded-md border border-line">
            <table className="w-full min-w-[560px] text-left font-mono text-xs">
              <thead className="bg-bg-2 text-[10px] uppercase text-muted">
                <tr>
                  <th className="px-3 py-2">Dim</th>
                  <th className="px-3 py-2">Prime</th>
                  <th className="px-3 py-2">Live</th>
                  <th className="px-3 py-2">Classroom</th>
                </tr>
              </thead>
              <tbody>
                {PRIME_VS_LIVE.map((r) => (
                  <tr key={r.dim} className="border-t border-line">
                    <td className="px-3 py-2 text-cyan">{r.dim}</td>
                    <td className="px-3 py-2 font-sans text-[12px]">{r.prime}</td>
                    <td className="px-3 py-2 font-sans text-[12px]">{r.live}</td>
                    <td className="px-3 py-2 font-sans text-[12px]">{r.classroom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="font-mono text-sm text-accent">LESSONS</h2>
            <ol className="mt-4 space-y-2">
              {PRIME_LESSONS.map((l, i) => (
                <li key={l} className="flex gap-3 font-sans text-sm leading-relaxed">
                  <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {l}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-mono text-sm text-accent">TARGETS</h2>
            <ul className="mt-4 space-y-3">
              {PRIME_TARGETS.map((t) => (
                <li key={t.gate} className="rounded-md border border-line bg-panel p-4">
                  <p className="font-mono text-xs text-cyan">{t.gate}</p>
                  <p className="mt-2 font-sans text-sm leading-relaxed">{t.do}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {pane === "YEARS" && (
        <>
          <p className="max-w-3xl font-sans text-sm leading-relaxed text-muted">
            Live Bloomberg-weighted Prime tape, 2021–2026 YTD. Teaching object. 2022 is the proof of concept. 2025 is the surprise year.
          </p>
          <div className="overflow-x-auto rounded-md border border-line">
            <table className="w-full min-w-[640px] text-left font-mono text-[11px]">
              <thead className="bg-bg-2 text-[10px] uppercase text-muted">
                <tr>
                  <th className="px-3 py-2">Year</th>
                  <th className="px-3 py-2">Prime</th>
                  <th className="px-3 py-2">S&P</th>
                  <th className="px-3 py-2">XLK</th>
                  <th className="px-3 py-2">XLE</th>
                  <th className="px-3 py-2">60/40</th>
                </tr>
              </thead>
              <tbody>
                {YEAR_TAPE.map((r) => (
                  <tr key={String(r.y)} className="border-t border-line">
                    <td className="px-3 py-2 text-cyan">{r.y}</td>
                    <td className={`px-3 py-2 tabular-nums ${r.prime >= 0 ? "text-up" : "text-down"}`}>
                      {r.prime.toFixed(2)}%
                    </td>
                    <td className={`px-3 py-2 tabular-nums ${r.spx >= 0 ? "text-up" : "text-down"}`}>
                      {r.spx.toFixed(2)}%
                    </td>
                    <td className="px-3 py-2 tabular-nums text-muted">{r.xlk.toFixed(2)}%</td>
                    <td className="px-3 py-2 tabular-nums text-muted">{r.xle.toFixed(2)}%</td>
                    <td className={`px-3 py-2 tabular-nums ${r.s64 >= 0 ? "text-up" : "text-down"}`}>
                      {r.s64.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="font-mono text-sm text-accent">30Y DCA · £200/MO · 1997–2026</h2>
          <p className="font-sans text-sm text-muted">
            At the 2008 trough Prime had the highest absolute value of the four. That is the behavioural architecture working.
          </p>
          <div className="overflow-x-auto rounded-md border border-line">
            <table className="w-full min-w-[640px] text-left font-mono text-[11px]">
              <thead className="bg-bg-2 text-[10px] uppercase text-muted">
                <tr>
                  <th className="px-3 py-2">Book</th>
                  <th className="px-3 py-2">Terminal</th>
                  <th className="px-3 py-2">Mult</th>
                  <th className="px-3 py-2">2008 trough</th>
                  <th className="px-3 py-2">Worst</th>
                </tr>
              </thead>
              <tbody>
                {DCA_30.map((r) => (
                  <tr key={r.name} className="border-t border-line">
                    <td className="px-3 py-2 text-cyan">{r.name}</td>
                    <td className="px-3 py-2 tabular-nums">{gbp(r.terminal)}</td>
                    <td className="px-3 py-2 tabular-nums">{r.multiple.toFixed(2)}×</td>
                    <td className="px-3 py-2 tabular-nums">{gbp(r.trough08)}</td>
                    <td className="px-3 py-2">{r.worst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {pane === "SUNNY" && (
        <>
          <p className="max-w-3xl font-sans text-sm leading-relaxed">{SUNNY.note}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Stat k="EQUITY" v={`${SUNNY.equity}%`} d={`Prime 34.3%`} />
            <Stat k="FI" v={`${SUNNY.fi}%`} d={`Prime 37.9%`} />
            <Stat k="TER" v={`${SUNNY.ter}%`} d="Prime 0.14%" />
            <Stat k="30Y TER DRAG" v={gbp(SUNNY.terDrag)} d="vs Prime, £200/mo" />
          </div>
          <div className="overflow-x-auto rounded-md border border-line">
            <table className="w-full min-w-[520px] text-left font-mono text-[11px]">
              <thead className="bg-bg-2 text-[10px] uppercase text-muted">
                <tr>
                  <th className="px-3 py-2">Dim</th>
                  <th className="px-3 py-2">Sunny-Day</th>
                  <th className="px-3 py-2">Prime</th>
                </tr>
              </thead>
              <tbody>
                {SUNNY.compare.map((r) => (
                  <tr key={r.dim} className="border-t border-line">
                    <td className="px-3 py-2 text-cyan">{r.dim}</td>
                    <td className="px-3 py-2 font-sans text-[12px]">{r.sunny}</td>
                    <td className="px-3 py-2 font-sans text-[12px]">{r.prime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-sm leading-relaxed text-muted">{SUNNY.ingh}</p>
        </>
      )}

      {pane === "GATE" && (
        <>
          <p className="font-mono text-xs text-cyan">
            {DBMF.ticker} · {DBMF.name} · NOT THE LOCK
          </p>
          <p className="max-w-3xl font-sans text-sm leading-relaxed">{DBMF.job}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Stat k="1Y SHARPE" v={String(DBMF.sharpe1y)} d={`Vol ${DBMF.vol1y}%`} />
            <Stat k="CORR VWRP" v={String(DBMF.corrVwrp)} d={`VAGS ${DBMF.corrVags}`} />
            <Stat k="TER" v={`${DBMF.ter}%`} d={DBMF.aum} />
            <Stat k="YTD" v={`${DBMF.ytd}%`} d={DBMF.y2022} />
          </div>
          <p className="rounded-md border border-accent/40 bg-panel p-4 font-sans text-sm leading-relaxed">
            {DBMF.gate} {DBMF.change}
          </p>
          <p className="font-sans text-sm text-muted">{DBMF.terCost}</p>
          <h2 className="font-mono text-sm text-accent">30Y FAN · RESHAPE VS LOCK VS S&P</h2>
          <div className="overflow-x-auto rounded-md border border-line">
            <table className="w-full min-w-[520px] text-left font-mono text-[11px]">
              <thead className="bg-bg-2 text-[10px] uppercase text-muted">
                <tr>
                  <th className="px-3 py-2">P</th>
                  <th className="px-3 py-2">Reshape</th>
                  <th className="px-3 py-2">Prime lock</th>
                  <th className="px-3 py-2">S&P</th>
                </tr>
              </thead>
              <tbody>
                {MC30.map((r) => (
                  <tr key={r.p} className="border-t border-line">
                    <td className="px-3 py-2 text-cyan">{r.p}</td>
                    <td className="px-3 py-2 tabular-nums">{gbp(r.reshape)}</td>
                    <td className="px-3 py-2 tabular-nums">{gbp(r.prime)}</td>
                    <td className="px-3 py-2 tabular-nums text-muted">{gbp(r.spx)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-sm leading-relaxed text-muted">
            Crossover with the S&P is the 25th percentile. Below it, Prime wins. Above it, the index wins. If a lost decade has a real probability, Prime wins where it counts.
          </p>
          <h2 className="font-mono text-sm text-accent">{OVERNIGHT.title.toUpperCase()}</h2>
          <p className="font-sans text-sm leading-relaxed">{OVERNIGHT.body}</p>
          <ul className="space-y-2">
            {OVERNIGHT.implications.map((x) => (
              <li key={x} className="font-sans text-sm leading-relaxed text-muted">
                {x}
              </li>
            ))}
          </ul>
          <p className="font-sans text-sm text-muted">{DBMF.overnight}</p>
        </>
      )}

      {pane === "LIMITS" && (
        <>
          <p className="max-w-3xl font-sans text-sm leading-relaxed">
            Prime cannot honestly deliver 10–15% for 30 years. The S&P averaged ~10.5% nominal over a century with −50, −57 and −34 along the way. Prime was designed not to be that book.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {LIMITS.map((l) => (
              <article key={l.path} className="rounded-md border border-line bg-panel p-4">
                <p className="font-mono text-xs text-cyan">{l.path}</p>
                <p className="mt-2 font-mono text-lg tabular-nums">
                  {l.cagr} · {l.worst}
                </p>
                <p className="mt-2 font-sans text-sm text-muted">{l.cost}</p>
              </article>
            ))}
          </div>
          <p className="rounded-md border border-accent/40 bg-panel p-4 font-sans text-sm leading-relaxed">{CONTRIB_LEVER}</p>
          <p className="font-sans text-sm text-muted">
            Contribution paths live on{" "}
            <Link to="/lab" className="text-accent hover:underline">
              LAB → PATHS
            </Link>
            . Case 5 is the ISA-efficient max. Case 4 is the executable one. Flat £200 is the schedule that already exists.
          </p>
        </>
      )}

      {pane === "CLOSE" && (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            {CONCEPTS.map((c) => (
              <article key={c.k} className="rounded-md border border-line bg-panel p-4">
                <p className="font-mono text-xs text-accent">{c.k}</p>
                <p className="mt-2 font-sans text-sm leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
          <h2 className="font-mono text-sm text-accent">PENDING</h2>
          <ul className="space-y-2">
            {PENDING.map((p) => (
              <li key={p.task} className="flex flex-wrap gap-3 rounded-md border border-line bg-panel p-3 font-mono text-[11px]">
                <span className={p.pri === "CRIT" ? "text-down" : p.pri === "HIGH" ? "text-accent" : "text-muted"}>
                  {p.pri}
                </span>
                <span className="flex-1 font-sans text-sm">{p.task}</span>
                <span className="text-cyan">{p.when}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

function Plan() {
  return (
    <section className="mt-8 space-y-8">
      <p className="max-w-3xl border-l-2 border-accent pl-3 font-sans text-sm leading-relaxed">
        {PLAN_SENTENCE}
      </p>
      <p className="font-mono text-[11px] text-muted">DESK NOTE · {PLAN_ASOF} · EDUCATION ONLY</p>
      <div className="overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[640px] text-left font-mono text-[11px]">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">When</th>
              <th className="px-3 py-2">Event</th>
              <th className="px-3 py-2">Object</th>
              <th className="px-3 py-2">Watch</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {CALENDAR.map((c) => (
              <tr key={`${c.date}-${c.event}`} className="border-t border-line align-top">
                <td className="px-3 py-2 text-cyan whitespace-nowrap">
                  {c.when}
                  <br />
                  {c.date.slice(5)}
                </td>
                <td className="px-3 py-2 text-fg">{c.event}</td>
                <td className="px-3 py-2 text-muted">{c.bbg}</td>
                <td className="px-3 py-2 font-sans text-[12px] text-muted">{c.watch}</td>
                <td className="px-3 py-2 font-sans text-[12px]">{c.act}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-md border border-line bg-panel p-4">
          <p className="font-mono text-[11px] text-accent">WALK-BACK · BOTH MUST FIRE</p>
          <p className="mt-3 font-mono text-sm">
            {WALKBACK.slope.object} · {WALKBACK.slope.now} · trigger {WALKBACK.slope.trigger}
          </p>
          <p className="mt-1 font-mono text-sm">
            {WALKBACK.pmi.object} · {WALKBACK.pmi.now} · trigger {WALKBACK.pmi.trigger}
          </p>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{WALKBACK.rule}</p>
        </article>
        <article className="rounded-md border border-line bg-panel p-4">
          <p className="font-mono text-[11px] text-accent">WHAT THE PLAN IS NOT</p>
          <ul className="mt-3 space-y-2">
            {NOT_THE_PLAN.map((n) => (
              <li key={n} className="font-sans text-sm leading-relaxed text-muted">
                {n}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <ol className="space-y-3">
        {CONTRIB_TREE.map((s) => (
          <li key={s.step} className="rounded-md border border-line bg-panel p-4">
            <p className="font-mono text-xs text-cyan">
              {s.step} · {s.title.toUpperCase()}
            </p>
            <p className="mt-1 font-mono text-[11px] text-muted">{s.test}</p>
            <p className="mt-2 font-sans text-sm">{s.then}</p>
            <p className="mt-1 font-sans text-sm text-muted">Tonight: {s.now}</p>
          </li>
        ))}
      </ol>
      <div>
        <h2 className="font-mono text-sm text-accent">FIVE INGREDIENTS</h2>
        <ol className="mt-4 space-y-3">
          {INGREDIENTS.map((i) => (
            <li key={i.n} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-xs text-cyan">
                {i.n} · {i.title.toUpperCase()}
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{i.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 font-sans text-sm leading-relaxed text-muted">{TASTELESS}</p>
      </div>
    </section>
  );
}

function Score() {
  return (
    <section className="mt-8 space-y-8">
      <p className="max-w-2xl font-sans text-sm text-muted">
        One-year Sharpe using 3.63% as the cash rate. Classroom ranking of the
        6 Sep lock — not a sell ticket. Worst case is VAGS. The house still
        holds it.
      </p>
      <div className="overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[640px] text-left font-mono text-[11px]">
          <thead className="bg-bg-2 text-[10px] uppercase text-muted">
            <tr>
              <th className="px-3 py-2">#</th>
              <th className="px-3 py-2">Line</th>
              <th className="px-3 py-2">Wt</th>
              <th className="px-3 py-2">1Y</th>
              <th className="px-3 py-2">Vol</th>
              <th className="px-3 py-2">Sharpe</th>
              <th className="px-3 py-2">Fit</th>
            </tr>
          </thead>
          <tbody>
            {SHARPE.map((r) => (
              <tr key={r.ticker} className="border-t border-line">
                <td className="px-3 py-2 text-muted">{r.rank}</td>
                <td className="px-3 py-2 text-cyan">{r.ticker}</td>
                <td className="px-3 py-2 tabular-nums">{r.wt}%</td>
                <td className="px-3 py-2 tabular-nums">{r.ret1y == null ? "—" : `${r.ret1y.toFixed(2)}%`}</td>
                <td className="px-3 py-2 tabular-nums">{r.vol1y == null ? "—" : `${r.vol1y.toFixed(2)}%`}</td>
                <td
                  className={`px-3 py-2 tabular-nums ${
                    r.sharpe == null ? "text-muted" : r.sharpe < 0 ? "text-down" : "text-up"
                  }`}
                >
                  {r.sharpe == null ? "—" : r.sharpe.toFixed(3)}
                </td>
                <td className="px-3 py-2 font-sans text-[11px] text-muted">{r.fit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="font-mono text-sm text-accent">TRIM EXERCISE · NOT EXECUTED</h2>
        <p className="mt-2 font-mono text-xs text-muted">{TRIM.from}</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {TRIM.metrics.map((m) => (
            <div key={m.k} className="rounded-md border border-line bg-panel p-3">
              <p className="font-mono text-[10px] text-muted">{m.k.toUpperCase()}</p>
              <p className="mt-1 font-mono text-sm tabular-nums">
                {m.before} → {m.after}
              </p>
              <p className="mt-1 font-mono text-[11px] text-cyan">{m.delta}</p>
            </div>
          ))}
        </div>
        <ul className="mt-4 space-y-2">
          {TRIM.whyNot.map((w) => (
            <li key={w} className="font-sans text-sm leading-relaxed text-muted">
              {w}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-sans text-sm leading-relaxed">{TRIM.close}</p>
      </div>
      <div className="space-y-3">
        {LINE_CARDS.map((c) => (
          <article key={c.ticker} className="rounded-md border border-line bg-panel p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-mono text-sm text-cyan">{c.ticker}</p>
              <p className="font-mono text-[11px] text-muted">
                YTD {c.ytd} · 1Y {c.y1} · VOL {c.vol}
              </p>
            </div>
            <ul className="mt-3 grid gap-2 md:grid-cols-2">
              {c.good.map((g) => (
                <li key={g} className="font-sans text-sm text-up">
                  {g}
                </li>
              ))}
              {c.bad.map((b) => (
                <li key={b} className="font-sans text-sm text-down">
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stat({ k, v, d }: { k: string; v: string; d?: string }) {
  return (
    <div className="rounded-md border border-line bg-panel p-4">
      <p className="font-mono text-[10px] text-muted">{k}</p>
      <p className="mt-1 font-mono text-lg tabular-nums">{v}</p>
      {d && <p className="mt-1 font-mono text-[10px] text-faint">{d}</p>}
    </div>
  );
}
