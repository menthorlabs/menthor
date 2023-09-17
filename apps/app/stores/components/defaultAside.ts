import { defineStore } from "pinia";

export type RootState = {
  opened: boolean;
};

export const useDefaultAsideStore = defineStore("defaultAside", {
  state: (): RootState => ({
    opened: false,
  }),
});
