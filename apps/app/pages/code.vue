<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
useSeoMeta({
  title: "Insira o código que enviamos para seu email",
});
const userStore = useUserStore();
const signUpStore = useSignUpStore();
const sessionStore = useSessionStore();
const loading = ref(false);
const router = useRouter();
const toast: { error: Function } | undefined = inject("toast");

let code: string[] = Array(6);

const { isNumber, handleInput, handleDelete, onPaste } = useCodeInput(code);

async function sendCode() {
  loading.value = true;

  try {
    await signUpStore.attemptEmailAddressVerification({
      code: code.join(""),
    });
    await sessionStore.refreshSession();
    userStore.setUser();
    router.push("/");
  } catch (e) {
    toast?.error("Código incorreto ou expirado.");
  } finally {
    loading.value = false;
  }
}

//https://winning-shad-32.accounts.dev/sign-up
</script>

<template>
  <div>
    <h1 class="mb-2 text-center text-2xl font-bold">Código de verificação</h1>
    <p class="mb-6 text-center text-zinc-700">
      Insira o código que enviamos para seu email.
    </p>
    <form class="flex items-center gap-2">
      <input
        v-for="(n, index) in code"
        class="h-[80px] w-full flex-1 rounded border border-zinc-300 text-center text-4xl font-bold outline-none [appearance:textfield] focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-zinc-300 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        :key="index"
        type="number"
        pattern="\d*"
        :id="'input_' + index"
        maxlength="1"
        v-model="code[index]"
        @input="handleInput"
        @keypress="isNumber"
        @keydown.delete="handleDelete"
        @paste="onPaste"
      />
    </form>
    <MButton
      variant="secondary"
      class="mb-4 mt-8 w-full"
      text="Enviar"
      icon-right="arrow-right"
      @click="sendCode()"
      :disabled="code.length < 6"
      :loading="loading"
    />
    <div class="text-center text-sm text-zinc-700">
      Não recebeu um código?
      <nuxt-link to="/sign-up" class="font-semibold text-zinc-950 underline"
        >Solicite novamente</nuxt-link
      >
    </div>
  </div>
</template>

<style></style>
