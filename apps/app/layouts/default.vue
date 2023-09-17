<script setup lang="ts">
const userStore = useUserStore();
const sessionStore = useSessionStore();
const defaultAsideStore = useDefaultAsideStore();

const content = ref();

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  content.value.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

onMounted(() => {
  userStore.setUser();
  sessionStore.checkSessionStatus();
});
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <DefaultAside />
    <div
      v-show="defaultAsideStore.opened"
      class="absolute md:hidden z-[19] left-0 top-0 h-full w-full cursor-default bg-zinc-300/40 backdrop-blur-sm blur-performance"
      @click="defaultAsideStore.opened = false"
    />
    <div ref="content" class="relative flex-1 overflow-y-auto">
      <TopBar />
      <slot />
    </div>
  </div>
</template>
