<script setup lang="ts">
defineProps({
  text: String,
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "base",
  },
  iconLeft: [String, Array],
  iconRight: [String, Array],
});

const variants = {
  primary:
    "bg-blue-600 text-white border-none hover:bg-blue-700 focus:ring-blue-300",
  secondary:
    "bg-zinc-900 text-white border-none hover:bg-zinc-800 focus:ring-zinc-300",
  outline:
    "bg-white text-zinc-950 border border-solid border-zinc-300 hover:bg-zinc-100 focus:ring-zinc-300",
};

const sizes = {
  sm: "px-3 py-[8.5px] text-sm",
  base: "px-5 py-2.5 text-sm",
  lg: "px-5 py-[14px] text-base",
};
</script>

<template>
  <button
    type="button"
    class="flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium focus:ring-4"
    :class="[variants[variant as keyof typeof variants], sizes[size as keyof typeof sizes]]"
  >
    <font-awesome-icon v-if="iconLeft" class="text-lg" :icon="iconLeft" />
    <span v-if="text"> {{ text }}</span>
    <font-awesome-icon v-if="iconRight" class="text-lg" :icon="iconRight" />
  </button>
</template>
