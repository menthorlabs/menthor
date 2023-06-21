import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", {
  state: () => ({
    token: null,
  }),
  actions: {
    async getToken() {
      this.token = await this.$clerk.session.getToken();
    },
  },
});
