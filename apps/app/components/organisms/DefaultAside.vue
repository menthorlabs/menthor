<script setup>
const searchModalStore = useSearchModalStore();
</script>

<template>
  <aside
    class="flex w-[270px] min-w-[270px] flex-col border-r border-solid border-zinc-200"
  >
    <div class="w-full border-b border-solid border-zinc-200 p-3">
      <nuxt-link to="/">
        <LeftMenuItem icon="home" text="Início" />
      </nuxt-link>
      <LeftMenuItem
        @click="searchModalStore.opened = true"
        icon="magnifying-glass"
        text="Buscar"
      >
        <div class="flex items-center gap-1">
          <Command text="Ctrl" size="sm" /> <Command text="K" size="sm" />
        </div>
      </LeftMenuItem>
    </div>
    <LeftMenuDefault />
  </aside>
</template>
