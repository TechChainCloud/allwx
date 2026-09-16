export const CONTRIB_ASOF = "2026-09";
export const CONTRIB_CAGR = 8.2;
export const CONTRIB_NOTE =
  "Teaching paths. 8.20% CAGR, monthly compounding, clock starts September 2026. Not a forecast. Not a personal plan. ISA allowance treated as £20,000 and frozen in today's rules.";

export const CONTRIB_CASES: {
  id: string;
  name: string;
  structure: string;
  years: number;
  invested: number;
  terminal: number;
  isaBreach: string;
  verdict: string;
  realistic: string;
}[] = [
  {
    id: "flat",
    name: "Flat £200",
    structure: "£200 every month. No step-up.",
    years: 25,
    invested: 60000,
    terminal: 193400,
    isaBreach: "No",
    verdict: "The schedule you can actually run. Contributions dominate the first decade.",
    realistic: "Highest.",
  },
  {
    id: "annual3",
    name: "3% annual step-up",
    structure: "Yearly increase that roughly tracks wages.",
    years: 30,
    invested: 81200,
    terminal: 261800,
    isaBreach: "No",
    verdict: "Quiet compounding. Income-linked without becoming a GIA story.",
    realistic: "Highest after flat.",
  },
  {
    id: "annual15",
    name: "15% annual step-up",
    structure: "Yearly increase on the monthly debit.",
    years: 25,
    invested: 533176,
    terminal: 1247000,
    isaBreach: "Year 17",
    verdict: "Large number. Still needs income that rises with the debit.",
    realistic: "Medium.",
  },
  {
    id: "c2",
    name: "Case 2 · 10% every 6 months",
    structure: "21% effective annual contribution growth for 25 years.",
    years: 25,
    invested: 2104000,
    terminal: 4480000,
    isaBreach: "Year 13–14 · GIA overflow",
    verdict: "Biggest headline. Year 20 wants ~£8,300 a month. ISA ~£1.58m, GIA ~£2.9m. A wealth machine only if wages scale with it.",
    realistic: "Lowest.",
  },
  {
    id: "c4",
    name: "Case 4 · 10% every 9 months, then +£1k",
    structure: "10 years of 9-month steps to ~£628, then £1,628/month fixed to 55.",
    years: 25,
    invested: 380582,
    terminal: 712000,
    isaBreach: "No · Phase 2 is £19,532/yr",
    verdict: "Most executable if the Year-11 top-up is affordable. Entirely inside the wrapper.",
    realistic: "High.",
  },
  {
    id: "c5",
    name: "Case 5 · ramp 5 years, then fill the ISA",
    structure: "Stepped £200 for 5 years, then £20k/year for 25 years. 30-year clock.",
    years: 30,
    invested: 518900,
    terminal: 1620000,
    isaBreach: "No · exactly at the cap",
    verdict: "Most ISA-efficient. £1.62m sheltered. No GIA. Optimal if the goal is max wrapper, not max headline.",
    realistic: "Medium-high — needs a £20k habit from year 6.",
  },
];

export const CONTRIB_PHASES_C4 = [
  { phase: "1", when: "Years 1–10", monthly: "£200 → £628", invested: 43800, value: 78400 },
  { phase: "2", when: "Years 11–25", monthly: "£1,628 fixed", invested: 336782, value: 712000 },
];

export const CONTRIB_PHASES_C5 = [
  { phase: "1", when: "Years 1–5", monthly: "£200 → £472", invested: 18900, value: 22800 },
  { phase: "2", when: "Years 6–30", monthly: "£1,667 · £20k/yr", invested: 500000, value: 1620000 },
];

export const CONTRIB_RULES = [
  "The pie does not need to be perfect. The contribution schedule does the compounding.",
  "A path that breaches the ISA is a different product. GIA tax is not a rounding error.",
  "Case 2 is a wage-growth assumption wearing a portfolio label. Do not print £4.5m without printing Year-20 income.",
  "Case 4's decision is the Year-11 extra thousand. If that debit is not boring, it is not a plan.",
  "Case 5 is the clean ISA max. Flat £200 is the plan that already exists on the 3rd.",
  "Doubling £200 to £400 at 8.2% is close to adding ~2.5pp of return — without rewriting the lock or abandoning the rooms.",
  "Prime cannot honestly do 10–15% CAGR. Do not hire leverage or 100% equity to chase a number the mix was not built to print.",
];
