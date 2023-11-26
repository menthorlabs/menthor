<script setup lang="ts">
import type { NavItem } from "../../../../node_modules/@nuxt/content/dist/runtime/types";
const { navigation } = defineProps<{
  navigation: NavItem;
}>();

const coursesStore = useCoursesStore();

const done = computed(() => {
  if (!navigation._id) return;
  return coursesStore.course?.Lessons?.includes(navigation._id);
});

function finishTask() {
  if (!navigation._id) return;
  coursesStore.updateCourseLessons(navigation._id);
}
</script>

<template>
  <div
    class="flex h-[32px] items-center gap-2 rounded-tr border-l border-zinc-300 px-3 py-1 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 group-[.is-active]:bg-zinc-100 group-[.is-active]:text-zinc-950 group-[.is-active]:border-zinc-900"
    :class="{ '!border-l-2 !border-green-600 !text-zinc-950': done }"
  >
    <div class="flex-1 min-w-0 truncate">{{ navigation.title }}</div>
    <button
      @click.prevent
      class="hidden group-hover:flex"
      v-if="!done && coursesStore.isEnrolled"
    >
      <UTooltip text="Tooltip example" :popper="{ placement: 'right' }">
        <font-awesome-icon
          @click="finishTask"
          class="hover:text-zinc-950 transition-all text-zinc-500"
          icon="check"
        />
      </UTooltip>
    </button>
  </div>
</template>
