<script setup lang="ts">
const { icon = "", name = "" } = defineProps<{
  icon: string;
  name: string;
}>();
</script>

<template>
  <div
    class="flex cursor-pointer items-center gap-3 px-4 py-2 text-sm hover:bg-zinc-100"
  >
    <font-awesome-icon :icon="icon" />
    <span>{{ name }}</span>
  </div>
</template>
