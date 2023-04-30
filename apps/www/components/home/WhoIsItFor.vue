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
          v-for="i in 2"
          :key="i"
          class="border border-solid border-zinc-200 px-6 py-8"
        >
          <nuxt-img
            class="mb-6 h-auto w-full"
            src="/vectors/first_startup.svg"
            width="306"
            height="140"
          />
          <h3 class="mb-2 text-lg font-medium">Crie sua própria startup</h3>
          <p class="mb-6 text-base font-normal text-zinc-600">
            Comece com programação e aprenda tudo o que você precisa saber para
            começar sua própria empresa.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-blue-600 no-underline"
          >
            <span class="text-base font-medium">Criar minha conta</span>
            <font-awesome-icon icon="arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
