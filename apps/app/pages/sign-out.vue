<script setup lang="ts">
const router = useRouter();
const sessionStore = useSessionStore();
await sessionStore.signOut();
router.push("/sign-in");
</script>

<template>
  <div class="flex justify-center pt-10 text-sm text-gray-500">
    Signing out...
  </div>
</template>
