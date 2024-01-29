<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from "ufo";

const {
  src = "",
  alt = "",
  width = "undefined",
  height = "undefined",
} = defineProps<{
  src?: string;
  alt?: string;
  width?: string | number | undefined;
  height?: string | number | undefined;
}>();

const refinedSrc = computed(() => {
  if (src?.startsWith("/") && !src.startsWith("//")) {
    const _base = withLeadingSlash(
      withTrailingSlash(useRuntimeConfig().app.baseURL)
    );
    if (_base !== "/" && !src.startsWith(_base)) {
      return joinURL(_base, src);
    }
  }
  return src;
});
</script>

<template>
  <nuxt-link external target="_blank" :to="refinedSrc">
    <nuxt-img
      format="webp"
      quality="80"
      :src="refinedSrc"
      :alt="alt"
      :width="width"
      :height="height"
      densities="x1 x1"
    />
  </nuxt-link>
</template>
