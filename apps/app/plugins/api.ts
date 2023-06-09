import { ofetch } from "ofetch";

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;
  const config = useRuntimeConfig();

  const apiFetch = ofetch.create({
    baseURL: config.public.apiUrl as string,
    retry: 0,
    onRequest({ options }) {
      options.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer MENTHOR-DEV",
      };
    },
    onResponseError({ response }) {
      console.log(response);
    },
  });

  app.config.globalProperties.$api = apiFetch;
  app.provide("api", apiFetch);
});
