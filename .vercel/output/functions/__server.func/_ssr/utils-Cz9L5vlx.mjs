import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-Cz9L5vlx.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatTime(seconds) {
	if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
	const s = Math.floor(seconds);
	return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}
function formatDurationLabel(seconds) {
	return `${Math.round(seconds / 60)} min`;
}
function formatPct(n, digits = 2) {
	return `${n > 0 ? "+" : ""}${n.toFixed(digits)}%`;
}
function formatGbp(n, digits = 0) {
	return new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	}).format(n);
}
function formatCompactGbp(n) {
	if (Math.abs(n) >= 1e6) return `£${(n / 1e6).toFixed(2)}M`;
	if (Math.abs(n) >= 1e3) return `£${Math.round(n / 1e3)}k`;
	return formatGbp(n);
}
//#endregion
export { formatPct as a, formatGbp as i, formatCompactGbp as n, formatTime as o, formatDurationLabel as r, cn as t };
