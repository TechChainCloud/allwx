import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-Cz9L5vlx.mjs";
import { p as Button } from "./router-CI7Ar9vC.mjs";
import { t as Badge } from "./badge-peS3T6f-.mjs";
import { t as Segment } from "./segment-B8mJrkRx.mjs";
import { S as SIZE_GATES, f as LOCKED_PIE, h as PERMANENTLY_DEAD, v as REVISED_PIE } from "./machine-BioQdnd1.mjs";
import { n as useInvictus, t as selectPie } from "./machine-Bjr8a6kw.mjs";
import { t as VerdictCard } from "./verdict-card-BJVLPXBG.mjs";
import { a as routeContribution, c as verdictAutoInvest, d as verdictSizeGate, f as walkBackActive, l as verdictDead, s as verdictAddLine, u as verdictSell } from "./verdict-BcT8a-Q1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn.decide-DMsBHiOv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INTENTS = [
	{
		id: "contribute",
		title: "Route this month’s contribution",
		blurb: "The 3rd does the work. Nothing is sold."
	},
	{
		id: "sell",
		title: "Should I sell a line?",
		blurb: "The signed sentence already answered."
	},
	{
		id: "autoinvest",
		title: "Change AutoInvest",
		blurb: "Lock file first. Decision date first."
	},
	{
		id: "walkback",
		title: "Has walk-back fired?",
		blurb: "PMI < 50 and 2s10s inverted."
	},
	{
		id: "addline",
		title: "Add a 17th line",
		blurb: "No 17th personality."
	},
	{
		id: "gates",
		title: "Size-gate a replacement",
		blurb: "FLOT, VHYL, ROLL — gates, not orders."
	},
	{
		id: "dead",
		title: "Revive a dead idea",
		blurb: "D-Prime, IITU, crypto, 8% planning return."
	}
];
function DecidePage() {
	const store = useInvictus();
	const pie = selectPie(store.pieMode);
	const [intent, setIntent] = (0, import_react.useState)("contribute");
	const [sellTicker, setSellTicker] = (0, import_react.useState)("VAGS");
	const [addTicker, setAddTicker] = (0, import_react.useState)("IITU");
	const [gateId, setGateId] = (0, import_react.useState)("FLOT");
	const [deadId, setDeadId] = (0, import_react.useState)(PERMANENTLY_DEAD[0].id);
	const allTickers = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		for (const l of LOCKED_PIE) set.add(l.ticker);
		for (const l of REVISED_PIE) set.add(l.ticker);
		return [...set];
	}, []);
	const verdict = (0, import_react.useMemo)(() => {
		switch (intent) {
			case "contribute": return routeContribution(pie, store);
			case "sell": return verdictSell(pie, sellTicker);
			case "autoinvest": return verdictAutoInvest(store);
			case "walkback":
				if (walkBackActive(store.pmi, store.curveInverted)) return routeContribution(pie, store);
				return {
					kind: "hold",
					stamp: "WALK-BACK INACTIVE",
					rule: "PMI < 50 AND 2s10s inverted. Both must be true.",
					reason: `PMI is ${store.pmi.toFixed(1)}${store.pmi < 50 ? " (below 50)" : " (above 50)"} and the curve is ${store.curveInverted ? "inverted" : "not inverted"}. Contributions follow floors, caps and target weights.`,
					ifThen: "If the front line is intact, the reserve stays the reserve. Do not hide in cash because a single line had a bad month."
				};
			case "addline": return verdictAddLine(addTicker);
			case "gates": return verdictSizeGate(gateId, store.nav);
			case "dead": return verdictDead(deadId);
		}
	}, [
		intent,
		pie,
		store,
		sellTicker,
		addTicker,
		gateId,
		deadId
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stamp text-[11px] text-accent",
						children: "Protocol simulator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-mono text-4xl tracking-tight",
						children: "Decide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm leading-relaxed text-muted",
						children: "Name the action. The machine applies the lock file. A briefing is not a change log entry. Teaching object — not a ticket."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: INTENTS.map((item) => {
					const on = item.id === intent;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setIntent(item.id),
						className: cn("min-h-11 rounded-md px-4 py-4 text-left", on ? "bg-accent text-bg" : "border border-line bg-panel hover:border-accent"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("mt-1 font-sans text-xs leading-relaxed", on ? "text-bg/80" : "text-muted"),
							children: item.blurb
						})]
					}, item.id);
				})
			}),
			intent === "contribute" || intent === "walkback" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ControlsPanel, { children: [
				intent === "contribute" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "This month’s contribution",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						value: store.contribution,
						onChange: store.setContribution,
						prefix: "£",
						step: 50,
						min: 0
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "PMI",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
						value: store.pmi,
						onChange: store.setPmi,
						step: .1,
						min: 20,
						max: 80
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "2s10s curve",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
						ariaLabel: "Curve",
						value: store.curveInverted ? "inv" : "norm",
						onChange: (v) => store.setCurveInverted(v === "inv"),
						options: [{
							value: "norm",
							label: "Not inverted"
						}, {
							value: "inv",
							label: "Inverted"
						}]
					})
				})
			] }) : null,
			intent === "sell" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlsPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Line under review",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: sellTicker,
					onChange: (e) => setSellTicker(e.target.value),
					className: "h-11 w-full rounded-md border border-line bg-bg-2 px-3 font-mono text-sm",
					children: allTickers.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: t,
						children: t
					}, t))
				})
			}) }) : null,
			intent === "addline" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlsPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Proposed ticker",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: addTicker,
					onChange: (e) => setAddTicker(e.target.value.toUpperCase()),
					className: "h-11 w-full rounded-md border border-line bg-bg-2 px-3 font-mono text-sm",
					placeholder: "IITU"
				})
			}) }) : null,
			intent === "gates" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ControlsPanel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Gate",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
					ariaLabel: "Size gate",
					value: gateId,
					onChange: (v) => setGateId(v),
					options: SIZE_GATES.map((g) => ({
						value: g.id,
						label: g.id
					}))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ISA NAV",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
					value: store.nav,
					onChange: store.setNav,
					prefix: "£",
					step: 50,
					min: 0
				})
			})] }) : null,
			intent === "dead" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: PERMANENTLY_DEAD.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDeadId(d.id),
					className: "min-h-11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: deadId === d.id ? "invert" : "default",
						children: d.name
					})
				}, d.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerdictCard, { verdict }),
			intent === "contribute" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeightsEditor, {}) : null
		]
	});
}
function ControlsPanel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 rounded-md border border-line bg-panel p-4 sm:grid-cols-3 sm:p-5",
		children
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block stamp text-[10px] text-muted",
			children: label
		}), children]
	});
}
function NumberField({ value, onChange, prefix, step = 1, min, max }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [prefix ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-sm text-faint",
			children: prefix
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "number",
			value: Number.isFinite(value) ? value : 0,
			step,
			min,
			max,
			onChange: (e) => onChange(Number(e.target.value)),
			className: cn("h-11 w-full rounded-md border border-line bg-bg-2 font-mono text-sm tabular-nums", prefix ? "pl-7 pr-3" : "px-3")
		})]
	});
}
function WeightsEditor() {
	const store = useInvictus();
	const pie = selectPie(store.pieMode);
	const sum = pie.reduce((s, l) => s + (store.weights[l.ticker] ?? l.weight), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-mono text-xl",
			children: "Current weights"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 font-sans text-xs text-muted",
			children: [
				"Drift the pie to see how the 3rd rebalances. Sum ",
				sum.toFixed(1),
				"%."
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			onClick: store.resetWeights,
			children: "Reset"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-md border border-line",
		children: pie.map((l) => {
			const w = store.weights[l.ticker] ?? l.weight;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1fr_4.5rem_4.5rem] items-center gap-2 border-t border-line px-4 py-2 first:border-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-cyan",
						children: l.ticker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] text-faint",
						children: [
							l.floor,
							"–",
							l.cap,
							"%",
							w < l.floor ? " · below floor" : w > l.cap ? " · above cap" : ""
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						step: .5,
						min: 0,
						max: 60,
						value: w,
						onChange: (e) => store.setWeight(l.ticker, Number(e.target.value)),
						className: "h-10 rounded-sm border border-line bg-bg-2 px-2 text-right font-mono text-sm tabular-nums"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right font-mono text-sm tabular-nums text-muted",
						children: l.weight.toFixed(1)
					})
				]
			}, l.ticker);
		})
	})] });
}
//#endregion
export { DecidePage as component };
