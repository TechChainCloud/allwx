import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { o as formatTime, t as cn } from "./utils-Cz9L5vlx.mjs";
import { a as Pause, i as Play, n as RotateCw, o as ChevronRight, r as RotateCcw, s as ChevronLeft, t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-B7dq6k6g.js
var SERIES = {
	title: "ALLWX",
	tagline: "All Weather Terminal",
	season: "S1 · CLASSROOM",
	description: "A Bridgewater-inspired teaching terminal. Two-desk briefing. Four regimes. Seven sleeves. Bloomberg functions as the measurement system. Education only — not the All Weather fund, not advice."
};
var JOBS = [
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
		blurb: "A residual claim on thousands of firms. Everyone else gets paid first. The productivity clock showing up in a price.",
		forYoung: "Future wages are already a growth asset. Stacking 100% listed equity on a cyclical labour market is how sequence risk arrives early."
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
		blurb: "A promise of currency, not a request that a company become more valuable. YAS for the mark. GC for the curve.",
		forYoung: "A sterling-hedged IG book is a closer match to the classroom job than an accidental dollar trade dressed as defensive."
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
		blurb: "A scarce non-credit asset. A poor CPI switch. Useful when trust in paperwork wobbles or real yields fall.",
		forYoung: "Substituting miners because a wrapper will not list metal fires the watchman and hires a cyclical stock."
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
		blurb: "Two prices live inside it: real yield and inflation accretion. USGGBE10 is the market's inflation forecast, not yours.",
		forYoung: "US TIPS and index-linked gilts are different bodyguards — different index, different currency. Hire on purpose."
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
		blurb: "A claim on inputs expressed through futures curves. Backwardation can pay. Contango can tax. CL1 and C LC1 are not the index.",
		forYoung: "A decade of contango can look dead while headlines sound dramatic. This sleeve is seasonal in a deeper sense than weather."
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
		blurb: "Duration near zero. A call option on rebalancing. Emergency cash sits outside the mix. This sleeve funds the rebalance.",
		forYoung: "Waiting for a crash in cash is not conservative. The boiler is paid from a buffer. This sleeve rebalances the team."
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
		blurb: "Enormous duration. One crisis shape. That is why gold, linkers and commodities still have jobs. DUR_MID tells you the load.",
		forYoung: "A modest weight can still matter because duration is large. It is the wrong brigade for a supply-shock fire."
	}
];
var WEATHERS = [
	{
		id: "goldilocks",
		name: "Goldilocks",
		growth: "Rising",
		inflation: "Falling",
		paid: ["shares", "bonds"],
		fined: ["gold", "commodities"],
		bbg: "PMI>50 · BEI falling · 2s10s orderly",
		copy: "Earnings expand, discount rates ease. Equities look like genius. Gold looks unemployed. That feeling is the trap.",
		young: "This is the year the group chat is 100% tracker. Remember the jobs you will need when the sun leaves."
	},
	{
		id: "reflation",
		name: "Reflation",
		growth: "Rising",
		inflation: "Rising",
		paid: [
			"shares",
			"commodities",
			"gold"
		],
		fined: ["long", "bonds"],
		bbg: "PMI>50 · BEI rising · curve bear-steep or flat",
		copy: "Earnings can still expand. Inputs get bid. Long nominal duration is a promise of units being marked down.",
		young: "A strong job market plus sticky prices. The 60/40 starts to argue with itself."
	},
	{
		id: "stagflation",
		name: "Stagflation",
		growth: "Falling",
		inflation: "Rising",
		paid: [
			"gold",
			"commodities",
			"tips"
		],
		fined: [
			"shares",
			"bonds",
			"long"
		],
		bbg: "PMI<50 · BEI rising · stocks/bonds corr → 1",
		copy: "The exam 60/40 sat in 2022. Equities and nominal bonds can fall together. If you never hired the inflation team, no one is at home.",
		young: "Pay-rise lagging rent and the weekly shop. This is why the classroom mix is not 90% tracker."
	},
	{
		id: "disinflation",
		name: "Disinflation",
		growth: "Falling",
		inflation: "Falling",
		paid: [
			"long",
			"bonds",
			"cash",
			"gold"
		],
		fined: ["shares", "commodities"],
		bbg: "PMI<50 · BEI falling · bull-steep after inversion",
		copy: "Demand destruction. High-quality duration can do enormous work. Commodities sleep. Cash is dry powder.",
		young: "Hiring freezes meet cheaper petrol. Human capital wobbles the same year listed wealth does."
	}
];
var PRINCIPLES = [
	"Start with what you own if you are wrong, not what will win.",
	"Three clocks: productivity, short-term debt, long-term debt. Locate every print on one of them.",
	"Growth and inflation can each surprise either way. Four rooms. No liquid asset owns all four.",
	"Hire jobs, not stories. If two lines are paid by the same surprise, one of them is costume.",
	"Duration is a tool and a risk. Name it. A thirty-year and an overnight bill are not the same word 'bond'.",
	"Gold is not CPI. Linkers are not gold. Commodities are not linkers. Cash is not duration.",
	"They are supposed to disagree. Score a sleeve against its contract. Do not fire the quiet employee.",
	"Three books. Classroom seven teaches the rooms. Live fourteen is tonight's pad. Prime fifteen is the design lock. Do not flatten them.",
	"2022 is the proof. Prime −5.24 versus S&P −18.64 and 60/40 −16. The inflation exam is the exam sixty-forty was not built for.",
	"2025 is the surprise. Gold, copper, goods carried a reflation year. Already staffed. Not predicted.",
	"At the 2008 trough the all-weather book had more pounds left. That is the behavioural architecture working.",
	"Gold floor is ten in the classroom. Prime prints 9.6. Name the breach. Do not move the floor because a pie looks finished.",
	"INXG is probation. UK CPI is not US CPI. The five-year wreck is still the veto. Write a kill rule.",
	"Walk-back is two keys: PMI under 50 and 2s10s inverted. Tonight both are clear. Observe. Do not pre-position.",
	"Hard cap, walk-back, core drift, satellite drift, 75/25 split, satellite collective 20%. Higher priority eats the cash.",
	"Contribution rate dominates allocation until the book is funded. Doubling £200 to £400 is ~2.5pp of return without rewriting the lock.",
	"Prime cannot honestly do 10–15% for 30 years. That path is a tracker, a tilt, or leverage a retail ISA cannot hold.",
	"Sunny-Day compounds more if you never sell a −30 year. The question is behavioural. Thirteen of eighteen lines are clean rejects.",
	"DBMF is a gated candidate, not a sixteenth lock. T212 AutoInvest first. Then VAGS 13.5 → 10.5. Not before.",
	"TER is the only guaranteed negative return. Prime ~0.14%. Every 0.10pp saved is real terminal value.",
	"Weight changes run on a monthly clock. New lines run on a multi-year clock, triggered by book size, not a loud week.",
	"A protocol written during a drawdown is a rationalisation. Write it first. Do not check the book between contribution dates.",
	"Pain + reflection = progress. Write the if-then. File it. That is the compounding that matters.",
	"Remember the jobs when the tickers change. Fifteen lines or seven. £200 on the 3rd. No hero trades."
];
var SEVEN_QUESTIONS = [
	{
		n: 1,
		q: "Where are we in the short-term debt cycle?",
		how: "2s10s (GC), credit spreads (FICM), PMI (ECO). Expanding, peaking, contracting, recovering."
	},
	{
		n: 2,
		q: "What is the central bank doing, and why?",
		how: "WIRP / USSO / SONIA forwards. Hiking, pausing, cutting. The path, not the last print."
	},
	{
		n: 3,
		q: "What is inflation doing relative to growth?",
		how: "Which of the four rooms. USGGBE10 versus PMI. Which sleeve is paid."
	},
	{
		n: 4,
		q: "What is the curve telling me?",
		how: "GT2 vs GT10. Flattening, inverted, steepening. Bank lending 6–12 months out."
	},
	{
		n: 5,
		q: "What is the dollar doing?",
		how: "DXY. Strong dollar is a headwind for unhedged world equities, gold, commodities."
	},
	{
		n: 6,
		q: "What is priced that reality has not confirmed?",
		how: "The gap between forwards and the tape. That is where the machine pays or fines you."
	},
	{
		n: 7,
		q: "What principle does today teach?",
		how: "One sentence. If-then. File it. Do not skip this."
	}
];
var STUDY = [
	{
		month: "M1",
		title: "The machine and four rooms",
		body: "Economic Machine until you can assign a print without checking. ECO, PMI, the regime grid. Episodes 1–2. Fridge lines 1–3."
	},
	{
		month: "M2",
		title: "Duration, real yield, 2022",
		body: "YAS. DUR_MID. GTII10. Walk 2022 as a table of who was paid. Prime −5.24 versus S&P −18.64 is the public exam. Episodes 3–4."
	},
	{
		month: "M3",
		title: "Three inflation animals",
		body: "Gold, linkers, commodities. They do not clock in on the same day. Gold floor ten. Cap ICOM at ten. Episode 5. HOUSE → PRIME LOCK."
	},
	{
		month: "M4",
		title: "Currency as a decision",
		body: "Sterling household, dollar duration, unhedged equities. VAGS is hedged on purpose. DXY is not decoration."
	},
	{
		month: "M5",
		title: "One cycle, written out",
		body: "1970s, 2008, 2020, 2022, 2025. Paid/fined table. 2008 trough: Prime had more pounds left. That is behaviour, not a CAGR."
	},
	{
		month: "M6",
		title: "A year you would have looked wrong",
		body: "Write the principle before you touch a weight. Insurance looks unemployed in goldilocks. That is the premium."
	},
	{
		month: "M7",
		title: "Two clocks and the six-priority stack",
		body: "Hard cap. Walk-back (two keys). Core drift ±3. Satellite drift ±1.5. 75/25 split. Satellite cap 20%. RULES → HIER. Do not invent a protocol in the pain."
	},
	{
		month: "M8",
		title: "Three books",
		body: "Classroom seven. Live fourteen on T212. Prime fifteen locked 7 Sep 23:08. Do not flatten the ticket pad because a briefing was persuasive. HOUSE → PRIME LOCK."
	},
	{
		month: "M9",
		title: "The argument",
		body: "Tracker, 60/40, Sunny-Day, gold with no coupon, the decade All Weather lagged. DEBATE. Episode 9. Sunny-Day is a behavioural exam, not a TER exam."
	},
	{
		month: "M10",
		title: "Honest tape, the fan, the debit",
		body: "YTD gap versus a tracker is the insurance premium. LAB PATHS: flat £200, Case 4, Case 5. Doubling the debit is ~2.5pp. Prime cannot honestly do 10–15%. Episodes 10–12. HOUSE → LIMITS."
	},
	{
		month: "M11",
		title: "Gates, not costumes",
		body: "INXG probation. DBMF gated on T212 AutoInvest. INGH is an observation. 23×5 does not change the mix. HOUSE → GATE. Next cash: 3 Oct."
	},
	{
		month: "M12",
		title: "Sit with the lock",
		body: "Do not check the book between contribution dates. Walk-back inactive tonight. File the if-then. Fridge. Full lesson EP 14."
	}
];
var DRILLS = [
	{
		id: "pmi",
		headline: "Composite PMI 56. Earnings revisions up. Headline inflation still above the breakeven. Curve no longer inverted.",
		answer: "reflation",
		why: "Growth surprise up, inflation still sticky. Commodities and equities can coexist. Long nominal duration cannot."
	},
	{
		id: "oil",
		headline: "Persistent energy shock. Real incomes squeezed. Companies miss on margins. Policy trapped between prices and jobs.",
		answer: "stagflation",
		why: "Growth down, inflation up. 60/40's two employees fall together. Gold, commodities, linkers still have a job."
	},
	{
		id: "cuts",
		headline: "Unemployment jumps. Inflation undershoots. The central bank cuts hard. Long yields drop.",
		answer: "disinflation",
		why: "Demand destruction. Fire brigade and stabiliser are paid. Equities and many commodities are fined."
	},
	{
		id: "soft",
		headline: "Growth holds. Inflation cools cleanly. Real yields ease a little. Credit spreads quiet.",
		answer: "goldilocks",
		why: "The sunny day. Equities look brilliant. The watchman looks unemployed. That is the brief working."
	}
];
var EPISODES = [
	{
		slug: "the-machine",
		code: "01",
		title: "The machine, not the forecast",
		subtitle: "Three forces. Four rooms. What you own if you are wrong.",
		audio: "/audio/ep01.mp3?v=8",
		duration: 163,
		jobIds: [
			"shares",
			"bonds",
			"gold",
			"tips",
			"commodities",
			"cash",
			"long"
		],
		weatherIds: [
			"goldilocks",
			"reflation",
			"stagflation",
			"disinflation"
		],
		takeaways: [
			"The best mix is not the one where everything wins at once.",
			"Productivity, short-term debt, long-term debt. Locate the print.",
			"Classroom weights are a teaching object. Jobs are the durable thing."
		],
		chapters: [
			{
				t: 0,
				label: "Wrong question"
			},
			{
				t: 33,
				label: "Three forces"
			},
			{
				t: 72,
				label: "Four rooms"
			},
			{
				t: 108,
				label: "The team"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode one. The machine, not the forecast. This is a teaching terminal inspired by Ray Dalio and Bridgewater. It is not their fund. It is not a tip."
			},
			{
				who: "RATES",
				text: "Most books are staffed to win a year. All Weather is staffed to survive the year that wins you. That is a different design problem."
			},
			{
				who: "DESK",
				text: "The useful move that travels from an institutional risk-parity book to a stocks and shares ISA is this. Stop asking what the economy will do next. Ask what you own if you are wrong."
			},
			{
				who: "RATES",
				text: "Three forces. Productivity growth. The slow rise in output per hour. That is why residual claims compound over decades. The short-term debt cycle. Credit expanding and contracting over five to eight years. The long-term debt cycle. Debt building until the old servicing method breaks."
			},
			{
				who: "DESK",
				text: "Every print sits on one of those clocks. Purchasing managers. Payrolls. Consumer prices. The two-year. The ten-year. The dollar. If you cannot name the clock, you are reading a story."
			},
			{
				who: "RATES",
				text: "Open Eco for the surprise versus consensus. Open G C for the curve. Those are instruments, not decoration."
			},
			{
				who: "DESK",
				text: "Inside the short cycle, two surprises do the work. Growth hotter or colder than priced. Inflation hotter or colder than priced. Two signs. Two directions. Four rooms."
			},
			{
				who: "RATES",
				text: "Goldilocks. Growth up, inflation down. Reflation. Both up. Stagflation. Growth down, inflation up. Disinflation. Both down. No liquid asset owns all four. That is the argument for a team."
			},
			{
				who: "DESK",
				text: "Classroom object. Thirty world equities. Eighteen global investment grade. Fifteen gold. Fourteen linkers. Ten broad commodities. Seven cash-like. Six very long Treasuries. The numbers are a teaching object. The job descriptions are the durable thing."
			},
			{
				who: "RATES",
				text: "If two lines are paid by the same surprise, you do not have two employees. You have one employee in two uniforms. That is how sixty-forty looks diversified on a pie chart and concentrated in a stagflation."
			},
			{
				who: "DESK",
				text: "They are supposed to disagree. Score a sleeve against its contract, not against the winner of the year. Rebalance. Write the principle. Pain plus reflection equals progress."
			},
			{
				who: "RATES",
				text: "Next: four rooms as a function, not a vibe. What do you own if you are wrong. That is the only question that matters on this desk."
			}
		]
	},
	{
		slug: "four-rooms",
		code: "02",
		title: "Four rooms, three forces",
		subtitle: "Regime identification is a function, not a vibe.",
		audio: "/audio/ep02.mp3?v=8",
		duration: 142,
		jobIds: [
			"shares",
			"bonds",
			"gold",
			"commodities",
			"long"
		],
		weatherIds: [
			"goldilocks",
			"reflation",
			"stagflation",
			"disinflation"
		],
		takeaways: [
			"Prices move on surprises relative to what was already priced.",
			"Risk parity is a sentence about risk, not equal cash weights.",
			"Human capital is already a growth asset. That changes the listed mix."
		],
		chapters: [
			{
				t: 0,
				label: "Surprises"
			},
			{
				t: 35,
				label: "The grid"
			},
			{
				t: 99,
				label: "Risk, not cash"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode two. Four rooms, three forces. Regime identification is a function. Not a headline. Not a group chat."
			},
			{
				who: "RATES",
				text: "Prices move on surprises relative to what was already priced. That is finance in one sentence. A consumer-price print that matches the breakeven is not news. A print that does not, is."
			},
			{
				who: "DESK",
				text: "Open the ten-year breakeven. That is the market's inflation forecast. Not last month's newspaper. Three screens: Eco for growth and inflation surprises. G C for two-tens. Forward curves for what is priced that has not happened."
			},
			{
				who: "RATES",
				text: "Goldilocks. Growth up, inflation down. Earnings expand. Discount rates ease. Equities look like genius. Gold looks unemployed. That feeling is the sun. It is not a strategy."
			},
			{
				who: "DESK",
				text: "Reflation. Both up. Equities can still work. Commodities often work. Long nominal bonds usually do not. Sixty-forty starts to argue with itself. Classroom tape as we teach it: late expansion, reflation, with a stagflation tail."
			},
			{
				who: "RATES",
				text: "Stagflation. Growth down, inflation up. Twenty twenty-two. Parts of the nineteen-seventies. Equities and ordinary bonds can fall together. Correlations go to one. If you never hired gold, commodities and linkers, you have a good-weather household with an optimistic name."
			},
			{
				who: "DESK",
				text: "Disinflation. Both down. Demand destruction. High-quality duration can do enormous work. Equities hurt. Commodities sleep. Cash is powder for the rebalance. This is the room the fire brigade was hired for."
			},
			{
				who: "RATES",
				text: "All Weather is not equal cash in four buckets. Assets have different volatilities. Equal cash is not equal risk. The institutional version uses leverage so each stream speaks at similar volume. A retail ISA cannot copy that. Should not pretend to."
			},
			{
				who: "DESK",
				text: "The honest translation. Do not let one job shout the others down because it is louder per pound. That is why the classroom gives equities thirty, not sixty. Sixty is a growth-shock mix wearing a complete-house costume."
			},
			{
				who: "RATES",
				text: "If you are twenty-five to thirty-five, you already own a growth asset that does not sit in the pie. Future wages. When the listed engine is marked down twenty, the same weather often hits the bonus. Sequence risk arrives early."
			},
			{
				who: "DESK",
				text: "Principle. If two holdings are paid by the same surprise, you do not have two employees. Next: residual claims. A tracker is a job. It is not a religion."
			}
		]
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
			"Do not hire a theme by accident and keep calling it the market."
		],
		chapters: [
			{
				t: 0,
				label: "The slogan"
			},
			{
				t: 47,
				label: "Discount rates"
			},
			{
				t: 90,
				label: "Why not 100"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode three. Residual claims. The loudest advice on the internet is simple. Put it all in a global tracker and wait."
			},
			{
				who: "RATES",
				text: "There is a true sentence inside that slogan. Over long horizons, a diversified basket of residual claims has compounded because people found ways to produce more per hour. That is productivity. The first of the three forces."
			},
			{
				who: "DESK",
				text: "It is why the household hires a growth engine at all. In the classroom, world equities are thirty percent. Not one hundred. Not sixty. The job is not to be the whole firm. The job is to make the household richer when enterprise is being rewarded."
			},
			{
				who: "RATES",
				text: "A share is a residual claim. Lenders, landlords, staff, the tax authority. Everyone else gets paid first. What is left is a claim on the surplus. When the surplus is growing, that claim is a wonderful employee. When it is not, you find out what residual means."
			},
			{
				who: "DESK",
				text: "When yields rise, the discount rate on future earnings rises. Growth-style names, whose cash flows sit further out, get hit harder. That is duration in equity clothing. Price to earnings without the rate context is a poster, not an analysis."
			},
			{
				who: "RATES",
				text: "A world index is a claim on thousands of firms. A single theme fund about the story of the month is a concentration. Do not hire a theme by accident and keep calling it the market."
			},
			{
				who: "DESK",
				text: "Why not one hundred percent if you are young? Because your labour market is already a growth asset. When the listed engine is marked down twenty, the same weather often hits the wage. The insurance jobs exist so a bad year does not force you to sell the compounding engine."
			},
			{
				who: "RATES",
				text: "A retiree fears sequence risk because withdrawals lock in a low. A thirty-year-old fears a quieter version. Stopping the contributions. Firing gold because it lagged. Adding an eighth story. Same error. Different costume."
			},
			{
				who: "DESK",
				text: "Principle. Do not treat the growth engine as insurance. That is how people end up with a single-employee firm and call it a portfolio. Next: a yield is a price. Duration is a loaded weapon."
			}
		]
	},
	{
		slug: "duration-weapon",
		code: "04",
		title: "Duration is a loaded weapon",
		subtitle: "YAS. GC. 2022 sat the exam 60/40 had not revised for.",
		audio: "/audio/ep04.mp3?v=8",
		duration: 109,
		jobIds: ["bonds", "long"],
		weatherIds: [
			"goldilocks",
			"disinflation",
			"stagflation"
		],
		takeaways: [
			"A thirty-year and an overnight bill are not the same defensive asset.",
			"2022: equities and ordinary bonds can fall together.",
			"Sterling-hedged IG is closer to the job than accidental dollar duration."
		],
		chapters: [
			{
				t: 0,
				label: "A yield is a price"
			},
			{
				t: 32,
				label: "YAS"
			},
			{
				t: 86,
				label: "The curve"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode four. Duration is a loaded weapon. A yield is a price. When it rises, the existing bond falls. When it falls, the bond rises. Everything that says bonds rallied is that sentence wearing a coat."
			},
			{
				who: "RATES",
				text: "Open Yas. Modified duration is the first-order sensitivity. Duration of eight: a one-point rise in yield knocks about eight percent off the price. Calling a thirty-year and an overnight bill both bonds is how households get surprised."
			},
			{
				who: "DESK",
				text: "The money-market screen is the front end. The thirty-year is the fire brigade. They are not colleagues. They are different animals. Employee two is global investment grade, about eighteen percent, often sterling-hedged in a UK wrapper. A high-quality bond is primarily asking the borrower to keep a promise."
			},
			{
				who: "RATES",
				text: "When growth undershoots and policy eases, existing paper reprices higher. That is the brief. The failure mode is unexpected inflation and the hiking cycle that follows. Twenty twenty-two was written in public. Equities down. Ordinary bonds down. Sixty-forty sat an exam it had not revised for."
			},
			{
				who: "DESK",
				text: "Open credit spreads. When they blow out, the bond you thought was a promise is quietly hiring a bit of the equity employee. Investment grade is not a single weather. It is a promise plus a little residual claim. Name the mix."
			},
			{
				who: "RATES",
				text: "The curve is a distributed forecast. Two-tens. Do not sell everything when the slope goes negative. Read it as a path. Then ask whether Eco agrees. Inversion has historically led recession with a lag. It is a probability, not a clock."
			},
			{
				who: "DESK",
				text: "World interest-rate probability. The market's map of the next meetings. Hiking, pausing, cutting. The path, not the last print. A sixty-forty is a reasonable object when growth shocks dominate and inflation shocks are rare."
			},
			{
				who: "RATES",
				text: "If your mix only works when inflation stays boring, you do not have an all-weather mix. Sterling household, dollar duration: decide, do not inherit. Currency is a decision. It is not decoration."
			},
			{
				who: "DESK",
				text: "Principle. Diversified high-quality nominal bonds keep the household steadier when growth undershoots and policy eases. Do not confuse this employee with the fire brigade. Next: three inflation animals people mash into one word."
			}
		]
	},
	{
		slug: "three-animals",
		code: "05",
		title: "Three inflation animals",
		subtitle: "Gold, linkers, commodities. They do not clock in on the same day.",
		audio: "/audio/ep05.mp3?v=8",
		duration: 117,
		jobIds: [
			"gold",
			"tips",
			"commodities"
		],
		weatherIds: ["reflation", "stagflation"],
		takeaways: [
			"Gold is a poor inflation switch and a useful night watchman.",
			"TIPS can fall when real yields jump even as CPI is hot.",
			"Commodities are rolling futures, not a vault of barrels."
		],
		chapters: [
			{
				t: 0,
				label: "Not one hedge"
			},
			{
				t: 17,
				label: "Gold"
			},
			{
				t: 49,
				label: "Linkers"
			},
			{
				t: 85,
				label: "Curves"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode five. Three inflation animals. People say inflation hedge as if it were one creature. It is at least three. They do not clock in on the same day."
			},
			{
				who: "RATES",
				text: "Gold. Fifteen percent. It pays no wage. During long calm expansions with rising real yields, that looks like a disadvantage. The absence of a promise is also why it behaves differently. It is a poor consumer-price switch. It is a useful night watchman."
			},
			{
				who: "DESK",
				text: "Real yields falling. Paperwork wobbling. Some geopolitics. That is the watchman's weather. Miners are not gold. Substituting miners because a wrapper will not list metal fires the watchman and hires a cyclical stock."
			},
			{
				who: "RATES",
				text: "Linkers. Fourteen percent. Ordinary bonds promise currency. A linker promises currency contractually adjusted by an index, with a lag. Two prices live inside it. Real yield, and inflation accretion."
			},
			{
				who: "DESK",
				text: "If real yields jump, the mark-to-market can be ugly even as consumer prices print hot. Twenty twenty-two taught that in public. US tips and index-linked gilts are not the same bodyguard. Hire on purpose."
			},
			{
				who: "RATES",
				text: "Broad commodities. Ten percent. A claim on inputs, expressed through futures curves. When the stuff everyone needs becomes scarce, the same shock that hurts consumers and nominal bonds can lift the sleeve that owns the inputs."
			},
			{
				who: "DESK",
				text: "Backwardation can pay a roll yield. Contango can tax it. A demand boom is reflation. A supply shock with sick growth is closer to stagflation. Oil is not the index. A single metal is not the index."
			},
			{
				who: "RATES",
				text: "Principle. Gold is not consumer prices. Linkers are not gold. Commodities are not linkers. Mash them together and you will fire the wrong one. Next: dry powder, and a specialist hired for one crisis shape."
			}
		]
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
			"A six-percent sleeve can still matter because duration is large."
		],
		chapters: [{
			t: 0,
			label: "BTMM"
		}, {
			t: 51,
			label: "GT30"
		}],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode six. Powder and the brigade. Not every pound needs maximum drama. Employee six is cash-like. Seven percent. A money-market fund that actually is overnight. Duration near zero. A call option on rebalancing."
			},
			{
				who: "RATES",
				text: "Without powder, rebalancing is a theory you practise on paper. The failure mode is the quiet thief. Parking everything until a crash. Betting a date arrives before inflation and missed compounding have done their work. That date is not on the calendar."
			},
			{
				who: "DESK",
				text: "Emergency cash sits outside the mix. It pays the boiler. This sleeve rebalances the team. Stay available. Do not try to be a hero. Waiting for a crash in cash is not conservative. It is a forecast wearing a cautious coat."
			},
			{
				who: "RATES",
				text: "Employee seven is very long Treasuries. Six percent. Duration can be the better part of two decades. Look at modified duration. That is the load."
			},
			{
				who: "DESK",
				text: "In a classic demand-destruction recession this is one of the few liquid instruments that can pay a lot while equities are marked down. Two thousand and eight. Parts of two thousand and twenty. A modest weight can still matter because duration is large."
			},
			{
				who: "RATES",
				text: "It is the wrong brigade for a fiscal inflation fire. Or a supply-shock fire. Calling long Treasuries safe in every crisis is a category error. That is why the household also hires linkers, commodities and gold."
			},
			{
				who: "DESK",
				text: "Principle. Respond to a deflationary growth crash, then stand down when the fire is somewhere else. Next: the correlations that lie. Twenty twenty-two as a tutorial."
			}
		]
	},
	{
		slug: "correlations-lie",
		code: "07",
		title: "Correlations that lie",
		subtitle: "Sample statistics are not laws of nature. 2022 was the tutorial.",
		audio: "/audio/ep07.mp3?v=8",
		duration: 95,
		jobIds: [
			"shares",
			"gold",
			"long",
			"commodities"
		],
		weatherIds: [
			"goldilocks",
			"reflation",
			"stagflation",
			"disinflation"
		],
		takeaways: [
			"Score the sleeve against the contract, not against the winner of the year.",
			"Equities and bonds can go to one in stagflation. That is why the inflation team exists.",
			"Rebalancing harvests disagreement. Skipping the meeting is how you become a one-employee firm again."
		],
		chapters: [
			{
				t: 0,
				label: "The hard part"
			},
			{
				t: 52,
				label: "When 60/40 dies"
			},
			{
				t: 103,
				label: "Rebalance"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode seven. Correlations that lie. The hard part is not the diagram. It is the year three employees look stupid."
			},
			{
				who: "RATES",
				text: "The psychologically hard part is not the diagram. It is the year in which three employees look stupid. In a sunny growth year, gold looks like a pet rock. In a recession, the growth engine looks like a saboteur."
			},
			{
				who: "DESK",
				text: "If you score each sleeve against the best of that year, you will fire the person you needed next. That is performance chasing. It has a respectable vocabulary. The better audit: when its weather arrived, did it do the job on the contract?"
			},
			{
				who: "RATES",
				text: "Correlations are sample statistics. They are not laws of nature. Equities and bonds can go to one in a stagflation. Gold and the dollar can rise together in a global scare. A model that treats last decade's matrix as next decade's physics will be punctual and wrong."
			},
			{
				who: "DESK",
				text: "Open the portfolio risk screen. It will show you the last ten years. It will not show you the next regime unless you stress it. That is what the case studies on this terminal are for. Sixty-forty. A hundred percent tracker. Permanent portfolio. Endowment cartoon. Golden butterfly. Sit each mix in each room. Watch who is at home."
			},
			{
				who: "RATES",
				text: "Twenty twenty-two was the tutorial written in public. Inflation surprise. Hiking cycle. Stocks and ordinary bonds down together. The sixty-forty had been trained on a growth-shock world. The inflation team — gold, commodities, linkers — was the set of jobs that still had a brief."
			},
			{
				who: "DESK",
				text: "Nineteen seventy-three, seventy-four. Oil shock. Stagflation. Two thousand and eight. Demand destruction. Duration and quality paid. The twenty-tens. Goldilocks for a sixty-forty. Gold looked unemployed. Different rooms. Different paid lists. Same machine."
			},
			{
				who: "RATES",
				text: "Rebalancing is how disagreement is harvested. Too frequent and you harvest noise. Too rare and the household silently becomes a one-employee firm again. Annual, or a band around each weight, is a common classroom answer. Pick one. Write it down. Keep the meeting."
			},
			{
				who: "DESK",
				text: "If you are twenty-five to thirty-five, the behavioural risk is not only selling the crash. It is adding an eighth theme fund because a story is loud. Do not replace gold with miners and keep the word gold. Do not replace a world index with last year's winner and keep the word diversified."
			},
			{
				who: "RATES",
				text: "The rule. Do not fire the quiet employee just because somebody else had a great year. Next: the seven questions. A morning operating system. The wrapper. The household that is larger than the pie."
			}
		]
	},
	{
		slug: "seven-questions",
		code: "08",
		title: "The seven questions",
		subtitle: "A morning operating system. ISA, human capital, the fridge.",
		audio: "/audio/ep08.mp3?v=8",
		duration: 96,
		jobIds: [
			"shares",
			"bonds",
			"gold",
			"tips",
			"commodities",
			"cash",
			"long"
		],
		weatherIds: [
			"goldilocks",
			"reflation",
			"stagflation",
			"disinflation"
		],
		takeaways: [
			"The pie is not the whole balance sheet. Future wages are already a growth asset.",
			"Walk-back is two keys. Seven questions every session. Write the if-then.",
			"Weight changes monthly. New lines on a multi-year clock. Do not check the book between contribution dates."
		],
		chapters: [
			{
				t: 0,
				label: "Balance sheet"
			},
			{
				t: 40,
				label: "The wrapper"
			},
			{
				t: 87,
				label: "Seven questions"
			},
			{
				t: 141,
				label: "Fridge"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode eight. The seven questions. If you are twenty-five to thirty-five, the pie is not the whole balance sheet."
			},
			{
				who: "RATES",
				text: "If you are twenty-five to thirty-five, the pie is not the whole balance sheet. The whole balance sheet is your future wages, any student loan, rent or a mortgage, a cash buffer outside the market, a pension you barely look at, and then, if you are lucky, an ISA with room left in the allowance."
			},
			{
				who: "DESK",
				text: "The classroom weights — thirty, eighteen, fifteen, fourteen, ten, seven, six — are a teaching object. They are not sacred. Not optimal. Not personalised. A thirty-year-old with rising wages and a thirty-year-old without them are not the same household."
			},
			{
				who: "RATES",
				text: "Human capital is a growth asset. That is why this decade can often bear more listed equity than a retiree. It is also why you should not delete the insurance jobs. The wage does not pay out on the day the tracker is marked down twenty."
			},
			{
				who: "DESK",
				text: "A UK stocks-and-shares ISA is a tax wrapper, not an asset class. Eligibility restricts what may sit in it. Substitutions must be checked against the job. None of this is legal advice. Rules change. The wrapper is not the portfolio."
			},
			{
				who: "RATES",
				text: "Every session, before you touch a weight, run the seven questions. One. Where are we in the short-term debt cycle. Two-tens. Credit spreads. Purchasing managers. Expanding, peaking, contracting, recovering."
			},
			{
				who: "DESK",
				text: "Two. What is the central bank doing, and why. The path, not the last print. Three. Inflation versus growth. Which of the four rooms. Breakeven versus purchasing managers. Which sleeve is paid."
			},
			{
				who: "RATES",
				text: "Four. What is the curve telling me. Flattening, inverted, steepening. Bank lending six to twelve months out. Five. What is the dollar doing. A strong dollar is a headwind for unhedged world equities, gold, commodities. Decide the currency. Do not inherit it."
			},
			{
				who: "DESK",
				text: "Six. What is priced that reality has not confirmed. The gap between forwards and the tape. That is where the machine pays or fines you. Seven. What principle does today teach. One sentence. If-then. File it. Do not skip this."
			},
			{
				who: "RATES",
				text: "Pain plus reflection equals progress. Know what you do not know. Seek the most believable person who disagrees with you. Implementation: two funds with the same index name can be different products. If a fund dies, hire another that does the same job."
			},
			{
				who: "DESK",
				text: "No miners pretending to be gold. No eighth theme fund. Seven sleeves. Four rooms. Three forces. The forecast does not have to be perfect. The team does have to be complete."
			},
			{
				who: "RATES",
				text: "This terminal is for education only. A classroom weight is not a personal plan. Save the jobs. Tickers will move. ALLWX desk. Out."
			}
		]
	},
	{
		slug: "if-you-are-wrong",
		code: "09",
		title: "If you are wrong",
		subtitle: "The defence. Why not a tracker. Why not 60/40. Why seven.",
		audio: "/audio/ep09.mp3?v=8",
		duration: 90,
		season: "S2",
		jobIds: [
			"shares",
			"bonds",
			"gold",
			"tips",
			"commodities"
		],
		weatherIds: ["goldilocks", "stagflation"],
		takeaways: [
			"A tracker is a goldilocks strategy wearing a long-term label.",
			"Sixty-forty never hired the inflation team. 2022 sat that exam in public.",
			"Sunny-Day is a behavioural exam. Diversification is streams, not ticker count."
		],
		chapters: [
			{
				t: 0,
				label: "The slogan"
			},
			{
				t: 32,
				label: "Two employees"
			},
			{
				t: 64,
				label: "Seven"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Season two. Episode nine. If you are wrong. A sceptic will ask why you did not just buy a world tracker and leave it."
			},
			{
				who: "RATES",
				text: "A world tracker is a single-regime bet. Paid in goldilocks. Paid in early reflation. Fined when equities and ordinary bonds fall together. Fined again in a demand crash. Thirty percent is the correct growth job. One hundred percent is a sunny-day religion."
			},
			{
				who: "DESK",
				text: "Why not sixty-forty. Because twenty twenty-two sat that exam in public. Both legs on the wrong side of an inflation shock. The classroom holds about thirty-nine percent in real assets to break that correlation. Gold, linkers, a commodity basket. Jobs sixty-forty never hired."
			},
			{
				who: "RATES",
				text: "Why seven lines, not twelve. Diversification is uncorrelated streams, not ticker count. An eighth line paid by the same surprise is costume. At a starter book, seven is the answer to spread and minimum size. Complexity is not coverage."
			},
			{
				who: "DESK",
				text: "Why an ISA. Because coupons, roll and gains compound gross inside the wrapper. That is structure. Not tax advice. Rules change. The wrapper is still the classroom's largest operational advantage for a sterling household."
			},
			{
				who: "RATES",
				text: "What if the regime reading is wrong. That is the design. Every transition still leaves someone at their desk. The real-asset block is not a token ten percent for a reason. Next: the honest numbers. The year the machine lagged a tracker, on purpose."
			}
		]
	},
	{
		slug: "honest-numbers",
		code: "10",
		title: "Honest numbers",
		subtitle: "The 370 basis-point gap. Scale. What the framework is for.",
		audio: "/audio/ep10.mp3?v=8",
		duration: 80,
		season: "S2",
		jobIds: [
			"shares",
			"gold",
			"commodities",
			"long"
		],
		weatherIds: ["reflation", "goldilocks"],
		takeaways: [
			"Lagging a tracker in reflation is the insurance premium, not a bug.",
			"At a starter book, contribution direction is the only cheap rebalance.",
			"Doubling the debit is ~2.5pp of return without rewriting the lock."
		],
		chapters: [
			{
				t: 0,
				label: "The gap"
			},
			{
				t: 32,
				label: "Scale"
			},
			{
				t: 62,
				label: "Behaviour"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode ten. Honest numbers. This year the classroom lagged a single world tracker by about three hundred and seventy basis points. Say it without a costume."
			},
			{
				who: "RATES",
				text: "A world tracker printed a bit over twelve. The weighted seven-line mix printed about eight and a half. Residual claims were the paying job. The defensive block contributed almost nothing. Commodities carried part of the insurance. That is reflation arithmetic."
			},
			{
				who: "DESK",
				text: "Three-year gold in the wrapper is more than double. That sentence is the other half of the year. Insurance looks unemployed until the room changes. Twenty twenty-two was the room. Twenty twenty-four and twenty-five were not."
			},
			{
				who: "RATES",
				text: "The book in the brief is seven hundred and ten pounds. Most of the precision we taught — three-point drift, phase gates, currency overlays — cannot be applied cheaply at that size. New cash pointed at the thin sleeve is the rebalance. The rest is rehearsal."
			},
			{
				who: "DESK",
				text: "The comparison that matters is not this year's gap. It is whether a person who understands the jobs sells the growth engine twenty-five percent down. The data cannot answer that. The framework can. Stage four has not arrived yet. The test is still ahead."
			},
			{
				who: "RATES",
				text: "Set the contribution date. Read the seven questions. Do not act on them until scale and a real trigger arrive. Accept that the next year of this book should look boring. Next: the years that paid, and the year that cost twenty-four points of relative pride."
			}
		]
	},
	{
		slug: "years-that-paid",
		code: "11",
		title: "Years that paid",
		subtitle: "2008, 2013, 2022, 2025. Sharpe versus cumulative pride.",
		audio: "/audio/ep11.mp3?v=8",
		duration: 73,
		season: "S2",
		jobIds: [
			"shares",
			"gold",
			"commodities",
			"long"
		],
		weatherIds: [
			"stagflation",
			"disinflation",
			"goldilocks"
		],
		takeaways: [
			"2008: classroom −3.9 versus equity −18.8. At the trough, more pounds left.",
			"2013 is the honest invoice for owning gold through goldilocks.",
			"2022 ETF Prime −5.24 is the proof. 2025 is the surprise. Cumulative gap is the premium."
		],
		chapters: [
			{
				t: 0,
				label: "2008"
			},
			{
				t: 28,
				label: "2013"
			},
			{
				t: 62,
				label: "The fan"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode eleven. Years that paid. Proxy backtest. Not the live share classes. World equities, sterling gold, a commodity total-return index, long Treasuries. Annual rebalance. Gaps in the tape. Treat it as a classroom, not an audit."
			},
			{
				who: "RATES",
				text: "Two thousand and eight. Classroom minus three point nine. Equity minus eighteen point eight. Gold paid in sterling. The fire brigade paid. Sixty-forty still lost eight. That fifteen-point gap is why the real-asset block exists."
			},
			{
				who: "DESK",
				text: "Two thousand and thirteen. Gold crashed twenty-eight in sterling. Commodities fell eleven. The classroom stayed just positive and finished twenty-four points behind a tracker. That is the invoice. Insurance looks stupid in a pure goldilocks with a simultaneous gold washout."
			},
			{
				who: "RATES",
				text: "Twenty twenty-two. Inflation shock. Commodities carried the architecture. Twenty twenty-five. Gold in sterling had its monster year. A fifteen-percent watchman moved the pie because its weather arrived. The machine won three years in the table. All of them were rooms a tracker does not own well."
			},
			{
				who: "DESK",
				text: "Twenty-year cumulative: tracker plus four hundred and twenty. Classroom plus one hundred and eighty-six. Higher Sharpe, smaller worst year, less compounding. Whether the premium was cheap depends on the next twenty years, not the last."
			},
			{
				who: "RATES",
				text: "A teaching fan. Seven hundred and ten start. Two hundred a month. Classroom mean and vol. Median near six figures at year twenty. Fifth percentile still above contributions. Double the monthly gift and you move the median more than any tilt. Next: phases, floors, and the instrument the data killed."
			}
		]
	},
	{
		slug: "phases-and-floors",
		code: "12",
		title: "Phases and floors",
		subtitle: "IWVL at ten thousand. INXG vetoed. What never changes.",
		audio: "/audio/ep12.mp3?v=8",
		duration: 84,
		season: "S2",
		jobIds: [
			"shares",
			"bonds",
			"gold",
			"cash",
			"long"
		],
		weatherIds: ["reflation", "stagflation"],
		takeaways: [
			"Value tilt is the only data-supported upgrade at Phase 1. Book size opens lines.",
			"INXG is probation in Prime, vetoed in the classroom. Theory is not a ticker.",
			"Gold floor ten. Commodity cap ten. Fire brigade six until Stage 5 confirms."
		],
		chapters: [
			{
				t: 0,
				label: "Value"
			},
			{
				t: 35,
				label: "Veto"
			},
			{
				t: 70,
				label: "Floors"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode twelve. Phases and floors. Book size opens lines. Markets do not. Phase zero is seven jobs. Contribute. Do not decorate."
			},
			{
				who: "RATES",
				text: "Phase one, ten thousand. World value at ten, funded from the cap-weight engine. Five-year Sharpe better than the engine. Reflation with rising real yields is its weather. EM local bonds at five, funded from sterling-hedged investment grade. Ugly Sharpe. Lowest drawdown in the candidate set. Correlation is the job."
			},
			{
				who: "DESK",
				text: "UK linkers are vetoed. Five-year wreck. Fifty percent peak to trough. The gilt crisis plus extreme duration destroyed the instrument that sounded like the right sterling inflation hedge. Theory survives. This ticker does not, at current real yields. Do not add it to look complete."
			},
			{
				who: "RATES",
				text: "Phase two, fifty thousand. A small minimum-volatility sleeve inside equities is a buffer, not a new room. Cash-like steps up so the bay can fund a rebalance in pounds. Write the dollar decision. Eighty percent unhedged is no longer an accident."
			},
			{
				who: "DESK",
				text: "Three floors that do not move. Gold stays at fifteen and never below ten. Commodities hard-capped at ten because the wrapper is synthetic. Long Treasuries stay six until Stage four or five confirms. Scale does not rewrite a regime residual."
			},
			{
				who: "RATES",
				text: "After a hundred thousand there are no new lines. The bay grows. The protocol is denominated in pounds. Contribution and not overriding amber are the whole remaining craft. ALLWX desk. Out."
			}
		]
	},
	{
		slug: "prime-sentences",
		code: "13",
		title: "Fifteen sentences",
		subtitle: "Invictus Prime. Two new sterling tickets. The 20-year chart does not owe you complexity.",
		audio: "/audio/ep13.mp3?v=8",
		duration: 108,
		season: "S2",
		jobIds: [
			"shares",
			"bonds",
			"gold",
			"tips",
			"commodities",
			"cash",
			"long"
		],
		weatherIds: [
			"reflation",
			"stagflation",
			"disinflation"
		],
		takeaways: [
			"Prime is the design lock, 7 Sep 23:08. The live ISA is still fourteen lines.",
			"INXG is hired on probation. Gold 9.6 is a named floor breach. DBMF is a gate.",
			"More sentences did not win the 20-year proxy. The debit on the 3rd does the compounding."
		],
		chapters: [
			{
				t: 0,
				label: "Prime"
			},
			{
				t: 40,
				label: "Two tickets"
			},
			{
				t: 80,
				label: "Chart"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. Episode thirteen. Fifteen sentences. Invictus Prime is a design lock. It is not tonight's ticket pad. Classroom seven still teaches the rooms. The live sterling book is still fourteen lines at nine hundred and fifty pounds."
			},
			{
				who: "RATES",
				text: "Prime adds two sterling rates tickets. Short gilts as the ladder rung between cash and the aggregate. UK linkers as a CPI contract TIPS cannot write. It drops the managed-futures alt. That is a different animal, not a fifth weather."
			},
			{
				who: "DESK",
				text: "INXG is the argument. Twenty twenty-two sterling inflation ran hotter than the US print. That is the job. The five-year wreck and a fifty percent drawdown are the veto. Prime sizes it at three point eight so a second gilt crisis cannot own the household. Probation. Written kill rule. Not a cleared gate."
			},
			{
				who: "RATES",
				text: "Gold prints nine point six. The classroom floor is ten. Name the breach. Do not move the floor because a pie looks finished."
			},
			{
				who: "DESK",
				text: "Satellites stay six tickets and twelve percent. Defence, chips, copper miners, industrials, healthcare, uranium. Residual claims in costume. A fifty percent wipe in the sleeve is painful. It is not structural."
			},
			{
				who: "RATES",
				text: "Twenty-year proxy. Prime one hundred pounds becomes three three nine. One-Pie becomes three five three. Sixty-forty wins the sunny chart and fails the inflation exam. Complexity is not a return. The year that paid the whole machine was twenty twenty-five — gold, goods, the engine, the themes. Already staffed. Not predicted."
			},
			{
				who: "DESK",
				text: "Do not rebuild the live book this week. Third of October still routes the book you actually hold. Fifteen lines or seven. Contribution on a date. Walk-back. No hero trades. ALLWX desk. Out."
			}
		]
	},
	{
		slug: "full-lesson",
		code: "14",
		title: "The full lesson",
		subtitle: "Four rooms. Seven jobs. Three books. One rule. Atlas and Rigel, start to finish.",
		audio: "/audio/full-lesson.mp3?v=1",
		duration: 689,
		season: "S2",
		jobIds: [
			"shares",
			"bonds",
			"gold",
			"tips",
			"commodities",
			"cash",
			"long"
		],
		weatherIds: [
			"goldilocks",
			"reflation",
			"stagflation",
			"disinflation"
		],
		takeaways: [
			"What you own if you are wrong is the only design question.",
			"Classroom seven, live fourteen, Prime fifteen — do not confuse the books.",
			"Six-priority stack. Walk-back inactive. £200 on the 3rd. No hero trades."
		],
		chapters: [
			{
				t: 0,
				label: "Open"
			},
			{
				t: 90,
				label: "Rooms"
			},
			{
				t: 180,
				label: "Seven jobs"
			},
			{
				t: 360,
				label: "Books"
			},
			{
				t: 480,
				label: "Rules"
			},
			{
				t: 600,
				label: "Fridge"
			}
		],
		transcript: [
			{
				who: "DESK",
				text: "ALLWX desk. This is the full lesson. Not a forecast. Not Bridgewater Associates. Not the All Weather fund."
			},
			{
				who: "RATES",
				text: "The useful question is not what the economy will do next. It is what you own if you are wrong."
			},
			{
				who: "DESK",
				text: "Four rooms. Seven classroom jobs. Three books that must not be confused. Contributions on a date. Walk-back. No hero trades."
			},
			{
				who: "RATES",
				text: "Fifteen lines or seven. The cycle continues. That is the only forecast with a clean hit rate."
			},
			{
				who: "DESK",
				text: "ALLWX desk. Out."
			}
		]
	},
	{
		slug: "seven-jobs",
		code: "00",
		title: "Seven jobs — original lecture",
		subtitle: "The first teaching tape. Diversification by economic driver.",
		audio: "/audio/seven-jobs.mp3",
		duration: 817,
		season: "S0",
		jobIds: [
			"shares",
			"bonds",
			"gold",
			"tips",
			"commodities",
			"cash",
			"long"
		],
		weatherIds: [
			"goldilocks",
			"reflation",
			"stagflation",
			"disinflation"
		],
		takeaways: [
			"Hire jobs, not stories. Four rooms. Seven sleeves.",
			"The original lecture is the spine. The terminal is the workbook.",
			"Education only. Not the fund. Not a personal plan."
		],
		chapters: [
			{
				t: 0,
				label: "Open"
			},
			{
				t: 180,
				label: "Rooms"
			},
			{
				t: 420,
				label: "Jobs"
			},
			{
				t: 660,
				label: "Close"
			}
		],
		transcript: [{
			who: "DESK",
			text: "ALLWX desk. Original lecture. Seven jobs. Diversification by economic driver. This is the first tape the classroom was built from."
		}, {
			who: "RATES",
			text: "Press LEARN when you want the machine. This file is the spoken paper."
		}]
	}
];
function jobById(id) {
	return JOBS.find((j) => j.id === id);
}
function episodeBySlug(slug) {
	return EPISODES.find((e) => e.slug === slug);
}
function nextEpisode(slug) {
	const i = EPISODES.findIndex((e) => e.slug === slug);
	return i >= 0 ? EPISODES[i + 1] : void 0;
}
function prevEpisode(slug) {
	const i = EPISODES.findIndex((e) => e.slug === slug);
	return i > 0 ? EPISODES[i - 1] : void 0;
}
var SEASONS = [
	{
		id: "S0",
		label: "S0 · LECTURE",
		hint: "The original seven-jobs tape"
	},
	{
		id: "S1",
		label: "S1 · CLASSROOM",
		hint: "The seven jobs and the four rooms"
	},
	{
		id: "S2",
		label: "S2 · HOUSE",
		hint: "Defence, numbers, Prime, the full lesson"
	}
];
var TOTAL_DURATION = EPISODES.reduce((a, e) => a + e.duration, 0);
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CI7Ar9vC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-down",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: "1.5"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-mono text-2xl text-fg",
				children: "FAULT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md font-sans text-sm text-muted",
				children: error.message || "An unexpected error occurred. Reload the tape."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "mt-2 font-mono text-sm text-accent hover:underline",
				children: ["ALLWX ", "<GO>"]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-[50vh] flex-col items-center justify-center gap-3 px-6 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-mono text-3xl",
				children: "Mnemonic not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "mt-2 font-mono text-sm text-accent hover:underline",
				children: ["ALLWX ", "<GO>"]
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var usePlayer = create()(persist((set, get) => ({
	slug: null,
	playing: false,
	rate: 1,
	positions: {},
	completed: [],
	seekTo: null,
	play: (slug, at) => {
		const cur = get();
		if (at != null) {
			set({
				slug,
				playing: true,
				seekTo: at,
				positions: {
					...cur.positions,
					[slug]: at
				}
			});
			return;
		}
		set({
			slug,
			playing: true
		});
	},
	toggle: () => {
		if (!get().slug) return;
		set({ playing: !get().playing });
	},
	pause: () => set({ playing: false }),
	setPosition: (slug, t) => set({ positions: {
		...get().positions,
		[slug]: t
	} }),
	skip: (delta, duration) => {
		const { slug, positions } = get();
		if (!slug) return;
		const next = Math.min(duration, Math.max(0, (positions[slug] ?? 0) + delta));
		set({
			positions: {
				...positions,
				[slug]: next
			},
			seekTo: next
		});
	},
	seek: (t) => {
		const { slug, positions } = get();
		if (!slug) return;
		set({
			positions: {
				...positions,
				[slug]: t
			},
			seekTo: t
		});
	},
	clearSeek: () => set({ seekTo: null }),
	markComplete: (slug) => {
		if (get().completed.includes(slug)) return;
		set({ completed: [...get().completed, slug] });
	},
	setRate: (rate) => set({ rate })
}), {
	name: "seven-jobs-player",
	skipHydration: true,
	partialize: (s) => ({
		positions: s.positions,
		completed: s.completed,
		rate: s.rate
	})
}));
function rehydratePlayer() {
	usePlayer.persist.rehydrate();
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-mono text-sm font-medium tracking-tight transition-colors duration-150 ease-[var(--ease-out)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-40", {
	variants: {
		variant: {
			primary: "bg-accent text-bg hover:bg-accent-2 active:scale-[0.98]",
			ghost: "bg-transparent text-fg hover:bg-line",
			outline: "bg-transparent text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_18%,transparent)] hover:bg-line",
			cream: "bg-cyan text-bg hover:bg-fg"
		},
		size: {
			sm: "h-9 rounded-sm px-3",
			md: "h-11 rounded-md px-4",
			lg: "h-12 rounded-md px-5",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var RATES = [
	.9,
	1,
	1.1,
	1.25
];
function StickyPlayer() {
	const audioRef = (0, import_react.useRef)(null);
	const slug = usePlayer((s) => s.slug);
	const playing = usePlayer((s) => s.playing);
	const rate = usePlayer((s) => s.rate);
	const seekTo = usePlayer((s) => s.seekTo);
	const pos = usePlayer((s) => s.slug ? s.positions[s.slug] ?? 0 : 0);
	const play = usePlayer((s) => s.play);
	const toggle = usePlayer((s) => s.toggle);
	const setPosition = usePlayer((s) => s.setPosition);
	const skip = usePlayer((s) => s.skip);
	const markComplete = usePlayer((s) => s.markComplete);
	const setRate = usePlayer((s) => s.setRate);
	const clearSeek = usePlayer((s) => s.clearSeek);
	const episode = slug ? episodeBySlug(slug) : void 0;
	const prev = slug ? prevEpisode(slug) : void 0;
	const nxt = slug ? nextEpisode(slug) : void 0;
	(0, import_react.useEffect)(() => {
		const el = audioRef.current;
		if (!el || !episode) return;
		if (el.dataset.src !== episode.audio) {
			el.dataset.src = episode.audio;
			el.dataset.slug = episode.slug;
			el.src = episode.audio;
			const saved = usePlayer.getState().positions[episode.slug] ?? 0;
			el.currentTime = Math.min(saved, Math.max(0, episode.duration - .5));
		}
		el.playbackRate = rate;
		if (playing) el.play().catch(() => usePlayer.getState().pause());
		else el.pause();
	}, [
		episode,
		playing,
		rate
	]);
	(0, import_react.useEffect)(() => {
		const el = audioRef.current;
		if (!el || seekTo == null) return;
		el.currentTime = seekTo;
		clearSeek();
	}, [seekTo, clearSeek]);
	if (!episode) {
		const first = EPISODES[0];
		const full = EPISODES.find((e) => e.slug === "full-lesson");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-auto mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-md border border-line bg-panel px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
						children: "SERIES · TWO-DESK"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-mono text-sm text-fg",
						children: "EP 01 · The machine"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => play(full?.slug ?? first.slug),
						children: "FULL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "primary",
						size: "sm",
						onClick: () => play(first.slug),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 translate-x-px" }), "PLAY"]
					})]
				})]
			})
		});
	}
	episode.duration && Math.min(100, pos / episode.duration * 100);
	const chapter = [...episode.chapters].reverse().find((c) => pos >= c.t);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl overflow-hidden rounded-md border border-line bg-panel",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
					ref: audioRef,
					preload: "metadata",
					onTimeUpdate: (e) => {
						const t = e.currentTarget.currentTime;
						setPosition(episode.slug, t);
					},
					onEnded: () => {
						markComplete(episode.slug);
						if (nxt) play(nxt.slug);
						else usePlayer.getState().pause();
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: episode.duration,
					step: 1,
					value: Math.min(pos, episode.duration),
					"aria-label": "Seek",
					className: "block h-1 w-full cursor-pointer appearance-none bg-line accent-accent",
					onChange: (e) => usePlayer.getState().seek(Number(e.target.value))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "hidden size-10 shrink-0 text-muted sm:inline-flex",
							disabled: !prev,
							onClick: () => prev && play(prev.slug),
							"aria-label": "Previous episode",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "primary",
							size: "icon",
							className: "size-11 shrink-0",
							onClick: toggle,
							"aria-label": playing ? "Pause" : "Play",
							children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4 fill-current" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 translate-x-px" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "hidden size-10 shrink-0 text-muted sm:inline-flex",
							disabled: !nxt,
							onClick: () => nxt && play(nxt.slug),
							"aria-label": "Next episode",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/listen/$slug",
								params: { slug: episode.slug },
								className: "block truncate font-mono text-[13px] leading-tight text-fg hover:text-accent",
								children: [
									episode.code,
									" · ",
									episode.title
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 truncate font-mono text-xs tabular-nums text-muted",
								children: [
									formatTime(pos),
									" / ",
									formatTime(episode.duration),
									chapter ? ` · ${chapter.label}` : ""
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "size-10 text-muted hover:bg-line hover:text-fg",
								onClick: () => skip(-15, episode.duration),
								"aria-label": "Back 15 seconds",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "size-10 text-muted hover:bg-line hover:text-fg",
								onClick: () => skip(15, episode.duration),
								"aria-label": "Forward 15 seconds",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden shrink-0 items-center gap-1 md:flex",
							children: RATES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setRate(r),
								className: `h-8 min-w-8 rounded-sm px-1.5 font-mono text-[11px] tabular-nums ${rate === r ? "bg-accent text-bg" : "text-muted hover:bg-line hover:text-fg"}`,
								children: [r, "×"]
							}, r))
						})
					]
				}),
				episode.chapters.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1 overflow-x-auto border-t border-line px-3 py-2",
					children: [episode.chapters.map((ch) => {
						const on = chapter?.t === ch.t;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => usePlayer.getState().play(episode.slug, ch.t),
							className: `h-8 shrink-0 rounded-sm px-2 font-mono text-[10px] ${on ? "bg-line text-accent" : "text-muted hover:text-fg"}`,
							children: ch.label
						}, ch.t);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/listen",
						className: "ml-auto h-8 shrink-0 px-2 font-mono text-[10px] leading-8 text-cyan",
						children: "SERIES"
					})]
				})
			]
		})
	});
}
var TAPE_ASOF = "2026-09-09";
var TAPE_STAGE = "3 · Late expansion";
var TAPE_REGIME = "reflation";
var TAPE_OVERLAY = "Stagflation co-primary — Brent $100.95";
var TAPE = [
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
		sleeve: ["gold"]
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
		sleeve: ["cash", "bonds"]
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
		sleeve: ["shares", "bonds"]
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
		sleeve: ["long"]
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
		sleeve: [
			"bonds",
			"long",
			"shares"
		]
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
		sleeve: [
			"tips",
			"commodities",
			"gold"
		]
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
		sleeve: [
			"tips",
			"gold",
			"shares"
		]
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
		sleeve: [
			"shares",
			"gold",
			"commodities"
		]
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
		sleeve: ["bonds", "shares"]
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
		sleeve: ["commodities", "tips"]
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
		sleeve: [
			"gold",
			"long",
			"cash"
		]
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
		sleeve: [
			"tips",
			"bonds",
			"long"
		]
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
		sleeve: ["shares", "commodities"]
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
		sleeve: [
			"bonds",
			"shares",
			"cash"
		]
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
		sleeve: [
			"cash",
			"bonds",
			"long"
		]
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
		sleeve: ["bonds", "tips"]
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
		sleeve: ["bonds", "cash"]
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
		sleeve: [
			"cash",
			"bonds",
			"long"
		]
	}
];
var FUNCTIONS = [
	{
		fn: "ECO",
		name: "Economic calendar",
		use: "CPI, GDP, NFP, PMI with consensus versus actual.",
		allwx: "Regime ID. Surprise versus priced. Question 1 and 3."
	},
	{
		fn: "GC",
		name: "Curve",
		use: "Any sovereign curve, any country. Slope, butterfly, forwards.",
		allwx: "2s10s is the credit-creation impulse. GT30 is the fire-brigade mark. Question 4."
	},
	{
		fn: "YAS",
		name: "Yield and spread",
		use: "Yield, spread, duration, convexity on a bond.",
		allwx: "Name the duration on VAGS and IDTL. Do not hide it."
	},
	{
		fn: "FWCV",
		name: "Forwards / BEI",
		use: "Inflation swaps, breakevens, real yields.",
		allwx: "USGGBE10 vs GTII10. The two prices inside a linker."
	},
	{
		fn: "WIRP",
		name: "Rate probabilities",
		use: "What the market prices for the next 12 months of policy.",
		allwx: "Question 2. Hiking, pausing, cutting. The path."
	},
	{
		fn: "FICM",
		name: "Credit markets",
		use: "IG/HY spreads, CDS, issuance.",
		allwx: "Spread widening is a recession signal with a lag. Credit that is secretly equity."
	},
	{
		fn: "PORT",
		name: "Portfolio analytics",
		use: "Risk, attribution, factor, stress.",
		allwx: "Stress stagflation, not just last decade's 60/40 world."
	},
	{
		fn: "BTMM",
		name: "Money markets",
		use: "SOFR, SONIA, bills, the front end.",
		allwx: "The parking bay. Duration near zero."
	},
	{
		fn: "WB",
		name: "World bonds",
		use: "Global yields and spreads in one pane.",
		allwx: "Sterling household versus dollar duration. Decide FX."
	},
	{
		fn: "BQNT",
		name: "Python + BQL",
		use: "Query 20,000 fields. Build the model.",
		allwx: "The measurement system, not the story."
	}
];
var STAGES = [
	{
		n: 1,
		name: "Early expansion",
		curve: "Steepening",
		paid: "Equities, credit",
		fined: "Long vol, gold boring"
	},
	{
		n: 2,
		name: "Mid expansion",
		curve: "Normal",
		paid: "Equities, commodities",
		fined: "Cash opportunity cost"
	},
	{
		n: 3,
		name: "Late expansion",
		curve: "Flattening",
		paid: "Growth + real assets",
		fined: "Long nominal duration"
	},
	{
		n: 4,
		name: "Inversion / peak",
		curve: "Inverted",
		paid: "Quality duration, gold, cash",
		fined: "Cyclicals, credit"
	},
	{
		n: 5,
		name: "Recession",
		curve: "Deep then steep",
		paid: "Long Treasuries, cash",
		fined: "Equities, commodities"
	},
	{
		n: 6,
		name: "Recovery",
		curve: "Steepening fast",
		paid: "Equities lead",
		fined: "Gold off the peak"
	}
];
var CORRELATIONS = [
	{
		when: "2s10s inverted",
		then: "Recession probability up, 12–18m lag",
		strength: "Strong historically",
		breaks: "Delayed by fiscal impulse or external demand"
	},
	{
		when: "VIX > 30",
		then: "Equities down, gold and quality bonds bid",
		strength: "Strong in a growth scare",
		breaks: "Stagflation: bonds may fall too"
	},
	{
		when: "DXY rips",
		then: "Gold, EM, commodities under pressure",
		strength: "Moderate-strong",
		breaks: "Global scare can bid dollar and gold together"
	},
	{
		when: "Oil shock, PMI < 50",
		then: "Stagflation room. 60/40 fails.",
		strength: "Strong if sustained",
		breaks: "Demand shock oil is disinflationary, not this"
	},
	{
		when: "Real yields jump",
		then: "TIPS and gold marked down, growth equities hit",
		strength: "Strong in the mark",
		breaks: "If jump is from falling BEI, goldilocks can still pay equities"
	},
	{
		when: "Credit +100bp",
		then: "Equity drawdown often follows 3–6m",
		strength: "Strong",
		breaks: "Sector-specific widening without broad beta"
	}
];
var SHOCKS = [
	{
		id: "goldilocks",
		name: "Soft landing",
		growth: "up",
		inflation: "down",
		room: "goldilocks"
	},
	{
		id: "reflation",
		name: "Hot tape",
		growth: "up",
		inflation: "up",
		room: "reflation"
	},
	{
		id: "stagflation",
		name: "Supply shock",
		growth: "down",
		inflation: "up",
		room: "stagflation"
	},
	{
		id: "disinflation",
		name: "Demand crash",
		growth: "down",
		inflation: "down",
		room: "disinflation"
	}
];
function Ticker() {
	const items = [...TAPE, ...TAPE];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-line bg-bg-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 overflow-hidden px-3 py-1 font-mono text-[11px] leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "shrink-0 text-accent",
				children: [
					TAPE_ASOF,
					" · ",
					TAPE_STAGE,
					" · ",
					TAPE_REGIME.toUpperCase()
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-w-0 flex-1 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ticker-track flex w-max gap-6 whitespace-nowrap text-muted",
					children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cyan",
							children: p.mnemonic
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: p.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: p.dir === "down" ? "text-down" : p.dir === "up" ? "text-up" : "text-muted",
							children: [" ", p.chg]
						})
					] }, `${p.mnemonic}-${i}`))
				})
			})]
		})
	});
}
var NAV = [
	{
		to: "/",
		label: "HOME"
	},
	{
		to: "/learn",
		label: "LEARN"
	},
	{
		to: "/listen",
		label: "LISTEN"
	},
	{
		to: "/tape",
		label: "TAPE"
	},
	{
		to: "/house",
		label: "HOUSE"
	},
	{
		to: "/lab",
		label: "LAB"
	}
];
function Shell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		rehydratePlayer();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-accent focus:px-3 focus:py-2 focus:text-bg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-bg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-baseline gap-2 font-mono",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-accent px-1.5 py-0.5 text-sm font-semibold text-bg",
								children: "ALLWX"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-xs text-muted sm:inline",
								children: "<GO>"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-xs text-faint lg:inline",
								children: "All Weather · Bridgewater-inspired classroom"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex items-center gap-0.5 overflow-x-auto",
						children: NAV.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-sm px-2 py-2 font-mono text-[11px] tracking-wide", active ? "bg-line text-accent" : "text-muted hover:bg-panel hover:text-fg"),
								children: item.label
							}, item.to);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "pb-36",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 pb-28 text-center font-mono text-[10px] leading-relaxed text-muted",
				children: "EDUCATION ONLY. NOT INVESTMENT ADVICE. NOT BRIDGEWATER ASSOCIATES. NOT THE ALL WEATHER FUND. CLASSROOM WEIGHTS ARE A TEACHING OBJECT, NOT A PERSONAL PLAN."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyPlayer, {})
		]
	});
}
var styles_default = "/assets/styles-Dd8FiKct.css";
var APP_NAME = "ALLWX";
var Route$23 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "All Weather Terminal. Bridgewater-inspired portfolio classroom. Four regimes, seven sleeves, Bloomberg functions as the measurement system. Education only."
			},
			{
				name: "theme-color",
				content: "#0a0e16"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$22 = () => import("./routes-DfQPpjmQ.mjs");
var Route$22 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./cases-CsXD0xKx.mjs");
var Route$21 = createFileRoute("/cases")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./debate-CZeIfnBu.mjs");
var Route$20 = createFileRoute("/debate")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./house-G1rXsJCB.mjs");
var Route$19 = createFileRoute("/house")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./jobs-C9xxTTL6.mjs");
var Route$18 = createFileRoute("/jobs")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./lab-8ITZPXU_.mjs");
var Route$17 = createFileRoute("/lab")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./learn-CnGBe_6s.mjs");
var Route$16 = createFileRoute("/learn")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./pie-CzwPGyGU.mjs");
var Route$15 = createFileRoute("/pie")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./rules-VRf9XMZA.mjs");
var Route$14 = createFileRoute("/rules")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./study-DK7EpzZj.mjs");
var Route$13 = createFileRoute("/study")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./tape-B7LGdYIY.mjs");
var Route$12 = createFileRoute("/tape")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./weathers-Be_rWVZj.mjs");
var Route$11 = createFileRoute("/weathers")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./jobs.index-BcNjOelz.mjs");
var Route$10 = createFileRoute("/jobs/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./jobs._id-CTujPpwb.mjs");
var Route$9 = createFileRoute("/jobs/$id")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	loader: ({ params }) => {
		const job = JOBS.find((j) => j.id === params.id);
		if (!job) throw notFound();
		return job;
	}
});
var $$splitComponentImporter$8 = () => import("./learn.index-BelBbOcO.mjs");
var Route$8 = createFileRoute("/learn/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./learn.atlas-CvZMjBLr.mjs");
var Route$7 = createFileRoute("/learn/atlas")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./learn.decide-DMsBHiOv.mjs");
var Route$6 = createFileRoute("/learn/decide")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./learn.lock-DHxJXMys.mjs");
var Route$5 = createFileRoute("/learn/lock")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./learn.machine-BV3o7Lv7.mjs");
var Route$4 = createFileRoute("/learn/machine")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./learn.path-D1ezjBy8.mjs");
var Route$3 = createFileRoute("/learn/path")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./learn.quiz-SLfVXAus.mjs");
var Route$2 = createFileRoute("/learn/quiz")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./listen.index-D0t4F0on.mjs");
var Route$1 = createFileRoute("/listen/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./listen._slug-BT87uo3Y.mjs");
var Route = createFileRoute("/listen/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const ep = episodeBySlug(params.slug);
		if (!ep) throw notFound();
		return ep;
	}
});
var IndexRoute = Route$22.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$23
});
var CasesRoute = Route$21.update({
	id: "/cases",
	path: "/cases",
	getParentRoute: () => Route$23
});
var DebateRoute = Route$20.update({
	id: "/debate",
	path: "/debate",
	getParentRoute: () => Route$23
});
var HouseRoute = Route$19.update({
	id: "/house",
	path: "/house",
	getParentRoute: () => Route$23
});
var JobsRoute = Route$18.update({
	id: "/jobs",
	path: "/jobs",
	getParentRoute: () => Route$23
});
var LabRoute = Route$17.update({
	id: "/lab",
	path: "/lab",
	getParentRoute: () => Route$23
});
var LearnRoute = Route$16.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => Route$23
});
var PieRoute = Route$15.update({
	id: "/pie",
	path: "/pie",
	getParentRoute: () => Route$23
});
var RulesRoute = Route$14.update({
	id: "/rules",
	path: "/rules",
	getParentRoute: () => Route$23
});
var StudyRoute = Route$13.update({
	id: "/study",
	path: "/study",
	getParentRoute: () => Route$23
});
var TapeRoute = Route$12.update({
	id: "/tape",
	path: "/tape",
	getParentRoute: () => Route$23
});
var WeathersRoute = Route$11.update({
	id: "/weathers",
	path: "/weathers",
	getParentRoute: () => Route$23
});
var JobsIndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => JobsRoute
});
var JobsIdRoute = Route$9.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => JobsRoute
});
var LearnIndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => LearnRoute
});
var LearnAtlasRoute = Route$7.update({
	id: "/atlas",
	path: "/atlas",
	getParentRoute: () => LearnRoute
});
var LearnDecideRoute = Route$6.update({
	id: "/decide",
	path: "/decide",
	getParentRoute: () => LearnRoute
});
var LearnLockRoute = Route$5.update({
	id: "/lock",
	path: "/lock",
	getParentRoute: () => LearnRoute
});
var LearnMachineRoute = Route$4.update({
	id: "/machine",
	path: "/machine",
	getParentRoute: () => LearnRoute
});
var LearnPathRoute = Route$3.update({
	id: "/path",
	path: "/path",
	getParentRoute: () => LearnRoute
});
var LearnQuizRoute = Route$2.update({
	id: "/quiz",
	path: "/quiz",
	getParentRoute: () => LearnRoute
});
var ListenIndexRoute = Route$1.update({
	id: "/listen/",
	path: "/listen/",
	getParentRoute: () => Route$23
});
var ListenSlugRoute = Route.update({
	id: "/listen/$slug",
	path: "/listen/$slug",
	getParentRoute: () => Route$23
});
var JobsRouteChildren = {
	JobsIdRoute,
	JobsIndexRoute
};
var JobsRouteWithChildren = JobsRoute._addFileChildren(JobsRouteChildren);
var LearnRouteChildren = {
	LearnAtlasRoute,
	LearnDecideRoute,
	LearnLockRoute,
	LearnMachineRoute,
	LearnPathRoute,
	LearnQuizRoute,
	LearnIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	CasesRoute,
	DebateRoute,
	HouseRoute,
	JobsRoute: JobsRouteWithChildren,
	LabRoute,
	LearnRoute: LearnRoute._addFileChildren(LearnRouteChildren),
	PieRoute,
	RulesRoute,
	StudyRoute,
	TapeRoute,
	WeathersRoute,
	ListenSlugRoute,
	ListenIndexRoute
};
var routeTree = Route$23._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFoundComponent
	});
}
//#endregion
export { TOTAL_DURATION as C, prevEpisode as D, nextEpisode as E, STUDY as S, jobById as T, JOBS as _, FUNCTIONS as a, SERIES as b, TAPE as c, TAPE_REGIME as d, TAPE_STAGE as f, EPISODES as g, DRILLS as h, CORRELATIONS as i, TAPE_ASOF as l, usePlayer as m, Route as n, SHOCKS as o, Button as p, Route$9 as r, STAGES as s, router_exports as t, TAPE_OVERLAY as u, PRINCIPLES as v, WEATHERS as w, SEVEN_QUESTIONS as x, SEASONS as y };
