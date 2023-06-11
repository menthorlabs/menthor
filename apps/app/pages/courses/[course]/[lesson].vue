<script setup>
const { params } = useRoute();
const { data } = await useAsyncData("some-key", () =>
  queryContent("/hello").findOne()
);

// const { data } = await useAsyncData("hello", () =>
//   queryContent(`/${params.course}`)
//     .where({ _path: { $regex: params.lesson } })
//     .findOne()
// );

console.log({ params, data });
</script>

<template>
  <div class="mx-auto max-w-[816px] px-8">
    <ContentRenderer id="nuxt_content" :value="data" />
  </div>
</template>
