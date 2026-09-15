import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as Button } from "./router-CI7Ar9vC.mjs";
import { t as Segment } from "./segment-B8mJrkRx.mjs";
import { b as SIGNED_SENTENCE_REVISED, c as FOMC_AT, d as IF_THEN, h as PERMANENTLY_DEAD, l as GOVERNANCE, p as LOCK_ENTRIES, t as AUTOINVEST_ON, x as SIGN_AFTER, y as SIGNED_SENTENCE_LOCKED } from "./machine-BioQdnd1.mjs";
import { n as useInvictus } from "./machine-Bjr8a6kw.mjs";
import { r as isFomcPassed } from "./verdict-BcT8a-Q1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn.lock-DHxJXMys.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LockPage() {
	const store = useInvictus();
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const fomc = isFomcPassed();
	const canSign = fomc && confirm.trim().toUpperCase() === "SIGN";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stamp text-[11px] text-accent",
						children: "Lock file · teaching"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-mono text-4xl tracking-tight",
						children: "The only document that authorises AutoInvest."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm leading-relaxed text-muted",
						children: "A briefing, an analysis, a conversation — none of these are a change log entry. This page is a classroom. It does not move T212."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "max-w-3xl border-l border-accent pl-5 font-sans text-lg leading-relaxed italic",
				children: store.signedAt ? SIGNED_SENTENCE_REVISED : SIGNED_SENTENCE_LOCKED
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-md border border-line bg-panel p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "stamp text-[10px] text-muted",
					children: "Working pie"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
						ariaLabel: "Working pie",
						value: store.pieMode,
						onChange: store.setPieMode,
						options: [{
							value: "locked",
							label: "12 Sep lock"
						}, {
							value: "revised",
							label: "Revised preview"
						}]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm font-sans text-xs leading-relaxed text-muted",
						children: "Preview is a briefing. Signature switches the working pie to Revised in this classroom only."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-mono text-2xl",
				children: ["Four entries — ", SIGN_AFTER]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-2",
				children: LOCK_ENTRIES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-line bg-panel px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "stamp text-[10px] text-muted",
							children: ["Entry ", e.n]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-mono text-sm",
							children: [
								e.from,
								" → ",
								e.to
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-sm text-muted",
							children: e.reason
						})
					]
				}, e.n))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-md border border-line bg-bg-2 p-5 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stamp text-[10px] text-muted",
						children: "Sign after FOMC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-sans text-sm text-muted",
						children: [
							"FOMC ",
							new Date(FOMC_AT).toUTCString(),
							". AutoInvest on ",
							AUTOINVEST_ON,
							".",
							" ",
							fomc ? "The meeting has occurred. Decision date can now precede change date." : "Do not sign before the print."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stamp mb-2 block text-[10px] text-muted",
							children: "Type SIGN"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: confirm,
							onChange: (e) => setConfirm(e.target.value),
							className: "h-11 w-full rounded-md border border-line bg-panel px-3 font-mono text-sm"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: !canSign,
							onClick: store.sign,
							children: "Sign the sentence"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: store.unsign,
							children: "Unsign"
						})]
					}),
					store.signedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-mono text-xs text-up",
						children: ["Signed ", store.signedAt]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "Governance"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: GOVERNANCE.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-line bg-panel p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm",
						children: g.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-sans text-sm text-muted",
						children: g.body
					})]
				}, g.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-2xl",
				children: "Permanently dead"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: PERMANENTLY_DEAD.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-line bg-panel px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-down",
						children: d.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-sm text-muted",
						children: d.reason
					})]
				}, d.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl font-sans text-sm italic text-muted",
				children: IF_THEN
			})
		]
	});
}
//#endregion
export { LockPage as component };
