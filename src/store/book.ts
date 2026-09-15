import { create } from "zustand";
import { persist } from "zustand/middleware";

type BookState = {
  start: number;
  monthly: number;
  years: number;
  ready: boolean;
  setStart: (n: number) => void;
  setMonthly: (n: number) => void;
  setYears: (n: number) => void;
  rehydrate: () => void;
};

export const useBook = create<BookState>()(
  persist(
    (set) => ({
      start: 710,
      monthly: 200,
      years: 20,
      ready: false,
      setStart: (start) => set({ start }),
      setMonthly: (monthly) => set({ monthly }),
      setYears: (years) => set({ years }),
      rehydrate: () => {
        useBook.persist.rehydrate();
        set({ ready: true });
      },
    }),
    { name: "allwx-book", skipHydration: true },
  ),
);
