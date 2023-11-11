<script setup lang="ts">
interface card {
  icon: string;
  title: string;
  description: string;
}

const cards: card[] = [
  {
    icon: "keyboard",
    title: "Aulas em markdown",
    description: "Utilize seu próprio editor de texto para escrever as aulas.",
  },
  {
    icon: "spell-check",
    title: "Controle de qualidade",
    description:
      "Siga os padrões da menthor e escreva cursos de alta qualidade.",
  },
  {
    icon: "lightbulb",
    title: "Foco na criação",
    description:
      "Preocupe-se em escrever cursos, as dúvidas dos alunos a gente resolve.",
  },
];
</script>

<template>
  <section id="how_it_works" class="my-20 md:my-32">
    <div class="container">
      <h2
        class="mx-auto mb-6 max-w-[664px] text-3xl font-bold md:text-center md:text-4xl"
      >
        Como funciona a criação de cursos?
      </h2>
      <p
        class="mx-auto mb-10 max-w-[664px] text-zinc-700 md:text-center md:text-lg"
      >
        A menthor é uma plataforma totalmente gratuita e open-source, todos os
        nossos cursos estão
        <nuxt-link
          to="https://github.com/menthorlabs/courses"
          external
          target="_blank_"
          class="link"
          >disponíveis no GitHub</nuxt-link
        >
        com a licensa MIT.
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
