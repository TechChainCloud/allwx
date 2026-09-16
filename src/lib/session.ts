/** Afternoon close 9 Sep 2026 17:35 BST. Teaching tape. Not a lock-file edit. */

export const SESSION_ASOF = "2026-09-09";
export const SESSION_CLOCK = "17:35 BST";
export const SESSION_FX = 1.355;
export const SESSION_HEADLINE =
  "Brent $100.95 and a $6bn long-dated buyback versus $10bn priced. Yields at new YTD highs. Equities sold. Stagflation overlay is now co-primary. ICOM was the only Invictus line green. IDTL is in the penalty box. House holds. Walk-back inactive. No action. Next cash: 3 Oct.";

export const SESSION_CHAIN =
  "Brent > $100 → hike odds up → VAGS/IDTL taxed → ICOM paid → SGLN mixed (crisis bid vs real-yield tax) → VWRP and every satellite marked down on risk-off. Under-earning is the view, not a failure.";

export type SessionLine = {
  ticker: string;
  sleeve: "core" | "sat";
  w: number;
  day: number;
  dir: "up" | "down" | "flat";
  signal: string;
};

export const SESSION_LINES: SessionLine[] = [
  { ticker: "VWRP", sleeve: "core", w: 23.8, day: -0.86, dir: "down", signal: "Rate/oil shock. PMI still 54.6. Medium-term job intact." },
  { ticker: "VAGS", sleeve: "core", w: 13.5, day: -0.41, dir: "down", signal: "UK gilt +8.8bp. US 10Y ~4.83. Duration tax. Trimmed weight is the posture." },
  { ticker: "ITPS", sleeve: "core", w: 12.5, day: -0.26, dir: "down", signal: "Indexation vs rising real yield. GTII10 ~2.30, still below 2.50." },
  { ticker: "SGLN", sleeve: "core", w: 9.6, day: -0.1, dir: "down", signal: "Gold +1.1% in USD; wrapper marked slightly red. Crisis bid vs real-yield tax." },
  { ticker: "ICOM", sleeve: "core", w: 9.6, day: 0.84, dir: "up", signal: "$100 trigger fired. Only Invictus line green. Do not chase the cap." },
  { ticker: "CSH2", sleeve: "core", w: 6.5, day: 0.02, dir: "up", signal: "Carry accruing. Optionality intact." },
  { ticker: "IDTL", sleeve: "core", w: 5.3, day: -0.74, dir: "down", signal: "GT30 ~5.25–5.30. Green light on. Duration hit 5.40 not fired. Do not sell." },
  { ticker: "INXG", sleeve: "core", w: 3.8, day: -0.77, dir: "down", signal: "UK 10Y 5.261. Duration tax today. RPI thesis intact. Probation stands." },
  { ticker: "IGLS", sleeve: "core", w: 2.8, day: -0.21, dir: "down", signal: "UK 2Y 4.697. Carry well above 3.5. Short duration limited the damage." },
  { ticker: "DFNS", sleeve: "sat", w: 2.9, day: -1.48, dir: "down", signal: "Thesis intact. Risk-off, not a fundamental break." },
  { ticker: "SMGB", sleeve: "sat", w: 2.6, day: -0.57, dir: "down", signal: "Foundry tape still strong. Price is risk-off." },
  { ticker: "COPA", sleeve: "sat", w: 2.6, day: -0.39, dir: "down", signal: "COPG −0.80. Verify T212 wrapper before 3 Oct." },
  { ticker: "XDWI", sleeve: "sat", w: 2.1, day: -1.6, dir: "down", signal: "Industrial cycle + European energy shock." },
  { ticker: "XDWH", sleeve: "sat", w: 1.8, day: -0.28, dir: "down", signal: "Most resilient satellite. Defensive job working." },
  { ticker: "URNG", sleeve: "sat", w: 1.1, day: -2.77, dir: "down", signal: "Worst mark. Tiny on purpose. No identified catalyst." },
];

export const SESSION_TRIGGERS: {
  name: string;
  object: string;
  now: string;
  status: "OFF" | "ON" | "WATCH";
  note: string;
}[] = [
  { name: "Walk-back", object: "2s10s < 0 AND PMI < 50", now: "+38bp / 54.6", status: "OFF", note: "Neither key. The full monthly debit still splits unless both fire." },
  { name: "IDTL green light", object: "GT30", now: "~5.25–5.30%", status: "ON", note: "Above 5.00. First signal to add toward cap 8% with new cash — not a sale, not tonight." },
  { name: "IDTL duration hit", object: "GT30", now: "~5.25–5.30%", status: "OFF", note: "Pain 5.40. Below it. Hold." },
  { name: "ICOM $100", object: "CO1", now: "$100.95", status: "ON", note: "Co-primary overlay. Cap still applies. Do not enlarge on a session." },
  { name: "ITPS drag", object: "GTII10", now: "~2.30%", status: "OFF", note: "Threshold 2.50. Monitor into CPI." },
  { name: "BEI rip", object: "USGGBE10", now: "2.382%", status: "WATCH", note: "Threshold 2.50. Direction up. 132bp gap vs PCE 3.7." },
  { name: "IGLS carry", object: "UK 2Y", now: "4.697%", status: "OFF", note: "Compression below 3.5. Carry intact." },
  { name: "Dollar squeeze", object: "DXY", now: "98.81", status: "OFF", note: "Band 97–102." },
];

export const SESSION_NEWS = [
  { k: "Brent > $100", body: "Hormuz. ICOM paid. Overlay co-primary. VWRP/VAGS/IDTL taxed." },
  { k: "$6bn buyback", body: "Street wanted ~$10bn. Long end sold. IDTL deeper in the penalty box. Fiscal/term-premium, not a regime change." },
  { k: "EU gas > €80", body: "First print since 2023. Energy 37% of BCOM. XDWI and European equities headwind." },
  { k: "Bailey / ECB", body: "Crack spreads as an inflation metric. Up to four more hikes by end-2027 priced. INXG thesis, IGLS carry." },
  { k: "IG supply", body: "Record corporate issuance. HY OAS still 267. Credit not yet the crack." },
  { k: "Foundry tape", body: "SMGB thesis intact. Price is risk-off, not a broken foundry cycle." },
];
