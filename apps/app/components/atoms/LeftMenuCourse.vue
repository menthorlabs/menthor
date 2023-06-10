<script setup lang="ts">
const {
  img = "/midjourney/characters/1.png",
  name = "Vue 3",
  totalLessons = 28,
  finishedLessons = 10,
  timeToFinish = 3600,
} = defineProps<{
  img?: string;
  name?: string;
  totalLessons?: number;
  finishedLessons?: number;
  timeToFinish?: number;
}>();
</script>

<template>
  <div
    class="flex cursor-pointer items-center gap-3 rounded p-[6px] pr-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
  >
    <div class="h-[48px] min-w-[48px] overflow-hidden rounded">
      <img
        :src="img"
        :alt="name"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <div class="flex-1">
      <div class="mb-1 min-w-0 truncate overflow-ellipsis">{{ name }}</div>
      <div
        class="mb-[6px] h-[4px] w-full overflow-hidden rounded-full bg-zinc-200"
      >
        <div class="w-[30%] bg-emerald-500"></div>
      </div>
      <div class="flex items-center text-[12px] leading-[12px] text-zinc-500">
        <span class="flex-1">{{ finishedLessons }}/{{ totalLessons }}</span>
        <span>{{ timeToFinish }}</span>
      </div>
    </div>
  </div>
</template>
