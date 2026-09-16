export const HONEST = {
  asof: "2026-09-01",
  book: 710,
  invictusYtd: 8.5,
  iwdaYtd: 12.23,
  vwrpYtd: 12.98,
  life80Ytd: 18.09,
  gapBp: 370,
  invictus1y: 14.2,
  iwda1y: 19.58,
  vwrp1y: 21.58,
  invictus3y: 38,
  iwda3y: 72.31,
  vwrp3y: 61.58,
  note: "Classroom tape of total-return prints. Weighted ALLWX is an estimate from sleeve weights times line returns. Not a live NAV. Not a promise.",
};

export const SLEEVE_PRINTS: {
  ticker: string;
  ytd: number;
  y3?: number;
  job: string;
}[] = [
  { ticker: "VWRP", ytd: 12.98, y3: 61.58, job: "World equities" },
  { ticker: "VAGS", ytd: -0.4, job: "Global IG" },
  { ticker: "SGLN", ytd: 0.72, y3: 109.06, job: "Gold" },
  { ticker: "ITPS", ytd: 0.43, y3: 4.96, job: "US TIPS" },
  { ticker: "ICOM", ytd: 33.38, y3: 52.39, job: "Commodities" },
  { ticker: "CSH2", ytd: 2.75, job: "Cash-like" },
  { ticker: "IDTL", ytd: -2.64, y3: -1.27, job: "Long Treasuries" },
];

export const BACKTEST = {
  caveat:
    "ETF share classes do not all have twenty years of history. Proxies: MXWO, LEGATRGH, XAU in sterling, US TIPS TR, BCOMTR, SONIA, US Treasury 20+ TR. Annual rebalance. No spreads. Gaps in 2011 and 2016–17 excluded from the year table. Teaching object, not a live audited track record.",
  stats: [
    { name: "ALLWX classroom", ann: 7.45, vol: 6.51, worst: -3.91, best: 16.93, neg: "3 / 15", sharpe: 1.15, cum: 186 },
    { name: "100% world (MXWO)", ann: 12.22, vol: 11.34, worst: -18.8, best: 25.0, neg: "2 / 15", sharpe: 1.08, cum: 420 },
    { name: "60/40", ann: 8.85, vol: 6.58, worst: -8.24, best: 16.7, neg: "2 / 15", sharpe: 1.34, cum: 247 },
  ],
  years: [
    { y: 2007, aw: 12.2, eq: 8.3, s64: 7.3, gold: 30.9, com: 14.7, long: 9.0, win: "ALLWX" },
    { y: 2008, aw: -3.9, eq: -18.8, s64: -8.2, gold: 5.8, com: -12.5, long: 13.7, win: "ALLWX" },
    { y: 2009, aw: 12.2, eq: 18.1, s64: 13.0, gold: 24.4, com: 7.3, long: -3.6, win: "Equity" },
    { y: 2010, aw: 13.6, eq: 16.4, s64: 11.8, gold: 29.6, com: 21.0, long: 5.9, win: "Equity" },
    { y: 2012, aw: 6.1, eq: 11.4, s64: 9.2, gold: 7.1, com: -5.5, long: 2.0, win: "Equity" },
    { y: 2013, aw: 0.8, eq: 25.0, s64: 15.0, gold: -28.3, com: -11.3, long: -2.7, win: "Equity" },
    { y: 2014, aw: 4.5, eq: 12.3, s64: 10.5, gold: -1.4, com: -11.8, long: 5.1, win: "Equity" },
    { y: 2015, aw: -1.8, eq: 5.5, s64: 3.9, gold: -10.4, com: -20.3, long: 0.8, win: "Equity" },
    { y: 2018, aw: -1.6, eq: -2.5, s64: -1.5, gold: -1.6, com: -5.8, long: 0.9, win: "60/40" },
    { y: 2019, aw: 13.0, eq: 23.5, s64: 16.7, gold: 18.3, com: 3.5, long: 6.9, win: "Equity" },
    { y: 2020, aw: 10.1, eq: 13.2, s64: 9.9, gold: 25.1, com: -5.9, long: 8.0, win: "Equity" },
    { y: 2021, aw: 9.8, eq: 23.5, s64: 13.5, gold: -3.6, com: 28.2, long: -2.3, win: "Equity" },
    { y: 2024, aw: 12.5, eq: 21.6, s64: 14.2, gold: 27.2, com: 7.4, long: 0.6, win: "Equity" },
    { y: 2025, aw: 16.9, eq: 13.2, s64: 9.8, gold: 64.6, com: 7.7, long: 6.3, win: "ALLWX" },
    { y: 2026, aw: 7.5, eq: 12.6, s64: 7.6, gold: 0.2, com: 33.2, long: -0.5, win: "Equity" },
  ],
  lessons: [
    "2008 is the defining year. Classroom −3.9 versus equity −18.8. Gold and the fire brigade absorbed a demand crash. Sixty-forty still lost eight.",
    "At the 2008 trough a Prime-style DCA book held more absolute pounds than 100% equity. That is the behavioural case — so a rational person keeps contributing.",
    "2013 is the honest cost. Gold −28 in sterling, commodities −11. Classroom still positive, twenty-four points behind a tracker. Insurance looks unemployed in goldilocks.",
    "2022 is the inflation validation. ETF-weighted Prime −5.24 versus S&P −18.64 and 60/40 −16. Commodities carried the architecture.",
    "2025 is gold's sterling year. A watchman sized to be heard can still move the pie when its weather arrives. Already staffed. Not predicted.",
    "Twenty-year cumulative: tracker +420, classroom +186. The gap is the premium paid for rooms the last two decades rarely visited. Whether that premium was cheap depends on the next two decades, not the last.",
    "Sunny-Day's higher equity weight wins the sunny terminal and loses the trough. TER drag ~£18k over 30 years on £200/month is not a rounding error.",
  ],
};

export const MONTE = {
  start: 710,
  monthly: 200,
  years: 20,
  mean: 7.45,
  vol: 6.51,
  contributed: 48710,
  paths: 10000,
  caveat:
    "Log-normal paths from the backtest mean and vol. Ten thousand draws. Does not invent unprecedented tails. 2025 gold is inside the mean. A 5.5–6.5 forward mean would land the median nearer £85–95k. Teaching fan, not a forecast.",
  fan: [
    { p: "P95", label: "Best tail", value: 136926, ret: 88216 },
    { p: "P75", label: "Above median", value: 119250, ret: 70540 },
    { p: "P50", label: "Median", value: 106225, ret: 57515 },
    { p: "P25", label: "Below median", value: 93312, ret: 44602 },
    { p: "P5", label: "Worse tail", value: 76194, ret: 27484 },
    { p: "P0", label: "Contributions only", value: 48710, ret: 0 },
  ],
  crossings: [
    { gate: "£10k Phase 1", when: "Year 3–4", note: "Value tilt and EM local become eligible, not mandatory." },
    { gate: "£25k", when: "Year 7–8", note: "Drawdown protocol must already be written in pounds." },
    { gate: "£50k Phase 2", when: "Year 13", note: "Currency decision ceases to be accidental." },
    { gate: "£100k", when: "Year 19–20", note: "Median path. Raise the contribution and it arrives earlier." },
  ],
};

export type PhaseLine = {
  ticker: string;
  name: string;
  w: number;
  ter: string;
  fx: string;
  role: string;
  flag?: "new" | "cut" | "hold";
};

export const PHASES: {
  id: string;
  name: string;
  band: string;
  lines: number;
  ter: string;
  hedged: string;
  growth: number;
  real: number;
  def: number;
  action: string;
  rows: PhaseLine[];
}[] = [
  {
    id: "p0",
    name: "Phase 0",
    band: "£0–£10k",
    lines: 7,
    ter: "0.12%",
    hedged: "25% GBP-hedged",
    growth: 30,
    real: 39,
    def: 31,
    action: "Contribute. Point cash at the thin sleeve. Do not add lines.",
    rows: [
      { ticker: "VWRP", name: "FTSE All-World", w: 30, ter: "0.14", fx: "Unhedged", role: "Goldilocks + reflation", flag: "hold" },
      { ticker: "SGLN", name: "Physical gold", w: 15, ter: "0.12", fx: "Unhedged", role: "Crisis + debasement", flag: "hold" },
      { ticker: "ITPS", name: "USD TIPS", w: 14, ter: "0.10", fx: "Unhedged", role: "Inflation accretion", flag: "hold" },
      { ticker: "VAGS", name: "Global Agg GBP-H", w: 18, ter: "0.08", fx: "Hedged", role: "Disinflation", flag: "hold" },
      { ticker: "ICOM", name: "BCOM swap", w: 10, ter: "0.19", fx: "Unhedged", role: "Supply shock", flag: "hold" },
      { ticker: "CSH2", name: "GBP ultrashort", w: 7, ter: "0.10", fx: "Hedged", role: "Powder", flag: "hold" },
      { ticker: "IDTL", name: "US Treasury 20+", w: 6, ter: "0.07", fx: "Unhedged", role: "Stage 5 residual", flag: "hold" },
    ],
  },
  {
    id: "p1",
    name: "Phase 1",
    band: "£10k–£50k",
    lines: 9,
    ter: "0.16%",
    hedged: "20% GBP-hedged",
    growth: 30,
    real: 39,
    def: 31,
    action: "IWVL 10 from VWRP. SEML 5 from VAGS. INXG stays vetoed unless Prime probation is written with a kill rule. Do not rebuild the live book into extra lines because the pad is small.",
    rows: [
      { ticker: "VWRP", name: "FTSE All-World", w: 20, ter: "0.14", fx: "Unhedged", role: "Cap-weight growth", flag: "cut" },
      { ticker: "IWVL", name: "World value factor", w: 10, ter: "0.30", fx: "Unhedged", role: "Value tilt inside growth", flag: "new" },
      { ticker: "SGLN", name: "Physical gold", w: 15, ter: "0.12", fx: "Unhedged", role: "Crisis + debasement", flag: "hold" },
      { ticker: "ITPS", name: "USD TIPS", w: 14, ter: "0.10", fx: "Unhedged", role: "Inflation accretion", flag: "hold" },
      { ticker: "VAGS", name: "Global Agg GBP-H", w: 13, ter: "0.08", fx: "Hedged", role: "Disinflation", flag: "cut" },
      { ticker: "SEML", name: "EM local govt", w: 5, ter: "0.50", fx: "Unhedged", role: "EM carry", flag: "new" },
      { ticker: "ICOM", name: "BCOM swap", w: 10, ter: "0.19", fx: "Unhedged", role: "Supply shock", flag: "hold" },
      { ticker: "CSH2", name: "GBP ultrashort", w: 7, ter: "0.10", fx: "Hedged", role: "Powder", flag: "hold" },
      { ticker: "IDTL", name: "US Treasury 20+", w: 6, ter: "0.07", fx: "Unhedged", role: "Stage 5 residual", flag: "hold" },
    ],
  },
  {
    id: "p2",
    name: "Phase 2",
    band: "£50k–£100k",
    lines: 10,
    ter: "0.17%",
    hedged: "19% GBP-hedged",
    growth: 33,
    real: 37,
    def: 30,
    action: "MVOL 5 inside growth. Larger cash bay. Write the dollar decision.",
    rows: [
      { ticker: "VWRP", name: "FTSE All-World", w: 18, ter: "0.14", fx: "Unhedged", role: "Cap-weight growth", flag: "cut" },
      { ticker: "IWVL", name: "World value factor", w: 10, ter: "0.30", fx: "Unhedged", role: "Value tilt", flag: "hold" },
      { ticker: "MVOL", name: "World min vol", w: 5, ter: "0.30", fx: "Unhedged", role: "Equity buffer", flag: "new" },
      { ticker: "SGLN", name: "Physical gold", w: 15, ter: "0.12", fx: "Unhedged", role: "Crisis + debasement", flag: "hold" },
      { ticker: "ITPS", name: "USD TIPS", w: 12, ter: "0.10", fx: "Unhedged", role: "Inflation accretion", flag: "cut" },
      { ticker: "ICOM", name: "BCOM swap", w: 10, ter: "0.19", fx: "Unhedged", role: "Supply shock", flag: "hold" },
      { ticker: "VAGS", name: "Global Agg GBP-H", w: 10, ter: "0.08", fx: "Hedged", role: "Disinflation", flag: "cut" },
      { ticker: "SEML", name: "EM local govt", w: 5, ter: "0.50", fx: "Unhedged", role: "EM carry", flag: "hold" },
      { ticker: "CSH2", name: "GBP ultrashort", w: 9, ter: "0.10", fx: "Hedged", role: "Powder", flag: "new" },
      { ticker: "IDTL", name: "US Treasury 20+", w: 6, ter: "0.07", fx: "Unhedged", role: "Stage 5 residual", flag: "hold" },
    ],
  },
  {
    id: "p3",
    name: "Phase 3",
    band: "£100k+",
    lines: 10,
    ter: "0.17%",
    hedged: "22% GBP-hedged",
    growth: 30,
    real: 35,
    def: 35,
    action: "No new lines. Grow the bay. Keep gold floor and commodity cap.",
    rows: [
      { ticker: "VWRP", name: "FTSE All-World", w: 15, ter: "0.14", fx: "Unhedged", role: "Cap-weight growth", flag: "cut" },
      { ticker: "IWVL", name: "World value factor", w: 10, ter: "0.30", fx: "Unhedged", role: "Value tilt", flag: "hold" },
      { ticker: "MVOL", name: "World min vol", w: 5, ter: "0.30", fx: "Unhedged", role: "Equity buffer", flag: "hold" },
      { ticker: "SGLN", name: "Physical gold", w: 15, ter: "0.12", fx: "Unhedged", role: "Floor 15, never <10", flag: "hold" },
      { ticker: "ITPS", name: "USD TIPS", w: 10, ter: "0.10", fx: "Unhedged", role: "Inflation accretion", flag: "cut" },
      { ticker: "ICOM", name: "BCOM swap", w: 10, ter: "0.19", fx: "Unhedged", role: "Hard cap 10", flag: "hold" },
      { ticker: "VAGS", name: "Global Agg GBP-H", w: 10, ter: "0.08", fx: "Hedged", role: "Disinflation", flag: "hold" },
      { ticker: "SEML", name: "EM local govt", w: 7, ter: "0.50", fx: "Unhedged", role: "EM carry", flag: "new" },
      { ticker: "CSH2", name: "GBP ultrashort", w: 12, ter: "0.10", fx: "Hedged", role: "Bay for amber", flag: "new" },
      { ticker: "IDTL", name: "US Treasury 20+", w: 6, ter: "0.07", fx: "Unhedged", role: "Stage 5 residual", flag: "hold" },
    ],
  },
];

export const CANDIDATE_TABLE: {
  ticker: string;
  name: string;
  ret5: number;
  vol5: number;
  dd5: number;
  sharpe: number;
  mark: "KEEP" | "ADD" | "WAIT" | "VETO";
  why: string;
}[] = [
  { ticker: "SGLN", name: "Gold (held)", ret5: 19.48, vol5: 17.01, dd5: -24.9, sharpe: 0.94, mark: "KEEP", why: "Best risk-adjusted print in the book. Floor." },
  { ticker: "IWVL", name: "World value", ret5: 17.19, vol5: 16.29, dd5: -26.5, sharpe: 0.84, mark: "ADD", why: "Phase 1. 610bp over cap-weight with a live reflation brief." },
  { ticker: "VWRP", name: "All-World (held)", ret5: 11.09, vol5: 12.99, dd5: -17.6, sharpe: 0.58, mark: "KEEP", why: "Baseline growth engine. Trim to fund value, do not fire." },
  { ticker: "IWMO", name: "World momentum", ret5: 11.35, vol5: 19.26, dd5: -29.6, sharpe: 0.41, mark: "VETO", why: "More vol, no extra return. Trend factor, not a new room." },
  { ticker: "IWQU", name: "World quality", ret5: 9.41, vol5: 15.63, dd5: -27.7, sharpe: 0.38, mark: "VETO", why: "Worse than the engine you already hired." },
  { ticker: "INFR", name: "Infrastructure", ret5: 5.76, vol5: 12.44, dd5: -23.3, sharpe: 0.18, mark: "VETO", why: "Loses to cash-like on a Sharpe basis." },
  { ticker: "MVOL", name: "Min vol", ret5: 5.27, vol5: 10.71, dd5: -18.5, sharpe: 0.17, mark: "WAIT", why: "Return extracted. Only a Phase 2 intra-equity buffer at scale." },
  { ticker: "SEML", name: "EM local bonds", ret5: 2.05, vol5: 7.45, dd5: -11.1, sharpe: -0.2, mark: "ADD", why: "Ugly Sharpe, lowest drawdown. Correlation is the job. Phase 1." },
  { ticker: "INXG", name: "UK linkers", ret5: -9.65, vol5: 20.01, dd5: -50.9, sharpe: -0.66, mark: "VETO", why: "Theory yes, instrument no. Prime hires 3.8 on probation. Lab veto is not silently retired." },
  { ticker: "DBMF", name: "Managed futures UCITS", ret5: 0, vol5: 13.5, dd5: 0, sharpe: 1.47, mark: "WAIT", why: "1Y Sharpe 1.47. Corr VWRP 0.22, VAGS −0.16. 2022 CTA year. Gate: T212 AutoInvest + fractional. Not a lock-file edit tonight." },
  { ticker: "INGH", name: "Global infrastructure", ret5: 5.76, vol5: 12.44, dd5: -23.3, sharpe: 0.18, mark: "WAIT", why: "Sunny-Day's only legitimate Prime case. Possible XDWI swap. Observation. Lock unchanged." },
];

export const NEVER = [
  "Gold floor fifteen, never below ten. Best Sharpe in the book. Not a funding source.",
  "Commodities hard-capped at ten. Synthetic wrapper. Cap does not move with a good year.",
  "Long Treasuries stay six until Stage 4/5 confirms. Scale does not change a regime residual.",
];

export function projectBook(start: number, monthly: number, years: number, ann: number) {
  const r = ann / 100 / 12;
  const n = years * 12;
  let v = start;
  for (let i = 0; i < n; i++) v = v * (1 + r) + monthly;
  const contrib = start + monthly * n;
  return { value: v, contrib, gain: v - contrib };
}
