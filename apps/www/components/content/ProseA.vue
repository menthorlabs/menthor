<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
});
</script>

<template>
  <NuxtLink
    :href="href"
    target="_blank"
    external
    class="font-bold border-b border-pink-500 hover:border-b-[2px]"
  >
    <slot />
  </NuxtLink>
</template>
