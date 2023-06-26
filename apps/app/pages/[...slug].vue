<script setup>
definePageMeta({
  layout: "course",
});
const sessionStore = useSessionStore();
const { params } = useRoute();

const { data } = await useAsyncData("hello", () =>
  queryContent(`/${params.slug[0]}`).findOne()
);

const { description, image, title } = data.value._dir;
</script>

<template>
  <main class="relative">
    <!-- <Teleport to="#modals">
      <MModal class="w-full max-w-[640px]"> teste </MModal>
    </Teleport> -->

    <div class="mb-10 flex items-center gap-6 px-8">
      <div
        class="h-[160px] w-[160px] min-w-[160px] overflow-hidden rounded shadow-lg"
      >
        <img :src="image" class="h-full w-full object-cover object-center" />
      </div>
      <div class="flex-1">
        <div
          class="mb-2 w-fit rounded-full bg-zinc-900 px-3 py-[2px] text-xs font-medium text-white"
        >
          + 60 mil alunos
        </div>
        <h1 class="text-3xl font-extrabold">
          {{ title }}
        </h1>
        <p class="mb-3 text-base text-zinc-700">
          {{ description }}
        </p>
        <div class="flex items-center gap-2">
          <AppIconButton />
          <AppIconButton />
          <AppIconButton />
          <AppIconButton />
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-[816px] px-8 pb-10">
      <ContentDoc id="nuxt_content" />
      <div
        v-if="!sessionStore.hasSession"
        class="group relative mb-2 mr-2 mt-7 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-pink-400 p-0.5 text-sm font-medium text-gray-900"
      >
        <div
          class="to-pink-400-10 relative flex items-center gap-4 rounded-md bg-white bg-gradient-to-br from-blue-400/20 to-pink-400/20 p-6"
        >
          <div class="flex-1">
            <div class="mb-1 text-base font-medium">Opa, calma aí!</div>
            <p class="text-base font-normal text-zinc-700">
              Parece que você não está logado, caso tenha interesse em salvar
              seu progresso de estudo faça login agora.
            </p>
          </div>
          <nuxt-link
            :to="{
              path: '/sign-up',
              query: { redirect: encodeURIComponent($route.path) },
            }"
          >
            <MButton
              icon-right="arrow-right"
              variant="secondary"
              text="Fazer login"
              class="w-full"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>
