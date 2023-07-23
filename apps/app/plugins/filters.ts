export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  type levels = "easy" | "intermediate" | "advanced" | "expert";
  const filters = {
    level(value: levels) {
      const levels: Record<levels, string> = {
        easy: "Fácil",
        intermediate: "Intermediário",
        advanced: "Avançado",
        expert: "Expert",
      };
      return levels[value];
    },
  };

  app.config.globalProperties.$filters = filters;
  app.provide("filters", filters);
});
