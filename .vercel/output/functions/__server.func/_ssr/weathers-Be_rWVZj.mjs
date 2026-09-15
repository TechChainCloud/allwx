import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as jobById, h as DRILLS, w as WEATHERS } from "./router-CI7Ar9vC.mjs";
import { n as WeatherGlyph, t as JobMark } from "./marks-C28L2rEW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/weathers-Be_rWVZj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WeathersPage() {
	const [picked, setPicked] = (0, import_react.useState)({});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
				children: "MACHINE · FOUR ROOMS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-mono text-4xl tracking-tight",
				children: "Two surprises. Four rooms."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted",
				children: "Growth can surprise up or down. Inflation can surprise up or down. No liquid asset owns all four. That is the entire argument for a team. Assign the tape until it is automatic."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2",
				children: WEATHERS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-panel p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.16em] text-cyan",
								children: [
									"G ",
									w.growth,
									" · I ",
									w.inflation
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-mono text-2xl",
								children: w.name
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherGlyph, {
									id: w.id,
									className: "size-10"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-[11px] text-muted",
							children: w.bbg
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-sm leading-relaxed",
							children: w.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm italic text-muted",
							children: w.young
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.14em] text-up",
								children: "Paid"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-1.5",
								children: w.paid.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/jobs/$id",
									params: { id },
									className: "inline-flex items-center gap-2 font-mono text-xs hover:text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobMark, {
										id,
										className: "size-4"
									}), jobById(id).name]
								}) }, id))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.14em] text-down",
								children: "Fined"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-1.5",
								children: w.fined.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "font-mono text-xs text-muted",
									children: jobById(id).name
								}, id))
							})] })]
						})
					]
				}, w.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-3xl tracking-tight",
						children: "ASSIGN THE TAPE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl font-sans text-base text-muted",
						children: "Month one is this drill until it is automatic. The map is a map, not a clock."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4",
						children: DRILLS.map((d) => {
							const choice = picked[d.id];
							const revealed = Boolean(choice);
							const correct = choice === d.answer;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-line bg-panel p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-base leading-relaxed",
										children: d.headline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: WEATHERS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setPicked((p) => ({
												...p,
												[d.id]: w.id
											})),
											className: `h-10 rounded-sm px-3 font-mono text-xs ${choice === w.id ? "bg-accent text-bg" : "bg-line text-fg hover:bg-bg-2"}`,
											children: w.name
										}, w.id))
									}),
									revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 font-sans text-sm leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: correct ? "text-up" : "text-down",
											children: correct ? "RIGHT ROOM. " : "DIFFERENT ROOM. "
										}), d.why]
									})
								]
							}, d.id);
						})
					})
				]
			})
		]
	});
}
//#endregion
export { WeathersPage as component };
