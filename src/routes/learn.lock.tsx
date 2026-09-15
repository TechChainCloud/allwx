import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Segment } from "@/components/ui/segment";
import {
  AUTOINVEST_ON,
  FOMC_AT,
  GOVERNANCE,
  IF_THEN,
  LOCK_ENTRIES,
  PERMANENTLY_DEAD,
  SIGN_AFTER,
  SIGNED_SENTENCE_LOCKED,
  SIGNED_SENTENCE_REVISED,
} from "@/lib/machine";
import { isFomcPassed } from "@/lib/verdict";
import { useInvictus } from "@/store/machine";

export const Route = createFileRoute("/learn/lock")({ component: LockPage });

function LockPage() {
  const store = useInvictus();
  const [confirm, setConfirm] = useState("");
  const fomc = isFomcPassed();
  const canSign = fomc && confirm.trim().toUpperCase() === "SIGN";

  return (
    <div className="space-y-10">
      <header className="max-w-2xl">
        <p className="stamp text-[11px] text-accent">Lock file · teaching</p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight">
          The only document that authorises AutoInvest.
        </h1>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
          A briefing, an analysis, a conversation — none of these are a change
          log entry. This page is a classroom. It does not move T212.
        </p>
      </header>

      <blockquote className="max-w-3xl border-l border-accent pl-5 font-sans text-lg leading-relaxed italic">
        {store.signedAt ? SIGNED_SENTENCE_REVISED : SIGNED_SENTENCE_LOCKED}
      </blockquote>

      <section className="rounded-md border border-line bg-panel p-5">
        <p className="stamp text-[10px] text-muted">Working pie</p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Segment
            ariaLabel="Working pie"
            value={store.pieMode}
            onChange={store.setPieMode}
            options={[
              { value: "locked", label: "12 Sep lock" },
              { value: "revised", label: "Revised preview" },
            ]}
          />
          <p className="max-w-sm font-sans text-xs leading-relaxed text-muted">
            Preview is a briefing. Signature switches the working pie to Revised
            in this classroom only.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Four entries — {SIGN_AFTER}</h2>
        <ol className="mt-4 space-y-2">
          {LOCK_ENTRIES.map((e) => (
            <li key={e.n} className="rounded-md border border-line bg-panel px-5 py-4">
              <p className="stamp text-[10px] text-muted">Entry {e.n}</p>
              <p className="mt-2 font-mono text-sm">
                {e.from} → {e.to}
              </p>
              <p className="mt-1 font-sans text-sm text-muted">{e.reason}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-md border border-line bg-bg-2 p-5 sm:p-7">
        <p className="stamp text-[10px] text-muted">Sign after FOMC</p>
        <p className="mt-2 font-sans text-sm text-muted">
          FOMC {new Date(FOMC_AT).toUTCString()}. AutoInvest on {AUTOINVEST_ON}.{" "}
          {fomc ? "The meeting has occurred. Decision date can now precede change date." : "Do not sign before the print."}
        </p>
        <label className="mt-4 block max-w-sm">
          <span className="stamp mb-2 block text-[10px] text-muted">Type SIGN</span>
          <input
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="h-11 w-full rounded-md border border-line bg-panel px-3 font-mono text-sm"
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button disabled={!canSign} onClick={store.sign}>
            Sign the sentence
          </Button>
          <Button variant="outline" onClick={store.unsign}>
            Unsign
          </Button>
        </div>
        {store.signedAt ? (
          <p className="mt-3 font-mono text-xs text-up">Signed {store.signedAt}</p>
        ) : null}
      </section>

      <section>
        <h2 className="font-mono text-2xl">Governance</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {GOVERNANCE.map((g) => (
            <li key={g.id} className="rounded-md border border-line bg-panel p-4">
              <p className="font-mono text-sm">{g.title}</p>
              <p className="mt-2 font-sans text-sm text-muted">{g.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-mono text-2xl">Permanently dead</h2>
        <ul className="mt-4 space-y-2">
          {PERMANENTLY_DEAD.map((d) => (
            <li key={d.id} className="rounded-md border border-line bg-panel px-4 py-3">
              <p className="font-mono text-sm text-down">{d.name}</p>
              <p className="mt-1 font-sans text-sm text-muted">{d.reason}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="max-w-2xl font-sans text-sm italic text-muted">{IF_THEN}</p>
    </div>
  );
}
