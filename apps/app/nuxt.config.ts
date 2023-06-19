// @ts-expect-error avoid lint error
import eslintPlugin from "vite-plugin-eslint";
import path from "node:path";
import "./types";

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
    { path: "../../packages/ui/src", pathPrefix: false, extensions: [".vue"] },
    { path: "~/components", pathPrefix: false, extensions: [".vue"] },
    { path: "~/components/content", pathPrefix: false, extensions: [".vue"] },
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
    "@nuxt/content",
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],
  vite: {
    plugins: [eslintPlugin()],
    optimizeDeps: {
      exclude: ["@clerk/clerk-js"],
    },
  },
  // build: {
  //   transpile: ["@clerk/clerk-js"],
  // },
  alias: {
    "@": path.resolve(__dirname, "../../packages/assets"),
  },
  imports: {
    dirs: ["./composables", "./utils", "./stores/components"],
  },
});
