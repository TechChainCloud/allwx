import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as formatDurationLabel } from "./utils-Cz9L5vlx.mjs";
import { i as Play } from "../_libs/lucide-react.mjs";
import { C as TOTAL_DURATION, g as EPISODES, m as usePlayer, p as Button, y as SEASONS } from "./router-CI7Ar9vC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listen.index-D0t4F0on.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ListenIndex() {
	const play = usePlayer((s) => s.play);
	const completed = usePlayer((s) => s.completed);
	const positions = usePlayer((s) => s.positions);
	const slug = usePlayer((s) => s.slug);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [season, setSeason] = (0, import_react.useState)("ALL");
	(0, import_react.useEffect)(() => setReady(true), []);
	const resume = (0, import_react.useMemo)(() => {
		if (!ready) return void 0;
		if (slug) return EPISODES.find((e) => e.slug === slug);
		return EPISODES.find((e) => (positions[e.slug] ?? 0) > 12 && !completed.includes(e.slug)) ?? EPISODES.find((e) => !completed.includes(e.slug)) ?? EPISODES[0];
	}, [
		ready,
		slug,
		positions,
		completed
	]);
	const list = season === "ALL" ? EPISODES : EPISODES.filter((e) => (e.season ?? "S1") === season);
	const heard = ready ? completed.length : 0;
	const mins = Math.round(TOTAL_DURATION / 60);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
				children: [
					"SERIES · TWO-DESK · ",
					EPISODES.length,
					" EP · ",
					mins,
					" MIN"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-mono text-4xl tracking-tight",
				children: "Listen in order. Skip by chapter."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-sans text-base leading-relaxed text-muted",
				children: "Season one teaches the seven jobs. Season two is the house, the numbers, Prime, and the full lesson. Education only."
			}),
			resume && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center justify-between gap-3 rounded-md border border-accent/40 bg-panel p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] text-accent",
					children: "CONTINUE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 font-mono text-sm",
					children: [
						"EP ",
						resume.code,
						" · ",
						resume.title
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => play(resume.slug),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 translate-x-px fill-current" }), ready && (positions[resume.slug] ?? 0) > 12 ? "RESUME" : "PLAY"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 font-mono text-[11px] text-muted",
				children: [
					heard,
					"/",
					EPISODES.length,
					" HEARD"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: ["ALL", ...SEASONS.map((s) => s.id)].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSeason(id),
					className: `h-11 rounded-sm px-3 font-mono text-xs ${season === id ? "bg-accent text-bg" : "bg-panel text-fg hover:bg-line"}`,
					children: id === "ALL" ? "ALL" : id
				}, id))
			}),
			season !== "ALL" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-sans text-sm text-muted",
				children: SEASONS.find((s) => s.id === season)?.hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 divide-y divide-line overflow-hidden rounded-md border border-line bg-panel",
				children: list.map((ep) => {
					const done = ready && completed.includes(ep.slug);
					const started = ready && (positions[ep.slug] ?? 0) > 12;
					const here = ready && slug === ep.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col gap-3 p-4 sm:flex-row sm:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-10 shrink-0 font-mono text-lg text-accent",
								children: ep.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/listen/$slug",
										params: { slug: ep.slug },
										className: "font-mono text-base text-fg hover:text-cyan",
										children: ep.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-sans text-sm text-muted",
										children: ep.subtitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 font-mono text-[11px] tabular-nums text-faint",
										children: [
											ep.season ?? "S1",
											" · ",
											formatDurationLabel(ep.duration),
											here ? " · NOW" : done ? " · HEARD" : started ? " · IN PROGRESS" : ""
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: ep.code === "01" || ep.code === "14" ? "primary" : "outline",
								size: "sm",
								onClick: () => play(ep.slug),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 translate-x-px" }), started && !done ? "RESUME" : "PLAY"]
							})
						]
					}, ep.slug);
				})
			})
		]
	});
}
//#endregion
export { ListenIndex as component };
