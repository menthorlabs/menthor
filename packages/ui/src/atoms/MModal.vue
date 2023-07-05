<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
defineOptions({ inheritAttrs: false });
defineEmits(["confirm", "close", "update:modelValue"]);

const {
  footer = false,
  modelValue = false,
  closeable = true,
} = defineProps<{
  footer?: boolean;
  modelValue: boolean;
  closeable?: boolean;
}>();
</script>

<template>
  <Transition :duration="550" name="nested">
    <div class="fixed left-0 top-0 z-10 h-full w-full" v-if="modelValue">
      <div class="container flex h-full w-full justify-center overflow-hidden">
        <div
          class="absolute left-0 top-0 h-full w-full cursor-default bg-zinc-300/40 backdrop-blur-sm"
          @click="$emit('update:modelValue', false)"
        />

        <div
          v-if="modelValue"
          :class="$attrs.class"
          class="inner relative my-auto h-fit overflow-hidden rounded-lg border border-solid border-zinc-300 bg-white shadow-2xl"
        >
          <div class="flex border-b border-zinc-200 bg-white px-6 py-4">
            <div class="min-w-0 flex-1">
              <div class="text-base font-medium text-zinc-900">
                <slot name="header"></slot>
              </div>
              <div
                v-if="$slots['description']"
                class="mt-1 text-sm font-normal text-zinc-700"
              >
                <slot name="description"></slot>
              </div>
            </div>
            <MIconButton
              v-if="closeable"
              icon="times"
              @click="$emit('update:modelValue', false)"
            />
          </div>
          <div class="p-6">
            <slot></slot>
          </div>
          <div
            class="flex items-center justify-end gap-3 px-6 pb-6"
            v-if="footer"
          >
            <slot name="footer">
              <MButton
                variant="outline"
                text="Cancelar"
                @click="$emit('update:modelValue', false)"
              />
              <MButton
                variant="primary"
                text="Confirmar"
                @click="$emit('confirm')"
              />
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.15s;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.1s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.15s;
}

.nested-enter-active .inner {
  transition-delay: 0.1s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateY(30px);
  opacity: 0.001;
}
</style>
