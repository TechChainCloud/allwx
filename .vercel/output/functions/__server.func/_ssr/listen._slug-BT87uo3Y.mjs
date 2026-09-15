import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as formatTime, r as formatDurationLabel } from "./utils-Cz9L5vlx.mjs";
import { i as Play, o as ChevronRight, s as ChevronLeft } from "../_libs/lucide-react.mjs";
import { D as prevEpisode, E as nextEpisode, T as jobById, g as EPISODES, m as usePlayer, n as Route, p as Button, w as WEATHERS } from "./router-CI7Ar9vC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listen._slug-BT87uo3Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Listen() {
	const ep = Route.useLoaderData();
	const play = usePlayer((s) => s.play);
	const playing = usePlayer((s) => s.playing && s.slug === ep.slug);
	const rawPos = usePlayer((s) => s.positions[ep.slug] ?? 0);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	const pos = ready ? rawPos : 0;
	const nxt = nextEpisode(ep.slug);
	const prev = prevEpisode(ep.slug);
	const i = EPISODES.findIndex((e) => e.slug === ep.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/listen",
					className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent hover:text-fg",
					children: ["SERIES ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "<GO>"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] text-muted",
					children: [
						i + 1,
						" / ",
						EPISODES.length,
						" · ",
						formatDurationLabel(ep.duration),
						" · ",
						ep.season ?? "S1"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-1 overflow-x-auto pb-1",
				children: EPISODES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/listen/$slug",
					params: { slug: e.slug },
					className: `flex size-9 shrink-0 items-center justify-center rounded-sm font-mono text-[11px] ${e.slug === ep.slug ? "bg-accent text-bg" : "bg-panel text-muted hover:text-fg"}`,
					children: e.code
				}, e.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 font-mono text-4xl leading-[1.05] tracking-tight",
				children: ep.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-sans text-lg leading-relaxed text-muted",
				children: ep.subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan",
				children: "Two-desk · DESK / RATES · education only"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						onClick: () => play(ep.slug, pos > 12 ? pos : 0),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 translate-x-px fill-current" }), playing ? "PLAYING" : pos > 12 ? "RESUME" : "PLAY"]
					}),
					prev && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "lg",
						onClick: () => play(prev.slug),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), prev.code]
					}),
					nxt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "lg",
						onClick: () => play(nxt.slug),
						children: [nxt.code, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "self-center font-mono text-sm tabular-nums text-muted",
						children: [
							formatTime(pos),
							" / ",
							formatTime(ep.duration)
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 flex flex-wrap gap-2",
				children: ep.jobIds.map((id) => {
					const job = jobById(id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/jobs/$id",
						params: { id },
						className: "inline-flex items-center gap-2 rounded-sm bg-panel px-3 py-1.5 font-mono text-xs text-muted hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2 rounded-full",
							style: { background: job.color }
						}), job.role]
					}, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "TAKEAWAYS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: ep.takeaways.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l-2 border-accent pl-4 font-sans text-base leading-relaxed",
						children: t
					}, t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "CHAPTERS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 divide-y divide-line rounded-md border border-line bg-panel",
					children: ep.chapters.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex min-h-11 w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-bg-2",
						onClick: () => play(ep.slug, ch.t),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-sm",
							children: ch.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs tabular-nums text-muted",
							children: formatTime(ch.t)
						})]
					}) }, ch.t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "ROOMS IN THIS EP"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: WEATHERS.filter((w) => ep.weatherIds.includes(w.id)).map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/weathers",
						className: "rounded-md border border-line bg-panel p-4 hover:border-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
							children: [
								"G ",
								w.growth,
								" · I ",
								w.inflation
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-mono text-lg",
							children: w.name
						})]
					}, w.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "TRANSCRIPT"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose-episode mt-5 space-y-4 font-sans text-[1.05rem] leading-[1.65] text-fg",
					children: ep.transcript.map((line, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "grid gap-1 sm:grid-cols-[4.5rem_1fr] sm:gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `font-mono text-[10px] tracking-[0.18em] ${line.who === "DESK" ? "text-accent" : "text-cyan"}`,
							children: line.who
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.text })]
					}, `${line.who}-${idx}`))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2",
				children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/listen/$slug",
					params: { slug: prev.slug },
					className: "rounded-md border border-line bg-panel p-4 hover:border-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] text-muted",
						children: "PREV"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-mono text-sm",
						children: [
							prev.code,
							" · ",
							prev.title
						]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), nxt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/listen/$slug",
					params: { slug: nxt.slug },
					className: "rounded-md border border-line bg-panel p-4 hover:border-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] text-muted",
						children: "NEXT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-mono text-sm",
						children: [
							nxt.code,
							" · ",
							nxt.title
						]
					})]
				})]
			})
		]
	});
}
//#endregion
export { Listen as component };
