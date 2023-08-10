<script setup lang="ts">
type Variant = "primary" | "secondary" | "outline" | "inherit";
type Status = "success" | "warning" | "error" | "default";

const {
  variant = "outline",
  text = "Badge",
  status,
} = defineProps<{
  variant?: Variant;
  text: string;
  status?: Status | null;
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

const statusColors: Record<Status, string> = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
  default: "bg-zinc-300",
};
</script>

<template>
  <div
    class="px-2.5 py-0.5 text-xs font-semibold rounded-full flex items-center gap-2"
    :class="variants[variant]"
  >
    <div
      v-if="status"
      class="h-[6px] w-[6px] rounded-full"
      :class="statusColors[status]"
    ></div>
    <span>{{ text }}</span>
  </div>
</template>
