import Clerk from "@clerk/clerk-js";

export default defineNuxtPlugin(async (nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const app = nuxtApp.vueApp;
  let clerk: null | { load: Function } = null;
  clerk = new Clerk(runtimeConfig.public.clerkPublishableKey);
  app.provide("clerk", clerk);
  app.config.globalProperties.$clerk = clerk;
  await clerk?.load();
});
