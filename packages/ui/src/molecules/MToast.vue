<script setup>
import MToastCard from "../atoms/MToastCard.vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

function removeItem(index) {
  const updatedValue = props.modelValue;
  updatedValue.splice(index, 1);
  emit("update:modelValue", updatedValue);
}
</script>

<template>
  <TransitionGroup
    tag="div"
    class="pointer-events-none fixed left-0 top-0 z-50 flex h-screen w-screen flex-col-reverse items-center p-4"
    name="toast"
  >
    <MToastCard
      v-for="(item, i) in modelValue"
      :key="item"
      :title="item.title"
      :description="item.description"
      :variant="item.variant"
      :actions="item.actions"
      :buttons="item.buttons"
      :time="item.time"
      class="pointer-events-auto mt-2 max-w-[400px]"
      @close="removeItem(i)"
    />
  </TransitionGroup>
</template>

<style>
.toast-move,
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.toast-leave-active {
  position: absolute;
}
</style>
