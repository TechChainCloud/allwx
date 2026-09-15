import type { JobId, WeatherId } from "@/lib/content";

export const TAPE_ASOF = "2026-09-09";
export const TAPE_STAGE = "3 · Late expansion";
export const TAPE_REGIME: WeatherId = "reflation";
export const TAPE_OVERLAY = "Stagflation co-primary — Brent $100.95";

export type Print = {
  mnemonic: string;
  fn: string;
  name: string;
  value: string;
  chg: string;
  dir: "up" | "down" | "flat";
  unit: string;
  reads: string;
  lever: string;
  sleeve: JobId[];
};

export const TAPE: Print[] = [
  {
    mnemonic: "XAU",
    fn: "CT",
    name: "Gold",
    value: "4403.60",
    chg: "+47.59",
    dir: "up",
    unit: "$",
    reads: "£3,249/oz. Crisis bid after buyback trimmed the print.",
    lever: "Stagflation co-primary. Real yield ~2.30 is the short-term tax. Do not enlarge. Floor still 10 in the classroom.",
    sleeve: ["gold"],
  },
  {
    mnemonic: "GT2",
    fn: "GC",
    name: "US 2Y",
    value: "4.45",
    chg: "+8",
    dir: "up",
    unit: "%",
    reads: "New YTD high. Oil-driven hike repricing.",
    lever: "Front end is the cash-like yield and the tax on intermediate duration. 16 Sep odds rising.",
    sleeve: ["cash", "bonds"],
  },
  {
    mnemonic: "GT10",
    fn: "GC",
    name: "US 10Y",
    value: "4.83",
    chg: "+5",
    dir: "up",
    unit: "%",
    reads: "New YTD high. Growth + inflation + term premium.",
    lever: "Buyback disappointment plus oil. VAGS/IDTL sensitivity elevated. Observe. Do not sell.",
    sleeve: ["shares", "bonds"],
  },
  {
    mnemonic: "GT30",
    fn: "GC",
    name: "US 30Y",
    value: "5.28",
    chg: "+5",
    dir: "up",
    unit: "%",
    reads: "Fire-brigade yield. Fiscal supply + term premium. Penalty box.",
    lever: "Green light 5.00 is ON. Pain 5.40 is OFF. Do not sell the brigade because the buyback was $6bn not $10bn.",
    sleeve: ["long"],
  },
  {
    mnemonic: "2s10s",
    fn: "GC",
    name: "Curve slope",
    value: "+38",
    chg: "-3",
    dir: "down",
    unit: "bp",
    reads: "Steepening for the wrong reason: inflation + fiscal, not growth optimism.",
    lever: "Still positive. Walk-back needs inversion AND PMI under 50. Neither is live.",
    sleeve: ["bonds", "long", "shares"],
  },
  {
    mnemonic: "USGGBE10",
    fn: "FWCV",
    name: "10Y breakeven",
    value: "2.38",
    chg: "+0.7",
    dir: "up",
    unit: "%",
    reads: "Market's inflation forecast, not last month's CPI",
    lever: "BEI 2.38 versus PCE 3.7. 132bp gap. Goldilocks priced on a reflation/stagflation tape. Rip trigger 2.50 not fired.",
    sleeve: ["tips", "commodities", "gold"],
  },
  {
    mnemonic: "GTII10",
    fn: "YAS",
    name: "10Y real yield",
    value: "2.30",
    chg: "+4",
    dir: "up",
    unit: "%",
    reads: "Below the 2.50 drag threshold. ITPS/INXG not yet impaired.",
    lever: "Rising real yields tax TIPS and gold in the mark. Watch 2.50 into Thursday CPI. That is a watch, not a fire.",
    sleeve: ["tips", "gold", "shares"],
  },
  {
    mnemonic: "DXY",
    fn: "WIRA",
    name: "Dollar index",
    value: "98.81",
    chg: "+0.02",
    dir: "flat",
    unit: "",
    reads: "Inside 97–102. Mild headwind to the unhedged block.",
    lever: "No flag. Currency is a decision. Pain watch 102.",
    sleeve: ["shares", "gold", "commodities"],
  },
  {
    mnemonic: "GBPUSD",
    fn: "WIRA",
    name: "Sterling",
    value: "1.3550",
    chg: "+0.0009",
    dir: "up",
    unit: "",
    reads: "Session FX used for gold in sterling.",
    lever: "VAGS is sterling-hedged on purpose. Most of the rest is not. Name the mix.",
    sleeve: ["bonds", "shares"],
  },
  {
    mnemonic: "CO1",
    fn: "CT",
    name: "Brent",
    value: "100.95",
    chg: "+3.03",
    dir: "up",
    unit: "$",
    reads: "$100 ICOM trigger fired. Hormuz + EU gas > €80.",
    lever: "Stagflation overlay is co-primary. Cap still applies. Do not enlarge ICOM on a session. PMI 54.6 still says growth is up.",
    sleeve: ["commodities", "tips"],
  },
  {
    mnemonic: "VIX",
    fn: "HIVOL",
    name: "Vol index",
    value: "16.57",
    chg: "+0.85",
    dir: "up",
    unit: "",
    reads: "Rising. Risk appetite deteriorating. Not a crash.",
    lever: "Directionally negative for VWRP and satellites. Still below stress. HY OAS 267 has not confirmed.",
    sleeve: ["gold", "long", "cash"],
  },
  {
    mnemonic: "CPURNSA",
    fn: "ECO",
    name: "US CPI / PCE y/y",
    value: "3.7",
    chg: "0",
    dir: "flat",
    unit: "%",
    reads: "The print. Not the breakeven.",
    lever: "Print above BEI is the surprise linkers were hired for. Barr's comment lives here.",
    sleeve: ["tips", "bonds", "long"],
  },
  {
    mnemonic: "NAPMPMI",
    fn: "ECO",
    name: "ISM manufacturing",
    value: "54.6",
    chg: "-1.0",
    dir: "down",
    unit: "",
    reads: "Eased one point. Still expansion. Eighth month above 50 on this tape.",
    lever: "Growth is not stalling. Stage 3 confirmed. A single down-tick is not Stage 4.",
    sleeve: ["shares", "commodities"],
  },
  {
    mnemonic: "LF98OAS",
    fn: "FICM",
    name: "US HY OAS",
    value: "267",
    chg: "-45",
    dir: "down",
    unit: "bp",
    reads: "Price of credit risk, not a vibe about yield",
    lever: "HY OAS ~2nd percentile. Credit very tight. Transition locks need +100bp from the trough, not a tight print.",
    sleeve: ["bonds", "shares", "cash"],
  },
  {
    mnemonic: "USSO1",
    fn: "WIRP",
    name: "1Y OIS",
    value: "3.41",
    chg: "+4",
    dir: "up",
    unit: "%",
    reads: "What the next four meetings are pricing",
    lever: "16 Sep hike odds rising on oil > $100. Do not double-count a priced hike in duration.",
    sleeve: ["cash", "bonds", "long"],
  },
  {
    mnemonic: "GUKG10",
    fn: "GC",
    name: "UK 10Y gilt",
    value: "5.261",
    chg: "+8.8",
    dir: "up",
    unit: "%",
    reads: "UK duration tax on VAGS, INXG, IGLS.",
    lever: "INXG probation still holds. Duration is being taxed today. RPI thesis is a different clock.",
    sleeve: ["bonds", "tips"],
  },
  {
    mnemonic: "GUKG2",
    fn: "GC",
    name: "UK 2Y gilt",
    value: "4.697",
    chg: "+10.7",
    dir: "up",
    unit: "%",
    reads: "IGLS carry well above 3.5% compression.",
    lever: "Short duration limited the session damage. Carry intact.",
    sleeve: ["bonds", "cash"],
  },
  {
    mnemonic: "FDTR",
    fn: "WIRP",
    name: "Fed funds upper",
    value: "3.750",
    chg: "0",
    dir: "flat",
    unit: "%",
    reads: "Unchanged. EFFR 3.63. Hike not delivered.",
    lever: "CSH2/IGLS carry. 16 Sep is the binary. Thursday CPI is the input.",
    sleeve: ["cash", "bonds", "long"],
  },
];

export const FUNCTIONS: {
  fn: string;
  name: string;
  use: string;
  allwx: string;
}[] = [
  {
    fn: "ECO",
    name: "Economic calendar",
    use: "CPI, GDP, NFP, PMI with consensus versus actual.",
    allwx: "Regime ID. Surprise versus priced. Question 1 and 3.",
  },
  {
    fn: "GC",
    name: "Curve",
    use: "Any sovereign curve, any country. Slope, butterfly, forwards.",
    allwx: "2s10s is the credit-creation impulse. GT30 is the fire-brigade mark. Question 4.",
  },
  {
    fn: "YAS",
    name: "Yield and spread",
    use: "Yield, spread, duration, convexity on a bond.",
    allwx: "Name the duration on VAGS and IDTL. Do not hide it.",
  },
  {
    fn: "FWCV",
    name: "Forwards / BEI",
    use: "Inflation swaps, breakevens, real yields.",
    allwx: "USGGBE10 vs GTII10. The two prices inside a linker.",
  },
  {
    fn: "WIRP",
    name: "Rate probabilities",
    use: "What the market prices for the next 12 months of policy.",
    allwx: "Question 2. Hiking, pausing, cutting. The path.",
  },
  {
    fn: "FICM",
    name: "Credit markets",
    use: "IG/HY spreads, CDS, issuance.",
    allwx: "Spread widening is a recession signal with a lag. Credit that is secretly equity.",
  },
  {
    fn: "PORT",
    name: "Portfolio analytics",
    use: "Risk, attribution, factor, stress.",
    allwx: "Stress stagflation, not just last decade's 60/40 world.",
  },
  {
    fn: "BTMM",
    name: "Money markets",
    use: "SOFR, SONIA, bills, the front end.",
    allwx: "The parking bay. Duration near zero.",
  },
  {
    fn: "WB",
    name: "World bonds",
    use: "Global yields and spreads in one pane.",
    allwx: "Sterling household versus dollar duration. Decide FX.",
  },
  {
    fn: "BQNT",
    name: "Python + BQL",
    use: "Query 20,000 fields. Build the model.",
    allwx: "The measurement system, not the story.",
  },
];

export const STAGES: {
  n: number;
  name: string;
  curve: string;
  paid: string;
  fined: string;
}[] = [
  { n: 1, name: "Early expansion", curve: "Steepening", paid: "Equities, credit", fined: "Long vol, gold boring" },
  { n: 2, name: "Mid expansion", curve: "Normal", paid: "Equities, commodities", fined: "Cash opportunity cost" },
  { n: 3, name: "Late expansion", curve: "Flattening", paid: "Growth + real assets", fined: "Long nominal duration" },
  { n: 4, name: "Inversion / peak", curve: "Inverted", paid: "Quality duration, gold, cash", fined: "Cyclicals, credit" },
  { n: 5, name: "Recession", curve: "Deep then steep", paid: "Long Treasuries, cash", fined: "Equities, commodities" },
  { n: 6, name: "Recovery", curve: "Steepening fast", paid: "Equities lead", fined: "Gold off the peak" },
];

export const CORRELATIONS: {
  when: string;
  then: string;
  strength: string;
  breaks: string;
}[] = [
  {
    when: "2s10s inverted",
    then: "Recession probability up, 12–18m lag",
    strength: "Strong historically",
    breaks: "Delayed by fiscal impulse or external demand",
  },
  {
    when: "VIX > 30",
    then: "Equities down, gold and quality bonds bid",
    strength: "Strong in a growth scare",
    breaks: "Stagflation: bonds may fall too",
  },
  {
    when: "DXY rips",
    then: "Gold, EM, commodities under pressure",
    strength: "Moderate-strong",
    breaks: "Global scare can bid dollar and gold together",
  },
  {
    when: "Oil shock, PMI < 50",
    then: "Stagflation room. 60/40 fails.",
    strength: "Strong if sustained",
    breaks: "Demand shock oil is disinflationary, not this",
  },
  {
    when: "Real yields jump",
    then: "TIPS and gold marked down, growth equities hit",
    strength: "Strong in the mark",
    breaks: "If jump is from falling BEI, goldilocks can still pay equities",
  },
  {
    when: "Credit +100bp",
    then: "Equity drawdown often follows 3–6m",
    strength: "Strong",
    breaks: "Sector-specific widening without broad beta",
  },
];

export type Shock = {
  id: string;
  name: string;
  growth: "up" | "down";
  inflation: "up" | "down";
  room: WeatherId;
};

export const SHOCKS: Shock[] = [
  { id: "goldilocks", name: "Soft landing", growth: "up", inflation: "down", room: "goldilocks" },
  { id: "reflation", name: "Hot tape", growth: "up", inflation: "up", room: "reflation" },
  { id: "stagflation", name: "Supply shock", growth: "down", inflation: "up", room: "stagflation" },
  { id: "disinflation", name: "Demand crash", growth: "down", inflation: "down", room: "disinflation" },
];
