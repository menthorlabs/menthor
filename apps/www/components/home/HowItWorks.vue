<template>
  <section id="how_it_works" class="my-32">
    <div class="container">
      <h2 class="mx-auto mb-6 max-w-[664px] text-center text-4xl font-bold">
        Como a menthor funciona?
      </h2>
      <p class="mx-auto mb-10 max-w-[664px] text-center text-lg text-zinc-700">
        Nós reimaginamos a forma de estudar. Aqui você é livre para aprender,
        livre para ajudar seus colegas e livre para contribuir com o conteúdo
        das aulas.
      </p>
      <div
        class="mb-12 grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-6"
      >
        <div
          v-for="i in 3"
          :key="i"
          class="relative overflow-hidden rounded-lg border border-solid border-zinc-200 bg-white px-6 pb-8 pt-20"
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
              <font-awesome-icon icon="bookmark" />
            </div>
            <h3 class="text-lg font-medium">Aulas em texto</h3>
            <p class="text-base font-normal text-zinc-600">
              Busque os conteúdos de forma rápida e faça anotações durante seus
              estudos.
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center gap-6">
        <MButton text="Quero ser aluno" icon-left="graduation-cap" size="lg" />
        <MButton
          variant="outline"
          text="Acessar comunidade"
          :icon-left="['fab', 'discord']"
          size="lg"
        />
      </div>
    </div>
  </section>
</template>
