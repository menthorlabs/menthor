<script setup lang="ts">
type Variant = "glass" | "inherit";

const { icon = "home", variant = "inherit" } = defineProps<{
  icon?: string;
  variant?: string;
}>();

const variants: Record<Variant, { style: string }> = {
  glass: {
    style:
      "bg-zinc-100/80 text-zinc-700 hover:bg-zinc-200/80 hover:text-zinc-800",
  },
  inherit: {
    style: "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200/80",
  },
};
</script>

<template>
  <div
    class="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full text-sm"
    :class="[variants[variant as Variant].style]"
  >
    <font-awesome-icon :icon="icon" />
  </div>
</template>
