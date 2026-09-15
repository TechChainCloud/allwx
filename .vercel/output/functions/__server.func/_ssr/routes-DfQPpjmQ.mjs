import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as formatDurationLabel } from "./utils-Cz9L5vlx.mjs";
import { c as Check, i as Play } from "../_libs/lucide-react.mjs";
import { C as TOTAL_DURATION, _ as JOBS, b as SERIES, c as TAPE, d as TAPE_REGIME, g as EPISODES, m as usePlayer, p as Button, u as TAPE_OVERLAY, v as PRINCIPLES, x as SEVEN_QUESTIONS } from "./router-CI7Ar9vC.mjs";
import { o as HOUSE_NAV, s as HOUSE_NAV_ASOF } from "./house-DTpSAIfY.mjs";
import { t as PieChart } from "./pie-chart-CDYmbvQ9.mjs";
import { t as JobMark } from "./marks-C28L2rEW.mjs";
import { m as SCORECARD } from "./ops-pSK4rWq3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DfQPpjmQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const play = usePlayer((s) => s.play);
	const completed = usePlayer((s) => s.completed);
	const positions = usePlayer((s) => s.positions);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	const done = ready ? completed.length : 0;
	const mins = Math.round(TOTAL_DURATION / 60);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-bg-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.22em] text-accent",
						children: [SERIES.season, " · 25–35 · ISA CLASSROOM"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-mono text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] text-fg",
						children: [
							"What do you own",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"if you are wrong?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl font-sans text-base leading-relaxed text-muted",
						children: "The Invictus knowledge desk. Four rooms you can press. Sixteen jobs with a story. A protocol that answers sell / add / walk-back. Classroom seven, live fourteen, Prime lock, machine draft — do not flatten them. Education only."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/learn",
								className: "inline-flex h-12 items-center rounded-md bg-accent px-5 font-mono text-sm text-bg",
								children: "OPEN LEARN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								onClick: () => play(EPISODES[0].slug),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 translate-x-px fill-current" }), "PLAY EP 01"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "outline",
								onClick: () => play("full-lesson"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 translate-x-px fill-current" }), "PLAY FULL LESSON"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tape",
								className: "inline-flex h-12 items-center font-mono text-sm text-cyan hover:text-fg",
								children: "OPEN TAPE →"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/house",
								className: "inline-flex h-12 items-center font-mono text-sm text-accent hover:text-fg",
								children: "OPEN HOUSE →"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/jobs",
								className: "hover:text-fg",
								children: "SLEEVES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cases",
								className: "hover:text-fg",
								children: "CASES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/rules",
								className: "hover:text-fg",
								children: "RULES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/study",
								className: "hover:text-fg",
								children: "STUDY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/debate",
								className: "hover:text-fg",
								children: "DEBATE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/weathers",
								className: "hover:text-fg",
								children: "ROOMS"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 font-mono text-xs tabular-nums text-faint",
						children: [
							EPISODES.length,
							" EP · ",
							mins,
							" MIN · ",
							done,
							"/",
							EPISODES.length,
							" HEARD · HOUSE £",
							HOUSE_NAV.toFixed(0),
							" · ",
							HOUSE_NAV_ASOF
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
						children: "Classroom object · not a prescription"
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-sm text-accent",
						children: "TAPE · AS OF CLASSROOM SNAPSHOT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] text-muted",
						children: [
							"REGIME ",
							TAPE_REGIME.toUpperCase(),
							" · ",
							TAPE_OVERLAY
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-5",
					children: TAPE.slice(0, 10).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/tape",
						className: "bg-panel p-3 hover:bg-bg-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] text-cyan",
								children: p.fn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-xs text-muted",
								children: p.mnemonic
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-mono text-lg tabular-nums text-fg",
								children: [p.value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-1 text-xs text-muted",
									children: p.unit
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `font-mono text-[11px] ${p.dir === "up" ? "text-up" : p.dir === "down" ? "text-down" : "text-muted"}`,
								children: p.chg
							})
						]
					}, p.mnemonic))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-xl text-fg",
					children: "SERIES"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "max-w-sm font-sans text-sm text-muted",
					children: [
						"Twelve teaching reads. Jobs, then the argument, then the tape.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/debate",
							className: "text-accent hover:underline",
							children: "DEBATE"
						}),
						" · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/lab",
							className: "text-cyan hover:underline",
							children: "LAB"
						}),
						" · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/study",
							className: "text-muted hover:underline",
							children: "STUDY"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 divide-y divide-line overflow-hidden rounded-md border border-line bg-panel",
				children: EPISODES.map((ep, i) => {
					const heard = ready && completed.includes(ep.slug);
					const started = ready && (positions[ep.slug] ?? 0) > 12;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col gap-3 p-4 sm:flex-row sm:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-10 shrink-0 font-mono text-lg text-accent",
								children: ep.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/listen/$slug",
										params: { slug: ep.slug },
										className: "font-mono text-base text-fg hover:text-cyan",
										children: ep.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-sans text-sm text-muted",
										children: ep.subtitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 font-mono text-[11px] tabular-nums text-faint",
										children: [formatDurationLabel(ep.duration), heard ? " · HEARD" : started ? " · IN PROGRESS" : ""]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [heard && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-8 items-center justify-center rounded-sm bg-up/15 text-up",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: i === 0 ? "primary" : "outline",
									size: "sm",
									onClick: () => play(ep.slug),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 translate-x-px" }), "PLAY"]
								})]
							})
						]
					}, ep.slug);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-bg-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-xl",
						children: "SEVEN QUESTIONS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl font-sans text-sm text-muted",
						children: "Morning operating system. Run them before you touch a weight."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 grid gap-2 md:grid-cols-2",
						children: SEVEN_QUESTIONS.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-line bg-panel p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[11px] text-accent",
									children: ["Q", q.n]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-sm text-fg",
									children: q.q
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-sans text-xs leading-relaxed text-muted",
									children: q.how
								})
							]
						}, q.n))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-xl",
				children: "SLEEVES"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-2 sm:grid-cols-2",
				children: JOBS.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/jobs/$id",
					params: { id: job.id },
					className: "flex gap-4 rounded-md border border-line bg-panel p-4 hover:border-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-12 shrink-0 items-center justify-center rounded-sm text-bg",
						style: { background: job.color },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobMark, {
							id: job.id,
							className: "size-7"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
							children: [
								job.weight,
								"% · ",
								job.bbg
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-mono text-base",
							children: job.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-sans text-sm text-muted",
							children: job.principle
						})
					] })]
				}, job.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-xl",
						children: "HOUSE · INVICTUS PRIME"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/house",
						className: "font-mono text-xs text-accent hover:underline",
						children: ["HOUSE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "<GO>"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 max-w-2xl font-sans text-sm text-muted",
					children: [
						"Design lock is Invictus Prime — fifteen lines. Live T212 is still fourteen at £",
						HOUSE_NAV.toFixed(2),
						" on ",
						HOUSE_NAV_ASOF,
						". Classroom seven stays the teaching object. Do not rebuild this week."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-line bg-panel p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] text-muted",
								children: "NAV"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-mono text-lg tabular-nums",
								children: ["£", HOUSE_NAV.toFixed(0)]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-line bg-panel p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] text-muted",
								children: "CORE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-lg tabular-nums",
								children: "80%"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-line bg-panel p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] text-muted",
								children: "ALT+SAT"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-lg tabular-nums",
								children: "20%"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-line bg-panel p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] text-muted",
								children: "NEXT CASH"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-lg",
								children: "3 OCT"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-xl",
						children: "CLASSROOM SCORE · 7 / 10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/rules",
						className: "font-mono text-xs text-accent hover:underline",
						children: ["RULES ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "<GO>"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl font-sans text-sm text-muted",
					children: "Architecture is a nine. The missing points are written protocols, automated contributions, and scale-gated upgrades — not an eighth theme."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-2 sm:grid-cols-5",
					children: SCORECARD.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-line bg-panel p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] text-muted",
							children: d.dim.toUpperCase()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-mono text-lg tabular-nums text-accent",
							children: [d.score, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: ["/", d.of]
							})]
						})]
					}, d.dim))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-xl",
				children: "FRIDGE"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 space-y-2",
				children: PRINCIPLES.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 font-sans text-sm leading-relaxed text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-6 shrink-0 font-mono text-accent",
						children: String(i + 1).padStart(2, "0")
					}), line]
				}, line))
			})]
		})
	] });
}
//#endregion
export { Home as component };
