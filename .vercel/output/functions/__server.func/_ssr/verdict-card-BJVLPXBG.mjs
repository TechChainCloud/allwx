import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as formatGbp, t as cn } from "./utils-Cz9L5vlx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verdict-card-BJVLPXBG.js
var import_jsx_runtime = require_jsx_runtime();
var KIND_CLASS = {
	hold: "text-hold",
	route: "text-accent",
	"walk-back": "text-warn",
	blocked: "text-suffer",
	allowed: "text-earn",
	dead: "text-suffer",
	watch: "text-warn"
};
function VerdictCard({ verdict }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "rounded-xl bg-surface p-1 shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border border-line bg-inset px-5 py-6 sm:px-7 sm:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("stamp text-[11px]", KIND_CLASS[verdict.kind]),
					children: "Verdict"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-3xl leading-tight text-fg sm:text-4xl",
					children: verdict.stamp
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm font-medium text-fg",
					children: verdict.rule
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-sm leading-relaxed text-muted",
					children: verdict.reason
				}),
				verdict.allocations && verdict.allocations.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 divide-y divide-line border-y border-line",
					children: verdict.allocations.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between gap-4 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm tracking-wide text-fg",
							children: a.ticker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular text-sm text-muted",
							children: [
								a.pct.toFixed(1),
								"%",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-4 text-fg",
									children: formatGbp(a.pounds)
								})
							]
						})]
					}, a.ticker))
				}) : null,
				verdict.flags?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-1.5",
					children: verdict.flags.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-xs leading-relaxed text-subtle",
						children: f
					}, f))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display mt-6 border-t border-line pt-5 text-[15px] leading-relaxed text-muted italic",
					children: verdict.ifThen
				})
			]
		})
	});
}
//#endregion
export { VerdictCard as t };
