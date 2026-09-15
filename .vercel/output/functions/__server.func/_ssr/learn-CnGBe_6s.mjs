import { b as require_jsx_runtime, d as useRouterState, m as Outlet, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-Cz9L5vlx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-CnGBe_6s.js
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	{
		to: "/learn",
		label: "HUB"
	},
	{
		to: "/learn/machine",
		label: "MACHINE"
	},
	{
		to: "/learn/atlas",
		label: "ATLAS"
	},
	{
		to: "/learn/decide",
		label: "DECIDE"
	},
	{
		to: "/learn/path",
		label: "PATH"
	},
	{
		to: "/learn/lock",
		label: "LOCK"
	},
	{
		to: "/learn/quiz",
		label: "DRILLS"
	}
];
function LearnLayout() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-line bg-bg-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2",
			children: TABS.map((t) => {
				const active = t.to === "/learn" ? pathname === t.to : pathname.startsWith(t.to);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: t.to,
					className: cn("shrink-0 rounded-sm px-3 py-2 font-mono text-[11px] tracking-wide", active ? "bg-line text-accent" : "text-muted hover:text-fg"),
					children: t.label
				}, t.to);
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	})] });
}
//#endregion
export { LearnLayout as component };
