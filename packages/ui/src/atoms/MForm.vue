<script setup>
const emit = defineEmits(["submit"]);
const watcher = ref(false);
const slots = useSlots();
const formValidator = useFormValidator();

function updateWatcher() {
  watcher.value = !watcher.value;
}

provide("menthorForm", {
  watcher,
});

let allChildrenInputs = [];

function recursivelyFindKeyValue(key, keyValue, list) {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (Array.isArray(item.children) && item.children?.length > 0) {
      recursivelyFindKeyValue(key, keyValue, item.children);
    } else if (Array.isArray(item[key]) && item[key].includes(keyValue)) {
      allChildrenInputs = [...new Set([...allChildrenInputs, ...list])];
    }
  }
}

const validated = computed(() => {
  recursivelyFindKeyValue("dynamicProps", "modelValue", slots.default());

  const hasInvalidInput = !allChildrenInputs.some((e) => {
    if (!formValidator || !formValidator.allRules) return false;
    const value = e.props?.modelValue;
    const required =
      e.props?.required?.length >= 0 || e.props?.required === true;
    const rules = e.props?.rules || [];

    const allRules = formValidator.allRules(required, rules);
    return formValidator?.validate(value, allRules).isValid === false;
  });

  allChildrenInputs = [];
  return hasInvalidInput;
});

function onSubmit() {
  updateWatcher();
  if (validated.value) {
    emit("submit");
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <slot />
  </form>
</template>
