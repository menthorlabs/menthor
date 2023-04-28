import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  css: [
    "~/styles/main.css",
    "~/styles/font.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image-edge"],
  vite: {
    plugins: [eslintPlugin()],
  },
});
