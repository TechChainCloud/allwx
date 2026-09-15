import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-Cz9L5vlx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-peS3T6f-.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em]", {
	variants: { tone: {
		default: "bg-elevated text-muted",
		earn: "bg-earn/15 text-earn",
		suffer: "bg-suffer/15 text-suffer",
		warn: "bg-warn/15 text-warn",
		hold: "bg-hold/15 text-hold",
		invert: "bg-accent text-accent-fg"
	} },
	defaultVariants: { tone: "default" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
//#endregion
export { Badge as t };
