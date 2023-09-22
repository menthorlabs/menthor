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
    checkSessionStatus() {
      const clientSession = this.$clerk?.client?.sessions[0];
      if (clientSession?.status === "expired") {
        this.signOut();
        this.$router.push("/sign-in");
      }
    },
    hasSession() {
      const clientSession = this.$clerk?.client?.sessions[0];
      return !this.cleared && clientSession;
    },
    async refreshSession() {
      const clientSession = this.$clerk?.client?.sessions[0];
      await this.$clerk.setSession(clientSession);
    },
    async signOut() {
      const clerkToken = useCookie("__session");
      const userCookie = useCookie("m-user");
      userCookie.value = null;
      clerkToken.value = null;
      this.cleared = true;

      await this.$clerk.signOut();
    },
  },
});
