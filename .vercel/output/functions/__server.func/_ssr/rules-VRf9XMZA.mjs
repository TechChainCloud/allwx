import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as jobById, _ as JOBS } from "./router-CI7Ar9vC.mjs";
import { c as HIERARCHY } from "./brief-C4sXEM1E.mjs";
import { _ as SKELETON_RIGHT, d as MILESTONES, f as POSTURES, g as SKELETON_GAPS, l as GATES, m as SCORECARD, n as CANDIDATES, o as DRAWDOWN, s as DRIFT_RULES, t as BASE_WEIGHTS, u as META, y as weightsFor } from "./ops-pSK4rWq3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rules-VRf9XMZA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	"SCORE",
	"HIER",
	"DRIFT",
	"STAGE",
	"DRAWDOWN",
	"GATES",
	"SCALE"
];
function RulesPage() {
	const [tab, setTab] = (0, import_react.useState)("SCORE");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
				children: "RULES · TWO CLOCKS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-mono text-4xl tracking-tight",
				children: "The machine runs. Upgrades wait."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted",
				children: "Weight changes are mechanical and monthly. New instruments are rare and scale-triggered. Conflating the two clocks is how compounding dies. Classroom object — not a personal plan, not a live mandate."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `h-11 rounded-sm px-3 font-mono text-xs ${tab === t ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"}`,
					children: t
				}, t))
			}),
			tab === "SCORE" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreTab, {}),
			tab === "HIER" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HierTab, {}),
			tab === "DRIFT" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DriftTab, {}),
			tab === "STAGE" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageTab, {}),
			tab === "DRAWDOWN" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawdownTab, {}),
			tab === "GATES" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GatesTab, {}),
			tab === "SCALE" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleTab, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 max-w-3xl font-sans text-sm leading-relaxed text-muted",
				children: META
			})
		]
	});
}
function HierTab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-2xl font-sans text-sm leading-relaxed text-muted",
			children: "Six-priority stack. Higher number does not fire if a higher priority already claimed the cash. Walk-back currently inactive."
		}), HIERARCHY.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-md border border-line bg-panel p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs text-cyan",
					children: [
						h.n,
						" · ",
						h.name.toUpperCase()
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-sans text-sm leading-relaxed",
					children: h.rule
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-mono text-[11px] text-muted",
					children: h.now
				})
			]
		}, h.n))]
	});
}
function ScoreTab() {
	const total = SCORECARD.reduce((a, d) => a + d.score, 0);
	const max = SCORECARD.reduce((a, d) => a + d.of, 0);
	const rating = Math.round(total / max * 100) / 10;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "CLASSROOM SCORE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-3xl tabular-nums text-accent",
					children: [rating.toFixed(1), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: " / 10"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl font-sans text-sm text-muted",
				children: "Architecture is already a nine. The gap to ten is process, rules, and scale — not a new theme fund."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 space-y-3",
				children: SCORECARD.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3 font-mono text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cyan",
								children: d.dim.toUpperCase()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-accent",
								children: [
									d.score,
									"/",
									d.of
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-1.5 bg-bg-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-accent",
								style: { width: `${d.score / d.of * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-sm leading-relaxed text-muted",
							children: d.why
						})
					]
				}, d.dim))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-mono text-sm text-up",
					children: "WHAT THE SKELETON GETS RIGHT"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: SKELETON_RIGHT.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l-2 border-up pl-3 font-sans text-sm leading-relaxed",
						children: line
					}, line))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-mono text-sm text-yellow",
					children: "HONEST GAPS · SCALE-GATED"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: SKELETON_GAPS.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l-2 border-yellow pl-3 font-sans text-sm leading-relaxed",
						children: line
					}, line))
				})] })]
			})
		]
	});
}
function DriftTab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "TRIGGER A · DRIFT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl font-sans text-sm text-muted",
				children: "The only frequent reason to touch a weight. Monthly. On the contribution date. ±3pp after new cash has already been pointed at the thin sleeve."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 space-y-3",
				children: DRIFT_RULES.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 rounded-md border border-line bg-panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-accent",
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-sm leading-relaxed",
						children: line
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-mono text-[11px] text-muted",
				children: "Any other reason to change a weight is noise — including a good week in commodities and a bad print in gold."
			})
		]
	});
}
function StageTab() {
	const [id, setId] = (0, import_react.useState)("base");
	const posture = POSTURES.find((p) => p.id === id);
	const w = weightsFor(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "TRIGGER B · CONFIRMED STAGE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl font-sans text-sm text-muted",
				children: "A single print does not rotate the book. Three questions, two consecutive readings. The machine is slow on purpose."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: POSTURES.filter((p) => p.when !== "Risk protocol").map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setId(p.id),
					className: `h-11 rounded-sm px-3 font-mono text-[11px] ${id === p.id ? "bg-cyan text-bg" : "bg-panel text-fg hover:bg-line"}`,
					children: p.name.toUpperCase()
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-5 rounded-md border border-line bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] text-cyan",
						children: posture.when
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-mono text-xl",
						children: posture.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm leading-relaxed",
						children: posture.confirm
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 border-l-2 border-accent pl-3 font-sans text-sm",
						children: posture.note
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeightBars, { weights: w })
		]
	});
}
function DrawdownTab() {
	const [id, setId] = (0, import_react.useState)("base");
	const risk = POSTURES.filter((p) => p.when === "Risk protocol" || p.id === "base");
	const w = weightsFor(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "TRIGGER C · DRAWDOWN"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl font-sans text-sm text-muted",
				children: "Written before the pain. Applied when the lock is hit. A protocol written during a drawdown is a rationalisation."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3 md:grid-cols-2",
				children: DRAWDOWN.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-accent",
							children: d.level
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-[11px] text-cyan",
							children: d.band
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-sm leading-relaxed",
							children: d.action
						})
					]
				}, d.level))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
				children: "Simulator · teaching postures"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: risk.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setId(p.id),
					className: `h-11 rounded-sm px-3 font-mono text-[11px] ${id === p.id ? "bg-down text-fg" : "bg-panel text-fg hover:bg-line"}`,
					children: p.name.toUpperCase()
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeightBars, { weights: w })
		]
	});
}
function GatesTab() {
	const [id, setId] = (0, import_react.useState)(CANDIDATES[0].id);
	const c = CANDIDATES.find((x) => x.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "ADDING A LINE · FOUR GATES"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl font-sans text-sm text-muted",
				children: "Fail any one gate and the line does not open. The bar is high on purpose."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3 md:grid-cols-2",
				children: GATES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-accent",
							children: g.name.toUpperCase()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm text-up",
							children: g.pass
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm text-down",
							children: g.fail
						})
					]
				}, g.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
				children: "Sit a candidate in the gates"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: CANDIDATES.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setId(x.id),
					className: `h-11 rounded-sm px-3 font-mono text-[11px] ${id === x.id ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"}`,
					children: x.name.toUpperCase()
				}, x.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-5 rounded-md border border-line bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] text-cyan",
						children: [
							"PHASE ",
							c.phase === 0 ? "VETO" : c.phase,
							" · TARGET ",
							c.target
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-mono text-xl",
						children: c.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-sans text-sm text-muted",
						children: c.fundedBy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: Object.keys(c.gates).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `rounded-sm px-2 py-2 font-mono text-[11px] ${c.gates[k] ? "bg-up/15 text-up" : "bg-down/15 text-down"}`,
							children: [
								k.toUpperCase(),
								" ",
								c.gates[k] ? "PASS" : "FAIL"
							]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-sm leading-relaxed",
						children: c.verdict
					})
				]
			})
		]
	});
}
function ScaleTab() {
	const stops = [
		710,
		5e3,
		1e4,
		2e4,
		5e4,
		1e5
	];
	const [i, setI] = (0, import_react.useState)(0);
	const book = stops[i];
	const row = (0, import_react.useMemo)(() => {
		if (book < 5e3) return MILESTONES[0];
		if (book === 5e3) return MILESTONES[1];
		if (book < 1e4) return MILESTONES[2];
		if (book === 1e4) return MILESTONES[3];
		if (book < 2e4) return MILESTONES[4];
		if (book < 5e4) return MILESTONES[5];
		if (book === 5e4) return MILESTONES[6];
		if (book < 1e5) return MILESTONES[7];
		return MILESTONES[8];
	}, [book]);
	const onePct = (book * .01).toFixed(2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "MILESTONE MAP"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-2xl font-sans text-sm text-muted",
				children: [
					"Until roughly £20,000 the contribution decision dwarfs every allocation decision. At £710, a one-percent better year is £",
					onePct,
					". An extra fifty pounds is £",
					50,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: stops.length - 1,
					step: 1,
					value: i,
					onChange: (e) => setI(Number(e.target.value)),
					className: "w-full accent-[var(--color-accent)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex justify-between font-mono text-[10px] text-muted",
					children: stops.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["£", s >= 1e3 ? `${s / 1e3}k` : s] }, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-5 rounded-md border border-accent/40 bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] text-cyan",
						children: row.band
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mt-1 font-mono text-2xl tabular-nums",
						children: ["£", book.toLocaleString("en-GB")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-sans text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-accent",
							children: "PRIMARY. "
						}), row.focus]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-sans text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-cyan",
							children: "SECONDARY. "
						}), row.secondary]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-sans text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-yellow",
							children: "IGNORE. "
						}), row.ignore]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-sans text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-up",
							children: "ACTION. "
						}), row.action]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto rounded-md border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[720px] text-left font-mono text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-2 text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "BAND"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "FOCUS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "IGNORE"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: MILESTONES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-cyan",
								children: m.band
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-fg",
								children: m.focus
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-muted",
								children: m.ignore
							})
						]
					}, m.band)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-mono text-[11px] text-muted",
				children: [
					"Phase 2 additions live on",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cases",
						className: "text-accent hover:underline",
						children: "CASES"
					}),
					" ",
					"as cousins, not as tonight's order ticket."
				]
			})
		]
	});
}
function WeightBars({ weights }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 space-y-2",
		children: JOBS.map((j) => {
			const now = weights[j.id] ?? j.weight;
			const delta = now - BASE_WEIGHTS[j.id];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex items-center justify-between font-mono text-[11px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/jobs/$id",
					params: { id: j.id },
					className: "hover:text-accent",
					children: jobById(j.id).name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums text-muted",
					children: [
						now,
						"%",
						" ",
						delta !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: delta > 0 ? "text-up" : "text-down",
							children: delta > 0 ? `+${delta}` : delta
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1.5 bg-bg-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full",
					style: {
						width: `${now}%`,
						background: j.color
					}
				})
			})] }, j.id);
		})
	});
}
//#endregion
export { RulesPage as component };
