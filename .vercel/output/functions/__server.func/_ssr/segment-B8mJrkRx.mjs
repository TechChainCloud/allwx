import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-Cz9L5vlx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/segment-B8mJrkRx.js
var import_jsx_runtime = require_jsx_runtime();
function Segment({ value, onChange, options, ariaLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": ariaLabel,
		className: "inline-flex rounded-md bg-inset p-1 shadow-[var(--shadow-border)]",
		children: options.map((opt) => {
			const active = opt.value === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": active,
				onClick: () => onChange(opt.value),
				className: cn("h-9 min-w-20 rounded-sm px-3 text-xs font-medium tracking-wide transition-colors duration-150", active ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"),
				children: opt.label
			}, opt.value);
		})
	});
}
//#endregion
export { Segment as t };
