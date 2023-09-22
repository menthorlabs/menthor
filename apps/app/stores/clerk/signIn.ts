import { defineStore } from "pinia";
import type {
  SignInCreateParams,
  AttemptFirstFactorParams,
} from "@clerk/types";

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
    async forgotPassword({ emailAddress }: { emailAddress: string | null }) {
      await this.$clerk.client.signIn.create<SignInCreateParams>({
        identifier: emailAddress,
        strategy: "reset_password_email_code",
      });
    },
    async resetPassword(payload: { password: string; code: string }) {
      await this.$clerk.client.signIn.attemptFirstFactor<AttemptFirstFactorParams>(
        {
          strategy: "reset_password_email_code",
          password: payload.password,
          code: payload.code,
        }
      );
    },
    async authenticateWithRedirect({
      strategy,
      redirectUrl = "/sso-callback",
      redirectUrlComplete = "/",
    }: authenticate) {
      await this.$clerk.client.signIn.authenticateWithRedirect({
        strategy: strategy,
        redirectUrl: redirectUrl,
        redirectUrlComplete: redirectUrlComplete,
      });
    },
  },
});
