import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as jobById, _ as JOBS, a as FUNCTIONS, c as TAPE, d as TAPE_REGIME, f as TAPE_STAGE, i as CORRELATIONS, l as TAPE_ASOF, o as SHOCKS, s as STAGES, u as TAPE_OVERLAY, w as WEATHERS } from "./router-CI7Ar9vC.mjs";
import { t as JobMark } from "./marks-C28L2rEW.mjs";
import { a as DESK_EVENT, c as FOMC, h as SEVEN_TONIGHT, i as DESK_CLOCK, p as RHYTHM, r as DESK_ASOF, v as WATCH } from "./ops-pSK4rWq3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tape-B7LGdYIY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SESSION_CLOCK = "17:35 BST";
var SESSION_HEADLINE = "Brent $100.95 and a $6bn long-dated buyback versus $10bn priced. Yields at new YTD highs. Equities sold. Stagflation overlay is now co-primary. ICOM was the only Invictus line green. IDTL is in the penalty box. House holds. Walk-back inactive. No action. Next cash: 3 Oct.";
var SESSION_CHAIN = "Brent > $100 → hike odds up → VAGS/IDTL taxed → ICOM paid → SGLN mixed (crisis bid vs real-yield tax) → VWRP and every satellite marked down on risk-off. Under-earning is the view, not a failure.";
var SESSION_LINES = [
	{
		ticker: "VWRP",
		sleeve: "core",
		w: 23.8,
		day: -.86,
		dir: "down",
		signal: "Rate/oil shock. PMI still 54.6. Medium-term job intact."
	},
	{
		ticker: "VAGS",
		sleeve: "core",
		w: 13.5,
		day: -.41,
		dir: "down",
		signal: "UK gilt +8.8bp. US 10Y ~4.83. Duration tax. Trimmed weight is the posture."
	},
	{
		ticker: "ITPS",
		sleeve: "core",
		w: 12.5,
		day: -.26,
		dir: "down",
		signal: "Indexation vs rising real yield. GTII10 ~2.30, still below 2.50."
	},
	{
		ticker: "SGLN",
		sleeve: "core",
		w: 9.6,
		day: -.1,
		dir: "down",
		signal: "Gold +1.1% in USD; wrapper marked slightly red. Crisis bid vs real-yield tax."
	},
	{
		ticker: "ICOM",
		sleeve: "core",
		w: 9.6,
		day: .84,
		dir: "up",
		signal: "$100 trigger fired. Only Invictus line green. Do not chase the cap."
	},
	{
		ticker: "CSH2",
		sleeve: "core",
		w: 6.5,
		day: .02,
		dir: "up",
		signal: "Carry accruing. Optionality intact."
	},
	{
		ticker: "IDTL",
		sleeve: "core",
		w: 5.3,
		day: -.74,
		dir: "down",
		signal: "GT30 ~5.25–5.30. Green light on. Duration hit 5.40 not fired. Do not sell."
	},
	{
		ticker: "INXG",
		sleeve: "core",
		w: 3.8,
		day: -.77,
		dir: "down",
		signal: "UK 10Y 5.261. Duration tax today. RPI thesis intact. Probation stands."
	},
	{
		ticker: "IGLS",
		sleeve: "core",
		w: 2.8,
		day: -.21,
		dir: "down",
		signal: "UK 2Y 4.697. Carry well above 3.5. Short duration limited the damage."
	},
	{
		ticker: "DFNS",
		sleeve: "sat",
		w: 2.9,
		day: -1.48,
		dir: "down",
		signal: "Thesis intact. Risk-off, not a fundamental break."
	},
	{
		ticker: "SMGB",
		sleeve: "sat",
		w: 2.6,
		day: -.57,
		dir: "down",
		signal: "Foundry tape still strong. Price is risk-off."
	},
	{
		ticker: "COPA",
		sleeve: "sat",
		w: 2.6,
		day: -.39,
		dir: "down",
		signal: "COPG −0.80. Verify T212 wrapper before 3 Oct."
	},
	{
		ticker: "XDWI",
		sleeve: "sat",
		w: 2.1,
		day: -1.6,
		dir: "down",
		signal: "Industrial cycle + European energy shock."
	},
	{
		ticker: "XDWH",
		sleeve: "sat",
		w: 1.8,
		day: -.28,
		dir: "down",
		signal: "Most resilient satellite. Defensive job working."
	},
	{
		ticker: "URNG",
		sleeve: "sat",
		w: 1.1,
		day: -2.77,
		dir: "down",
		signal: "Worst mark. Tiny on purpose. No identified catalyst."
	}
];
var SESSION_TRIGGERS = [
	{
		name: "Walk-back",
		object: "2s10s < 0 AND PMI < 50",
		now: "+38bp / 54.6",
		status: "OFF",
		note: "Neither key. Full £200 still splits unless both fire."
	},
	{
		name: "IDTL green light",
		object: "GT30",
		now: "~5.25–5.30%",
		status: "ON",
		note: "Above 5.00. First signal to add toward cap 8% with new cash — not a sale, not tonight."
	},
	{
		name: "IDTL duration hit",
		object: "GT30",
		now: "~5.25–5.30%",
		status: "OFF",
		note: "Pain 5.40. Below it. Hold."
	},
	{
		name: "ICOM $100",
		object: "CO1",
		now: "$100.95",
		status: "ON",
		note: "Co-primary overlay. Cap still applies. Do not enlarge on a session."
	},
	{
		name: "ITPS drag",
		object: "GTII10",
		now: "~2.30%",
		status: "OFF",
		note: "Threshold 2.50. Monitor into CPI."
	},
	{
		name: "BEI rip",
		object: "USGGBE10",
		now: "2.382%",
		status: "WATCH",
		note: "Threshold 2.50. Direction up. 132bp gap vs PCE 3.7."
	},
	{
		name: "IGLS carry",
		object: "UK 2Y",
		now: "4.697%",
		status: "OFF",
		note: "Compression below 3.5. Carry intact."
	},
	{
		name: "Dollar squeeze",
		object: "DXY",
		now: "98.81",
		status: "OFF",
		note: "Band 97–102."
	}
];
var SESSION_NEWS = [
	{
		k: "Brent > $100",
		body: "Hormuz. ICOM paid. Overlay co-primary. VWRP/VAGS/IDTL taxed."
	},
	{
		k: "$6bn buyback",
		body: "Street wanted ~$10bn. Long end sold. IDTL deeper in the penalty box. Fiscal/term-premium, not a regime change."
	},
	{
		k: "EU gas > €80",
		body: "First print since 2023. Energy 37% of BCOM. XDWI and European equities headwind."
	},
	{
		k: "Bailey / ECB",
		body: "Crack spreads as an inflation metric. Up to four more hikes by end-2027 priced. INXG thesis, IGLS carry."
	},
	{
		k: "IG supply",
		body: "Record corporate issuance. HY OAS still 267. Credit not yet the crack."
	},
	{
		k: "Foundry tape",
		body: "SMGB thesis intact. Price is risk-off, not a broken foundry cycle."
	}
];
function TapePage() {
	const [open, setOpen] = (0, import_react.useState)(TAPE[0]?.mnemonic ?? null);
	const [shock, setShock] = (0, import_react.useState)(SHOCKS[1]);
	const room = WEATHERS.find((w) => w.id === shock.room);
	const print = TAPE.find((p) => p.mnemonic === open) ?? TAPE[0];
	const sleeveState = (0, import_react.useMemo)(() => {
		const paid = new Set(room.paid);
		const fined = new Set(room.fined);
		return JOBS.map((j) => ({
			job: j,
			state: paid.has(j.id) ? "PAID" : fined.has(j.id) ? "FINED" : "FLAT"
		}));
	}, [room]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
				children: [
					"TAPE · ",
					TAPE_ASOF,
					" · ",
					DESK_CLOCK,
					" · READ ONLY"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-mono text-4xl tracking-tight",
				children: "Measurement system"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted",
				children: [SESSION_HEADLINE, " Not a live B-PIPE. Not a ticket. Next print: Thursday CPI. Then 16 Sep FOMC. Then 3 Oct. See HOUSE → PLAN."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "STAGE",
						v: TAPE_STAGE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "REGIME",
						v: TAPE_REGIME.toUpperCase()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "TAIL",
						v: TAPE_OVERLAY
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "NEXT EVENT",
						v: DESK_EVENT
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-3xl font-sans text-sm leading-relaxed text-muted",
				children: SESSION_CHAIN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-mono text-2xl",
					children: ["TRIGGERS · ", SESSION_CLOCK]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 md:grid-cols-2",
					children: SESSION_TRIGGERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-md border border-line bg-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-sm text-cyan",
									children: t.name.toUpperCase()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `font-mono text-[11px] ${t.status === "ON" ? "text-accent" : t.status === "WATCH" ? "text-yellow" : "text-muted"}`,
									children: t.status
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-mono text-[11px] text-muted",
								children: [
									t.object,
									" · ",
									t.now
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-sans text-sm leading-relaxed text-muted",
								children: t.note
							})
						]
					}, t.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-2xl",
						children: "SESSION MARKS · 1D"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-sans text-sm text-muted",
						children: "Price, not drift. Drift needs T212 units before 3 Oct. Education only."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-x-auto rounded-md border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[640px] text-left font-mono text-[11px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-bg-2 text-[10px] uppercase text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Line"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Wt"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "1D"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Signal"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: SESSION_LINES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-line",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 text-cyan",
										children: r.ticker
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 tabular-nums",
										children: r.w.toFixed(1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: `px-3 py-2 tabular-nums ${r.day >= 0 ? "text-up" : "text-down"}`,
										children: [
											r.day >= 0 ? "+" : "",
											r.day.toFixed(2),
											"%"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 font-sans text-[12px] text-muted",
										children: r.signal
									})
								]
							}, r.ticker)) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "SESSION NEWS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: SESSION_NEWS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-line bg-panel p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-accent",
							children: n.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm leading-relaxed",
							children: n.body
						})]
					}, n.k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "SEVEN QUESTIONS · TONIGHT"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-2",
					children: SEVEN_TONIGHT.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-line bg-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-sm text-accent",
								children: [
									"Q",
									q.n,
									" · ",
									q.q
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-sans text-sm leading-relaxed",
								children: q.answer
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-mono text-[11px] text-muted",
								children: ["VS AM · ", q.vsMorning]
							})
						]
					}, q.n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "WATCH LEVELS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 md:grid-cols-2",
					children: WATCH.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-md border border-line bg-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3 font-mono text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-cyan",
									children: w.mnemonic
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: w.now
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-mono text-[11px] text-muted",
								children: [
									w.green ? `GREEN ${w.green}` : "",
									w.green && w.pain ? " · " : "",
									w.pain ? `PAIN ${w.pain}` : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-sans text-sm leading-relaxed text-muted",
								children: w.note
							})
						]
					}, w.mnemonic))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 overflow-x-auto rounded-md border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[720px] border-collapse text-left font-mono text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-2 text-[10px] uppercase tracking-wide text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "FN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Mnemonic"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Print"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Chg"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Reads"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: TAPE.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						onClick: () => setOpen(p.mnemonic),
						className: `cursor-pointer border-t border-line ${open === p.mnemonic ? "bg-line/60" : "hover:bg-panel"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-cyan",
								children: p.fn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-fg",
								children: p.mnemonic
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 tabular-nums",
								children: [p.value, p.unit]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `px-3 py-2 tabular-nums ${p.dir === "up" ? "text-up" : p.dir === "down" ? "text-down" : "text-muted"}`,
								children: p.chg
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-muted",
								children: p.reads
							})
						]
					}, p.mnemonic)) })]
				})
			}),
			print && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-4 rounded-md border border-accent/40 bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] text-cyan",
						children: [
							print.fn,
							" · ",
							print.mnemonic,
							" · ",
							print.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm leading-relaxed",
						children: print.lever
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: print.sleeve.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/jobs/$id",
							params: { id },
							className: "inline-flex items-center gap-1.5 rounded-sm bg-line px-2 py-1 font-mono text-[11px] text-fg hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobMark, {
								id,
								className: "size-3.5"
							}), jobById(id).name]
						}, id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "OPERATING RHYTHM"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-x-auto rounded-md border border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[640px] text-left font-mono text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-bg-2 text-[10px] uppercase text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2",
									children: "When"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2",
									children: "Action"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2",
									children: "Decide?"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: RHYTHM.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-cyan",
									children: r.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: r.action
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-muted",
									children: r.decide
								})
							]
						}, r.when)) })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-2xl",
						children: "16 SEP FOMC · TEACHING PATHS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 md:grid-cols-3",
						children: FOMC.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-md border border-line bg-panel p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-sm text-accent",
									children: f.path
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-sans text-sm leading-relaxed",
									children: f.then
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-mono text-[11px] text-cyan",
									children: f.act
								})
							]
						}, f.path))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-sans text-sm text-muted",
						children: [
							DESK_ASOF,
							", ",
							DESK_CLOCK,
							". Close the brokerage screen. File GTII10 at 2.44. Set one alarm: GT30 at 5.40. That is tomorrow's first check. Protocols live on",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/rules",
								className: "text-accent hover:underline",
								children: "RULES"
							}),
							"."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-2xl",
						children: "SHOCK THE REGIME"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl font-sans text-sm text-muted",
						children: "Two surprises. Four rooms. Toggle a shock and watch who is paid. PORT stress as a thought experiment, not a forecast."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: SHOCKS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShock(s),
							className: `h-11 rounded-sm px-3 font-mono text-xs ${shock.id === s.id ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"}`,
							children: s.name.toUpperCase()
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-mono text-xs text-cyan",
						children: [
							"GROWTH ",
							shock.growth.toUpperCase(),
							" · INFLATION ",
							shock.inflation.toUpperCase(),
							" · ROOM",
							" ",
							room.name.toUpperCase()
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2 sm:grid-cols-2",
						children: sleeveState.map(({ job, state }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between rounded-md border border-line bg-panel px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 font-mono text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-2 rounded-full",
									style: { background: job.color }
								}), job.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: state === "PAID" ? "text-up" : state === "FINED" ? "text-down" : "text-muted",
								children: state
							})]
						}, job.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "FUNCTIONS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-2 md:grid-cols-2",
					children: FUNCTIONS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-md border border-line bg-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-sm text-accent",
								children: [
									f.fn,
									" ",
									"<GO>",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: ["· ", f.name]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-sans text-sm text-fg",
								children: f.use
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-sans text-xs text-muted",
								children: f.allwx
							})
						]
					}, f.fn))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "SHORT CYCLE · 6 STAGES"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-x-auto rounded-md border border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[640px] text-left font-mono text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-bg-2 text-[10px] uppercase text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2",
									children: "#"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2",
									children: "Stage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2",
									children: "Curve"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2",
									children: "Paid"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2",
									children: "Fined"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: `border-t border-line ${s.n === 3 ? "bg-line/40" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-accent",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-cyan",
									children: s.curve
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-up",
									children: s.paid
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-down",
									children: s.fined
								})
							]
						}, s.n)) })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "CORRELATIONS THAT LIE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-2",
					children: CORRELATIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-md border border-line bg-panel p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-cyan",
									children: "IF"
								}),
								" ",
								c.when,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "THEN"
								}),
								" ",
								c.then
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-sans text-xs text-muted",
							children: [
								c.strength,
								". Breaks when: ",
								c.breaks
							]
						})]
					}, c.when))
				})]
			})
		]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-line bg-panel p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[10px] text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-mono text-sm text-fg",
			children: v
		})]
	});
}
//#endregion
export { TapePage as component };
