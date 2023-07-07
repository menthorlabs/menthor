<script setup lang="ts">
const {
  img = "/midjourney/characters/1.png",
  name = "Course name",
  description = "Course description",
} = defineProps<{
  img?: string;
  name?: string;
  description?: string;
}>();
</script>

<template>
  <div
    class="group flex min-h-[52px] cursor-pointer items-center gap-3 border-l-2 px-[22px] py-1 hover:border-zinc-700 hover:bg-zinc-100"
  >
    <div class="h-[34px] w-[34px] overflow-hidden rounded">
      <img
        :src="img"
        :alt="name"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <div class="text-sm font-normal">
      {{ name }}:
      <span class="text-zinc-700 group-hover:text-zinc-950">
        {{ description }}
      </span>
    </div>
  </div>
</template>
