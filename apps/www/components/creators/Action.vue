<template>
  <section id="action" class="my-10">
    <div class="container">
      <div
        class="group w-full relative inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-pink-400 p-0.5 text-sm font-medium text-gray-900"
      >
        <div
          class="py-5 lg:py-20 w-full relative rounded-md bg-white bg-gradient-to-br from-blue-400/20 to-pink-400/20 px-5 lg:px-14 flex lg:block flex-col-reverse"
        >
          <div class="lg:pt-0 lg:w-[58%] lg:max-w-[582px]">
            <h2 class="text-4xl font-bold mb-6">
              Ganhe uma conquista exclusiva
            </h2>
            <p class="text-lg font-normal text-zinc-700 mb-10">
              Os 20 primeiros
              <span class="text-zinc-950 font-semibold">creators</span> que
              escreverem um curso para a menthor terão uma conquista exclusiva
              dentro da plataforma.
            </p>
            <nuxt-link
              to="https://tally.so/r/wa2jEv"
              external
              target="_blank"
              class="w-full md:w-fit"
            >
              <MButton
                variant="secondary"
                text="Inscreva-se agora"
                icon-right="arrow-right"
                size="lg"
              />
            </nuxt-link>
          </div>
          <div
            class="mx-auto lg:w-[508px] lg:h-[508px] lg:absolute lg:-right-[40px] lg:-top-[69px] aspect-square"
          >
            <nuxt-img
              loading="lazy"
              src="/midjourney/achievements/owl.png"
              class="w-full h-full block object-contain object-center"
              alt="Menthor - Coruja do conhecimento"
              width="508"
              height="508"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
