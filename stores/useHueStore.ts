import { create } from "zustand";

type HueStore = {
  hue: number | null;
  setHue: (value: number) => void;
  generateHue: () => void;
};

export const useHueStore = create<HueStore>((set) => ({
  hue: null,
  setHue: (value) => {
    set({ hue: value });
  },
  generateHue: () => {
    const newHue = Math.floor(Math.random() * 361);
    set({ hue: newHue });
  },
}));
