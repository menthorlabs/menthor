<template>
  <div class="fixed left-0 top-0 z-10 flex h-full w-full justify-center">
    <div
      class="absolute left-0 top-0 h-full w-full bg-zinc-300/40 backdrop-blur-sm"
    ></div>
    <div
      class="relative my-auto h-fit max-w-[480px] rounded-lg border border-solid border-zinc-300 bg-white p-10 shadow-2xl"
    >
      <nuxt-img
        src="/brand/menthor-icon-dark.svg"
        alt="Menthor Icon"
        width="114"
        height="107"
        class="mx-auto mb-10 block h-auto w-full max-w-[114px]"
      />
      <h2 class="mb-6 text-center text-2xl font-bold">Solicitar acesso</h2>
      <p class="mb-8 text-center text-zinc-700">
        Mais de 5000 alunos já solicitaram acesso à plataforma, quer ser o
        próximo da lista?
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
</template>
