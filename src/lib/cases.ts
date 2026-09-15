import type { JobId, WeatherId } from "@/lib/content";

export type CaseId =
  | "aw"
  | "sixty"
  | "equity"
  | "permanent"
  | "endowment"
  | "butterfly";

export type Mix = { id: JobId; w: number };

export type Case = {
  id: CaseId;
  name: string;
  tag: string;
  copy: string;
  mix: Mix[];
  exam: Record<WeatherId, string>;
  lesson: string;
};

export const CASES: Case[] = [
  {
    id: "aw",
    name: "ALLWX classroom",
    tag: "7 sleeves · unlevered",
    copy: "Bridgewater-inspired, unlevered, ISA-shaped. Not the fund. Risk is spread across four rooms so no single surprise owns the household.",
    mix: [
      { id: "shares", w: 30 },
      { id: "bonds", w: 18 },
      { id: "gold", w: 15 },
      { id: "tips", w: 14 },
      { id: "commodities", w: 10 },
      { id: "cash", w: 7 },
      { id: "long", w: 6 },
    ],
    exam: {
      goldilocks: "Equities carry. Gold looks bored. Rebalance, do not fire.",
      reflation: "Equities + commodities work. Nominal duration is the drag.",
      stagflation: "Inflation team on duty. 60/40's two employees both fined.",
      disinflation: "Duration and cash earn. Equities and BCOM sleep.",
    },
    lesson: "The point is not to win every year. The point is not to be owned by one year. Invictus Prime adds sentences. The 20-year proxy still does not pay extra complexity.",
  },
  {
    id: "sixty",
    name: "Classic 60/40",
    tag: "Growth-shock world",
    copy: "Sixty equities, forty intermediate nominal bonds. A reasonable object when inflation is boring and growth shocks dominate. 2022 sat a different exam.",
    mix: [
      { id: "shares", w: 60 },
      { id: "bonds", w: 40 },
    ],
    exam: {
      goldilocks: "Looks like genius. Both employees paid.",
      reflation: "The two employees argue. Bonds drag, equities may still work.",
      stagflation: "Fails. Stocks and bonds down together. No inflation team.",
      disinflation: "Bonds can save it. Equities hurt.",
    },
    lesson: "60/40 is a two-room mix marketed as a whole house. Name the rooms it does not own.",
  },
  {
    id: "equity",
    name: "100% global tracker",
    tag: "One employee",
    copy: "The internet's default. True sentence: residual claims compound with productivity. False sentence: that is a complete household, especially when your wages are already a growth asset.",
    mix: [{ id: "shares", w: 100 }],
    exam: {
      goldilocks: "Maximum carry. Ego risk.",
      reflation: "Can work. Discount-rate risk on long-duration equities.",
      stagflation: "Sequence risk. No insurance jobs. Human capital hits the same year.",
      disinflation: "Drawdown. Nothing to rebalance from.",
    },
    lesson: "A tracker is a job. It is not a firm. Young savers already own growth via wages.",
  },
  {
    id: "permanent",
    name: "Permanent Portfolio",
    tag: "25 × 4 · Harry Browne",
    copy: "Equal cash in equities, long bonds, gold, cash. Elegant. Different volatilities mean the equity and long-bond sleeves still shout. No dedicated linker or commodity book.",
    mix: [
      { id: "shares", w: 25 },
      { id: "long", w: 25 },
      { id: "gold", w: 25 },
      { id: "cash", w: 25 },
    ],
    exam: {
      goldilocks: "Equities carry, gold and cash drag.",
      reflation: "Gold helps. Long bonds hurt more than in ALLWX because the weight is huge.",
      stagflation: "Gold works. Missing commodities and linkers. Long bonds are a problem.",
      disinflation: "Long bonds and cash work. Equities and (sometimes) gold mixed.",
    },
    lesson: "Equal cash is not equal risk. Twenty-five percent of GT30 is a lot of duration.",
  },
  {
    id: "endowment",
    name: "Endowment-style",
    tag: "Alts as a story",
    copy: "Public-market cartoon of a Yale mix: heavy equity, some real assets, little dry powder. Illiquid private alts are not in an ISA. Do not pretend they are.",
    mix: [
      { id: "shares", w: 55 },
      { id: "commodities", w: 15 },
      { id: "gold", w: 10 },
      { id: "bonds", w: 10 },
      { id: "cash", w: 10 },
    ],
    exam: {
      goldilocks: "Equity-heavy. Fine in the sun.",
      reflation: "Commodities help. Still a lot of equity beta.",
      stagflation: "Real assets help. Equity weight still dominates the pain.",
      disinflation: "Missing the fire brigade. Real assets can sleep.",
    },
    lesson: "An endowment has a spending rule, a committee, and access. You have an ISA and a job. Do not copy the brochure.",
  },
  {
    id: "butterfly",
    name: "Golden butterfly",
    tag: "20 × 5 · small-cap tilt",
    copy: "Twenty each in total market, small-cap value, long Treasuries, gold, cash. A popular retail cousin. Small-cap value is still a residual claim — same weather as the growth engine, different factor.",
    mix: [
      { id: "shares", w: 40 },
      { id: "long", w: 20 },
      { id: "gold", w: 20 },
      { id: "cash", w: 20 },
    ],
    exam: {
      goldilocks: "Equity factor bet pays. Gold and cash lag.",
      reflation: "Gold helps. Long bonds hurt. Small-caps can be late-cycle fragile.",
      stagflation: "Gold works. No commodities, no linkers. Long bonds fined.",
      disinflation: "Long bonds and cash work. Small-caps can get destroyed.",
    },
    lesson: "A factor inside equities is not a second employee. It is a uniform change.",
  },
];

export const SCORE: Record<CaseId, Record<WeatherId, "WIN" | "MIX" | "FAIL">> = {
  aw: { goldilocks: "MIX", reflation: "MIX", stagflation: "WIN", disinflation: "WIN" },
  sixty: { goldilocks: "WIN", reflation: "MIX", stagflation: "FAIL", disinflation: "MIX" },
  equity: { goldilocks: "WIN", reflation: "MIX", stagflation: "FAIL", disinflation: "FAIL" },
  permanent: { goldilocks: "MIX", reflation: "MIX", stagflation: "MIX", disinflation: "WIN" },
  endowment: { goldilocks: "WIN", reflation: "MIX", stagflation: "MIX", disinflation: "FAIL" },
  butterfly: { goldilocks: "MIX", reflation: "MIX", stagflation: "MIX", disinflation: "WIN" },
};

export const EXAMS: {
  year: string;
  room: WeatherId;
  note: string;
}[] = [
  {
    year: "1973–74",
    room: "stagflation",
    note: "Oil shock. Equities and bonds both ugly. Real assets and gold had a job. 60/40 had no one at home.",
  },
  {
    year: "2008",
    room: "disinflation",
    note: "Demand crash. Long quality duration and gold paid. Commodities and equities fined. Fire brigade weather.",
  },
  {
    year: "2010s",
    room: "goldilocks",
    note: "The decade that trained people to fire gold. Equities compounded. Watchman looked unemployed. That was the brief working.",
  },
  {
    year: "2022",
    room: "stagflation",
    note: "Hiking cycle, inflation surprise. Stocks and ordinary bonds down together. Linkers marked down on real yields even as CPI was hot. Commodities and gold were the employees still at their desks.",
  },
];
