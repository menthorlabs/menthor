<template>
  <main class="font-sans">
    <header class="container flex items-center justify-between py-[11.5px]">
      <nuxt-img
        class="h-[28px] w-auto"
        src="/brand/menthor-logo-dark.svg"
        height="28"
        width="155"
      />
      <div class="flex items-center gap-6">
        <MButton
          icon-left="fa-brands fa-discord"
          text="Entre no discord"
          variant="secondary"
          size="sm"
        />
        <a
          href="https://github.com/menthor-io/menthor"
          target="_blank"
          rel="noopener"
          class="group flex cursor-pointer items-center gap-2 text-zinc-700 no-underline hover:text-zinc-900"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="text-xl" />
          <div class="space-y-1">
            <div class="text-[13px]">menthor-io/menthor</div>
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-1 text-xs">
                <font-awesome-icon icon="star" />
                <span>0</span>
              </div>
              <div
                class="flex items-center gap-1 text-xs text-zinc-600 group-hover:text-zinc-800"
              >
                <font-awesome-icon icon="code-fork" />
                <span>0</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </header>
    <slot />
  </main>
</template>
