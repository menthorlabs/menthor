import { defineStore } from "pinia";
import { useCookies } from "@vueuse/integrations/useCookies";
import { ClerkAPIError } from "@clerk/types";

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
        this.$router.push("/sign-out");
      }
    },
    hasSession() {
      const clientSession = this.$clerk?.client?.sessions[0];
      return Boolean(!this.cleared && clientSession);
    },
    async refreshSession() {
      const clientSession = this.$clerk?.client?.sessions[0];
      if (!clientSession) return;
      try {
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
      this.cleared = true;
      const clerkToken = useCookies([]);
      const userCookie = useCookies([]);
      await userCookie.remove("m-user");
      await clerkToken.remove("__session");
      await this.$clerk.signOut();
    },
  },
});
