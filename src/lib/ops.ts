import type { JobId } from "@/lib/content";

export const DESK_ASOF = "2026-09-16";
export const DESK_CLOCK = "09:46 BST";
export const DESK_EVENT = "Live = lock · weights only · FOMC 19:00";

export const SEVEN_TONIGHT: {
  n: number;
  q: string;
  answer: string;
  vsMorning: string;
}[] = [
  {
    n: 1,
    q: "Cycle stage?",
    answer: "Stage 3. PMI 54.6. 2s10s ~+38bp. Curve steepening for the wrong reason — inflation plus fiscal supply, not growth optimism.",
    vsMorning: "Walk-back still off. Slope +41 → +38.",
  },
  {
    n: 2,
    q: "Central bank?",
    answer: "FDTR 3.75 unchanged. Oil > $100 lifted 16 Sep hike odds. Bailey watching crack spreads. ECB/BOE swaps price up to four more hikes by end-2027.",
    vsMorning: "Hike probability upgraded on Brent and the buyback miss.",
  },
  {
    n: 3,
    q: "Regime?",
    answer: "Reflation primary. Stagflation now co-primary. Brent $100.95. PMI still 54.6 so growth is up. BEI 2.38 vs PCE 3.7.",
    vsMorning: "Overlay promoted. $100 trigger fired.",
  },
  {
    n: 4,
    q: "Curve?",
    answer: "GT30 ~5.25–5.30. Green light 5.00 ON. Pain 5.40 OFF. UK 10Y 5.261. IDTL in the penalty box. Do not sell.",
    vsMorning: "Buyback $6bn vs $10bn priced. Long end sold.",
  },
  {
    n: 5,
    q: "Dollar?",
    answer: "DXY 98.81, sterling 1.3550. Inside the band. Mild headwind to the unhedged block. No flag.",
    vsMorning: "Unchanged band.",
  },
  {
    n: 6,
    q: "Priced vs confirmed?",
    answer: "BEI 2.38 versus PCE 3.7. 132bp gap. Goldilocks inflation priced on a reflation/stagflation tape. VIX 16.57. HY OAS 267 — credit has not cracked.",
    vsMorning: "Gap 135 → 132. Direction of BEI is up. Rip 2.50 not fired.",
  },
  {
    n: 7,
    q: "Principle?",
    answer: "House holds. ICOM and SGLN are doing the jobs they were hired for. Duration is being taxed — that is insurance, not a ticket. No action. 3 Oct.",
    vsMorning: "Under-earning on purpose. Confirmed.",
  },
];

export const WATCH: {
  mnemonic: string;
  now: string;
  green?: string;
  pain?: string;
  note: string;
}[] = [
  {
    mnemonic: "GT30",
    now: "~5.28%",
    green: "5.00% ON",
    pain: "5.40%",
    note: "Penalty box. Buyback miss. Thesis is the cut cycle, not today's print. Do not sell.",
  },
  {
    mnemonic: "GTII10",
    now: "~2.30%",
    pain: "2.50%",
    note: "Below drag. Watch into Thursday CPI. Oil > $100 can push it if the Fed hikes hard.",
  },
  {
    mnemonic: "CO1",
    now: "$100.95",
    green: "$100 ON",
    pain: "$85 relief",
    note: "ICOM trigger fired. Overlay co-primary. Cap still applies. Do not enlarge on a session.",
  },
  {
    mnemonic: "USGGBE10",
    now: "2.382%",
    pain: "2.50% rip",
    note: "132bp below PCE 3.7. Goldilocks priced on the wrong tape. Direction up.",
  },
  {
    mnemonic: "DXY",
    now: "98.81",
    green: "97",
    pain: "102",
    note: "Inside the band. Mild headwind to the unhedged block.",
  },
  {
    mnemonic: "VIX",
    now: "16.57",
    note: "Rising, not a crash. HY OAS 267 has not confirmed stress.",
  },
  {
    mnemonic: "GUKG2",
    now: "4.697%",
    green: "> 3.5% carry",
    note: "IGLS carry intact. Short duration limited today's mark.",
  },
];

export const SCORECARD: {
  dim: string;
  score: number;
  of: number;
  why: string;
}[] = [
  {
    dim: "Architecture",
    score: 9,
    of: 10,
    why: "Four-regime logic. Real-asset block near 39%. No redundant sleeve. Correlation break is structural.",
  },
  {
    dim: "Instrument selection",
    score: 8,
    of: 10,
    why: "Each line is a liquid UCITS expression of a job. Synthetic commodities and a distributing long Treasury are platform costs, not design errors.",
  },
  {
    dim: "Risk management",
    score: 5,
    of: 10,
    why: "±3pp drift rule exists. Seven Questions run. Drawdown protocol and stage-transition actions were the missing page. That is this terminal.",
  },
  {
    dim: "Measurement",
    score: 8,
    of: 10,
    why: "Functions mapped to questions. Cause-effect written. Deduction: monitoring was not yet wired to if-then.",
  },
  {
    dim: "Scale vs complexity",
    score: 6,
    of: 10,
    why: "Seven lines at a starter book is correctly minimal. Contribution rate dominates until the book is funded.",
  },
];

export const SKELETON_RIGHT = [
  "Thirty-nine percent real assets is the design, not decoration. Equities plus nominal bonds can fall together when inflation is the shock.",
  "Broad commodities, not a single oil ticket. A one-name ETC is a trade. A regime hedge needs a basket.",
  "Linkers carry the inflationary bond job. Long nominal Treasuries stay a six-percent Stage-5 residual.",
  "Cash-like is a funded option on the other six lines, not dead weight in a late expansion.",
  "Sterling-hedged investment grade isolates duration. Unhedged global aggregate would smuggle a second dollar bet.",
];

export const SKELETON_GAPS = [
  "No EM local-currency bonds. World equities hold EM names in dollar terms. A fourth stream waits for scale.",
  "The commodity wrapper is synthetic. Cap it. A physically backed broad basket at comparable cost is a market gap.",
  "Distributing long Treasuries leave coupons sitting as cash unless a reinvestment rule exists.",
  "Linkers are US real rates only. A sterling household has a natural case for some sterling real-rate exposure at scale.",
  "One cap-weighted world equity line is structurally heavy US mega-cap. Fine in goldilocks. A drag if the dollar weakens and EM leads.",
];

export type PostureId = "base" | "s3s4" | "s4s5" | "s5s6" | "stag" | "amber" | "red";

export const BASE_WEIGHTS: Record<JobId, number> = {
  shares: 30,
  bonds: 18,
  gold: 15,
  tips: 14,
  commodities: 10,
  cash: 7,
  long: 6,
};

export const POSTURES: {
  id: PostureId;
  name: string;
  when: string;
  confirm: string;
  weights: Partial<Record<JobId, number>>;
  note: string;
}[] = [
  {
    id: "base",
    name: "Classroom base",
    when: "Stage 3 · reflation",
    confirm: "No confirmed transition. Drift only.",
    weights: {},
    note: "The teaching object. Fund it. Do not redesign it on a Tuesday.",
  },
  {
    id: "s3s4",
    name: "3 → 4  Expansion to slowdown",
    when: "Stage transition",
    confirm: "2s10s inverted AND PMI < 50 AND credit spreads +100bp from trough. All three. Two consecutive readings.",
    weights: { shares: 20, cash: 15 },
    note: "Hold gold, commodities, linkers. Long Treasuries stay at six.",
  },
  {
    id: "s4s5",
    name: "4 → 5  Slowdown to recession",
    when: "Stage transition",
    confirm: "PMI < 45 AND credit +200bp AND the Fed cutting.",
    weights: { long: 15, bonds: 25, commodities: 5, shares: 15 },
    note: "Deploy cash into duration. Commodities lose the demand boom.",
  },
  {
    id: "s5s6",
    name: "5 → 6  Recession to recovery",
    when: "Stage transition",
    confirm: "PMI turning up AND 2s10s steepening from inversion AND spreads narrowing.",
    weights: {},
    note: "Rebuild world equities toward thirty. Trim the fire brigade toward six. Restore commodities toward ten. Over two contribution cycles, not one click.",
  },
  {
    id: "stag",
    name: "Stagflation overlay",
    when: "Overlay on any stage",
    confirm: "PMI < 50 AND Brent > 100 AND BEI > 3%.",
    weights: { gold: 20, commodities: 15, shares: 25, long: 3 },
    note: "The inflation team clocks in. Long nominal duration stands down.",
  },
  {
    id: "amber",
    name: "Amber drawdown",
    when: "Risk protocol",
    confirm: "Book −12 to −20% from peak AND 2s10s inverted AND PMI < 50.",
    weights: { shares: 20, cash: 15 },
    note: "Same posture as 3→4. Written before the pain. Not invented in it.",
  },
  {
    id: "red",
    name: "Red drawdown",
    when: "Risk protocol",
    confirm: "Book worse than −20% from peak AND credit +200bp AND PMI < 45.",
    weights: { commodities: 5, long: 15, bonds: 25 },
    note: "Stage-5 posture. Demand destruction. Fire brigade earns.",
  },
];

export function weightsFor(id: PostureId): Record<JobId, number> {
  const p = POSTURES.find((x) => x.id === id)!;
  return { ...BASE_WEIGHTS, ...p.weights };
}

export const DRAWDOWN = [
  {
    level: "YELLOW",
    band: "−8 to −12% from peak",
    action:
      "No sleeve changes. Run the Seven Questions. Confirm the regime has not rotated. Document the chain. Do not add to losers.",
  },
  {
    level: "AMBER",
    band: "−12 to −20% AND inversion AND PMI < 50",
    action: "World equities 30→20. Cash-like 7→15. Hold the inflation team. Stage-4 posture.",
  },
  {
    level: "RED",
    band: "> −20% AND credit +200bp AND PMI < 45",
    action: "Commodities 10→5. Long Treasuries 6→12–15. Investment grade 18→25. Stage-5 posture.",
  },
  {
    level: "RECOVERY",
    band: "PMI up two months AND curve steepening",
    action: "Reverse amber/red in the same order. Restore targets over two contribution cycles.",
  },
];

export const DRIFT_RULES = [
  "Check monthly, on the contribution date. Not daily. Not because a line had a bad week.",
  "If any sleeve is ±3pp from target after the contribution has been pointed at the most underweight line, rebalance. No discretion.",
  "New cash is the first rebalancing tool. Only sell an existing line if drift still exceeds 3pp after that.",
  "Record date, trigger in percentage points, action, resulting weights. That is the audit trail.",
  "A distributing coupon is not part of the machine until it is pointed at the most underweight sleeve within five business days.",
];

export const GATES = [
  {
    id: "scale",
    name: "Scale",
    fail: "A five-percent sleeve on a small book is spread theatre. Size is the risk management.",
    pass: "Phase 2 at £10,000. Phase 3 at £50,000. Below the gate the answer is always not yet.",
  },
  {
    id: "role",
    name: "Regime role",
    fail: "A second gold wrapper is duplication. A single-country equity fund is a story unless it fills a documented factor hole.",
    pass: "Sterling linkers cover the same rooms as US TIPS with a different real-rate factor. EM local bonds add carry VWRP does not own.",
  },
  {
    id: "cost",
    name: "Cost and structure",
    fail: "TER above 0.25 needs an exceptional case. AUM under £500m is closure risk. Synthetic sleeves cap at 10%.",
    pass: "UCITS, London-listed, platform-tradeable. Distributing lines need a written reinvestment rule before they open.",
  },
  {
    id: "displace",
    name: "Displacement",
    fail: "Do not fund a new line by cutting cash-like under 5% or gold under 10%. Those floors are materiality.",
    pass: "Sterling linkers trim US TIPS 14→8–9. EM local bonds trim global IG 18→12–13. Total stays 100.",
  },
];

export const CANDIDATES: {
  id: string;
  name: string;
  phase: 2 | 3 | 0;
  fundedBy: string;
  target: string;
  gates: Record<"scale" | "role" | "cost" | "displace", boolean>;
  verdict: string;
}[] = [
  {
    id: "iwvl",
    name: "World value tilt",
    phase: 2,
    fundedBy: "Trim world equities 30 → 20",
    target: "10%",
    gates: { scale: true, role: true, cost: true, displace: true },
    verdict: "Phase 1 at £10,000. Highest-conviction data-supported upgrade. Same growth room, less cap-weight.",
  },
  {
    id: "seml",
    name: "EM local bonds",
    phase: 2,
    fundedBy: "Trim global IG 18 → 13",
    target: "5%",
    gates: { scale: true, role: true, cost: true, displace: true },
    verdict: "Ugly Sharpe, lowest drawdown in the candidate set. Correlation is the job.",
  },
  {
    id: "inxg",
    name: "UK linkers",
    phase: 0,
    fundedBy: "Would trim US TIPS",
    target: "—",
    gates: { scale: true, role: true, cost: true, displace: false },
    verdict: "Veto. Five-year wreck from gilt duration in 2022. Theory survives. This instrument does not, at current real yields.",
  },
  {
    id: "phau",
    name: "Second gold ETC",
    phase: 0,
    fundedBy: "Would cut the existing watchman",
    target: "—",
    gates: { scale: false, role: false, cost: true, displace: false },
    verdict: "Fails role. Gold already has a job. Two uniforms, one employee.",
  },
  {
    id: "theme",
    name: "Theme equity of the month",
    phase: 0,
    fundedBy: "Would cut the world engine",
    target: "—",
    gates: { scale: false, role: false, cost: false, displace: false },
    verdict: "Fails role and usually cost. A concentration wearing the word diversified.",
  },
];

export const MILESTONES: {
  band: string;
  focus: string;
  secondary: string;
  ignore: string;
  action: string;
}[] = [
  {
    band: "£0–£5k",
    focus: "Contribution date and amount. Fix both.",
    secondary: "Point every contribution at the most underweight sleeve.",
    ignore: "Daily P&L. Adding an eighth line.",
    action: "Do not sell to rebalance. Spreads eat the lesson.",
  },
  {
    band: "£5k",
    focus: "First structural review.",
    secondary: "Confirm the protocol is written. Confirm contributions land.",
    ignore: "Redesign temptation.",
    action: "Act only if a sleeve has drifted beyond ±3pp.",
  },
  {
    band: "£5k–£10k",
    focus: "Read the Seven Questions without acting on them.",
    secondary: "Build the cause-effect habit so Stage 4 is legible when it arrives.",
    ignore: "YTD versus a tracker. Raising commodities because they ran.",
    action: "16 Sep FOMC: update Q2 and Q3. Do not pre-position.",
  },
  {
    band: "£10k",
    focus: "Phase 2 gate.",
    secondary: "Sterling linkers and EM local bonds become eligible, not mandatory.",
    ignore: "Compromising gate criteria to hit a line-count.",
    action: "If the platform cannot list a passing instrument, stay at seven. Invictus Prime is a design lock, not a same-week 15-line rebuild.",
  },
  {
    band: "£10k–£20k",
    focus: "Regime discipline. Real return versus UK CPI.",
    secondary: "±3pp now matters in pounds. Drawdown protocol must already be filed.",
    ignore: "Short-term volatility as a redesign brief.",
    action: "First full rebalance cycle if Phase 2 lines exist.",
  },
  {
    band: "£20k–£50k",
    focus: "The crossover: returns start to rival contributions.",
    secondary: "Name the unhedged dollar block as a position. Track DXY weekly.",
    ignore: "Tactical tilts invented after a good quarter.",
    action: "If income rises, raise the contribution. That still beats a new sleeve.",
  },
  {
    band: "£50k",
    focus: "Phase 3 gate plus an explicit currency decision.",
    secondary: "Value tilt eligible. Document accept-or-hedge on the dollar block. Review annually.",
    ignore: "Celebrating the crossover by redesigning the book.",
    action: "Write the currency decision. Accidental USD is no longer small.",
  },
  {
    band: "£50k–£100k",
    focus: "Stay in the machine when a 15% drawdown is five figures.",
    secondary: "ISA allowance. Platform fee versus a fixed-fee venue.",
    ignore: "Overriding amber or red because it feels different this time.",
    action: "Follow the protocol exactly. Deviation at this scale is expensive.",
  },
  {
    band: "£100k",
    focus: "Full structural review.",
    secondary: "Real return versus a long All Weather history as a teaching benchmark, not a promise.",
    ignore: "Redesigning what is working.",
    action: "Re-test every line against the four gates. Update pound thresholds on yellow, amber, red.",
  },
];

export const RHYTHM: { when: string; action: string; decide: string }[] = [
  {
    when: "Every evening",
    action: "Answer the Seven Questions. File one fact. File one forward signal.",
    decide: "No. Read only.",
  },
  {
    when: "Every morning",
    action: "Check GT30, Brent, GTII10, DXY against watch levels.",
    decide: "Only if a watch level is crossed — and even then, usually note, do not trade.",
  },
  {
    when: "Monthly · contribution date",
    action: "Point new cash at the most underweight sleeve. Rebalance only if ±3pp remains.",
    decide: "Yes. Mechanical.",
  },
  {
    when: "16 Sep FOMC",
    action: "Update Q2 and Q3. Check whether a stage has actually confirmed.",
    decide: "Only if a transition is confirmed across three questions.",
  },
  {
    when: "Any session",
    action: "If the book is −8% from peak, open the drawdown page. Do not improvise.",
    decide: "Yes. Rules only.",
  },
];

export const FOMC: { path: string; then: string; act: string }[] = [
  {
    path: "Hike +25bp",
    then: "Long duration takes another mark hit. Gold faces real-yield pressure. Cash-like yield steps up. Commodities mixed.",
    act: "No rebalance unless drift exceeds 3pp.",
  },
  {
    path: "Hold, hawkish language",
    then: "Mostly what is already priced. Seven Questions unchanged.",
    act: "No action.",
  },
  {
    path: "Hold, dovish pivot",
    then: "Long end rallies. Gold rallies. First reason to review the six-percent residual.",
    act: "Watch. One dovish hold is not Stage 5. Need GT30 under 5.00 and PMI rolling over.",
  },
];

export const META =
  "Weight adjustments are the machine running. Instrument additions are the machine being upgraded. The machine runs on a monthly clock. Upgrades run on a multi-year clock, triggered by book size, not by a loud week. The most dangerous moment is a good year — when the working sleeves beg to be enlarged. The machine rebalances away from winners. That rule has to exist before the temptation.";
