/** Invictus Prime II — house lock 16 Sep 2026 08:23 BST. Education only. Pad still 14. */

export const P2_ASOF = "2026-09-16";
export const P2_STATUS = "LIVE = LOCK";
export const P2_HEADLINE =
  "T212 16 Sep 2026, 09:46 BST. Seventeen lines. VAGS and IDTL sold. The pad is the book. FOMC tonight is a print. Weights only. No sterling total.";

export type P2Line = {
  n: number;
  ticker: string;
  farm: string;
  sleeve: "living" | "quiet";
  current: number;
  proposed: number;
  ocf: string;
  ytd: string;
  y3: string;
  action: string;
  job: string;
};

export const P2_LIVING: P2Line[] = [
  { n: 1, ticker: "VWRP", farm: "The Engine", sleeve: "living", current: 44.94, proposed: 38, ocf: "0.14%", ytd: "+12.1", y3: "+16.8", action: "Reduce — IWVL absorbs", job: "Cap-weight productivity rent." },
  { n: 2, ticker: "IWVL", farm: "Value Tilt", sleeve: "living", current: 0, proposed: 7, ocf: "0.25%", ytd: "+34.8", y3: "+28.4", action: "NEW — from VWRP", job: "Value factor. Front-loaded cash flows. High-rate weather." },
  { n: 3, ticker: "ICOM", farm: "Irrigation", sleeve: "living", current: 8.19, proposed: 8, ocf: "0.19%", ytd: "+37.5", y3: "+15.9", action: "Hold", job: "Broad goods. Not energy equity." },
  { n: 4, ticker: "SGLN", farm: "The Barn", sleeve: "living", current: 7.9, proposed: 8, ocf: "0.12%", ytd: "−0.8", y3: "+26.7", action: "Hold", job: "Physical metal. Not miners." },
  { n: 5, ticker: "DBMF", farm: "The Surfer", sleeve: "living", current: 4.06, proposed: 4, ocf: "0.75%", ytd: "+13.9", y3: "+22.9", action: "Hold — still gated on T212", job: "Trend. Transition weather." },
  { n: 6, ticker: "WNRG", farm: "The Derrick", sleeve: "living", current: 0, proposed: 3, ocf: "0.30%", ytd: "+43.2", y3: "+16.9", action: "NEW — energy equity gap", job: "Integrated majors + midstream + E&P. Not ICOM. Not IOGP." },
  { n: 7, ticker: "DFNS", farm: "Geopolitical tax", sleeve: "living", current: 3.04, proposed: 3, ocf: "0.55%", ytd: "−4.3", y3: "+36.4", action: "Hold", job: "Government payee. Cap 5%." },
  { n: 8, ticker: "SMGB", farm: "Digital picks", sleeve: "living", current: 2.38, proposed: 2.5, ocf: "0.35%", ytd: "+58.5", y3: "+50.5", action: "Hold — signed trim stays unsigned", job: "Size is the risk management." },
  { n: 9, ticker: "XDWI", farm: "Physical picks", sleeve: "living", current: 1.91, proposed: 2, ocf: "0.25%", ytd: "+7.8", y3: "+19.2", action: "Hold", job: "Industrials. Rhyme with VWRP." },
  { n: 10, ticker: "XDWH", farm: "Night-shift doctor", sleeve: "living", current: 2.05, proposed: 2, ocf: "0.25%", ytd: "+4.9", y3: "+8.0", action: "Hold", job: "Defensive residual claims. Still equity." },
  { n: 11, ticker: "COPA", farm: "Electrification metal", sleeve: "living", current: 1.98, proposed: 2, ocf: "0.49%", ytd: "+9.8", y3: "+17.7", action: "Hold — verify T212 vs COPG", job: "Copper miners. One wrapper." },
  { n: 12, ticker: "URNG", farm: "Nuclear option", sleeve: "living", current: 0.94, proposed: 1, ocf: "0.65%", ytd: "−9.4", y3: "+17.9", action: "Hold", job: "Tiny on purpose." },
];

export const P2_QUIET: P2Line[] = [
  { n: 13, ticker: "ITPS", farm: "US CPI contract", sleeve: "quiet", current: 6.04, proposed: 6, ocf: "0.10%", ytd: "−0.3", y3: "+0.9", action: "Hold", job: "Rent review. Real-yield tax exists." },
  { n: 14, ticker: "FLOT", farm: "The Float", sleeve: "quiet", current: 0, proposed: 6, ocf: "0.10%", ytd: "+3.0", y3: "+5.4", action: "NEW — replaces VAGS", job: "USD floater. 1.67y duration. Carry without the umbrella’s convexity." },
  { n: 15, ticker: "INXG", farm: "London thermometer", sleeve: "quiet", current: 2, proposed: 3, ocf: "0.10%", ytd: "−0.6", y3: "−0.8", action: "Increase — absorbs IDTL", job: "UK RPI. Still on probation." },
  { n: 16, ticker: "XSTR", farm: "The Tin", sleeve: "quiet", current: 5.03, proposed: 3, ocf: "0.10%", ytd: "+2.6", y3: "+4.5", action: "Reduce", job: "Overnight. Live pad uses CSH2." },
  { n: 17, ticker: "IGLS", farm: "Short gilt carry", sleeve: "quiet", current: 1.51, proposed: 1.5, ocf: "0.07%", ytd: "+0.7", y3: "+3.9", action: "Hold", job: "Ladder rung. Prime ticket." },
];

export const P2_ALL = [...P2_LIVING, ...P2_QUIET];
export const P2_LINE_COUNT = P2_ALL.length;
export const P2_LIVING_WT = 80.5;
export const P2_QUIET_WT = 19.5;
export const P2_OCF = "0.21%";

export const P2_EXITS = [
  {
    ticker: "VAGS",
    farm: "The Greenhouse",
    current: 6.03,
    ytd: "−1.29%",
    y3: "+3.64%",
    claim: "Nominal aggregate in a positive stock-bond correlation regime. Replaced by FLOT.",
    desk: "The umbrella is hired for the room VAGS just failed. Firing duration because correlation is positive this cycle is scoring the sleeve against this weather, not its contract. FLOT is a different job: carry, not convexity.",
  },
  {
    ticker: "IDTL",
    farm: "The Long Spring",
    current: 2,
    ytd: "−4.22%",
    y3: "−0.33%",
    claim: "Only line with a negative 3Y. Data said so. Redirect to INXG.",
    desk: "The fire brigade is hired for 2008 and 2020, not for 2023–26. A three-year mark in a hiking cycle is the job working. INXG does not write that convexity. Classroom still sizes the stub. Prime still holds 5.3%.",
  },
];

export const P2_ARITHMETIC =
  "V0 is 16 lines. Add IWVL, WNRG, FLOT (+3). Exit VAGS, IDTL (−2). Net +1. The table numbers 1–17. Living 12 + quiet 5 = 17. The sentence ‘the seventeenth line was not invented’ does not survive the count.";

export const P2_SENTENCES = [
  "The engine is VWRP and IWVL together — 45% of the farm, regime-aware. That absorption is the only Prime II move that does not add a line.",
  "The derrick is energy equity, not ICOM. WNRG is integrated majors. IOGP is 98% E&P. They are not interchangeable. A 3Y +43% is the supercycle showing up in a sample.",
  "VAGS is not ‘the same job’ as FLOT. One is 7–8y quality duration. The other is a 1.67y USD floater. Removing the umbrella because this cycle’s stock-bond correlation is positive is a regime call wearing a repair costume.",
  "IDTL is not fired by a three-year mark. The signed sentence does not protect a line that failed its test — and the test of the fire brigade is the demand crash, which has not arrived.",
  "Walk-back overrides the whole queue. FOMC tonight is a print, not a lock-file. 3 Oct still routes the live pad unless a signed sentence says otherwise. Decision date precedes change date.",
];

export const P2_GATES: {
  id: string;
  when: string;
  action: string;
  pre: string[];
  fail: string;
}[] = [
  {
    id: "g0",
    when: "Tonight · 16 Sep 19:00 BST",
    action: "Monitor FOMC. BoE Thursday. Do not redirect a pound.",
    pre: ["Walk-back inactive (PMI 54.6, 2s10s positive)", "A 25bp hike is priced and does not rewrite jobs"],
    fail: "Walk-back fires → full pause. Surprise hold/hawkish dots raise FLOT urgency — still not a tonight ticket.",
  },
  {
    id: "g1",
    when: "3 Oct 2026",
    action: "Proposal: WNRG at 1% after SMGB is topped to the signed book.",
    pre: ["Brent > £75/bbl (print ~£78)", "ICOM within 200bp of 8%", "SMGB first — signed sentence not overridden"],
    fail: "Brent < £75 → delay WNRG. Walk-back → no new lines. Live pad is still fourteen T212 lines, not the 45% draft.",
  },
  {
    id: "g2",
    when: "3 Nov 2026",
    action: "Proposal: begin VAGS → FLOT by drift. IWVL 1%.",
    pre: ["UK 2Y > 4.0%", "Stock-bond correlation still positive", "FLOT listed on T212 (else USFR)", "Do not reinvest VAGS income"],
    fail: "2Y < 4% or correlation flips → keep VAGS. FLOT unavailable → gate, not a substitute guessed in chat.",
  },
  {
    id: "g3",
    when: "3 Dec 2026 → mid-2027",
    action: "WNRG to 3%. IWVL toward 7%. IDTL starved of new cash. INXG +1pp.",
    pre: ["VWRP ≥ 38% before IWVL eats", "UK 10Y > 4.5% if IDTL is to be starved", "IWVL −15% from here slows the pace"],
    fail: "VWRP below 38% → engine first. Value reversal → slower IWVL. Walk-back → freeze sizing.",
  },
];

export type UnivRow = {
  rank: number;
  ticker: string;
  name: string;
  screen: string;
  y3: string;
  ocf: string;
  job: string;
  sleeve: string;
  wt: string;
  tier: 1 | 2 | 3;
  desk: string;
};

export const UNIVERSE: UnivRow[] = [
  { rank: 1, ticker: "WNRG", name: "SPDR MSCI World Energy", screen: "Gap", y3: "+43.2", ocf: "0.30%", job: "The Derrick", sleeve: "Living", wt: "2–3%", tier: 1, desk: "Largest named hole. Loudest 3Y. Residual claims, not ICOM." },
  { rank: 2, ticker: "IOGP", name: "iShares Oil & Gas E&P", screen: "Regime", y3: "+39.9", ocf: "0.55%", job: "Pure upstream", sleeve: "Watch", wt: "0%", tier: 1, desk: "98% E&P. Higher beta. Watch list until Brent is a $120 weather, not a $100 session." },
  { rank: 3, ticker: "IWVL", name: "MSCI World Value", screen: "Factor", y3: "+34.8", ocf: "—", job: "Engine tilt", sleeve: "Living", wt: "5–10%", tier: 1, desk: "Only add that can absorb VWRP. Phase 1 paper already named it at £10k." },
  { rank: 4, ticker: "IEEM", name: "iShares MSCI EM", screen: "Gap", y3: "+18.0", ocf: "0.18%", job: "EM tilt", sleeve: "Living", wt: "2–3%", tier: 1, desk: "A second new line. VWRP already holds EM. Costume unless it replaces something." },
  { rank: 5, ticker: "FLOT", name: "USD Floating Rate Bond", screen: "Quiet", y3: "+5.4", ocf: "0.10%", job: "VAGS replacement", sleeve: "Quiet", wt: "4–6%", tier: 1, desk: "Better reason than the 2022 FX story. Gate was £3k. Open gate is not an order." },
  { rank: 6, ticker: "IWMO", name: "World Momentum", screen: "Factor", y3: "+16.1", ocf: "—", job: "Trend in equities", sleeve: "Living", wt: "2–3%", tier: 1, desk: "Rhymes with DBMF and with last year’s winner. Two uniforms." },
  { rank: 7, ticker: "VHYL", name: "All-World High Dividend", screen: "Factor", y3: "+15.5", ocf: "—", job: "Income engine", sleeve: "Living", wt: "3–5%", tier: 1, desk: "Already a £5k size gate. Not a 3 Oct ticker." },
  { rank: 8, ticker: "USFR", name: "USD Float Treasury", screen: "Quiet", y3: "+3.9 1Y", ocf: "—", job: "Govt floater", sleeve: "Quiet", wt: "3–5%", tier: 1, desk: "FLOT fallback. 0.91y. Still USD." },
  { rank: 9, ticker: "XDEW", name: "S&P 500 Equal Weight", screen: "Gap", y3: "+11.9", ocf: "0.15%", job: "De-concentrate", sleeve: "Living", wt: "5–8%", tier: 1, desk: "US-only equal weight is not a world engine." },
  { rank: 10, ticker: "GDX", name: "Gold Miners", screen: "Regime", y3: "+11.6", ocf: "—", job: "Barn amplifier", sleeve: "Living", wt: "1–1.5%", tier: 2, desk: "Miners are not gold. Classroom already fired this substitution." },
  { rank: 11, ticker: "SDHY", name: "Short HY", screen: "Quiet", y3: "—", ocf: "—", job: "Yield booster", sleeve: "Quiet", wt: "2–3%", tier: 2, desk: "Credit in the quiet farm is equity wearing a coupon." },
  { rank: 12, ticker: "WTEF", name: "US Efficient Core", screen: "Regime", y3: "+10.5", ocf: "—", job: "150% notional 90/60", sleeve: "Living", wt: "3–5%", tier: 2, desk: "Leverage a retail ISA was not built to hold." },
  { rank: 13, ticker: "MVOL", name: "Min Vol", screen: "Factor", y3: "+6.1", ocf: "—", job: "Defensive equity", sleeve: "Quiet", wt: "2–3%", tier: 2, desk: "Quiet farm candidate. Not an engine." },
  { rank: 14, ticker: "INFR", name: "Global Infrastructure", screen: "Gap", y3: "+7.5", ocf: "0.65%", job: "The Grid", sleeve: "Living", wt: "2%", tier: 2, desk: "OCF high. Inflation-linked revenues are not linkers." },
  { rank: 15, ticker: "SGLD", name: "Physical gold alt", screen: "Regime", y3: "−0.8", ocf: "—", job: "Duplicate barn", sleeve: "—", wt: "0%", tier: 3, desk: "Correctly killed. Same metal, extra wrapper." },
  { rank: 16, ticker: "INRG", name: "Clean energy", screen: "Gap", y3: "+2.8", ocf: "0.65%", job: "Theme", sleeve: "—", wt: "0%", tier: 3, desk: "Weak 3Y, high OCF. Costume." },
  { rank: 17, ticker: "GDXJ", name: "Junior miners", screen: "Regime", y3: "+7.7", ocf: "—", job: "Crisis satellite", sleeve: "—", wt: "0%", tier: 3, desk: "Beta on beta. Not a farm line." },
  { rank: 18, ticker: "ISXF", name: "GBP corp ex-fin", screen: "Quiet", y3: "—", ocf: "—", job: "Long credit", sleeve: "—", wt: "0%", tier: 3, desk: "Duration + credit. Unacceptable in this regime by its own screen." },
];

export const DERRICK = {
  headline: "IOGP is the purer well. WNRG is the more resilient derrick. They share a sector label and almost no holdings.",
  sectors: [
    { name: "Integrated oils", wnrg: 50.32, iogp: 0 },
    { name: "Exploration & production", wnrg: 18.77, iogp: 98.36 },
    { name: "Midstream", wnrg: 13.52, iogp: 1.02 },
    { name: "Refining & marketing", wnrg: 10, iogp: 0 },
    { name: "Oilfield services", wnrg: 5.05, iogp: 0 },
  ],
  metrics: [
    { k: "AUM", wnrg: "$609m", iogp: "$449m" },
    { k: "OCF", wnrg: "0.30%", iogp: "0.55%" },
    { k: "Holdings", wnrg: "67", iogp: "74" },
    { k: "YTD", wnrg: "+47.9%", iogp: "+42.8%" },
    { k: "Oil beta", wnrg: "Medium", iogp: "High" },
    { k: "Index", wnrg: "MSCI World Energy", iogp: "S&P Oil & Gas E&P" },
  ],
  overlap: [
    { name: "ConocoPhillips", wnrg: 4.39, iogp: 10.68 },
    { name: "Canadian Natural", wnrg: 2.74, iogp: 10.31 },
  ],
  wnrgWins: [
    "Oil is volatile, not a one-way spike — downstream (refining, chemicals, LNG) cushions.",
    "Dividends matter. Shell’s breakeven near $28 and buybacks are not E&P lottery tickets.",
    "25bp cheaper. Larger AUM. Built slowly via the 3rd.",
    "Does not double ICOM’s raw commodity beta.",
  ],
  iogpWins: [
    "Oil spikes and stays. Pure E&P operating leverage.",
    "Deep stagflation analogue, 1973–80.",
    "Geopolitical supply shock. Production assets, not refineries.",
  ],
  verdict:
    "First addition, if any, is WNRG — the structure above the well, not the well. IOGP stays on the watch list until Brent is a $120 weather. Holding both is a 17th line. The farm already owns ~1.8% energy through VWRP. ICOM is the commodity. WNRG would be the companies. Three uniforms is a costume.",
};

export const P2_OBJECTIONS = [
  { k: "17 lines", body: P2_ARITHMETIC },
  { k: "Recency", body: "WNRG +43% YTD and IWVL +51% 1Y are why the screen is loud. The protocol’s answer to that temptation is the same as the SMGB trim: size is the risk management. A line enters at 1%." },
  { k: "Wrong book", body: "45% VWRP is the unsigned machine draft, not Prime (23.8%) and not the live 14-line ISA. Pointing 3 Oct at a draft pie flattens the books." },
  { k: "Deflation grade C", body: "The proposal itself scores deflation C and then fires IDTL. That is the room the stub was hired for. Named, then ignored." },
  { k: "DBMF / FLOT gates", body: "DBMF is still T212 AutoInvest + fractional. FLOT was not-before £3k and previously killed for the wrong 2022 FX reason. Better reason now. Still a gate." },
  { k: "INXG up", body: "Raising INXG while the classroom still vetoes it and Prime holds it on probation is a second gilt-crisis bet sized larger. Write the kill rule first." },
];

export const P2_METRICS = [
  { k: "Lines claimed", v0: "16", v2: "16 claimed / 17 listed" },
  { k: "Living / quiet", v0: "76.5 / 23.5", v2: "80.5 / 19.5" },
  { k: "Blended OCF", v0: "~0.24%", v2: "0.21%" },
  { k: "Energy equity", v0: "~1.8% via VWRP", v2: "~4.8% with WNRG 3%" },
  { k: "Explicit value", v0: "0%", v2: "IWVL 7%" },
  { k: "Long nominal", v0: "VAGS + IDTL", v2: "FLOT 1.67y only" },
  { k: "Stagflation (self)", v0: "B", v2: "B+" },
  { k: "Deflation (self)", v0: "C", v2: "C — after firing the brigade" },
];
