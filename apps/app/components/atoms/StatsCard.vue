<script setup lang="ts">
const { label = "", value = "" } = defineProps<{
  label: string;
  value: string | number;
}>();
</script>

<template>
  <div>
    <div class="mb-2 text-sm font-normal text-zinc-700">{{ label }}</div>
    <div class="text-3xl font-bold">{{ value }} <slot /></div>
  </div>
</template>
