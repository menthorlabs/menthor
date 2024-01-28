import { defineStore } from "pinia";

export const useDiscordStore = defineStore("discord", {
  state: (): {} => ({}),
  actions: {
    async getUser() {
      const sessionStore = useSessionStore();
      if (!sessionStore.isConnected()) return;
      try {
        const response = await this.$api(`/discord/user`, {
          method: "POST",
        });
        return response;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async requestRole(payload: {
      roleId: string;
      code: string;
      redirectUri: string;
    }) {
      try {
        const response = await this.$api(
          `/discord/request-role/${payload.roleId}`,
          {
            method: "POST",
            body: {
              code: payload.code,
              redirectUri: payload.redirectUri,
            },
          }
        );
        return response;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
  },
});
