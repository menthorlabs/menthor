<script setup lang="ts">
const sessionStore = useSessionStore();
onMounted(async () => {
  await sessionStore.signOut();
  navigateTo("/sign-in", {
    external: true,
  });
});
</script>

<template>
  <div class="flex justify-center pt-10 text-sm text-gray-500">
    Signing out...
  </div>
</template>
