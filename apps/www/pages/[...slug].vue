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
    <aside class="flex-1 max-w-[218px]">
      <div class="space-y-2 pb-4 mb-4 border-b border-zinc-200 border-dashed">
        <AtomsDocsNavItem
          v-for="item in navigation"
          :key="item.title"
          :nav="item"
        />
      </div>
      <div class="space-y-2" v-if="currentNavigation">
        <AtomsDocsChildNavItem
          v-for="item in currentNavigation.children"
          :key="item.title"
          :nav="item"
        />
      </div>
    </aside>
    <section class="flex-1">
      <ContentDoc />
    </section>
  </main>
</template>
