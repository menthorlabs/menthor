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
    class="relative w-full rounded-md p-4 text-white shadow-sm bg-zinc-900"
    :class="[variants[variant]]"
    role="alert"
  >
    <MIconButton
      class="absolute right-[8px] top-[10px]"
      icon="xmark"
      @click="$emit('close')"
    />
    <div class="space-y-2">
      <div class="flex items-center gap-4">
        <font-awesome-icon
          v-if="variant === 'success'"
          icon="circle-check"
          class="h-[16px] w-[16px] text-green-600"
        />
        <font-awesome-icon
          v-if="variant === 'danger'"
          icon="circle-xmark"
          class="h-[16px] w-[16px] text-red-600"
        />
        <div class="pr-[40px] text-sm font-medium flex-1">{{ title }}</div>
      </div>
      <p v-if="description" class="text-sm font-normal text-zinc-400">
        {{ description }}
      </p>
      <div
        v-if="buttons?.length > 0"
        class="actions flex flex-wrap items-center"
      >
        <MButton
          v-for="button in buttons"
          :variant="variant"
          :text="button.text"
          @click="button.click"
        />
      </div>
    </div>
  </div>
</template>
