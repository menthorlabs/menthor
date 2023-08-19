export default defineNuxtRouteMiddleware(async (to) => {
  const sessionStore = useSessionStore();
  const userStore = useUserStore();

  const userCookie: Ref<typeof userStore.user> = useCookie("m-user");
  if (userCookie.value) {
    userStore.user = userCookie.value;
  }

  const serverHasSession = userCookie.value || sessionStore.hasSession();

  // if (["profile"].includes(String(to.name)) && !serverHasSession) {
  //   return navigateTo("/sign-in");
  // }
  if (["sign-in", "sign-up"].includes(String(to.name)) && serverHasSession) {
    return navigateTo("/");
  }
  sessionStore.cleared = false;
});
