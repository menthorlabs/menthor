<script setup>
definePageMeta({
  title: "Acesso Antecipado",
});
const api = inject("api");

const email = ref(null);
const loading = ref(false);

async function sendEmail() {
  loading.value = true;

  try {
    const response = await api("/mailing-list", {
      method: "POST",
      body: { email: email.value },
    });

    console.log(response);
  } finally {
    loading.value = false;
  }
  console.log(email.value);
}
</script>

<template>
  <div class="fixed left-0 top-0 z-10 h-full w-full">
    <div class="container flex h-full w-full justify-center overflow-hidden">
      <nuxt-link
        to="/"
        class="absolute left-0 top-0 h-full w-full cursor-default bg-zinc-300/40 backdrop-blur-sm"
      >
      </nuxt-link>

      <form
        @submit.prevent="sendEmail"
        class="relative my-auto h-fit max-w-[480px] overflow-hidden rounded-lg border border-solid border-zinc-300 bg-white p-6 shadow-2xl sm:p-10"
      >
        <div
          class="absolute -top-[180px] left-0 flex h-full w-full justify-center"
        >
          <div
            class="mask-radial h-full max-h-[380px] w-full max-w-[800px] bg-pattern"
          >
            <nuxt-img
              loading="lazy"
              src="/blobs/hero.svg"
              class="block h-full w-full object-cover object-left-bottom"
              alt="Menthor hero blobs"
            />
          </div>
        </div>
        <div class="relative">
          <nuxt-img
            src="/brand/menthor-icon-dark.svg"
            alt="Menthor icon"
            width="114"
            height="107"
            class="mx-auto mb-10 block h-auto w-full max-w-[114px]"
          />
          <h2 class="mb-6 text-center text-2xl font-bold">Solicitar acesso</h2>
          <p class="mb-8 text-center text-zinc-700">
            Deixe seu e-mail e seja um dos primeiros a receber o acesso à
            plataforma.
          </p>
          <MTextField
            v-model="email"
            class="mb-6"
            id="email"
            label="E-mail"
            placeholder="harry.potter@hogwarts.com"
            type="email"
            required
          />
          <MButton
            type="submit"
            class="w-full"
            variant="primary"
            text="Solicitar acesso"
            icon-right="arrow-right"
            :loading="loading"
          />
        </div>
      </form>
    </div>
  </div>
</template>
