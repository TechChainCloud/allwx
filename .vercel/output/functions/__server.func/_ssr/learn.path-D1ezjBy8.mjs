import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as formatPct, i as formatGbp, n as formatCompactGbp, t as cn } from "./utils-Cz9L5vlx.mjs";
import { C as STATS_LOCKED, E as YEARLY_REVISED, T as STRESS_SCENARIOS, g as PLAN_PATHS, m as MILESTONE_1M, w as STATS_REVISED } from "./machine-BioQdnd1.mjs";
import { n as useInvictus } from "./machine-Bjr8a6kw.mjs";
import { i as pathSeries } from "./verdict-BcT8a-Q1.mjs";
import { a as CartesianGrid, i as Area, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn.path-D1ezjBy8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PathPage() {
	const contribution = useInvictus((s) => s.contribution);
	const setContribution = useInvictus((s) => s.setContribution);
	const pieMode = useInvictus((s) => s.pieMode);
	const [scenario, setScenario] = (0, import_react.useState)("bayesian");
	const stats = pieMode === "revised" ? STATS_REVISED : STATS_LOCKED;
	const plan = PLAN_PATHS[scenario];
	const chart = (0, import_react.useMemo)(() => {
		const years = 30;
		const stress = pathSeries(contribution, .05, years);
		const bayes = pathSeries(contribution, .075, years);
		const hist = pathSeries(contribution, .0818, years);
		return Array.from({ length: years }, (_, i) => ({
			year: i + 1,
			stress: Math.round(stress[i]),
			bayesian: Math.round(bayes[i]),
			historical: Math.round(hist[i])
		}));
	}, [contribution]);
	const terminal = chart[29];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stamp text-[11px] text-accent",
						children: "Thirty years"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-mono text-4xl tracking-tight",
						children: "Plan around 5%. Work from 7.5%. Do not plan around history."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm leading-relaxed text-muted",
						children: "Getting the debit up is the single most important lever. At £200/month the contribution is the binding constraint — not the mix."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Mean (verified)",
						v: formatPct(stats.mean, 2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Volatility",
						v: formatPct(stats.vol, 2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: `Worst (${stats.worst.year})`,
						v: formatPct(stats.worst.value, 2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: `Best (${stats.best.year})`,
						v: formatPct(stats.best.value, 2)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-md border border-line bg-panel p-4 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 block stamp text-[10px] text-muted",
							children: "Monthly contribution"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 200,
								max: 2e3,
								step: 50,
								value: contribution,
								onChange: (e) => setContribution(Number(e.target.value)),
								className: "w-full accent-[var(--color-accent)]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-20 font-mono tabular-nums",
								children: formatGbp(contribution)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							"stress",
							"bayesian",
							"historical"
						].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setScenario(id),
							className: cn("h-9 rounded-sm px-3 font-mono text-xs", scenario === id ? "bg-accent text-bg" : "border border-line text-muted"),
							children: PLAN_PATHS[id].label.split(" — ")[0]
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-xs text-muted",
						children: plan.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 h-64 min-h-[16rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: chart,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "var(--color-line)",
										strokeDasharray: "3 3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "year",
										tick: {
											fill: "var(--color-muted)",
											fontSize: 11
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tickFormatter: (v) => formatCompactGbp(Number(v)),
										tick: {
											fill: "var(--color-muted)",
											fontSize: 11
										},
										width: 56
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										contentStyle: {
											background: "var(--color-panel)",
											border: "1px solid var(--color-line)"
										},
										formatter: (v) => formatGbp(Number(v))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "stress",
										stroke: "var(--color-muted)",
										fill: "var(--color-line)",
										fillOpacity: .4
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "bayesian",
										stroke: "var(--color-accent)",
										fill: "var(--color-accent)",
										fillOpacity: .15
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "historical",
										stroke: "var(--color-cyan)",
										fill: "transparent"
									})
								]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-mono text-sm",
						children: [
							"Year 30 · stress ",
							formatGbp(terminal.stress),
							" · working ",
							formatGbp(terminal.bayesian),
							" · history",
							" ",
							formatGbp(terminal.historical)
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "£1m milestone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-sans text-sm text-muted",
				children: [
					"At this debit: stress ",
					MILESTONE_1M.stress["1600"],
					" · working ",
					MILESTONE_1M.bayesian["1600"],
					". At £200 the million is not in the 30-year window."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "Verified years (revised)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto rounded-md border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[520px] text-left font-mono text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-2 text-[10px] uppercase text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Year"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Return"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Driver"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: YEARLY_REVISED.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: y.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `px-3 py-2 ${y.ret >= 0 ? "text-up" : "text-down"}`,
								children: formatPct(y.ret, 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-sans text-[12px] text-muted",
								children: y.driver
							})
						]
					}, y.year)) })]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "Stress cases"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: STRESS_SCENARIOS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-xs text-yellow",
							children: s.impact
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm text-muted",
							children: s.cushion
						})
					]
				}, s.id))
			})] })
		]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-line bg-panel px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "stamp text-[10px] text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-mono text-2xl tabular-nums",
			children: v
		})]
	});
}
//#endregion
export { PathPage as component };
