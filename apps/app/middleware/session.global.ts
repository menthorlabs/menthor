export default defineNuxtRouteMiddleware(async (to) => {
  const sessionStore = useSessionStore();
  if (["sign-in", "sign-up"].includes(String(to.name)) && sessionStore.hasSession) {
    return navigateTo("/");
  }
  sessionStore.cleared = false;
});
