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

      if (!path.includes("/app/")) {
        const runtimeConfig = useRuntimeConfig();
        this.redirect = `${runtimeConfig.public.baseURL}${path.slice(1)}`;
        return;
      }

      this.redirect = path;
    },
  },
});
