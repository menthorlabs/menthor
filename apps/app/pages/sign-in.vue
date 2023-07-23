<script setup lang="ts">
const router = useRouter();
const signInStore = useSignInStore();
const email = ref(null);
const password = ref(null);
const sessionStore = useSessionStore();
const queryStore = useQueryStore();
const loading = ref(false);
const toast: { error: Function } | undefined = inject("toast");

onMounted(async () => {
  await sessionStore.refreshToken();
  sessionStore.cleared = false;
});

definePageMeta({
  layout: "auth",
});

async function signIn() {
  loading.value = true;

  try {
    await signInStore.create({
      emailAddress: email.value,
      password: password.value,
    });
    await sessionStore.refreshSession();
    router.push("/");
  } catch (e) {
    toast?.error("Email ou senha incorretos.");
  } finally {
    loading.value = false;
  }
}

async function clerkOAuth({ strategy }: { strategy: string }) {
  loading.value = true;

  try {
    await signInStore.authenticateWithRedirect({
      strategy: strategy,
      redirectUrl: `/sign-up?error=${encodeURIComponent(
        "Essa conta não existe. Crie uma conta."
      )}`,
      redirectUrlComplete: queryStore.redirect ? queryStore.redirect : "/",
    });
  } finally {
    loading.value = false;
  }
}

//https://winning-shad-32.accounts.dev/sign-up
</script>

<template>
  <div>
    <h1 class="mb-6 text-center text-2xl font-bold">Bem-vindo de volta!</h1>
    <div
      class="mb-6 grid grid-cols-2 gap-4 border-b border-dashed border-zinc-300 pb-6"
    >
      <MButton
        variant="outline"
        :icon-left="['fab', 'github']"
        text="Entre com GitHub"
        :class="{ '!pointer-events-none': loading }"
        @click="clerkOAuth({ strategy: 'oauth_github' })"
      />
      <MButton
        variant="outline"
        :icon-left="['fab', 'google']"
        text="Entre com Google"
        :class="{ '!pointer-events-none': loading }"
        @click="clerkOAuth({ strategy: 'oauth_google' })"
      />
    </div>
    <MForm @submit="signIn()">
      <MTextField
        class="mb-4"
        label="Email"
        v-model="email"
        required
        :rules="['email']"
        type="email"
      />
      <MTextField
        class="mb-6"
        label="Password"
        type="password"
        v-model="password"
        :rules="['password']"
        required
      />
      <MButton
        variant="secondary"
        class="mb-4 w-full"
        text="Entrar"
        icon-right="arrow-right"
        type="submit"
        :loading="loading"
      />
    </MForm>

    <div class="text-center text-sm text-zinc-700">
      Não tem uma conta?
      <nuxt-link to="/sign-up" class="font-semibold text-zinc-950 underline"
        >Criar agora!</nuxt-link
      >
    </div>
  </div>
</template>

<style></style>
