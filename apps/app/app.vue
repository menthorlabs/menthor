<script setup lang="ts">
useShortcuts();
</script>

<template>
  <NuxtLayout class="z-0 text-zinc-950">
    <NuxtPage />
  </NuxtLayout>
  <SearchModal />
  <div id="modals"></div>
  <MToast v-model="$toastItems" class="z-20" />
</template>
