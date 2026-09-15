import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as jobById, _ as JOBS, w as WEATHERS } from "./router-CI7Ar9vC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases-CsXD0xKx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CASES = [
	{
		id: "aw",
		name: "ALLWX classroom",
		tag: "7 sleeves · unlevered",
		copy: "Bridgewater-inspired, unlevered, ISA-shaped. Not the fund. Risk is spread across four rooms so no single surprise owns the household.",
		mix: [
			{
				id: "shares",
				w: 30
			},
			{
				id: "bonds",
				w: 18
			},
			{
				id: "gold",
				w: 15
			},
			{
				id: "tips",
				w: 14
			},
			{
				id: "commodities",
				w: 10
			},
			{
				id: "cash",
				w: 7
			},
			{
				id: "long",
				w: 6
			}
		],
		exam: {
			goldilocks: "Equities carry. Gold looks bored. Rebalance, do not fire.",
			reflation: "Equities + commodities work. Nominal duration is the drag.",
			stagflation: "Inflation team on duty. 60/40's two employees both fined.",
			disinflation: "Duration and cash earn. Equities and BCOM sleep."
		},
		lesson: "The point is not to win every year. The point is not to be owned by one year. Invictus Prime adds sentences. The 20-year proxy still does not pay extra complexity."
	},
	{
		id: "sixty",
		name: "Classic 60/40",
		tag: "Growth-shock world",
		copy: "Sixty equities, forty intermediate nominal bonds. A reasonable object when inflation is boring and growth shocks dominate. 2022 sat a different exam.",
		mix: [{
			id: "shares",
			w: 60
		}, {
			id: "bonds",
			w: 40
		}],
		exam: {
			goldilocks: "Looks like genius. Both employees paid.",
			reflation: "The two employees argue. Bonds drag, equities may still work.",
			stagflation: "Fails. Stocks and bonds down together. No inflation team.",
			disinflation: "Bonds can save it. Equities hurt."
		},
		lesson: "60/40 is a two-room mix marketed as a whole house. Name the rooms it does not own."
	},
	{
		id: "equity",
		name: "100% global tracker",
		tag: "One employee",
		copy: "The internet's default. True sentence: residual claims compound with productivity. False sentence: that is a complete household, especially when your wages are already a growth asset.",
		mix: [{
			id: "shares",
			w: 100
		}],
		exam: {
			goldilocks: "Maximum carry. Ego risk.",
			reflation: "Can work. Discount-rate risk on long-duration equities.",
			stagflation: "Sequence risk. No insurance jobs. Human capital hits the same year.",
			disinflation: "Drawdown. Nothing to rebalance from."
		},
		lesson: "A tracker is a job. It is not a firm. Young savers already own growth via wages."
	},
	{
		id: "permanent",
		name: "Permanent Portfolio",
		tag: "25 × 4 · Harry Browne",
		copy: "Equal cash in equities, long bonds, gold, cash. Elegant. Different volatilities mean the equity and long-bond sleeves still shout. No dedicated linker or commodity book.",
		mix: [
			{
				id: "shares",
				w: 25
			},
			{
				id: "long",
				w: 25
			},
			{
				id: "gold",
				w: 25
			},
			{
				id: "cash",
				w: 25
			}
		],
		exam: {
			goldilocks: "Equities carry, gold and cash drag.",
			reflation: "Gold helps. Long bonds hurt more than in ALLWX because the weight is huge.",
			stagflation: "Gold works. Missing commodities and linkers. Long bonds are a problem.",
			disinflation: "Long bonds and cash work. Equities and (sometimes) gold mixed."
		},
		lesson: "Equal cash is not equal risk. Twenty-five percent of GT30 is a lot of duration."
	},
	{
		id: "endowment",
		name: "Endowment-style",
		tag: "Alts as a story",
		copy: "Public-market cartoon of a Yale mix: heavy equity, some real assets, little dry powder. Illiquid private alts are not in an ISA. Do not pretend they are.",
		mix: [
			{
				id: "shares",
				w: 55
			},
			{
				id: "commodities",
				w: 15
			},
			{
				id: "gold",
				w: 10
			},
			{
				id: "bonds",
				w: 10
			},
			{
				id: "cash",
				w: 10
			}
		],
		exam: {
			goldilocks: "Equity-heavy. Fine in the sun.",
			reflation: "Commodities help. Still a lot of equity beta.",
			stagflation: "Real assets help. Equity weight still dominates the pain.",
			disinflation: "Missing the fire brigade. Real assets can sleep."
		},
		lesson: "An endowment has a spending rule, a committee, and access. You have an ISA and a job. Do not copy the brochure."
	},
	{
		id: "butterfly",
		name: "Golden butterfly",
		tag: "20 × 5 · small-cap tilt",
		copy: "Twenty each in total market, small-cap value, long Treasuries, gold, cash. A popular retail cousin. Small-cap value is still a residual claim — same weather as the growth engine, different factor.",
		mix: [
			{
				id: "shares",
				w: 40
			},
			{
				id: "long",
				w: 20
			},
			{
				id: "gold",
				w: 20
			},
			{
				id: "cash",
				w: 20
			}
		],
		exam: {
			goldilocks: "Equity factor bet pays. Gold and cash lag.",
			reflation: "Gold helps. Long bonds hurt. Small-caps can be late-cycle fragile.",
			stagflation: "Gold works. No commodities, no linkers. Long bonds fined.",
			disinflation: "Long bonds and cash work. Small-caps can get destroyed."
		},
		lesson: "A factor inside equities is not a second employee. It is a uniform change."
	}
];
var SCORE = {
	aw: {
		goldilocks: "MIX",
		reflation: "MIX",
		stagflation: "WIN",
		disinflation: "WIN"
	},
	sixty: {
		goldilocks: "WIN",
		reflation: "MIX",
		stagflation: "FAIL",
		disinflation: "MIX"
	},
	equity: {
		goldilocks: "WIN",
		reflation: "MIX",
		stagflation: "FAIL",
		disinflation: "FAIL"
	},
	permanent: {
		goldilocks: "MIX",
		reflation: "MIX",
		stagflation: "MIX",
		disinflation: "WIN"
	},
	endowment: {
		goldilocks: "WIN",
		reflation: "MIX",
		stagflation: "MIX",
		disinflation: "FAIL"
	},
	butterfly: {
		goldilocks: "MIX",
		reflation: "MIX",
		stagflation: "MIX",
		disinflation: "WIN"
	}
};
var EXAMS = [
	{
		year: "1973–74",
		room: "stagflation",
		note: "Oil shock. Equities and bonds both ugly. Real assets and gold had a job. 60/40 had no one at home."
	},
	{
		year: "2008",
		room: "disinflation",
		note: "Demand crash. Long quality duration and gold paid. Commodities and equities fined. Fire brigade weather."
	},
	{
		year: "2010s",
		room: "goldilocks",
		note: "The decade that trained people to fire gold. Equities compounded. Watchman looked unemployed. That was the brief working."
	},
	{
		year: "2022",
		room: "stagflation",
		note: "Hiking cycle, inflation surprise. Stocks and ordinary bonds down together. Linkers marked down on real yields even as CPI was hot. Commodities and gold were the employees still at their desks."
	}
];
function CasesPage() {
	const [id, setId] = (0, import_react.useState)("aw");
	const [room, setRoom] = (0, import_react.useState)("stagflation");
	const cs = CASES.find((c) => c.id === id);
	const weather = WEATHERS.find((w) => w.id === room);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
				children: "CASES · PORT STRESS AS THOUGHT EXPERIMENT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-mono text-4xl tracking-tight",
				children: "Alternative mixes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted",
				children: "Same four rooms. Different employee lists. The ALLWX classroom is one translation of All Weather into an unlevered ISA. The others are cousins, slogans, or traps. 2022 is the exam a two-employee firm failed in public."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: CASES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setId(c.id),
					className: `h-11 rounded-sm px-3 font-mono text-xs ${id === c.id ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"}`,
					children: c.name.toUpperCase()
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-6 rounded-md border border-line bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] text-cyan",
						children: cs.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-mono text-2xl",
						children: cs.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl font-sans text-sm leading-relaxed text-muted",
						children: cs.copy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2",
						children: cs.mix.map((m) => {
							const job = jobById(m.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between font-mono text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/jobs/$id",
									params: { id: m.id },
									className: "hover:text-accent",
									children: job.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted",
									children: [m.w, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 bg-bg-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full",
									style: {
										width: `${m.w}%`,
										background: job.color
									}
								})
							})] }, m.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 border-l-2 border-accent pl-3 font-sans text-sm",
						children: cs.lesson
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-2xl",
						children: "WIN / MIX / FAIL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl font-sans text-sm text-muted",
						children: "Same four rooms. Six mixes. A teaching score, not a forecast."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[640px] border-collapse font-mono text-[11px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-2 py-2 text-left",
									children: "MIX"
								}), WEATHERS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-2 py-2 text-left",
									children: w.name.toUpperCase()
								}, w.id))]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: CASES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: `border-b border-line ${c.id === id ? "bg-bg-2" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-2 py-2 text-cyan",
									children: c.name.toUpperCase()
								}), WEATHERS.map((w) => {
									const mark = SCORE[c.id][w.id];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: `px-2 py-2 ${mark === "WIN" ? "text-up" : mark === "FAIL" ? "text-down" : "text-yellow"}`,
										children: mark
									}, w.id);
								})]
							}, c.id)) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-2xl",
						children: "SIT THE EXAM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: WEATHERS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setRoom(w.id),
							className: `h-11 rounded-sm px-3 font-mono text-xs ${room === w.id ? "bg-cyan text-bg" : "bg-panel text-fg hover:bg-line"}`,
							children: w.name.toUpperCase()
						}, w.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 md:grid-cols-2",
						children: CASES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-md border p-4 ${c.id === id ? "border-accent bg-panel" : "border-line bg-panel"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-muted",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-sans text-sm leading-relaxed",
								children: c.exam[room]
							})]
						}, c.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-mono text-[11px] text-cyan",
						children: [
							weather.name.toUpperCase(),
							" · GROWTH ",
							weather.growth.toUpperCase(),
							" · INFLATION",
							" ",
							weather.inflation.toUpperCase()
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "HISTORICAL TAPE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3",
					children: EXAMS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-md border border-line bg-panel p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-sm text-accent",
							children: [
								e.year,
								" · ",
								e.room.toUpperCase()
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm leading-relaxed text-muted",
							children: e.note
						})]
					}, e.year))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 font-mono text-[11px] leading-relaxed text-muted",
				children: [
					"Missing sleeves in a cartoon mix (small-cap value inside equities, private alts, timber) are still residual claims or illiquid stories. If two lines are paid by the same surprise, one of them is costume.",
					" ",
					JOBS.length,
					" classroom jobs. Not more."
				]
			})
		]
	});
}
//#endregion
export { CasesPage as component };
