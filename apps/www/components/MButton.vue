<script setup lang="ts">
defineProps({
  text: String,
  color: {
    type: String,
    default: 'primary',
  },
  iconLeft: [String, Array],
  iconRight: [String, Array],
})

const colors = {
  primary: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300',
  secondary: 'bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-300',
}
</script>

<template>
  <button type="button" class="flex cursor-pointer items-center gap-2 rounded-lg border-none px-5 py-2.5 text-sm font-medium focus:ring-4" :class="[colors[color as keyof typeof colors]]">
    <font-awesome-icon v-if="iconLeft" class="text-lg" :icon="iconLeft" />
    <span v-if="text"> {{ text }}</span>
    <font-awesome-icon v-if="iconRight" class="text-lg" :icon="iconRight" />
  </button>
</template>
