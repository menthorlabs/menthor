export default defineNuxtRouteMiddleware(async (to) => {
  const sessionStore = useSessionStore();
  if (to.name === "sign-out") {
    await sessionStore.signOut();
    return navigateTo({ path: "/sign-in" });
  }

  const userStore = useUserStore();
  const serverUser = useCookie("m-user");

  if (serverUser.value as unknown) {
    userStore.user = serverUser.value as typeof userStore.user;
  }

  if (to.query.oauth) return;

  const serverHasSession = !!serverUser.value || sessionStore.hasSession();

  if (["profile"].includes(String(to.name)) && !serverHasSession) {
    return navigateTo("/sign-in");
  }

  if (["sign-in", "sign-up"].includes(String(to.name)) && serverHasSession) {
    return navigateTo("/");
  }
  sessionStore.cleared = false;
});
