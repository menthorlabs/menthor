<script setup lang="ts">
const {
  icon,
  text,
  size = "base",
} = defineProps<{
  icon?: string;
  text?: string;
  size?: "sm" | "base";
}>();

const sizes: Record<typeof size, string> = {
  sm: "text-sm leading-[12px] min-w-[20px] h-5 px-1",
  base: "h-6 min-w-[24px] px-[6px] text-sm",
};
</script>

<template>
  <div
    class="flex items-center justify-center rounded border border-zinc-200 bg-zinc-50 text-zinc-500"
    :class="[sizes[size]]"
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span class="leading-[15px]" v-if="text">{{ text }}</span>
  </div>
</template>
