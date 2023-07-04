import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", {
  state: (): { token: string | null; cleared: boolean } => ({
    token: null,
    cleared: false,
  }),
  getters: {
    hasSession(state) {
      const clerkToken = useCookie("__session");
      return !state.cleared && String(clerkToken?.value).length > 0;
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

      await this.$clerk.signOut();

      this.$router.push("/sign-in");
    },
  },
});
