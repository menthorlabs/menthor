import { defineStore } from "pinia";

export const useTaskModalStore = defineStore("taskModal", {
  state: (): { opened: boolean } => ({
    opened: false,
  }),
});
