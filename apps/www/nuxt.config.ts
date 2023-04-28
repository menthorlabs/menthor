import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  css: ["~/styles/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image-edge"],
  image: {
    dir: "assets",
  },
  vite: {
    plugins: [eslintPlugin()],
  },
});
