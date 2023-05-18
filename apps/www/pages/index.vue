<script setup>
definePageMeta({
  title: "Plataforma gratuita e open-source de ensino de programação",
});
</script>

<template>
  <LazyHomeHero />
  <LazyHomeHowItWorks
    :transition="{
      name: 'bounce',
      mode: 'out-in',
    }"
  />
  <LazyMDiv />
  <LazyHomeWhoIsItFor />
  <LazyMDiv />
  <LazyHomeWhyUs />
  <LazyHomeAreYouReady />
  <LazyNuxtPage />
</template>
