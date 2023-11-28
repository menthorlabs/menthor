import eslintPlugin from "vite-plugin-eslint";
import path from "node:path";

export default defineNuxtConfig({
  colorMode: {
    preference: "light",
  },
  sourcemap: { server: true, client: false }, // Disable sourcemap errors
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://menthor.io/",
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      appUrl: process.env.NUXT_PUBLIC_APP_URL || "https://menthor.io/app",
    },
  },
  nitro: {
    preset: "cloudflare_pages_static",
  },
  imports: {
    dirs: ["composables", "../../packages/composables"],
  },
  vue: {
    propsDestructure: true,
    defineModel: true,
  },
  extends: ["nuxt-umami"],
  css: ["@/styles/font.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  alias: {
    "@": path.resolve(__dirname, "../../packages/assets"),
  },
  components: [
    { path: "../../packages/ui/src", pathPrefix: false },
    { path: "~/components" },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "nuxt-simple-robots",
    "@nuxtjs/fontaine",
    "@vueuse/nuxt",
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
  tailwindcss: {
    cssPath: "@/styles/main.css",
  },
});
