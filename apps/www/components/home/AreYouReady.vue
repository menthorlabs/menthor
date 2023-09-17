<template>
  <section id="are_you_ready" class="my-20 md:my-32">
    <div class="container">
      <h2
        class="mx-auto mb-6 max-w-[664px] text-center text-3xl font-bold md:text-4xl"
      >
        Ainda não está convencido? 🤔
      </h2>
      <nuxt-link
        :to="`${$config.public.appUrl}?utm_source=landing_page`"
        class="mx-auto block w-full md:w-fit"
      >
        <MButton
          text="Ver todos os cursos"
          icon-right="arrow-right"
          size="lg"
          class="w-full"
        />
      </nuxt-link>
    </div>
  </section>
</template>
