<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div
    class="group flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-zinc-50 cursor-pointer"
  >
    <div
      class="w-[44px] h-[44px] rounded bg-zinc-100 group-hover:text-zinc-950 flex items-center justify-center text-lg text-zinc-700"
    >
      <font-awesome-icon :icon="icon" />
    </div>
    <div class="flex-1">
      <h3 class="text-sm font-medium text-zinc-950">{{ title }}</h3>
      <p class="text-sm text-zinc-700 group-hover:text-zinc-950">
        {{ description }}
      </p>
    </div>
  </div>
</template>
