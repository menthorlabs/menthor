<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
useSeoMeta({
  title: "Entre agora",
});

const router = useRouter();
const signInStore = useSignInStore();
const email = ref(null);
const sessionStore = useSessionStore();
const loading = ref(false);
const toast: { error: Function } | undefined = inject("toast");
const route = useRoute();

onMounted(async () => {
  sessionStore.cleared = false;

  if (route.query?.error) {
    toast?.error(route.query?.error);
  }
});

async function sendEmail() {
  loading.value = true;

  try {
    await signInStore.forgotPassword({
      emailAddress: email.value,
    });
    router.push("/forgot-password/code");
  } catch (e) {
    toast?.error("Essa conta não existe.");
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <h1 class="mb-6 text-center text-2xl font-bold">
      Insira o email da sua conta
    </h1>
    <MForm @submit="sendEmail()">
      <MTextField
        class="mb-4"
        label="Email"
        v-model="email"
        required
        :rules="['email']"
        type="email"
      />
      <MButton
        variant="secondary"
        class="mb-4 w-full"
        text="Recuperar senha"
        icon-right="arrow-right"
        type="submit"
        :loading="loading"
      />
    </MForm>

    <div class="text-center text-sm text-zinc-700">
      Lembrou a senha?
      <nuxt-link to="/sign-in" class="font-semibold text-zinc-950 underline"
        >Voltar para login</nuxt-link
      >
    </div>
  </div>
</template>

<style></style>
