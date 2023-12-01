<script setup lang="ts">
import type { NavItem } from "../../../../node_modules/@nuxt/content/dist/runtime/types";
defineProps<{
  nav?: NavItem;
}>();
</script>

<template>
  <nuxt-link
    class="flex items-center gap-2 group"
    :class="{ 'is-active': $route.path.includes(nav._path) }"
    v-if="nav"
    :to="nav._path"
  >
    <div
      class="w-[24px] h-[24px] flex items-center rounded bg-zinc-100 justify-center text-xs text-zinc-500 group-[.is-active]:bg-zinc-950 group-[.is-active]:text-white group-hover:text-zinc-700"
    >
      <font-awesome-icon :icon="nav.icon" />
    </div>
    <div
      class="text-sm text-zinc-500 group-hover:text-zinc-700 font-medium group-[.is-active]:text-zinc-950"
    >
      {{ nav.title }}
    </div>
  </nuxt-link>
</template>
