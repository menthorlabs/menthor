<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const userStore = useUserStore();
const signUpStore = useSignUpStore();
const sessionStore = useSessionStore();
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const toast: { error: Function } | undefined = inject("toast");

let code: string[] = Array(6);
let dataFromPaste: string[] | undefined;
const keysAllowed: string[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function isNumber(event: Event) {
  (event.currentTarget as HTMLInputElement).value = "";
  const keyPressed: string = (event as KeyboardEvent).key;
  if (!keysAllowed.includes(keyPressed)) {
    event.preventDefault();
  }
}
function handleInput(event: Event) {
  const inputType = (event as InputEvent).inputType;
  let currentActiveElement = event.target as HTMLInputElement;

  if (inputType === "insertText")
    (currentActiveElement.nextElementSibling as HTMLElement)?.focus();

  if (inputType === "insertFromPaste" && dataFromPaste) {
    for (const num of dataFromPaste) {
      let id: number = parseInt(currentActiveElement.id.split("_")[1]);
      currentActiveElement.value = num;
      code[id] = num;
      if (currentActiveElement.nextElementSibling) {
        currentActiveElement =
          currentActiveElement.nextElementSibling as HTMLInputElement;
        (currentActiveElement.nextElementSibling as HTMLElement)?.focus();
      }
    }
  }
}
function handleDelete(event: Event) {
  //keydown event = move to previous element then only delete number

  let value = (event.target as HTMLInputElement).value;
  let currentActiveElement = event.target as HTMLInputElement;
  if (!value)
    (currentActiveElement.previousElementSibling as HTMLElement)?.focus();
}

function onPaste(event: Event) {
  dataFromPaste = (event as ClipboardEvent).clipboardData
    ?.getData("text")
    .trim()
    .split("");

  if (dataFromPaste) {
    for (const num of dataFromPaste) {
      if (!keysAllowed.includes(num)) event.preventDefault();
    }
  }
}
async function sendCode() {
  loading.value = true;

  try {
    await signUpStore.attemptEmailAddressVerification({
      code: code.join(""),
    });
    userStore.setUser();
    router.push({
      path: route.query?.redirect
        ? decodeURIComponent(String(route.query.redirect))
        : "/",
    });
    sessionStore.refreshSession();
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
