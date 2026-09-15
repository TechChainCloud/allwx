import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as formatPct, t as cn } from "./utils-Cz9L5vlx.mjs";
import { t as Badge } from "./badge-peS3T6f-.mjs";
import { t as Segment } from "./segment-B8mJrkRx.mjs";
import { D as regimeFromFlags, _ as REGIMES, n as COOPERATION, s as FARMER_MAP } from "./machine-BioQdnd1.mjs";
import { n as useInvictus, t as selectPie } from "./machine-Bjr8a6kw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn.atlas-CvZMjBLr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PieDonut({ pie, size = 220 }) {
	const r = 72;
	const c = 2 * Math.PI * r;
	let offset = 0;
	const cx = 110;
	const cy = 110;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 220 220",
		width: size,
		height: size,
		className: "mx-auto text-fg",
		role: "img",
		"aria-label": "Portfolio allocation",
		children: [
			pie.map((line) => {
				const len = line.weight / 100 * c;
				const dash = `${len} ${c - len}`;
				const el = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r,
					fill: "none",
					className: line.sleeve === 1 ? "stroke-accent" : "stroke-hold",
					strokeWidth: "22",
					strokeDasharray: dash,
					strokeDashoffset: -offset,
					opacity: .35 + line.weight / 50 * .65,
					transform: `rotate(-90 ${cx} ${cy})`
				}, line.ticker);
				offset += len;
				return el;
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx,
				cy,
				r: "52",
				className: "fill-bg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: cx,
				y: 104,
				textAnchor: "middle",
				className: "fill-fg",
				fontSize: "22",
				fontFamily: "Newsreader, Georgia, serif",
				children: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: cx,
				y: 124,
				textAnchor: "middle",
				className: "fill-muted",
				fontSize: "9",
				letterSpacing: "0.18em",
				children: "LINES"
			})
		]
	});
}
function fitTone(fit) {
	if (fit === "earn") return "earn";
	if (fit === "suffer") return "suffer";
	return "hold";
}
function AtlasPage() {
	const store = useInvictus();
	const pie = selectPie(store.pieMode);
	const regime = regimeFromFlags(store.growth, store.inflation);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(pie[0]?.ticker ?? "VWRP");
	const visible = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return pie.filter((l) => {
			if (filter === "1" && l.sleeve !== 1) return false;
			if (filter === "2" && l.sleeve !== 2) return false;
			if (!query) return true;
			return l.ticker.toLowerCase().includes(query) || l.name.toLowerCase().includes(query) || l.job.toLowerCase().includes(query);
		});
	}, [
		pie,
		filter,
		q
	]);
	const s1 = pie.filter((l) => l.sleeve === 1).reduce((s, l) => s + l.weight, 0);
	const s2 = pie.filter((l) => l.sleeve === 2).reduce((s, l) => s + l.weight, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stamp text-[11px] text-accent",
						children: store.pieMode === "revised" ? "Revised preview" : "12 Sep machine draft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-mono text-4xl tracking-tight",
						children: "Sixteen lines. Sixteen jobs."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm leading-relaxed text-muted",
						children: "No line suffers alone. Search a ticker. Open the story. This is the draft atlas — not Prime weights."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-8 md:grid-cols-[220px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieDonut, { pie }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Sleeve 1 · growth & real",
							v: `${s1.toFixed(1)}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Sleeve 2 · defensive",
							v: `${s2.toFixed(1)}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Equity look-through",
							v: "~57%"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Real assets",
							v: "18%"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex rounded-md border border-line bg-panel p-1",
					children: [
						["all", "All"],
						["1", "Sleeve 1"],
						["2", "Sleeve 2"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(id),
						className: cn("h-9 rounded-sm px-3 font-mono text-xs", filter === id ? "bg-accent text-bg" : "text-muted"),
						children: label
					}, id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search ticker, job…",
					className: "h-11 min-h-11 flex-1 rounded-md border border-line bg-panel px-3 font-mono text-sm text-fg placeholder:text-faint"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: visible.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineRow, {
					line,
					regime,
					open: open === line.ticker,
					onToggle: () => setOpen(open === line.ticker ? null : line.ticker)
				}, line.ticker))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "Cooperation map"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-prose font-sans text-sm text-muted",
					children: "Every line has at least one partner that earns when it suffers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 divide-y divide-line overflow-hidden rounded-md border border-line",
					children: COOPERATION.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1 bg-panel px-5 py-3 sm:grid-cols-2 sm:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-sm text-down",
							children: row.suffers
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-sm text-up",
							children: row.earns
						})]
					}, row.suffers))
				})
			] })
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
function LineRow({ line, regime, open, onToggle }) {
	const fit = line.regimes[regime];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-md border border-line bg-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onToggle,
			className: "flex min-h-11 w-full items-center gap-3 px-4 py-3 text-left sm:px-5",
			"aria-expanded": open,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-14 font-mono text-sm text-cyan",
					children: line.ticker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden flex-1 truncate font-sans text-sm text-muted sm:block",
					children: line.job
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-auto flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: fitTone(fit),
						children: fit
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-sm tabular-nums",
						children: [line.weight.toFixed(1), "%"]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-line px-4 py-5 sm:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm",
					children: line.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-prose font-sans text-sm leading-relaxed text-muted",
					children: line.story
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-sans text-[15px] italic",
					children: line.analogy
				}),
				FARMER_MAP[line.ticker] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-mono text-xs text-faint",
					children: [
						"On the farm: ",
						FARMER_MAP[line.ticker],
						"."
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-mono text-xs text-faint",
					children: "Specialist tool — a small job no other line does."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: "Floor–cap",
							v: `${line.floor}–${line.cap}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: "5-year",
							v: formatPct(line.fiveYear, 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: "2022",
							v: line.y2022 === null ? "n/a" : formatPct(line.y2022, 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: "TER",
							v: line.ter
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-1.5",
					children: REGIMES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: fitTone(line.regimes[r.id]),
						children: [
							r.name,
							": ",
							line.regimes[r.id]
						]
					}, r.id))
				}),
				line.partnersWhenSuffers.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 font-sans text-xs text-muted",
					children: ["When this suffers: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-up",
						children: line.partnersWhenSuffers.join(", ")
					})]
				}) : null,
				line.probation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-mono text-xs text-yellow",
					children: line.probation
				}) : null,
				line.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-sans text-xs text-faint",
					children: line.notes
				}) : null
			]
		}) : null]
	});
}
function Mini({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "stamp text-[10px] text-muted",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 font-mono tabular-nums",
		children: v
	})] });
}
//#endregion
export { AtlasPage as component };
