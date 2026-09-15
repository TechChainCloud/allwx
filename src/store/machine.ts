import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  DEFAULT_CONTRIBUTION,
  DEFAULT_GT30,
  DEFAULT_NAV,
  DEFAULT_PMI,
  LOCKED_PIE,
  REVISED_PIE,
  targetWeights,
  type Line,
} from "@/lib/machine";

export type PieMode = "locked" | "revised";

type InvictusState = {
  growth: "up" | "down";
  inflation: "up" | "down";
  pmi: number;
  curveInverted: boolean;
  nav: number;
  contribution: number;
  gt30: number;
  signedAt: string | null;
  pieMode: PieMode;
  weights: Record<string, number>;
  setGrowth: (v: "up" | "down") => void;
  setInflation: (v: "up" | "down") => void;
  setPmi: (v: number) => void;
  setCurveInverted: (v: boolean) => void;
  setNav: (v: number) => void;
  setContribution: (v: number) => void;
  setGt30: (v: number) => void;
  setWeight: (ticker: string, value: number) => void;
  resetWeights: () => void;
  sign: () => void;
  unsign: () => void;
  setPieMode: (mode: PieMode) => void;
};

function weightsFor(mode: PieMode): Record<string, number> {
  return targetWeights(mode === "revised" ? REVISED_PIE : LOCKED_PIE);
}

export const useInvictus = create<InvictusState>()(
  persist(
    (set, get) => ({
      growth: "up",
      inflation: "up",
      pmi: DEFAULT_PMI,
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
      setWeight: (ticker, value) =>
        set({ weights: { ...get().weights, [ticker]: value } }),
      resetWeights: () => set({ weights: weightsFor(get().pieMode) }),
      sign: () =>
        set({
          signedAt: new Date().toISOString(),
          pieMode: "revised",
          weights: weightsFor("revised"),
        }),
      unsign: () =>
        set({
          signedAt: null,
          pieMode: "locked",
          weights: weightsFor("locked"),
        }),
      setPieMode: (pieMode) =>
        set({
          pieMode,
          weights: weightsFor(pieMode),
        }),
    }),
    { name: "allwx-machine-v1" },
  ),
);

export function selectPie(mode: PieMode): Line[] {
  return mode === "revised" ? REVISED_PIE : LOCKED_PIE;
}
