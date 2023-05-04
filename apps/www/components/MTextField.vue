<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
defineProps({
  class: [String, Array, Object],
  label: String,
});
</script>

<template>
  <!--eslint-disable-next-line vue/no-parsing-error-->
  <div :class="class">
    <label
      :for="($attrs.id as string)"
      class="mb-2 block text-sm font-medium text-zinc-900"
    >
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      class="block w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-[9px] text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500"
    />
  </div>
</template>
