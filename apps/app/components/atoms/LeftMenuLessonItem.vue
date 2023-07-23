<script setup lang="ts">
const { navigation } = defineProps<{
  navigation: navigationItem;
}>();

const coursesStore = useCoursesStore();

const done = computed(() => {
  return coursesStore.course?.Lessons?.includes(navigation._id);
});

function finishTask() {
  coursesStore.updateCourseLessons(navigation._id);
}
</script>

<template>
  <nuxt-link
    :to="navigation._path"
    class="group flex h-[32px] items-center gap-2 rounded-tr border-l border-zinc-300 px-3 py-1 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"
    :class="{ '!border-l-2 !border-green-600 !text-zinc-950': done }"
    active-class="bg-zinc-100 text-zinc-950 border-zinc-900"
    :title="navigation.title"
  >
    <div class="flex-1 min-w-0 truncate">{{ navigation.title }}</div>
    <div
      class="hidden group-hover:flex"
      v-if="!done && coursesStore.isEnrolled"
    >
      <font-awesome-icon
        @click="finishTask"
        v-tooltip="`Finalizar aula`"
        class="hover:text-zinc-950 transition-all text-zinc-500"
        icon="check"
      />
    </div>
  </nuxt-link>
</template>
