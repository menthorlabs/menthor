<template>
  <div class="w-full flex-1 p-3">
    <div class="text-zinc-700 font-medium pl-4 py-[10px] text-sm">
      Criação de conteúdo
    </div>
    <nuxt-link
      to="/creators/images"
      class="group"
      exact-active-class="is-active"
    >
      <LeftMenuItem
        icon="image"
        text="Imagens"
        class="group-[.is-active]:text-zinc-950 group-[.is-active]:bg-zinc-100"
      />
    </nuxt-link>
  </div>
</template>
