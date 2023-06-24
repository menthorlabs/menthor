export default defineNuxtPlugin(async (nuxtApp: { [key: string]: any }) => {
  function piniaFetch(context: any) {
    return {
      ...context.app.config.globalProperties,
      $router: nuxtApp.$router,
    };
  }

  nuxtApp.$pinia.use(piniaFetch);
});
