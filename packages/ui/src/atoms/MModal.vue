<!-- eslint-disable vue/no-parsing-error -->
<script setup>
defineOptions({ inheritAttrs: false });

// const { icon = "home", variant = "glass" } = defineProps<{
//   icon?: string;
//   variant?: string;
// }>();
</script>

<template>
  <div class="fixed left-0 top-0 z-10 h-full w-full">
    <div class="container flex h-full w-full justify-center overflow-hidden">
      <div
        to="/"
        class="absolute left-0 top-0 h-full w-full cursor-default bg-zinc-300/40 backdrop-blur-sm"
      />

      <div
        :class="$attrs.class"
        class="relative my-auto h-fit overflow-hidden rounded-lg border border-solid border-zinc-300 bg-white p-6 shadow-2xl sm:p-10"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
