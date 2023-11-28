import { defineStore } from "pinia";
import { ClerkAPIError } from "@clerk/types";

export const useSessionStore = defineStore("session", {
  state: () => ({}),
  actions: {
    isConnected(): boolean {
      const userStore = useUserStore();
      return !!userStore.user?.primaryEmailAddress;
    },
    checkSessionStatus() {
      const clientSession = this.$clerk?.client?.sessions[0];
      if (clientSession?.status === "expired") {
        this.$router.push("/sign-out");
      }
    },
    hasSession() {
      const mSession = localStorage.getItem("m-session");
      return mSession === "true";
    },
    async refreshSession() {
      const clientSession = this.$clerk?.client?.sessions[0];
      if (!clientSession) return;
      try {
        localStorage.setItem("m-session", "true");
        await this.$clerk.setSession(clientSession);
      } catch (e) {
        const clerkError: { errors: ClerkAPIError[] } | any = e;
        if (clerkError.errors[0].code === "authentication_invalid") {
          this.$router.push("/sign-out");
        }

        throw new Error((e as Error).message);
      }
    },
    async signOut() {
      localStorage.removeItem("m-session");
      await this.$clerk.signOut();
    },
  },
});
