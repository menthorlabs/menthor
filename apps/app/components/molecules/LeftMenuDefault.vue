<script setup lang="ts">
const labels: { name: string }[] = [
  {
    name: "Front-end",
  },
  {
    name: "Back-end",
  },
  {
    name: "Design",
  },
];
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
    <div class="scrollbox -ml-3 mb-1 w-[calc(100%_+_1.5rem)] overflow-x-auto">
      <div class="flex items-center space-x-2">
        <div
          v-for="label in labels"
          :key="label.name"
          class="flex h-8 cursor-pointer items-center whitespace-nowrap rounded-full bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-900 first:ml-3 hover:bg-zinc-200"
        >
          {{ label.name }}
        </div>
      </div>
    </div>
    <LeftMenuCourseItem />
    <LeftMenuCourseItem />
    <LeftMenuCourseItem />
    <LeftMenuCourseItem />
    <LeftMenuCourseItem />
    <LeftMenuCourseItem />
  </div>
</template>
