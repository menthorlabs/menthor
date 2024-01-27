<script setup lang="ts">
useSchemaOrg([
  defineOrganization({
    name: "Menthor",
    logo: "/brand/menthor-icon-dark.svg",
    sameAs: [
      "https://twitter.com/menthorlabs",
      "https://github.com/menthorlabs/menthor",
      "https://www.linkedin.com/company/menthorlabs",
      "https://www.instagram.com/menthorlabs/",
    ],
  }),
  defineWebSite({
    name: "Menthor",
  }),
  defineWebPage(),
]);
</script>

<template>
  <NuxtLayout class="text-zinc-950 bg-white">
    <NuxtPage />
  </NuxtLayout>
</template>
