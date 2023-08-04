<script setup lang="ts">
const userStore = useUserStore();

onMounted(() => {
  userStore.setUser();
});
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <DefaultAside />
    <div class="relative flex-1 overflow-y-auto">
      <TopBar />
      <slot />
    </div>
  </div>
</template>
