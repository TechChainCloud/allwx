import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-Cz9L5vlx.mjs";
import { _ as JOBS } from "./router-CI7Ar9vC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pie-chart-CDYmbvQ9.js
var import_jsx_runtime = require_jsx_runtime();
var CX = 100;
var CY = 100;
var R = 72;
var IR = 42;
function n(v) {
	return v.toFixed(4);
}
function polar(cx, cy, r, a) {
	const rad = (a - 90) * Math.PI / 180;
	return {
		x: n(cx + r * Math.cos(rad)),
		y: n(cy + r * Math.sin(rad))
	};
}
function arc(start, end) {
	const s = polar(CX, CY, R, end);
	const e = polar(CX, CY, R, start);
	const si = polar(CX, CY, IR, end);
	const ei = polar(CX, CY, IR, start);
	const large = end - start > 180 ? 1 : 0;
	return `M ${s.x} ${s.y} A ${R} ${R} 0 ${large} 0 ${e.x} ${e.y} L ${ei.x} ${ei.y} A ${IR} ${IR} 0 ${large} 1 ${si.x} ${si.y} Z`;
}
var SLICES = (() => {
	let acc = 0;
	return JOBS.map((job) => {
		const start = acc / 100 * 360;
		acc += job.weight;
		return {
			job,
			d: arc(start, acc / 100 * 360)
		};
	});
})();
function PieChart({ active, onSelect, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 200",
		className: cn("w-full max-w-md", className),
		role: "img",
		"aria-label": "Classroom seven-sleeve allocation",
		children: [
			SLICES.map(({ job, d }) => {
				const isActive = !active || active === job.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d,
					fill: job.color,
					fillOpacity: isActive ? 1 : .22,
					className: onSelect ? "cursor-pointer transition-opacity duration-200" : void 0,
					onClick: () => onSelect?.(job.id),
					"aria-label": `${job.name} ${job.weight} percent`
				}, job.id);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: CX,
				cy: CY,
				r: 41.5,
				fill: "var(--color-panel)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: CX,
				y: 96,
				textAnchor: "middle",
				fill: "var(--color-fg)",
				fontFamily: "IBM Plex Mono, ui-monospace, monospace",
				fontSize: "12",
				fontWeight: "500",
				children: "ALLWX"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: CX,
				y: 112,
				textAnchor: "middle",
				fill: "var(--color-muted)",
				fontFamily: "IBM Plex Mono, ui-monospace, monospace",
				fontSize: "7",
				letterSpacing: "0.14em",
				children: "CLASSROOM"
			})
		]
	});
}
//#endregion
export { PieChart as t };
