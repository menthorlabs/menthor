<script setup lang="ts">
const userStore = useUserStore();
const sessionStore = useSessionStore();

onMounted(() => {
  userStore.setUser();
  sessionStore.checkSessionStatus();
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
