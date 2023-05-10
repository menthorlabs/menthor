<template>
  <DelayHydration>
    <section id="are_you_ready" class="my-20 md:my-32">
      <div class="container">
        <h2
          class="mx-auto mb-6 max-w-[664px] text-center text-3xl font-bold md:text-4xl"
        >
          Está pronto para começar? 🎉
        </h2>
        <nuxt-link
          to="/acesso-antecipado"
          class="mx-auto block w-full md:w-fit"
        >
          <MButton
            text="Garantir meu acesso"
            icon-left="rocket"
            size="lg"
            class="w-full"
          />
        </nuxt-link>
      </div>
    </section>
  </DelayHydration>
</template>
