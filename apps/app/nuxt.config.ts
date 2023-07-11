// @ts-expect-error avoid lint error
import eslintPlugin from "vite-plugin-eslint";
import path from "node:path";
import "./types/index.d.ts";

export default defineNuxtConfig({
  sourcemap: { server: true, client: false }, // Disable sourcemap errors
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://menthor.io/",
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      clerkPublishableKey: process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
  },
  content: {
    highlight: {
      theme: "github-light",
    },
    sources: {
      github: {
        driver: "github",
        repo: "menthorlabs/courses",
        prefix: "/",
      },
    },
    navigation: {
      fields: ["image", "description"],
    },
  },
  vue: {
    propsDestructure: true,
    defineModel: true,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: "bundler",
      },
    },
  },
  css: [
    "@/styles/main.css",
    "@/styles/font.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  components: [
    { path: "../../packages/ui/src", pathPrefix: false },
    { path: "~/components", pathPrefix: false },
    { path: "~/components/content", pathPrefix: false },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/image-edge",
    "nuxt-simple-robots",
    "nuxt-schema-org",
    "@nuxtjs/fontaine",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],
  vite: {
    plugins: [eslintPlugin()],
  },
  alias: {
    "@": path.resolve(__dirname, "../../packages/assets"),
  },
  imports: {
    dirs: ["./composables", "./utils", "./stores/*"],
  },
});
