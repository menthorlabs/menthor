import { defineStore } from "pinia";

export type DefaultAside = {
  opened: boolean;
};

export const useDefaultAsideStore = defineStore("defaultAside", {
  state: (): DefaultAside => ({
    opened: false,
  }),
});
