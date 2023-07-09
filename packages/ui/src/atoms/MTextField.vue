<script setup>
defineOptions({ inheritAttrs: false });
const props = defineProps({
  class: [String, Array, Object],
  label: String,
  required: Boolean,
  rules: Array,
  disabled: Boolean,
});
const modelValue = defineModel();
const error = ref(false);
const errorMessage = ref("");
const formValidator = useFormValidator();
const menthorForm = inject("menthorForm", undefined);
const input = ref(null);

watch(
  () => menthorForm,
  () => {
    checkError();
  },
  { deep: true }
);

function checkError() {
  const validated = formValidator.validate(
    modelValue.value,
    formValidator.allRules(props.required, props.rules)
  );
  error.value = !validated.isValid;
  errorMessage.value = validated.errorMessage;

  if (error.value && input.value) {
    input.value.focus();
  }
}
</script>

<template>
  <!--eslint-disable-next-line vue/no-parsing-error-->
  <div :class="class">
    <label
      :for="$attrs.id"
      class="mb-2 block text-sm font-medium text-zinc-900"
    >
      {{ label }}
    </label>
    <div class="relative">
      <input
        ref="input"
        v-bind="$attrs"
        v-model="modelValue"
        @input="checkError"
        class="block w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-[9px] text-sm text-zinc-900 outline-none outline-offset-0 placeholder:text-zinc-400 hover:bg-zinc-100 focus:bg-zinc-50 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-zinc-300"
        :class="{
          '!bg-zinc-100 pr-6 !text-zinc-700': disabled,
        }"
        :disabled="disabled"
      />
      <font-awesome-icon
        v-if="disabled"
        class="absolute right-[12px] top-[13px] text-sm text-zinc-500"
        icon="lock"
      />
    </div>
    <div v-if="error" class="mt-2 text-sm font-normal text-red-600">
      {{ errorMessage }}
    </div>
  </div>
</template>
