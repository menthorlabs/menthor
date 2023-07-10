import { defineStore } from "pinia";
import type { SignInCreateParams } from "@clerk/types";

export const useSignInStore = defineStore("signIn", {
  actions: {
    async create({
      emailAddress,
      password,
    }: {
      emailAddress: string | null;
      password: string | null;
    }) {
      await this.$clerk.client.signIn.create<SignInCreateParams>({
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
