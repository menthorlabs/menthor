<script setup lang="ts">
const { app = "tailwind" } = defineProps<{
  app?: string;
}>();

const apps: { [key: string]: { url: string; text: string } } = {
  vercel: {
    text: "Vercel.com",
    url: "https://vercel.com/?utm_source=menthor.io",
  },
  vue: {
    text: "Vue",
    url: "https://vuejs.org/?utm_source=menthor.io",
  },
  tailwind: {
    text: "TailwindCSS",
    url: "https://tailwindcss.com/?utm_source=menthor.io",
  },
  github: {
    text: "GitHub",
    url: "https://github.com/?utm_source=menthor.io",
  },
  ethers: {
    text: "EthersJS",
    url: "https://ethers.org/?utm_source=menthor.io",
  },
  solidity: {
    text: "Solidity",
    url: "https://soliditylang.org/?utm_source=menthor.io",
  },
  html: {
    text: "HTML",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML?utm_source=menthor.io",
  },
  medusajs: {
    text: "MedusaJS",
    url: "https://medusajs.com/?utm_source=menthor.io",
  },
  render: {
    text: "Render.com",
    url: "https://render.com/?utm_source=menthor.io",
  },
  nuxt: {
    text: "NuxtJS",
    url: "https://nuxt.com/?utm_source=menthor.io",
  },
  nextjs: {
    text: "NextJS",
    url: "https://nextjs.org/?utm_source=menthor.io",
  },
  prisma: {
    text: "Prisma",
    url: "https://www.prisma.io/?utm_source=menthor.io",
  },
  javascript: {
    text: "JavaScript",
    url: "https://en.wikipedia.org/wiki/JavaScript?utm_source=menthor.io",
  },
  trpc: {
    text: "tRPC",
    url: "https://trpc.io/?utm_source=menthor.io",
  },
  react: {
    text: "React",
    url: "https://react.dev/?utm_source=menthor.io",
  },
};
</script>

<template>
  <UTooltip
    v-if="apps[app]"
    :text="apps[app].text"
    :popper="{ placement: 'top' }"
  >
    <nuxt-link
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
  </UTooltip>
</template>
