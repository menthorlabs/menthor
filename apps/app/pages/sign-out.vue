<script setup lang="ts">
definePageMeta({
  ignoreMiddleware: true,
});

const sessionStore = useSessionStore();
const router = useRouter();

onMounted(() => {
  sessionStore.signOut();
  router.push("/sign-in");
});
</script>

<template>
  <div class="flex justify-center pt-10 text-sm text-gray-500">
    Signing out...
  </div>
</template>
