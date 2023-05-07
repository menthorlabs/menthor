<script setup>
definePageMeta({
  title: "Acesso Antecipado",
});
</script>

<template>
  <DelayHydration>
    <div class="fixed left-0 top-0 z-10 h-full w-full">
      <div class="container flex h-full w-full justify-center">
        <nuxt-link
          to="/"
          class="absolute left-0 top-0 h-full w-full cursor-default bg-zinc-300/40 backdrop-blur-sm"
        >
        </nuxt-link>

        <div
          class="relative my-auto h-fit max-w-[480px] rounded-lg border border-solid border-zinc-300 bg-white p-6 shadow-2xl sm:p-10"
        >
          <nuxt-img
            src="/brand/menthor-icon-dark.svg"
            alt="Menthor icon"
            width="114"
            height="107"
            class="mx-auto mb-10 block h-auto w-full max-w-[114px]"
          />
          <h2 class="mb-6 text-center text-2xl font-bold">Solicitar acesso</h2>
          <p class="mb-8 text-center text-zinc-700">
            Mais de 5000 alunos já solicitaram acesso à plataforma, deixe seu
            e-mail e entre para a lista.
          </p>
          <MTextField
            class="mb-6"
            id="email"
            label="E-mail"
            placeholder="harry.potter@hogwarts.com"
          />
          <MButton
            class="w-full"
            variant="primary"
            text="Solicitar acesso"
            icon-right="arrow-right"
          />
        </div>
      </div>
    </div>
  </DelayHydration>
</template>
