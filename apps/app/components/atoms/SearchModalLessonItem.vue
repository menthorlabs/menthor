<script setup lang="ts">
const {
  label = "Lesson label",
  name = "Lesson name",
  plainText = "",
  searchText = "",
} = defineProps<{
  label?: string;
  name?: string;
  plainText?: string;
  searchText?: string | null;
}>();

const contentText = computed(() => {
  const parsedText = plainText.replace(/[\r\n]/gm, " ");
  const regex = new RegExp(`.{20}(?:${searchText}).{20}`, "gi");
  const matchedText = parsedText.match(regex);

  return matchedText ? matchedText[0] : "";
});
</script>

<template>
  <div
    class="group flex cursor-pointer items-center gap-3 border-l-2 py-2 pl-[38px] pr-6 hover:border-zinc-700 hover:bg-zinc-100"
  >
    <div
      class="flex h-[34px] w-[34px] items-center justify-center rounded border border-zinc-200 bg-zinc-50"
    >
      <font-awesome-icon
        icon="book-bookmark"
        class="text-base text-zinc-500 group-hover:text-zinc-950"
      />
    </div>
    <div class="text-sm font-normal">
      <div>
        <span class="text-zinc-700">{{ label }}:</span>
        {{ name }}
      </div>
      <div class="text-xs text-zinc-500" v-if="contentText">
        ... {{ contentText }} ...
      </div>
    </div>
  </div>
</template>
