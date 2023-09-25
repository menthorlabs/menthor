import eslintPlugin from "vite-plugin-eslint";
import path from "node:path";

export default defineNuxtConfig({
  // ssr: false,
  sourcemap: { server: true, client: false }, // Disable sourcemap errors
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://menthor.io/",
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      appUrl: process.env.NUXT_PUBLIC_APP_URL || "https://menthor.io/app",
    },
  },
  imports: {
    dirs: ["composables", "../../packages/composables"],
  },
  vue: {
    propsDestructure: true,
    defineModel: true,
  },
  extends: ["nuxt-umami"],
  css: [
    "@/styles/main.css",
    "@/styles/font.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
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
    "@nuxt/image-edge",
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
});
