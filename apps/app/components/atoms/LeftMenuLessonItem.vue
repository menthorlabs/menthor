<script setup lang="ts">
const { navigation = { title: "" } } = defineProps<{
  navigation: navigationItem;
}>();

const done = ref(false);

if (navigation.title === "Antes de Começar") {
  done.value = true;
}
</script>

<template>
  <nuxt-link
    :to="navigation._path"
    class="flex h-[32px] items-center gap-2 rounded-tr border-l border-zinc-300 px-3 py-1 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"
    :class="{ '!border-l-2 !border-green-600 !text-zinc-950': done }"
    active-class="bg-zinc-100 text-zinc-950 border-zinc-900"
    :title="navigation.title"
  >
    <span>{{ navigation.title }}</span>
  </nuxt-link>
</template>
