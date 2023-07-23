import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", {
  state: (): { token: string | null; cleared: boolean } => ({
    token: null,
    cleared: false,
  }),
  actions: {
    isConnected(): boolean {
      const userStore = useUserStore();
      return !!userStore.user?.primaryEmailAddress;
    },
    hasSession() {
      const clientSession = this.$clerk?.client?.sessions[0];
      return !this.cleared && clientSession;
    },
    async refreshSession() {
      const clientSession = this.$clerk?.client?.sessions[0];
      await this.$clerk.setSession(clientSession);
    },
    async refreshToken() {
      if (!this.$clerk.session) return;
      this.token = await this.$clerk.session.getToken();
    },
    async signOut() {
      const clerkToken = useCookie("__session");
      const userCookie = useCookie("m-user");
      userCookie.value = null;
      clerkToken.value = null;
      this.cleared = true;

      await this.$clerk.signOut();

      this.$router.push("/sign-in");
    },
  },
});
