<script setup>
const route = useRoute();

const { data: navigation } = await useAsyncData(
  "navigation",
  () => fetchContentNavigation(`/${route.params.slug[0]}`),
  {
    watch: [route],
  }
);
</script>

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
          Ctrl <span class="text-zinc-950">K</span>
        </span>
      </LeftMenuItem>
    </div>
    <div class="flex-1 overflow-y-auto px-3 py-4" v-if="navigation">
      <LeftMenuLessons
        v-for="item in navigation[0].children"
        :key="item._path"
        :navigation="item"
      />
    </div>
  </aside>
</template>
