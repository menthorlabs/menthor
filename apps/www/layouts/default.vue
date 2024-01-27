<script setup lang="ts">
const route = useRoute();

useHead({
  titleTemplate: (): string =>
    route.meta.title ? `Menthor | ${route.meta.title}` : "Menthor",
  htmlAttrs: {
    lang: "pt-BR",
  },
  meta: [
    {
      name: "keywords",
      content:
        "Programação, Iniciantes, Codificação, Empreendedorismo, Desenvolvimento de software, Desenvolvimento web, Desenvolvimento de aplicativos, Linguagens de programação, Desenvolvimento de produto, Metodologias ágeis, Prototipagem",
    },
  ],
});

const description =
  "Plataforma gratuita de ensino de programação web para pessoas que estão buscando o primeiro emprego na área ou que querem construir seu próprio negócio.";
useSeoMeta({
  ogTitle: route.meta.title as string,
  ogDescription: description,
  ogImage: "https://menthor.io/brand/menthor-cover.jpg",
  ogType: "website",
  ogUrl: "https://menthor.io",
  ogSiteName: "Menthor",
  ogImageWidth: "1200",
  ogImageType: "image/jpeg",
  ogLocale: "pt_BR",
  description: description,
  twitterCard: "summary_large_image",
  twitterImage: "https://menthor.io/brand/menthor-cover.jpg",
  twitterTitle: route.meta.title as string,
  twitterDescription: description,
  twitterImageAlt: route.meta.title as string,
  twitterSite: "@publisher_handle",
});

const menuOpened = ref(false);
</script>

<template>
  <main class="font-sans" :class="{ 'mt-[60px] md:mt-0': menuOpened }">
    <AtomsHeader v-model="menuOpened" />
    <slot />
    <footer class="container border-t border-solid border-zinc-200 py-10">
      <nuxt-img
        loading="lazy"
        class="mx-auto mb-6 block h-[28px] w-auto"
        src="/brand/menthor-logo-dark.svg"
        alt="Menthor logo"
        height="28"
        width="155"
      />
      <div class="text-center text-sm font-normal text-zinc-500">
        © Copyright {{ new Date().getFullYear() }} Menthor 51.004.207/0001-75.
        Todos os direitos reservados.
      </div>
      <!-- <div class="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <nuxt-link
          to="#"
          target="_blank" external
          class="relative text-sm font-normal before:absolute before:-right-[16px] before:top-0 before:hidden before:h-full before:w-[1px] before:bg-zinc-200 hover:underline md:before:block"
        >
          Políticas de Privacidade
        </nuxt-link>
        <nuxt-link
          to="#"
          target="_blank" external
          class="text-sm font-normal hover:underline"
        >
          Histórico de Atualizações
        </nuxt-link>
      </div> -->
    </footer>
  </main>
</template>
