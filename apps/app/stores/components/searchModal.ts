import { defineStore } from "pinia";

export const useSearchModalStore = defineStore("searchModal", {
  state: (): { opened: boolean } => ({
    opened: false,
  }),
});
