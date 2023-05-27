<script setup>
definePageMeta({
  title: "Acesso Antecipado",
});
const api = inject("api");

const email = ref(null);
const loading = ref(false);
const error = ref(null);
const sent = ref(false);

async function sendEmail() {
  loading.value = true;

  try {
    await api("/mailing-list", {
      method: "POST",
      body: { email: email.value },
    });

    sent.value = true;
    error.value = null;
  } catch (e) {
    error.value = e.data?.error || "Não foi possível adicionar o email";
  } finally {
    loading.value = false;
  }
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
              width="478"
              height="380"
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
          <div
            class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-pink-400 p-0.5 text-sm font-medium text-gray-900"
            v-if="sent"
          >
            <div
              class="to-pink-400-10 relative rounded-md bg-white bg-gradient-to-br from-blue-400/20 to-pink-400/20 p-6"
            >
              <h3 class="mb-4 text-base font-medium">
                Obrigado por se cadastrar!
              </h3>
              <p class="mb-4 text-base font-normal text-zinc-700">
                Apoie o projeto deixando uma estrela no repositório da menthor.
              </p>
              <nuxt-link
                to="https://github.com/menthorlabs/menthor"
                target="_blank"
              >
                <MButton
                  :icon-left="['fab', 'github']"
                  variant="secondary"
                  text="Dar estrela no GitHub"
                  class="w-full"
                />
              </nuxt-link>
            </div>
          </div>
          <template v-else>
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
            <div class="mt-4 text-center text-sm" v-if="error">
              {{ error }}
            </div>
          </template>
        </div>
      </form>
    </div>
  </div>
</template>
