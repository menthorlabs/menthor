<template>
  <main class="font-sans">
    <header class="container flex items-center justify-between">
      <nuxt-img class="h-[28px] w-auto" src="/brand/menthor-logo-dark.svg" height="28" width="155" />
      <div class="flex items-center gap-6">
        <MButton icon-left="fa-brands fa-discord" text="Entre no discord" color="secondary" />
      </div>
    </header>
    <slot />
  </main>
</template>
