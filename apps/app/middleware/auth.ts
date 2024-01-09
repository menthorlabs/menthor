export default defineNuxtRouteMiddleware(async () => {
  if (process.server) return;

  const sessionStore = useSessionStore();

  if (sessionStore.hasSession()) return;

  return navigateTo("/sign-out");
});
