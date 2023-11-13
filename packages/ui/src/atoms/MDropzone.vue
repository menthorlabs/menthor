<script setup lang="ts">
const {
  text = "Clique aqui ou arraste o arquivo",
  optional = false,
  name = "dropzone-file",
  accept = ".jpg, .jpeg, .png, .pdf",
  multiple = false,
} = defineProps<{
  text?: string;
  optional?: boolean;
  name?: string;
  accept?: string;
  multiple?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const isDragging = ref(false);

type dropzoneFile = File & { loading: boolean; accepted: boolean };

function onInput(event: Event) {
  const allFiles = (event.target as HTMLInputElement).files as FileList;

  const files: File[] = Array.from(allFiles);
  onChange(files as dropzoneFile[]);
}

function onChange(files: dropzoneFile[]) {
  const mappedFiles = Array.from(files).map((e: dropzoneFile) => {
    e.loading = true;
    e.accepted = true;
    return e;
  });

  if (mappedFiles.length <= 0) return;

  if (!multiple) {
    emit("update:modelValue", mappedFiles[0]);
    return;
  }

  emit("update:modelValue", mappedFiles);
}

function dragover(e) {
  e.preventDefault();
  isDragging.value = true;
}

function dragleave() {
  isDragging.value = false;
}

function drop(e) {
  e.preventDefault();
  onChange(e.dataTransfer.files);
  isDragging.value = false;
}
</script>

<template>
  <div class="relative" @drop="drop" @dragover.prevent>
    <div
      v-if="isDragging"
      class="absolute left-0 top-0 z-10 h-full w-full"
      @dragleave="dragleave"
    />
    <label
      :for="name"
      class="flex w-full cursor-pointer flex-col items-center gap-2 rounded border border-dashed border-zinc-300 bg-zinc-50 p-4 hover:bg-zinc-100"
      :class="{ 'drag !border-blue-300 !bg-blue-50': isDragging }"
      @dragover="dragover"
    >
      <font-awesome-icon
        icon="cloud-arrow-up"
        class="text-2xl text-zinc-400 [.drag_&]:text-blue-400"
      />
      <div
        class="text-center text-sm font-medium text-zinc-500 [.drag_&]:text-blue-500"
      >
        {{ text }} <span v-if="optional" class="font-normal">(opcional)</span>
      </div>
      <input
        :id="name"
        :name="name"
        type="file"
        :accept="accept"
        :multiple="multiple"
        class="hidden"
        @input="onInput"
      />
    </label>
  </div>
</template>
