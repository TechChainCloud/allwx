import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-Cz9L5vlx.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { p as Button } from "./router-CI7Ar9vC.mjs";
import { t as DRILLS } from "./academy-BcrYIfmW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn.quiz-SLfVXAus.js
var import_jsx_runtime = require_jsx_runtime();
var useAcademy = create()(persist((set, get) => ({
	answers: {},
	mark: (id, choice) => set({ answers: {
		...get().answers,
		[id]: choice
	} }),
	reset: () => set({ answers: {} })
}), { name: "allwx-academy-v1" }));
function score(answers) {
	let right = 0;
	for (const d of DRILLS) if (answers[d.id] === d.answer) right += 1;
	return {
		right,
		total: DRILLS.length
	};
}
function QuizPage() {
	const answers = useAcademy((s) => s.answers);
	const mark = useAcademy((s) => s.mark);
	const reset = useAcademy((s) => s.reset);
	const { right, total } = score(answers);
	const done = Object.keys(answers).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stamp text-[11px] text-accent",
					children: "Drills"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-mono text-4xl tracking-tight",
					children: "Twelve questions. No costume."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-sans text-sm leading-relaxed text-muted",
					children: [
						"Score ",
						right,
						"/",
						total,
						" correct · ",
						done,
						" answered. Progress stays on this device. Education only."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					className: "mt-4",
					onClick: reset,
					children: "Reset drills"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-4",
			children: DRILLS.map((d, i) => {
				const picked = answers[d.id];
				const revealed = picked != null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-line bg-panel p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "stamp text-[10px] text-cyan",
							children: ["Q", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-base",
							children: d.q
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-2",
							children: d.choices.map((c, n) => {
								const on = picked === n;
								const good = revealed && n === d.answer;
								const bad = revealed && on && n !== d.answer;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => mark(d.id, n),
									className: cn("min-h-11 rounded-sm border px-3 py-2 text-left font-sans text-sm", good ? "border-up bg-up/10 text-up" : bad ? "border-down bg-down/10 text-down" : on ? "border-accent text-fg" : "border-line text-muted hover:border-accent"),
									children: c
								}, c);
							})
						}),
						revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-sm leading-relaxed text-muted",
							children: d.why
						}) : null
					]
				}, d.id);
			})
		})]
	});
}
//#endregion
export { QuizPage as component };
