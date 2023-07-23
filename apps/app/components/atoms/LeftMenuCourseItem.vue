<script setup lang="ts">
import type { NavItem } from "../../../../node_modules/@nuxt/content/dist/runtime/types";
const { course } = defineProps<{
  course: NavItem & { Lessons?: string[] | undefined };
}>();

const totalLessons = computed(() => {
  return course.children?.reduce((amount, child) => {
    amount += Number(child?.children?.length);
    return amount;
  }, 0);
});

const doneLessons = computed(() => {
  return course.Lessons?.length || 0;
});

const percentageDone = computed(() => {
  return Math.ceil(
    (Number(doneLessons.value) / Number(totalLessons.value)) * 100
  );
});

const { data: currentLesson } = await useAsyncData("currentLesson", () =>
  queryContent("/").where({ _id: course.CurrentLessonId }).findOne()
);
</script>

<template>
  <NuxtLink
    :to="currentLesson?._path"
    class="group flex cursor-pointer items-center gap-3 rounded p-[6px] pr-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
  >
    <div class="h-[48px] min-w-[48px] overflow-hidden rounded">
      <img
        :src="course.image"
        :alt="course.title"
        class="h-full w-full object-cover object-center transition-all group-hover:scale-110"
      />
    </div>
    <div class="flex-1">
      <div class="mb-1 min-w-0 truncate overflow-ellipsis">
        {{ course.title }}
      </div>
      <div
        class="mb-[6px] h-[4px] w-full overflow-hidden rounded-full bg-zinc-200"
      >
        <div
          class="bg-emerald-500 h-full"
          :style="`width:${percentageDone}%;`"
        ></div>
      </div>
      <div class="flex items-center text-[12px] leading-[12px] text-zinc-500">
        <span class="flex-1">{{ doneLessons }}/{{ totalLessons }}</span>
        <!-- <span>{{ timeToComplete }}</span> -->
      </div>
    </div>
  </NuxtLink>
</template>
