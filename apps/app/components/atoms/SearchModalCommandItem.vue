<script setup lang="ts">
const { icon = "terminal", name = "Command action" } = defineProps<{
  icon?: string;
  name?: string;
}>();
</script>

<template>
  <div
    class="group flex min-h-[52px] cursor-pointer items-center gap-3 border-l-2 py-1 pl-[22px] pr-6 hover:border-zinc-700 hover:bg-zinc-100"
  >
    <div
      class="flex h-[34px] w-[34px] items-center justify-center rounded border border-zinc-200 bg-zinc-50"
    >
      <font-awesome-icon
        :icon="icon"
        class="text-base text-zinc-500 group-hover:text-zinc-950"
      />
    </div>
    <div class="flex w-full items-center text-sm font-normal">
      <div class="flex-1">
        {{ name }}
      </div>
      <div class="flex items-center gap-2">
        <slot />
      </div>
    </div>
  </div>
</template>
