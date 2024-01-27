<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
const { fileUrl = "" } = defineProps<{
  fileUrl: string;
}>();

const source = ref(fileUrl);
const { copy, copied } = useClipboard({ source });

defineEmits(["remove"]);
</script>

<template>
  <div
    v-if="fileUrl === 'loading'"
    class="flex items-center justify-center w-full aspect-video bg-zinc-100 animate-pulse"
  >
    <svg
      class="w-10 h-10 text-zinc-200"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 18"
    >
      <path
        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
      />
    </svg>
  </div>
  <div v-else class="relative group">
    <div
      class="absolute top-2 right-2 z-20 hidden group-hover:flex items-center gap-1"
    >
      <nuxt-link external target="_blank" :to="fileUrl">
        <MIconButton icon="external-link-alt" class="!text-white" />
      </nuxt-link>
      <MIconButton icon="times" class="!text-white" @click="$emit('remove')" />
    </div>

    <div
      class="absolute z-10 top-0 left-0 w-full h-full items-center justify-center bg-black/50 cursor-pointer hidden group-hover:flex"
      @click="copy()"
    >
      <span class="font-semibold text-sm text-white">
        {{ copied ? "Copiado!" : "Copiar url" }}
      </span>
    </div>
    <div class="aspect-video w-full overflow-hidden bg-zinc-100">
      <nuxt-img
        :src="fileUrl"
        :quality="85"
        format="webp"
        width="250"
        height="140"
        alt="Roadmap"
        class="h-full w-full object-cover object-center transition-all group-hover:scale-110"
      />
    </div>
  </div>
</template>
