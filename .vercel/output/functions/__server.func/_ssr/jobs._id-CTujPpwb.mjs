import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Play } from "../_libs/lucide-react.mjs";
import { g as EPISODES, m as usePlayer, p as Button, r as Route$9, w as WEATHERS } from "./router-CI7Ar9vC.mjs";
import { t as PieChart } from "./pie-chart-CDYmbvQ9.mjs";
import { t as JobMark } from "./marks-C28L2rEW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jobs._id-CTujPpwb.js
var import_jsx_runtime = require_jsx_runtime();
function JobPage() {
	const job = Route$9.useLoaderData();
	const play = usePlayer((s) => s.play);
	const related = EPISODES.filter((e) => e.jobIds.includes(job.id));
	const weathers = WEATHERS.filter((w) => w.paid.includes(job.id) || w.fined.includes(job.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/jobs",
			className: "font-mono text-sm text-muted hover:text-accent",
			children: "← SLEEVES"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex size-16 items-center justify-center rounded-sm text-bg",
					style: { background: job.color },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobMark, {
						id: job.id,
						className: "size-9"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
					children: [
						job.role,
						" · ",
						job.weight,
						"% · ",
						job.bbg
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-mono text-4xl tracking-tight",
					children: job.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-sans text-lg leading-relaxed",
					children: job.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
							label: "PAID WHEN",
							body: job.paid
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
							label: "FINED WHEN",
							body: job.fined
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
							label: "FAILURE MODE",
							body: job.failure
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-8 border-l-2 border-accent pl-4 font-mono text-xl leading-snug",
					children: job.principle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 font-sans text-base leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] uppercase tracking-[0.16em] text-cyan",
							children: "If you are 25–35"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						job.forYoung
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, { active: job.id }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 font-mono text-xl",
					children: "ROOMS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: weathers.map((w) => {
						const paid = w.paid.includes(job.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between rounded-sm bg-panel px-3 py-2 font-mono text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: paid ? "text-up" : "text-down",
								children: paid ? "PAID" : "FINED"
							})]
						}, w.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 font-mono text-xl",
					children: "HEAR IT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: related.map((ep) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 rounded-sm border border-line bg-panel px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/listen/$slug",
							params: { slug: ep.slug },
							className: "min-w-0 truncate font-mono text-sm hover:text-accent",
							children: [
								ep.code,
								" · ",
								ep.title
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => play(ep.slug),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 translate-x-px" })
						})]
					}, ep.slug))
				})
			] })]
		})]
	});
}
function Box({ label, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-line bg-panel p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-sans",
			children: body
		})]
	});
}
//#endregion
export { JobPage as component };
