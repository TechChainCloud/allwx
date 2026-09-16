export const PRIME_ASOF = "2026-09-16";
export const PRIME_LOCKED = "2026-09-16 09:46 BST";
export const PRIME_NAME = "Invictus Prime II";
export const PRIME_CORE = 80.5;
export const PRIME_SAT = 19.5;
export const PRIME_LINES = 17;
export const PRIME_CLAIMED = 16;
export const PRIME_PREV = "Invictus Prime I · 15 lines · locked 7 Sep 2026 23:08 BST · archived";

export type PrimeLine = {
  ticker: string;
  sleeve: "living" | "quiet";
  w: number;
  job: string;
  best: string;
  year: string;
  color: string;
};

export const PRIME: PrimeLine[] = [
  { ticker: "VWRP", sleeve: "living", w: 38, job: "The Engine", year: "Always", color: "#8be9fd", best: "Cap-weight productivity rent. Cut 45→38 so IWVL can absorb. Still the largest line." },
  { ticker: "IWVL", sleeve: "living", w: 7, job: "Value tilt", year: "High-rate regime", color: "#50fa7b", best: "Absorbs from VWRP. Combined engine stays 45%. The only add that does not invent a line." },
  { ticker: "ICOM", sleeve: "living", w: 8, job: "Irrigation", year: "2022 / 26 oil", color: "#ff5555", best: "Broad goods. Not energy equity. Cap still applies." },
  { ticker: "IGLN", sleeve: "living", w: 8, job: "The Barn", year: "2025", color: "#ffb86c", best: "iShares Physical Gold. Same metal job as SGLN. Classroom floor 10. Named at 8." },
  { ticker: "DBMF", sleeve: "living", w: 4, job: "The Surfer", year: "Transitions", color: "#bd93f9", best: "Trend. Gate passed — the line is held at 4%. Not a fifth weather." },
  { ticker: "WNRG", sleeve: "living", w: 3, job: "The Derrick", year: "Stagflation oil", color: "#f1fa8c", best: "Live at 3%. Integrated energy equity. Not ICOM. Not IOGP." },
  { ticker: "DFNS", sleeve: "living", w: 3, job: "Geopolitical tax", year: "2023–25", color: "#ff5555", best: "Government payee. Cap 5%." },
  { ticker: "SMGB", sleeve: "living", w: 2.5, job: "Digital picks", year: "2024–26", color: "#8be9fd", best: "Size is the risk management. Signed trim stays unsigned." },
  { ticker: "XDWI", sleeve: "living", w: 2, job: "Physical picks", year: "Reflation capex", color: "#6272a4", best: "Industrials. Already rhymes with VWRP." },
  { ticker: "XDWH", sleeve: "living", w: 2, job: "Night-shift doctor", year: "Defensive equity", color: "#50fa7b", best: "Still a residual claim. Not a linker." },
  { ticker: "COPA", sleeve: "living", w: 2, job: "Electrification metal", year: "2021–22", color: "#ffb86c", best: "WisdomTree Copper ETC. Metal, not miners. One wrapper." },
  { ticker: "URNG", sleeve: "living", w: 1, job: "Nuclear option", year: "Fuel story", color: "#f1fa8c", best: "Tiny on purpose." },
  { ticker: "ITPS", sleeve: "quiet", w: 6, job: "US CPI contract", year: "2021–22", color: "#50fa7b", best: "Rent review. Real-yield tax exists." },
  { ticker: "FLOT", sleeve: "quiet", w: 6, job: "The Float", year: "Higher-for-longer", color: "#bd93f9", best: "Live at 6%. Replaced VAGS by sale. Carry, not convexity." },
  { ticker: "INXG", sleeve: "quiet", w: 3, job: "London thermometer", year: "2022 UK spike", color: "#50fa7b", best: "Absorbs IDTL’s starved cash. Still on probation. Kill rule stands." },
  { ticker: "XSTR", sleeve: "quiet", w: 3, job: "The Tin", year: "Every hike", color: "#bd93f9", best: "Overnight GBP swap. Live tin. Residual cash £16 sits beside it." },
  { ticker: "IGLS", sleeve: "quiet", w: 1.5, job: "Short gilt carry", year: "Soft landing", color: "#6272a4", best: "Ladder rung. Prime I ticket kept smaller." },
];


export function sumPrime(sleeve?: PrimeLine["sleeve"]) {
  return PRIME.filter((p) => !sleeve || p.sleeve === sleeve).reduce((a, p) => a + p.w, 0);
}

export const PRIME_YEAR =
  "Live = lock. T212 16 Sep 2026, 09:46 BST. NAV £1,083.45. Seventeen lines plus £16.01 cash. VAGS and IDTL sold. FOMC still 19:00. Walk-back still off.";

export const PRIME_VERDICT = [
  { name: "Invictus Prime II · 17 listed", cagr: 6.3, terminal: 339, note: "No new 20y proxy. Figure is Prime I’s path, not an II audit. Recency-heavy. Deflation self-score C." },
  { name: "Invictus Prime I · 15", cagr: 6.3, terminal: 339, note: "Archived 7 Sep lock. Still the last audited 20y path." },
  { name: "60/40", cagr: 6.8, terminal: 374, note: "Won the sunny decades. Failed 2022." },
];

export const PRIME_VS_LIVE = [
  { dim: "Lines", prime: "17", live: "17 on T212", classroom: "7" },
  { dim: "Engine", prime: "VWRP 38 + IWVL 7 = 45", live: "38.18 + 7.03", classroom: "30" },
  { dim: "Energy equity", prime: "WNRG 3", live: "3.01", classroom: "None" },
  { dim: "Quiet duration", prime: "FLOT 6 · VAGS 0 · IDTL 0", live: "FLOT 6.02", classroom: "VAGS 18 · IDTL 6" },
  { dim: "Gold", prime: "IGLN 8", live: "7.99", classroom: "15 floor 10" },
  { dim: "INXG", prime: "3 · probation", live: "3.00", classroom: "Vetoed" },
];

export const PRIME_LESSONS = [
  "Prime II is live. T212 16 Sep 2026, 09:46 BST, NAV £1,083.45. Seventeen ETF lines plus £16.01 residual cash. The pad is the lock.",
  "VAGS and IDTL were sold. The protocol said contributions only. This lock overrides that sentence. Deflation C is named, not hidden.",
  "IWVL 7% absorbs VWRP. Combined engine 45%. Live 38.18 + 7.03.",
  "WNRG is live at 3%. Energy equity, not ICOM. IOGP stays off the pad.",
  "FLOT is live at 6%. Carry without the umbrella’s convexity. The 2008 duration spike is no longer staffed.",
  "IGLN 8% is iShares Physical Gold. Same metal job as SGLN. Classroom floor 10. Named.",
  "COPA on T212 is WisdomTree Copper — the metal ETC, not Global X miners. One copper wrapper.",
  "DBMF 4% is held. The AutoInvest gate is passed. Still not a fifth weather.",
  "INXG 3% remains probation. Kill rule stands.",
  "URNG printed −10.4% this session on a 1% line (~10bp of NAV). Size is the risk management.",
  "Walk-back still needs both keys. FOMC 19:00 BST is a print. 3 Oct still the contribution date — fill the light lines (IGLS, URNG, SMGB), do not invent an eighteenth.",
  "Seventeen lines or seven. Jobs, not stories.",
];

export const PRIME_TARGETS = [
  { gate: "Tonight", do: "Live = lock. Watch FOMC 19:00. Do not rebuild again." },
  { gate: "3 Oct", do: "Fill IGLS 1.43→1.5, URNG 0.96→1, SMGB 2.44→2.5 if walk-back is clear. No eighteenth line." },
  { gate: "Always", do: "No new personalities. Caps hold. Size is the risk management." },
];

