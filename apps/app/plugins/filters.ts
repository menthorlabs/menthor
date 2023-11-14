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
    bytesToSize(bytes: number): string {
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (bytes === 0) return "n/a";
      const i = Math.min(
        Math.floor(Math.log(bytes) / Math.log(1024)),
        sizes.length - 1
      );
      if (i === 0) return `${bytes} ${sizes[i]}`;
      return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
    },
  };

  app.config.globalProperties.$filters = filters;
  app.provide("filters", filters);
});
