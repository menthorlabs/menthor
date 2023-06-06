import Clerk from "@clerk/clerk-js";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const app = nuxtApp.vueApp;

  let clerk: null | { load: Function } = null;
  clerk = new Clerk(runtimeConfig.public.clerkPublishableKey);
  app.provide("clerk", clerk);
  clerk?.load();
});
