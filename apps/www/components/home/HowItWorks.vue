<script setup lang="ts">
interface card {
  icon: string;
  title: string;
  description: string;
}

const cards: card[] = [
  {
    icon: "bookmark",
    title: "Aulas em texto",
    description:
      "Busque os conteúdos de forma rápida e faça anotações durante seus estudos.",
  },
  {
    icon: "users",
    title: "Open source",
    description:
      "Contribua com melhorias na plataforma e no conteúdo das aulas.",
  },
  {
    icon: "earth-americas",
    title: "Aprendizagem colaborativa",
    description:
      "Tire dúvidas com os alunos que estão estudando junto com você.",
  },
];
</script>

<template>
  <DelayHydration>
    <section id="how_it_works" class="my-20 md:my-32">
      <div class="container">
        <h2
          class="mx-auto mb-6 max-w-[664px] text-3xl font-bold md:text-center md:text-4xl"
        >
          Como a menthor funciona?
        </h2>
        <p
          class="mx-auto mb-10 max-w-[664px] text-zinc-700 md:text-center md:text-lg"
        >
          Nós reimaginamos a forma de estudar. Aqui você é livre para aprender,
          livre para ajudar seus colegas e livre para contribuir com o conteúdo
          das aulas.
        </p>
        <div
          class="-ml-4 mb-12 flex w-[calc(100%_+_2rem)] flex-nowrap gap-4 overflow-x-auto md:grid md:w-full md:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] md:gap-6 md:overflow-x-hidden"
        >
          <div
            v-for="card in cards"
            :key="card.title"
            class="relative min-w-[80%] overflow-hidden rounded-lg border border-solid border-zinc-200 bg-white px-6 pb-8 pt-20 first:ml-4 last:mr-4 md:min-w-0 md:first:ml-0 md:last:mr-0"
          >
            <div
              class="pointer-events-none absolute -right-[836px] -top-[448px] flex h-[651px] w-[1314px] justify-center"
            >
              <div class="mask-radial h-full w-full bg-pattern" />
            </div>
            <div class="relative">
              <div
                class="mb-4 flex h-[32px] w-[32px] items-center justify-center rounded-full border border-solid border-zinc-300 text-sm text-zinc-700"
              >
                <font-awesome-icon :icon="card.icon" />
              </div>
              <h3 class="text-lg font-medium">{{ card.title }}</h3>
              <p class="text-base font-normal text-zinc-600">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
          <nuxt-link to="/acesso-antecipado" class="block w-full sm:w-fit">
            <MButton
              text="Quero ser aluno"
              icon-left="graduation-cap"
              size="lg"
              class="w-full"
            />
          </nuxt-link>
          <nuxt-link
            to="https://discord.gg/8BCByyXxq8"
            target="_blank"
            class="block w-full sm:w-fit"
          >
            <MButton
              variant="outline"
              text="Acessar comunidade"
              :icon-left="['fab', 'discord']"
              size="lg"
              class="w-full"
            />
          </nuxt-link>
        </div>
      </div>
    </section>
  </DelayHydration>
</template>
