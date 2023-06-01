<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
defineProps({
  class: [String, Array, Object],
  label: String,
  modelValue: [String, Number],
});
const emit = defineEmits(["update:modelValue"]);

function onInput($event: Event) {
  const target = $event.target as HTMLTextAreaElement;
  emit("update:modelValue", target.value);
  //this.checkError();
}
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
      :value="modelValue"
      @input="onInput"
      class="block w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-[9px] text-sm text-zinc-900 outline-none outline-offset-0 placeholder:text-zinc-400 hover:bg-zinc-100 focus:bg-zinc-50 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-zinc-300"
    />
  </div>
</template>
