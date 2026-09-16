/** Unified Invictus knowledge graph. Education only. */

export type BookId = "classroom" | "live" | "prime" | "draft" | "prime2";

export const BOOKS: {
  id: BookId;
  name: string;
  lines: number;
  asof: string;
  job: string;
  href: string;
}[] = [
  { id: "classroom", name: "Classroom seven", lines: 7, asof: "Always", job: "Teaches the four rooms.", href: "/jobs" },
  { id: "live", name: "Live ISA", lines: 17, asof: "T212 · 09:46 · weights only", job: "The pad is the lock.", href: "/house" },
  { id: "prime", name: "Invictus Prime I", lines: 15, asof: "7 Sep · archived", job: "Predecessor lock.", href: "/house" },
  { id: "draft", name: "Machine draft", lines: 16, asof: "12 Sep · superseded", job: "45% engine teaching pie.", href: "/learn/machine" },
  { id: "prime2", name: "Prime II", lines: 17, asof: "16 Sep 09:46 · LIVE=LOCK", job: "House lock. IGLN barn. WisdomTree copper.", href: "/learn/prime2" },
];

export type TickerEntry = {
  ticker: string;
  name: string;
  job: string;
  farm: string;
  classroom?: number;
  live?: number;
  prime?: number;
  draft?: number;
  y2022: string;
  rooms: string;
  lesson: string;
};

export const TICKERS: TickerEntry[] = [
  { ticker: "VWRP", name: "FTSE All-World Acc", job: "Growth engine. Residual claims on productivity.", farm: "Wheat", classroom: 30, live: 25, prime: 23.8, draft: 45, y2022: "−8.4%", rooms: "Earn goldilocks/reflation. Suffer stagflation/disinflation.", lesson: "Sized as the engine, not a forecast. Look-through equity is the drawdown you actually own." },
  { ticker: "VAGS", name: "Global Agg GBP-hedged", job: "Nominal quality duration. The umbrella.", farm: "Greenhouse", classroom: 18, live: 15, prime: 13.5, draft: 12, y2022: "Ugly. Job working.", rooms: "Earn disinflation. Suffer reflation/stagflation.", lesson: "Sterling-hedged on purpose. Ugly Sharpe through the worst bond market in 40 years is the brief." },
  { ticker: "ITPS", name: "US TIPS", job: "US CPI contract. Rent-review clause.", farm: "Rent review", classroom: 14, live: 10, prime: 12.5, draft: 8, y2022: "Can fall when real yields jump.", rooms: "Earn stagflation/reflation if real yields do not outrun the index.", lesson: "Linkers are not gold. Can print red in a hot CPI year." },
  { ticker: "SGLN", name: "Physical gold ETC (Invesco)", job: "Night watchman. Not the live wrapper.", farm: "Barn", classroom: 15, live: 0, prime: 0, y2022: "+12.6%", rooms: "Earn stagflation.", lesson: "Live barn is IGLN. Same metal. Do not hold both." },
  { ticker: "IGLN", name: "iShares Physical Gold", job: "Night watchman. Live barn.", farm: "Barn", live: 8, prime: 8, y2022: "Same metal as SGLN.", rooms: "Earn stagflation. Mixed elsewhere.", lesson: "Classroom floor 10. Lock 8 named. Wrapper is iShares, not Invesco." },
  { ticker: "ICOM", name: "Broad commodities", job: "Goods inflation. Paid in both current boxes.", farm: "Irrigation", classroom: 10, live: 8, prime: 9.6, draft: 8, y2022: "+26.6%", rooms: "Earn reflation and stagflation. Sleep in disinflation.", lesson: "$100 Brent is a tailwind, not a cap rewrite. Synthetic wrapper. Cap still applies." },
  { ticker: "CSH2", name: "Overnight GBP", job: "Powder. Walk-back reserve.", farm: "Tin under the bed", classroom: 7, live: 7, prime: 6.5, y2022: "Carry, not a hero.", rooms: "Always available. Never the compounding engine.", lesson: "Live pad uses CSH2. Draft uses XSTR. Same job." },
  { ticker: "XSTR", name: "Overnight sterling (draft)", job: "Walk-back reserve in the machine draft.", farm: "Tin under the bed", draft: 6, y2022: "Carry.", rooms: "Same as CSH2.", lesson: "Do not confuse wrappers. The job is duration near zero." },
  { ticker: "IDTL", name: "US Treasury 20+", job: "Fire brigade. Cut-cycle stub.", farm: "Greenhouse spring", classroom: 6, live: 5, prime: 5.3, draft: 4, y2022: "Taxed. Penalty box.", rooms: "Earn classic demand crash. Wrong brigade for fiscal inflation.", lesson: "Green light GT30 5.00. Duration hit 5.40. Do not sell because a buyback missed." },
  { ticker: "IGLS", name: "UK gilts 1–5yr", job: "Short-gilt rung between cash and the aggregate.", farm: "Short greenhouse", prime: 2.8, draft: 4, y2022: "Duration limited the damage.", rooms: "Carry when the front end is high. Mild headwind when yields jump.", lesson: "Prime ticket. Live pad does not hold it yet. Scale gate, not a weekend add." },
  { ticker: "INXG", name: "UK index-linked gilts", job: "UK RPI contract TIPS cannot write.", farm: "London rent review", prime: 3.8, draft: 3, y2022: "Gilt crisis wreck. 50% peak-to-trough in the five-year.", rooms: "UK inflation, not US CPI.", lesson: "Probation. Written kill rule. Classroom still vetoes. Sized so a second gilt crisis cannot own the book." },
  { ticker: "DBMF", name: "Managed futures", job: "Trend follower. Transition weather.", farm: "Farmer reading the sky", draft: 4, y2022: "Would have been paid. Not in the live pad.", rooms: "Earns sustained moves either way.", lesson: "Gated on T212 AutoInvest + fractional. Then VAGS 13.5 → 10.5. Not a sixteenth lock before the gate." },
  { ticker: "DBMG", name: "Alt sleeve (live)", job: "Live-pad alt. Different animal from DBMF.", farm: "Costume until the gate opens", live: 6, y2022: "n/a", rooms: "Not a fifth weather.", lesson: "Do not treat the live alt as the managed-futures job." },
  { ticker: "DFNS", name: "Global defence", job: "Geopolitical premium. Government payee.", farm: "Tax collector", live: 3, prime: 2.9, draft: 3, y2022: "n/a", rooms: "Earn reflation/stagflation geopolitics. Suffer peace + growth crash.", lesson: "Satellite. Cap 5%. Thesis is contracts, not a war bet." },
  { ticker: "SMGB", name: "Semiconductors", job: "Picks and shovels of the digital economy.", farm: "The pick factory", live: 2, prime: 2.6, draft: 2.5, y2022: "−27%", rooms: "Earn goldilocks/reflation. Suffer both down rooms.", lesson: "Size is the risk management. A −30% year at 2.5% is 75bp." },
  { ticker: "XDWI", name: "World industrials", job: "Cycle sleeve. Rate and energy sensitive.", farm: "The workshop", live: 2, prime: 2.1, draft: 2, y2022: "Hurt with equities.", rooms: "Earn expansion. Suffer rate/oil shocks.", lesson: "Already rhymes with VWRP. Cap 4–5%." },
  { ticker: "XDWH", name: "World healthcare", job: "Defensive residual claims.", farm: "The clinic", live: 3, prime: 1.8, draft: 2, y2022: "Less bad than cyclicals.", rooms: "Defensive equity. Still equity.", lesson: "Not a linker. Not gold. Still a residual claim." },
  { ticker: "COPA", name: "WisdomTree Copper", job: "Copper metal ETC. Live wrapper.", farm: "The pipe", live: 2, prime: 2, y2022: "Mixed.", rooms: "Earn reflation.", lesson: "Metal, not miners. Not COPG. One copper line." },
  { ticker: "COPG", name: "Copper (live wrapper)", job: "Live-pad copper line.", farm: "The pipe", live: 3, y2022: "n/a", rooms: "Same job as COPA.", lesson: "One copper wrapper. Confirm before 3 Oct." },
  { ticker: "URNG", name: "Uranium / nuclear", job: "Fuel story. Tiny on purpose.", farm: "The fuel shed", live: 1, prime: 1.1, draft: 1, y2022: "n/a", rooms: "Thematic. Not a weather room.", lesson: "Easy to romanticise. Cap 2%. A wipe is painful, not structural." },
  { ticker: "TIP5", name: "Short TIPS (draft)", job: "Inflation proof without the duration.", farm: "Short rent review", draft: 4, y2022: "+9% class of short TIPS.", rooms: "Inflation without long real-yield tax.", lesson: "Draft line. Not in Prime lock." },
  { ticker: "NUCL", name: "Nuclear (draft alias)", job: "Same family as URNG in some drafts.", farm: "Fuel shed", y2022: "n/a", rooms: "Thematic.", lesson: "Do not double-count with URNG." },
  { ticker: "XAIX", name: "AI/quality (draft)", job: "Rejected as a 17th personality unless it replaces a line.", farm: "Costume", y2022: "n/a", rooms: "Equity concentration.", lesson: "Permanently dead as an add-on. Complexity is not coverage." },
  { ticker: "WNRG", name: "MSCI World Energy", job: "The Derrick. Integrated energy equity.", farm: "Derrick", y2022: "Energy crash year for E&P.", rooms: "Earn stagflation/reflation oil. Suffer 2020-style demand crash.", lesson: "Not ICOM. Not IOGP. Prime II proposes 3%. Unsigned. Recency is loud." },
  { ticker: "IOGP", name: "Oil & Gas E&P", job: "Pure upstream. 98% E&P.", farm: "The well", y2022: "High beta to oil.", rooms: "Wins a $120 oil weather. Loses when oil chops.", lesson: "Watch list. Holding with WNRG is a 17th line." },
  { ticker: "IWVL", name: "MSCI World Value", job: "Value factor tilt. Absorbs VWRP.", farm: "Sharpened wheat", y2022: "Value often less bad than growth when yields jump.", rooms: "High-rate reflation/stagflation.", lesson: "Only Prime II add that does not invent a line. Phase 1 at £10k." },
  { ticker: "FLOT", name: "USD Floating Rate Bond", job: "Carry without 7–8y convexity.", farm: "The float", y2022: "+13.9% GBP was mostly FX, not carry.", rooms: "Earns short-rate income. Does not pay a 2008 duration spike.", lesson: "Proposed VAGS replacement. Gate £3k. Different job from the umbrella." },
  { ticker: "USFR", name: "USD Float Treasury", job: "Govt-grade floater. FLOT fallback.", farm: "Treasury float", y2022: "Near-zero duration.", rooms: "Cash-like.", lesson: "Only if FLOT is not on T212." },
  { ticker: "IEEM", name: "MSCI Emerging Markets", job: "EM tilt. VWRP already holds EM.", farm: "The frontier", y2022: "EM beta.", rooms: "Reflation.", lesson: "A second new line. Costume unless it replaces." },
];

export type YearLesson = {
  year: string;
  title: string;
  room: string;
  paid: string;
  fined: string;
  numbers: string;
  lesson: string;
};

export const YEARS: YearLesson[] = [
  {
    year: "2008",
    title: "Demand crash",
    room: "Disinflation",
    paid: "Gold, long Treasuries, quality duration",
    fined: "Equities, credit, many commodities",
    numbers: "Classroom ≈ −3.9 vs equity −18.8. At the DCA trough, all-weather held more pounds left.",
    lesson: "This is why the mix exists — so a rational person keeps contributing. Behaviour, not a CAGR.",
  },
  {
    year: "2013",
    title: "Goldilocks invoice",
    room: "Goldilocks",
    paid: "Equities, the tracker",
    fined: "Gold −28 sterling, commodities −11",
    numbers: "Classroom still positive, ~24 points behind a tracker.",
    lesson: "Insurance looks unemployed in a sunny year. That is the premium. Do not fire the watchman.",
  },
  {
    year: "2020",
    title: "Crash then flood",
    room: "Disinflation then reflation",
    paid: "Duration, gold, then residual claims",
    fined: "Anyone who sold March",
    numbers: "Policy to the floor. Fire brigade paid. Then the engine recovered.",
    lesson: "Sequence risk is selling the engine. The bay exists so you do not have to.",
  },
  {
    year: "2022",
    title: "Inflation exam",
    room: "Stagflation",
    paid: "Commodities, gold, some short TIPS",
    fined: "Equities and ordinary bonds together. 60/40 sat an exam it had not revised for.",
    numbers: "Prime −5.24 vs S&P −18.64, XLK −27.73, 60/40 −16. ICOM +26.6, SGLN +12.6.",
    lesson: "The proof of concept. Correlations went to one. The inflation team was the brief.",
  },
  {
    year: "2025",
    title: "Surprise year",
    room: "Reflation with a gold bid",
    paid: "Gold, copper, goods, the engine, themes",
    fined: "Anyone who had fired the watchman in 2013",
    numbers: "Prime +13.18, within ~5pp of the S&P. Gold’s sterling monster year.",
    lesson: "Already staffed. Not predicted. A fifteen-percent watchman can still move the pie.",
  },
  {
    year: "2026 YTD",
    title: "Overlay weather",
    room: "Reflation primary · stagflation co-primary from 9 Sep",
    paid: "ICOM on Brent $100.95. Gold mixed (crisis bid vs real-yield tax).",
    fined: "Duration (IDTL penalty box). Equities on the oil/yield shock. Satellites on risk-off.",
    numbers: "9 Sep 17:35: ICOM +0.84 only green Invictus line. Walk-back OFF. PMI 54.6. 2s10s +38bp.",
    lesson: "Under-earning is the view, not a failure. House holds. Next cash 3 Oct. Do not enlarge ICOM on a session.",
  },
];

export type KnowledgeCard = {
  id: string;
  group: string;
  title: string;
  body: string;
  href: string;
  label: string;
};

export const KNOWLEDGE: KnowledgeCard[] = [
  { id: "rooms", group: "Machine", title: "Four rooms", body: "Growth × inflation. Goldilocks, reflation, stagflation, disinflation. No liquid asset owns all four.", href: "/learn/machine", label: "PRESS THE MACHINE" },
  { id: "farmer", group: "Machine", title: "The farmer", body: "Wheat, greenhouse, irrigation, barn. He does not know the weather. He must not lose the farm.", href: "/learn", label: "OPEN HUB" },
  { id: "jobs7", group: "Machine", title: "Seven classroom jobs", body: "30 / 18 / 15 / 14 / 10 / 7 / 6. Teaching object. Hire jobs, not stories.", href: "/jobs", label: "OPEN SLEEVES" },
  { id: "walk", group: "Protocol", title: "Walk-back", body: "PMI < 50 AND 2s10s inverted. Both keys. Then cash to core. Satellites get zero.", href: "/learn/decide", label: "OPEN DECIDE" },
  { id: "lock", group: "Protocol", title: "Lock file", body: "The only document that authorises AutoInvest. Decision date first. Change the next calendar day.", href: "/learn/lock", label: "OPEN LOCK" },
  { id: "route", group: "Protocol", title: "Contribution routing", body: "No sales inside the ISA. The 3rd fills floors, skips caps, then underweights.", href: "/learn/machine", label: "ROUTE A POUND" },
  { id: "hier", group: "Protocol", title: "Six-priority stack", body: "Hard cap. Walk-back. Core drift ±3. Satellite drift ±1.5. 75/25 split. Satellite cap 20%.", href: "/rules", label: "OPEN RULES" },
  { id: "books", group: "Books", title: "Four books", body: "Classroom seven. Live fourteen. Prime fifteen. Machine draft sixteen. Do not flatten them.", href: "/learn/compare", label: "COMPARE" },
  { id: "prime", group: "Books", title: "Invictus Prime I", body: "Archived 15-line lock, 7 Sep 23:08. IGLS + INXG on probation. Predecessor, not tonight’s pad.", href: "/house", label: "OPEN HOUSE" },
  { id: "debit", group: "Path", title: "The debit is the lever", body: "Until funded, doubling £200 to £400 is ~2.5pp of return without rewriting the lock.", href: "/learn/path", label: "OPEN PATH" },
  { id: "cagr", group: "Path", title: "Cannot do 10–15%", body: "That path is a tracker, a tilt, or leverage a retail ISA cannot hold. Plan around 5%. Work from 7.5%.", href: "/learn/path", label: "OPEN PATH" },
  { id: "2022", group: "Years", title: "2022 proof", body: "Inflation exam. Prime −5.24 vs S&P −18.64. Commodities and gold were the brief.", href: "/learn/years", label: "OPEN YEARS" },
  { id: "2008", group: "Years", title: "2008 trough", body: "More pounds left than 100% equity. That is the behavioural architecture working.", href: "/learn/years", label: "OPEN YEARS" },
  { id: "tape", group: "Tape", title: "Nine September close", body: "Brent $100.95. Overlay co-primary. IDTL penalty box. ICOM the only green line. House holds.", href: "/tape", label: "OPEN TAPE" },
  { id: "dbmf", group: "Gates", title: "DBMF gate", body: "T212 AutoInvest + fractional first. Then VAGS 13.5 → 10.5. Not a lock-file edit.", href: "/learn/decide", label: "OPEN DECIDE" },
  { id: "inxg", group: "Gates", title: "INXG probation", body: "UK RPI is not US CPI. Five-year wreck. Sized at 3.8. Written kill rule.", href: "/learn/atlas", label: "OPEN ATLAS" },
  { id: "gold", group: "Gates", title: "Gold floor", body: "Classroom 10. Prime 9.6. Name the breach. Do not move the floor because a pie looks finished.", href: "/learn/atlas", label: "OPEN ATLAS" },
  { id: "dead", group: "Gates", title: "Permanently dead", body: "D-Prime arithmetic, sector bets, FLOT-as-carry, 8% as a plan, a 17th personality.", href: "/learn/decide", label: "OPEN DECIDE" },
  { id: "listen", group: "Voice", title: "Two-desk series", body: "Atlas and Rigel. Seasons 0–3. Prime II lock on 15–18.", href: "/listen", label: "LISTEN" },
  { id: "study", group: "Spine", title: "Twelve-month spine", body: "Mechanisms before decoration. M1 rooms through M12 sit with the lock.", href: "/study", label: "OPEN STUDY" },
  { id: "p2", group: "Books", title: "Invictus Prime II", body: "House lock. WNRG, IWVL, FLOT in. VAGS, IDTL starved. 17 listed. Pad still 14 until 17 Sep / 3 Oct.", href: "/learn/prime2", label: "OPEN PRIME II" },
  { id: "univ", group: "Screen", title: "Universe", body: "Five filters. Rank is a screen, not a ticket. Recency is the enemy of the 3rd.", href: "/learn/universe", label: "OPEN UNIVERSE" },
  { id: "derrick", group: "Screen", title: "The Derrick", body: "WNRG vs IOGP. Integrated majors versus 98% E&P. Almost no overlap.", href: "/learn/derrick", label: "OPEN DERRICK" },
];

export function searchKnowledge(q: string) {
  const n = q.trim().toLowerCase();
  if (!n) {
    return { cards: KNOWLEDGE, tickers: TICKERS, years: YEARS };
  }
  const hit = (s: string) => s.toLowerCase().includes(n);
  return {
    cards: KNOWLEDGE.filter((c) => hit(c.title) || hit(c.body) || hit(c.group)),
    tickers: TICKERS.filter((t) => hit(t.ticker) || hit(t.name) || hit(t.job) || hit(t.lesson) || hit(t.farm)),
    years: YEARS.filter((y) => hit(y.year) || hit(y.title) || hit(y.lesson) || hit(y.paid) || hit(y.fined)),
  };
}

export const FAMILY_COMPARE: {
  family: string;
  classroom: number;
  live: string;
  prime: number;
  draft: string;
}[] = [
  { family: "Equity engine", classroom: 30, live: "25", prime: 23.8, draft: "45" },
  { family: "Nominal bonds", classroom: 18, live: "15", prime: 21.6, draft: "16 (VAGS+IGLS+IDTL)" },
  { family: "Linkers", classroom: 14, live: "10", prime: 16.3, draft: "ITPS+INXG+TIP5" },
  { family: "Gold", classroom: 15, live: "10", prime: 9.6, draft: "8" },
  { family: "Commodities", classroom: 10, live: "8", prime: 9.6, draft: "8" },
  { family: "Cash / overnight", classroom: 7, live: "7", prime: 6.5, draft: "6" },
  { family: "Long Treasuries", classroom: 6, live: "5", prime: 5.3, draft: "4" },
  { family: "Satellites / alt", classroom: 0, live: "~20", prime: 12.6, draft: "~12 + DBMF 4" },
];
