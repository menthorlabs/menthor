<template>
  <section
    id="creators_hero"
    class="max-w-[1440px] mx-auto relative min-h-[664px]"
  >
    <div class="absolute left-0 top-0 flex h-full w-full justify-center">
      <div class="mask-radial h-full max-w-[1110px] w-full">
        <nuxt-img
          src="/patterns/tech-stacks.svg"
          width="1110"
          height="790"
          class="block h-full w-full object-cover object-center"
        />
      </div>
      <div class="absolute left-0 top-0 flex justify-center w-full h-full">
        <nuxt-img
          loading="lazy"
          src="/blobs/creators.svg"
          class="block h-full max-h-[651px] w-full max-w-[1314px] object-contain object-center"
          alt="Menthor hero blobs"
          width="1314"
          height="651"
        />
      </div>
      <div class="absolute top-0 left-0 flex justify-center w-full h-full">
        <div
          class="w-full h-full max-w-[983px] max-h-[485px] rounded-[983px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.70)_68.75%,_rgba(255,_255,_255,_0.00)_100%)] mt-[31px]"
        ></div>
      </div>
    </div>
    <div class="container relative pt-24">
      <h1
        class="mx-auto mb-6 max-w-[844px] text-4xl font-extrabold md:text-center md:text-5xl"
      >
        Escreva cursos para a comunidade e ganhe recompensas
      </h1>
      <p
        class="mx-auto mb-16 max-w-[844px] text-lg text-zinc-700 md:mb-10 md:text-center"
      >
        Torne-se um <span class="font-semibold text-zinc-950">creator</span> e
        divulgue seu conhecimento para mais de 2000 alunos. Os lucros
        provenientes da plataforma serão distribuído para todos os creators.
      </p>
      <div
        class="mb-4 flex flex-wrap items-center gap-4 justify-center md:mb-10"
      >
        <nuxt-link
          :to="`${$config.public.appUrl}sign-up?utm_source=landing_page`"
          class="w-full md:w-fit"
        >
          <MButton
            text="Leia a documentação"
            icon-left="book"
            class="w-full md:w-fit"
            variant="secondary"
            size="lg"
          />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
