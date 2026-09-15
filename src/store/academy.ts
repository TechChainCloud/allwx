import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DRILLS } from "@/lib/academy";

type AcademyState = {
  answers: Record<string, number>;
  mark: (id: string, choice: number) => void;
  reset: () => void;
};

export const useAcademy = create<AcademyState>()(
  persist(
    (set, get) => ({
      answers: {},
      mark: (id, choice) => set({ answers: { ...get().answers, [id]: choice } }),
      reset: () => set({ answers: {} }),
    }),
    { name: "allwx-academy-v1" },
  ),
);

export function score(answers: Record<string, number>) {
  let right = 0;
  for (const d of DRILLS) {
    if (answers[d.id] === d.answer) right += 1;
  }
  return { right, total: DRILLS.length };
}
