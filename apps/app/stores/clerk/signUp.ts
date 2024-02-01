import { defineStore } from "pinia";

export const useSignUpStore = defineStore("signUp", {
  state: () => ({
    signUp: null,
  }),
  actions: {
    async create({
      emailAddress,
      password,
    }: {
      emailAddress: string | null;
      password: string | null;
    }) {
      this.signUp = await this.$clerk.client.signUp.create({
        emailAddress,
        password,
      });
    },
    async authenticateWithRedirect({
      strategy,
      redirectUrl = "/sso-callback",
      redirectUrlComplete = "/",
    }: authenticate) {
      await this.$clerk.client.signUp.authenticateWithRedirect({
        strategy: strategy,
        redirectUrl: redirectUrl,
        redirectUrlComplete: redirectUrlComplete,
      });
    },
    async attemptEmailAddressVerification({ code }: { code: string }) {
      await this.$clerk.client.signUp.attemptEmailAddressVerification({
        code,
      });
    },
  },
});
