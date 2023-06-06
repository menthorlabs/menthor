<script setup>
const clerk = inject("clerk");
const email = ref(null);
const password = ref(null);
//const code = ref(null);
const loading = ref(false);

onMounted(async () => {
  console.log(clerk);
});

definePageMeta({
  layout: "auth",
});

// async function createAccount() {
//   loading.value = true;

//   try {
//     signUp = await clerk.client.signUp.create({
//       emailAddress: email.value,
//       password: password.value,
//     });

//     await signUp.prepareEmailAddressVerification();
//   } finally {
//     loading.value = false;
//   }
// }

// async function verifyAddress() {
//   loading.value = true;

//   try {
//     const response = await signUp.attemptEmailAddressVerification({
//       code: code.value,
//     });
//     console.log(response);
//   } finally {
//     loading.value = false;
//   }
// }

// async function clerkOAuth() {
//   loading.value = true;

//   try {
//     const response = await clerk.client.signUp.authenticateWithRedirect({
//       strategy: "oauth_google",
//       redirectUrl: "/sso-callback",
//       redirectUrlComplete: "/",
//     });
//     console.log(response);
//   } finally {
//     loading.value = false;
//   }
// }

//https://winning-shad-32.accounts.dev/sign-up
</script>

<template>
  <div class="relative flex h-full w-full justify-center py-20">
    <div
      class="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden"
    >
      <div class="mask-radial h-auto max-w-[1440px]">
        <nuxt-img
          loading="lazy"
          src="/midjourney/backgrounds/login.jpg"
          class="block h-full w-full object-cover object-left-top"
          alt="Menthor login background"
          width="1440"
          height="1440"
        />
      </div>
    </div>
    <div
      class="absolute left-0 top-0 h-full w-full bg-white/50 backdrop-blur-sm"
    ></div>
    <div class="absolute bottom-0 left-0 h-[400px] w-full overflow-hidden">
      <div
        class="mask-radial absolute -bottom-[316px] -left-[581px] h-[716px] w-[1734px] bg-blue-400/20"
      ></div>
      <div
        class="mask-radial absolute -bottom-[316px] -right-[581px] h-[716px] w-[1734px] bg-pink-400/20"
      ></div>
    </div>
    <div
      class="relative my-auto w-full max-w-[480px] rounded-lg border border-slate-200 bg-white p-10 shadow-2xl"
    >
      <nuxt-img
        loading="lazy"
        src="/brand/menthor-icon-dark.svg"
        class="mx-auto mb-8 block h-auto w-[54px]"
        alt="Menthor Icon Dark"
        width="54"
        height="51"
      />
      <h1 class="mb-6 text-center text-2xl font-bold">Comece agora!</h1>
      <div
        class="mb-6 grid grid-cols-2 gap-4 border-b border-dashed border-zinc-300 pb-6"
      >
        <MButton
          variant="secondary"
          :icon-left="['fab', 'github']"
          class="w-full bg-zinc-800 hover:bg-zinc-900"
          text="Entre com GitHub"
          :loading="loading"
        />
        <MButton
          variant="primary"
          :icon-left="['fab', 'google']"
          class="w-full bg-blue-500 hover:bg-blue-600"
          text="Entre com Google"
          :loading="loading"
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
        variant="primary"
        class="w-full"
        text="Cadastrar"
        icon-right="arrow-right"
        @click="createAccount()"
        :loading="loading"
      />
    </div>
  </div>
</template>
