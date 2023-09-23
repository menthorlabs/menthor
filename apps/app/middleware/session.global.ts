import { useCookies } from "@vueuse/integrations/useCookies";

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.query.oauth) return;

  const sessionStore = useSessionStore();
  const userStore = useUserStore();

  const userCookie = useCookies([]);
  const userCookieValue = userCookie.get("m-user");
  if (userCookieValue) {
    userStore.user = userCookieValue;
    console.log({ userCookieValue });
  }

  const serverHasSession = sessionStore.hasSession();

  if (["profile"].includes(String(to.name)) && !serverHasSession) {
    return navigateTo("/sign-in");
  }
  if (["sign-in", "sign-up"].includes(String(to.name)) && serverHasSession) {
    return navigateTo("/");
  }
  sessionStore.cleared = false;
});
