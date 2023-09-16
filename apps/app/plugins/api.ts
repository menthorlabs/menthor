import { ofetch } from "ofetch";

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;
  const config = useRuntimeConfig();

  const apiFetch = ofetch.create({
    baseURL: config.public.apiUrl as string,
    retry: 0,
    async onRequest({ options }) {
      if (!app.config.globalProperties.$clerk?.session) return;

      const jwt = await app.config.globalProperties.$clerk.session.getToken({
        template: "menthor-be",
        skipCache: true,
      });

      options.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      };
    },
    onResponseError({ response }) {
      app.config.globalProperties.$toastError(
        response._data?.message || response._data?.error
      );
    },
  });

  app.config.globalProperties.$api = apiFetch;
  app.provide("api", apiFetch);
});
