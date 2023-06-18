<script setup lang="ts">
const {
  title = "",
  description = "",
  image = "",
  disabled = false,
} = defineProps<{
  title: string;
  description: string;
  image: string;
  disabled?: boolean;
}>();
</script>

<template>
  <div
    class="group rounded-md p-4 text-sm transition-all"
    :class="{ 'cursor-pointer hover:bg-zinc-100/80': !disabled }"
  >
    <div class="mb-3 aspect-square w-full rounded">
      <img
        :src="image"
        alt="Achievement"
        class="h-full w-full object-contain object-center"
        :class="{
          grayscale: disabled,
          'transition-all group-hover:scale-110': !disabled,
        }"
      />
    </div>
    <h2 class="mb-1 font-medium" :class="{ 'text-zinc-500': disabled }">
      {{ title }}
    </h2>
    <p
      class="line-clamp-2 min-w-0 text-zinc-700"
      :class="{ '!text-zinc-400': disabled }"
    >
      {{ description }}
    </p>
  </div>
</template>
