import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", {
  state: () => ({
    token: null,
    cleared: false,
  }),
  getters: {
    hasSession(state) {
      const clerkToken = useCookie("__session");
      return !state.cleared && clerkToken.value?.length > 0;
    },
  },
  actions: {
    async refreshToken() {
      if (!this.$clerk.session) return;
      this.token = await this.$clerk.session.getToken();
    },
    async signOut() {
      const clerkToken = useCookie("__session");
      clerkToken.value = null;
      this.cleared = true;

      await this.$clerk.session.end();

      this.$router.push("/sign-in");
    },
  },
});
