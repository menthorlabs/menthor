<!-- eslint-disable no-unused-vars -->
<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
const {
  code = "",
  language = null,
  filename = null,
  highlights = [],
  meta = null,
} = defineProps<{
  code?: string;
  language?: string;
  filename?: string;
  highlights?: number[];
  meta?: string;
}>();

const source = ref(code);
const { copy, copied } = useClipboard({ source });
</script>

<template>
  <div class="group relative mb-4 rounded-lg border border-zinc-200">
    <div
      class="absolute right-1 top-1 text-sm font-medium transition-all group-hover:opacity-0"
      v-if="filename"
    >
      {{ filename }}
    </div>
    <MIconButton
      @click="copy(source)"
      variant="inherit"
      :icon="copied ? 'check' : 'clipboard'"
      class="absolute right-1 opacity-0 transition-all group-hover:opacity-100"
      :class="{ 'top-[6px]': !filename, 'top-1': filename }"
    />
    <div class="overflow-x-auto py-3 text-sm font-medium">
      <slot />
    </div>
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
