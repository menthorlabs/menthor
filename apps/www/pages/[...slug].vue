<script setup lang="ts">
// import type { NavItem } from "../../../node_modules/@nuxt/content/dist/runtime/types";
const route = useRoute();
const router = useRouter();

if (route.fullPath === "/creators") {
  router.push("/creators/estruturando-um-curso");
}

if (route.fullPath === "/alunos") {
  router.push("/alunos/aprendizagem");
}

const { data: content } = await useAsyncData(`content-${route.path}`, () =>
  queryContent(route.path).findOne()
);

if (!content.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryContent()
    .where({
      _type: "markdown",
    })
    .findSurround(`/${route.params.slug[0]}/${route.params.slug[1]}`);
});

const previousLesson = surround.value ? surround.value[0] : null;
const nextLesson = surround.value ? surround.value[1] : null;

const currentContent = content.value;

const { data: nav } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

const navigation = computed(() => {
  if (!nav.value) return [];

  return nav.value;
});

const currentNavigation = computed(() => {
  return navigation.value.find((e) => route.fullPath.includes(e._path));
});
</script>

<template>
  <main class="max-w-[1190px] px-5 mx-auto flex gap-8 pt-8 md:px-10">
    <aside
      class="hidden sm:block min-w-[218px] max-h-[calc(100vh_-_92px)] overflow-y-auto sticky top-[92px]"
    >
      <div class="space-y-2 pb-4 mb-4 border-b border-zinc-200 border-dashed">
        <AtomsDocsNavItem
          v-for="item in navigation"
          :key="item.title"
          :nav="item"
        />
      </div>
      <div v-if="currentNavigation">
        <AtomsDocsChildNavItem
          v-for="item in currentNavigation.children"
          :key="item.title"
          :nav="item"
        />
      </div>
    </aside>
    <section class="flex-1 pb-20 min-w-0">
      <h1 class="text-3xl font-bold text-zinc-950 mb-2">
        {{ currentContent.title }}
      </h1>
      <p
        class="text-lg font-normal text-zinc-700 pb-6 mb-8 border-b border-zinc-200"
      >
        {{ currentContent.description }}
      </p>
      <ContentRenderer
        v-if="currentContent.body"
        :value="currentContent"
        id="nuxt_content"
      />
      <div
        class="mt-10 flex flex-wrap justify-between gap-4"
        :class="{ '!justify-end': !previousLesson }"
      >
        <nuxt-link
          v-if="previousLesson"
          :to="previousLesson._path"
          class="cursor-pointer rounded w-full sm:max-w-[214px] border border-zinc-300 px-4 py-3 transition-all hover:border-zinc-400 hover:bg-zinc-50"
          :title="previousLesson.title"
        >
          <div class="mb-1 text-right text-xs font-medium text-zinc-700">
            Anterior
          </div>
          <div class="flex items-center justify-end gap-2">
            <font-awesome-icon class="text-sm" icon="arrow-left" />
            <span
              class="text-sm font-medium leading-[14px] truncate flex-1 text-right"
            >
              {{ previousLesson.title }}
            </span>
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="nextLesson"
          :to="nextLesson._path"
          class="cursor-pointer rounded border w-full sm:max-w-[214px] border-zinc-300 px-4 py-3 transition-all hover:border-zinc-400 hover:bg-zinc-50"
          :title="nextLesson.title"
        >
          <div class="mb-1 text-xs font-medium text-zinc-700">Próximo</div>
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium leading-[14px] truncate flex-1">
              {{ nextLesson.title }}
            </span>
            <font-awesome-icon class="text-sm" icon="arrow-right" />
          </div>
        </nuxt-link>
      </div>
    </section>
  </main>
</template>
