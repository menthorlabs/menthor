// @ts-expect-error avoid lint error
import eslintPlugin from "vite-plugin-eslint";
import path from "node:path";
import "./types/index.d.ts";

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || "https://menthor.io/";
const baseURL = "/app/";

export default defineNuxtConfig({
  sourcemap: { server: true, client: false }, // Disable sourcemap errors
  runtimeConfig: {
    public: {
      siteUrl,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      clerkPublishableKey: process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      appUrl: process.env.NUXT_PUBLIC_APP_URL,
    },
  },
  routeRules: {
    "/": { prerender: true },
    "/profile": { ssr: true },
  },
  nitro: {
    preset: "cloudflare",
    baseURL: process.env.NODE_ENV === "development" ? "/" : baseURL,
    prerender: {
      routes: ["/api/search.json"],
    },
    runtimeConfig: {
      app: {
        buildAssetsDir: "_nuxt",
      },
    },
  },
  app: {
    baseURL: process.env.NODE_ENV === "development" ? "/" : baseURL,
    buildAssetsDir:
      process.env.NODE_ENV === "development" ? "/_nuxt/" : `${baseURL}_nuxt/`,
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/app/favicon.ico" }],
    },
  },
  image: {
    domains: ["raw.githubusercontent.com"],
    // ipxStatic: {
    //   baseURL:
    //     process.env.NODE_ENV === "development" ? "/_ipx/" : `${baseURL}_ipx/`,
    // },
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
        dir: "content",
      },
    },
    navigation: {
      fields: ["image", "description", "_id", "_dir", "areas"],
    },
  },
  vue: {
    propsDestructure: true,
    defineModel: true,
  },
  extends: ["nuxt-umami"],
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
    "nuxt-simple-sitemap",
    "@nuxt/image-edge",
    "nuxt-schema-org",
    "@nuxtjs/fontaine",
    "@nuxt/content",
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
  appConfig: {
    umami: {
      version: 2,
      ignoreLocalhost: true,
      id: process.env.NUXT_PUBLIC_APP_UMAMI_ID,
      host: process.env.NUXT_PUBLIC_UMAMI_HOST,
    },
  },
});
