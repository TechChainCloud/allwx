export const TWENTY_ASOF = "2026-09-07";
export const TWENTY_NAME = "20-instrument All-Weather ISA";

export type TwentyLine = {
  ticker: string;
  sleeve: "equity" | "nominal" | "linker" | "real" | "cash" | "theme";
  job: string;
  design20: number;
  live18: number;
  floor?: number;
  cap?: number;
  terBp?: number;
  ret1y?: number | null;
  vol1y?: number | null;
  sharpe?: number | null;
  rooms: string;
  note: string;
};

export const TWENTY: TwentyLine[] = [
  { ticker: "VWRP", sleeve: "equity", job: "Global productivity core", design20: 18, live18: 18, floor: 15, cap: 22, terBp: 14, ret1y: 21.75, vol1y: 11.08, sharpe: 1.635, rooms: "G / R", note: "Engine stays. Cut from classroom 30 and house 25 to fund factors." },
  { ticker: "VVAL", sleeve: "equity", job: "Global value factor", design20: 5, live18: 0, rooms: "R / G", note: "No live London print in the run. Replaced by IUKD. Not in the 18-line book." },
  { ticker: "WSML", sleeve: "equity", job: "Global small-cap", design20: 5, live18: 5, floor: 3, cap: 8, terBp: 17, ret1y: 21.67, vol1y: 14.88, sharpe: 1.212, rooms: "G / R", note: "Size premium. Independent of mega-cap concentration inside VWRP." },
  { ticker: "VFEM", sleeve: "equity", job: "EM equity", design20: 5, live18: 5, floor: 3, cap: 8, terBp: 22, ret1y: 20.44, vol1y: 15.13, sharpe: 1.111, rooms: "R", note: "EM growth and commodity cycle, sized outside VWRP's EM stub." },
  { ticker: "IUKD", sleeve: "equity", job: "UK dividend value", design20: 5, live18: 4, floor: 2, cap: 7, terBp: 19, ret1y: 27.91, vol1y: 11.37, sharpe: 2.135, rooms: "G / R", note: "GBP-native value. Substitutes for VVAL when that ticker has no tape." },
  { ticker: "VAGS", sleeve: "nominal", job: "Global agg GBP-hedged", design20: 8, live18: 8, floor: 5, cap: 12, terBp: 8, ret1y: 0.22, vol1y: 3.61, sharpe: -0.945, rooms: "D / G", note: "Deflation engine cut from house 15 / lock 17. Still the drag line." },
  { ticker: "IGLS", sleeve: "nominal", job: "UK short gilt 1–5y", design20: 5, live18: 5, floor: 3, cap: 8, terBp: 7, ret1y: 2.56, vol1y: 2.09, sharpe: -0.512, rooms: "D / G", note: "GBP carry without long-end term premium." },
  { ticker: "IDTL", sleeve: "nominal", job: "US Treasury 20+", design20: 5, live18: 5, floor: 0, cap: 8, terBp: 7, ret1y: -3.85, vol1y: 9.17, sharpe: -0.816, rooms: "D", note: "Cut-cycle stub. Same job as the house." },
  { ticker: "IEMB", sleeve: "nominal", job: "EM sovereign USD", design20: 4, live18: 4, floor: 2, cap: 7, terBp: 22, ret1y: 4.99, vol1y: 5.91, sharpe: 0.23, rooms: "R / G", note: "Carry and credit, not G7 rates. Different corr group from VFEM." },
  { ticker: "ITPS", sleeve: "linker", job: "US TIPS CPI contract", design20: 7, live18: 7, floor: 4, cap: 10, terBp: 10, ret1y: 0.1, vol1y: 5.9, sharpe: -0.598, rooms: "S / R", note: "USD inflation anchor. Cut from house 10 / lock 13.6." },
  { ticker: "INXG", sleeve: "linker", job: "UK index-linked gilts", design20: 4, live18: 4, floor: 2, cap: 7, terBp: 10, ret1y: 2.88, vol1y: 9.19, sharpe: -0.082, rooms: "S / R", note: "Classroom veto stands until the 5y wreck is retired. Theory yes. Instrument still on probation." },
  { ticker: "TPSA", sleeve: "linker", job: "Short TIPS 0–5y", design20: 3, live18: 0, rooms: "S", note: "No live print in the run. Dropped. Duration buffer not hired." },
  { ticker: "SGLN", sleeve: "real", job: "Physical gold", design20: 7, live18: 7, floor: 4, cap: 10, terBp: 12, ret1y: 21.18, vol1y: 25.86, sharpe: 0.679, rooms: "S / D", note: "Watchman below the house floor of 10. That is a design choice, not a week." },
  { ticker: "ICOM", sleeve: "real", job: "Broad commodities", design20: 5, live18: 5, floor: 3, cap: 8, terBp: 19, ret1y: 44.36, vol1y: 17.85, sharpe: 2.282, rooms: "R / S", note: "Goods shock. Same job, smaller sleeve." },
  { ticker: "SSLV", sleeve: "real", job: "Physical silver", design20: 2, live18: 2, floor: 1, cap: 4, terBp: 20, ret1y: 60.21, vol1y: 61.08, sharpe: 0.926, rooms: "R / S", note: "Industrial-monetary hybrid. High vol. Listed twice on one broken run." },
  { ticker: "WTRE", sleeve: "real", job: "Global listed REITs", design20: 2, live18: 2, floor: 1, cap: 4, terBp: 14, ret1y: 22.17, vol1y: 21.19, sharpe: 0.875, rooms: "G / R", note: "Beta vs equities ~0.86. Sized as income, not a fifth weather. Also duplicated on that run." },
  { ticker: "CSH2", sleeve: "cash", job: "Overnight GBP optionality", design20: 5, live18: 5, floor: 3, cap: 8, terBp: 7, ret1y: 4.25, vol1y: 0.41, sharpe: 1.512, rooms: "All", note: "Bay. Smaller than house 7." },
  { ticker: "SMGB", sleeve: "theme", job: "Semiconductors / AI", design20: 2, live18: 2, floor: 0, cap: 4, terBp: 35, ret1y: 114.9, vol1y: 38.66, sharpe: 2.878, rooms: "R", note: "Theme cap 2. Conviction without becoming Maximus." },
  { ticker: "DFNS", sleeve: "theme", job: "Global defence", design20: 2, live18: 2, floor: 0, cap: 4, terBp: 40, ret1y: 2.85, vol1y: 26.5, sharpe: -0.029, rooms: "R / S", note: "Fragmentation spend. Still equity weather." },
  { ticker: "URNG", sleeve: "theme", job: "Uranium / nuclear", design20: 1, live18: 1, floor: 0, cap: 3, terBp: 65, ret1y: 17.19, vol1y: 50.71, sharpe: 0.267, rooms: "S / R", note: "Ticket size. Highest vol in the set." },
];

export function sumTwenty(field: "design20" | "live18") {
  return TWENTY.reduce((a, r) => a + r[field], 0);
}

export const TWENTY_SLEEVES = [
  { id: "equity", label: "Equity", design: 38, live: 32, job: "Market + value + small + EM + UK dividend" },
  { id: "nominal", label: "Nominal bond", design: 22, live: 22, job: "Global agg + UK short + US long + EM sovereign" },
  { id: "linker", label: "Inflation-linked", design: 14, live: 11, job: "US TIPS + UK linkers. Short TIPS dropped." },
  { id: "real", label: "Real assets", design: 16, live: 16, job: "Gold + BCOM + silver + REITs" },
  { id: "cash", label: "Liquidity", design: 5, live: 5, job: "Overnight optionality" },
  { id: "theme", label: "Thematic", design: 5, live: 5, job: "Three tickets. Fifty percent wipe is 2.5pp." },
];

export const TWENTY_VS_HOUSE = [
  { dim: "Lines", classroom: "7", house: "14", twenty: "20 design / 18 listed" },
  { dim: "Equity", classroom: "30 VWRP", house: "25 VWRP + sats", twenty: "32–38 factored" },
  { dim: "Gold floor", classroom: "15, never <10", house: "10 live", twenty: "7 — below classroom floor" },
  { dim: "INXG", classroom: "Vetoed", house: "Absent", twenty: "4% — probation, not a pass" },
  { dim: "Themes", classroom: "0", house: "6 lines ~14%", twenty: "3 lines, 5%" },
  { dim: "When", classroom: "Always", house: "Live ISA now", twenty: "Scale book. Not £950." },
];

export const TWENTY_PRINCIPLES = [
  {
    title: "Equity is factored, not just indexed",
    body: "VWRP remains the engine. Value, small-cap, EM and UK dividend are hired because they are different return streams, not because twenty sounds complete.",
  },
  {
    title: "Bonds are laddered by curve and geography",
    body: "No single yield curve is asked to hedge equities in reflation. Short UK, global agg, EM credit, long US convexity.",
  },
  {
    title: "Inflation has more than one contract",
    body: "US CPI and UK RPI are different indices and different currencies. That is the argument for INXG. The 2022 gilt wreck is the argument against it.",
  },
  {
    title: "Real assets are four jobs, not one bucket",
    body: "Metal, goods, silver hybrid, property income. WTRE beta to equities is high, so it stays tiny.",
  },
  {
    title: "Themes stay at five percent",
    body: "Three lines. No line above two. A simultaneous 50% drawdown costs two and a half points. Painful. Not structural.",
  },
];

export const TWENTY_REJECTS = [
  "Leverage, derivatives, inverse funds.",
  "Crypto. No defined job in the four rooms.",
  "Active funds. TER compounds against the household.",
  "Single-country equity besides IUKD.",
  "VHYL, RBTX, FAIG, ABTC — already rejected for the house.",
  "More than three theme tickets.",
];

export const TWENTY_HOLES = [
  {
    title: "The 18-line table sums to 91%",
    body: "Dropping VVAL 5 and TPSA 3, and cutting IUKD 5→4, removes 9pp. The write-up still says 100%. A vector that does not confirm is not a lock. Park the 9pp or rewrite the weights. Do not pretend.",
  },
  {
    title: "The Bloomberg run listed SSLV and WTRE twice",
    body: "Same error class as the 170% and 190% pies. Duplicate rows are not diversification. They are a broken weight vector.",
  },
  {
    title: "INXG is still vetoed in the classroom",
    body: "Five-year return ugly, drawdown −50.9%, gilt-crisis duration. The 20-line design rehires it at 4% as a sterling CPI contract. Theory survived. This ticker has not cleared the lab gate. Hold the tension. Do not silently override episode 12.",
  },
  {
    title: "Gold at 7% breaks the classroom floor",
    body: "Teaching floor is 15, never below 10. This design goes to 7 to fund factors. That is a different religion. Name it. Do not call it the same house.",
  },
  {
    title: "Eighteen lines at £950 is costume",
    body: "Minimum size, spreads, and FX tickets make a twenty-line book a later-phase object. The live ISA stays fourteen. This page is a scale sketch.",
  },
];

export const TWENTY_RULE =
  "Twenty instruments or seven — the rule does not change. Contribution on a date. Drift-routing. Walk-back when PMI is under 50 and 2s10s inverted. No selling. Instrument count is not the compounding engine.";
