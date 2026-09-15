import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as STUDY, v as PRINCIPLES } from "./router-CI7Ar9vC.mjs";
import { d as IF_THEN, o as FARMER } from "./machine-BioQdnd1.mjs";
import { i as LEARN_TRACKS, n as FOUR_BOOKS, r as GLOSSARY } from "./academy-BcrYIfmW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn.index-BelBbOcO.js
var import_jsx_runtime = require_jsx_runtime();
function LearnHub() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stamp text-[11px] text-accent",
						children: "Academy · education only"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 font-mono text-4xl leading-[1.1] tracking-tight",
						children: [
							"The Invictus classroom.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Jobs, rooms, protocol."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-base leading-relaxed text-muted",
						children: "A farmer does not need the forecast. He needs a farm that still stands. This desk is the same idea, taught as a machine you can press."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "max-w-3xl border-l border-accent pl-5 font-sans text-lg leading-relaxed italic text-fg",
				children: FARMER
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "Four books. Do not flatten them."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: FOUR_BOOKS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: b.href,
					className: "rounded-md border border-line bg-panel p-5 hover:border-accent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stamp text-[10px] text-cyan",
							children: b.asof
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-lg",
							children: b.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm leading-relaxed text-muted",
							children: b.job
						})
					]
				}, b.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "Tracks"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: LEARN_TRACKS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: t.href,
					className: "flex flex-col rounded-md border border-line bg-panel p-5 hover:border-accent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-lg",
							children: t.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 flex-1 font-sans text-sm leading-relaxed text-muted",
							children: t.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 stamp text-[10px] text-accent",
							children: [t.label, " →"]
						})
					]
				}, t.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "Twelve-month spine"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 grid gap-2 md:grid-cols-2",
					children: STUDY.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-line bg-panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "stamp text-[10px] text-cyan",
								children: m.month
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono",
								children: m.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-sans text-sm text-muted",
								children: m.body
							})
						]
					}, m.month))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/study",
					className: "mt-4 inline-block stamp text-[11px] text-accent",
					children: "OPEN STUDY →"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "Glossary"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 divide-y divide-line overflow-hidden rounded-md border border-line",
				children: GLOSSARY.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1 bg-panel px-4 py-3 sm:grid-cols-[9rem_7rem_1fr] sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-cyan",
							children: g.term
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stamp text-[10px] text-muted",
							children: g.group
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-sm leading-relaxed text-muted",
							children: g.def
						})
					]
				}, g.term))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "Fridge"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-2",
					children: PRINCIPLES.slice(0, 12).map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 font-sans text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-5 font-mono text-accent",
							children: i + 1
						}), line]
					}, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl font-sans text-sm italic text-muted",
					children: IF_THEN
				})
			] })
		]
	});
}
//#endregion
export { LearnHub as component };
