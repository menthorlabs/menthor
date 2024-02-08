<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
useSeoMeta({
  title: "Entre agora",
});

const signInStore = useSignInStore();
const email = ref(null);
const password = ref(null);
const sessionStore = useSessionStore();
const queryStore = useQueryStore();
const loading = ref(false);
const toast: { error: Function } | undefined = inject("toast");
const runtimeConfig = useRuntimeConfig();
const route = useRoute();

onMounted(async () => {
  if (route.query?.error) {
    toast?.error(route.query?.error);
  }
});

async function signIn() {
  loading.value = true;

  try {
    await signInStore.create({
      emailAddress: email.value,
      password: password.value,
    });
    await sessionStore.refreshSession();
    return await navigateTo("/", {
      external: true,
    });
  } catch (e) {
    toast?.error("Email ou senha incorretos.");
  } finally {
    loading.value = false;
  }
}

async function clerkOAuth({ strategy }: { strategy: string }) {
  loading.value = true;
  const redirectUrl = `${
    runtimeConfig.public.appUrl
  }sign-up?error=${encodeURIComponent(
    "Essa conta não existe. Crie uma conta."
  )}`;

  const redirectUrlComplete = queryStore.redirect
    ? runtimeConfig.public.appUrl + queryStore.redirect.slice(1)
    : runtimeConfig.public.appUrl;

  try {
    await signInStore.authenticateWithRedirect({
      strategy: strategy,
      redirectUrl,
      redirectUrlComplete: `${redirectUrlComplete}?oauth=true`,
    });
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <h1 class="mb-6 text-center text-2xl font-bold">Continue a sua jornada!</h1>
    <div
      class="mb-6 flex flex-wrap gap-2 sm:gap-4 border-b border-dashed border-zinc-300 pb-6"
    >
      <MButton
        class="flex-1 min-w-[186px]"
        variant="outline"
        :icon-left="['fab', 'github']"
        text="Entre com GitHub"
        :class="{ '!pointer-events-none': loading }"
        @click="clerkOAuth({ strategy: 'oauth_github' })"
      />
      <MButton
        class="flex-1 min-w-[186px]"
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
        label="Senha"
        type="password"
        v-model="password"
        :rules="['password']"
        required
      >
        <template #label>
          <nuxt-link
            to="/forgot-password"
            class="underline text-zinc-500 hover:text-zinc-900 transition"
          >
            Esqueci minha senha
          </nuxt-link>
        </template>
      </MTextField>
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
