/** Closing brief 8 Sep 2026. Teaching tape. Not a forecast. Not a lock-file edit. */

export const BRIEF_ASOF = "2026-09-16";
export const BRIEF_WHEN = "09:46 BST";
export const PRIME_LOCKED = "2026-09-16 09:46 BST";

export const PRIME_STATS = {
  cagr: 8.2,
  vol: 7.5,
  sharpe: 0.44,
  ter: 0.14,
  duration: 2.5,
  worstProxy: -12.6,
  worstEtf: -5.24,
  worstEtfYear: 2022,
  median30: 287816,
  p5_30: 167665,
  p95_30: 501632,
};

export const PRIME_SLEEVE_MIX = {
  equity: 34.3,
  fi: 37.9,
  linker: 16.3,
};

export const PRIME_SENTENCES: { ticker: string; ter: number; sentence: string }[] = [
  { ticker: "VWRP", ter: 0.14, sentence: "The engine is cap-weight productivity. 38% is still the largest line." },
  { ticker: "IWVL", ter: 0.25, sentence: "Value absorbs the engine. Combined 45%. Not a new room." },
  { ticker: "ICOM", ter: 0.19, sentence: "Goods inflation. Not energy equity." },
  { ticker: "IGLN", ter: 0.12, sentence: "The barn. iShares Physical Gold. Floor breach of 10 is named at 8." },
  { ticker: "DBMF", ter: 0.75, sentence: "The surfer. Target 4%. Gate: T212 AutoInvest + fractional." },
  { ticker: "WNRG", ter: 0.3, sentence: "The derrick. Integrated majors. Not ICOM. Not IOGP." },
  { ticker: "DFNS", ter: 0.55, sentence: "Governments write the cheque." },
  { ticker: "SMGB", ter: 0.35, sentence: "Size is the risk management." },
  { ticker: "XDWI", ter: 0.25, sentence: "Physical industrials. Already inside VWRP." },
  { ticker: "XDWH", ter: 0.25, sentence: "Defensive residual claims. Still equity." },
  { ticker: "COPA", ter: 0.49, sentence: "One copper wrapper." },
  { ticker: "URNG", ter: 0.65, sentence: "Tiny on purpose." },
  { ticker: "ITPS", ter: 0.1, sentence: "US CPI contract. Real-yield tax exists." },
  { ticker: "FLOT", ter: 0.1, sentence: "The float. Carry without the umbrella’s convexity." },
  { ticker: "INXG", ter: 0.1, sentence: "London thermometer. Probation. Kill rule stands." },
  { ticker: "XSTR", ter: 0.1, sentence: "The tin. Live pad uses CSH2." },
  { ticker: "IGLS", ter: 0.07, sentence: "Short gilt carry. Ladder rung." },
];

export const YEAR_TAPE: {
  y: number | string;
  prime: number;
  spx: number;
  xlk: number;
  xle: number;
  s64: number;
}[] = [
  { y: 2021, prime: 8.97, spx: 30.6, xlk: 34.74, xle: 53.31, s64: 18.4 },
  { y: 2022, prime: -5.24, spx: -18.64, xlk: -27.73, xle: 64.17, s64: -16.0 },
  { y: 2023, prime: 5.39, spx: 26.76, xlk: 56.02, xle: 0.64, s64: 16.6 },
  { y: 2024, prime: 8.72, spx: 25.71, xlk: 21.63, xle: 5.52, s64: 11.9 },
  { y: 2025, prime: 13.18, spx: 18.12, xlk: 24.6, xle: 7.88, s64: 10.1 },
  { y: "2026 YTD", prime: 9.37, spx: 13.41, xlk: 30.1, xle: 42.24, s64: 4.6 },
];

export const DCA_30: {
  name: string;
  terminal: number;
  multiple: number;
  trough08: number;
  worst: string;
}[] = [
  { name: "Invictus Prime proxy", terminal: 186368, multiple: 2.59, trough08: 37235, worst: "−19.4%" },
  { name: "Sunny-Day proxy", terminal: 252773, multiple: 3.51, trough08: 32369, worst: "−32.2%" },
  { name: "60/40", terminal: 227491, multiple: 3.16, trough08: 34782, worst: "−22.1%" },
  { name: "100% equity", terminal: 316107, multiple: 4.39, trough08: 27715, worst: "−40.3%" },
];

export const LIMITS = [
  {
    path: "100% VWRP",
    cagr: "~10–12%",
    worst: "~−40%",
    cost: "Abandons the four rooms. Sequence risk sits on a cyclical wage.",
  },
  {
    path: "60–70% equity tilt",
    cagr: "~9.5–10.5%",
    worst: "~−20%",
    cost: "Partial weather. Requires rewriting the lock file.",
  },
  {
    path: "Levered risk parity",
    cagr: "~12–15%",
    worst: "Fund-scale",
    cost: "Bridgewater's actual method. Not available in a retail ISA. Structurally closed.",
  },
];

export const CONTRIB_LEVER =
  "Doubling the debit from £200 to £400 at 8.2% is mathematically close to adding ~2.5pp of annual return. The schedule does the work the mix cannot.";

export const SUNNY = {
  name: "Sunny-Day",
  lines: 18,
  equity: 67,
  fi: 10,
  commodity: 17,
  alt: 6,
  linker: 0,
  ter: 0.35,
  cagr: "9–11%",
  worst: "−25 to −35%",
  regime: "None",
  t212: "BHMG and PAVE excluded from AutoInvest",
  terDrag: 18000,
  note: "If discipline holds through every downturn for 30 years, the higher equity weight does outperform. The question is not mathematical. It is behavioural.",
  compare: [
    { dim: "Equity", sunny: "67%", prime: "34.3%" },
    { dim: "Fixed income", sunny: "10%", prime: "37.9%" },
    { dim: "Inflation-linked", sunny: "0%", prime: "16.3%" },
    { dim: "Weighted TER", sunny: "~0.35%", prime: "~0.14%" },
    { dim: "Expected CAGR", sunny: "~9–11%", prime: "~8.2%" },
    { dim: "Worst year", sunny: "~−25 to −35%", prime: "~−12.6%" },
    { dim: "Regime matrix", sunny: "None", prime: "Four boxes" },
    { dim: "T212 AutoInvest", sunny: "Two lines excluded", prime: "All 15 listed" },
  ],
  ingh: "INGH (global infrastructure) is the only Sunny-Day line with a legitimate Prime case: inflation-linked revenues, reflation and stagflation fit, correlation to VWRP ~0.55–0.65. Logical swap would be XDWI 2.1 → INGH 2.1. Observation only. Lock file not changed.",
};

export const DBMF = {
  ticker: "DBMF LN",
  name: "iMGP DBi Managed Futures",
  job: "Trend-following profits in crashes. Long what is going up, short what is going down.",
  ter: 0.75,
  aum: "$666m",
  sharpe1y: 1.47,
  vol1y: 13.5,
  corrVwrp: 0.22,
  corrVags: -0.16,
  ytd: 10.8,
  y2022: "CTA industry +20%+ while VAGS ~−13.7%",
  gate: "Does not replace the lock until DBMF is confirmed AutoInvest-eligible and fractional on T212.",
  change: "VAGS 13.5 → 10.5. DBMF enters at 3.0. Other fourteen lines unchanged.",
  terCost: "Weighted TER +0.025pp. About £18/year on a £72k terminal — against a median +£12,200 in the 30y fan.",
  overnight:
    "SEC 23×5 equity hours raise overnight gaps. That is more noise around VWRP and SMGB, and a stronger structural case for trend-following — still gated on T212.",
};

export const MC30 = [
  { p: "P5", reshape: 176930, prime: 167665, spx: 126421 },
  { p: "P25", reshape: 241158, prime: 230159, spx: 238454 },
  { p: "P50", reshape: 300016, prime: 287816, spx: 375515 },
  { p: "P75", reshape: 374127, prime: 360836, spx: 596797 },
  { p: "P95", reshape: 515981, prime: 501632, spx: 1178262 },
];

export const CONCEPTS = [
  {
    k: "TER",
    body: "The only guaranteed negative return. Silent, continuous, compounds against you. Prime ~0.14% is institutional-grade for a retail ISA. Every 0.10pp saved over 30 years on a growing book is worth about £8–12k in terminal value.",
  },
  {
    k: "CAGR",
    body: "Geometric mean, not arithmetic. +50 then −33 is +0.25%, not +8.5%. A −50% loss needs +100% to break even. That is why a −12.6% worst year matters more than it looks.",
  },
  {
    k: "SHARPE",
    body: "(Return − cash) ÷ vol. Prime modelled 0.44 versus 60/40 0.37 and 100% equity 0.38. Reshape with DBMF targets 0.48–0.52. A one-year Sharpe is not a firing squad.",
  },
  {
    k: "VaR",
    body: "At 7.5% vol, teaching 95% 1-month VaR is about −3.0% (£300 on £10k). Not yet a historical simulation against Prime's own correlation matrix. Pending.",
  },
];

export const PENDING: { pri: string; task: string; when: string }[] = [
  { pri: "CRIT", task: "Verify DBMF LN on T212 — AutoInvest, fractional", when: "Before 3 Oct" },
  { pri: "HIGH", task: "Verify COPA LN on T212", when: "Before 3 Oct" },
  { pri: "HIGH", task: "US CPI August — 13:30 BST", when: "10 Sep" },
  { pri: "HIGH", task: "FOMC — IDTL most exposed", when: "16 Sep" },
  { pri: "HIGH", task: "Walk-back, drift, route £200", when: "3 Oct" },
  { pri: "MED", task: "Formal VaR (parametric + historical)", when: "Next session" },
  { pri: "MED", task: "Stress 2008 / COVID / Hormuz / 1970s on exact weights", when: "Next session" },
  { pri: "MED", task: "Watch GT10 5.00 · Brent 100 · GTII10 2.50", when: "Ongoing" },
  { pri: "LOW", task: "ITPA listing — possible ITPS swap at 12.5%", when: "Ongoing" },
];

export const HIERARCHY = [
  {
    n: 1,
    name: "Hard cap",
    rule: "No Invictus line above its cap. No satellite above 5%.",
    now: "Live.",
  },
  {
    n: 2,
    name: "Walk-back",
    rule: "PMI < 50 AND 2s10s < 0bp → full £200 to core. Satellites get zero.",
    now: "INACTIVE · PMI 54.6 · 2s10s +38bp.",
  },
  {
    n: 3,
    name: "Drift · core",
    rule: "Any Invictus line ±3pp from target → next cash to the most underweight core line.",
    now: "Check on 3 Oct. Do not sell.",
  },
  {
    n: 4,
    name: "Drift · satellite",
    rule: "Any satellite ±1.5pp from target → next cash to the most underweight satellite. Only if core is clean.",
    now: "Check on 3 Oct.",
  },
  {
    n: 5,
    name: "Contribution split",
    rule: "£200 on the 3rd. 75% core / 25% satellite unless walk-back fired.",
    now: "The only action date.",
  },
  {
    n: 6,
    name: "Satellite collective",
    rule: "Satellites > 20% of the book → stop feeding themes entirely.",
    now: "Prime sat 12.6%. Clear.",
  },
];

export const BUILD = [
  {
    ticker: "VWRP + IWVL",
    move: "45 → 38 + 7",
    why: "Engine stays 45%. Value absorbs. Not a new room.",
  },
  {
    ticker: "WNRG",
    move: "New 3.0",
    why: "The derrick. Energy equity gap. Enters at 1% on 3 Oct if Brent holds £75. Not ICOM.",
  },
  {
    ticker: "VAGS → FLOT",
    move: "6 → 0 / 0 → 6",
    why: "By drift, not sale. Carry without 7–8y convexity. Deflation C is named.",
  },
  {
    ticker: "IDTL → INXG",
    move: "Starve / 2 → 3",
    why: "Stub starved of new cash. Thermometer raised. Probation and kill rule stand.",
  },
  {
    ticker: "Count",
    move: "16 claimed · 17 listed",
    why: "Living 12 + quiet 5. The lock names the hole instead of pretending the slogan won.",
  },
];

export const OVERNIGHT = {
  title: "23×5 US equities",
  body: "SEC approved 23-hour, 5-day equity hours. Overnight is still 0.52% of 2026 volume. Direction is clear. Scale is not.",
  implications: [
    "More overnight gaps on CPI, FOMC, Hormuz. VWRP and SMGB will mark harder. The rule does not change: do not check the book between contribution dates.",
    "As sessions mature, ETF NAV tracking improves. Positive for a long holder over 3–5 years.",
    "Stronger structural case for DBMF — trend-following lives on gaps. Still gated on T212 AutoInvest.",
  ],
};

export const BRIEF_PARA =
  "Invictus Prime II is live. T212 16 Sep 2026, 09:46 BST. Seventeen lines. VAGS and IDTL sold. FLOT, IWVL, WNRG, DBMF held. Gold wrapper is IGLN. Copper is WisdomTree metal, not miners. FOMC 19:00. Walk-back off. Weights only. Education only.";

export const HORMUZ =
  "Brent $100.95 on Hormuz. European gas above €80. $6bn long-dated buyback versus $10bn priced. Yields at new YTD highs. ICOM paid. Duration taxed. That is the design. Observe. Do not edit the lock.";
