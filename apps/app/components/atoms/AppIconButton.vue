<script setup lang="ts">
const { app = "tailwind" } = defineProps<{
  app?: string;
}>();

const apps: { [key: string]: { url: string } } = {
  vercel: {
    url: "https://vercel.com/?utm_source=menthor.io",
  },
  vue: {
    url: "https://vuejs.org/?utm_source=menthor.io",
  },
  tailwind: {
    url: "https://tailwindcss.com/?utm_source=menthor.io",
  },
  github: {
    url: "https://github.com/?utm_source=menthor.io",
  },
  ethers: {
    url: "https://ethers.org/?utm_source=menthor.io",
  },
  solidity: {
    url: "https://soliditylang.org/?utm_source=menthor.io",
  },
  html: {
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML?utm_source=menthor.io",
  },
  medusajs: {
    url: "https://medusajs.com/?utm_source=menthor.io",
  },
  render: {
    url: "https://render.com/?utm_source=menthor.io",
  },
  nuxt: {
    url: "https://nuxt.com/?utm_source=menthor.io",
  },
};
</script>

<template>
  <nuxt-link
    v-if="apps[app]"
    :to="apps[app].url"
    target="_blank"
    external
    class="flex h-[40px] w-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white/90 px-2 py-3 hover:bg-zinc-100/90"
  >
    <nuxt-img
      :src="`/app/logos/${app}.svg`"
      :alt="app"
      class="w-full h-full object-contain object-center"
      height="16"
      width="auto"
    />
  </nuxt-link>
</template>
