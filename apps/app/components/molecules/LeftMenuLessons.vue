<script setup lang="ts">
import type { NavItem } from "../../../../node_modules/@nuxt/content/dist/runtime/types";
const { navigation } = defineProps<{
  navigation: NavItem;
}>();
</script>

<template>
  <div class="mb-6">
    <h5 class="mb-2 text-xs font-semibold">{{ navigation.title }}</h5>
    <LeftMenuLessonItem
      v-for="item in navigation.children"
      :key="item._id"
      :navigation="item"
    />
  </div>
</template>
