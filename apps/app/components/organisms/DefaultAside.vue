<script setup lang="ts">
const searchModalStore = useSearchModalStore();
const route = useRoute();
const defaultAsideStore = useDefaultAsideStore();

const fullPath = computed(() => route.fullPath);

const isLesson = computed(() => {
  return !!route.meta?.lesson;
});

const queryBuilder = computed(() => {
  return queryContent(isLesson.value ? route.params.slug[0] : "not_found");
});

const { data: navigation, refresh } = await useAsyncData(
  "aside_nav",
  () => fetchContentNavigation(queryBuilder.value),
  { watch: [fullPath] }
);

const navigationItem = computed(() => {
  if (!navigation.value || navigation.value.length <= 0) return;

  return navigation.value[0];
});

const isCreators = computed(() => {
  return route.path.includes("/creators");
});

watch(isLesson, async () => {
  refresh();
});
</script>

<template>
  <aside
    class="bg-white z-20 md:z-10 md:bg-inherit fixed -left-[270px] transition-all top-0 h-full overflow-y-auto md:relative md:left-0 flex w-[270px] min-w-[270px] flex-col border-r border-solid border-zinc-200 overflow-hidden"
    :class="{ 'left-0': defaultAsideStore.opened }"
  >
    <div class="w-full border-b border-solid border-zinc-200 p-3">
      <nuxt-link
        to="/"
        class="group"
        exact-active-class="is-active"
        @click="defaultAsideStore.opened = false"
      >
        <LeftMenuItem
          icon="home"
          text="Início"
          class="group-[.is-active]:text-zinc-950"
        />
      </nuxt-link>
      <LeftMenuItem
        @click="
          searchModalStore.opened = true;
          defaultAsideStore.opened = false;
        "
        icon="magnifying-glass"
        text="Buscar"
      >
        <div class="flex items-center gap-1">
          <Command text="Ctrl" size="sm" /> <Command text="K" size="sm" />
        </div>
      </LeftMenuItem>
    </div>
    <div class="relative flex-1 overflow-auto">
      <Transition name="slide-fade">
        <div
          class="px-3 py-4"
          v-if="isLesson && navigationItem"
          :key="navigationItem._id"
        >
          <LeftMenuLessons
            v-for="item in navigationItem.children"
            :key="item._path"
            :navigation="item"
          />
        </div>
      </Transition>
      <Transition name="slide-fade-reverse">
        <div v-if="!isLesson && isCreators">
          <LeftMenuCreators />
        </div>
      </Transition>
      <Transition name="slide-fade-reverse">
        <div v-if="!isLesson && !isCreators">
          <LeftMenuDefault />
        </div>
      </Transition>
    </div>
  </aside>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-reverse-enter-active {
  transition: all 0.3s;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}

.slide-fade-leave-active,
.slide-fade-reverse-leave-active {
  transition: all 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}

.slide-fade-reverse-enter-from,
.slide-fade-reverse-leave-to {
  transform: translateX(-100%);
}
</style>
