<script setup lang="ts">
defineProps<{
  title: string;
  active?: boolean;
  chevron?: boolean;
}>();
</script>

<template>
  <div
    class="group md:h-[32px] p-4 text-base md:py-[6px] md:px-4 font-medium md:text-sm text-zinc-700 flex justify-center gap-1 items-center md:rounded-full hover:bg-zinc-100 hover:text-zinc-950 cursor-pointer"
    :class="{ '!text-zinc-950 is-active': active }"
  >
    <span>{{ title }}</span>
    <font-awesome-icon
      v-if="chevron"
      icon="chevron-down"
      class="group-[.is-active]:rotate-180 text-xs"
    />
  </div>
</template>
