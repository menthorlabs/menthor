<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div
    class="relative min-w-[80%] overflow-hidden rounded-lg border border-solid border-zinc-200 bg-white px-6 pb-8 pt-20 first:ml-4 last:mr-4 md:min-w-0 md:first:ml-0 md:last:mr-0"
  >
    <div
      class="pointer-events-none absolute -right-[836px] -top-[448px] flex h-[651px] w-[1314px] justify-center"
    >
      <div class="mask-radial h-full w-full bg-pattern" />
    </div>
    <div class="relative">
      <div
        class="mb-4 flex h-[32px] w-[32px] items-center justify-center rounded-full border border-solid border-zinc-300 text-sm text-zinc-700"
      >
        <font-awesome-icon :icon="icon" />
      </div>
      <h3 class="text-lg font-medium">{{ title }}</h3>
      <p class="text-base font-normal text-zinc-600">
        {{ description }}
      </p>
    </div>
  </div>
</template>
