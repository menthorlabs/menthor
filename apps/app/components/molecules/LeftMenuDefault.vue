<script setup lang="ts">
import type { NavItem } from "../../../../node_modules/@nuxt/content/dist/runtime/types";

const route = useRoute();
const sessionStore = useSessionStore();

const { data: allCoursesNavigation } = await useAsyncData(
  "allCoursesNavigation",
  () => fetchContentNavigation(),
  {
    watch: [route],
  }
);

const coursesStore = useCoursesStore();
const loading: Ref<boolean> = ref(true);
const quickFilterOptions = reactive(new Set<string>());
const availableCourses: Ref<NavItem[] | undefined> = ref([]);

function setAvailableCourses() {
  availableCourses.value = allCoursesNavigation.value?.reduce(
    (filtered: NavItem[], course) => {
      const courseIsAvailable = coursesStore.courses?.find(
        (e) => e.ContentId === course._dir
      );

      if (courseIsAvailable) {
        const updatedCourse: NavItem & typeof courseIsAvailable = {
          ...course,
          ...courseIsAvailable,
        };

        updatedCourse.areas.forEach(quickFilterOptions.add, quickFilterOptions);

        filtered.push(updatedCourse);
      }

      return filtered;
    },
    []
  );
}

onMounted(async () => {
  try {
    loading.value = true;
    await coursesStore.getCourses();
    setAvailableCourses();
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="w-full flex-1 p-3">
    <div
      class="mb-2 flex h-[40px] items-center gap-4 px-4 py-2 text-sm font-medium text-zinc-700"
    >
      <div class="flex h-full w-[20px] items-center justify-center">
        <font-awesome-icon icon="book-bookmark" class="text-lg" />
      </div>
      <div class="flex-1">Seus cursos</div>
    </div>
    <div v-if="!sessionStore.isConnected()" class="px-8">
      <p class="text-xs text-center text-zinc-500 mb-2">
        Entre agora e comece a salvar seu progresso de estudo
      </p>
      <NuxtLink to="/sign-in">
        <MButton
          text="Fazer login"
          size="sm"
          variant="outline"
          class="w-full"
        />
      </NuxtLink>
    </div>
    <div
      v-else-if="loading && !coursesStore.courses"
      class="flex justify-center"
    >
      <MSpinner class="h-4 w-4 border-zinc-400" />
    </div>
    <div
      v-else-if="coursesStore.courses && coursesStore.courses.length <= 0"
      class="text-xs text-center text-zinc-500 px-8"
    >
      Você ainda não se matriculou em nenhum curso
    </div>
    <template v-else>
      <div
        class="scrollbox -ml-3 mb-1 w-[calc(100%_+_1.5rem)] overflow-x-auto"
        :class="{ '!mb-2': quickFilterOptions.size < 3 }"
      >
        <div class="flex items-center space-x-2">
          <div
            v-for="label in quickFilterOptions"
            :key="label"
            class="flex h-8 cursor-pointer items-center whitespace-nowrap rounded-full bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-950 first:ml-3 hover:bg-zinc-200"
          >
            <span class="first-letter:capitalize">{{ label }}</span>
          </div>
        </div>
      </div>
      <LeftMenuCourseItem v-for="course in availableCourses" :course="course" />
    </template>
  </div>
</template>
