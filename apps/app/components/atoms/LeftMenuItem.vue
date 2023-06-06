<script setup lang="ts">
const { icon = "home", text = "Início" } = defineProps<{
  icon: string;
  text: string;
}>();
</script>

<template>
  <div
    class="flex h-[40px] cursor-pointer items-center gap-4 rounded px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
  >
    <div class="flex h-full w-[20px] items-center justify-center">
      <font-awesome-icon :icon="icon" class="text-lg" />
    </div>
    <div class="flex-1">{{ text }}</div>
    <slot />
  </div>
</template>
