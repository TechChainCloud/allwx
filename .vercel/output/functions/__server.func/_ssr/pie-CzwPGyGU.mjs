import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as JOBS } from "./router-CI7Ar9vC.mjs";
import { t as PieChart } from "./pie-chart-CDYmbvQ9.mjs";
import { t as JobMark } from "./marks-C28L2rEW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pie-CzwPGyGU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PiePage() {
	const [active, setActive] = (0, import_react.useState)("shares");
	const job = JOBS.find((j) => j.id === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
				children: "MIX · CLASSROOM OBJECT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-mono text-4xl tracking-tight",
				children: "30 / 18 / 15 / 14 / 10 / 7 / 6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl font-sans text-lg leading-relaxed text-muted",
				children: [
					"Weights exist so seven engines can be heard. They are not sacred, not optimal, and not personalised. The live sterling ISA translation lives on",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/house",
						className: "text-accent hover:underline",
						children: "HOUSE"
					}),
					"— core jobs plus an alt and six satellite tickets."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-md border border-line bg-panel p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, {
						active,
						onSelect: setActive
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
						children: "Selected"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 items-center justify-center rounded-sm text-bg",
							style: { background: job.color },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobMark, {
								id: job.id,
								className: "size-7"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-mono text-2xl",
							children: job.role
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-sm text-muted",
							children: [
								job.name,
								" · ",
								job.weight,
								"% · ",
								job.bbg
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 font-sans leading-relaxed",
						children: job.principle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm text-muted",
						children: job.forYoung
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/jobs/$id",
						params: { id: job.id },
						className: "mt-5 inline-block font-mono text-sm text-accent hover:underline",
						children: "OPEN SLEEVE →"
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 divide-y divide-line overflow-hidden rounded-md border border-line bg-panel",
				children: JOBS.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActive(j.id),
					className: "flex w-full items-center gap-4 px-4 py-3 text-left hover:bg-bg-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2.5 rounded-full",
							style: { background: j.color }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "w-10 font-mono tabular-nums",
							children: [j.weight, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 font-sans",
							children: j.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden font-mono text-xs text-muted sm:inline",
							children: j.bbg
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1 bg-bg-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full",
						style: {
							width: `${j.weight}%`,
							background: j.color
						}
					})
				})] }, j.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-10 rounded-md border border-line bg-bg-2 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-xl",
					children: "A younger saver"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted",
					children: "Future wages still ahead can often bear more listed equity than this classroom object shows. That is a conversation about the whole balance sheet, not a licence to delete the insurance jobs. Human capital does not pay out on the day the listed growth engine is marked down twenty percent."
				})]
			})
		]
	});
}
//#endregion
export { PiePage as component };
