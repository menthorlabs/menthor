import { defineStore } from "pinia";

export const useQueryStore = defineStore("query", {
  state: (): { redirect: string | null } => ({
    redirect: null,
  }),
});
