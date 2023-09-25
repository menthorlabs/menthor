export default defineNuxtRouteMiddleware(async (to) => {
  const userStore = useUserStore();
  const serverUser = useCookie("m-user");

  if (serverUser) {
    userStore.user = serverUser.value as typeof userStore.user;
  }

  if (to.query.oauth) return;

  const sessionStore = useSessionStore();
  const serverHasSession = !!serverUser.value || sessionStore.hasSession();

  if (["profile"].includes(String(to.name)) && !serverHasSession) {
    return navigateTo("/sign-in");
  }
  if (["sign-in", "sign-up"].includes(String(to.name)) && serverHasSession) {
    return navigateTo("/");
  }
  sessionStore.cleared = false;
});
