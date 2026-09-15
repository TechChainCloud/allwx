import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { m as usePlayer, p as Button } from "./router-CI7Ar9vC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lab-8ITZPXU_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HONEST = {
	asof: "2026-09-01",
	book: 710,
	invictusYtd: 8.5,
	iwdaYtd: 12.23,
	vwrpYtd: 12.98,
	life80Ytd: 18.09,
	gapBp: 370,
	invictus1y: 14.2,
	iwda1y: 19.58,
	vwrp1y: 21.58,
	invictus3y: 38,
	iwda3y: 72.31,
	vwrp3y: 61.58,
	note: "Classroom tape of total-return prints. Weighted ALLWX is an estimate from sleeve weights times line returns. Not a live NAV. Not a promise."
};
var SLEEVE_PRINTS = [
	{
		ticker: "VWRP",
		ytd: 12.98,
		y3: 61.58,
		job: "World equities"
	},
	{
		ticker: "VAGS",
		ytd: -.4,
		job: "Global IG"
	},
	{
		ticker: "SGLN",
		ytd: .72,
		y3: 109.06,
		job: "Gold"
	},
	{
		ticker: "ITPS",
		ytd: .43,
		y3: 4.96,
		job: "US TIPS"
	},
	{
		ticker: "ICOM",
		ytd: 33.38,
		y3: 52.39,
		job: "Commodities"
	},
	{
		ticker: "CSH2",
		ytd: 2.75,
		job: "Cash-like"
	},
	{
		ticker: "IDTL",
		ytd: -2.64,
		y3: -1.27,
		job: "Long Treasuries"
	}
];
var BACKTEST = {
	caveat: "ETF share classes do not all have twenty years of history. Proxies: MXWO, LEGATRGH, XAU in sterling, US TIPS TR, BCOMTR, SONIA, US Treasury 20+ TR. Annual rebalance. No spreads. Gaps in 2011 and 2016–17 excluded from the year table. Teaching object, not a live audited track record.",
	stats: [
		{
			name: "ALLWX classroom",
			ann: 7.45,
			vol: 6.51,
			worst: -3.91,
			best: 16.93,
			neg: "3 / 15",
			sharpe: 1.15,
			cum: 186
		},
		{
			name: "100% world (MXWO)",
			ann: 12.22,
			vol: 11.34,
			worst: -18.8,
			best: 25,
			neg: "2 / 15",
			sharpe: 1.08,
			cum: 420
		},
		{
			name: "60/40",
			ann: 8.85,
			vol: 6.58,
			worst: -8.24,
			best: 16.7,
			neg: "2 / 15",
			sharpe: 1.34,
			cum: 247
		}
	],
	years: [
		{
			y: 2007,
			aw: 12.2,
			eq: 8.3,
			s64: 7.3,
			gold: 30.9,
			com: 14.7,
			long: 9,
			win: "ALLWX"
		},
		{
			y: 2008,
			aw: -3.9,
			eq: -18.8,
			s64: -8.2,
			gold: 5.8,
			com: -12.5,
			long: 13.7,
			win: "ALLWX"
		},
		{
			y: 2009,
			aw: 12.2,
			eq: 18.1,
			s64: 13,
			gold: 24.4,
			com: 7.3,
			long: -3.6,
			win: "Equity"
		},
		{
			y: 2010,
			aw: 13.6,
			eq: 16.4,
			s64: 11.8,
			gold: 29.6,
			com: 21,
			long: 5.9,
			win: "Equity"
		},
		{
			y: 2012,
			aw: 6.1,
			eq: 11.4,
			s64: 9.2,
			gold: 7.1,
			com: -5.5,
			long: 2,
			win: "Equity"
		},
		{
			y: 2013,
			aw: .8,
			eq: 25,
			s64: 15,
			gold: -28.3,
			com: -11.3,
			long: -2.7,
			win: "Equity"
		},
		{
			y: 2014,
			aw: 4.5,
			eq: 12.3,
			s64: 10.5,
			gold: -1.4,
			com: -11.8,
			long: 5.1,
			win: "Equity"
		},
		{
			y: 2015,
			aw: -1.8,
			eq: 5.5,
			s64: 3.9,
			gold: -10.4,
			com: -20.3,
			long: .8,
			win: "Equity"
		},
		{
			y: 2018,
			aw: -1.6,
			eq: -2.5,
			s64: -1.5,
			gold: -1.6,
			com: -5.8,
			long: .9,
			win: "60/40"
		},
		{
			y: 2019,
			aw: 13,
			eq: 23.5,
			s64: 16.7,
			gold: 18.3,
			com: 3.5,
			long: 6.9,
			win: "Equity"
		},
		{
			y: 2020,
			aw: 10.1,
			eq: 13.2,
			s64: 9.9,
			gold: 25.1,
			com: -5.9,
			long: 8,
			win: "Equity"
		},
		{
			y: 2021,
			aw: 9.8,
			eq: 23.5,
			s64: 13.5,
			gold: -3.6,
			com: 28.2,
			long: -2.3,
			win: "Equity"
		},
		{
			y: 2024,
			aw: 12.5,
			eq: 21.6,
			s64: 14.2,
			gold: 27.2,
			com: 7.4,
			long: .6,
			win: "Equity"
		},
		{
			y: 2025,
			aw: 16.9,
			eq: 13.2,
			s64: 9.8,
			gold: 64.6,
			com: 7.7,
			long: 6.3,
			win: "ALLWX"
		},
		{
			y: 2026,
			aw: 7.5,
			eq: 12.6,
			s64: 7.6,
			gold: .2,
			com: 33.2,
			long: -.5,
			win: "Equity"
		}
	],
	lessons: [
		"2008 is the defining year. Classroom −3.9 versus equity −18.8. Gold and the fire brigade absorbed a demand crash. Sixty-forty still lost eight.",
		"At the 2008 trough a Prime-style DCA book held more absolute pounds than 100% equity. That is the behavioural case — so a rational person keeps contributing.",
		"2013 is the honest cost. Gold −28 in sterling, commodities −11. Classroom still positive, twenty-four points behind a tracker. Insurance looks unemployed in goldilocks.",
		"2022 is the inflation validation. ETF-weighted Prime −5.24 versus S&P −18.64 and 60/40 −16. Commodities carried the architecture.",
		"2025 is gold's sterling year. A watchman sized to be heard can still move the pie when its weather arrives. Already staffed. Not predicted.",
		"Twenty-year cumulative: tracker +420, classroom +186. The gap is the premium paid for rooms the last two decades rarely visited. Whether that premium was cheap depends on the next two decades, not the last.",
		"Sunny-Day's higher equity weight wins the sunny terminal and loses the trough. TER drag ~£18k over 30 years on £200/month is not a rounding error."
	]
};
var MONTE = {
	start: 710,
	monthly: 200,
	years: 20,
	mean: 7.45,
	vol: 6.51,
	contributed: 48710,
	paths: 1e4,
	caveat: "Log-normal paths from the backtest mean and vol. Ten thousand draws. Does not invent unprecedented tails. 2025 gold is inside the mean. A 5.5–6.5 forward mean would land the median nearer £85–95k. Teaching fan, not a forecast.",
	fan: [
		{
			p: "P95",
			label: "Best tail",
			value: 136926,
			ret: 88216
		},
		{
			p: "P75",
			label: "Above median",
			value: 119250,
			ret: 70540
		},
		{
			p: "P50",
			label: "Median",
			value: 106225,
			ret: 57515
		},
		{
			p: "P25",
			label: "Below median",
			value: 93312,
			ret: 44602
		},
		{
			p: "P5",
			label: "Worse tail",
			value: 76194,
			ret: 27484
		},
		{
			p: "P0",
			label: "Contributions only",
			value: 48710,
			ret: 0
		}
	],
	crossings: [
		{
			gate: "£10k Phase 1",
			when: "Year 3–4",
			note: "Value tilt and EM local become eligible, not mandatory."
		},
		{
			gate: "£25k",
			when: "Year 7–8",
			note: "Drawdown protocol must already be written in pounds."
		},
		{
			gate: "£50k Phase 2",
			when: "Year 13",
			note: "Currency decision ceases to be accidental."
		},
		{
			gate: "£100k",
			when: "Year 19–20",
			note: "Median path. Raise the contribution and it arrives earlier."
		}
	]
};
var PHASES = [
	{
		id: "p0",
		name: "Phase 0",
		band: "£0–£10k",
		lines: 7,
		ter: "0.12%",
		hedged: "25% GBP-hedged",
		growth: 30,
		real: 39,
		def: 31,
		action: "Contribute. Point cash at the thin sleeve. Do not add lines.",
		rows: [
			{
				ticker: "VWRP",
				name: "FTSE All-World",
				w: 30,
				ter: "0.14",
				fx: "Unhedged",
				role: "Goldilocks + reflation",
				flag: "hold"
			},
			{
				ticker: "SGLN",
				name: "Physical gold",
				w: 15,
				ter: "0.12",
				fx: "Unhedged",
				role: "Crisis + debasement",
				flag: "hold"
			},
			{
				ticker: "ITPS",
				name: "USD TIPS",
				w: 14,
				ter: "0.10",
				fx: "Unhedged",
				role: "Inflation accretion",
				flag: "hold"
			},
			{
				ticker: "VAGS",
				name: "Global Agg GBP-H",
				w: 18,
				ter: "0.08",
				fx: "Hedged",
				role: "Disinflation",
				flag: "hold"
			},
			{
				ticker: "ICOM",
				name: "BCOM swap",
				w: 10,
				ter: "0.19",
				fx: "Unhedged",
				role: "Supply shock",
				flag: "hold"
			},
			{
				ticker: "CSH2",
				name: "GBP ultrashort",
				w: 7,
				ter: "0.10",
				fx: "Hedged",
				role: "Powder",
				flag: "hold"
			},
			{
				ticker: "IDTL",
				name: "US Treasury 20+",
				w: 6,
				ter: "0.07",
				fx: "Unhedged",
				role: "Stage 5 residual",
				flag: "hold"
			}
		]
	},
	{
		id: "p1",
		name: "Phase 1",
		band: "£10k–£50k",
		lines: 9,
		ter: "0.16%",
		hedged: "20% GBP-hedged",
		growth: 30,
		real: 39,
		def: 31,
		action: "IWVL 10 from VWRP. SEML 5 from VAGS. INXG stays vetoed unless Prime probation is written with a kill rule. Do not rebuild the live book into 15 lines at £950.",
		rows: [
			{
				ticker: "VWRP",
				name: "FTSE All-World",
				w: 20,
				ter: "0.14",
				fx: "Unhedged",
				role: "Cap-weight growth",
				flag: "cut"
			},
			{
				ticker: "IWVL",
				name: "World value factor",
				w: 10,
				ter: "0.30",
				fx: "Unhedged",
				role: "Value tilt inside growth",
				flag: "new"
			},
			{
				ticker: "SGLN",
				name: "Physical gold",
				w: 15,
				ter: "0.12",
				fx: "Unhedged",
				role: "Crisis + debasement",
				flag: "hold"
			},
			{
				ticker: "ITPS",
				name: "USD TIPS",
				w: 14,
				ter: "0.10",
				fx: "Unhedged",
				role: "Inflation accretion",
				flag: "hold"
			},
			{
				ticker: "VAGS",
				name: "Global Agg GBP-H",
				w: 13,
				ter: "0.08",
				fx: "Hedged",
				role: "Disinflation",
				flag: "cut"
			},
			{
				ticker: "SEML",
				name: "EM local govt",
				w: 5,
				ter: "0.50",
				fx: "Unhedged",
				role: "EM carry",
				flag: "new"
			},
			{
				ticker: "ICOM",
				name: "BCOM swap",
				w: 10,
				ter: "0.19",
				fx: "Unhedged",
				role: "Supply shock",
				flag: "hold"
			},
			{
				ticker: "CSH2",
				name: "GBP ultrashort",
				w: 7,
				ter: "0.10",
				fx: "Hedged",
				role: "Powder",
				flag: "hold"
			},
			{
				ticker: "IDTL",
				name: "US Treasury 20+",
				w: 6,
				ter: "0.07",
				fx: "Unhedged",
				role: "Stage 5 residual",
				flag: "hold"
			}
		]
	},
	{
		id: "p2",
		name: "Phase 2",
		band: "£50k–£100k",
		lines: 10,
		ter: "0.17%",
		hedged: "19% GBP-hedged",
		growth: 33,
		real: 37,
		def: 30,
		action: "MVOL 5 inside growth. Larger cash bay. Write the dollar decision.",
		rows: [
			{
				ticker: "VWRP",
				name: "FTSE All-World",
				w: 18,
				ter: "0.14",
				fx: "Unhedged",
				role: "Cap-weight growth",
				flag: "cut"
			},
			{
				ticker: "IWVL",
				name: "World value factor",
				w: 10,
				ter: "0.30",
				fx: "Unhedged",
				role: "Value tilt",
				flag: "hold"
			},
			{
				ticker: "MVOL",
				name: "World min vol",
				w: 5,
				ter: "0.30",
				fx: "Unhedged",
				role: "Equity buffer",
				flag: "new"
			},
			{
				ticker: "SGLN",
				name: "Physical gold",
				w: 15,
				ter: "0.12",
				fx: "Unhedged",
				role: "Crisis + debasement",
				flag: "hold"
			},
			{
				ticker: "ITPS",
				name: "USD TIPS",
				w: 12,
				ter: "0.10",
				fx: "Unhedged",
				role: "Inflation accretion",
				flag: "cut"
			},
			{
				ticker: "ICOM",
				name: "BCOM swap",
				w: 10,
				ter: "0.19",
				fx: "Unhedged",
				role: "Supply shock",
				flag: "hold"
			},
			{
				ticker: "VAGS",
				name: "Global Agg GBP-H",
				w: 10,
				ter: "0.08",
				fx: "Hedged",
				role: "Disinflation",
				flag: "cut"
			},
			{
				ticker: "SEML",
				name: "EM local govt",
				w: 5,
				ter: "0.50",
				fx: "Unhedged",
				role: "EM carry",
				flag: "hold"
			},
			{
				ticker: "CSH2",
				name: "GBP ultrashort",
				w: 9,
				ter: "0.10",
				fx: "Hedged",
				role: "Powder",
				flag: "new"
			},
			{
				ticker: "IDTL",
				name: "US Treasury 20+",
				w: 6,
				ter: "0.07",
				fx: "Unhedged",
				role: "Stage 5 residual",
				flag: "hold"
			}
		]
	},
	{
		id: "p3",
		name: "Phase 3",
		band: "£100k+",
		lines: 10,
		ter: "0.17%",
		hedged: "22% GBP-hedged",
		growth: 30,
		real: 35,
		def: 35,
		action: "No new lines. Grow the bay. Keep gold floor and commodity cap.",
		rows: [
			{
				ticker: "VWRP",
				name: "FTSE All-World",
				w: 15,
				ter: "0.14",
				fx: "Unhedged",
				role: "Cap-weight growth",
				flag: "cut"
			},
			{
				ticker: "IWVL",
				name: "World value factor",
				w: 10,
				ter: "0.30",
				fx: "Unhedged",
				role: "Value tilt",
				flag: "hold"
			},
			{
				ticker: "MVOL",
				name: "World min vol",
				w: 5,
				ter: "0.30",
				fx: "Unhedged",
				role: "Equity buffer",
				flag: "hold"
			},
			{
				ticker: "SGLN",
				name: "Physical gold",
				w: 15,
				ter: "0.12",
				fx: "Unhedged",
				role: "Floor 15, never <10",
				flag: "hold"
			},
			{
				ticker: "ITPS",
				name: "USD TIPS",
				w: 10,
				ter: "0.10",
				fx: "Unhedged",
				role: "Inflation accretion",
				flag: "cut"
			},
			{
				ticker: "ICOM",
				name: "BCOM swap",
				w: 10,
				ter: "0.19",
				fx: "Unhedged",
				role: "Hard cap 10",
				flag: "hold"
			},
			{
				ticker: "VAGS",
				name: "Global Agg GBP-H",
				w: 10,
				ter: "0.08",
				fx: "Hedged",
				role: "Disinflation",
				flag: "hold"
			},
			{
				ticker: "SEML",
				name: "EM local govt",
				w: 7,
				ter: "0.50",
				fx: "Unhedged",
				role: "EM carry",
				flag: "new"
			},
			{
				ticker: "CSH2",
				name: "GBP ultrashort",
				w: 12,
				ter: "0.10",
				fx: "Hedged",
				role: "Bay for amber",
				flag: "new"
			},
			{
				ticker: "IDTL",
				name: "US Treasury 20+",
				w: 6,
				ter: "0.07",
				fx: "Unhedged",
				role: "Stage 5 residual",
				flag: "hold"
			}
		]
	}
];
var CANDIDATE_TABLE = [
	{
		ticker: "SGLN",
		name: "Gold (held)",
		ret5: 19.48,
		vol5: 17.01,
		dd5: -24.9,
		sharpe: .94,
		mark: "KEEP",
		why: "Best risk-adjusted print in the book. Floor."
	},
	{
		ticker: "IWVL",
		name: "World value",
		ret5: 17.19,
		vol5: 16.29,
		dd5: -26.5,
		sharpe: .84,
		mark: "ADD",
		why: "Phase 1. 610bp over cap-weight with a live reflation brief."
	},
	{
		ticker: "VWRP",
		name: "All-World (held)",
		ret5: 11.09,
		vol5: 12.99,
		dd5: -17.6,
		sharpe: .58,
		mark: "KEEP",
		why: "Baseline growth engine. Trim to fund value, do not fire."
	},
	{
		ticker: "IWMO",
		name: "World momentum",
		ret5: 11.35,
		vol5: 19.26,
		dd5: -29.6,
		sharpe: .41,
		mark: "VETO",
		why: "More vol, no extra return. Trend factor, not a new room."
	},
	{
		ticker: "IWQU",
		name: "World quality",
		ret5: 9.41,
		vol5: 15.63,
		dd5: -27.7,
		sharpe: .38,
		mark: "VETO",
		why: "Worse than the engine you already hired."
	},
	{
		ticker: "INFR",
		name: "Infrastructure",
		ret5: 5.76,
		vol5: 12.44,
		dd5: -23.3,
		sharpe: .18,
		mark: "VETO",
		why: "Loses to cash-like on a Sharpe basis."
	},
	{
		ticker: "MVOL",
		name: "Min vol",
		ret5: 5.27,
		vol5: 10.71,
		dd5: -18.5,
		sharpe: .17,
		mark: "WAIT",
		why: "Return extracted. Only a Phase 2 intra-equity buffer at scale."
	},
	{
		ticker: "SEML",
		name: "EM local bonds",
		ret5: 2.05,
		vol5: 7.45,
		dd5: -11.1,
		sharpe: -.2,
		mark: "ADD",
		why: "Ugly Sharpe, lowest drawdown. Correlation is the job. Phase 1."
	},
	{
		ticker: "INXG",
		name: "UK linkers",
		ret5: -9.65,
		vol5: 20.01,
		dd5: -50.9,
		sharpe: -.66,
		mark: "VETO",
		why: "Theory yes, instrument no. Prime hires 3.8 on probation. Lab veto is not silently retired."
	},
	{
		ticker: "DBMF",
		name: "Managed futures UCITS",
		ret5: 0,
		vol5: 13.5,
		dd5: 0,
		sharpe: 1.47,
		mark: "WAIT",
		why: "1Y Sharpe 1.47. Corr VWRP 0.22, VAGS −0.16. 2022 CTA year. Gate: T212 AutoInvest + fractional. Not a lock-file edit tonight."
	},
	{
		ticker: "INGH",
		name: "Global infrastructure",
		ret5: 5.76,
		vol5: 12.44,
		dd5: -23.3,
		sharpe: .18,
		mark: "WAIT",
		why: "Sunny-Day's only legitimate Prime case. Possible XDWI swap. Observation. Lock unchanged."
	}
];
var NEVER = [
	"Gold floor fifteen, never below ten. Best Sharpe in the book. Not a funding source.",
	"Commodities hard-capped at ten. Synthetic wrapper. Cap does not move with a good year.",
	"Long Treasuries stay six until Stage 4/5 confirms. Scale does not change a regime residual."
];
function projectBook(start, monthly, years, ann) {
	const r = ann / 100 / 12;
	const n = years * 12;
	let v = start;
	for (let i = 0; i < n; i++) v = v * (1 + r) + monthly;
	const contrib = start + monthly * n;
	return {
		value: v,
		contrib,
		gain: v - contrib
	};
}
var TWENTY_ASOF = "2026-09-07";
var TWENTY_NAME = "20-instrument All-Weather ISA";
var TWENTY = [
	{
		ticker: "VWRP",
		sleeve: "equity",
		job: "Global productivity core",
		design20: 18,
		live18: 18,
		floor: 15,
		cap: 22,
		terBp: 14,
		ret1y: 21.75,
		vol1y: 11.08,
		sharpe: 1.635,
		rooms: "G / R",
		note: "Engine stays. Cut from classroom 30 and house 25 to fund factors."
	},
	{
		ticker: "VVAL",
		sleeve: "equity",
		job: "Global value factor",
		design20: 5,
		live18: 0,
		rooms: "R / G",
		note: "No live London print in the run. Replaced by IUKD. Not in the 18-line book."
	},
	{
		ticker: "WSML",
		sleeve: "equity",
		job: "Global small-cap",
		design20: 5,
		live18: 5,
		floor: 3,
		cap: 8,
		terBp: 17,
		ret1y: 21.67,
		vol1y: 14.88,
		sharpe: 1.212,
		rooms: "G / R",
		note: "Size premium. Independent of mega-cap concentration inside VWRP."
	},
	{
		ticker: "VFEM",
		sleeve: "equity",
		job: "EM equity",
		design20: 5,
		live18: 5,
		floor: 3,
		cap: 8,
		terBp: 22,
		ret1y: 20.44,
		vol1y: 15.13,
		sharpe: 1.111,
		rooms: "R",
		note: "EM growth and commodity cycle, sized outside VWRP's EM stub."
	},
	{
		ticker: "IUKD",
		sleeve: "equity",
		job: "UK dividend value",
		design20: 5,
		live18: 4,
		floor: 2,
		cap: 7,
		terBp: 19,
		ret1y: 27.91,
		vol1y: 11.37,
		sharpe: 2.135,
		rooms: "G / R",
		note: "GBP-native value. Substitutes for VVAL when that ticker has no tape."
	},
	{
		ticker: "VAGS",
		sleeve: "nominal",
		job: "Global agg GBP-hedged",
		design20: 8,
		live18: 8,
		floor: 5,
		cap: 12,
		terBp: 8,
		ret1y: .22,
		vol1y: 3.61,
		sharpe: -.945,
		rooms: "D / G",
		note: "Deflation engine cut from house 15 / lock 17. Still the drag line."
	},
	{
		ticker: "IGLS",
		sleeve: "nominal",
		job: "UK short gilt 1–5y",
		design20: 5,
		live18: 5,
		floor: 3,
		cap: 8,
		terBp: 7,
		ret1y: 2.56,
		vol1y: 2.09,
		sharpe: -.512,
		rooms: "D / G",
		note: "GBP carry without long-end term premium."
	},
	{
		ticker: "IDTL",
		sleeve: "nominal",
		job: "US Treasury 20+",
		design20: 5,
		live18: 5,
		floor: 0,
		cap: 8,
		terBp: 7,
		ret1y: -3.85,
		vol1y: 9.17,
		sharpe: -.816,
		rooms: "D",
		note: "Cut-cycle stub. Same job as the house."
	},
	{
		ticker: "IEMB",
		sleeve: "nominal",
		job: "EM sovereign USD",
		design20: 4,
		live18: 4,
		floor: 2,
		cap: 7,
		terBp: 22,
		ret1y: 4.99,
		vol1y: 5.91,
		sharpe: .23,
		rooms: "R / G",
		note: "Carry and credit, not G7 rates. Different corr group from VFEM."
	},
	{
		ticker: "ITPS",
		sleeve: "linker",
		job: "US TIPS CPI contract",
		design20: 7,
		live18: 7,
		floor: 4,
		cap: 10,
		terBp: 10,
		ret1y: .1,
		vol1y: 5.9,
		sharpe: -.598,
		rooms: "S / R",
		note: "USD inflation anchor. Cut from house 10 / lock 13.6."
	},
	{
		ticker: "INXG",
		sleeve: "linker",
		job: "UK index-linked gilts",
		design20: 4,
		live18: 4,
		floor: 2,
		cap: 7,
		terBp: 10,
		ret1y: 2.88,
		vol1y: 9.19,
		sharpe: -.082,
		rooms: "S / R",
		note: "Classroom veto stands until the 5y wreck is retired. Theory yes. Instrument still on probation."
	},
	{
		ticker: "TPSA",
		sleeve: "linker",
		job: "Short TIPS 0–5y",
		design20: 3,
		live18: 0,
		rooms: "S",
		note: "No live print in the run. Dropped. Duration buffer not hired."
	},
	{
		ticker: "SGLN",
		sleeve: "real",
		job: "Physical gold",
		design20: 7,
		live18: 7,
		floor: 4,
		cap: 10,
		terBp: 12,
		ret1y: 21.18,
		vol1y: 25.86,
		sharpe: .679,
		rooms: "S / D",
		note: "Watchman below the house floor of 10. That is a design choice, not a week."
	},
	{
		ticker: "ICOM",
		sleeve: "real",
		job: "Broad commodities",
		design20: 5,
		live18: 5,
		floor: 3,
		cap: 8,
		terBp: 19,
		ret1y: 44.36,
		vol1y: 17.85,
		sharpe: 2.282,
		rooms: "R / S",
		note: "Goods shock. Same job, smaller sleeve."
	},
	{
		ticker: "SSLV",
		sleeve: "real",
		job: "Physical silver",
		design20: 2,
		live18: 2,
		floor: 1,
		cap: 4,
		terBp: 20,
		ret1y: 60.21,
		vol1y: 61.08,
		sharpe: .926,
		rooms: "R / S",
		note: "Industrial-monetary hybrid. High vol. Listed twice on one broken run."
	},
	{
		ticker: "WTRE",
		sleeve: "real",
		job: "Global listed REITs",
		design20: 2,
		live18: 2,
		floor: 1,
		cap: 4,
		terBp: 14,
		ret1y: 22.17,
		vol1y: 21.19,
		sharpe: .875,
		rooms: "G / R",
		note: "Beta vs equities ~0.86. Sized as income, not a fifth weather. Also duplicated on that run."
	},
	{
		ticker: "CSH2",
		sleeve: "cash",
		job: "Overnight GBP optionality",
		design20: 5,
		live18: 5,
		floor: 3,
		cap: 8,
		terBp: 7,
		ret1y: 4.25,
		vol1y: .41,
		sharpe: 1.512,
		rooms: "All",
		note: "Bay. Smaller than house 7."
	},
	{
		ticker: "SMGB",
		sleeve: "theme",
		job: "Semiconductors / AI",
		design20: 2,
		live18: 2,
		floor: 0,
		cap: 4,
		terBp: 35,
		ret1y: 114.9,
		vol1y: 38.66,
		sharpe: 2.878,
		rooms: "R",
		note: "Theme cap 2. Conviction without becoming Maximus."
	},
	{
		ticker: "DFNS",
		sleeve: "theme",
		job: "Global defence",
		design20: 2,
		live18: 2,
		floor: 0,
		cap: 4,
		terBp: 40,
		ret1y: 2.85,
		vol1y: 26.5,
		sharpe: -.029,
		rooms: "R / S",
		note: "Fragmentation spend. Still equity weather."
	},
	{
		ticker: "URNG",
		sleeve: "theme",
		job: "Uranium / nuclear",
		design20: 1,
		live18: 1,
		floor: 0,
		cap: 3,
		terBp: 65,
		ret1y: 17.19,
		vol1y: 50.71,
		sharpe: .267,
		rooms: "S / R",
		note: "Ticket size. Highest vol in the set."
	}
];
function sumTwenty(field) {
	return TWENTY.reduce((a, r) => a + r[field], 0);
}
var TWENTY_SLEEVES = [
	{
		id: "equity",
		label: "Equity",
		design: 38,
		live: 32,
		job: "Market + value + small + EM + UK dividend"
	},
	{
		id: "nominal",
		label: "Nominal bond",
		design: 22,
		live: 22,
		job: "Global agg + UK short + US long + EM sovereign"
	},
	{
		id: "linker",
		label: "Inflation-linked",
		design: 14,
		live: 11,
		job: "US TIPS + UK linkers. Short TIPS dropped."
	},
	{
		id: "real",
		label: "Real assets",
		design: 16,
		live: 16,
		job: "Gold + BCOM + silver + REITs"
	},
	{
		id: "cash",
		label: "Liquidity",
		design: 5,
		live: 5,
		job: "Overnight optionality"
	},
	{
		id: "theme",
		label: "Thematic",
		design: 5,
		live: 5,
		job: "Three tickets. Fifty percent wipe is 2.5pp."
	}
];
var TWENTY_VS_HOUSE = [
	{
		dim: "Lines",
		classroom: "7",
		house: "14",
		twenty: "20 design / 18 listed"
	},
	{
		dim: "Equity",
		classroom: "30 VWRP",
		house: "25 VWRP + sats",
		twenty: "32–38 factored"
	},
	{
		dim: "Gold floor",
		classroom: "15, never <10",
		house: "10 live",
		twenty: "7 — below classroom floor"
	},
	{
		dim: "INXG",
		classroom: "Vetoed",
		house: "Absent",
		twenty: "4% — probation, not a pass"
	},
	{
		dim: "Themes",
		classroom: "0",
		house: "6 lines ~14%",
		twenty: "3 lines, 5%"
	},
	{
		dim: "When",
		classroom: "Always",
		house: "Live ISA now",
		twenty: "Scale book. Not £950."
	}
];
var TWENTY_PRINCIPLES = [
	{
		title: "Equity is factored, not just indexed",
		body: "VWRP remains the engine. Value, small-cap, EM and UK dividend are hired because they are different return streams, not because twenty sounds complete."
	},
	{
		title: "Bonds are laddered by curve and geography",
		body: "No single yield curve is asked to hedge equities in reflation. Short UK, global agg, EM credit, long US convexity."
	},
	{
		title: "Inflation has more than one contract",
		body: "US CPI and UK RPI are different indices and different currencies. That is the argument for INXG. The 2022 gilt wreck is the argument against it."
	},
	{
		title: "Real assets are four jobs, not one bucket",
		body: "Metal, goods, silver hybrid, property income. WTRE beta to equities is high, so it stays tiny."
	},
	{
		title: "Themes stay at five percent",
		body: "Three lines. No line above two. A simultaneous 50% drawdown costs two and a half points. Painful. Not structural."
	}
];
var TWENTY_REJECTS = [
	"Leverage, derivatives, inverse funds.",
	"Crypto. No defined job in the four rooms.",
	"Active funds. TER compounds against the household.",
	"Single-country equity besides IUKD.",
	"VHYL, RBTX, FAIG, ABTC — already rejected for the house.",
	"More than three theme tickets."
];
var TWENTY_HOLES = [
	{
		title: "The 18-line table sums to 91%",
		body: "Dropping VVAL 5 and TPSA 3, and cutting IUKD 5→4, removes 9pp. The write-up still says 100%. A vector that does not confirm is not a lock. Park the 9pp or rewrite the weights. Do not pretend."
	},
	{
		title: "The Bloomberg run listed SSLV and WTRE twice",
		body: "Same error class as the 170% and 190% pies. Duplicate rows are not diversification. They are a broken weight vector."
	},
	{
		title: "INXG is still vetoed in the classroom",
		body: "Five-year return ugly, drawdown −50.9%, gilt-crisis duration. The 20-line design rehires it at 4% as a sterling CPI contract. Theory survived. This ticker has not cleared the lab gate. Hold the tension. Do not silently override episode 12."
	},
	{
		title: "Gold at 7% breaks the classroom floor",
		body: "Teaching floor is 15, never below 10. This design goes to 7 to fund factors. That is a different religion. Name it. Do not call it the same house."
	},
	{
		title: "Eighteen lines at £950 is costume",
		body: "Minimum size, spreads, and FX tickets make a twenty-line book a later-phase object. The live ISA stays fourteen. This page is a scale sketch."
	}
];
var TWENTY_RULE = "Twenty instruments or seven — the rule does not change. Contribution on a date. Drift-routing. Walk-back when PMI is under 50 and 2s10s inverted. No selling. Instrument count is not the compounding engine.";
var CONTRIB_ASOF = "2026-09";
var CONTRIB_CAGR = 8.2;
var CONTRIB_NOTE = "Teaching paths. 8.20% CAGR, monthly compounding, clock starts September 2026. Not a forecast. Not a personal plan. ISA allowance treated as £20,000 and frozen in today's rules.";
var CONTRIB_CASES = [
	{
		id: "flat",
		name: "Flat £200",
		structure: "£200 every month. No step-up.",
		years: 25,
		invested: 6e4,
		terminal: 193400,
		isaBreach: "No",
		verdict: "The schedule you can actually run at £950. Contributions dominate the first decade.",
		realistic: "Highest."
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
		realistic: "Highest after flat."
	},
	{
		id: "annual15",
		name: "15% annual step-up",
		structure: "Yearly increase on the monthly debit.",
		years: 25,
		invested: 533176,
		terminal: 1247e3,
		isaBreach: "Year 17",
		verdict: "Large number. Still needs income that rises with the debit.",
		realistic: "Medium."
	},
	{
		id: "c2",
		name: "Case 2 · 10% every 6 months",
		structure: "21% effective annual contribution growth for 25 years.",
		years: 25,
		invested: 2104e3,
		terminal: 448e4,
		isaBreach: "Year 13–14 · GIA overflow",
		verdict: "Biggest headline. Year 20 wants ~£8,300 a month. ISA ~£1.58m, GIA ~£2.9m. A wealth machine only if wages scale with it.",
		realistic: "Lowest."
	},
	{
		id: "c4",
		name: "Case 4 · 10% every 9 months, then +£1k",
		structure: "10 years of 9-month steps to ~£628, then £1,628/month fixed to 55.",
		years: 25,
		invested: 380582,
		terminal: 712e3,
		isaBreach: "No · Phase 2 is £19,532/yr",
		verdict: "Most executable if the Year-11 top-up is affordable. Entirely inside the wrapper.",
		realistic: "High."
	},
	{
		id: "c5",
		name: "Case 5 · ramp 5 years, then fill the ISA",
		structure: "Stepped £200 for 5 years, then £20k/year for 25 years. 30-year clock.",
		years: 30,
		invested: 518900,
		terminal: 162e4,
		isaBreach: "No · exactly at the cap",
		verdict: "Most ISA-efficient. £1.62m sheltered. No GIA. Optimal if the goal is max wrapper, not max headline.",
		realistic: "Medium-high — needs a £20k habit from year 6."
	}
];
var CONTRIB_PHASES_C4 = [{
	phase: "1",
	when: "Years 1–10",
	monthly: "£200 → £628",
	invested: 43800,
	value: 78400
}, {
	phase: "2",
	when: "Years 11–25",
	monthly: "£1,628 fixed",
	invested: 336782,
	value: 712e3
}];
var CONTRIB_PHASES_C5 = [{
	phase: "1",
	when: "Years 1–5",
	monthly: "£200 → £472",
	invested: 18900,
	value: 22800
}, {
	phase: "2",
	when: "Years 6–30",
	monthly: "£1,667 · £20k/yr",
	invested: 5e5,
	value: 162e4
}];
var CONTRIB_RULES = [
	"The pie does not need to be perfect. The contribution schedule does the compounding.",
	"A path that breaches the ISA is a different product. GIA tax is not a rounding error.",
	"Case 2 is a wage-growth assumption wearing a portfolio label. Do not print £4.5m without printing Year-20 income.",
	"Case 4's decision is the Year-11 extra thousand. If that debit is not boring, it is not a plan.",
	"Case 5 is the clean ISA max. Flat £200 is the plan that already exists on the 3rd.",
	"Doubling £200 to £400 at 8.2% is close to adding ~2.5pp of return — without rewriting the lock or abandoning the rooms.",
	"Prime cannot honestly do 10–15% CAGR. Do not hire leverage or 100% equity to chase a number the mix was not built to print."
];
var useBook = create()(persist((set) => ({
	start: 710,
	monthly: 200,
	years: 20,
	ready: false,
	setStart: (start) => set({ start }),
	setMonthly: (monthly) => set({ monthly }),
	setYears: (years) => set({ years }),
	rehydrate: () => {
		useBook.persist.rehydrate();
		set({ ready: true });
	}
}), {
	name: "allwx-book",
	skipHydration: true
}));
var TABS = [
	"HONEST",
	"BACKTEST",
	"FAN",
	"PHASES",
	"PATHS",
	"TWENTY",
	"GATES",
	"TARGETS"
];
function LabPage() {
	const [tab, setTab] = (0, import_react.useState)("HONEST");
	const play = usePlayer((s) => s.play);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
				children: [
					"LAB · ",
					HONEST.asof,
					" · TEACHING TAPE"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-mono text-4xl tracking-tight",
				children: "Numbers without the costume."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted",
				children: "Weighted classroom versus a world tracker. Twenty-year proxy backtest. A contribution fan. Four phases triggered by book size. A twenty-line scale sketch. Targets you can type. Not a live NAV. Not a promise."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => play("honest-numbers"),
						children: "PLAY EP 10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => play("years-that-paid"),
						children: "PLAY EP 11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/house",
						className: "inline-flex h-11 items-center font-mono text-sm text-accent",
						children: "OPEN HOUSE →"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `h-11 rounded-sm px-3 font-mono text-xs ${tab === t ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"}`,
					children: t
				}, t))
			}),
			tab === "HONEST" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Honest, {}),
			tab === "BACKTEST" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backtest, {}),
			tab === "FAN" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fan, {}),
			tab === "PHASES" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phases, {}),
			tab === "PATHS" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paths, {}),
			tab === "TWENTY" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twenty, {}),
			tab === "GATES" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gates, {}),
			tab === "TARGETS" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Targets, {})
		]
	});
}
function Honest() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "CLASSROOM YTD",
						v: `${HONEST.invictusYtd}%`,
						d: "Weighted estimate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "IWDA YTD",
						v: `${HONEST.iwdaYtd}%`,
						d: "One fund, one room"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "GAP",
						v: `${HONEST.gapBp}bp`,
						d: "Reflation tax on insurance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "BOOK IN THE BRIEF",
						v: `£${HONEST.book}`,
						d: "Scale is the plot"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-sans text-sm leading-relaxed text-muted",
				children: HONEST.note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto rounded-md border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[640px] text-left font-mono text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-2 text-[10px] uppercase text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Line"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Job"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "YTD"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "3Y"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: SLEEVE_PRINTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-cyan",
								children: s.ticker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: s.job
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: `px-3 py-2 tabular-nums ${s.ytd >= 0 ? "text-up" : "text-down"}`,
								children: [s.ytd.toFixed(2), "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums text-muted",
								children: s.y3 != null ? `${s.y3.toFixed(2)}%` : "—"
							})
						]
					}, s.ticker)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-6 space-y-2 font-sans text-sm leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The machine lagged a world tracker this year. That is the design in a reflation where residual claims are the paying job." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Three-year gold at +109% is the other sentence. Insurance is only unemployed until it is not." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "At £710 most operational precision is smaller than a spread. Contribution direction is the rebalance. The framework is still the rehearsal for a larger book." })
				]
			})
		]
	});
}
function Backtest() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl font-sans text-sm leading-relaxed text-muted",
				children: BACKTEST.caveat
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 overflow-x-auto rounded-md border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[800px] text-left font-mono text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-2 text-[10px] uppercase text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Book"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Ann"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Vol"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Worst"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Best"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Sharpe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "20Y cum"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: BACKTEST.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-cyan",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 tabular-nums",
								children: [s.ann, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 tabular-nums",
								children: [s.vol, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 tabular-nums text-down",
								children: [s.worst, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 tabular-nums text-up",
								children: [s.best, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums",
								children: s.sharpe
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 tabular-nums",
								children: [
									"+",
									s.cum,
									"%"
								]
							})
						]
					}, s.name)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearChart, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto rounded-md border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[880px] text-left font-mono text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-2 text-[10px] uppercase text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Year"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "ALLWX"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Equity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "60/40"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Gold £"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "BCOM"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Long UST"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Winner"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: BACKTEST.years.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-cyan",
								children: r.y
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: num(r.aw),
								children: fmt(r.aw)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: num(r.eq),
								children: fmt(r.eq)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: num(r.s64),
								children: fmt(r.s64)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: num(r.gold),
								children: fmt(r.gold)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: num(r.com),
								children: fmt(r.com)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: num(r.long),
								children: fmt(r.long)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: r.win
							})
						]
					}, r.y)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2",
				children: BACKTEST.lessons.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l-2 border-accent pl-3 font-sans text-sm leading-relaxed",
					children: l
				}, l))
			})
		]
	});
}
function YearChart() {
	const w = 720;
	const h = 180;
	const pad = 16;
	const years = BACKTEST.years;
	const min = Math.min(...years.flatMap((y) => [y.aw, y.eq])) - 2;
	const max = Math.max(...years.flatMap((y) => [y.aw, y.eq])) + 2;
	const x = (i) => pad + i * 688 / (years.length - 1);
	const y = (v) => pad + (max - v) * 148 / (max - min);
	const path = (key) => years.map((row, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(row[key]).toFixed(1)}`).join(" ");
	const zero = y(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "mt-6 w-full rounded-md border border-line bg-panel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: pad,
				x2: 704,
				y1: zero,
				y2: zero,
				stroke: "currentColor",
				className: "text-faint",
				strokeDasharray: "3 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: path("eq"),
				fill: "none",
				stroke: "#8be9fd",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: path("aw"),
				fill: "none",
				stroke: "#ff9900",
				strokeWidth: "1.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: pad,
				y: 14,
				className: "fill-accent",
				fontSize: "10",
				fontFamily: "IBM Plex Mono",
				children: "ALLWX"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: 70,
				y: 14,
				className: "fill-cyan",
				fontSize: "10",
				fontFamily: "IBM Plex Mono",
				children: "EQUITY"
			})
		]
	});
}
function Fan() {
	const max = MONTE.fan[0].value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl font-sans text-sm leading-relaxed text-muted",
				children: MONTE.caveat
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 font-mono text-[11px] text-muted",
				children: [
					"START £",
					MONTE.start,
					" · £",
					MONTE.monthly,
					"/MO · ",
					MONTE.years,
					"Y · MEAN ",
					MONTE.mean,
					"% · VOL ",
					MONTE.vol,
					"% ·",
					" ",
					MONTE.paths.toLocaleString(),
					" PATHS"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-2",
				children: MONTE.fan.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-between font-mono text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-cyan",
						children: [
							f.p,
							" · ",
							f.label
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: ["£", f.value.toLocaleString("en-GB")]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 bg-bg-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `h-full ${f.p === "P50" ? "bg-accent" : "bg-cyan/50"}`,
						style: { width: `${f.value / max * 100}%` }
					})
				})] }, f.p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 md:grid-cols-2",
				children: MONTE.crossings.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-accent",
							children: c.gate
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-[11px] text-cyan",
							children: c.when
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm text-muted",
							children: c.note
						})
					]
				}, c.gate))
			})
		]
	});
}
function Phases() {
	const [id, setId] = (0, import_react.useState)(PHASES[0].id);
	const p = PHASES.find((x) => x.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: PHASES.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setId(x.id),
					className: `h-11 rounded-sm px-3 font-mono text-xs ${id === x.id ? "bg-cyan text-bg" : "bg-panel text-fg hover:bg-line"}`,
					children: [
						x.name.toUpperCase(),
						" · ",
						x.band
					]
				}, x.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "LINES",
						v: String(p.lines)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "TER",
						v: p.ter
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "GROWTH",
						v: `${p.growth}%`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "REAL",
						v: `${p.real}%`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "DEFENSIVE",
						v: `${p.def}%`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-sans text-sm",
				children: p.action
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-[11px] text-muted",
				children: p.hedged
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 overflow-x-auto rounded-md border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[720px] text-left font-mono text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-2 text-[10px] uppercase text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Ticker"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Line"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "W"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "TER"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "FX"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Role"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: p.rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-cyan",
								children: r.ticker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2",
								children: [
									r.name,
									r.flag === "new" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-up",
										children: "NEW"
									}),
									r.flag === "cut" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-yellow",
										children: "TRIM"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 tabular-nums",
								children: [r.w, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 tabular-nums text-muted",
								children: [r.ter, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-muted",
								children: r.fx
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: r.role
							})
						]
					}, r.ticker)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2",
				children: NEVER.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l-2 border-down pl-3 font-sans text-sm",
					children: n
				}, n))
			})
		]
	});
}
function Gates() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-2xl font-sans text-sm text-muted",
			children: "Five-year candidate tape from the session. Sharpe uses a 3.5 percent cash hurdle. Teaching ranks, not a buy list."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 overflow-x-auto rounded-md border border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[860px] text-left font-mono text-[11px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-bg-2 text-[10px] uppercase text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: "Ticker"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: "5Y ann"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: "Vol"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: "Max DD"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: "Sharpe"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: "Mark"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2",
							children: "Why"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: CANDIDATE_TABLE.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2 text-cyan",
							children: [c.ticker, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-[10px] text-muted",
								children: c.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: num(c.ret5),
							children: [c.ret5.toFixed(2), "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2 tabular-nums",
							children: [c.vol5.toFixed(2), "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2 tabular-nums text-down",
							children: [c.dd5, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 tabular-nums",
							children: c.sharpe.toFixed(2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: c.mark === "ADD" ? "text-up" : c.mark === "VETO" ? "text-down" : c.mark === "WAIT" ? "text-yellow" : "text-muted",
							children: c.mark
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-sans text-[12px] text-muted",
							children: c.why
						})
					]
				}, c.ticker)) })]
			})
		})]
	});
}
function Paths() {
	const gbp = (n) => "£" + Math.round(n).toLocaleString("en-GB");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl font-sans text-sm leading-relaxed text-muted",
				children: CONTRIB_NOTE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] text-cyan",
				children: [
					CONTRIB_ASOF,
					" · ",
					CONTRIB_CAGR.toFixed(2),
					"% CAGR · EDUCATION ONLY"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-md border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[720px] text-left font-mono text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-2 text-[10px] uppercase text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Case"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Yrs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Invested"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Terminal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "ISA"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: CONTRIB_CASES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-cyan",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-sans text-[12px] text-muted",
									children: c.structure
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums",
								children: c.years
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums",
								children: gbp(c.invested)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums text-accent",
								children: gbp(c.terminal)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-sans text-[12px] text-muted",
								children: c.isaBreach
							})
						]
					}, c.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: CONTRIB_CASES.filter((c) => c.id === "c4" || c.id === "c5" || c.id === "c2" || c.id === "flat").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-cyan",
							children: c.name.toUpperCase()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-mono text-[11px] text-muted",
							children: ["Realism ", c.realistic]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm leading-relaxed",
							children: c.verdict
						})
					]
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-sm text-accent",
					children: "CASE 4 PHASES"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: CONTRIB_PHASES_C4.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-line bg-panel p-3 font-mono text-[11px]",
						children: [
							"P",
							p.phase,
							" · ",
							p.when,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							p.monthly,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [
									"In ",
									gbp(p.invested),
									" · out ",
									gbp(p.value)
								]
							})
						]
					}, p.phase))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-sm text-accent",
					children: "CASE 5 PHASES"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: CONTRIB_PHASES_C5.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-line bg-panel p-3 font-mono text-[11px]",
						children: [
							"P",
							p.phase,
							" · ",
							p.when,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							p.monthly,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [
									"In ",
									gbp(p.invested),
									" · out ",
									gbp(p.value)
								]
							})
						]
					}, p.phase))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: CONTRIB_RULES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "font-sans text-sm leading-relaxed text-muted",
					children: r
				}, r))
			})
		]
	});
}
function Twenty() {
	const design = sumTwenty("design20");
	const listed = sumTwenty("live18");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-2xl font-sans text-sm leading-relaxed text-muted",
				children: [
					TWENTY_NAME,
					". Design dated ",
					TWENTY_ASOF,
					". Not the live house. Not the classroom seven. A later-book sketch that buys factor granularity, curve geography, and commodity specificity — and pays for them with gold below the teaching floor and with INXG on probation."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "DESIGN 20",
						v: `${design.toFixed(0)}%`,
						d: "Original vector"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "LISTED 18",
						v: `${listed.toFixed(0)}%`,
						d: "VVAL and TPSA dropped"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "HOLE",
						v: `${(100 - listed).toFixed(0)}pp`,
						d: "Does not confirm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "THEME",
						v: "5%",
						d: "Three tickets"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: TWENTY_SLEEVES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] text-cyan",
							children: s.label.toUpperCase()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-mono text-lg tabular-nums",
							children: [
								s.live,
								"% ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: "listed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 text-xs text-faint",
									children: ["des ", s.design]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm text-muted",
							children: s.job
						})
					]
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-md border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[720px] text-left font-mono text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-2 text-[10px] uppercase text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Ticker"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Sleeve"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "18"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "1Y"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Job"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: TWENTY.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-cyan",
								children: r.ticker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-muted",
								children: r.sleeve
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums",
								children: r.design20
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `px-3 py-2 tabular-nums ${r.live18 === 0 ? "text-down" : ""}`,
								children: r.live18 === 0 ? "—" : r.live18
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums text-muted",
								children: r.ret1y == null ? "—" : `${r.ret1y.toFixed(1)}%`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-sans text-[12px] text-muted",
								children: r.job
							})
						]
					}, r.ticker)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: TWENTY_HOLES.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-accent",
						children: h.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-sans text-sm leading-relaxed text-muted",
						children: h.body
					})]
				}, h.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-md border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[560px] text-left font-mono text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-2 text-[10px] uppercase text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Dim"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Classroom"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "House"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Twenty"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: TWENTY_VS_HOUSE.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-cyan",
								children: r.dim
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-sans text-[12px]",
								children: r.classroom
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-sans text-[12px]",
								children: r.house
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-sans text-[12px]",
								children: r.twenty
							})
						]
					}, r.dim)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: TWENTY_PRINCIPLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-cyan",
						children: p.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-sans text-sm leading-relaxed text-muted",
						children: p.body
					})]
				}, p.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-sm text-accent",
				children: "REJECTED"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: TWENTY_REJECTS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "font-sans text-sm text-muted",
					children: r
				}, r))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-l-2 border-accent pl-3 font-sans text-sm leading-relaxed",
				children: TWENTY_RULE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-sm text-muted",
				children: [
					"Live book stays on",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/house",
						className: "text-accent hover:underline",
						children: "HOUSE"
					}),
					". Classroom object stays on",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pie",
						className: "text-cyan hover:underline",
						children: "MIX"
					}),
					"."
				]
			})
		]
	});
}
function Targets() {
	const start = useBook((s) => s.start);
	const monthly = useBook((s) => s.monthly);
	const years = useBook((s) => s.years);
	const ready = useBook((s) => s.ready);
	(0, import_react.useEffect)(() => {
		useBook.getState().rehydrate();
	}, []);
	const shownStart = ready ? start : 710;
	const shownMonthly = ready ? monthly : 200;
	const shownYears = ready ? years : 20;
	const mid = (0, import_react.useMemo)(() => projectBook(shownStart, shownMonthly, shownYears, MONTE.mean), [
		shownStart,
		shownMonthly,
		shownYears
	]);
	const slow = (0, import_react.useMemo)(() => projectBook(shownStart, shownMonthly, shownYears, 6), [
		shownStart,
		shownMonthly,
		shownYears
	]);
	const phase = mid.value >= 1e5 ? "Phase 3 gate in view" : mid.value >= 5e4 ? "Phase 2 territory" : mid.value >= 1e4 ? "Phase 1 eligible" : "Phase 0 · fund it";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl font-sans text-sm text-muted",
				children: "Teaching projector. Compound the classroom mean, or a slower 6 percent. Saved on this device only. Not a personal plan."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "STARTING BOOK £",
						value: shownStart,
						min: 100,
						max: 2e4,
						step: 10,
						onChange: (n) => useBook.getState().setStart(n)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "MONTHLY £",
						value: shownMonthly,
						min: 0,
						max: 2e3,
						step: 10,
						onChange: (n) => useBook.getState().setMonthly(n)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "YEARS",
						value: shownYears,
						min: 1,
						max: 40,
						step: 1,
						onChange: (n) => useBook.getState().setYears(n)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "CONTRIBUTED",
						v: `£${Math.round(mid.contrib).toLocaleString("en-GB")}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: `AT ${MONTE.mean}%`,
						v: `£${Math.round(mid.value).toLocaleString("en-GB")}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "AT 6%",
						v: `£${Math.round(slow.value).toLocaleString("en-GB")}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "GATE",
						v: phase
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 font-sans text-sm leading-relaxed text-muted",
				children: "Doubling the monthly contribution moves the median more than any sleeve debate available on a starter book. Set the date. Keep the date. File the principle."
			})
		]
	});
}
function Field({ label, value, min, max, step, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block rounded-md border border-line bg-panel p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "number",
				min,
				max,
				step,
				value,
				onChange: (e) => onChange(Number(e.target.value) || 0),
				className: "mt-2 w-full bg-transparent font-mono text-2xl tabular-nums text-fg outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min,
				max,
				step,
				value,
				onChange: (e) => onChange(Number(e.target.value)),
				className: "mt-3 w-full accent-[var(--color-accent)]"
			})
		]
	});
}
function Stat({ k, v, d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-line bg-panel p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] text-muted",
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-lg tabular-nums text-fg",
				children: v
			}),
			d && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-[10px] text-faint",
				children: d
			})
		]
	});
}
function fmt(n) {
	return `${n > 0 ? "+" : ""}${n.toFixed(1)}%`;
}
function num(n) {
	return `px-3 py-2 tabular-nums ${n > 0 ? "text-up" : n < 0 ? "text-down" : "text-muted"}`;
}
//#endregion
export { LabPage as component };
