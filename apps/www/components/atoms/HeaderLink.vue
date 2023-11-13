<script setup lang="ts">
defineProps<{
  title: string;
  active?: boolean;
  chevron?: boolean;
}>();
</script>

<template>
  <div
    class="group h-[32px] py-[6px] px-4 font-medium text-sm text-zinc-700 flex justify-center gap-1 items-center rounded-full hover:bg-zinc-100 hover:text-zinc-950 cursor-pointer"
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
