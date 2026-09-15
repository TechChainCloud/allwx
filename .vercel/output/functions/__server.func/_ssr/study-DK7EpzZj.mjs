import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Play } from "../_libs/lucide-react.mjs";
import { S as STUDY, g as EPISODES, m as usePlayer, p as Button, v as PRINCIPLES, x as SEVEN_QUESTIONS } from "./router-CI7Ar9vC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/study-DK7EpzZj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudyPage() {
	const play = usePlayer((s) => s.play);
	const completed = usePlayer((s) => s.completed);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
				children: "STUDY · TWELVE MONTHS · CLOSE 8 SEP"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-mono text-4xl tracking-tight",
				children: "Learn the jobs before you decorate a platform"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-sans text-lg leading-relaxed text-muted",
				children: "A weekend of tickers is how people collect uniforms. Twelve months of mechanisms is how a household still holds when the weather changes. Prime is the design lock. The live ISA is still fourteen lines."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 space-y-3",
				children: STUDY.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-line bg-panel p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-[0.16em] text-cyan",
							children: m.month
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-mono text-2xl",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans leading-relaxed text-muted",
							children: m.body
						}),
						EPISODES[Math.min(i, EPISODES.length - 1)] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => play(EPISODES[Math.min(i, EPISODES.length - 1)].slug),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 translate-x-px" }),
									"EP ",
									EPISODES[Math.min(i, EPISODES.length - 1)].code
								]
							}), ready && completed.includes(EPISODES[Math.min(i, EPISODES.length - 1)].slug) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-up",
								children: "HEARD"
							})]
						})
					]
				}, m.month))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "SEVEN QUESTIONS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-3",
					children: SEVEN_QUESTIONS.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-line bg-panel p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-sm text-accent",
							children: [
								"Q",
								q.n,
								" · ",
								q.q
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm text-muted",
							children: q.how
						})]
					}, q.n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xl",
					children: "FRIDGE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-3",
					children: PRINCIPLES.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 font-sans leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-5 font-mono text-accent",
							children: i + 1
						}), line]
					}, line))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 font-sans text-sm leading-relaxed text-muted",
				children: "Starting points, none of which are endorsements: Dalio, How the Economic Machine Works; public Bridgewater notes on All Weather and risk parity; Antti Ilmanen on expected returns; standard fixed-income chapters on duration. Read the disagreements. A framework that cannot survive a smart opponent is a slogan."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/debate",
						className: "font-mono text-sm text-accent hover:underline",
						children: ["DEBATE ", "<GO>"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/lab",
						className: "font-mono text-sm text-cyan hover:underline",
						children: "LAB"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/tape",
						className: "font-mono text-sm text-cyan hover:underline",
						children: "TONIGHT'S TAPE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "font-mono text-sm text-muted hover:underline",
						children: ["ALLWX ", "<GO>"]
					})
				]
			})
		]
	});
}
//#endregion
export { StudyPage as component };
