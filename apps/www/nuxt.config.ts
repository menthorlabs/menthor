import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
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
  modules: [
    "@nuxt/image-edge",
    "nuxt-gtag",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "nuxt-delay-hydration",
    "@nuxtjs/fontaine",
  ],
  vite: {
    plugins: [eslintPlugin()],
  },
  gtag: {
    id: "G-ZTHLRGN0E3",
  },
  delayHydration: {
    mode: "mount",
    debug: process.env.NODE_ENV === "development",
  },
});
