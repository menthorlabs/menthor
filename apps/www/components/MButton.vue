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

interface variant {
  primary: string;
  secondary: string;
  outline: string;
}

const variants: variant = {
  primary:
    "bg-blue-600 text-white border-none hover:bg-blue-700 focus:ring-blue-300",
  secondary:
    "bg-zinc-900 text-white border-none hover:bg-zinc-800 focus:ring-zinc-300",
  outline:
    "bg-white text-zinc-950 border border-solid border-zinc-300 hover:bg-zinc-100 focus:ring-zinc-300",
};

interface size {
  sm: string;
  base: string;
  lg: string;
}

const sizes: size = {
  sm: "px-3 py-[8.5px] text-sm",
  base: "px-5 py-2.5 text-sm",
  lg: "px-5 py-[14px] text-base",
};
</script>

<template>
  <button
    type="button"
    class="flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium focus:ring-4"
    :class="[variants[variant as keyof variant], sizes[size as keyof size]]"
  >
    <font-awesome-icon v-if="iconLeft" class="text-base" :icon="iconLeft" />
    <span v-if="text"> {{ text }}</span>
    <font-awesome-icon v-if="iconRight" class="text-base" :icon="iconRight" />
  </button>
</template>
