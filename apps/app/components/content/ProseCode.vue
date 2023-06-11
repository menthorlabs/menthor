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
  <div class="relative rounded-lg border border-zinc-200">
    <div class="flex h-[40px] items-end bg-zinc-100 pl-3 pt-1" v-if="filename">
      <div
        class="flex h-[36px] items-center rounded-t bg-white px-4 py-1 text-sm font-medium"
      >
        {{ filename }}
      </div>
    </div>
    <MIconButton
      @click="copy(source)"
      variant="inherit"
      :icon="copied ? 'check' : 'clipboard'"
      class="absolute right-3"
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
