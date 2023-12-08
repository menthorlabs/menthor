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
  <main class="container flex gap-8 pt-8">
    <aside class="min-w-[218px]">
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
    </section>
  </main>
</template>
