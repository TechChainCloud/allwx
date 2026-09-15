export type Regime = "goldilocks" | "reflation" | "stagflation" | "deflation";
export type RegimeFit = "earn" | "ok" | "suffer";
export type Sleeve = 1 | 2;

export type Line = {
  ticker: string;
  name: string;
  weight: number;
  floor: number;
  cap: number;
  sleeve: Sleeve;
  job: string;
  analogy: string;
  story: string;
  regimes: Record<Regime, RegimeFit>;
  fiveYear: number;
  y2022: number | null;
  sharpe: number | null;
  ter: string;
  partnersWhenSuffers: string[];
  exposure: "equity" | "real" | "nominal" | "linker" | "cash" | "trend";
  notes?: string;
  probation?: string;
};

export const REGIMES: {
  id: Regime;
  name: string;
  growth: "up" | "down";
  inflation: "up" | "down";
  blurb: string;
  response: string;
}[] = [
  {
    id: "goldilocks",
    name: "Goldilocks",
    growth: "up",
    inflation: "down",
    blurb: "Growth rising, inflation falling. The engine compounds hard.",
    response:
      "45% VWRP compounds. Bond sleeve appreciates. Real assets drag slightly — the acceptable cost of insurance in a good year.",
  },
  {
    id: "reflation",
    name: "Reflation",
    growth: "up",
    inflation: "up",
    blurb: "Growth rising, inflation rising. Current regime as of 12 Sep 2026.",
    response:
      "Engine and commodity sleeve both earn. Inflation protection activates. DBMF trends the rate move. Bond sleeve drags — contained at weight.",
  },
  {
    id: "stagflation",
    name: "Stagflation",
    growth: "down",
    inflation: "up",
    blurb: "Growth falling, inflation rising. Real assets absorb the blow.",
    response:
      "Gold and commodities at 8% each absorb. DBMF trends the equity fall. XSTR earns the overnight rate. 45% × −10% = −4.5pp, not a wipeout.",
  },
  {
    id: "deflation",
    name: "Deflation",
    growth: "down",
    inflation: "down",
    blurb: "Growth falling, inflation falling. The umbrella finally earns.",
    response:
      "Long-bond convexity (IDTL) surges. VAGS appreciates. SGLN holds as a monetary safe haven. Bond sleeve earns its keep after years of waiting.",
  },
];

export function regimeFromFlags(growth: "up" | "down", inflation: "up" | "down"): Regime {
  if (growth === "up" && inflation === "down") return "goldilocks";
  if (growth === "up" && inflation === "up") return "reflation";
  if (growth === "down" && inflation === "up") return "stagflation";
  return "deflation";
}

const lockedLines: Line[] = [
  {
    ticker: "VWRP",
    name: "Vanguard FTSE All-World UCITS ETF",
    weight: 45,
    floor: 40,
    cap: 50,
    sleeve: 1,
    job: "The Engine. Full compounding power of human productivity.",
    analogy: "The rent you collect from human civilisation. You do not manage the tenants.",
    story:
      "You own a small share of every factory, software company, hospital, shipping line and semiconductor fab on earth. The line goes up over decades not because markets are always rational but because humans are always productive.",
    regimes: { goldilocks: "earn", reflation: "earn", stagflation: "suffer", deflation: "suffer" },
    fiveYear: 11.44,
    y2022: -8.38,
    sharpe: 0.63,
    ter: "0.22%",
    partnersWhenSuffers: ["VAGS", "IDTL", "SGLN", "DBMF", "XSTR"],
    exposure: "equity",
  },
  {
    ticker: "ICOM",
    name: "iShares Diversified Commodity Swap UCITS ETF",
    weight: 8,
    floor: 5,
    cap: 12,
    sleeve: 1,
    job: "Inflation collector. Energy, metals, agriculture futures.",
    analogy: "The portfolio’s speedometer for the real economy.",
    story:
      "When credit expands, the first thing that happens is the price of oil, copper, wheat and gas going up. ICOM is not a bet on inflation — it is inflation, held as an asset. 2022: +26.6% when equities and bonds fell.",
    regimes: { goldilocks: "ok", reflation: "earn", stagflation: "earn", deflation: "suffer" },
    fiveYear: 12.53,
    y2022: 26.59,
    sharpe: 0.56,
    ter: "0.19%",
    partnersWhenSuffers: ["VAGS", "IDTL", "SGLN"],
    exposure: "real",
  },
  {
    ticker: "SGLN",
    name: "iShares Physical Gold ETC",
    weight: 8,
    floor: 5,
    cap: 12,
    sleeve: 1,
    job: "Monetary anchor. Allocated physical gold. No counterparty.",
    analogy: "The portfolio’s long memory. VWRP remembers the last decade. SGLN remembers the last century.",
    story:
      "Gold has been money for 5,000 years because it cannot be printed. You do not fire the fire extinguisher because it sat unused for three years. +12.6% in 2022. +48.9% in 2025.",
    regimes: { goldilocks: "ok", reflation: "ok", stagflation: "earn", deflation: "earn" },
    fiveYear: 19.9,
    y2022: 12.61,
    sharpe: 0.98,
    ter: "0.12%",
    partnersWhenSuffers: ["VWRP", "XDWI", "DFNS", "SMGB"],
    exposure: "real",
  },
  {
    ticker: "DBMF",
    name: "iMGP DBi Managed Futures UCITS ETF",
    weight: 4,
    floor: 1,
    cap: 6,
    sleeve: 1,
    job: "Trend follower. Earns in sustained moves, either direction.",
    analogy: "The surfer. Does not create the wave. Reads the ocean and rides whatever arrives.",
    story:
      "When the machine shifts quadrant the transition is violent and sustained. That is exactly when DBMF earns most. Cap 6%. +21.4% over 5 years.",
    regimes: { goldilocks: "ok", reflation: "earn", stagflation: "earn", deflation: "earn" },
    fiveYear: 21.29,
    y2022: null,
    sharpe: 1.4,
    ter: "0.85%",
    partnersWhenSuffers: ["VWRP", "XSTR"],
    exposure: "trend",
  },
  {
    ticker: "DFNS",
    name: "VanEck Defense UCITS ETF",
    weight: 3,
    floor: 0,
    cap: 5,
    sleeve: 1,
    job: "Geopolitical premium. Recession-proof government contracts.",
    analogy: "The geopolitical tax collector. Governments write the cheque. DFNS owns the payee.",
    story:
      "+22.7% / +45.3% / +54.8% in 2023–2025. Thematic satellite, cap 5%. You are not betting on war — you own the infrastructure governments pay for regardless.",
    regimes: { goldilocks: "ok", reflation: "earn", stagflation: "earn", deflation: "suffer" },
    fiveYear: 33.53,
    y2022: null,
    sharpe: 1.44,
    ter: "0.55%",
    partnersWhenSuffers: ["VWRP", "VAGS", "XDWI"],
    exposure: "equity",
  },
  {
    ticker: "SMGB",
    name: "VanEck Semiconductor UCITS ETF",
    weight: 2.5,
    floor: 0,
    cap: 5,
    sleeve: 1,
    job: "Picks and shovels of the digital economy.",
    analogy: "You do not pick the miner. You own the factory that supplies the picks.",
    story:
      "At 2.5%, a −30% year costs 75bp. A +65% year (2023) adds 163bp. The size is the risk management. Worst 2022 line: −27.23%.",
    regimes: { goldilocks: "earn", reflation: "earn", stagflation: "suffer", deflation: "suffer" },
    fiveYear: 33.39,
    y2022: -27.23,
    sharpe: 0.93,
    ter: "0.35%",
    partnersWhenSuffers: ["XDWH", "VAGS", "SGLN"],
    exposure: "equity",
  },
  {
    ticker: "XDWI",
    name: "Xtrackers MSCI World Industrials UCITS ETF",
    weight: 2,
    floor: 0,
    cap: 5,
    sleeve: 1,
    job: "Builder of everything. Capex, infrastructure, reshoring.",
    analogy: "The picks-and-shovels of the physical economy.",
    story:
      "5-year +11.67% — strongest satellite equity line after SMGB. Together with DFNS it layers the geopolitical capex cycle: broad industrials plus pure-play defence.",
    regimes: { goldilocks: "earn", reflation: "earn", stagflation: "ok", deflation: "suffer" },
    fiveYear: 11.67,
    y2022: -3.67,
    sharpe: 0.55,
    ter: "0.25%",
    partnersWhenSuffers: ["VAGS", "SGLN", "XSTR"],
    exposure: "equity",
    notes: "AUM £0.99bn — smaller than ideal. Watch for AUM growth.",
  },
  {
    ticker: "XDWH",
    name: "Xtrackers MSCI World Health Care UCITS ETF",
    weight: 2,
    floor: 0,
    cap: 5,
    sleeve: 1,
    job: "The night shift doctor. Defensive equity. On probation.",
    analogy: "The doctor’s surgery in the town. Never hungry in a bust. Does not get rich in a boom.",
    story:
      "+7.8% in 2022 when VWRP fell −8.4%. Weakest 5-year satellite Sharpe at 0.17. Review September 2029: did it earn its keep in the next cycle?",
    regimes: { goldilocks: "ok", reflation: "ok", stagflation: "earn", deflation: "earn" },
    fiveYear: 4.76,
    y2022: 7.8,
    sharpe: 0.17,
    ter: "0.25%",
    partnersWhenSuffers: ["VWRP", "SMGB"],
    exposure: "equity",
    probation: "Review September 2029.",
  },
  {
    ticker: "COPA",
    name: "WisdomTree Copper ETC",
    weight: 2,
    floor: 0,
    cap: 5,
    sleeve: 1,
    job: "The metal of electrification. Copper price, not miners.",
    analogy: "Every EV, turbine and data centre needs copper. There is not enough of it.",
    story:
      "Physical copper via futures — not mining companies. Structural demand, constrained supply. New mines take 10–15 years.",
    regimes: { goldilocks: "earn", reflation: "earn", stagflation: "ok", deflation: "suffer" },
    fiveYear: 8.05,
    y2022: -3.69,
    sharpe: 0.2,
    ter: "0.49%",
    partnersWhenSuffers: ["VAGS", "IDTL", "SGLN"],
    exposure: "real",
  },
  {
    ticker: "ITPS",
    name: "iShares USD TIPS UCITS ETF",
    weight: 6,
    floor: 4,
    cap: 12,
    sleeve: 2,
    job: "US CPI protection. A structural hedge, not a bet.",
    analogy: "The lease with a rent review clause.",
    story:
      "Ordinary bonds have a fixed coupon. Inflation robs you slowly and legally. TIPS principal adjusts with US CPI. You are always made whole in real terms.",
    regimes: { goldilocks: "ok", reflation: "earn", stagflation: "earn", deflation: "suffer" },
    fiveYear: 0.32,
    y2022: -0.79,
    sharpe: -0.34,
    ter: "0.10%",
    partnersWhenSuffers: ["VAGS", "IDTL", "IGLS", "SGLN"],
    exposure: "linker",
  },
  {
    ticker: "VAGS",
    name: "Vanguard Global Aggregate Bond UCITS ETF",
    weight: 6,
    floor: 3,
    cap: 10,
    sleeve: 2,
    job: "Nominal ballast. Deflation insurance. Most misunderstood line.",
    analogy: "Fire insurance on the house. Useless in a drought. Essential in a flood.",
    story:
      "−0.86% over 5 years is the cost of holding the umbrella through the worst bond market in 40 years. That is not failure. That is the umbrella getting wet in the rain it was designed for.",
    regimes: { goldilocks: "earn", reflation: "suffer", stagflation: "suffer", deflation: "earn" },
    fiveYear: -0.86,
    y2022: -13.23,
    sharpe: -0.84,
    ter: "0.08%",
    partnersWhenSuffers: ["ICOM", "ITPS", "INXG", "XSTR", "DBMF"],
    exposure: "nominal",
  },
  {
    ticker: "XSTR",
    name: "Xtrackers II GBP Overnight Rate Swap UCITS ETF",
    weight: 5,
    floor: 2,
    cap: 8,
    sleeve: 2,
    job: "Walk-back reserve. SONIA overnight. Never goes down.",
    analogy: "The cash in the tin under the bed. The quiet room. The general’s reserve.",
    story:
      "Trigger: PMI < 50 AND curve inverted. All contributions route here. Never negative in nominal terms. FLOT’s +13.9% GBP in 2022 was FX, not carry. XSTR is not replaced at £1,053 NAV.",
    regimes: { goldilocks: "earn", reflation: "earn", stagflation: "earn", deflation: "earn" },
    fiveYear: 3.53,
    y2022: 1.25,
    sharpe: 0.27,
    ter: "0.10%",
    partnersWhenSuffers: [],
    exposure: "cash",
    notes: "AUM £194.6M — above the £150M watch floor. Monitor annually.",
  },
  {
    ticker: "IDTL",
    name: "iShares USD Treasury Bond 20+yr UCITS ETF",
    weight: 2,
    floor: 0,
    cap: 6,
    sleeve: 2,
    job: "Convexity stub. US 20+ Treasuries. A stub, not a position.",
    analogy: "A compressed spring. Every rate hike winds it tighter. The release is the payoff.",
    story:
      "GT30 5.355% — 4.5bp from the 5.40% duration-hit flag. If GT30 crosses 5.40%, IDTL loses ~5% — 10bp of portfolio impact. Do not sell. The spring is being compressed further. US Treasuries, not UK gilts.",
    regimes: { goldilocks: "earn", reflation: "suffer", stagflation: "suffer", deflation: "earn" },
    fiveYear: -7.73,
    y2022: -19.45,
    sharpe: -0.71,
    ter: "0.07%",
    partnersWhenSuffers: ["ICOM", "ITPS", "XSTR", "DBMF"],
    exposure: "nominal",
  },
  {
    ticker: "INXG",
    name: "iShares Index-Linked Gilts UCITS ETF",
    weight: 2,
    floor: 1,
    cap: 5,
    sleeve: 2,
    job: "UK inflation witness. RPI linkers. UK CPI is not US CPI.",
    analogy: "The London thermometer. ITPS is New York. A GBP investor needs both readings.",
    story:
      "5-year −9.99% — worst in the book. 2022 −34.2% at 2% weight cost 68bp. Extreme duration. The 2% weight is sized to capture the payoff without letting duration dominate. A stub, not a position.",
    regimes: { goldilocks: "ok", reflation: "earn", stagflation: "earn", deflation: "suffer" },
    fiveYear: -9.99,
    y2022: -34.2,
    sharpe: null,
    ter: "0.10%",
    partnersWhenSuffers: ["VAGS", "IDTL", "IGLS", "SGLN"],
    exposure: "linker",
    notes: "AUM £0.44bn — smallest in the book. If AUM falls below £200M, begin transition planning.",
  },
  {
    ticker: "IGLS",
    name: "iShares UK Gilts 0–5yr UCITS ETF",
    weight: 1.5,
    floor: 0,
    cap: 4,
    sleeve: 2,
    job: "Short gilt carry. Carry, not duration.",
    analogy: "A savings account with a government guarantee. The most boring line. That is a feature.",
    story:
      "0–5 year gilts. Closest to Bank of England policy rate. TER 0.07% — joint cheapest in the book. Together with XSTR they form a short-end sterling ladder.",
    regimes: { goldilocks: "earn", reflation: "earn", stagflation: "earn", deflation: "earn" },
    fiveYear: 1.4,
    y2022: -4.22,
    sharpe: -0.69,
    ter: "0.07%",
    partnersWhenSuffers: ["XSTR"],
    exposure: "nominal",
  },
  {
    ticker: "URNG",
    name: "Global X Uranium UCITS ETF",
    weight: 1,
    floor: 0,
    cap: 3,
    sleeve: 2,
    job: "Nuclear, contained. A 1% option on the energy transition.",
    analogy: "Sized like an option — small premium, large optional payoff, contained if it fails.",
    story:
      "+31% / +2% / +51% in 2023–2025. Lost −14% in 2022. At 1%, both outcomes are manageable.",
    regimes: { goldilocks: "ok", reflation: "earn", stagflation: "earn", deflation: "ok" },
    fiveYear: 15.4,
    y2022: null,
    sharpe: null,
    ter: "0.65%",
    partnersWhenSuffers: ["VWRP", "SGLN", "XSTR"],
    exposure: "equity",
  },
];

const xaix: Line = {
  ticker: "XAIX",
  name: "Xtrackers AI & Big Data UCITS ETF",
  weight: 2,
  floor: 0,
  cap: 5,
  sleeve: 1,
  job: "Goldilocks / Reflation thematic. Best-return satellite confirmed.",
  analogy: "The infrastructure of the next productivity wave — models, data, compute.",
  story:
    "XDWH retired. XAIX confirmed at 2%. 5-year +34.35%, Sharpe 1.40. Weakest satellite replaced by the strongest available thematic with a clear job.",
  regimes: { goldilocks: "earn", reflation: "earn", stagflation: "ok", deflation: "suffer" },
  fiveYear: 34.35,
  y2022: null,
  sharpe: 1.4,
  ter: "0.35%",
  partnersWhenSuffers: ["VAGS", "SGLN", "XSTR"],
  exposure: "equity",
};

const nucl: Line = {
  ticker: "NUCL",
  name: "VanEck Uranium & Nuclear Technologies UCITS ETF",
  weight: 2.5,
  floor: 0,
  cap: 5,
  sleeve: 1,
  job: "Full nuclear economy. Energy transition, contained at satellite size.",
  analogy: "The long option on zero-carbon baseload — now the whole fuel-to-reactor chain.",
  story:
    "URNG retired. NUCL raised to 2.5%. 3Y+ live history cleared. 5-year +27.76%, Sharpe 0.72. +19.8% / +31.7% / +51.5% in 2023–2025.",
  regimes: { goldilocks: "ok", reflation: "earn", stagflation: "earn", deflation: "ok" },
  fiveYear: 27.76,
  y2022: null,
  sharpe: 0.72,
  ter: "0.55%",
  partnersWhenSuffers: ["VWRP", "SGLN", "XSTR"],
  exposure: "equity",
};

const tip5: Line = {
  ticker: "TIP5",
  name: "iShares USD TIPS 0–5yr UCITS ETF",
  weight: 2,
  floor: 0,
  cap: 5,
  sleeve: 2,
  job: "Short-duration US inflation. Duration risk eliminated.",
  analogy: "The rent review clause without the 30-year spring.",
  story:
    "INXG retired. TIP5 enters at 2.0%. 2022: +8.97% vs INXG −34.27%. Short-duration TIPS keep the inflation proof and drop the gilt-crisis duration.",
  regimes: { goldilocks: "ok", reflation: "earn", stagflation: "earn", deflation: "ok" },
  fiveYear: 3.4,
  y2022: 8.97,
  sharpe: 0.02,
  ter: "0.10%",
  partnersWhenSuffers: ["VAGS", "IDTL", "SGLN"],
  exposure: "linker",
};

function replaceTicker(lines: Line[], from: string, to: Line): Line[] {
  return lines.map((l) => (l.ticker === from ? to : l));
}

export const LOCKED_PIE: Line[] = lockedLines;

export const REVISED_PIE: Line[] = replaceTicker(
  replaceTicker(
    replaceTicker(lockedLines, "XDWH", xaix)
      .map((l) =>
        l.ticker === "SMGB"
          ? { ...l, weight: 1, cap: 3, notes: "Trimmed 2.5% → 1.0%. Semiconductor exposure retained via VWRP look-through." }
          : l.ticker === "URNG"
            ? nucl
            : l,
      ),
    "INXG",
    tip5,
  ),
  "URNG",
  nucl,
).map((l) => {
  if (l.ticker === "SMGB") {
    return {
      ...l,
      partnersWhenSuffers: ["XAIX", "VAGS", "SGLN"],
    };
  }
  if (l.ticker === "VAGS") {
    return { ...l, partnersWhenSuffers: ["ICOM", "ITPS", "TIP5", "XSTR", "DBMF"] };
  }
  if (l.ticker === "ITPS") {
    return { ...l, partnersWhenSuffers: ["VAGS", "IDTL", "IGLS", "SGLN"] };
  }
  return l;
});

export const LOCKED_AT = "12 September 2026, 16:55 BST";
export const FOMC_AT = "2026-09-16T19:00:00+01:00";
export const SIGN_AFTER = "16 September 2026 FOMC";
export const AUTOINVEST_ON = "17 September 2026";
export const CONTRIBUTION_DAY = 3;

export const SIGNED_SENTENCE_LOCKED =
  "Engine 45%, cap 50%. ICOM 8%, SGLN 8%. Look-through equity ~57%. Planning drawdown 30–35%. No sales. Signed after 16 September 2026 FOMC.";

export const SIGNED_SENTENCE_REVISED =
  "Engine 45%, cap 50%. ICOM 8%, SGLN 8%. SMGB trimmed to 1%. NUCL raised to 2.5%. XDWH retired, XAIX at 2%. URNG retired. INXG retired, TIP5 at 2%. Look-through equity ~57%. Planning drawdown 30–35%. 2022 stress-test −2.11%. No sales. No FLOT before £3,000 NAV, no VHYL before £5,000 NAV. Signed after 16 September 2026 FOMC.";

export const IF_THEN =
  "If the machine always travels through all four quadrants, then no line is sold because the current quadrant is punishing it — contributions on the 3rd do the work; the signed sentence stays the hand.";

export const FARMER =
  "A farmer does not know what the weather will bring. So he plants wheat for the sun, builds a greenhouse for the cold, installs irrigation for the drought, and keeps a barn full of hay for the flood. He does not earn maximum profit in any single year. But he never loses the farm.";

export const FARMER_MAP: Record<string, string> = {
  VWRP: "the wheat — the engine that feeds everything",
  SGLN: "the barn — the long memory that survives every reset",
  ICOM: "the irrigation — the real economy running hot",
  VAGS: "the greenhouse — cold-weather insurance nobody wants until winter",
  IDTL: "the greenhouse spring — convexity when the freeze arrives",
  ITPS: "the rent review clause — inflation proof written into the lease",
  INXG: "the London rent review — UK inflation is not US inflation",
  TIP5: "the short rent review — inflation proof without the duration",
  DBMF: "the farmer reading the weather and adjusting the hedges",
  XSTR: "the cash in the tin under the bed — the reserve that funds the next season",
};

export const GOVERNANCE = [
  {
    id: "no-sales",
    title: "No selling inside the ISA",
    body: "Contributions are the only rebalancing tool. Every disposal is a compounding engine switched off.",
  },
  {
    id: "lock-file",
    title: "Lock file authorises AutoInvest",
    body: "A briefing, an analysis, a conversation — none of these are a change log entry.",
  },
  {
    id: "dates",
    title: "Decision date precedes change date",
    body: "Always. Sign on 16 September. Change AutoInvest on 17 September. Not before.",
  },
  {
    id: "walk-back",
    title: "Walk-back trigger",
    body: "PMI < 50 AND 2s10s inverted → all contributions route to XSTR. Satellites receive zero.",
  },
  {
    id: "vwrp-band",
    title: "VWRP floor 40%, cap 50%",
    body: "Below 40% → next contribution to VWRP. Above 50% → stop contributing to VWRP.",
  },
  {
    id: "satellite",
    title: "No satellite above 5%",
    body: "No Sleeve 1 line above its cap. No 17th personality.",
  },
  {
    id: "gates",
    title: "Size gates hold",
    body: "FLOT at £3,000+ NAV. VHYL at £5,000+ NAV. ROLL at £10,000+ NAV.",
  },
];

export const LOCK_ENTRIES = [
  {
    n: 1,
    from: "XDWH LN",
    to: "XAIX LN at 2%",
    reason: "Weakest satellite retired. Best-return satellite confirmed.",
  },
  {
    n: 2,
    from: "URNG LN",
    to: "NUCL LN at 2.5%",
    reason: "Full nuclear economy. 3Y+ live history cleared.",
  },
  {
    n: 3,
    from: "SMGB LN 2.5%",
    to: "SMGB LN 1.0%",
    reason: "Worst 2022 line in the portfolio: −27.23%. Semiconductor exposure retained via VWRP look-through.",
  },
  {
    n: 4,
    from: "INXG LN",
    to: "TIP5 LN at 2.0%",
    reason: "Long-duration UK linker retired. Short-duration US TIPS replaces it. Duration risk eliminated.",
  },
];

export const PERMANENTLY_DEAD = [
  { id: "d-prime", name: "D-Prime", reason: "Arithmetic was wrong. 2022 ≈ −1.04%, not +1.35%." },
  { id: "sectors", name: "IITU / WNRG / XDWF", reason: "Sector bets, not All Weather lines." },
  { id: "flot", name: "FLOT replacing XSTR at £1,053 NAV", reason: "FLOT’s +13.9% GBP in 2022 was GBP/USD depreciation, not carry." },
  { id: "gold-scale", name: "Scaling ICOM/SGLN then doubling gold", reason: "Construction error, not research. Both lines stand at 8%." },
  { id: "labels", name: "Wrong fund labels", reason: "ITPS is US TIPS, IDTL is US Treasuries, SMGB is semiconductors, XSTR is SONIA." },
  { id: "alts", name: "Crypto, REITs, IWQU, second BCOM", reason: "Rejected for documented reasons." },
  { id: "eight", name: "8% as a planning return", reason: "Retired. Stress base 5%. Bayesian 7.5%." },
];

export const SIZE_GATES = [
  { id: "FLOT", name: "FLOT LN", threshold: 3000, replaces: "XSTR", note: "Case rests on carry differential in normal years, not a one-year FX windfall." },
  { id: "VHYL", name: "VHYL LN", threshold: 5000, replaces: null, note: "Income satellite. Not before £5,000 NAV." },
  { id: "ROLL", name: "ROLL LN", threshold: 10000, replaces: null, note: "Not before £10,000 NAV." },
] as const;

export const STATS_LOCKED = {
  mean: 9.54,
  vol: 6.9,
  best: { year: 2025, value: 15.64 },
  worst: { year: 2022, value: -3.69 },
  positiveYears: "6 of 7",
  neverBelowCash: true,
  drawdownPlan: "30–35%",
  equityLookThrough: 57,
  stress2022: -3.69,
};

export const STATS_REVISED = {
  mean: 8.18,
  vol: 6.06,
  best: { year: 2024, value: 15.62 },
  worst: { year: 2018, value: -2.41 },
  positiveYears: "7 of 9",
  neverBelowCash: true,
  drawdownPlan: "30–35%",
  equityLookThrough: 57,
  stress2022: -2.11,
};

export const YEARLY_REVISED: { year: number; ret: number; driver: string }[] = [
  { year: 2017, ret: 6.34, driver: "VWRP +13.2%, COPA +16.6% offset by ITPS/VAGS drag" },
  { year: 2018, ret: -2.41, driver: "VWRP −4.1%, COPA −17.4%, XDWI −10.3% — broad sell-off" },
  { year: 2019, ret: 13.01, driver: "VWRP +21.6%, SGLN +14.0%, IDTL +10.5%" },
  { year: 2020, ret: 9.52, driver: "VWRP +12.7%, SGLN +20.1%, IDTL +14.6% — flight to safety worked" },
  { year: 2021, ret: 11.17, driver: "VWRP +19.4%, COPA +26.8%, SMGB +42.0%" },
  { year: 2022, ret: -2.11, driver: "ICOM +26.6%, SGLN +12.6%, TIP5 +9.0% absorbed the rate shock" },
  { year: 2023, ret: 10.39, driver: "VWRP +15.6%, DFNS +22.7%, NUCL +19.8%" },
  { year: 2024, ret: 15.62, driver: "VWRP +19.5%, SGLN +28.7%, DFNS +45.3%, NUCL +31.7%" },
  { year: 2025, ret: 12.09, driver: "DFNS +54.8%, NUCL +51.5%, SMGB +37.0%, DBMF +15.1%" },
];

export const PLAN_PATHS: Record<
  "stress" | "bayesian" | "historical",
  { rate: number; label: string; at1600: Record<number, number> }
> = {
  stress: {
    rate: 5.0,
    label: "Stress base — plan around this",
    at1600: { 5: 107436, 10: 243211, 15: 416498, 20: 637660, 25: 919926, 30: 1280177 },
  },
  bayesian: {
    rate: 7.5,
    label: "Bayesian central — working assumption",
    at1600: { 5: 113033, 10: 273794, 15: 504588, 20: 835923, 25: 1311596, 30: 1994487 },
  },
  historical: {
    rate: 8.18,
    label: "Historical 8.18% — 9-year verified. Do not plan around it.",
    at1600: { 5: 114604, 10: 282842, 15: 532107, 20: 901420, 25: 1448600, 30: 2259309 },
  },
};

export const MILESTONE_1M = {
  stress: { "200": "Never in 30Y (£164K)", "1600": "Year ~28", "1667": "Year ~27" },
  bayesian: { "200": "Never in 30Y (£257K)", "1600": "Year ~22", "1667": "Year ~21" },
  historical: { "200": "Never in 30Y (£292K)", "1600": "Year ~22", "1667": "Year ~21" },
};

export const STRESS_SCENARIOS = [
  {
    id: "rate",
    name: "Rate shock (2022-style)",
    impact: "−2.11% revised / −3.69% locked",
    cushion: "ICOM +26.6%, SGLN +12.6%, TIP5 +9.0%",
  },
  {
    id: "equity",
    name: "Equity crash (2018-style)",
    impact: "−2.41% revised",
    cushion: "ITPS +4.5%, SGLN +4.7%, XSTR +0.4%",
  },
  {
    id: "deflation",
    name: "Full deflation (2008-style)",
    impact: "Net est. −8 to −12%",
    cushion: "Defensive sleeve activates fully. The only double-digit loss scenario.",
  },
  {
    id: "gold",
    name: "Gold crashes −20%",
    impact: "SGLN 8% × −20% = −1.60pp",
    cushion: "ICOM, VWRP, DFNS likely positive in the same environment",
  },
  {
    id: "commodity",
    name: "Commodity rout −30%",
    impact: "ICOM + COPA = −3.0pp",
    cushion: "IDTL, VAGS, SGLN likely rally in a deflation scenario",
  },
];

export const COOPERATION: { suffers: string; earns: string }[] = [
  { suffers: "VWRP (equity crash)", earns: "VAGS, IDTL, SGLN, DBMF, XSTR" },
  { suffers: "VAGS + IDTL (rate hike)", earns: "ICOM, ITPS, INXG/TIP5, XSTR, DBMF" },
  { suffers: "ICOM (commodity crash)", earns: "VAGS, IDTL, SGLN" },
  { suffers: "SGLN (Goldilocks, risk-on)", earns: "VWRP, XDWI, DFNS, SMGB" },
  { suffers: "ITPS + linkers (deflation)", earns: "VAGS, IDTL, IGLS, SGLN" },
  { suffers: "SMGB (tech crash)", earns: "XDWH/XAIX, VAGS, SGLN" },
  { suffers: "DFNS (peace dividend)", earns: "VWRP, VAGS, XDWI" },
  { suffers: "URNG/NUCL (uranium bear)", earns: "Everything else — contained at weight" },
];

export function getPie(mode: "locked" | "revised"): Line[] {
  return mode === "revised" ? REVISED_PIE : LOCKED_PIE;
}

export function lineByTicker(pie: Line[], ticker: string): Line | undefined {
  return pie.find((l) => l.ticker === ticker);
}

export function sleeveTotal(pie: Line[], sleeve: Sleeve): number {
  return pie.filter((l) => l.sleeve === sleeve).reduce((s, l) => s + l.weight, 0);
}

export function exposureTotal(
  pie: Line[],
  exposure: Line["exposure"],
): number {
  return pie.filter((l) => l.exposure === exposure).reduce((s, l) => s + l.weight, 0);
}

export function targetWeights(pie: Line[]): Record<string, number> {
  return Object.fromEntries(pie.map((l) => [l.ticker, l.weight]));
}

export const DEFAULT_NAV = 1053;
export const DEFAULT_CONTRIBUTION = 1600;
export const DEFAULT_PMI = 52;
export const DEFAULT_GT30 = 5.355;
export const IDTL_FLAG = 5.4;
