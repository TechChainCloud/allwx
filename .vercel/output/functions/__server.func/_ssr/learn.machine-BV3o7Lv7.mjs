import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-Cz9L5vlx.mjs";
import { t as Badge } from "./badge-peS3T6f-.mjs";
import { t as Segment } from "./segment-B8mJrkRx.mjs";
import { D as regimeFromFlags, _ as REGIMES, b as SIGNED_SENTENCE_REVISED, c as FOMC_AT, d as IF_THEN, o as FARMER, y as SIGNED_SENTENCE_LOCKED } from "./machine-BioQdnd1.mjs";
import { n as useInvictus, t as selectPie } from "./machine-Bjr8a6kw.mjs";
import { t as VerdictCard } from "./verdict-card-BJVLPXBG.mjs";
import { a as routeContribution, f as walkBackActive, n as idtlFlag, o as sufferers, t as earners } from "./verdict-BcT8a-Q1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn.machine-BV3o7Lv7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RegimeBoard({ active, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2 flex justify-between px-1 text-[10px] uppercase tracking-[0.16em] text-subtle",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inflation falling" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inflation rising" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-1 rounded-xl bg-surface p-1",
		children: [
			"goldilocks",
			"reflation",
			"deflation",
			"stagflation"
		].map((id, i) => {
			const r = REGIMES.find((x) => x.id === id);
			const on = id === active;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onSelect(id),
				className: cn("relative min-h-28 rounded-lg px-4 py-4 text-left transition-colors duration-150", on ? "bg-accent text-accent-fg" : "bg-inset text-fg hover:bg-elevated"),
				children: [
					i === 0 || i === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("absolute right-3 top-3 text-[9px] uppercase tracking-[0.14em]", on ? "text-accent-fg/70" : "text-subtle"),
						children: "Growth rising"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("absolute right-3 top-3 text-[9px] uppercase tracking-[0.14em]", on ? "text-accent-fg/70" : "text-subtle"),
						children: "Growth falling"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl leading-tight",
						children: r.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-2 max-w-[26ch] text-xs leading-relaxed", on ? "text-accent-fg/80" : "text-muted"),
						children: r.blurb
					})
				]
			}, id);
		})
	})] });
}
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	return hydrated;
}
function fomcCopy(now) {
	const ms = new Date(FOMC_AT).getTime() - now.getTime();
	if (ms <= 0) return {
		title: "FOMC has occurred",
		sub: "Sign the sentence. Write the lock file. AutoInvest the next calendar day. Not the same day."
	};
	const hours = Math.floor(ms / 36e5);
	const days = Math.floor(hours / 24);
	const remH = hours % 24;
	return {
		title: days > 0 ? `${days}d ${remH}h to FOMC` : `${hours}h to FOMC`,
		sub: "16 September 2026, 19:00 BST. This is the machine draft, not Prime, not the live ISA."
	};
}
function MachinePage() {
	const hydrated = useHydrated();
	const store = useInvictus();
	const pie = selectPie(store.pieMode);
	const regime = regimeFromFlags(store.growth, store.inflation);
	const meta = REGIMES.find((r) => r.id === regime);
	const routing = (0, import_react.useMemo)(() => routeContribution(pie, store), [
		pie,
		store.pmi,
		store.curveInverted,
		store.contribution,
		store.weights,
		store.pieMode
	]);
	const clock = fomcCopy(hydrated ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date("2026-09-15T09:47:00+01:00"));
	const wb = walkBackActive(store.pmi, store.curveInverted);
	const earn = earners(pie, regime);
	const hurt = sufferers(pie, regime);
	const sentence = store.pieMode === "revised" ? SIGNED_SENTENCE_REVISED : SIGNED_SENTENCE_LOCKED;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-md border border-line bg-panel p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stamp text-[10px] text-yellow",
					children: clock.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl font-sans text-sm leading-relaxed text-muted",
					children: clock.sub
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stamp text-[11px] text-accent",
						children: "Interactive machine · 12 Sep draft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-mono text-4xl leading-[1.1] tracking-tight",
						children: "The machine does not need to know which regime comes next."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-sm leading-relaxed text-muted",
						children: "Press the rooms. This pie is a teaching draft — engine 45%, ICOM 8%, SGLN 8%. It is not Prime. It is not T212. Contributions on the 3rd do the work. The signed sentence stays the hand."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "max-w-3xl border-l border-line pl-5 font-sans text-lg leading-relaxed italic",
				children: sentence
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
					ariaLabel: "Working pie",
					value: store.pieMode,
					onChange: store.setPieMode,
					options: [{
						value: "locked",
						label: "12 Sep lock"
					}, {
						value: "revised",
						label: "Revised preview"
					}]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-8 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
							ariaLabel: "Growth",
							value: store.growth,
							onChange: store.setGrowth,
							options: [{
								value: "up",
								label: "Growth ↑"
							}, {
								value: "down",
								label: "Growth ↓"
							}]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
							ariaLabel: "Inflation",
							value: store.inflation,
							onChange: store.setInflation,
							options: [{
								value: "up",
								label: "Inflation ↑"
							}, {
								value: "down",
								label: "Inflation ↓"
							}]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegimeBoard, {
						active: regime,
						onSelect: (id) => {
							const r = REGIMES.find((x) => x.id === id);
							store.setGrowth(r.growth);
							store.setInflation(r.inflation);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-sm leading-relaxed text-muted",
						children: meta.response
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-line bg-panel p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "stamp text-[10px] text-muted",
								children: "Who earns"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-1.5",
								children: earn.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "earn",
									children: l.ticker
								}, l.ticker))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "stamp mt-5 text-[10px] text-muted",
								children: "Who suffers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-1.5",
								children: hurt.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "suffer",
									children: l.ticker
								}, l.ticker))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-line bg-panel p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stamp text-[10px] text-muted",
							children: "Sensors"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 space-y-2 font-mono text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "Walk-back"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: wb ? "text-yellow" : "text-up",
										children: wb ? "Active — 100% XSTR" : "Inactive"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "PMI"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "tabular-nums",
										children: store.pmi.toFixed(1)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "2s10s"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: store.curveInverted ? "Inverted" : "Not inverted" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "GT30"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: idtlFlag(store.gt30) ? "text-yellow tabular-nums" : "tabular-nums",
										children: [
											store.gt30.toFixed(3),
											"%",
											idtlFlag(store.gt30) ? " · flag" : ""
										]
									})]
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stamp text-[11px] text-muted",
					children: "This month · the 3rd"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-mono text-2xl",
					children: "Contribution routing"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/learn/decide",
					className: "stamp text-[11px] text-accent",
					children: "FULL PROTOCOL →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerdictCard, { verdict: routing })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-lg leading-relaxed italic text-muted",
					children: FARMER
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-sans text-sm leading-relaxed text-faint",
					children: IF_THEN
				})]
			})
		]
	});
}
//#endregion
export { MachinePage as component };
