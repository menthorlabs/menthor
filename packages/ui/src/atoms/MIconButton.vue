<script setup lang="ts">
const { icon = "home" } = defineProps<{
  icon?: string;
}>();
</script>

<template>
  <div
    class="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full bg-zinc-100/80 text-sm text-zinc-700 hover:bg-zinc-200/80"
  >
    <font-awesome-icon :icon="icon" />
  </div>
</template>
