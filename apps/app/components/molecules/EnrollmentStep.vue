<script setup lang="ts">
const {
  title = "Step title",
  description = null,
  active = false,
  done = false,
} = defineProps<{
  title?: string;
  description?: string;
  active?: boolean;
  done?: boolean;
}>();
</script>

<template>
  <div
    class="group relative flex-1 border-l border-zinc-400 pb-8 pl-4 text-sm last:border-l-0"
    :class="{ '!border-zinc-200': !active && !done }"
  >
    <div
      class="absolute -left-[4px] top-0 outline outline-4 outline-zinc-200 h-[7px] w-[7px] rounded-full bg-zinc-900 group-last:-left-[3px]"
      :class="{
        '!bg-zinc-400 !outline-none': !active && !done,
        '!outline-none': done,
      }"
    ></div>
    <div
      class="-translate-y-1 font-medium"
      :class="{ 'text-zinc-500': !active && !done }"
    >
      {{ title }}
    </div>
    <div
      v-if="description"
      class="mb-3 text-zinc-700"
      :class="{ '!text-zinc-500': !active && !done }"
    >
      {{ description }}
    </div>
    <div v-if="active">
      <slot></slot>
    </div>
    <div v-else-if="done">
      <slot name="retry"></slot>
    </div>
  </div>
</template>
