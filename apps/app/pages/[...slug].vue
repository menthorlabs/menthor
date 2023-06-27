<script setup>
definePageMeta({
  layout: "course",
});
const sessionStore = useSessionStore();
const enrollmentModalStore = useEnrollmentModalStore();
const { params } = useRoute();
const finishLesson = ref(false);

const { data } = await useAsyncData("course", async () => {
  const [content, surround] = await Promise.all([
    queryContent(`/${params.slug[0]}`).findOne(),
    queryContent()
      .where({ _type: "markdown" })
      .findSurround(`/${params.slug[0]}/${params.slug[1]}/${params.slug[2]}`),
  ]);
  return { data: { content, surround } };
});

console.log(data.value.data.surround);
const { description, image, title } = data.value.data.content._dir;
</script>

<template>
  <main class="relative">
    <ClientOnly>
      <Teleport to="#modals">
        <MModal v-model="finishLesson" class="w-full max-w-[480px]" footer>
          <template #header> Finalizar aula </template>
          <template #description>
            Envie seu progresso antes de continuar
          </template>
          <p class="mb-4 text-sm font-normal text-zinc-700">
            Para finalizar essa aula você deverá enviar uma captura de tela do
            seu terminal mostrando que está funcionando.
          </p>
        </MModal>
      </Teleport>
    </ClientOnly>

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
      <div class="mt-10 flex justify-between gap-4">
        <div
          class="cursor-pointer rounded border border-zinc-300 px-4 py-3 transition-all hover:border-zinc-400 hover:bg-zinc-50"
        >
          <div class="mb-1 text-right text-xs font-medium text-zinc-700">
            Introdução
          </div>
          <div class="flex items-center justify-end gap-2">
            <font-awesome-icon class="text-sm" icon="arrow-left" />
            <span class="text-sm font-medium leading-[14px]"
              >Antes de começar</span
            >
          </div>
        </div>
        <div
          @click="finishLesson = true"
          class="cursor-pointer rounded border border-zinc-300 px-4 py-3 transition-all hover:border-zinc-400 hover:bg-zinc-50"
        >
          <div class="mb-1 text-xs font-medium text-zinc-700">Introdução</div>
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium leading-[14px]"
              >Antes de começar</span
            >
            <font-awesome-icon class="text-sm" icon="arrow-right" />
          </div>
        </div>
      </div>
      <div
        class="mt-6 flex items-center justify-center gap-2 border-t border-dashed border-zinc-300 pt-6"
      >
        <MButton
          icon-left="edit"
          size="sm"
          variant="inherit"
          text="Editar no GitHub"
        />
        <MButton
          icon-left="share"
          size="sm"
          variant="inherit"
          text="Compartilhar"
        />
        <MButton
          icon-left="star"
          size="sm"
          variant="inherit"
          text="Avaliar Aula"
        />
      </div>
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
      <div
        class="group relative mb-2 mr-2 mt-7 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-pink-400 p-0.5 text-sm font-medium text-gray-900"
      >
        <div
          class="to-pink-400-10 relative flex items-center gap-4 rounded-md bg-white bg-gradient-to-br from-blue-400/20 to-pink-400/20 p-6"
        >
          <div class="flex-1">
            <div class="mb-1 text-base font-medium">Opa, calma aí!</div>
            <p class="text-base font-normal text-zinc-700">
              Parece que você não se matriculou nesse curso ainda, finalize sua
              matrícula agora e comece a salvar seu progresso.
            </p>
          </div>
          <MButton
            icon-right="signature"
            variant="secondary"
            text="Matricular agora"
            @click="enrollmentModalStore.opened = true"
          />
        </div>
      </div>
    </div>
  </main>
</template>
