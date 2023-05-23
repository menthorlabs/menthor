import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  sourcemap: { server: true, client: false }, // Disable sourcemap errors
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://menthor.io/",
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  extends: ["nuxt-umami"],
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
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "nuxt-delay-hydration",
    "@nuxtjs/fontaine",
  ],
  vite: {
    plugins: [eslintPlugin()],
  },
  delayHydration: {
    mode: "mount",
    debug: process.env.NODE_ENV === "development",
  },
  appConfig: {
    umami: {
      version: 2,
      ignoreLocalhost: true,
    },
  },
});
