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
        <AtomsInfoCard
          v-for="card in cards"
          :key="card.title"
          :title="card.title"
          :description="card.description"
          :icon="card.icon"
        />
      </div>
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
        <nuxt-link
          :to="`${$config.public.appUrl}sign-up?utm_source=landing_page`"
          class="block w-full sm:w-fit"
        >
          <MButton
            text="Criar minha conta"
            icon-left="graduation-cap"
            size="lg"
            class="w-full"
          />
        </nuxt-link>
        <nuxt-link
          to="https://discord.gg/8BCByyXxq8"
          target="_blank"
          external
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
</template>
