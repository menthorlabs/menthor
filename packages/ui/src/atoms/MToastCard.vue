<script setup>
const props = defineProps({
  title: String,
  description: String,
  variant: {
    type: String,
    default: "danger",
  },
  buttons: Array,
  time: Number,
});
const emit = defineEmits(["close"]);

const variants = {
  success: "bg-white",
  danger: "bg-white",
};

function closeWhenTimeExpires() {
  if (props.time > 0) {
    setTimeout(() => {
      emit("close");
    }, props.time);
  }
}

closeWhenTimeExpires();
</script>

<template>
  <div
    class="relative w-full rounded-md border border-zinc-200 p-4 text-zinc-700 shadow-sm"
    :class="[variants[variant]]"
    role="alert"
  >
    <MIconButton
      class="absolute right-[8px] top-[10px]"
      icon="xmark"
      variant="inherit"
      @click="$emit('close')"
    />
    <div class="flex items-center">
      <font-awesome-icon
        v-if="variant === 'success'"
        icon="circle-check"
        class="mr-2 h-[16px] w-[16px] text-green-600"
      />
      <font-awesome-icon
        v-if="variant === 'danger'"
        icon="circle-xmark"
        class="mr-2 h-[16px] w-[16px] text-red-600"
      />
      <div class="pr-[40px] text-sm font-semibold">{{ title }}</div>
    </div>
    <p v-if="description" class="mb-2 mt-2 text-sm font-normal">
      {{ description }}
    </p>
    <div
      v-if="buttons?.length > 0"
      class="actions mt-2 flex flex-wrap items-center"
    >
      <MButton
        v-for="button in buttons"
        :variant="variant"
        :text="button.text"
        @click="button.click"
      />
    </div>
  </div>
</template>
