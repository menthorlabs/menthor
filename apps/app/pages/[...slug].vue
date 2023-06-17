<script setup>
definePageMeta({
  layout: "course",
});
const { params } = useRoute();

const { data } = await useAsyncData("hello", () =>
  queryContent(`/${params.slug[0]}`).findOne()
);

const { description, image, title } = data.value._dir;
</script>

<template>
  <main class="relative">
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
    <div class="mx-auto max-w-[816px] px-8">
      <ContentDoc id="nuxt_content" />
    </div>
  </main>
</template>
