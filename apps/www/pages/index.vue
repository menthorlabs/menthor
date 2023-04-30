<template>
  <HomeHero />
  <HomeHowItWorks />
  <MDiv />
  <HomeWhoIsItFor />
  <MDiv />
  <HomeWhyUs />
  <HomeAreYouReady />
  <footer class="border-t border-solid border-zinc-200 py-10">
    <nuxt-img
      class="mx-auto mb-6 block h-[28px] w-auto"
      src="/brand/menthor-logo-dark.svg"
      height="28"
      width="155"
    />
    <div class="mb-10 text-center text-sm font-normal text-zinc-500">
      © Copyright {{ new Date().getFullYear() }} Menthor. Todos os direitos
      reservados.
    </div>
    <div class="flex items-center justify-center gap-8">
      <a
        href="#"
        target="_blank"
        rel="noopener"
        class="relative text-sm font-normal before:absolute before:-right-[16px] before:top-0 before:h-full before:w-[1px] before:bg-zinc-200 hover:underline"
      >
        Políticas de Privacidade
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener"
        class="text-sm font-normal hover:underline"
      >
        Histórico de Atualizações
      </a>
    </div>
  </footer>
</template>
