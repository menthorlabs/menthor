<script setup>
const cards = [
  {
    image: "/midjourney/characters/1.png",
    text: "Quero criar uma criptomoeda",
  },
  {
    image: "/midjourney/characters/2.png",
    text: "Quero aprender inteligência artificial",
  },
  {
    image: "/midjourney/characters/11.png",
    text: "Quero ser CEO de uma startup",
  },
  {
    image: "/midjourney/characters/10.png",
    text: "Quero criar uma loja online para minha marca",
  },
  {
    image: "/midjourney/characters/5.png",
    text: "Quero conseguir meu primeiro emprego",
  },
  {
    image: "/midjourney/characters/6.png",
    text: "Quero criar projetos para meu currículo",
  },
  {
    image: "/midjourney/characters/7.png",
    text: "Quero melhorar meu linkedin",
  },
  {
    image: "/midjourney/characters/8.png",
    text: "Quero aprender sobre web3",
  },
  {
    image: "/midjourney/characters/9.png",
    text: "Quero subir meu app para produção",
  },
  {
    image: "/midjourney/characters/4.png",
    text: "Quero aprender sobre vendas e marketing",
  },
];
</script>

<template>
  <section id="hero" class="relative">
    <div class="absolute left-0 top-0 flex h-full w-full justify-center">
      <div
        class="mask-radial h-full max-h-[651px] w-full max-w-[1314px] bg-pattern"
      >
        <nuxt-img
          loading="lazy"
          src="/blobs/hero.svg"
          class="block h-full w-full object-cover object-center"
          alt="Menthor hero blobs"
          width="1314"
          height="651"
        />
      </div>
    </div>
    <div class="container relative pt-24">
      <h1
        class="mx-auto mb-6 max-w-[844px] text-4xl font-extrabold md:text-center md:text-5xl"
      >
        Aprenda a programar e construa sua própria startup
      </h1>
      <p
        class="mx-auto mb-16 max-w-[844px] text-lg text-zinc-700 md:mb-10 md:text-center"
      >
        A Menthor é uma plataforma <b class="font-bold">gratuita</b> de ensino
        de programação web para pessoas que estão buscando o primeiro emprego na
        área ou que querem construir seu próprio negócio.
      </p>
      <div
        class="mb-4 flex flex-wrap items-center gap-4 justify-center md:mb-10"
      >
        <nuxt-link
          :to="`${$config.public.appUrl}sign-up?utm_source=landing_page`"
          class="w-full md:w-fit"
        >
          <MButton
            text="Começar agora"
            icon-left="rocket"
            size="lg"
            class="w-full md:w-fit"
          />
        </nuxt-link>
        <nuxt-link
          :to="`${$config.public.appUrl}?utm_source=landing_page`"
          class="w-full md:w-fit"
        >
          <MButton
            text="Ver cursos disponíveis"
            icon-left="magnifying-glass"
            size="lg"
            variant="outline"
            class="w-full md:w-fit"
          />
        </nuxt-link>
      </div>
      <div
        class="mx-auto mb-10 w-fit rounded-full bg-zinc-900 px-4 py-1 text-center text-[10px] font-semibold text-white md:text-xs"
      >
        ✨ Seja um dos 1000 primeiros alunos e ganhe uma conquista!
      </div>
      <!-- <h2
        class="mb-3 text-center text-xs font-semibold uppercase text-zinc-500"
      >
        Apoiadores
      </h2>
      <div class="mb-20 flex flex-wrap items-center justify-center gap-4">
        <nuxt-img
          loading="lazy"
          class="h-[28px] w-auto"
          src="/brand/menthor-logo-dark.svg"
          height="28"
          width="155"
        />
        <nuxt-img
          loading="lazy"
          class="h-[28px] w-auto"
          src="/brand/menthor-logo-dark.svg"
          height="28"
          width="155"
        />
        <nuxt-img
          loading="lazy"
          class="h-[28px] w-auto"
          src="/brand/menthor-logo-dark.svg"
          height="28"
          width="155"
        />
      </div> -->
    </div>
    <div class="mt-20 overflow-hidden">
      <div class="flex gap-6">
        <div
          class="animation-group flex min-w-full items-center justify-around gap-6"
          v-for="i in 2"
          :key="i"
        >
          <div
            class="flex h-[349px] w-[205px] min-w-[205px] flex-col even:justify-end"
            v-for="card in cards"
            :key="card"
          >
            <div class="relative h-[288px] w-full overflow-hidden rounded-lg">
              <nuxt-img
                format="webp"
                quality="85"
                :src="card.image"
                width="205"
                height="288"
                class="absolute left-0 top-0 h-full w-full object-cover object-center"
                :alt="card.text"
              />
              <div
                class="absolute bottom-0 left-0 h-[95px] w-full bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0%,_#000000_100%)]"
              ></div>
              <div class="relative flex h-full flex-col justify-end p-4">
                <h2 class="m-0 text-center text-sm font-bold text-white">
                  {{ card.text }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#hero {
  --gap: 1.5rem;
  --duration: 50s;
  --scroll-start: 0;
  --scroll-end: calc(-100% - var(--gap));
}
.animation-group {
  flex-shrink: 0;
  min-width: 100%;
  animation: scroll-left var(--duration) linear infinite;
}

@keyframes scroll-left {
  from {
    transform: translateX(var(--scroll-start));
  }
  to {
    transform: translateX(var(--scroll-end));
  }
}
@media (prefers-reduced-motion: reduce) {
  .animation-group {
    animation-play-state: paused;
  }
}
</style>
