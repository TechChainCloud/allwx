import { S3 } from "@/lib/season3";

export type JobId =
  | "shares"
  | "bonds"
  | "gold"
  | "tips"
  | "commodities"
  | "cash"
  | "long";

export type WeatherId = "goldilocks" | "reflation" | "stagflation" | "disinflation";

export type Job = {
  id: JobId;
  number: number;
  name: string;
  role: string;
  weight: number;
  paid: string;
  fined: string;
  principle: string;
  failure: string;
  color: string;
  blurb: string;
  forYoung: string;
  bbg: string;
};

export type Line = { who: "DESK" | "RATES"; text: string };

export type Episode = {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  audio: string;
  duration: number;
  jobIds: JobId[];
  weatherIds: WeatherId[];
  takeaways: string[];
  chapters: { t: number; label: string }[];
  transcript: Line[];
  season?: string;
  lockNote?: string;
};

export const SERIES = {
  title: "ALLWX",
  tagline: "All Weather Terminal",
  season: "S3 · LOCK",
  description:
    "A Bridgewater-inspired teaching terminal. Two-desk briefing. Four regimes. Seven classroom jobs. Prime II is the house lock. Education only — not the All Weather fund, not advice.",
};

export const JOBS: Job[] = [
  {
    id: "shares",
    number: 1,
    name: "World equities",
    role: "Growth engine",
    weight: 30,
    color: "#8be9fd",
    bbg: "MXWO / VWRP LN",
    paid: "Growth surprise up, expanding profits, falling discount rates",
    fined: "Recession, margin squeeze, violent rise in real yields",
    principle: "Hire residual claims to compound productivity. Do not hire them as insurance.",
    failure: "A long recession or a sharp rise in the discount rate. A bad decade is not a fired employee.",
    blurb:
      "A residual claim on thousands of firms. Everyone else gets paid first. The productivity clock showing up in a price. Prime II keeps the engine at 45: 38 cap-weight plus 7 value.",
    forYoung:
      "Future wages are already a growth asset. Stacking 100% listed equity on a cyclical labour market is how sequence risk arrives early.",
  },
  {
    id: "bonds",
    number: 2,
    name: "Global IG duration",
    role: "Stabiliser",
    weight: 18,
    color: "#6272a4",
    bbg: "LEGATRUH / VAGS LN",
    paid: "Growth undershoots, policy eases, curve bull-steepens",
    fined: "Inflationary yield rise; unhedged FX if not intended; credit that is secretly equity",
    principle: "A yield is a price. Duration is the transmission. Name it.",
    failure: "Treating a thirty-year and an overnight bill as the same 'bond'.",
    blurb:
      "A promise of currency, not a request that a company become more valuable. YAS for the mark. GC for the curve. Prime II replaces VAGS with FLOT by drift — carry, not convexity. Named.",
    forYoung:
      "A sterling-hedged IG book is a closer match to the classroom job than an accidental dollar trade dressed as defensive.",
  },
  {
    id: "gold",
    number: 3,
    name: "Gold",
    role: "Night watchman",
    weight: 15,
    color: "#ffb86c",
    bbg: "XAU / SGLN LN",
    paid: "Stress to paper promises, falling real yields, some geopolitics",
    fined: "Calm expansions with rising real yields",
    principle: "No coupon is the point. Absence of a promise is a different animal.",
    failure: "Judging the watchman by how bored he looks on a sunny Tuesday. Miners are not the metal.",
    blurb:
      "A scarce non-credit asset. A poor CPI switch. Useful when trust in paperwork wobbles or real yields fall.",
    forYoung:
      "Substituting miners because a wrapper will not list metal fires the watchman and hires a cyclical stock.",
  },
  {
    id: "tips",
    number: 4,
    name: "Linkers / TIPS",
    role: "Bodyguard",
    weight: 14,
    color: "#50fa7b",
    bbg: "GTII10 / ITPS LN",
    paid: "Inflation above what was priced, if you hold through real-rate noise",
    fined: "Rising real yields; inflation that was already in the breakeven",
    principle: "Principal is tied to an index. The mark is still a real-rate duration machine.",
    failure: "Treating last month's CPI as a scoreboard for a long-duration linker.",
    blurb:
      "Two prices live inside it: real yield and inflation accretion. USGGBE10 is the market's inflation forecast, not yours.",
    forYoung:
      "US TIPS and index-linked gilts are different bodyguards — different index, different currency. Hire on purpose.",
  },
  {
    id: "commodities",
    number: 5,
    name: "Broad commodities",
    role: "Shock absorber",
    weight: 10,
    color: "#ff5555",
    bbg: "BCOM / ICOM LN",
    paid: "Supply or demand shocks in real goods",
    fined: "Gluts, expensive roll, deep demand recessions",
    principle: "If the stuff everyone needs becomes the problem, own a little of the stuff.",
    failure: "Long quiet contango. Not a permanent return machine.",
    blurb:
      "A claim on inputs expressed through futures curves. Backwardation can pay. Contango can tax. Prime II keeps ICOM at 8. The derrick is energy equity — a different job.",
    forYoung:
      "A decade of contango can look dead while headlines sound dramatic. This sleeve is seasonal in a deeper sense than weather.",
  },
  {
    id: "cash",
    number: 6,
    name: "Cash-like",
    role: "Parking bay",
    weight: 7,
    color: "#bd93f9",
    bbg: "SOFR / CSH2 LN",
    paid: "Need for liquidity and rebalancing dry powder",
    fined: "Long stretches of inflation plus missed compounding",
    principle: "Stay available. Do not try to be a hero. BTMM for the front end.",
    failure: "Confusing the parking bay with the whole car park. Waiting for a date that is not on the calendar.",
    blurb:
      "Duration near zero. A call option on rebalancing. Emergency cash sits outside the mix. This sleeve funds the rebalance.",
    forYoung:
      "Waiting for a crash in cash is not conservative. The boiler is paid from a buffer. This sleeve rebalances the team.",
  },
  {
    id: "long",
    number: 7,
    name: "Long Treasuries",
    role: "Fire brigade",
    weight: 6,
    color: "#f8f8f2",
    bbg: "GT30 / IDTL LN",
    paid: "Deflationary growth crash, falling long yields",
    fined: "Inflationary or fiscal rise in long yields",
    principle: "Respond to one crisis shape, then stand down. They are not safe in every fire.",
    failure: "Using a six-percent sleeve as a sixty-percent blanket. Fiscal inflation is the wrong fire.",
    blurb:
      "Enormous duration. One crisis shape. Prime II starves IDTL of new cash and scores deflation C. Named. DUR_MID tells you the load.",
    forYoung:
      "A modest weight can still matter because duration is large. It is the wrong brigade for a supply-shock fire.",
  },
];

export const WEATHERS: {
  id: WeatherId;
  name: string;
  growth: "Rising" | "Falling";
  inflation: "Rising" | "Falling";
  paid: JobId[];
  fined: JobId[];
  copy: string;
  young: string;
  bbg: string;
}[] = [
  {
    id: "goldilocks",
    name: "Goldilocks",
    growth: "Rising",
    inflation: "Falling",
    paid: ["shares", "bonds"],
    fined: ["gold", "commodities"],
    bbg: "PMI>50 · BEI falling · 2s10s orderly",
    copy: "Earnings expand, discount rates ease. Equities look like genius. Gold looks unemployed. That feeling is the trap.",
    young: "This is the year the group chat is 100% tracker. Remember the jobs you will need when the sun leaves.",
  },
  {
    id: "reflation",
    name: "Reflation",
    growth: "Rising",
    inflation: "Rising",
    paid: ["shares", "commodities", "gold"],
    fined: ["long", "bonds"],
    bbg: "PMI>50 · BEI rising · curve bear-steep or flat",
    copy: "Earnings can still expand. Inputs get bid. Long nominal duration is a promise of units being marked down.",
    young: "A strong job market plus sticky prices. The 60/40 starts to argue with itself.",
  },
  {
    id: "stagflation",
    name: "Stagflation",
    growth: "Falling",
    inflation: "Rising",
    paid: ["gold", "commodities", "tips"],
    fined: ["shares", "bonds", "long"],
    bbg: "PMI<50 · BEI rising · stocks/bonds corr → 1",
    copy: "The exam 60/40 sat in 2022. Equities and nominal bonds can fall together. If you never hired the inflation team, no one is at home.",
    young: "Pay-rise lagging rent and the weekly shop. This is why the classroom mix is not 90% tracker.",
  },
  {
    id: "disinflation",
    name: "Disinflation",
    growth: "Falling",
    inflation: "Falling",
    paid: ["long", "bonds", "cash", "gold"],
    fined: ["shares", "commodities"],
    bbg: "PMI<50 · BEI falling · bull-steep after inversion",
    copy: "Demand destruction. High-quality duration can do enormous work. Commodities sleep. Cash is dry powder.",
    young: "Hiring freezes meet cheaper petrol. Human capital wobbles the same year listed wealth does.",
  },
];

export const PRINCIPLES = [
  "Start with what you own if you are wrong, not what will win.",
  "Three clocks: productivity, short-term debt, long-term debt. Locate every print on one of them.",
  "Growth and inflation can each surprise either way. Four rooms. No liquid asset owns all four.",
  "Hire jobs, not stories. If two lines are paid by the same surprise, one of them is costume.",
  "Duration is a tool and a risk. Name it. A thirty-year and an overnight bill are not the same word 'bond'.",
  "Gold is not CPI. Linkers are not gold. Commodities are not linkers. Cash is not duration.",
  "They are supposed to disagree. Score a sleeve against its contract. Do not fire the quiet employee.",
  "Three books became five. Classroom seven. Live fourteen. Prime I archived. Machine draft superseded. Prime II is the lock. Do not flatten the pad.",
  "2022 is the proof. Prime −5.24 versus S&P −18.64 and 60/40 −16. The inflation exam is the exam sixty-forty was not built for.",
  "2025 is the surprise. Gold, copper, goods carried a reflation year. Already staffed. Not predicted.",
  "At the 2008 trough the all-weather book had more pounds left. That is the behavioural architecture working.",
  "Gold floor is ten in the classroom. Prime II prints eight. Named. Do not move the floor because a pie looks finished.",
  "The derrick is not irrigation. WNRG is integrated energy equity. IOGP is 98% E&P. ICOM is the stuff. Three uniforms is a costume.",
  "The float is not the umbrella. FLOT is 1.67y carry. VAGS was 7–8y convexity. Firing duration because this cycle’s correlation is positive is a regime call.",
  "The long spring is hired for 2008. A negative three-year in a hiking cycle is the job working. Prime II starves it anyway and scores deflation C. Named.",
  "INXG is still probation. UK CPI is not US CPI. The five-year wreck is still the veto. Write a kill rule.",
  "Walk-back is two keys: PMI under 50 and 2s10s inverted. Tonight both are clear. Observe. Do not pre-position.",
  "IWVL absorbing VWRP is the only add that does not invent a line. Combined engine 45%. Phase 1 at £10k already named it.",
  "Hard cap, walk-back, core drift, satellite drift, 75/25 split, satellite collective 20%. Higher priority eats the cash.",
  "Contribution rate dominates allocation until the book is funded. Doubling £200 to £400 is ~2.5pp of return without rewriting the lock.",
  "Prime cannot honestly do 10–15% for 30 years. That path is a tracker, a tilt, or leverage a retail ISA cannot hold.",
  "DBMF is a gated candidate. T212 AutoInvest + fractional first. FLOT is listed-on-platform. Open gate is not an order.",
  "New lines enter at 1%. Recency is the enemy of the 3rd. Size is the risk management.",
  "A protocol written during a drawdown is a rationalisation. Write it first. Do not check the book between contribution dates.",
  "Pain + reflection = progress. Write the if-then. File it. That is the compounding that matters.",
  "Remember the jobs when the tickers change. Seventeen listed or seven. £200 on the 3rd. No hero trades.",
];

export const SEVEN_QUESTIONS = [
  {
    n: 1,
    q: "Where are we in the short-term debt cycle?",
    how: "2s10s (GC), credit spreads (FICM), PMI (ECO). Expanding, peaking, contracting, recovering.",
  },
  {
    n: 2,
    q: "What is the central bank doing, and why?",
    how: "WIRP / USSO / SONIA forwards. Hiking, pausing, cutting. The path, not the last print.",
  },
  {
    n: 3,
    q: "What is inflation doing relative to growth?",
    how: "Which of the four rooms. USGGBE10 versus PMI. Which sleeve is paid.",
  },
  {
    n: 4,
    q: "What is the curve telling me?",
    how: "GT2 vs GT10. Flattening, inverted, steepening. Bank lending 6–12 months out.",
  },
  {
    n: 5,
    q: "What is the dollar doing?",
    how: "DXY. Strong dollar is a headwind for unhedged world equities, gold, commodities.",
  },
  {
    n: 6,
    q: "What is priced that reality has not confirmed?",
    how: "The gap between forwards and the tape. That is where the machine pays or fines you.",
  },
  {
    n: 7,
    q: "What principle does today teach?",
    how: "One sentence. If-then. File it. Do not skip this.",
  },
];

export const STUDY = [
  {
    month: "M1",
    title: "The machine and four rooms",
    body: "Economic Machine until you can assign a print without checking. ECO, PMI, the regime grid. Episodes 1–2. Fridge lines 1–3.",
    play: ["the-machine", "four-rooms"],
  },
  {
    month: "M2",
    title: "Duration, real yield, 2022",
    body: "YAS. DUR_MID. GTII10. Walk 2022 as a table of who was paid. Prime −5.24 versus S&P −18.64 is the public exam. Episodes 3–4.",
    play: ["residual-claims", "duration-weapon"],
  },
  {
    month: "M3",
    title: "Three inflation animals",
    body: "Gold, linkers, commodities. They do not clock in on the same day. Classroom gold floor ten. Cap ICOM at ten. The derrick is not irrigation. Episodes 5 and 16.",
    play: ["three-animals", "the-derrick"],
  },
  {
    month: "M4",
    title: "Currency as a decision",
    body: "Sterling household, dollar duration, unhedged equities. VAGS was hedged on purpose. FLOT is a dollar floater. DXY is not decoration. Episode 6.",
    play: ["powder-and-brigade"],
  },
  {
    month: "M5",
    title: "One cycle, written out",
    body: "1970s, 2008, 2020, 2022, 2025, 9 Sep 2026 overlay. Paid/fined table. 2008 trough: more pounds left. That is behaviour, not a CAGR. Episode 11.",
    play: ["years-that-paid"],
  },
  {
    month: "M6",
    title: "A year you would have looked wrong",
    body: "Write the principle before you touch a weight. Insurance looks unemployed in goldilocks. That is the premium. Episode 9.",
    play: ["if-you-are-wrong"],
  },
  {
    month: "M7",
    title: "Two clocks and the six-priority stack",
    body: "Hard cap. Walk-back (two keys). Core drift ±3. Satellite drift ±1.5. 75/25 split. Satellite cap 20%. Do not invent a protocol in the pain. Episodes 7–8.",
    play: ["correlations-lie", "seven-questions"],
  },
  {
    month: "M8",
    title: "Five books, one lock",
    body: "Classroom seven. Live fourteen. Prime I archived. Machine draft superseded. Prime II stamped 16 Sep 08:23. Do not flatten T212. Episodes 13 and 15.",
    play: ["prime-sentences", "the-lock"],
  },
  {
    month: "M9",
    title: "The argument",
    body: "Tracker, 60/40, Sunny-Day, gold with no coupon, the decade All Weather lagged. DEBATE. Sunny-Day is a behavioural exam, not a TER exam. Episode 9.",
    play: ["if-you-are-wrong"],
  },
  {
    month: "M10",
    title: "Honest tape, the fan, the debit",
    body: "YTD gap versus a tracker is the insurance premium. LAB: flat £200, Case 4, Case 5. Doubling the debit is ~2.5pp. Prime cannot honestly do 10–15%. Episodes 10 and 12.",
    play: ["honest-numbers", "phases-and-floors"],
  },
  {
    month: "M11",
    title: "Universe and gates",
    body: "Five filters. Rank is a screen. IWVL absorbs. FLOT is a gate. WNRG enters at 1%. Recency is the enemy of the 3rd. Episodes 16–17.",
    play: ["the-derrick", "the-universe"],
  },
  {
    month: "M12",
    title: "Sit with the lock",
    body: "Do not check the book between contribution dates. Walk-back inactive tonight. File the if-then. 3 Oct is the action date. Episodes 18 and 14.",
    play: ["the-third", "full-lesson"],
  },
];

export const DRILLS: {
  id: string;
  headline: string;
  answer: WeatherId;
  why: string;
}[] = [
  {
    id: "pmi",
    headline:
      "Composite PMI 56. Earnings revisions up. Headline inflation still above the breakeven. Curve no longer inverted.",
    answer: "reflation",
    why: "Growth surprise up, inflation still sticky. Commodities and equities can coexist. Long nominal duration cannot.",
  },
  {
    id: "oil",
    headline:
      "Persistent energy shock. Real incomes squeezed. Companies miss on margins. Policy trapped between prices and jobs.",
    answer: "stagflation",
    why: "Growth down, inflation up. 60/40's two employees fall together. Gold, commodities, linkers still have a job.",
  },
  {
    id: "cuts",
    headline: "Unemployment jumps. Inflation undershoots. The central bank cuts hard. Long yields drop.",
    answer: "disinflation",
    why: "Demand destruction. Fire brigade and stabiliser are paid. Equities and many commodities are fined.",
  },
  {
    id: "soft",
    headline: "Growth holds. Inflation cools cleanly. Real yields ease a little. Credit spreads quiet.",
    answer: "goldilocks",
    why: "The sunny day. Equities look brilliant. The watchman looks unemployed. That is the brief working.",
  },
];

export const EPISODES: Episode[] = [
  {
    slug: "the-machine",
    code: "01",
    title: "The machine, not the forecast",
    subtitle: "Three forces. Four rooms. What you own if you are wrong.",
    audio: "/audio/ep01.mp3?v=8",
    duration: 163,
    jobIds: ["shares", "bonds", "gold", "tips", "commodities", "cash", "long"],
    weatherIds: ["goldilocks", "reflation", "stagflation", "disinflation"],
    takeaways: [
      "The best mix is not the one where everything wins at once.",
      "Productivity, short-term debt, long-term debt. Locate the print.",
      "Classroom weights are a teaching object. Jobs are the durable thing.",
    ],
    chapters: [
      { t: 0, label: "Wrong question" },
      { t: 33, label: "Three forces" },
      { t: 72, label: "Four rooms" },
      { t: 108, label: "The team" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode one. The machine, not the forecast. This is a teaching terminal inspired by Ray Dalio and Bridgewater. It is not their fund. It is not a tip." },
      { who: "RATES", text: "Most books are staffed to win a year. All Weather is staffed to survive the year that wins you. That is a different design problem." },
      { who: "DESK", text: "The useful move that travels from an institutional risk-parity book to a stocks and shares ISA is this. Stop asking what the economy will do next. Ask what you own if you are wrong." },
      { who: "RATES", text: "Three forces. Productivity growth. The slow rise in output per hour. That is why residual claims compound over decades. The short-term debt cycle. Credit expanding and contracting over five to eight years. The long-term debt cycle. Debt building until the old servicing method breaks." },
      { who: "DESK", text: "Every print sits on one of those clocks. Purchasing managers. Payrolls. Consumer prices. The two-year. The ten-year. The dollar. If you cannot name the clock, you are reading a story." },
      { who: "RATES", text: "Open Eco for the surprise versus consensus. Open G C for the curve. Those are instruments, not decoration." },
      { who: "DESK", text: "Inside the short cycle, two surprises do the work. Growth hotter or colder than priced. Inflation hotter or colder than priced. Two signs. Two directions. Four rooms." },
      { who: "RATES", text: "Goldilocks. Growth up, inflation down. Reflation. Both up. Stagflation. Growth down, inflation up. Disinflation. Both down. No liquid asset owns all four. That is the argument for a team." },
      { who: "DESK", text: "Classroom object. Thirty world equities. Eighteen global investment grade. Fifteen gold. Fourteen linkers. Ten broad commodities. Seven cash-like. Six very long Treasuries. The numbers are a teaching object. The job descriptions are the durable thing." },
      { who: "RATES", text: "If two lines are paid by the same surprise, you do not have two employees. You have one employee in two uniforms. That is how sixty-forty looks diversified on a pie chart and concentrated in a stagflation." },
      { who: "DESK", text: "They are supposed to disagree. Score a sleeve against its contract, not against the winner of the year. Rebalance. Write the principle. Pain plus reflection equals progress." },
      { who: "RATES", text: "Next: four rooms as a function, not a vibe. What do you own if you are wrong. That is the only question that matters on this desk." },
    ],
  },
  {
    slug: "four-rooms",
    code: "02",
    title: "Four rooms, three forces",
    subtitle: "Regime identification is a function, not a vibe.",
    audio: "/audio/ep02.mp3?v=8",
    duration: 142,
    jobIds: ["shares", "bonds", "gold", "commodities", "long"],
    weatherIds: ["goldilocks", "reflation", "stagflation", "disinflation"],
    takeaways: [
      "Prices move on surprises relative to what was already priced.",
      "Risk parity is a sentence about risk, not equal cash weights.",
      "Human capital is already a growth asset. That changes the listed mix.",
    ],
    chapters: [
      { t: 0, label: "Surprises" },
      { t: 35, label: "The grid" },
      { t: 99, label: "Risk, not cash" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode two. Four rooms, three forces. Regime identification is a function. Not a headline. Not a group chat." },
      { who: "RATES", text: "Prices move on surprises relative to what was already priced. That is finance in one sentence. A consumer-price print that matches the breakeven is not news. A print that does not, is." },
      { who: "DESK", text: "Open the ten-year breakeven. That is the market's inflation forecast. Not last month's newspaper. Three screens: Eco for growth and inflation surprises. G C for two-tens. Forward curves for what is priced that has not happened." },
      { who: "RATES", text: "Goldilocks. Growth up, inflation down. Earnings expand. Discount rates ease. Equities look like genius. Gold looks unemployed. That feeling is the sun. It is not a strategy." },
      { who: "DESK", text: "Reflation. Both up. Equities can still work. Commodities often work. Long nominal bonds usually do not. Sixty-forty starts to argue with itself. Classroom tape as we teach it: late expansion, reflation, with a stagflation tail." },
      { who: "RATES", text: "Stagflation. Growth down, inflation up. Twenty twenty-two. Parts of the nineteen-seventies. Equities and ordinary bonds can fall together. Correlations go to one. If you never hired gold, commodities and linkers, you have a good-weather household with an optimistic name." },
      { who: "DESK", text: "Disinflation. Both down. Demand destruction. High-quality duration can do enormous work. Equities hurt. Commodities sleep. Cash is powder for the rebalance. This is the room the fire brigade was hired for." },
      { who: "RATES", text: "All Weather is not equal cash in four buckets. Assets have different volatilities. Equal cash is not equal risk. The institutional version uses leverage so each stream speaks at similar volume. A retail ISA cannot copy that. Should not pretend to." },
      { who: "DESK", text: "The honest translation. Do not let one job shout the others down because it is louder per pound. That is why the classroom gives equities thirty, not sixty. Sixty is a growth-shock mix wearing a complete-house costume." },
      { who: "RATES", text: "If you are twenty-five to thirty-five, you already own a growth asset that does not sit in the pie. Future wages. When the listed engine is marked down twenty, the same weather often hits the bonus. Sequence risk arrives early." },
      { who: "DESK", text: "Principle. If two holdings are paid by the same surprise, you do not have two employees. Next: residual claims. A tracker is a job. It is not a religion." },
    ],
  },
  {
    slug: "residual-claims",
    code: "03",
    title: "Residual claims",
    subtitle: "The growth engine cannot be the whole firm.",
    audio: "/audio/ep03.mp3?v=8",
    duration: 112,
    jobIds: ["shares"],
    weatherIds: ["goldilocks", "reflation"],
    takeaways: [
      "A share is a residual claim. Everyone else gets paid first.",
      "100% listed equity stacks the same weather twice on human capital.",
      "Do not hire a theme by accident and keep calling it the market.",
    ],
    chapters: [
      { t: 0, label: "The slogan" },
      { t: 47, label: "Discount rates" },
      { t: 90, label: "Why not 100" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode three. Residual claims. The loudest advice on the internet is simple. Put it all in a global tracker and wait." },
      { who: "RATES", text: "There is a true sentence inside that slogan. Over long horizons, a diversified basket of residual claims has compounded because people found ways to produce more per hour. That is productivity. The first of the three forces." },
      { who: "DESK", text: "It is why the household hires a growth engine at all. In the classroom, world equities are thirty percent. Not one hundred. Not sixty. The job is not to be the whole firm. The job is to make the household richer when enterprise is being rewarded." },
      { who: "RATES", text: "A share is a residual claim. Lenders, landlords, staff, the tax authority. Everyone else gets paid first. What is left is a claim on the surplus. When the surplus is growing, that claim is a wonderful employee. When it is not, you find out what residual means." },
      { who: "DESK", text: "When yields rise, the discount rate on future earnings rises. Growth-style names, whose cash flows sit further out, get hit harder. That is duration in equity clothing. Price to earnings without the rate context is a poster, not an analysis." },
      { who: "RATES", text: "A world index is a claim on thousands of firms. A single theme fund about the story of the month is a concentration. Do not hire a theme by accident and keep calling it the market." },
      { who: "DESK", text: "Why not one hundred percent if you are young? Because your labour market is already a growth asset. When the listed engine is marked down twenty, the same weather often hits the wage. The insurance jobs exist so a bad year does not force you to sell the compounding engine." },
      { who: "RATES", text: "A retiree fears sequence risk because withdrawals lock in a low. A thirty-year-old fears a quieter version. Stopping the contributions. Firing gold because it lagged. Adding an eighth story. Same error. Different costume." },
      { who: "DESK", text: "Principle. Do not treat the growth engine as insurance. That is how people end up with a single-employee firm and call it a portfolio. Next: a yield is a price. Duration is a loaded weapon." },
    ],
  },
  {
    slug: "duration-weapon",
    code: "04",
    title: "Duration is a loaded weapon",
    subtitle: "YAS. GC. 2022 sat the exam 60/40 had not revised for.",
    audio: "/audio/ep04.mp3?v=8",
    duration: 109,
    jobIds: ["bonds", "long"],
    weatherIds: ["goldilocks", "disinflation", "stagflation"],
    takeaways: [
      "A thirty-year and an overnight bill are not the same defensive asset.",
      "2022: equities and ordinary bonds can fall together.",
      "Sterling-hedged IG is closer to the job than accidental dollar duration.",
    ],
    chapters: [
      { t: 0, label: "A yield is a price" },
      { t: 32, label: "YAS" },
      { t: 86, label: "The curve" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode four. Duration is a loaded weapon. A yield is a price. When it rises, the existing bond falls. When it falls, the bond rises. Everything that says bonds rallied is that sentence wearing a coat." },
      { who: "RATES", text: "Open Yas. Modified duration is the first-order sensitivity. Duration of eight: a one-point rise in yield knocks about eight percent off the price. Calling a thirty-year and an overnight bill both bonds is how households get surprised." },
      { who: "DESK", text: "The money-market screen is the front end. The thirty-year is the fire brigade. They are not colleagues. They are different animals. Employee two is global investment grade, about eighteen percent, often sterling-hedged in a UK wrapper. A high-quality bond is primarily asking the borrower to keep a promise." },
      { who: "RATES", text: "When growth undershoots and policy eases, existing paper reprices higher. That is the brief. The failure mode is unexpected inflation and the hiking cycle that follows. Twenty twenty-two was written in public. Equities down. Ordinary bonds down. Sixty-forty sat an exam it had not revised for." },
      { who: "DESK", text: "Open credit spreads. When they blow out, the bond you thought was a promise is quietly hiring a bit of the equity employee. Investment grade is not a single weather. It is a promise plus a little residual claim. Name the mix." },
      { who: "RATES", text: "The curve is a distributed forecast. Two-tens. Do not sell everything when the slope goes negative. Read it as a path. Then ask whether Eco agrees. Inversion has historically led recession with a lag. It is a probability, not a clock." },
      { who: "DESK", text: "World interest-rate probability. The market's map of the next meetings. Hiking, pausing, cutting. The path, not the last print. A sixty-forty is a reasonable object when growth shocks dominate and inflation shocks are rare." },
      { who: "RATES", text: "If your mix only works when inflation stays boring, you do not have an all-weather mix. Sterling household, dollar duration: decide, do not inherit. Currency is a decision. It is not decoration." },
      { who: "DESK", text: "Principle. Diversified high-quality nominal bonds keep the household steadier when growth undershoots and policy eases. Do not confuse this employee with the fire brigade. Next: three inflation animals people mash into one word." },
    ],
  },
  {
    slug: "three-animals",
    code: "05",
    title: "Three inflation animals",
    subtitle: "Gold, linkers, commodities. They do not clock in on the same day.",
    audio: "/audio/ep05.mp3?v=8",
    duration: 117,
    jobIds: ["gold", "tips", "commodities"],
    weatherIds: ["reflation", "stagflation"],
    takeaways: [
      "Gold is a poor inflation switch and a useful night watchman.",
      "TIPS can fall when real yields jump even as CPI is hot.",
      "Commodities are rolling futures, not a vault of barrels.",
    ],
    chapters: [
      { t: 0, label: "Not one hedge" },
      { t: 17, label: "Gold" },
      { t: 49, label: "Linkers" },
      { t: 85, label: "Curves" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode five. Three inflation animals. People say inflation hedge as if it were one creature. It is at least three. They do not clock in on the same day." },
      { who: "RATES", text: "Gold. Fifteen percent. It pays no wage. During long calm expansions with rising real yields, that looks like a disadvantage. The absence of a promise is also why it behaves differently. It is a poor consumer-price switch. It is a useful night watchman." },
      { who: "DESK", text: "Real yields falling. Paperwork wobbling. Some geopolitics. That is the watchman's weather. Miners are not gold. Substituting miners because a wrapper will not list metal fires the watchman and hires a cyclical stock." },
      { who: "RATES", text: "Linkers. Fourteen percent. Ordinary bonds promise currency. A linker promises currency contractually adjusted by an index, with a lag. Two prices live inside it. Real yield, and inflation accretion." },
      { who: "DESK", text: "If real yields jump, the mark-to-market can be ugly even as consumer prices print hot. Twenty twenty-two taught that in public. US tips and index-linked gilts are not the same bodyguard. Hire on purpose." },
      { who: "RATES", text: "Broad commodities. Ten percent. A claim on inputs, expressed through futures curves. When the stuff everyone needs becomes scarce, the same shock that hurts consumers and nominal bonds can lift the sleeve that owns the inputs." },
      { who: "DESK", text: "Backwardation can pay a roll yield. Contango can tax it. A demand boom is reflation. A supply shock with sick growth is closer to stagflation. Oil is not the index. A single metal is not the index." },
      { who: "RATES", text: "Principle. Gold is not consumer prices. Linkers are not gold. Commodities are not linkers. Mash them together and you will fire the wrong one. Next: dry powder, and a specialist hired for one crisis shape." },
    ],
  },
  {
    slug: "powder-and-brigade",
    code: "06",
    title: "Powder and the brigade",
    subtitle: "Cash is an option. Long duration is a specialist.",
    audio: "/audio/ep06.mp3?v=8",
    duration: 94,
    jobIds: ["cash", "long"],
    weatherIds: ["disinflation", "stagflation"],
    takeaways: [
      "Cash is a call on rebalancing, not a plan to wait for a date that is not on the calendar.",
      "Long Treasuries are safe for one crisis shape, not every crisis.",
      "A six-percent sleeve can still matter because duration is large.",
    ],
    chapters: [
      { t: 0, label: "BTMM" },
      { t: 51, label: "GT30" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode six. Powder and the brigade. Not every pound needs maximum drama. Employee six is cash-like. Seven percent. A money-market fund that actually is overnight. Duration near zero. A call option on rebalancing." },
      { who: "RATES", text: "Without powder, rebalancing is a theory you practise on paper. The failure mode is the quiet thief. Parking everything until a crash. Betting a date arrives before inflation and missed compounding have done their work. That date is not on the calendar." },
      { who: "DESK", text: "Emergency cash sits outside the mix. It pays the boiler. This sleeve rebalances the team. Stay available. Do not try to be a hero. Waiting for a crash in cash is not conservative. It is a forecast wearing a cautious coat." },
      { who: "RATES", text: "Employee seven is very long Treasuries. Six percent. Duration can be the better part of two decades. Look at modified duration. That is the load." },
      { who: "DESK", text: "In a classic demand-destruction recession this is one of the few liquid instruments that can pay a lot while equities are marked down. Two thousand and eight. Parts of two thousand and twenty. A modest weight can still matter because duration is large." },
      { who: "RATES", text: "It is the wrong brigade for a fiscal inflation fire. Or a supply-shock fire. Calling long Treasuries safe in every crisis is a category error. That is why the household also hires linkers, commodities and gold." },
      { who: "DESK", text: "Principle. Respond to a deflationary growth crash, then stand down when the fire is somewhere else. Next: the correlations that lie. Twenty twenty-two as a tutorial." },
    ],
  },
  {
    slug: "correlations-lie",
    code: "07",
    title: "Correlations that lie",
    subtitle: "Sample statistics are not laws of nature. 2022 was the tutorial.",
    audio: "/audio/ep07.mp3?v=8",
    duration: 95,
    jobIds: ["shares", "gold", "long", "commodities"],
    weatherIds: ["goldilocks", "reflation", "stagflation", "disinflation"],
    takeaways: [
      "Score the sleeve against the contract, not against the winner of the year.",
      "Equities and bonds can go to one in stagflation. That is why the inflation team exists.",
      "Rebalancing harvests disagreement. Skipping the meeting is how you become a one-employee firm again.",
    ],
    chapters: [
      { t: 0, label: "The hard part" },
      { t: 52, label: "When 60/40 dies" },
      { t: 103, label: "Rebalance" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode seven. Correlations that lie. The hard part is not the diagram. It is the year three employees look stupid." },
      { who: "RATES", text: "The psychologically hard part is not the diagram. It is the year in which three employees look stupid. In a sunny growth year, gold looks like a pet rock. In a recession, the growth engine looks like a saboteur." },
      { who: "DESK", text: "If you score each sleeve against the best of that year, you will fire the person you needed next. That is performance chasing. It has a respectable vocabulary. The better audit: when its weather arrived, did it do the job on the contract?" },
      { who: "RATES", text: "Correlations are sample statistics. They are not laws of nature. Equities and bonds can go to one in a stagflation. Gold and the dollar can rise together in a global scare. A model that treats last decade's matrix as next decade's physics will be punctual and wrong." },
      { who: "DESK", text: "Open the portfolio risk screen. It will show you the last ten years. It will not show you the next regime unless you stress it. That is what the case studies on this terminal are for. Sixty-forty. A hundred percent tracker. Permanent portfolio. Endowment cartoon. Golden butterfly. Sit each mix in each room. Watch who is at home." },
      { who: "RATES", text: "Twenty twenty-two was the tutorial written in public. Inflation surprise. Hiking cycle. Stocks and ordinary bonds down together. The sixty-forty had been trained on a growth-shock world. The inflation team — gold, commodities, linkers — was the set of jobs that still had a brief." },
      { who: "DESK", text: "Nineteen seventy-three, seventy-four. Oil shock. Stagflation. Two thousand and eight. Demand destruction. Duration and quality paid. The twenty-tens. Goldilocks for a sixty-forty. Gold looked unemployed. Different rooms. Different paid lists. Same machine." },
      { who: "RATES", text: "Rebalancing is how disagreement is harvested. Too frequent and you harvest noise. Too rare and the household silently becomes a one-employee firm again. Annual, or a band around each weight, is a common classroom answer. Pick one. Write it down. Keep the meeting." },
      { who: "DESK", text: "If you are twenty-five to thirty-five, the behavioural risk is not only selling the crash. It is adding an eighth theme fund because a story is loud. Do not replace gold with miners and keep the word gold. Do not replace a world index with last year's winner and keep the word diversified." },
      { who: "RATES", text: "The rule. Do not fire the quiet employee just because somebody else had a great year. Next: the seven questions. A morning operating system. The wrapper. The household that is larger than the pie." },
    ],
  },
  {
    slug: "seven-questions",
    code: "08",
    title: "The seven questions",
    subtitle: "A morning operating system. ISA, human capital, the fridge.",
    audio: "/audio/ep08.mp3?v=8",
    duration: 96,
    jobIds: ["shares", "bonds", "gold", "tips", "commodities", "cash", "long"],
    weatherIds: ["goldilocks", "reflation", "stagflation", "disinflation"],
    takeaways: [
      "The pie is not the whole balance sheet. Future wages are already a growth asset.",
      "Walk-back is two keys. Seven questions every session. Write the if-then.",
      "Weight changes monthly. New lines on a multi-year clock. Do not check the book between contribution dates.",
    ],
    chapters: [
      { t: 0, label: "Balance sheet" },
      { t: 40, label: "The wrapper" },
      { t: 87, label: "Seven questions" },
      { t: 141, label: "Fridge" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode eight. The seven questions. If you are twenty-five to thirty-five, the pie is not the whole balance sheet." },
      { who: "RATES", text: "If you are twenty-five to thirty-five, the pie is not the whole balance sheet. The whole balance sheet is your future wages, any student loan, rent or a mortgage, a cash buffer outside the market, a pension you barely look at, and then, if you are lucky, an ISA with room left in the allowance." },
      { who: "DESK", text: "The classroom weights — thirty, eighteen, fifteen, fourteen, ten, seven, six — are a teaching object. They are not sacred. Not optimal. Not personalised. A thirty-year-old with rising wages and a thirty-year-old without them are not the same household." },
      { who: "RATES", text: "Human capital is a growth asset. That is why this decade can often bear more listed equity than a retiree. It is also why you should not delete the insurance jobs. The wage does not pay out on the day the tracker is marked down twenty." },
      { who: "DESK", text: "A UK stocks-and-shares ISA is a tax wrapper, not an asset class. Eligibility restricts what may sit in it. Substitutions must be checked against the job. None of this is legal advice. Rules change. The wrapper is not the portfolio." },
      { who: "RATES", text: "Every session, before you touch a weight, run the seven questions. One. Where are we in the short-term debt cycle. Two-tens. Credit spreads. Purchasing managers. Expanding, peaking, contracting, recovering." },
      { who: "DESK", text: "Two. What is the central bank doing, and why. The path, not the last print. Three. Inflation versus growth. Which of the four rooms. Breakeven versus purchasing managers. Which sleeve is paid." },
      { who: "RATES", text: "Four. What is the curve telling me. Flattening, inverted, steepening. Bank lending six to twelve months out. Five. What is the dollar doing. A strong dollar is a headwind for unhedged world equities, gold, commodities. Decide the currency. Do not inherit it." },
      { who: "DESK", text: "Six. What is priced that reality has not confirmed. The gap between forwards and the tape. That is where the machine pays or fines you. Seven. What principle does today teach. One sentence. If-then. File it. Do not skip this." },
      { who: "RATES", text: "Pain plus reflection equals progress. Know what you do not know. Seek the most believable person who disagrees with you. Implementation: two funds with the same index name can be different products. If a fund dies, hire another that does the same job." },
      { who: "DESK", text: "No miners pretending to be gold. No eighth theme fund. Seven sleeves. Four rooms. Three forces. The forecast does not have to be perfect. The team does have to be complete." },
      { who: "RATES", text: "This terminal is for education only. A classroom weight is not a personal plan. Save the jobs. Tickers will move. ALLWX desk. Out." },
    ],
  },
  {
    slug: "if-you-are-wrong",
    code: "09",
    title: "If you are wrong",
    subtitle: "The defence. Why not a tracker. Why not 60/40. Why seven.",
    audio: "/audio/ep09.mp3?v=8",
    duration: 90,
    season: "S2",
    jobIds: ["shares", "bonds", "gold", "tips", "commodities"],
    weatherIds: ["goldilocks", "stagflation"],
    takeaways: [
      "A tracker is a goldilocks strategy wearing a long-term label.",
      "Sixty-forty never hired the inflation team. 2022 sat that exam in public.",
      "Sunny-Day is a behavioural exam. Diversification is streams, not ticker count.",
    ],
    chapters: [
      { t: 0, label: "The slogan" },
      { t: 32, label: "Two employees" },
      { t: 64, label: "Seven" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Season two. Episode nine. If you are wrong. A sceptic will ask why you did not just buy a world tracker and leave it." },
      { who: "RATES", text: "A world tracker is a single-regime bet. Paid in goldilocks. Paid in early reflation. Fined when equities and ordinary bonds fall together. Fined again in a demand crash. Thirty percent is the correct growth job. One hundred percent is a sunny-day religion." },
      { who: "DESK", text: "Why not sixty-forty. Because twenty twenty-two sat that exam in public. Both legs on the wrong side of an inflation shock. The classroom holds about thirty-nine percent in real assets to break that correlation. Gold, linkers, a commodity basket. Jobs sixty-forty never hired." },
      { who: "RATES", text: "Why seven lines, not twelve. Diversification is uncorrelated streams, not ticker count. An eighth line paid by the same surprise is costume. At a starter book, seven is the answer to spread and minimum size. Complexity is not coverage." },
      { who: "DESK", text: "Why an ISA. Because coupons, roll and gains compound gross inside the wrapper. That is structure. Not tax advice. Rules change. The wrapper is still the classroom's largest operational advantage for a sterling household." },
      { who: "RATES", text: "What if the regime reading is wrong. That is the design. Every transition still leaves someone at their desk. The real-asset block is not a token ten percent for a reason. Next: the honest numbers. The year the machine lagged a tracker, on purpose." },
    ],
  },
  {
    slug: "honest-numbers",
    code: "10",
    title: "Honest numbers",
    subtitle: "The 370 basis-point gap. Scale. What the framework is for.",
    audio: "/audio/ep10.mp3?v=8",
    duration: 80,
    season: "S2",
    jobIds: ["shares", "gold", "commodities", "long"],
    weatherIds: ["reflation", "goldilocks"],
    takeaways: [
      "Lagging a tracker in reflation is the insurance premium, not a bug.",
      "At a starter book, contribution direction is the only cheap rebalance.",
      "Doubling the debit is ~2.5pp of return without rewriting the lock.",
    ],
    chapters: [
      { t: 0, label: "The gap" },
      { t: 32, label: "Scale" },
      { t: 62, label: "Behaviour" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode ten. Honest numbers. This year the classroom lagged a single world tracker by about three hundred and seventy basis points. Say it without a costume." },
      { who: "RATES", text: "A world tracker printed a bit over twelve. The weighted seven-line mix printed about eight and a half. Residual claims were the paying job. The defensive block contributed almost nothing. Commodities carried part of the insurance. That is reflation arithmetic." },
      { who: "DESK", text: "Three-year gold in the wrapper is more than double. That sentence is the other half of the year. Insurance looks unemployed until the room changes. Twenty twenty-two was the room. Twenty twenty-four and twenty-five were not." },
      { who: "RATES", text: "The book in the brief is small. Most of the precision we taught — three-point drift, phase gates, currency overlays — cannot be applied cheaply at that size. New cash pointed at the thin sleeve is the rebalance. The rest is rehearsal." },
      { who: "DESK", text: "The comparison that matters is not this year's gap. It is whether a person who understands the jobs sells the growth engine twenty-five percent down. The data cannot answer that. The framework can. Stage four has not arrived yet. The test is still ahead." },
      { who: "RATES", text: "Set the contribution date. Read the seven questions. Do not act on them until scale and a real trigger arrive. Accept that the next year of this book should look boring. Next: the years that paid, and the year that cost twenty-four points of relative pride." },
    ],
  },
  {
    slug: "years-that-paid",
    code: "11",
    title: "Years that paid",
    subtitle: "2008, 2013, 2022, 2025. Sharpe versus cumulative pride.",
    audio: "/audio/ep11.mp3?v=8",
    duration: 73,
    season: "S2",
    jobIds: ["shares", "gold", "commodities", "long"],
    weatherIds: ["stagflation", "disinflation", "goldilocks"],
    takeaways: [
      "2008: classroom −3.9 versus equity −18.8. At the trough, more pounds left.",
      "2013 is the honest invoice for owning gold through goldilocks.",
      "2022 ETF Prime −5.24 is the proof. 2025 is the surprise. Cumulative gap is the premium.",
    ],
    chapters: [
      { t: 0, label: "2008" },
      { t: 28, label: "2013" },
      { t: 62, label: "The fan" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode eleven. Years that paid. Proxy backtest. Not the live share classes. World equities, sterling gold, a commodity total-return index, long Treasuries. Annual rebalance. Gaps in the tape. Treat it as a classroom, not an audit." },
      { who: "RATES", text: "Two thousand and eight. Classroom minus three point nine. Equity minus eighteen point eight. Gold paid in sterling. The fire brigade paid. Sixty-forty still lost eight. That fifteen-point gap is why the real-asset block exists." },
      { who: "DESK", text: "Two thousand and thirteen. Gold crashed twenty-eight in sterling. Commodities fell eleven. The classroom stayed just positive and finished twenty-four points behind a tracker. That is the invoice. Insurance looks stupid in a pure goldilocks with a simultaneous gold washout." },
      { who: "RATES", text: "Twenty twenty-two. Inflation shock. Commodities carried the architecture. Twenty twenty-five. Gold in sterling had its monster year. A fifteen-percent watchman moved the pie because its weather arrived. The machine won three years in the table. All of them were rooms a tracker does not own well." },
      { who: "DESK", text: "Twenty-year cumulative: tracker plus four hundred and twenty. Classroom plus one hundred and eighty-six. Higher Sharpe, smaller worst year, less compounding. Whether the premium was cheap depends on the next twenty years, not the last." },
      { who: "RATES", text: "A teaching fan. Seven hundred and ten start. Two hundred a month. Classroom mean and vol. Median near six figures at year twenty. Fifth percentile still above contributions. Double the monthly gift and you move the median more than any tilt. Next: phases, floors, and the instrument the data killed." },
    ],
  },
  {
    slug: "phases-and-floors",
    code: "12",
    title: "Phases and floors",
    subtitle: "IWVL at ten thousand. INXG vetoed. What never changes.",
    audio: "/audio/ep12.mp3?v=8",
    duration: 84,
    season: "S2",
    jobIds: ["shares", "bonds", "gold", "cash", "long"],
    weatherIds: ["reflation", "stagflation"],
    takeaways: [
      "Value tilt is the only data-supported upgrade at Phase 1. Book size opens lines.",
      "INXG is probation in Prime, vetoed in the classroom. Theory is not a ticker.",
      "Gold floor ten. Commodity cap ten. Fire brigade six until Stage 5 confirms.",
    ],
    chapters: [
      { t: 0, label: "Value" },
      { t: 35, label: "Veto" },
      { t: 70, label: "Floors" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode twelve. Phases and floors. Book size opens lines. Markets do not. Phase zero is seven jobs. Contribute. Do not decorate." },
      { who: "RATES", text: "Phase one, ten thousand. World value at ten, funded from the cap-weight engine. Five-year Sharpe better than the engine. Reflation with rising real yields is its weather. EM local bonds at five, funded from sterling-hedged investment grade. Ugly Sharpe. Lowest drawdown in the candidate set. Correlation is the job." },
      { who: "DESK", text: "UK linkers are vetoed. Five-year wreck. Fifty percent peak to trough. The gilt crisis plus extreme duration destroyed the instrument that sounded like the right sterling inflation hedge. Theory survives. This ticker does not, at current real yields. Do not add it to look complete." },
      { who: "RATES", text: "Phase two, fifty thousand. A small minimum-volatility sleeve inside equities is a buffer, not a new room. Cash-like steps up so the bay can fund a rebalance in pounds. Write the dollar decision. Eighty percent unhedged is no longer an accident." },
      { who: "DESK", text: "Three floors that do not move. Gold stays at fifteen and never below ten. Commodities hard-capped at ten because the wrapper is synthetic. Long Treasuries stay six until Stage four or five confirms. Scale does not rewrite a regime residual." },
      { who: "RATES", text: "After a hundred thousand there are no new lines. The bay grows. The protocol is denominated in pounds. Contribution and not overriding amber are the whole remaining craft. ALLWX desk. Out." },
    ],
  },
  {
    slug: "prime-sentences",
    code: "13",
    title: "Fifteen sentences — Prime I archive",
    subtitle: "The 7 Sep lock. Two sterling tickets. Archived the morning Prime II stamped.",
    audio: "/audio/ep13.mp3?v=8",
    duration: 108,
    season: "S2",
    lockNote:
      "Prime I is archived. Prime II is the house lock — 16 Sep 08:23. Seventeen listed. Hear EP 15.",
    jobIds: ["shares", "bonds", "gold", "tips", "commodities", "cash", "long"],
    weatherIds: ["reflation", "stagflation", "disinflation"],
    takeaways: [
      "This tape is Prime I, 7 Sep. The live ISA was fourteen. That pad is still fourteen.",
      "INXG was hired on probation. Gold 9.6 was a named floor breach. Those sentences still teach.",
      "Hear EP 15 for the lock that replaced this one. Complexity is still not a return.",
    ],
    chapters: [
      { t: 0, label: "Prime" },
      { t: 40, label: "Two tickets" },
      { t: 80, label: "Chart" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Episode thirteen. Fifteen sentences. Invictus Prime is a design lock. It is not tonight's ticket pad. Classroom seven still teaches the rooms. The live sterling book is still fourteen lines. Weights only. No sterling total on this desk." },
      { who: "RATES", text: "Prime adds two sterling rates tickets. Short gilts as the ladder rung between cash and the aggregate. UK linkers as a CPI contract TIPS cannot write. It drops the managed-futures alt. That is a different animal, not a fifth weather." },
      { who: "DESK", text: "INXG is the argument. Twenty twenty-two sterling inflation ran hotter than the US print. That is the job. The five-year wreck and a fifty percent drawdown are the veto. Prime sizes it at three point eight so a second gilt crisis cannot own the household. Probation. Written kill rule. Not a cleared gate." },
      { who: "RATES", text: "Gold prints nine point six. The classroom floor is ten. Name the breach. Do not move the floor because a pie looks finished." },
      { who: "DESK", text: "Satellites stay six tickets and twelve percent. Defence, chips, copper miners, industrials, healthcare, uranium. Residual claims in costume. A fifty percent wipe in the sleeve is painful. It is not structural." },
      { who: "RATES", text: "Twenty-year proxy. Prime one hundred pounds becomes three three nine. One-Pie becomes three five three. Sixty-forty wins the sunny chart and fails the inflation exam. Complexity is not a return. The year that paid the whole machine was twenty twenty-five — gold, goods, the engine, the themes. Already staffed. Not predicted." },
      { who: "DESK", text: "Do not rebuild the live book this week. Third of October still routes the book you actually hold. Fifteen lines or seven. Contribution on a date. Walk-back. No hero trades. ALLWX desk. Out." },
    ],
  },
  {
    slug: "full-lesson",
    code: "14",
    title: "The full lesson",
    subtitle: "Four rooms. Seven jobs. Three books. One rule. Atlas and Rigel, start to finish.",
    audio: "/audio/full-lesson.mp3?v=1",
    duration: 689,
    season: "S2",
    jobIds: ["shares", "bonds", "gold", "tips", "commodities", "cash", "long"],
    weatherIds: ["goldilocks", "reflation", "stagflation", "disinflation"],
    takeaways: [
      "What you own if you are wrong is the only design question.",
      "Classroom seven, live fourteen, Prime I fifteen, Prime II seventeen listed — do not confuse the books.",
      "Six-priority stack. Walk-back inactive. £200 on the 3rd. Hear EP 15–18 for the lock.",
    ],
    lockNote:
      "Recorded against Prime I. The lock is now Prime II. The rooms and jobs did not change. The pad did not move.",
    chapters: [
      { t: 0, label: "Open" },
      { t: 90, label: "Rooms" },
      { t: 180, label: "Seven jobs" },
      { t: 360, label: "Books" },
      { t: 480, label: "Rules" },
      { t: 600, label: "Fridge" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. This is the full lesson. Not a forecast. Not Bridgewater Associates. Not the All Weather fund." },
      { who: "RATES", text: "The useful question is not what the economy will do next. It is what you own if you are wrong." },
      { who: "DESK", text: "Four rooms. Seven classroom jobs. Three books that must not be confused. Contributions on a date. Walk-back. No hero trades." },
      { who: "RATES", text: "Fifteen lines or seven. The cycle continues. That is the only forecast with a clean hit rate." },
      { who: "DESK", text: "ALLWX desk. Out." },
    ],
  },
  ...S3,
  {
    slug: "seven-jobs",
    code: "00",
    title: "Seven jobs — original lecture",
    subtitle: "The first teaching tape. Diversification by economic driver.",
    audio: "/audio/seven-jobs.mp3",
    duration: 817,
    season: "S0",
    jobIds: ["shares", "bonds", "gold", "tips", "commodities", "cash", "long"],
    weatherIds: ["goldilocks", "reflation", "stagflation", "disinflation"],
    takeaways: [
      "Hire jobs, not stories. Four rooms. Seven sleeves.",
      "The original lecture is the spine. The terminal is the workbook.",
      "Education only. Not the fund. Not a personal plan.",
    ],
    chapters: [
      { t: 0, label: "Open" },
      { t: 180, label: "Rooms" },
      { t: 420, label: "Jobs" },
      { t: 660, label: "Close" },
    ],
    transcript: [
      { who: "DESK", text: "ALLWX desk. Original lecture. Seven jobs. Diversification by economic driver. This is the first tape the classroom was built from." },
      { who: "RATES", text: "Press LEARN when you want the machine. This file is the spoken paper." },
    ],
  },
];

export function jobById(id: JobId) {
  return JOBS.find((j) => j.id === id)!;
}

export function episodeBySlug(slug: string) {
  return EPISODES.find((e) => e.slug === slug);
}

export function nextEpisode(slug: string) {
  const i = EPISODES.findIndex((e) => e.slug === slug);
  return i >= 0 ? EPISODES[i + 1] : undefined;
}

export function prevEpisode(slug: string) {
  const i = EPISODES.findIndex((e) => e.slug === slug);
  return i > 0 ? EPISODES[i - 1] : undefined;
}

export function episodesBySeason(season: string) {
  return EPISODES.filter((e) => (e.season ?? "S1") === season);
}

export const SEASONS = [
  { id: "S0", label: "S0 · LECTURE", hint: "The original seven-jobs tape" },
  { id: "S1", label: "S1 · CLASSROOM", hint: "The seven jobs and the four rooms" },
  { id: "S2", label: "S2 · HOUSE", hint: "Numbers, Prime I archive, the full lesson" },
  { id: "S3", label: "S3 · LOCK", hint: "Prime II, the derrick, the universe, the third" },
] as const;

export const TOTAL_DURATION = EPISODES.reduce((a, e) => a + e.duration, 0);
