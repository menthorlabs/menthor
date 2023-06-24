import { defineStore } from "pinia";

export const useSignInStore = defineStore("signIn", {
  state: () => ({
    signIn: null,
  }),
  actions: {
    async create({ emailAddress, password }) {
      this.signIn = await this.$clerk.client.signIn.create({
        identifier: emailAddress,
        password,
      });
    },
    async authenticateWithRedirect({
      strategy,
      redirectUrl = "/sso-callback",
      redirectUrlComplete = "/?refreshToken=true",
    }) {
      await this.$clerk.client.signIn.authenticateWithRedirect({
        strategy: strategy,
        redirectUrl: redirectUrl,
        redirectUrlComplete: redirectUrlComplete,
      });
    },
  },
});
