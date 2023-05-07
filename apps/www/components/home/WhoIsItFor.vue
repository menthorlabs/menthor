<script setup lang="ts">
interface card {
  image: string;
  title: string;
  description: string;
  cta: string;
}
const cards: card[] = [
  {
    image: "/vectors/first_startup.svg",
    title: "Crie sua própria startup",
    description:
      "Aprenda a criar um MVP, estude desenvolvimento de produto e coloque suas ideias em prática.",
    cta: "Criar minha conta",
  },
  {
    image: "/vectors/first_job.svg",
    title: "Consiga seu primeiro emprego",
    description:
      "Construa projetos reais, melhore seu portfólio e se destaque nas vagas de emprego.",
    cta: "Começar agora",
  },
];
</script>

<template>
  <section id="who_is_it_for" class="my-32">
    <div class="container">
      <h2 class="mx-auto mb-6 max-w-[664px] text-center text-4xl font-bold">
        Para quem é a menthor?
      </h2>
      <p class="mx-auto mb-10 max-w-[664px] text-center text-lg text-zinc-700">
        Nosso objetivo é que você construa o seu próprio futuro através da
        programação, por isso nós vamos te ajudar a seguir por dois caminhos:
      </p>
      <div
        class="mx-auto grid max-w-[732px] grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-6"
      >
        <div
          v-for="card in cards"
          :key="card.title"
          class="rounded-lg border border-solid border-zinc-200 px-6 py-8"
        >
          <nuxt-img
            loading="lazy"
            class="mb-6 h-auto w-full"
            :src="card.image"
            width="306"
            height="140"
          />
          <h3 class="mb-2 text-lg font-medium">{{ card.title }}</h3>
          <p class="mb-6 text-base font-normal text-zinc-600">
            {{ card.description }}
          </p>
          <nuxt-link
            to="/acesso-antecipado"
            class="flex items-center gap-2 text-blue-600 no-underline"
          >
            <span class="text-base font-medium">{{ card.cta }}</span>
            <font-awesome-icon icon="arrow-right" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
