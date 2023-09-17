<script setup lang="ts">
const {
  title = "",
  description = "",
  image = "",
} = defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>

<template>
  <div
    class="group cursor-pointer rounded-md sm:p-4 text-sm transition-all hover:bg-zinc-100/80"
  >
    <div
      class="mb-3 aspect-square w-full overflow-hidden rounded border border-solid border-zinc-300"
    >
      <nuxt-img
        :src="image"
        :quality="85"
        format="webp"
        width="364"
        height="364"
        alt="Roadmap"
        class="h-full w-full object-cover object-center transition-all group-hover:scale-110"
      />
    </div>
    <h2 class="mb-1 font-medium">{{ title }}</h2>
    <p class="line-clamp-2 min-w-0 text-zinc-700">
      {{ description }}
    </p>
  </div>
</template>
