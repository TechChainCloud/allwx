import { create } from "zustand";
import { persist } from "zustand/middleware";

type PlayerState = {
  slug: string | null;
  playing: boolean;
  rate: number;
  positions: Record<string, number>;
  completed: string[];
  seekTo: number | null;
  play: (slug: string, at?: number) => void;
  toggle: () => void;
  pause: () => void;
  setPosition: (slug: string, t: number) => void;
  skip: (delta: number, duration: number) => void;
  seek: (t: number) => void;
  clearSeek: () => void;
  markComplete: (slug: string) => void;
  setRate: (rate: number) => void;
};

export const usePlayer = create<PlayerState>()(
  persist(
    (set, get) => ({
      slug: null,
      playing: false,
      rate: 1,
      positions: {},
      completed: [],
      seekTo: null,
      play: (slug, at) => {
        const cur = get();
        if (at != null) {
          set({
            slug,
            playing: true,
            seekTo: at,
            positions: { ...cur.positions, [slug]: at },
          });
          return;
        }
        set({ slug, playing: true });
      },
      toggle: () => {
        if (!get().slug) return;
        set({ playing: !get().playing });
      },
      pause: () => set({ playing: false }),
      setPosition: (slug, t) =>
        set({ positions: { ...get().positions, [slug]: t } }),
      skip: (delta, duration) => {
        const { slug, positions } = get();
        if (!slug) return;
        const next = Math.min(duration, Math.max(0, (positions[slug] ?? 0) + delta));
        set({
          positions: { ...positions, [slug]: next },
          seekTo: next,
        });
      },
      seek: (t) => {
        const { slug, positions } = get();
        if (!slug) return;
        set({ positions: { ...positions, [slug]: t }, seekTo: t });
      },
      clearSeek: () => set({ seekTo: null }),
      markComplete: (slug) => {
        if (get().completed.includes(slug)) return;
        set({ completed: [...get().completed, slug] });
      },
      setRate: (rate) => set({ rate }),
    }),
    {
      name: "seven-jobs-player",
      skipHydration: true,
      partialize: (s) => ({
        positions: s.positions,
        completed: s.completed,
        rate: s.rate,
      }),
    },
  ),
);

export function rehydratePlayer() {
  void usePlayer.persist.rehydrate();
}
