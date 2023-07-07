<script setup lang="ts">
const { icon, text } = defineProps<{
  icon?: string;
  text?: string;
}>();
</script>

<template>
  <div
    class="flex h-6 min-w-[24px] items-center justify-center rounded border border-zinc-200 bg-zinc-50 px-[6px] text-sm text-zinc-500"
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span class="leading-[15px]" v-if="text">{{ text }}</span>
  </div>
</template>
