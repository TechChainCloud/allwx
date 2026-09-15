import { S as SIZE_GATES, c as FOMC_AT, h as PERMANENTLY_DEAD, p as LOCK_ENTRIES, u as IDTL_FLAG } from "./machine-BioQdnd1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verdict-BcT8a-Q1.js
var IF_THEN = "If the machine always travels through all four quadrants, then no line is sold because the current quadrant is punishing it — contributions on the 3rd do the work; the signed sentence stays the hand.";
function isFomcPassed(now = /* @__PURE__ */ new Date()) {
	return now.getTime() >= new Date(FOMC_AT).getTime();
}
function walkBackActive(pmi, curveInverted) {
	return pmi < 50 && curveInverted;
}
function idtlFlag(gt30) {
	return gt30 >= IDTL_FLAG;
}
function roundPct(n) {
	return Math.round(n * 10) / 10;
}
function renormalize(parts, contribution) {
	const total = parts.reduce((s, p) => s + p.raw, 0);
	if (total <= 0) return [];
	const allocs = parts.map((p) => {
		const pct = p.raw / total * 100;
		return {
			ticker: p.ticker,
			pct,
			pounds: pct / 100 * contribution
		};
	});
	const pctSum = allocs.reduce((s, a) => s + a.pct, 0);
	if (allocs.length && Math.abs(pctSum - 100) > .05) {
		allocs[allocs.length - 1].pct = roundPct(allocs[allocs.length - 1].pct + (100 - pctSum));
		allocs[allocs.length - 1].pounds = allocs[allocs.length - 1].pct / 100 * contribution;
	}
	return allocs.map((a) => ({
		...a,
		pct: roundPct(a.pct),
		pounds: Math.round(a.pounds)
	}));
}
function currentWeight(weights, line) {
	return weights[line.ticker] ?? line.weight;
}
function routeContribution(pie, state) {
	const { pmi, curveInverted, contribution, weights } = state;
	const flags = [];
	if (walkBackActive(pmi, curveInverted)) return {
		kind: "walk-back",
		stamp: "WALK-BACK",
		rule: "PMI < 50 AND 2s10s inverted → all contributions route to XSTR.",
		reason: `PMI is ${pmi.toFixed(1)} and the 2s10s curve is inverted. Satellites receive zero. The reserve builds. When the cycle turns, deploy into VWRP, ICOM and SGLN at depressed prices.`,
		ifThen: IF_THEN,
		mode: "walk-back",
		allocations: [{
			ticker: "XSTR",
			pct: 100,
			pounds: contribution
		}],
		flags: ["Walk-back is the general’s reserve. It does not fight. It wins the war."]
	};
	const vwrpLine = pie.find((l) => l.ticker === "VWRP");
	const vwrp = vwrpLine ? currentWeight(weights, vwrpLine) : 45;
	if (vwrp < 40) return {
		kind: "route",
		stamp: "FLOOR REPAIR",
		rule: "VWRP floor 40%. Below 40% → next contribution to VWRP.",
		reason: `VWRP is at ${vwrp.toFixed(1)}%, under the 40% floor. The engine is the only line that captures human productivity. Repair the floor before anything else.`,
		ifThen: IF_THEN,
		mode: "floor-repair",
		allocations: [{
			ticker: "VWRP",
			pct: 100,
			pounds: contribution
		}]
	};
	if (vwrp > 50) flags.push("VWRP is above the 50% cap — it receives nothing this month.");
	const belowFloor = pie.filter((l) => {
		const w = currentWeight(weights, l);
		if (l.ticker === "VWRP" && vwrp > 50) return false;
		return w < l.floor - .05;
	});
	if (belowFloor.length > 0) {
		const parts = belowFloor.map((l) => ({
			ticker: l.ticker,
			raw: l.floor - currentWeight(weights, l)
		}));
		return {
			kind: "route",
			stamp: "FLOOR REPAIR",
			rule: "Lines below floor are filled before satellites.",
			reason: `Below floor: ${belowFloor.map((l) => `${l.ticker} ${currentWeight(weights, l).toFixed(1)}% < ${l.floor}%`).join("; ")}.`,
			ifThen: IF_THEN,
			mode: "floor-repair",
			allocations: renormalize(parts, contribution),
			flags
		};
	}
	const underweight = pie.filter((l) => {
		const w = currentWeight(weights, l);
		if (l.ticker === "VWRP" && vwrp >= 50) return false;
		if (w >= l.cap - .05) return false;
		if (l.cap <= 5 && l.ticker !== "VWRP" && l.ticker !== "ICOM" && l.ticker !== "SGLN" && l.ticker !== "ITPS" && l.ticker !== "VAGS" && l.ticker !== "XSTR" && w >= 5) return false;
		return true;
	}).filter((l) => currentWeight(weights, l) < l.weight - .05);
	if (underweight.length === 0) return {
		kind: "route",
		stamp: "AT TARGET",
		rule: "Weights inside band. Contribute at target. The 3rd does the work.",
		reason: "No line is below its floor. VWRP is inside 40–50. Route this month’s contribution at target weights. Do not sell to rebalance.",
		ifThen: IF_THEN,
		mode: "at-target",
		allocations: renormalize(pie.filter((l) => {
			const w = currentWeight(weights, l);
			if (l.ticker === "VWRP" && vwrp >= 50) return false;
			if (w >= l.cap - .05) return false;
			return true;
		}).map((l) => ({
			ticker: l.ticker,
			raw: l.weight
		})), contribution),
		flags
	};
	const parts = underweight.map((l) => ({
		ticker: l.ticker,
		raw: l.weight - currentWeight(weights, l)
	}));
	return {
		kind: "route",
		stamp: "REBALANCE VIA CONTRIBUTIONS",
		rule: "Contributions are the only rebalancing tool.",
		reason: `Underweight: ${underweight.map((l) => `${l.ticker} ${currentWeight(weights, l).toFixed(1)}% vs ${l.weight}%`).join("; ")}. Overweight lines receive nothing. Nothing is sold.`,
		ifThen: IF_THEN,
		mode: "rebalance",
		allocations: renormalize(parts, contribution),
		flags
	};
}
function verdictSell(pie, ticker) {
	const line = pie.find((l) => l.ticker === ticker);
	if (!line) return {
		kind: "blocked",
		stamp: "UNKNOWN LINE",
		rule: "No 17th personality.",
		reason: `${ticker} is not in the pie. Adding it is a different question. Selling a line that is not held is not a decision.`,
		ifThen: IF_THEN
	};
	const partners = line.partnersWhenSuffers.length > 0 ? `When it suffers, ${line.partnersWhenSuffers.join(", ")} earn.` : "This line does not suffer in isolation — it is the reserve.";
	return {
		kind: "blocked",
		stamp: "DO NOT SELL",
		rule: "No selling inside the ISA. Every disposal is a compounding engine switched off.",
		reason: `${line.ticker} — ${line.job} ${partners} The current quadrant punishing it is not a reason to fire it. ${line.analogy}`,
		ifThen: IF_THEN,
		flags: line.probation ? [line.probation] : void 0
	};
}
function verdictAddLine(ticker) {
	const dead = PERMANENTLY_DEAD.find((d) => d.name.toLowerCase().includes(ticker.toLowerCase()) || d.id === ticker.toLowerCase());
	if (dead) return {
		kind: "dead",
		stamp: "PERMANENTLY DEAD",
		rule: "What is permanently dead stays dead.",
		reason: `${dead.name}: ${dead.reason}`,
		ifThen: IF_THEN
	};
	return {
		kind: "blocked",
		stamp: "NO 17TH PERSONALITY",
		rule: "No satellite line above 5%. No 17th personality.",
		reason: `A 17th line is a new forecast wearing an ETF ticker. The pie already owns every link in the machine. If a job is uncovered, it replaces a line via the lock file — it does not sit beside it.`,
		ifThen: IF_THEN
	};
}
function verdictAutoInvest(state, now = /* @__PURE__ */ new Date()) {
	const fomc = isFomcPassed(now);
	if (!state.signedAt) {
		if (!fomc) return {
			kind: "blocked",
			stamp: "SIGN AFTER FOMC",
			rule: "Decision date must precede AutoInvest change date. Always.",
			reason: "The 16 September 2026 FOMC has not been signed. Next action: sign the sentence. Write the four lock-file entries. Then change AutoInvest on 17 September. Not before. A briefing is not a change log entry.",
			ifThen: "If the four lock-file entries are signed after the 16 September 2026 FOMC, then AutoInvest changes on 17 September and not before.",
			flags: LOCK_ENTRIES.map((e) => `${e.n}. ${e.from} → ${e.to}`)
		};
		return {
			kind: "blocked",
			stamp: "UNSIGNED",
			rule: "Lock file is the only document that authorises AutoInvest changes.",
			reason: "FOMC has occurred. The sentence is not yet signed. Sign first. Then AutoInvest. Same-day change is still a protocol break — decision date precedes change date.",
			ifThen: IF_THEN
		};
	}
	if (state.pieMode !== "revised") return {
		kind: "blocked",
		stamp: "PIE NOT SWITCHED",
		rule: "The signed sentence names the revised pie.",
		reason: "You have a signature, but Command is still on the 12 September lock. Switch the working pie to Revised, then apply the four AutoInvest changes the next calendar day.",
		ifThen: IF_THEN
	};
	return {
		kind: "allowed",
		stamp: "AUTOINVEST — NEXT CALENDAR DAY",
		rule: "Decision date precedes change date. The four lock-file entries are the change.",
		reason: "Signed. Working pie is Revised. Apply the four entries on the next calendar day — not today. XDWH → XAIX 2%. URNG → NUCL 2.5%. SMGB 2.5% → 1.0%. INXG → TIP5 2.0%. Nothing else.",
		ifThen: "If the four lock-file entries are signed after the 16 September 2026 FOMC, then AutoInvest changes on 17 September and not before.",
		flags: LOCK_ENTRIES.map((e) => `${e.n}. ${e.from} → ${e.to}. ${e.reason}`)
	};
}
function verdictSizeGate(id, nav) {
	const gate = SIZE_GATES.find((g) => g.id === id);
	if (!gate) return {
		kind: "blocked",
		stamp: "UNKNOWN GATE",
		rule: "Size gates hold.",
		reason: "FLOT, VHYL, ROLL. Nothing else is a size-gated replacement.",
		ifThen: IF_THEN
	};
	if (nav < gate.threshold) return {
		kind: "blocked",
		stamp: "GATE CLOSED",
		rule: `${gate.name} at £${gate.threshold.toLocaleString("en-GB")}+ NAV.`,
		reason: `NAV is £${Math.round(nav).toLocaleString("en-GB")}. ${gate.note} This is not a research failure. It is a size rule.`,
		ifThen: IF_THEN
	};
	return {
		kind: "watch",
		stamp: "GATE OPEN — NOT AN ORDER",
		rule: `${gate.name} size gate is satisfied at £${gate.threshold.toLocaleString("en-GB")} NAV.`,
		reason: `NAV is £${Math.round(nav).toLocaleString("en-GB")}. The gate is open. It is still not a lock-file entry. A briefing, an analysis, a conversation — none of these are a change log entry. ${gate.replaces ? `Replacing ${gate.replaces} still requires a signed lock-file line.` : "Adding it still requires a signed lock-file line and must not create a 17th personality."}`,
		ifThen: IF_THEN
	};
}
function verdictDead(id) {
	const item = PERMANENTLY_DEAD.find((d) => d.id === id);
	if (!item) return {
		kind: "blocked",
		stamp: "NOT ON THE DEAD LIST",
		rule: "What is permanently dead stays dead.",
		reason: "If it is not on the dead list and not in the pie, it is a 17th personality.",
		ifThen: IF_THEN
	};
	return {
		kind: "dead",
		stamp: "PERMANENTLY DEAD",
		rule: "Do not reopen.",
		reason: `${item.name}: ${item.reason}`,
		ifThen: IF_THEN
	};
}
function earners(pie, regime) {
	return pie.filter((l) => l.regimes[regime] === "earn");
}
function sufferers(pie, regime) {
	return pie.filter((l) => l.regimes[regime] === "suffer");
}
function pathSeries(monthly, annualRate, years) {
	const r = annualRate / 12;
	const out = [];
	let v = 0;
	for (let y = 1; y <= years; y++) {
		for (let m = 0; m < 12; m++) v = v * (1 + r) + monthly;
		out.push(v);
	}
	return out;
}
//#endregion
export { routeContribution as a, verdictAutoInvest as c, verdictSizeGate as d, walkBackActive as f, pathSeries as i, verdictDead as l, idtlFlag as n, sufferers as o, isFomcPassed as r, verdictAddLine as s, earners as t, verdictSell as u };
