<script setup lang="ts">
onMounted(() => {
  new useSakura("#login_background");
});
</script>

<template>
  <div class="relative flex h-screen w-full justify-center py-20">
    <div
      class="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden"
      id="login_background"
    >
      <div class="mask-radial h-auto max-w-[1440px]">
        <nuxt-img
          loading="lazy"
          src="/midjourney/backgrounds/login.jpg"
          class="block h-full w-full object-cover object-left-top"
          alt="Menthor login background"
          width="1440"
          height="1440"
        />
      </div>
    </div>
    <div
      class="absolute left-0 top-0 h-full w-full bg-white/50 backdrop-blur-sm"
    ></div>
    <div
      class="relative z-10 my-auto w-full max-w-[480px] rounded-lg border border-slate-200 bg-white p-10 shadow-2xl"
    >
      <nuxt-img
        loading="lazy"
        src="/brand/menthor-icon-dark.svg"
        class="mx-auto mb-8 block h-auto w-[54px]"
        alt="Menthor Icon Dark"
        width="54"
        height="51"
      />
      <slot />
    </div>
  </div>
</template>
