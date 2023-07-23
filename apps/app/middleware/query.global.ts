export default defineNuxtRouteMiddleware(async (to) => {
  const queryStore = useQueryStore();

  if (queryStore.redirect && to.path === "/") {
    const pathToRedirect = queryStore.redirect;
    queryStore.redirect = null;
    return navigateTo(pathToRedirect);
  }

  if (to.query?.redirect) {
    const decodedRedirect = decodeURIComponent(String(to.query?.redirect));
    queryStore.redirect = to.query?.redirect ? decodedRedirect : null;
  }
});
