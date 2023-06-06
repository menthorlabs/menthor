<script setup lang="ts"></script>

<template>
  <div class="grid h-screen w-screen grid-cols-[240px,_1fr]">
    <div class="flex flex-col border-r border-solid border-zinc-200">
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
        <LeftMenuCourse />
      </div>
    </div>
    <div>
      Content
      <slot />
    </div>
  </div>
</template>
