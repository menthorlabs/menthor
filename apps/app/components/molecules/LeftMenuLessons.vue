<script setup lang="ts">
const { navigation } = defineProps<{
  navigation: navigationItem;
}>();
</script>

<template>
  <div class="mb-6">
    <h5 class="mb-2 text-xs font-semibold">{{ navigation.title }}</h5>
    <LeftMenuLessonItem
      v-for="item in navigation.children"
      :key="item._path"
      :navigation="item"
    />
  </div>
</template>
