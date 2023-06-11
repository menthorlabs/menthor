<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <div
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
      <LeftMenuDefault v-if="!String(route.name).includes('courses')" />
      <LeftMenuLessons />
    </div>
    <div class="relative flex-1 overflow-y-auto">
      <TopBar />
      <div class="relative">
        <slot />
      </div>
    </div>
  </div>
</template>
