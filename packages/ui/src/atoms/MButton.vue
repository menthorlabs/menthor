<script setup lang="ts">
defineProps({
  text: String,
  loading: Boolean,
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

const variants: {
  primary: string;
  secondary: string;
  outline: string;
  inherit: string;
} = {
  primary:
    "bg-blue-600 text-white border-none hover:bg-blue-700 focus:ring-blue-300",
  secondary:
    "bg-zinc-900 text-white border-none hover:bg-zinc-800 focus:ring-zinc-300",
  outline:
    "bg-white text-zinc-900 border border-solid border-zinc-300 hover:bg-zinc-100 focus:ring-zinc-300",
  inherit:
    "bg-white text-zinc-700 border border-solid border-white hover:bg-zinc-100 focus:ring-zinc-300",
};

const sizes: { sm: string; base: string; lg: string } = {
  sm: "px-3 py-[8.5px] text-sm",
  base: "px-5 py-2.5 text-sm",
  lg: "px-5 py-[14px] text-base",
};
</script>

<template>
  <button
    type="button"
    class="flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium focus:ring-4"
    :class="[variants[variant], sizes[size]]"
  >
    <MSpinner class="h-4 w-4 border-[2px]" v-if="loading && !iconRight" />
    <font-awesome-icon
      v-else-if="iconLeft"
      class="text-base"
      :icon="iconLeft"
    />
    <span v-if="text"> {{ text }}</span>
    <MSpinner class="h-4 w-4 border-[2px]" v-if="loading && iconRight" />
    <font-awesome-icon
      v-else-if="iconRight"
      class="text-base"
      :icon="iconRight"
    />
  </button>
</template>
