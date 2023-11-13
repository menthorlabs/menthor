import { defineStore } from "pinia";
import { Color } from "colorthief";

const DEFAULT_COLORS: Array<Color> = [
  [236, 72, 153],
  [236, 72, 153],
  [37, 99, 235],
  [28, 100, 242],
];
export const useShadowStore = defineStore("shadow", {
  state: (): { colors: Array<Color> | null } => ({
    colors: DEFAULT_COLORS,
  }),
  getters: {
    primaryColors(state): Color[] | undefined {
      return state.colors?.slice(0, 2);
    },
    secondaryColors(state): Color[] | undefined {
      return state.colors?.slice(2, 4);
    },
  },
  actions: {
    setColor(colors: Array<Color> | null) {
      if (!colors) {
        this.colors = null;
        return;
      }

      this.colors = colors;
    },
    setDefaultColors() {
      this.colors = DEFAULT_COLORS;
    },
  },
});
