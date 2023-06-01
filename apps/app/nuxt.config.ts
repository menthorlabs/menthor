import eslintPlugin from "vite-plugin-eslint";
import path from "node:path";

export default defineNuxtConfig({
  sourcemap: { server: true, client: false }, // Disable sourcemap errors
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://menthor.io/",
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      clerkPublishableKey: process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
  },
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
    "~/components",
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
    "@nuxtjs/fontaine",
  ],
  vite: {
    plugins: [eslintPlugin()],
  },
});
