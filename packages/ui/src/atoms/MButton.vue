<script setup lang="ts">
type Variant = "primary" | "secondary" | "outline" | "inherit";
type Size = "sm" | "base" | "lg";

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

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white border border-solid border-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:ring-blue-300",
  secondary:
    "bg-zinc-900 text-white border border-solid border-zinc-900 hover:bg-zinc-800 hover:border-zinc-800 focus:ring-zinc-300",
  outline:
    "bg-white text-zinc-900 border border-solid border-zinc-300 hover:bg-zinc-100 focus:ring-zinc-300",
  inherit:
    "bg-white text-zinc-700 border border-solid border-white hover:bg-zinc-100 focus:ring-zinc-300",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-[8px] text-sm leading-[19px]",
  base: "px-5 py-[9.5px] text-sm leading-[19px]",
  lg: "px-5 py-[13.5px] text-base leading-[23px]",
};
</script>

<template>
  <button
    type="button"
    class="flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium focus:ring-4"
    :class="[variants[variant as Variant], sizes[size as Size]]"
  >
    <MSpinner class="h-4 w-4" v-if="loading && !iconRight" />
    <font-awesome-icon
      v-else-if="iconLeft"
      class="text-base"
      :icon="iconLeft"
    />
    <span v-if="text"> {{ text }}</span>
    <MSpinner class="h-4 w-4" v-if="loading && iconRight" />
    <font-awesome-icon
      v-else-if="iconRight"
      class="text-base"
      :icon="iconRight"
    />
  </button>
</template>
