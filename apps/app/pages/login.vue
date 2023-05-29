<script setup>
import Clerk from "@clerk/clerk-js";
const publishableKey =
  "pk_test_d2lubmluZy1zaGFkLTMyLmNsZXJrLmFjY291bnRzLmRldiQ";

const clerk = ref(null);

onMounted(async () => {
  clerk.value = new Clerk(publishableKey);
  await clerk.value.load({
    // Set load options here...
  });

  console.log(clerk.value);
});
</script>

<template>
  <MButton variant="primary" text="Open Clerk" @click="clerk.openSignUp()" />
</template>
