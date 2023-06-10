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
  <div class="flex h-screen w-full overflow-hidden">
    <div
      class="flex w-[270px] min-w-[270px] flex-col border-r border-solid border-zinc-200"
    >
      <div class="w-full border-b border-solid border-zinc-200 p-3">
        <LeftMenuItem icon="home" text="Início" />
        <LeftMenuItem icon="magnifying-glass" text="Buscar">
          <span class="text-sm font-semibold text-zinc-500">
            Ctrl <span class="text-zinc-900">K</span>
          </span>
        </LeftMenuItem>
      </div>
      <div class="w-full flex-1 p-3">
        <div
          class="mb-2 flex h-[40px] items-center gap-4 px-4 py-2 text-sm font-medium text-zinc-700"
        >
          <div class="flex h-full w-[20px] items-center justify-center">
            <font-awesome-icon icon="book-bookmark" class="text-lg" />
          </div>
          <div class="flex-1">Seus cursos</div>
        </div>
        <div
          class="scrollbox -ml-3 mb-1 w-[calc(100%_+_1.5rem)] overflow-x-auto"
        >
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
        <LeftMenuCourse />
        <LeftMenuCourse />
        <LeftMenuCourse />
        <LeftMenuCourse />
        <LeftMenuCourse />
        <LeftMenuCourse />
      </div>
    </div>
    <div class="flex-1 overflow-y-auto">
      <div
        class="sticky left-0 top-0 flex h-[56px] w-full items-center px-8 py-2"
      >
        <div class="flex flex-1 items-center gap-2">
          <MIconButton icon="arrow-left" />
          <MIconButton icon="arrow-right" />
        </div>
        <div class="flex items-center gap-2">
          <MIconButton icon="bell" />
          <div
            class="h-[32px] w-[32px] cursor-pointer overflow-hidden rounded-full text-sm text-zinc-700 transition-all hover:scale-110"
          >
            <img
              src="/midjourney/characters/1.png"
              alt="Profile"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
