<script setup lang="ts">
import type { NavItem } from "../../../../node_modules/@nuxt/content/dist/runtime/types";
const { navigation } = defineProps<{
  navigation: NavItem;
}>();
const defaultAsideStore = useDefaultAsideStore();
</script>

<template>
  <div class="mb-6">
    <h5 class="mb-2 text-xs font-semibold">{{ navigation.title }}</h5>
    <nuxt-link
      v-for="item in navigation.children"
      :key="item._id"
      :title="item.title"
      :to="item._path"
      class="group"
      exact-active-class="is-active"
      @click="defaultAsideStore.opened = false"
    >
      <LeftMenuLessonItem :navigation="item" />
    </nuxt-link>
  </div>
</template>
