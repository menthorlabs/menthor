import { defineStore } from "pinia";

export const useSignInStore = defineStore("signIn", {
  actions: {
    async create({
      emailAddress,
      password,
    }: {
      emailAddress: string;
      password: string;
    }) {
      await this.$clerk.client.signIn.create({
        identifier: emailAddress,
        password,
      });
    },
    async authenticateWithRedirect({
      strategy,
      redirectUrl = "/sso-callback",
      redirectUrlComplete = "/?refreshToken=true",
    }: authenticate) {
      await this.$clerk.client.signIn.authenticateWithRedirect({
        strategy: strategy,
        redirectUrl: redirectUrl,
        redirectUrlComplete: redirectUrlComplete,
      });
    },
  },
});
