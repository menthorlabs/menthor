<script setup>
const stacks = [
  {
    logo: "/logos/vue.svg",
    name: "Vue",
    link: "https://vuejs.org/",
  },
  {
    logo: "/logos/tailwind.svg",
    name: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    logo: "/logos/supabase.svg",
    name: "Supabase",
    link: "https://supabase.com/",
  },
  {
    logo: "/logos/vercel.svg",
    name: "Vercel",
    link: "https://vercel.com/",
  },
  {
    logo: "/logos/github.svg",
    name: "GitHub",
    link: "https://github.com/",
  },
  {
    logo: "/logos/playwright.svg",
    name: "Playwright",
    link: "https://playwright.dev/",
  },
  {
    logo: "/logos/nuxt.svg",
    name: "Nuxt",
    link: "https://nuxt.com/",
  },
  {
    logo: "/logos/turborepo.svg",
    name: "Turborepo",
    link: "https://turbo.build/repo",
  },
];
</script>

<template>
  <section id="why_us" class="my-32">
    <div class="container">
      <h2 class="mx-auto mb-6 max-w-[664px] text-center text-4xl font-bold">
        Porque a menthor?
      </h2>
      <p class="mx-auto mb-10 max-w-[664px] text-center text-lg text-zinc-700">
        Nós acreditamos que todo tipo de ensino deve ser gratuito e queremos
        fornecer a melhor experiência de ensino para nossos alunos.
      </p>
      <div class="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-6">
        <div>
          <div
            class="group mb-6 overflow-hidden rounded-lg border border-solid border-zinc-200 px-8 pb-4 pt-10 text-3xl font-semibold"
          >
            <h3>Gratuito para</h3>
            <div class="flex items-center" aria-hidden>
              <div
                class="animation-text-left !pause group-hover:!start flex min-w-full"
                v-for="i in 2"
                :key="i"
              >
                <p class="-translate-x-[300px] text-zinc-400">
                  eeeeeeeeeeeeeeeee<strong class="font-semibold text-zinc-900"
                    >sempre</strong
                  >eeeeeeeeeeeeeeeeeeeee
                </p>
              </div>
            </div>
            <div class="flex items-center" aria-hidden>
              <div
                class="animation-text-right !pause group-hover:!start flex min-w-full"
                v-for="i in 2"
                :key="i"
              >
                <p class="-translate-x-[300px] text-zinc-400">
                  eeeeeeeeeeeeeeeeeeeee<strong
                    class="font-semibold text-zinc-900"
                    >sempre</strong
                  >eeeeeeeeee
                </p>
              </div>
            </div>
            <div class="flex items-center" aria-hidden>
              <div
                class="animation-text-left !pause group-hover:!start flex min-w-full"
                v-for="i in 2"
                :key="i"
              >
                <p class="-translate-x-[300px] text-zinc-400">
                  eeeeeeeeeeeeeeeeeeeeeeee<strong
                    class="font-semibold text-zinc-900"
                    >sempre</strong
                  >eeeeeeeeeeeeee
                </p>
              </div>
            </div>
          </div>
          <div
            class="group min-h-[258px] overflow-hidden rounded-lg border border-solid border-zinc-200 px-8 pb-6 pt-10 text-3xl font-semibold"
          >
            <h3 class="mb-6">Tecnologias modernas</h3>
            <div class="-ml-8 mb-2 flex gap-2">
              <div
                class="group-hover:!pause animation-stacks-left flex min-w-full gap-2"
                v-for="i in 2"
                :key="i"
              >
                <a
                  v-for="stack in stacks.slice(0, 4)"
                  :key="stack"
                  :href="stack.link"
                  rel="noopener"
                  target="_blank"
                  class="flex h-[40px] min-w-fit items-center gap-2 rounded-full border border-solid border-zinc-200 px-4 py-2 hover:border-blue-500"
                >
                  <nuxt-img
                    loading="lazy"
                    :src="stack.logo"
                    class="h-[16px] w-auto"
                    width="auto"
                    height="16"
                  />
                  <span class="text-sm font-semibold">{{ stack.name }}</span>
                </a>
              </div>
            </div>
            <div class="-ml-8 mb-2 flex gap-2">
              <div
                class="group-hover:!pause animation-stacks-right flex min-w-full gap-2"
                v-for="i in 2"
                :key="i"
              >
                <a
                  v-for="stack in stacks.slice(4)"
                  :key="stack"
                  :href="stack.link"
                  rel="noopener"
                  target="_blank"
                  class="flex h-[40px] min-w-fit items-center gap-2 rounded-full border border-solid border-zinc-200 px-4 py-2 hover:border-blue-500"
                >
                  <nuxt-img
                    loading="lazy"
                    :src="stack.logo"
                    class="h-[16px] w-auto"
                    width="auto"
                    height="16"
                  />
                  <span class="text-sm font-semibold">{{ stack.name }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative h-full overflow-hidden rounded-lg border border-solid border-zinc-200 px-8 pb-6 pt-10 text-3xl font-semibold"
        >
          <div
            class="absolute -left-[34px] top-[94px] flex h-full w-full justify-center"
          >
            <div
              class="mask-radial h-full max-h-[651px] w-full max-w-[1314px] bg-pattern"
            ></div>
          </div>
          <div class="relative flex h-full flex-col">
            <h3 class="mb-9 w-full">Terminal integrado</h3>
            <div class="h-full min-w-[calc(100%_+_32px)] flex-1">
              <nuxt-img
                loading="lazy"
                src="/vectors/terminal.svg"
                height="380"
                width="334"
                class="block h-full w-full rounded-l-lg border border-zinc-200 border-r-transparent object-cover object-left-top shadow-lg"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            class="relative mb-6 min-h-[258px] overflow-hidden rounded-lg border border-solid border-zinc-200 px-8 pb-6 pt-10 text-3xl font-semibold"
          >
            <nuxt-img
              loading="lazy"
              src="/vectors/world_map.svg"
              height="264"
              width="810"
              class="absolute -top-[8px] left-[62px] h-[264px] w-[810px]"
            />
            <h3 class="relative mb-6">Networking com todo o Brasil</h3>
          </div>
          <div
            class="flex min-h-[200px] items-center justify-center overflow-hidden rounded-lg border border-solid border-zinc-200 p-6 text-3xl font-semibold"
          >
            <span class="text-sm font-normal text-zinc-500"
              >Ainda quer mais?</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#why_us {
  --gap: 0.5rem;
  --duration: 30s;
  --scroll-start: 0;
  --scroll-end: calc(-100%);
}

.animation-text-left {
  flex-shrink: 0;
  min-width: 100%;
  animation: scroll-left var(--duration) linear infinite;
}

.animation-stacks-left {
  --duration: 20s;
  --scroll-end: calc(-100% - var(--gap));
  flex-shrink: 0;
  min-width: 100%;
  animation: scroll-left var(--duration) linear infinite;
}

.animation-text-right {
  flex-shrink: 0;
  min-width: 100%;
  animation: scroll-right var(--duration) linear infinite;
}

.animation-stacks-right {
  --duration: 20s;
  --scroll-end: calc(-100% - var(--gap));
  flex-shrink: 0;
  min-width: 100%;
  animation: scroll-right var(--duration) linear infinite;
}

@keyframes scroll-left {
  from {
    transform: translateX(var(--scroll-start));
  }
  to {
    transform: translateX(var(--scroll-end));
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(var(--scroll-end));
  }
  to {
    transform: translateX(var(--scroll-start));
  }
}

@media (prefers-reduced-motion: reduce) {
  .animation-text-left {
    animation-play-state: paused;
  }
  .animation-stacks-left {
    animation-play-state: paused;
  }
  .animation-text-right {
    animation-play-state: paused;
  }
  .animation-stacks-right {
    animation-play-state: paused;
  }
}
</style>
