import { TAPE, TAPE_ASOF, TAPE_REGIME, TAPE_STAGE } from "@/lib/tape";

export function Ticker() {
  const items = [...TAPE, ...TAPE];
  return (
    <div className="border-b border-line bg-bg-2">
      <div className="flex items-center gap-3 overflow-hidden px-3 py-1 font-mono text-[11px] leading-none">
        <span className="shrink-0 text-accent">
          {TAPE_ASOF} · {TAPE_STAGE} · {TAPE_REGIME.toUpperCase()}
        </span>
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="ticker-track flex w-max gap-6 whitespace-nowrap text-muted">
            {items.map((p, i) => (
              <span key={`${p.mnemonic}-${i}`}>
                <span className="text-cyan">{p.mnemonic}</span>{" "}
                <span className="text-fg">{p.value}</span>
                <span className={p.dir === "down" ? "text-down" : p.dir === "up" ? "text-up" : "text-muted"}>
                  {" "}
                  {p.chg}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
