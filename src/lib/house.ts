export const HOUSE_ASOF = "2026-09-06";
export const HOUSE_NAV_ASOF = "2026-09-07";
export const HOUSE_NAV = 950.44;
export const HOUSE_CASH = 0.08;
export const HOUSE_NAME = "Invictus One-Pie";
export const HOUSE_REGIME = "Reflation primary · stagflation CO-PRIMARY · Brent $100.95";
export const NEXT_CONTRIB = "2026-10-03";

export type HouseLine = {
  ticker: string;
  name: string;
  role: string;
  family: "core" | "alt" | "sat";
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
    role: "Growth engine",
    family: "core",
    locked: 23.8,
    target: 25,
    live: 25.05,
    pounds: 238.07,
    day: 0.38,
    color: "#8be9fd",
    fit: "PAY",
    signal: "Reflation winner. Stagflation overlay is the risk.",
    note: "Largest line. PMI still 54.6. No classroom case to trim on a session.",
    thesis:
      "One line on thousands of listed firms. Paid in goldilocks and reflation. Fined in a demand crash and in stagflation if margins compress. House cut it from the classroom thirty to fund an alt and six tickets. Still the largest employee.",
  },
  {
    ticker: "VAGS",
    name: "Global Agg GBP-H Acc",
    role: "Stabiliser",
    family: "core",
    locked: 17.0,
    target: 15,
    live: 15.02,
    pounds: 142.74,
    day: -0.16,
    color: "#6272a4",
    fit: "TAX",
    signal: "Headwind in both current boxes. Deliberate drag.",
    note: "The line that saves a disinflation. Conditioning it on this week's ten-year turns the house into a momentum sleeve.",
    thesis:
      "Sterling-hedged investment grade. The deflation / disinflation engine. A pure reflation optimizer would zero it. The house holds it because the room can rotate. When growth and inflation both fall, this is the employee that keeps the book standing.",
  },
  {
    ticker: "ITPS",
    name: "USD TIPS Acc",
    role: "Bodyguard",
    family: "core",
    locked: 13.6,
    target: 10,
    live: 10.02,
    pounds: 95.18,
    day: 0,
    color: "#50fa7b",
    fit: "MIX",
    signal: "Inflation yes. Real-yield risk if yields outrun the index.",
    note: "BEI cheap versus realised CPI. Real yield still below the 2.50 drag threshold in the lock note.",
    thesis:
      "US inflation-linked principal. Pays in stagflation only if real yields do not rise faster than the index. Classroom fourteen became house ten. The lock was richer than the operational target. Do not fatten it because last month's print was hot.",
  },
  {
    ticker: "SGLN",
    name: "Physical gold",
    role: "Night watchman",
    family: "core",
    locked: 10.2,
    target: 10,
    live: 9.93,
    pounds: 94.33,
    day: -0.34,
    color: "#ffb86c",
    fit: "TAX",
    signal: "Thesis intact. Taxed today by the real-yield channel.",
    note: "Floor the house will defend. Trimming the watchman because Tuesday was red is the error the classroom exists to prevent.",
    thesis:
      "Long-cycle claim when paper promises multiply. Short-term tax when real yields rise and hike bets firm. The debt-cycle brief is not a weekly trade. Classroom fifteen sits at the floor of ten. Never below.",
  },
  {
    ticker: "ICOM",
    name: "BCOM swap Acc",
    role: "Shock absorber",
    family: "core",
    locked: 8.5,
    target: 8,
    live: 8.06,
    pounds: 76.58,
    day: 0.6,
    color: "#ff5555",
    fit: "PAY",
    signal: "Only core line paid in both current boxes.",
    note: "A regime-optimizer would push it. The house does not chase. Contributions close drift.",
    thesis:
      "Broad commodity swap. Wins in reflation and in a supply-shock overlay at the same time. Cap stays because the wrapper is synthetic. Undersized for tonight's tape. Still the correct size for an all-weather book.",
  },
  {
    ticker: "CSH2",
    name: "GBP ultrashort Acc",
    role: "Parking bay",
    family: "core",
    locked: 6.8,
    target: 7,
    live: 7.02,
    pounds: 66.75,
    day: 0.04,
    color: "#bd93f9",
    fit: "POWDER",
    signal: "Neutral / carry. Optionality has a price.",
    note: "Option on the 3 Oct contribution and on a binary policy meeting. Not dead cash.",
    thesis:
      "Near-overnight sterling claim. Loses a quiet goldilocks year versus equities by two or three points. In a late-expansion book with a live overlay it is dry powder, not a yield toy. Emergency cash for the boiler sits outside the pie.",
  },
  {
    ticker: "DBMG",
    name: "DBi Managed Futures",
    role: "Trend sleeve",
    family: "alt",
    locked: 0,
    target: 6,
    live: 5.95,
    pounds: 56.57,
    day: -1.1,
    color: "#ff79c6",
    fit: "MIX",
    signal: "Different animal. Not an eighth weather.",
    note: "Present on T212. Absent from the 6 Sep Bloomberg lock. Size it as an alt.",
    thesis:
      "Trend-following managed futures. Can be paid when markets persist and fined when they whip. It is not gold, not duration, not a commodity basket. Treat it as a sixth family, not a weather substitute. Six percent is a ticket. Twenty would be a second religion.",
  },
  {
    ticker: "IDTL",
    name: "US Treasury 20+ Dist",
    role: "Fire brigade",
    family: "core",
    locked: 5.1,
    target: 5,
    live: 4.99,
    pounds: 47.44,
    day: 0.08,
    color: "#f8f8f2",
    fit: "TAX",
    signal: "Headwind. Yield pressure. Cut-cycle stub.",
    note: "Already the smallest core line. Do not add it because yields might fall.",
    thesis:
      "Very long US duration. Paid in a confirmed cut cycle and a demand crash. Fined while inflation and hike bets stay live. Classroom six became house five. Stage 3 does not get a bigger brigade just because the last rally in bonds was pretty.",
  },
  {
    ticker: "XDWH",
    name: "World Health Care",
    role: "Defensive sat",
    family: "sat",
    locked: 2.85,
    target: 3,
    live: 3.0,
    pounds: 28.5,
    day: -0.21,
    color: "#69d47a",
    fit: "TAX",
    signal: "Defensive — regime-neutral. Satellite VAGS.",
    note: "Under-earns in reflation. A single-name session is not the thesis.",
    thesis:
      "Healthcare equity. The satellite sleeve's defensive anchor. Pays when themes are under pressure. Still residual claims. A Novartis-style print is weather, not a fired employee.",
  },
  {
    ticker: "COPG",
    name: "Copper miners Acc",
    role: "Electrification sat",
    family: "sat",
    locked: 2.7,
    target: 3,
    live: 2.99,
    pounds: 28.44,
    day: 0.56,
    color: "#e6a35c",
    fit: "PAY",
    signal: "Reflation yes. China / growth roll is the risk.",
    note: "Lock printed COPA. Live book is COPG. Confirm the wrapper before 3 Oct.",
    thesis:
      "Miners, not the metal. Electrification and grid spend. Correct for reflation. Vulnerable if China slows on an energy shock. Two tickers must not both sit in the pie. One copper line. Hard cap.",
  },
  {
    ticker: "DFNS",
    name: "Defence Acc",
    role: "Fragmentation sat",
    family: "sat",
    locked: 3.0,
    target: 3,
    live: 2.98,
    pounds: 28.31,
    day: -0.88,
    color: "#ff6b6b",
    fit: "MIX",
    signal: "Thesis intact. Price can lag the headline.",
    note: "Geopolitics as a theme, not a weather. Hard cap. No new contributions because a strait is loud.",
    thesis:
      "Listed defence equity. A regime overlay, not a stabiliser. Fragmentation and spend can persist for a cycle. It still eats equity weather when risk-off arrives. Three percent is a ticket. Ten percent is Maximus leaking into the house.",
  },
  {
    ticker: "SMGB",
    name: "Semiconductors Acc",
    role: "Capex sat",
    family: "sat",
    locked: 2.7,
    target: 2,
    live: 2.0,
    pounds: 19.02,
    day: -0.21,
    color: "#7ad4e8",
    fit: "PAY",
    signal: "AI capex cycle. Reflation pays.",
    note: "Hard research cap five. Do not fatten it outside the contribution date.",
    thesis:
      "Semiconductor equity. Highest-beta theme in the sleeve. Pays when capex and growth surprise. Is fined hard when the discount rate jumps. Two percent operational. The lock was richer. Drift is not a buy signal.",
  },
  {
    ticker: "XDWI",
    name: "World Industrials",
    role: "Cycle sat",
    family: "sat",
    locked: 2.25,
    target: 2,
    live: 2.0,
    pounds: 18.96,
    day: -0.37,
    color: "#8892b0",
    fit: "PAY",
    signal: "Reflation industrials. Modest pay.",
    note: "Diversifies the satellite sleeve. Still equity weather.",
    thesis:
      "Broad listed industrials. Cycle exposure without a single-commodity story. Useful as a diversifier inside the theme sleeve. Useless as a fourth weather.",
  },
  {
    ticker: "URNG",
    name: "Uranium Acc",
    role: "Fuel sat",
    family: "sat",
    locked: 1.5,
    target: 1,
    live: 1.0,
    pounds: 9.47,
    day: -0.63,
    color: "#f1fa8c",
    fit: "PAY",
    signal: "Energy supply-shock narrative.",
    note: "Smallest satellite. A one-percent line is a ticket, not a hedge.",
    thesis:
      "Uranium miners. Long nuclear rebuild plus a tight fuel market. Highest-Sharpe thematic in the lock note — and the easiest line to fatten into a toy. Keep it tiny. The house is not a commodity raffle.",
  },
];

export const CORE_TICKERS = ["VWRP", "VAGS", "SGLN", "ITPS", "ICOM", "CSH2", "IDTL"] as const;

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
  { ticker: "VWRP", classroom: 30, house: 25, job: "Growth engine cut to fund satellites + alt" },
  { ticker: "VAGS", classroom: 18, house: 15, job: "Stabiliser still the drag premium" },
  { ticker: "SGLN", classroom: 15, house: 10, job: "Watchman at the floor the house will defend" },
  { ticker: "ITPS", classroom: 14, house: 10, job: "Bodyguard kept; lock was richer than T212" },
  { ticker: "ICOM", classroom: 10, house: 8, job: "Shock absorber under a synthetic cap" },
  { ticker: "CSH2", classroom: 7, house: 7, job: "Bay unchanged" },
  { ticker: "IDTL", classroom: 6, house: 5, job: "Fire brigade residual" },
  { ticker: "DBMG+", classroom: 0, house: 20, job: "Alt + six satellites. New risk family." },
];

export const REGIME_MATRIX = [
  {
    box: "Reflation (primary)",
    winners: "VWRP, ICOM",
    losers: "VAGS, IDTL (price)",
    sats: "DFNS, COPG, SMGB pay",
  },
  {
    box: "Stagflation overlay",
    winners: "SGLN, ICOM, ITPS*",
    losers: "VWRP, VAGS",
    sats: "All satellites at risk if growth rolls",
  },
];

export const TENSIONS = [
  {
    title: "VAGS is the largest honest drag",
    body: "Correct size for an all-weather book. Wrong size for a pure reflation trade. Conditioning it on this week's ten-year turns the house into a momentum sleeve.",
  },
  {
    title: "ICOM wins both current boxes",
    body: "A regime-optimizer would push it. The house does not chase. The 3 October contribution is the tool. Discretionary top-ups are how caps die.",
  },
  {
    title: "SGLN is being taxed by the short clock",
    body: "Real-yield channel this week. Debt-cycle thesis on the long clock. Trimming the watchman because Tuesday was red is the error the classroom exists to prevent.",
  },
  {
    title: "Satellites are residual claims in costume",
    body: "Defence, semis, copper miners, uranium, industrials, healthcare — six stories that still eat equity weather. Caps exist so the house does not become Maximus by accident.",
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
  { ticker: "VWRP", w: 22 },
  { ticker: "VAGS", w: 14 },
  { ticker: "SGLN", w: 10 },
  { ticker: "ITPS", w: 10 },
  { ticker: "ICOM", w: 8 },
  { ticker: "CSH2", w: 11 },
  { ticker: "IDTL", w: 5 },
  { ticker: "DBMG", w: 6 },
  { ticker: "URNG", w: 1 },
  { ticker: "XDWH", w: 3 },
  { ticker: "XDWI", w: 2 },
  { ticker: "COPG", w: 3 },
  { ticker: "SMGB", w: 2 },
  { ticker: "DFNS", w: 3 },
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
  { ticker: "COPG", cap: 4, why: "One copper wrapper. Never COPA and COPG together." },
  { ticker: "URNG", cap: 2, why: "Fuel story. Easy to romanticise." },
  { ticker: "XDWI", cap: 4, why: "Broad industrials already rhyme with VWRP." },
  { ticker: "XDWH", cap: 5, why: "Defensive sat. Still equity." },
  { ticker: "DBMG", cap: 8, why: "Alt, not an eighth job." },
];

export const MAXIMUS_WARN =
  "Maximus is a fifteen-line high-growth experiment. Semis, robots, copper, uranium, defence, housing, industrials — a theme park. It is not the house. A pie that sums to 170 or 190 percent is not diversification. It is a broken weight vector. The house stays at 100.";

export const NEXT_LEVER =
  "3 October contribution. Point new cash at the most underweight core line after checking live NAV. Confirm walk-back is inactive. Verify the copper wrapper is COPG, not a second copper line. Do not invent a fifteenth line because a theme is loud.";

export const HONEST =
  "A pure reflation optimizer would overweight VWRP and ICOM, zero VAGS and IDTL, trim SGLN, and max SMGB and DFNS. That book would have beaten the house over the last twelve months — and would be destroyed in a rotation to goldilocks or deflation. The under-earning is the feature.";
