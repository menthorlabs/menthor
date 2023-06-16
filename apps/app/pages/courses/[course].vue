<script setup>
const api = inject("api");
const { params } = useRoute();
const router = useRouter();
const { data, error } = await useAsyncData("some-key", () =>
  api("/course/content", { query: { name: params.course } })
);

if (data.value === null || error.value) {
  router.push("/404");
}

// const { data } = await useAsyncData("hello", () =>
//   queryContent(`/${params.course}`)
//     .where({ _path: { $regex: params.lesson } })
//     .findOne()
// );

const course = data.value?.pt_br;
let lesson = null;

console.log({ data, course });

if (course) {
  Object.keys(course).forEach((key) => {
    const courseObjectList = course[key];
    const lessonKeyMatchWithPath = Object.keys(courseObjectList).find(
      (innerKey) => {
        const courseValue = courseObjectList[innerKey];
        return courseValue.path === params.lesson;
      }
    );
    lesson = courseObjectList[lessonKeyMatchWithPath];
  });
}
</script>

<template>
  <div>
    <div class="mb-10 flex items-center gap-6 px-8">
      <div
        class="h-[160px] w-[160px] min-w-[160px] overflow-hidden rounded shadow-lg"
      >
        <img
          src="/midjourney/characters/2.png"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="flex-1">
        <div
          class="mb-2 w-fit rounded-full bg-zinc-900 px-3 py-[2px] text-xs font-medium text-white"
        >
          + 60 mil alunos
        </div>
        <h1 class="mb-3 text-4xl font-extrabold">
          {{ params.course }}
        </h1>
        <div class="flex items-center gap-2">
          <AppIconButton />
          <AppIconButton />
          <AppIconButton />
          <AppIconButton />
        </div>
      </div>
    </div>
    <NuxtPage :lesson="lesson" />
  </div>
</template>
