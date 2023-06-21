export default defineNuxtPlugin(async (nuxtApp: { [key: string]: any }) => {
  function piniaFetch(context: any) {
    return {
      ...context.app.config.globalProperties,
    };
  }

  nuxtApp.$pinia.use(piniaFetch);
});
