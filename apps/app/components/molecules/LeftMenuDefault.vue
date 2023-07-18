<script setup lang="ts">
import type { ParsedContent } from "../../../../node_modules/@nuxt/content/dist/runtime/types";

const { data: allCourses } = await useAsyncData("allCourses", () =>
  queryContent("/")
    .where({ _extension: "yml", image: { $exists: true } })
    .find()
);

const coursesStore = useCoursesStore();
const loading: Ref<boolean> = ref(true);
const quickFilterOptions = reactive(new Set<string>());

const availableCourses: ComputedRef<ParsedContent[] | undefined> = computed(
  () => {
    return allCourses.value?.reduce((filtered: ParsedContent[], course) => {
      const courseIsAvailable = coursesStore.courses?.find(
        (e) => e.ContentId === course._dir
      );

      if (courseIsAvailable) {
        const updatedCourse: ParsedContent & typeof courseIsAvailable = {
          ...course,
          ...courseIsAvailable,
        };

        updatedCourse.areas.forEach(quickFilterOptions.add, quickFilterOptions);

        filtered.push(updatedCourse);
      }

      return filtered;
    }, []);
  }
);

onMounted(async () => {
  try {
    await coursesStore.getCourses();
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
    <div v-if="loading" class="flex justify-center">
      <MSpinner class="h-4 w-4 border-zinc-400" />
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
      <LeftMenuCourseItem
        v-for="course in availableCourses"
        :key="course._id"
        :img="course.image"
        :name="course.title"
        :current-lesson="course.CurrentLessonUrl"
      />
    </template>
  </div>
</template>
