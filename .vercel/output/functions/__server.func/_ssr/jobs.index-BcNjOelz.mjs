import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as JOBS } from "./router-CI7Ar9vC.mjs";
import { t as JobMark } from "./marks-C28L2rEW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jobs.index-BcNjOelz.js
var import_jsx_runtime = require_jsx_runtime();
function JobsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
				children: "SLEEVES · ALL WEATHER"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-mono text-4xl tracking-tight",
				children: "Hire jobs, not stories"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl font-sans text-lg leading-relaxed text-muted",
				children: "If two holdings are paid by the same surprise, you do not have two employees. You have one employee wearing two uniforms."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-3",
				children: JOBS.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/jobs/$id",
					params: { id: job.id },
					className: "grid gap-4 rounded-md border border-line bg-panel p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center hover:border-accent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-14 items-center justify-center rounded-sm text-bg",
							style: { background: job.color },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobMark, {
								id: job.id,
								className: "size-8"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
								children: [
									job.role,
									" · ",
									job.bbg
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-mono text-2xl",
								children: job.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block font-sans text-sm leading-relaxed text-muted",
								children: job.blurb
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-3xl tabular-nums text-accent",
							children: [job.weight, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg text-muted",
								children: "%"
							})]
						})
					]
				}, job.id))
			})
		]
	});
}
//#endregion
export { JobsPage as component };
