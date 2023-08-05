import { defineStore } from "pinia";

export const useQueryStore = defineStore("query", {
  state: (): { redirect: string | null } => ({
    redirect: null,
  }),
  actions: {
    setRedirect(path: string | null) {
      if (!path) {
        this.redirect = null;
        return;
      }

      this.redirect = path;
    },
  },
});
