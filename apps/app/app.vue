<script setup lang="ts">
useSearchShortcuts();
</script>

<template>
  <NuxtLayout class="z-0 text-zinc-950 bg-white">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
  <SearchModal />
  <MToast v-model="$toastItems" class="z-20" />
</template>
