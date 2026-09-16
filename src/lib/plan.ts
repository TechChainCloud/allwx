export const PLAN_ASOF = "2026-09-16";
export const PLAN_SENTENCE =
  "Live = lock. T212 09:46 BST. Seventeen lines. VAGS and IDTL sold. FOMC tonight 19:00. 3 Oct fills IGLS/URNG/SMGB drift. Walk-back still off. No eighteenth line. Weights only.";

export const CALENDAR: {
  date: string;
  when: string;
  event: string;
  bbg: string;
  watch: string;
  act: string;
}[] = [
  {
    date: "2026-09-08",
    when: "Tue",
    event: "US Treasury market reopens",
    bbg: "GT10 / GT30",
    watch: "First reprice of Friday payrolls and Hormuz. Key level 5.00% on GT10.",
    act: "Above 5.00: VAGS, IDTL, SGLN taxed together. Below 4.60: pivot bid. Observe. Do not act.",
  },
  {
    date: "2026-09-10",
    when: "Thu",
    event: "US CPI (August) — the binary input",
    bbg: "CPI YOY / CPI CHNG",
    watch: "Hot: hike near-certain, IDTL/VAGS another leg, BEI may rip 2.50. Cool: pivot bid, GT30 back toward 5.00.",
    act: "House is staffed for both. Update questions. No trade. Walk-back still needs PMI < 50.",
  },
  {
    date: "2026-09-11",
    when: "Thu",
    event: "ECB rate decision",
    bbg: "EURR002W",
    watch: "+25bp reportedly priced. The statement matters more than the hike.",
    act: "Hawkish surprise widens the European bond selloff inside VAGS. Dovish statement bids it. Observe.",
  },
  {
    date: "2026-09-16",
    when: "Wed",
    event: "FOMC — the binary",
    bbg: "FDTR",
    watch: "~60%+ hike, rising on oil > $100.",
    act: "Hike: CSH2 carry up; SGLN, IDTL, VAGS taxed; ICOM unmoved. Hold: duration and gold bid. Sentences do not change on one meeting.",
  },
  {
    date: "2026-10-03",
    when: "Sat",
    event: "Contribution — the only action date",
    bbg: "T212 NAV",
    watch: "Walk-back, core drift ±3pp, sat drift ±1.5pp, sat cap 20%.",
    act: "Monthly AutoInvest. Mechanical tree only. Do not move the date.",
  },
];

export const WALKBACK = {
  slope: { object: "2s10s (GT10 − GT2)", now: "+38bp", trigger: "< 0bp" },
  pmi: { object: "PMI (NAPMPMI)", now: "54.6", trigger: "< 50" },
  rule: "Both must fire together. Then the full monthly debit routes to Invictus core. Satellites receive zero. Historical frequency about 6.1% of months. Not the base case. The rule exists because the base case is sometimes wrong.",
};

export const CONTRIB_TREE = [
  {
    step: 1,
    title: "Walk-back",
    test: "PMI < 50 AND 2s10s < 0bp",
    now: "54.6 and +38bp — both clear",
    then: "Route all of the monthly debit to core. Satellites get nothing.",
  },
  {
    step: 2,
    title: "Core drift ±3pp",
    test: "Any Invictus line more than 3pp below house weight",
    now: "Likely watch: VAGS (session headwind), SGLN (real-yield tax)",
    then: "That line gets the next contribution.",
  },
  {
    step: 3,
    title: "Satellite drift ±1.5pp",
    test: "Only if no core breach",
    now: "SMGB strongest — watch overweight. XDWH and DFNS weakest — watch underweight.",
    then: "Feed the thin satellite. Do not feed a winner because it printed green.",
  },
  {
    step: 4,
    title: "Satellite collective cap",
    test: "Satellites > 20% of the book",
    now: "Lock sleeve ~15%. Live T212 sat+alt ~20%.",
    then: "Stop feeding satellites. Route 100% to core.",
  },
  {
    step: 5,
    title: "Default split",
    test: "No drift breach",
    now: "Idle until 3 Oct",
    then: "75% core + 25% satellite. Most underweight line in each sleeve.",
  },
];

export const NOT_THE_PLAN = [
  "Watching SGLN fall and deciding the gold thesis is broken.",
  "Watching SMGB print +1.70% and topping it up off-cycle.",
  "Editing the lock because of a speech, a strait, or one CPI print.",
  "Moving the AutoInvest date.",
];

export const INGREDIENTS = [
  {
    n: 1,
    title: "Every line has a different job",
    body: "Diversify by economic function, not ticker count. VWRP is the productivity claim. VAGS the deflation engine. ITPS the CPI contract. SGLN the debt-cycle hedge. ICOM goods inflation. CSH2 optionality. IDTL the cut-cycle stub. When one is losing, another is usually winning. That is the design.",
  },
  {
    n: 2,
    title: "All four boxes are already hired",
    body: "Reflation, goldilocks, stagflation, deflation. At least one line is paid in each room. The matrix is a map of who is earning the premium and who is paying it. It is not a forecast.",
  },
  {
    n: 3,
    title: "Drag lines are features",
    body: "VAGS and IDTL can lose in reflation and still be correctly sized. A book that only holds today's winners is a momentum sleeve wearing a diversification label. The drag is why a bad decade does not go to zero.",
  },
  {
    n: 4,
    title: "The rules remove the human",
    body: "Hard caps, walk-back, drift, contribution split, satellite size check. No hero trades. Walk-back stops satellite top-ups in the exact weather when themes fall hardest. Drift points new cash at the thin line without a sale.",
  },
  {
    n: 5,
    title: "Contributions are the engine",
    body: "On a small book the monthly debit is not a rounding error. The long-run fan is built on those contributions compounding, not on clever tickets. The pie does not need to be perfect. It needs to survive long enough for the contribution to work.",
  },
];

export const TASTELESS =
  "Editing the lock file. Every trim, swap, or shiny eighth line degrades the all-weather property. The pie is only as good as the discipline not to touch it between the 3rd and the next 3rd.";

export const SHARPE: {
  rank: number;
  ticker: string;
  sleeve: "core" | "sat";
  wt: number;
  ret1y: number | null;
  vol1y: number | null;
  sharpe: number | null;
  fit: string;
}[] = [
  { rank: 1, ticker: "VAGS", sleeve: "core", wt: 17, ret1y: 0.22, vol1y: 3.61, sharpe: -0.945, fit: "Headwind both boxes" },
  { rank: 2, ticker: "IDTL", sleeve: "core", wt: 5.1, ret1y: -3.85, vol1y: 9.17, sharpe: -0.816, fit: "Yield pressure" },
  { rank: 3, ticker: "ITPS", sleeve: "core", wt: 13.6, ret1y: 0.1, vol1y: 5.9, sharpe: -0.598, fit: "Mixed" },
  { rank: 4, ticker: "DFNS", sleeve: "sat", wt: 3, ret1y: 2.85, vol1y: 26.5, sharpe: -0.029, fit: "Thesis lagging price" },
  { rank: 5, ticker: "URNG", sleeve: "sat", wt: 1.5, ret1y: 17.19, vol1y: 50.71, sharpe: 0.267, fit: "Energy thesis" },
  { rank: 6, ticker: "SGLN", sleeve: "core", wt: 10.2, ret1y: 21.18, vol1y: 25.86, sharpe: 0.679, fit: "Stagflation / taxed short" },
  { rank: 7, ticker: "XDWI", sleeve: "sat", wt: 2.25, ret1y: 16.75, vol1y: 16.55, sharpe: 0.793, fit: "Reflation mild" },
  { rank: 8, ticker: "XDWH", sleeve: "sat", wt: 2.85, ret1y: 18.96, vol1y: 15.33, sharpe: 1.0, fit: "Defensive" },
  { rank: 9, ticker: "CSH2", sleeve: "core", wt: 6.8, ret1y: 4.25, vol1y: 0.41, sharpe: 1.512, fit: "Optionality" },
  { rank: 10, ticker: "VWRP", sleeve: "core", wt: 23.8, ret1y: 21.75, vol1y: 11.08, sharpe: 1.635, fit: "Reflation" },
  { rank: 11, ticker: "ICOM", sleeve: "core", wt: 8.5, ret1y: 44.36, vol1y: 17.85, sharpe: 2.282, fit: "Both current boxes" },
  { rank: 12, ticker: "SMGB", sleeve: "sat", wt: 2.7, ret1y: 114.9, vol1y: 38.66, sharpe: 2.878, fit: "AI capex" },
  { rank: 13, ticker: "COPG", sleeve: "sat", wt: 2.7, ret1y: null, vol1y: null, sharpe: null, fit: "Ticker unconfirmed" },
];

export const TRIM = {
  from: "VAGS 17 → 14, VWRP 23.8 → 26.8",
  metrics: [
    { k: "Blended return", before: "15.88%", after: "16.53%", delta: "+0.65pp" },
    { k: "Blended vol", before: "12.65%", after: "12.88%", delta: "+0.23pp" },
    { k: "Weighted Sharpe", before: "0.607", after: "0.685", delta: "+0.078" },
    { k: "VWRP cap room", before: "3.2pp", after: "0.2pp", delta: "Near 27% cap" },
  ],
  whyNot: [
    "Regime can rotate faster than a contribution cycle. Selling 3pp of deflation cover while the overlay is live is selling insurance after the storm has started.",
    "The house does not trim by selling. It routes new cash away until drift does the work.",
    "VWRP at 26.8 sits 0.2pp from the 27% cap. One good month becomes a hard-cap event.",
  ],
  close:
    "VAGS has the worst risk-adjusted case for today's room. The house still holds it because the house is not optimised for today. If VAGS drifts through 14% on its own, the next contribution routes back. The lock is not edited.",
};

export const LINE_CARDS: {
  ticker: string;
  ytd: string;
  y1: string;
  vol: string;
  good: string[];
  bad: string[];
}[] = [
  {
    ticker: "VWRP",
    ytd: "+14.04%",
    y1: "+21.75%",
    vol: "11.08%",
    good: ["Earnings breadth widening beyond a handful of names.", "PMI 54.6 is its weather."],
    bad: ["Index concentration in AI capex.", "Stagflation overlay is the existential room."],
  },
  {
    ticker: "VAGS",
    ytd: "−0.42%",
    y1: "+0.22%",
    vol: "3.61%",
    good: ["Lowest-vol stabiliser. Keeps book vol near 7.8%.", "YTM ~4.4%, GBP-hedged, cheap insurance."],
    bad: ["Worst Sharpe in the pie (−0.945).", "Headwind in both current boxes. ECB hike is a European yield tax."],
  },
  {
    ticker: "ITPS",
    ytd: "+0.34%",
    y1: "+0.10%",
    vol: "5.90%",
    good: ["BEI 2.35 vs PCE 3.7 — insurance cheap vs the print.", "Real yield still under the 2.50 drag line."],
    bad: ["A hike that rips real yields drops the price regardless of CPI.", "USD unhedged. FX is a permanent friction."],
  },
  {
    ticker: "SGLN",
    ytd: "+1.79%",
    y1: "+21.18%",
    vol: "25.86%",
    good: ["Official-sector buying is structural.", "Three of four ugly debt-cycle ends print metal."],
    bad: ["Real-yield tax is the short clock.", "~20% of book variance from a 10% line."],
  },
  {
    ticker: "ICOM",
    ytd: "+34.38%",
    y1: "+44.36%",
    vol: "17.85%",
    good: ["Only core line paid in both current boxes.", "Energy is 37% of BCOM; Hormuz is the tape."],
    bad: ["Rich vs bonds near prior-cycle highs.", "A demand recession plus contango is the kill path."],
  },
  {
    ticker: "CSH2",
    ytd: "+2.81%",
    y1: "+4.25%",
    vol: "0.41%",
    good: ["Only core line that is paid by a hike.", "Powder for 3 Oct and for wide spreads."],
    bad: ["Loses a quiet goldilocks year by 2–3pp vs equities.", "GBP-hedged — no dollar-down kicker."],
  },
  {
    ticker: "IDTL",
    ytd: "−2.70%",
    y1: "−3.85%",
    vol: "9.17%",
    good: ["Treasury buybacks stepping up at the long end.", "Convexity stub if a cut cycle arrives."],
    bad: ["Worst raw 1Y in the core.", "Term premium and issuance are structural, not a week."],
  },
  {
    ticker: "DFNS",
    ytd: "−3.48%",
    y1: "+2.85%",
    vol: "26.50%",
    good: ["Fragmentation thesis is live.", "Walk-back exists for the exact weather this line dies in."],
    bad: ["Weakest YTD in the whole pie.", "Budgets and politics can delay the earnings."],
  },
  {
    ticker: "XDWH",
    ytd: "+7.03%",
    y1: "+18.96%",
    vol: "15.33%",
    good: ["Defensive Sharpe near 0.80. Not a cycle bet.", "Pays when themes are under pressure."],
    bad: ["Single-name pharma days bleed the sleeve.", "Lags a strong reflation rotation."],
  },
  {
    ticker: "SMGB",
    ytd: "+66.24%",
    y1: "+114.90%",
    vol: "38.66%",
    good: ["AI capex is earnings, not a slogan.", "Highest Sharpe in the book on this window."],
    bad: ["Priced for continued perfection.", "30–40% air pockets exist in this sleeve."],
  },
  {
    ticker: "COPG",
    ytd: "—",
    y1: "—",
    vol: "—",
    good: ["Electrification and grid spend.", "Reflation alignment if China spends."],
    bad: ["Correlation with the S&P at multi-decade highs.", "COPA vs COPG still an ops check before 3 Oct."],
  },
  {
    ticker: "XDWI",
    ytd: "+11.57%",
    y1: "+16.75%",
    vol: "16.55%",
    good: ["Clean reflation industrial.", "Lowest-vol satellite."],
    bad: ["Lowest satellite Sharpe (0.67).", "European cost of capital and China demand."],
  },
  {
    ticker: "URNG",
    ytd: "+1.58%",
    y1: "+17.19%",
    vol: "50.71%",
    good: ["Highest assumed satellite Sharpe.", "Energy-security argument is live."],
    bad: ["Highest vol in the pie.", "YTD barely moved. Kazakhstan supply is a single point of failure."],
  },
];
