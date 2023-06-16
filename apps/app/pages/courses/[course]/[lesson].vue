<script setup lang="ts">
const { lesson } = defineProps<{
  lesson: {
    content: string;
    encoding: string;
    name: string;
    path: string;
    type: string;
  };
}>();
</script>

<template>
  <div class="mx-auto max-w-[816px] px-8">
    <!-- <ContentRenderer id="nuxt_content" :value="lesson" /> -->
    {{ lesson.content }}
  </div>
</template>
