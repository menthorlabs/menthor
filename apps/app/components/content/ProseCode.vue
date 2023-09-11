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

const box: Ref<HTMLElement | null> = ref(null);

const hasExpand = ref(true);
const expanded = ref(false);

const source = ref(code);
const { copy, copied } = useClipboard({ source });

onMounted(() => {
  if (box.value && box.value?.offsetHeight < 400) {
    hasExpand.value = false;
    expanded.value = true;
  }
});
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
      :icon="copied ? 'check' : 'clipboard'"
      class="absolute right-1 opacity-0 transition-all group-hover:opacity-100"
      :class="{ 'top-[6px]': !filename, 'top-1': filename }"
    />
    <div
      class="overflow-x-auto overflow-y-hidden py-3 text-sm font-medium [&>pre]:w-fit [&>pre]:min-w-full"
      ref="box"
      :class="{ 'max-h-[400px]': !expanded, 'max-h-fit': expanded }"
    >
      <slot />
    </div>
    <div
      v-if="hasExpand"
      @click="
        hasExpand = false;
        expanded = true;
      "
      class="absolute bottom-0 left-0 w-full h-[70px] rounded-bl-lg rounded-br-lg bg-gradient-to-t from-white flex items-center justify-center text-sm text-gray-500 cursor-pointer hover:text-gray-950 transition"
    >
      Clique aqui para expandir
    </div>
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
