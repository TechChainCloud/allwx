export const HOUSE_ASOF = "2026-09-16";
export const HOUSE_NAV_ASOF = "2026-09-16 09:46 BST";
export const HOUSE_NAV = 1083.45;
export const HOUSE_CASH = 16.01;
export const HOUSE_NAME = "Invictus Prime II";
export const HOUSE_REGIME = "Reflation primary · stagflation CO-PRIMARY · live = lock";
export const NEXT_CONTRIB = "2026-10-03";

export type HouseLine = {
  ticker: string;
  name: string;
  role: string;
  family: "living" | "quiet";
  locked: number;
  target: number;
  live: number;
  pounds: number;
  day?: number;
  color: string;
  fit: "PAY" | "TAX" | "MIX" | "POWDER";
  signal: string;
  note: string;
  thesis: string;
};

export const HOUSE: HouseLine[] = [
  {
    ticker: "VWRP",
    name: "FTSE All-World Acc",
    role: "The Engine",
    family: "living",
    locked: 38,
    target: 38,
    live: 38.18,
    pounds: 407.65,
    day: -0.57,
    color: "#8be9fd",
    fit: "TAX",
    signal: "Session risk-off. Still the largest employee.",
    note: "Combined with IWVL the engine is 45%. Do not trim on a morning mark.",
    thesis:
      "Cap-weight productivity rent. Prime II cut it from 45 so value can absorb. Look-through equity is still the drawdown you own.",
  },
  {
    ticker: "ICOM",
    name: "Diversified Commodity Swap",
    role: "Irrigation",
    family: "living",
    locked: 8,
    target: 8,
    live: 8.05,
    pounds: 86.91,
    day: 3.62,
    color: "#ff5555",
    fit: "PAY",
    signal: "Session standout. Overlay weather.",
    note: "Cap still 10. A green morning is not a rewrite. Not energy equity.",
    thesis:
      "Broad goods. Paid in reflation and stagflation. The derrick is a different job. Do not double the stuff.",
  },
  {
    ticker: "IGLN",
    name: "iShares Physical Gold",
    role: "The Barn",
    family: "living",
    locked: 8,
    target: 8,
    live: 7.99,
    pounds: 85.24,
    day: -1.66,
    color: "#ffb86c",
    fit: "TAX",
    signal: "Real-yield tax on the short clock.",
    note: "Classroom floor is 10. Lock is 8. Named. Wrapper is IGLN, not SGLN.",
    thesis:
      "Physical metal. Not miners. Same job as the Invesco barn, different wrapper. Floor breach is the sentence, not the ticker.",
  },
  {
    ticker: "IWVL",
    name: "MSCI World Value",
    role: "Value tilt",
    family: "living",
    locked: 7,
    target: 7,
    live: 7.03,
    pounds: 75.01,
    day: -0.07,
    color: "#50fa7b",
    fit: "MIX",
    signal: "Quiet session. Factor is a long clock.",
    note: "Absorbs VWRP. Combined engine 45%. The only add that did not invent a line.",
    thesis:
      "Value factor. Front-loaded cash flows. High-rate weather. Phase 1 at £10k already named it. Now live at 7%.",
  },
  {
    ticker: "FLOT",
    name: "USD Floating Rate Bond",
    role: "The Float",
    family: "quiet",
    locked: 6,
    target: 6,
    live: 6.02,
    pounds: 64.24,
    day: -0.14,
    color: "#bd93f9",
    fit: "MIX",
    signal: "Carry. Not convexity.",
    note: "VAGS is gone. Gate listed-on-platform is passed. Different job from the umbrella.",
    thesis:
      "1.67y USD floater. Removes 7–8y duration from a positive stock-bond tape. Deflation C is the named cost. Does not pay a 2008 duration spike.",
  },
  {
    ticker: "ITPS",
    name: "USD TIPS Acc",
    role: "US CPI contract",
    family: "quiet",
    locked: 6,
    target: 6,
    live: 6.01,
    pounds: 64.19,
    day: -0.65,
    color: "#50fa7b",
    fit: "TAX",
    signal: "Real-yield tax. Inflation job intact.",
    note: "Not gold. Can print red in a hot CPI year if real yields jump.",
    thesis:
      "US inflation-linked principal. Rent-review clause. Real-yield channel is the tax. The contract is still the contract.",
  },
  {
    ticker: "DBMF",
    name: "DBi Managed Futures",
    role: "The Surfer",
    family: "living",
    locked: 4,
    target: 4,
    live: 4.02,
    pounds: 42.95,
    day: 3.47,
    color: "#ff79c6",
    fit: "PAY",
    signal: "Trend paid this session. Gate is passed — the line is held.",
    note: "Not a fifth weather. 4% is a ticket. AutoInvest + fractional is no longer the excuse.",
    thesis:
      "Managed futures. Transition weather. Can be paid when markets persist and fined when they whip. Different animal from gold, duration, or goods.",
  },
  {
    ticker: "XSTR",
    name: "GBP Overnight Rate Swap",
    role: "The Tin",
    family: "quiet",
    locked: 3,
    target: 3,
    live: 3.02,
    pounds: 32.21,
    day: -0.03,
    color: "#bd93f9",
    fit: "POWDER",
    signal: "Carry near zero duration.",
    note: "Live tin. CSH2 is not in this book. Residual platform cash sits beside it at £16.01.",
    thesis:
      "Overnight sterling. Walk-back reserve. Not a return engine. Emergency boiler cash still sits outside the pie.",
  },
  {
    ticker: "WNRG",
    name: "SPDR MSCI World Energy",
    role: "The Derrick",
    family: "living",
    locked: 3,
    target: 3,
    live: 3.01,
    pounds: 32.10,
    day: 0.19,
    color: "#f1fa8c",
    fit: "PAY",
    signal: "Energy equity. Not ICOM.",
    note: "Already at 3%, not a 1% starter. IOGP stays off the pad. Recency is loud — size is the risk management.",
    thesis:
      "Integrated majors plus midstream plus E&P. The structure above the well. Residual claims. Still rhymes with VWRP in a demand crash.",
  },
  {
    ticker: "INXG",
    name: "GBP Index-Linked Gilts Dist",
    role: "London thermometer",
    family: "quiet",
    locked: 3,
    target: 3,
    live: 3.0,
    pounds: 32.05,
    day: -0.84,
    color: "#50fa7b",
    fit: "TAX",
    signal: "UK real-yield tax. Probation.",
    note: "Classroom veto stands. Kill rule stands. 3% so a second gilt crisis cannot own the book.",
    thesis:
      "Sterling inflation TIPS cannot write. Five-year wreck is still the veto. Hired on probation, not a cleared gate.",
  },
  {
    ticker: "DFNS",
    name: "VanEck Defense Acc",
    role: "Geopolitical tax",
    family: "living",
    locked: 3,
    target: 3,
    live: 3.0,
    pounds: 31.98,
    day: -0.53,
    color: "#ff6b6b",
    fit: "TAX",
    signal: "Thesis lagging price. Hard cap 5%.",
    note: "A strait is not a contribution signal.",
    thesis:
      "Listed defence. Government payee. Still equity weather. Three percent is a ticket. Ten is Maximus leaking in.",
  },
  {
    ticker: "SMGB",
    name: "VanEck Semiconductor Acc",
    role: "Digital picks",
    family: "living",
    locked: 2.5,
    target: 2.5,
    live: 2.44,
    pounds: 26.01,
    day: -3.88,
    color: "#7ad4e8",
    fit: "TAX",
    signal: "Session vol. Size is the risk management.",
    note: "Slightly under 2.5. Do not fatten off-calendar because AI is loud.",
    thesis:
      "Semiconductor equity. Highest-beta theme. Pays capex. Fined when the discount rate jumps. Tiny on purpose.",
  },
  {
    ticker: "XDWH",
    name: "MSCI World Health Care",
    role: "Night-shift doctor",
    family: "living",
    locked: 2,
    target: 2,
    live: 1.98,
    pounds: 21.17,
    day: -0.75,
    color: "#69d47a",
    fit: "TAX",
    signal: "Defensive residual claims. Still equity.",
    note: "Not a linker. Not gold.",
    thesis:
      "Healthcare equity. Quiet when themes run. Paid when they do not. Still a residual claim.",
  },
  {
    ticker: "XDWI",
    name: "MSCI World Industrials",
    role: "Physical picks",
    family: "living",
    locked: 2,
    target: 2,
    live: 1.94,
    pounds: 20.66,
    day: -2.41,
    color: "#8892b0",
    fit: "TAX",
    signal: "Cycle mark. Already inside VWRP.",
    note: "Diversifier inside living, not a fourth weather.",
    thesis:
      "Broad listed industrials. Cycle exposure without a single-commodity story.",
  },
  {
    ticker: "COPA",
    name: "WisdomTree Copper",
    role: "Electrification metal",
    family: "living",
    locked: 2,
    target: 2,
    live: 1.92,
    pounds: 20.52,
    day: -3.48,
    color: "#e6a35c",
    fit: "TAX",
    signal: "Metal, not miners. Session down.",
    note: "T212 line is WisdomTree Copper ETC. Not Global X miners. Not COPG. One copper wrapper.",
    thesis:
      "The metal of electrification, expressed as an ETC. Different look-through from copper miners. One line. Hard cap.",
  },
  {
    ticker: "IGLS",
    name: "UK Gilts 0–5yr Dist",
    role: "Short gilt carry",
    family: "quiet",
    locked: 1.5,
    target: 1.5,
    live: 1.43,
    pounds: 15.25,
    day: -0.39,
    color: "#6272a4",
    fit: "MIX",
    signal: "Ladder rung. Slightly light of 1.5.",
    note: "Carry without long-end term premium. Not the fire brigade.",
    thesis:
      "Short sterling duration. Between the tin and the old umbrella. Correct higher-for-longer positioning.",
  },
  {
    ticker: "URNG",
    name: "Global X Uranium Acc",
    role: "Nuclear option",
    family: "living",
    locked: 1,
    target: 1,
    live: 0.96,
    pounds: 10.29,
    day: -10.37,
    color: "#f1fa8c",
    fit: "TAX",
    signal: "Worst mark this session. Tiny on purpose.",
    note: "A 10% slide on a 1% line is ~10bp of the farm. Do not chase. Do not panic.",
    thesis:
      "Uranium miners. Fuel story. Highest vol in the book. Size is the risk management.",
  },
];

export const CORE_TICKERS = ["VWRP", "IWVL", "ICOM", "IGLN", "ITPS", "FLOT", "XSTR"] as const;

export function sumFamily(
  family: HouseLine["family"],
  field: "locked" | "target" | "live",
) {
  return HOUSE.filter((h) => h.family === family).reduce((a, h) => a + h[field], 0);
}

export function sumField(field: "locked" | "target" | "live") {
  return HOUSE.reduce((a, h) => a + h[field], 0);
}

export const CLASSROOM_VS_HOUSE = [
  { ticker: "VWRP", classroom: 30, house: 38, job: "Engine raised; IWVL 7 sits beside it (45 combined)" },
  { ticker: "IWVL", classroom: 0, house: 7, job: "Value tilt. Not in the seven." },
  { ticker: "IGLN", classroom: 15, house: 8, job: "Barn at 8. Floor 10 named. Wrapper IGLN." },
  { ticker: "ITPS", classroom: 14, house: 6, job: "US CPI contract. Quieter than classroom." },
  { ticker: "ICOM", classroom: 10, house: 8, job: "Irrigation. Derrick is extra energy equity." },
  { ticker: "XSTR", classroom: 7, house: 3, job: "Tin. Residual cash £16 sits beside it." },
  { ticker: "IDTL", classroom: 6, house: 0, job: "Fire brigade sold. Deflation C named." },
  { ticker: "VAGS", classroom: 18, house: 0, job: "Umbrella sold. FLOT is carry, not convexity." },
];

export const REGIME_MATRIX = [
  {
    box: "Reflation (primary)",
    winners: "VWRP, IWVL, ICOM, WNRG, COPA",
    losers: "FLOT (real), IGLS",
    sats: "SMGB, DFNS, XDWI pay growth. URNG is a coin flip.",
  },
  {
    box: "Stagflation overlay",
    winners: "ICOM, IGLN, WNRG, ITPS*, INXG*",
    losers: "VWRP, IWVL, XDWI, SMGB",
    sats: "DBMF if the trend is oil/yields. Residual claims still eat equity weather.",
  },
];

export const TENSIONS = [
  {
    title: "Live equals lock",
    body: "T212 print 16 Sep 09:46 BST, NAV £1,083.45, 17 lines plus £16.01 cash. The pad is no longer fourteen. Prime II is not a queue for 3 Oct. It is the book.",
  },
  {
    title: "Sales happened",
    body: "VAGS and IDTL are gone. The protocol said contributions only, no sales inside the ISA. This lock overrides that sentence. Deflation C is the named cost of firing the umbrella and the brigade on a hiking-cycle mark.",
  },
  {
    title: "IGLN is not SGLN",
    body: "iShares Physical Gold, 8%. Same metal job, different wrapper. Classroom floor 10. Named.",
  },
  {
    title: "WisdomTree Copper is the metal",
    body: "Not Global X miners, not COPG. One copper wrapper. Miners are residual claims. The ETC is the stuff. Different look-through.",
  },
  {
    title: "DBMF gate is passed",
    body: "Held at 4%. AutoInvest + fractional is no longer the excuse. It is still not a fifth weather.",
  },
  {
    title: "URNG −10.4% today",
    body: "On a 1% line that is ~10bp of the farm. Size is the risk management. Do not chase. Do not panic.",
  },
];

export const PRIOR_SEVEN = {
  asof: "prior 7-line snapshot",
  nav: 855.93,
  cost: 850.98,
  lines: [
    { ticker: "VWRP", pct: 29.84, pounds: 255.4 },
    { ticker: "VAGS", pct: 16.28, pounds: 139.38 },
    { ticker: "SGLN", pct: 14.83, pounds: 126.92 },
    { ticker: "ITPS", pct: 13.76, pounds: 117.77 },
    { ticker: "ICOM", pct: 12.74, pounds: 109.08 },
    { ticker: "CSH2", pct: 6.77, pounds: 57.94 },
    { ticker: "IDTL", pct: 5.77, pounds: 49.41 },
  ],
};

export const POWDER_VARIANT = [
  { ticker: "VWRP", w: 36 },
  { ticker: "IWVL", w: 7 },
  { ticker: "ICOM", w: 8 },
  { ticker: "IGLN", w: 8 },
  { ticker: "FLOT", w: 6 },
  { ticker: "ITPS", w: 6 },
  { ticker: "DBMF", w: 4 },
  { ticker: "XSTR", w: 5 },
  { ticker: "WNRG", w: 3 },
  { ticker: "INXG", w: 3 },
  { ticker: "DFNS", w: 3 },
  { ticker: "SMGB", w: 2.5 },
  { ticker: "XDWH", w: 2 },
  { ticker: "XDWI", w: 2 },
  { ticker: "COPA", w: 2 },
  { ticker: "IGLS", w: 1.5 },
  { ticker: "URNG", w: 1 },
];

export const BROKEN_PIES = [
  {
    name: "Draft that summed 170",
    total: 170,
    fault: "Core seven plus DBMG plus ILS plus CATB plus four 10% themes. Two cat-bond lines and a theme sleeve that forgot the vector must sum to 100.",
  },
  {
    name: "Draft that summed 190",
    total: 190,
    fault: "Same error plus SMGB and DFNS stacked at 10 each. A pie that cannot confirm is not a house. It is a shopping list.",
  },
];

export const SAT_CAPS = [
  { ticker: "SMGB", cap: 5, why: "Highest-beta theme. Research hard cap." },
  { ticker: "DFNS", cap: 5, why: "Geopolitics is a headline machine. Ticket, not a weather." },
  { ticker: "COPA", cap: 4, why: "One copper wrapper. Metal ETC. Never a second copper line." },
  { ticker: "URNG", cap: 2, why: "Fuel story. Easy to romanticise." },
  { ticker: "XDWI", cap: 4, why: "Broad industrials already rhyme with VWRP." },
  { ticker: "XDWH", cap: 5, why: "Defensive sat. Still equity." },
  { ticker: "WNRG", cap: 5, why: "Energy equity. Not a second ICOM. Recency is loud." },
  { ticker: "DBMF", cap: 8, why: "Alt, not a fifth weather." },
];

export const MAXIMUS_WARN =
  "Maximus is a fifteen-line high-growth experiment. Semis, robots, copper, uranium, defence, housing, industrials — a theme park. It is not the house. A pie that sums to 170 or 190 percent is not diversification. It is a broken weight vector. The house stays at 100.";

export const NEXT_LEVER =
  "3 October contribution. Live already matches the lock. Point new cash at the most underweight line after checking live NAV (IGLS 1.43 vs 1.5, URNG 0.96 vs 1, SMGB 2.44 vs 2.5). Confirm walk-back is inactive. Do not add an eighteenth line.";

export const HONEST =
  "The book was rebuilt. VAGS and IDTL were sold. FLOT, IWVL, WNRG, DBMF, INXG, IGLS, XSTR are live. A hiking-cycle three-year mark fired the fire brigade. That will look clever until the demand crash the brigade was hired for. Under-earning in that room is now a choice, not an accident.";
