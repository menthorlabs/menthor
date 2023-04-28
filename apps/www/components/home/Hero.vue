<template>
  <section id="hero" class="relative">
    <div class="absolute left-0 top-0 flex h-full w-full justify-center">
      <div
        class="mask-radial h-full max-h-[651px] w-full max-w-[1314px] bg-pattern"
      >
        <nuxt-img
          src="/blobs/hero.svg"
          class="block h-full w-full object-cover object-center"
        />
      </div>
    </div>
    <div class="container relative pt-24">
      <h1
        class="mx-auto mb-6 max-w-[844px] text-center text-5xl font-extrabold"
      >
        Aprenda a programar e construa sua própria startup
      </h1>
      <p class="mx-auto mb-10 max-w-[844px] text-center text-lg text-zinc-700">
        A Menthor é uma plataforma <b class="font-bold">gratuita</b> de ensino
        de programação web para pessoas que estão buscando o primeiro emprego na
        área ou que querem construir seu próprio negócio.
      </p>
      <div class="mb-10 flex items-center justify-center">
        <MButton text="Acesso antecipado" icon-left="rocket" size="lg" />
      </div>
      <div
        class="mx-auto mb-10 w-fit rounded-full bg-zinc-900 px-4 py-1 text-xs font-semibold text-white"
      >
        ✨ Mais de 5000 alunos já solicitaram o acesso antecipado.
      </div>
      <h2
        class="mb-3 text-center text-xs font-semibold uppercase text-zinc-500"
      >
        Apoiadores
      </h2>
      <div class="mb-20 flex flex-wrap items-center justify-center gap-4">
        <nuxt-img
          class="h-[28px] w-auto"
          src="/brand/menthor-logo-dark.svg"
          height="28"
          width="155"
        />
        <nuxt-img
          class="h-[28px] w-auto"
          src="/brand/menthor-logo-dark.svg"
          height="28"
          width="155"
        />
        <nuxt-img
          class="h-[28px] w-auto"
          src="/brand/menthor-logo-dark.svg"
          height="28"
          width="155"
        />
      </div>
    </div>
    <div class="flex justify-center gap-6 overflow-hidden">
      <div
        class="flex h-[349px] w-[205px] min-w-[205px] flex-col even:justify-end"
        v-for="i in 10"
        :key="i"
      >
        <div class="relative h-[288px] w-full overflow-hidden rounded-lg">
          <nuxt-img
            src="/midjourney/1.jpg"
            width="510"
            height="576"
            class="absolute left-0 top-0 h-full w-full object-cover object-center"
          />
          <div
            class="absolute bottom-0 left-0 h-[95px] w-full bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0%,_#000000_100%)]"
          ></div>
          <div class="relative flex h-full flex-col justify-end p-4">
            <h2 class="m-0 text-center text-sm font-bold text-white">
              Quero criar uma criptomoeda
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
