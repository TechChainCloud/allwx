import { n as create, t as persist } from "../_libs/zustand.mjs";
import { O as targetWeights, a as DEFAULT_NAV, f as LOCKED_PIE, i as DEFAULT_GT30, r as DEFAULT_CONTRIBUTION, v as REVISED_PIE } from "./machine-BioQdnd1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/machine-Bjr8a6kw.js
function weightsFor(mode) {
	return targetWeights(mode === "revised" ? REVISED_PIE : LOCKED_PIE);
}
var useInvictus = create()(persist((set, get) => ({
	growth: "up",
	inflation: "up",
	pmi: 52,
	curveInverted: false,
	nav: DEFAULT_NAV,
	contribution: DEFAULT_CONTRIBUTION,
	gt30: DEFAULT_GT30,
	signedAt: null,
	pieMode: "locked",
	weights: weightsFor("locked"),
	setGrowth: (growth) => set({ growth }),
	setInflation: (inflation) => set({ inflation }),
	setPmi: (pmi) => set({ pmi: Math.round(pmi * 10) / 10 }),
	setCurveInverted: (curveInverted) => set({ curveInverted }),
	setNav: (nav) => set({ nav }),
	setContribution: (contribution) => set({ contribution }),
	setGt30: (gt30) => set({ gt30 }),
	setWeight: (ticker, value) => set({ weights: {
		...get().weights,
		[ticker]: value
	} }),
	resetWeights: () => set({ weights: weightsFor(get().pieMode) }),
	sign: () => set({
		signedAt: (/* @__PURE__ */ new Date()).toISOString(),
		pieMode: "revised",
		weights: weightsFor("revised")
	}),
	unsign: () => set({
		signedAt: null,
		pieMode: "locked",
		weights: weightsFor("locked")
	}),
	setPieMode: (pieMode) => set({
		pieMode,
		weights: weightsFor(pieMode)
	})
}), { name: "allwx-machine-v1" }));
function selectPie(mode) {
	return mode === "revised" ? REVISED_PIE : LOCKED_PIE;
}
//#endregion
export { useInvictus as n, selectPie as t };
