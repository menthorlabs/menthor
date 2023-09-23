<script setup>
definePageMeta({
  layout: "auth",
});
useSeoMeta({
  title: "Crie sua conta",
});

const router = useRouter();
const signUpStore = useSignUpStore();
const email = ref(null);
const password = ref(null);
const loading = ref(false);
const toast = inject("toast");
const queryStore = useQueryStore();
const runtimeConfig = useRuntimeConfig();
const route = useRoute();

onMounted(() => {
  if (route.query?.error) {
    toast?.error(route.query?.error);
  }
});

async function createAccount() {
  loading.value = true;

  try {
    await signUpStore.create({
      emailAddress: email.value,
      password: password.value,
    });
    await signUpStore.signUp.prepareEmailAddressVerification();
    router.push({ path: "/code" });
  } catch (e) {
    toast?.error("Parece que essa conta já existe.");
  } finally {
    loading.value = false;
  }
}

async function clerkOAuth(strategy) {
  loading.value = true;

  const redirectUrl = `${
    runtimeConfig.public.appUrl
  }sign-in?error=${encodeURIComponent("Essa conta já existe. Faça login.")}`;

  const redirectUrlComplete = queryStore.redirect
    ? runtimeConfig.public.appUrl + queryStore.redirect.slice(1)
    : runtimeConfig.public.appUrl;

  try {
    await signUpStore.authenticateWithRedirect({
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
    <h1 class="mb-6 text-center text-2xl font-bold">Crie uma conta</h1>
    <div
      class="mb-6 flex flex-wrap gap-2 sm:gap-4 border-b border-dashed border-zinc-300 pb-6"
    >
      <MButton
        class="flex-1 min-w-[186px]"
        variant="outline"
        :icon-left="['fab', 'github']"
        text="Crie com GitHub"
        :class="{ '!pointer-events-none': loading }"
        @click="clerkOAuth('oauth_github')"
      />
      <MButton
        class="flex-1 min-w-[186px]"
        variant="outline"
        :icon-left="['fab', 'google']"
        text="Crie com Google"
        :class="{ '!pointer-events-none': loading }"
        @click="clerkOAuth('oauth_google')"
      />
    </div>
    <MForm>
      <MTextField
        class="mb-4"
        label="Email"
        type="email"
        v-model="email"
        :rules="['email']"
      />
      <MTextField
        class="mb-6"
        label="Senha"
        type="password"
        v-model="password"
        :rules="['password']"
      />
      <MButton
        variant="secondary"
        class="mb-4 w-full"
        text="Criar conta"
        icon-right="arrow-right"
        @click="createAccount()"
        :loading="loading"
      />
    </MForm>

    <div class="text-center text-sm text-zinc-700">
      Já tem uma conta?
      <nuxt-link to="/sign-in" class="font-semibold text-zinc-950 underline"
        >Entrar agora!</nuxt-link
      >
    </div>
  </div>
</template>

<style></style>
