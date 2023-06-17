<script setup></script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <CourseAside />
    <div class="relative flex-1 overflow-y-auto">
      <TopBar />
      <slot />
    </div>
  </div>
</template>
