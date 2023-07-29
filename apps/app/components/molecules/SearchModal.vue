<script setup lang="ts">
import type { ParsedContent } from "../../../../node_modules/@nuxt/content/dist/runtime/types";

import { useMagicKeys } from "@vueuse/core";
const { escape, arrowdown } = useMagicKeys();
const navigatedIndex: Ref<number> = ref(-1);

watch(escape, (v) => {
  if (v) searchModalStore.opened = false;
});

watch(arrowdown, (v) => {
  if (
    v &&
    searchResults.value &&
    Number(navigatedIndex.value) < searchResults.value.length
  )
    navigatedIndex.value++;
});

function resetNavigatedIndex() {
  navigatedIndex.value = -1;
}

const searchModalStore = useSearchModalStore();

const search = ref(null);

const { data: coursesAndCategories } = await useAsyncData(
  "coursesAndCategories",
  () => queryContent("/").where({ _extension: "yml" }).find()
);

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

const mappedCoursesAndCategories = coursesAndCategories.value?.map((item) => {
  item.navigation = navigation.value?.find(
    (navItem) => navItem.title === item.title
  );

  return item;
});

const searchResults: Ref<
  { course: ParsedContent; lessons: ParsedContent[] | never[] }[] | undefined
> = ref();

const initialSearch = mappedCoursesAndCategories?.filter(
  (e) => e.image?.length > 0
);

resetSearch();

function resetSearch() {
  searchResults.value = initialSearch?.map((e) => {
    return {
      course: e,
      lessons: [],
    };
  });
}

async function searchContent() {
  resetNavigatedIndex();
  if (String(search.value).length <= 0) {
    resetSearch();
    return;
  }

  const lessons = await queryContent("/")
    .where({
      _extension: "md",
      $or: [
        { title: { $regex: `/${String(search.value)}/ig` } },
        { description: { $regex: `/${String(search.value)}/ig` } },
        { plainText: { $regex: `/${String(search.value)}/ig` } },
      ],
    })
    .find();

  const results = mappedCoursesAndCategories?.map((course) => {
    const matchedLessons = lessons.filter((lesson) => {
      const coursePath = lesson._file?.split("/")[0];

      return `${coursePath}/_dir.yml` === course._file;
    });

    const mappedLessons = matchedLessons.map((lesson) => {
      const category = mappedCoursesAndCategories?.find(
        (category) => lesson._dir === category._dir
      );

      lesson.categoryName = category?.title;

      return lesson;
    });

    return {
      course,
      lessons: mappedLessons,
    };
  });

  searchResults.value = results?.filter((result) => result.lessons.length > 0);
}

const searchInput = ref<HTMLInputElement | null>();

watch(searchModalStore, async (newValue) => {
  if (newValue.opened === true) {
    await nextTick();
    searchInput?.value?.focus();
  }
});
</script>

<template>
  <ClientOnly>
    <Teleport to="#modals">
      <MModal
        v-model="searchModalStore.opened"
        class="w-full max-w-[640px]"
        :closeable="false"
      >
        <template #header>
          <input
            ref="searchInput"
            type="search"
            v-model="search"
            @input="searchContent"
            autocomplete="off"
            placeholder="Pesquise aulas ou escreva um comando..."
            class="mb-3 block w-full pt-2 text-base font-medium text-zinc-950 !outline-none placeholder:text-zinc-500"
          />
          <div class="flex items-center text-sm">
            <div class="flex flex-1 items-center gap-2 text-zinc-700">
              <Command icon="arrow-up" />
              <Command icon="arrow-down" />
              <span>para navegar</span>
            </div>
            <div class="flex items-center gap-2">
              <Command text="Esc" />
              <span>para fechar</span>
            </div>
          </div>
        </template>
        <div
          class="-ml-6 w-[calc(100%_+_3rem)]"
          v-if="searchResults && searchResults.length > 0"
        >
          <h2 class="mb-1 pl-6 text-sm font-medium">Cursos</h2>
          <template v-for="(item, i) in searchResults" :key="item.course.title">
            <NuxtLink
              v-if="item.course.navigation?.children[0]?.children[0]?._path"
              :to="item.course.navigation.children[0].children[0]._path"
              @click="searchModalStore.opened = false"
              class="block"
              :class="{ 'bg-zinc-100': i === navigatedIndex }"
            >
              <SearchModalCourseItem
                :img="item.course.image"
                :name="item.course.title"
                :description="item.course.description"
              />
            </NuxtLink>
            <NuxtLink
              v-for="lesson in item.lessons"
              :key="lesson.title"
              :to="lesson._path"
              @click="searchModalStore.opened = false"
              class="block"
              :class="{ 'bg-zinc-100': i === navigatedIndex }"
            >
              <SearchModalLessonItem
                :label="lesson.categoryName"
                :name="lesson.title"
                :plain-text="lesson.plainText"
                :search-text="search"
              />
            </NuxtLink>
          </template>

          <!-- <h2 class="mb-1 pl-6 pt-4 text-sm font-medium">Comandos</h2>
          <SearchModalCommandItem icon="moon" name="Mudar para tema escuro">
            <Command text="Ctrl" />
            <Command text="A" />
          </SearchModalCommandItem> -->
        </div>
        <div v-else class="p-6 text-center text-sm text-zinc-500">
          Não encontramos nenhum resultado 😥
        </div>
      </MModal>
    </Teleport>
  </ClientOnly>
</template>
