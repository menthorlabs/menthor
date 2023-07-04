import { PiniaPluginContext } from "pinia";

export default defineNuxtPlugin((nuxtApp) => {
  function piniaFetch(context: PiniaPluginContext) {
    return {
      ...context.app.config.globalProperties,
      $router: nuxtApp.$router,
    };
  }

  // @ts-ignore
  nuxtApp.$pinia.use(piniaFetch);
});
