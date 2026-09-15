export const PRIME_ASOF = "2026-09-07";
export const PRIME_LOCKED = "2026-09-07 23:08 BST";
export const PRIME_NAME = "Invictus Prime";
export const PRIME_CORE = 87.4;
export const PRIME_SAT = 12.6;
export const PRIME_LINES = 15;

export type PrimeLine = {
  ticker: string;
  sleeve: "core" | "sat";
  w: number;
  job: string;
  best: string;
  year: string;
  color: string;
};

export const PRIME: PrimeLine[] = [
  {
    ticker: "VWRP",
    sleeve: "core",
    w: 23.8,
    job: "Global productivity core",
    year: "2009–2021",
    color: "#8be9fd",
    best: "Post-GFC goldilocks. Residual claims did the heavy lift when growth was paid and inflation was quiet. Sized as the engine, not a forecast.",
  },
  {
    ticker: "VAGS",
    sleeve: "core",
    w: 13.5,
    job: "Deflation engine",
    year: "2008",
    color: "#6272a4",
    best: "The year everything else was on fire. Nominal quality duration is hired for the room you least want to own in reflation.",
  },
  {
    ticker: "ITPS",
    sleeve: "core",
    w: 12.5,
    job: "US CPI contract",
    year: "2021–22",
    color: "#50fa7b",
    best: "Accrual when CPI ran hot. Pays if real yields do not outrun the index. Cheap versus realised PCE on this tape.",
  },
  {
    ticker: "SGLN",
    sleeve: "core",
    w: 9.6,
    job: "Debt-cycle watchman",
    year: "2025",
    color: "#ffb86c",
    best: "The year the long debt cycle printed metal. Three of four ugly end-games still print gold. Weight sits a hair under the classroom floor of 10.",
  },
  {
    ticker: "ICOM",
    sleeve: "core",
    w: 9.6,
    job: "Goods inflation hedge",
    year: "2021–22 / 25–26",
    color: "#ff5555",
    best: "Only core line paid in both current boxes. Supply-shock years are the brief. Cap still applies. Do not chase last year's 44.",
  },
  {
    ticker: "CSH2",
    sleeve: "core",
    w: 6.5,
    job: "Optionality",
    year: "Every hike / 2022",
    color: "#bd93f9",
    best: "The week something breaks. Powder to buy the cheap line without a sale. Not a return engine.",
  },
  {
    ticker: "IDTL",
    sleeve: "core",
    w: 5.3,
    job: "Cut-cycle stub",
    year: "2008 / 2020",
    color: "#f8f8f2",
    best: "Pays when the growth engine bleeds and policy goes to the floor. That is the pairing.",
  },
  {
    ticker: "INXG",
    sleeve: "core",
    w: 3.8,
    job: "UK CPI contract",
    year: "2022 UK spike",
    color: "#50fa7b",
    best: "Sterling inflation that US TIPS cannot write. Classroom veto still stands on the five-year wreck. Prime hires it as probation, not a cleared gate.",
  },
  {
    ticker: "IGLS",
    sleeve: "core",
    w: 2.8,
    job: "UK short gilt 1–5y",
    year: "Soft landing carry",
    color: "#6272a4",
    best: "Ladder rung between cash and the aggregate. Carry without long-end term premium.",
  },
  {
    ticker: "DFNS",
    sleeve: "sat",
    w: 2.9,
    job: "Defence thematic",
    year: "2022–24 rearmament",
    color: "#ff5555",
    best: "Fragmentation spend. A decade thesis. Price can lag the headline. Hard cap.",
  },
  {
    ticker: "SMGB",
    sleeve: "sat",
    w: 2.6,
    job: "AI capex / semis",
    year: "2024–26",
    color: "#8be9fd",
    best: "Infrastructure layer of the compute cycle. Highest satellite Sharpe on this window. Still equity weather.",
  },
  {
    ticker: "COPA",
    sleeve: "sat",
    w: 2.6,
    job: "Copper miners",
    year: "2020–22 transition",
    color: "#ffb86c",
    best: "Electrification operating leverage. Confirm COPA vs COPG before 3 Oct.",
  },
  {
    ticker: "XDWI",
    sleeve: "sat",
    w: 2.1,
    job: "Global industrials",
    year: "2021 capex",
    color: "#6272a4",
    best: "Physical economy in a sustained reflation. Diversifies the theme sleeve away from chips and defence.",
  },
  {
    ticker: "XDWH",
    sleeve: "sat",
    w: 1.8,
    job: "Healthcare defensive",
    year: "2022 bear",
    color: "#50fa7b",
    best: "Satellite VAGS. Quiet when themes run. Paid when they do not.",
  },
  {
    ticker: "URNG",
    sleeve: "sat",
    w: 1.1,
    job: "Uranium / nuclear",
    year: "2023–24 renaissance",
    color: "#f1fa8c",
    best: "Energy-security ticket. Highest vol. Keep it tiny.",
  },
];

export function sumPrime(sleeve?: PrimeLine["sleeve"]) {
  return PRIME.filter((p) => !sleeve || p.sleeve === sleeve).reduce((a, p) => a + p.w, 0);
}

export const PRIME_YEAR =
  "Teaching year 2025: gold, goods, the engine and the theme sleeve all printed. That is the house already staffed — not a forecast that landed.";

export const PRIME_VERDICT = [
  { name: "Invictus Prime · 15", cagr: 6.3, terminal: 339, note: "More sentences. Slightly less 20y path in this proxy." },
  { name: "Invictus One-Pie · 13", cagr: 6.51, terminal: 353, note: "Predecessor lock. Still the better 20y line on this chart." },
  { name: "60/40", cagr: 6.8, terminal: 374, note: "Won the sunny decades. Failed 2022. Not the exam Prime is built for." },
];

export const PRIME_VS_LIVE = [
  { dim: "Lines", prime: "15", live: "14 on T212", classroom: "7" },
  { dim: "New core", prime: "INXG 3.8 · IGLS 2.8", live: "Neither", classroom: "Neither" },
  { dim: "Alt", prime: "No DBMG", live: "DBMG 6", classroom: "—" },
  { dim: "Gold", prime: "9.6", live: "10", classroom: "15 floor 10" },
  { dim: "Satellites", prime: "12.6 · six themes", live: "~14 + alt", classroom: "0" },
  { dim: "INXG", prime: "Hired on probation", live: "Absent", classroom: "Vetoed" },
];

export const PRIME_LESSONS = [
  "Every line needs a year that only it could have paid. If you cannot name the year, you do not have a job. You have a costume.",
  "Three books. Classroom seven teaches the rooms. The live ISA is fourteen lines at ~£950. Prime fifteen is the design lock, dated 7 Sep 2026, 23:08 BST. Do not flatten T212 this week.",
  "Prime adds two sterling rates tickets — IGLS 2.8 and INXG 3.8 — funded in part by trimming VAGS 17→13.5 and XDWH 2.85→1.8. ICOM steps 8.5→9.6 because it is the only core line paid in both current boxes.",
  "INXG remains the argument. Corr with ITPS 0.019. UK inflation TIPS cannot write versus a five-year wreck and a 50% drawdown. Sized at 3.8 so a second gilt crisis cannot own the book. Probation. Written kill rule.",
  "Gold at 9.6 is below the classroom floor of 10. Name the breach. Do not move the floor because a pie looks finished.",
  "2022 is the proof of concept. Prime −5.24 versus S&P −18.64, XLK −27.73, 60/40 −16. The inflation exam is the exam sixty-forty was not built for.",
  "2025 is the surprise year: gold, copper, goods carried the machine to +13.18, within 5pp of the S&P in a reflation. Already staffed. Not predicted.",
  "2026 YTD Prime +9.37 versus 60/40 +4.6. Overlay weather. Do not enlarge ICOM because Brent is $97. Cap still applies.",
  "30-year DCA at £200/month: at the 2008 trough Prime held £37,235 versus £27,715 for 100% equity. Highest absolute pounds of the four. That is why the mix exists — so a rational person keeps contributing.",
  "Prime cannot honestly promise 10–15% for 30 years. 100% VWRP, a 60–70 equity tilt, or levered risk-parity. The last is structurally closed in a retail ISA. The lever that costs nothing in risk is the debit on the 3rd.",
  "Doubling £200 to £400 at 8.2% is close to adding ~2.5pp of annual return. Case 5 (ramp then fill the ISA) is the wrapper-efficient path. Case 4 is the executable one. Flat £200 is the schedule that already exists.",
  "Sunny-Day is 67% equity, 0% linkers, ~0.35% TER. If discipline holds through every −30 year, it outperforms. The question is behavioural. Thirteen of eighteen tickers are clean rejects. INGH vs XDWI is an observation. Lock file not changed.",
  "DBMF is a gated candidate, not a sixteenth lock. 1Y Sharpe 1.47, corr VWRP 0.22, corr VAGS −0.16. Gate: T212 AutoInvest + fractional. Then, and only then, VAGS 13.5 → 10.5, DBMF 3.0.",
  "30-year fan: reshape median £300k versus Prime lock £288k versus S&P £376k. Crossover with the S&P is the 25th percentile. Below it, Prime wins. That is the lost-decade case.",
  "Six-priority stack. Hard cap. Walk-back (PMI<50 AND 2s10s<0 — currently inactive). Core drift ±3. Satellite drift ±1.5. 75/25 split. Satellite collective 20%. Higher priority eats the cash.",
  "23×5 US hours raise overnight gaps. Do not check the book between contribution dates. Stronger structural case for gated trend-following. Still not a lock-file edit.",
  "TER ~0.14% is institutional-grade for a retail ISA. It is the only guaranteed negative return. Complexity is not a return. The 20-year proxy still favours One-Pie over Prime. Extra sentences did not win the compounding.",
  "Next cash: 3 October. Walk-back inactive. Verify COPA. Verify DBMF availability — as a gate, not a trade. No hero trades. Fifteen lines or seven. Same rule.",
];

export const PRIME_TARGETS = [
  { gate: "Now · £950", do: "Do not rebuild T212 into Prime this week. 3 Oct contribution still routes the live 14-line book." },
  { gate: "£5k", do: "Protocol written. Still seven jobs plus whatever is already live. No INXG because of a brief." },
  { gate: "£10k", do: "Prime becomes eligible as a design, not mandatory. INXG must re-clear the lab gate or stay a 3.8 probation with a written kill rule." },
  { gate: "£20k", do: "IGLS may join as the short-gilt rung if VAGS drift is fat and the curve is still positively sloped." },
  { gate: "Always", do: "£200 on the 3rd. Walk-back. Drift-routing. No hero trades. Fifteen lines or seven — same rule." },
];
