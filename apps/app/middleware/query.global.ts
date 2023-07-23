export default defineNuxtRouteMiddleware(async (to) => {
  const queryStore = useQueryStore();

  if (queryStore.redirect && to.path === "/") {
    navigateTo(queryStore.redirect);
    queryStore.redirect = null;
    return;
  }

  if (!queryStore.redirect) {
    const decodedRedirect = decodeURIComponent(String(to.query?.redirect));
    queryStore.redirect = to.query?.redirect ? decodedRedirect : null;
  }
});
