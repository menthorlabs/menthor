<template>
  <div>
    <div class="mb-10 flex items-center gap-6 px-8">
      <div
        class="h-[160px] w-[160px] min-w-[160px] overflow-hidden rounded shadow-lg"
      >
        <img
          src="/midjourney/characters/2.png"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="flex-1">
        <div
          class="mb-2 w-fit rounded-full bg-zinc-900 px-3 py-[2px] text-xs font-medium text-white"
        >
          + 60 mil alunos
        </div>
        <h1 class="mb-3 text-4xl font-extrabold">
          Crie um app descentralizado com Ethereum
        </h1>
        <div class="flex items-center gap-2">
          <AppIconButton />
          <AppIconButton />
          <AppIconButton />
          <AppIconButton />
        </div>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
