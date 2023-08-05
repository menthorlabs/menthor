<script setup lang="ts">
type Variant = "primary" | "secondary" | "outline" | "inherit";

const { variant = "outline", text = "Badge" } = defineProps<{
  variant?: Variant;
  text: string;
}>();

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
</script>

<template>
  <div
    class="px-2.5 py-0.5 text-xs font-semibold rounded-full"
    :class="variants[variant]"
  >
    {{ text }}
  </div>
</template>
