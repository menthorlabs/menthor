export default defineNuxtRouteMiddleware(async (to) => {
  if (to.meta.ignoreMiddleware) return;

  const userStore = useUserStore();
  const serverUser = useCookie("m-user");

  if (serverUser) {
    userStore.user = serverUser.value as typeof userStore.user;
  }

  if (to.query.oauth) return;

  const router = useRouter();
  const sessionStore = useSessionStore();
  const serverHasSession = !!serverUser.value || sessionStore.hasSession();

  if (["profile"].includes(String(to.name)) && !serverHasSession) {
    router.push("/sign-in");
  }
  if (["sign-in", "sign-up"].includes(String(to.name)) && serverHasSession) {
    router.push("/");
  }
  sessionStore.cleared = false;
});
