<script setup>
const router = useRouter();
const signUpStore = useSignUpStore();
const email = ref(null);
const password = ref(null);
//const code = ref(null);
const loading = ref(false);

definePageMeta({
  layout: "auth",
});

async function createAccount() {
  loading.value = true;

  try {
    await signUpStore.create({
      emailAddress: email.value,
      password: password.value,
    });
    await signUpStore.signUp.prepareEmailAddressVerification();
    router.push("/code");
  } finally {
    loading.value = false;
  }
}

async function clerkOAuth(strategy) {
  loading.value = true;

  try {
    const response = await signUpStore.authenticateWithRedirect({
      strategy: strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
    console.log(response);
  } finally {
    loading.value = false;
  }
}

//https://winning-shad-32.accounts.dev/sign-up
</script>

<template>
  <div>
    <h1 class="mb-6 text-center text-2xl font-bold">Crie uma conta</h1>
    <div
      class="mb-6 grid grid-cols-2 gap-4 border-b border-dashed border-zinc-300 pb-6"
    >
      <MButton
        variant="outline"
        :icon-left="['fab', 'github']"
        text="Crie com GitHub"
        @click="clerkOAuth('oauth_google')"
      />
      <MButton
        variant="outline"
        :icon-left="['fab', 'google']"
        text="Crie com Google"
        @click="clerkOAuth('oauth_google')"
      />
    </div>
    <MTextField class="mb-4" label="Email" type="email" v-model="email" />
    <MTextField
      class="mb-6"
      label="Password"
      type="password"
      v-model="password"
    />
    <MButton
      variant="secondary"
      class="mb-4 w-full"
      text="Criar conta"
      icon-right="arrow-right"
      @click="createAccount()"
      :loading="loading"
    />
    <div class="text-center text-sm text-zinc-700">
      Já tem uma conta?
      <nuxt-link to="/sign-in" class="font-semibold text-zinc-900 underline"
        >Entrar agora!</nuxt-link
      >
    </div>
  </div>
</template>

<style></style>
