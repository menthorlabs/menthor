<script setup lang="ts">
import type { NavItem } from "../../../../node_modules/@nuxt/content/dist/runtime/types";
defineProps<{
  nav?: NavItem;
}>();
</script>

<template>
  <nuxt-link
    v-if="nav"
    class="flex items-center gap-2 text-zinc-500 py-[6px] hover:text-zinc-700 transition-colors"
    active-class="!text-zinc-950 font-medium"
    :to="nav._path"
  >
    <div class="w-[18px] h-[18px] flex items-center justify-center text-sm">
      <font-awesome-icon :icon="nav.icon" />
    </div>
    <div class="text-sm">{{ nav.title }}</div>
  </nuxt-link>
</template>
