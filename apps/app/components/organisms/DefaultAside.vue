<template>
  <aside
    class="flex w-[270px] min-w-[270px] flex-col border-r border-solid border-zinc-200"
  >
    <div class="w-full border-b border-solid border-zinc-200 p-3">
      <nuxt-link to="/">
        <LeftMenuItem icon="home" text="Início" />
      </nuxt-link>
      <LeftMenuItem icon="magnifying-glass" text="Buscar">
        <span class="text-sm font-semibold text-zinc-500">
          Ctrl <span class="text-zinc-900">K</span>
        </span>
      </LeftMenuItem>
    </div>
    <LeftMenuDefault />
  </aside>
</template>
