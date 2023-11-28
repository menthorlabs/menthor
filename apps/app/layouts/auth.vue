<script setup lang="ts">
onMounted(async () => {
  const sessionStore = useSessionStore();
  await sessionStore.signOut();
  new useSakura("#login_background");
});
</script>

<template>
  <div class="relative flex h-screen w-full justify-center py-20">
    <div
      class="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden"
      id="login_background"
    >
      <div class="mask-radial h-full w-full max-w-[1440px]">
        <nuxt-img
          loading="lazy"
          src="/app/midjourney/backgrounds/login.png"
          class="block h-full w-full object-cover object-left-top"
          alt="Menthor login background"
          width="1440"
          height="1440"
        />
        <div class="absolute left-0 top-0 h-full w-full bg-white/70"></div>
      </div>
    </div>
    <div
      class="relative z-10 my-auto w-full max-w-[480px] rounded-lg sm:border border-slate-200 sm:bg-white p-6 sm:p-10 sm:shadow-2xl"
    >
      <nuxt-img
        loading="lazy"
        src="/app/brand/menthor-icon-dark.svg"
        class="mx-auto mb-8 block h-auto w-[54px]"
        alt="Menthor Icon Dark"
        width="54"
        height="51"
      />
      <slot />
    </div>
  </div>
</template>
