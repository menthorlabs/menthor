<script setup lang="ts">
interface Item {
  stargazers_count: number;
  forks_count: number;
}

interface GitHubRepository {
  items: Item[];
}
const { data: gitHub } = await useFetch<GitHubRepository>(
  "https://api.github.com/search/repositories?q=menthorlabs/menthor"
);

const menuOpened = ref<boolean>(false);
</script>

<template>
  <main class="font-sans" :class="{ 'mt-[60px] md:mt-0': menuOpened }">
    <header
      class="top-0 z-10 flex w-full flex-col items-center justify-between md:container md:flex-row md:py-[11.5px]"
      :class="{
        'fixed h-screen bg-zinc-300/40 backdrop-blur-sm md:sticky md:h-fit md:bg-inherit md:backdrop-blur-none':
          menuOpened,
        sticky: !menuOpened,
      }"
    >
      <div
        class="relative flex w-full justify-between px-4 py-[16px] md:w-fit md:px-0 md:py-0"
      >
        <nuxt-img
          loading="lazy"
          class="h-[28px] w-auto"
          src="/brand/menthor-logo-dark.svg"
          height="28"
          width="155"
        />
        <div
          class="absolute right-0 top-0 flex h-full w-[60px] cursor-pointer items-center justify-center md:hidden"
          @click="menuOpened = !menuOpened"
        >
          <font-awesome-icon v-show="!menuOpened" icon="bars" class="text-xl" />
          <font-awesome-icon v-show="menuOpened" icon="times" class="text-xl" />
        </div>
      </div>
      <div
        class="w-full flex-1 gap-6 space-y-4 p-4 md:flex md:h-fit md:items-center md:justify-end md:space-y-0 md:p-0"
        :class="{ block: menuOpened, hidden: !menuOpened }"
      >
        <nuxt-link to="https://discord.gg/8BCByyXxq8" target="_blank">
          <MButton
            icon-left="fa-brands fa-discord"
            text="Entre no discord"
            variant="secondary"
            size="sm"
            class="w-full md:w-fit"
          />
        </nuxt-link>
        <nuxt-link
          to="https://github.com/menthorlabs/menthor"
          target="_blank"
          class="group flex w-full cursor-pointer items-center justify-center gap-2 text-zinc-700 no-underline hover:text-zinc-900 md:w-fit"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="text-xl" />
          <div>
            <div class="text-[13px]">menthorlabs/menthor</div>
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-1 text-xs">
                <font-awesome-icon icon="star" />
                <span>{{ gitHub?.items[0].stargazers_count }}</span>
              </div>
              <div
                class="flex items-center gap-1 text-xs text-zinc-600 group-hover:text-zinc-800"
              >
                <font-awesome-icon icon="code-fork" />
                <span>{{ gitHub?.items[0].forks_count }}</span>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </header>
    <slot />
    <footer class="container border-t border-solid border-zinc-200 py-10">
      <nuxt-img
        loading="lazy"
        class="mx-auto mb-6 block h-[28px] w-auto"
        src="/brand/menthor-logo-dark.svg"
        height="28"
        width="155"
      />
      <div class="mb-10 text-center text-sm font-normal text-zinc-500">
        © Copyright {{ new Date().getFullYear() }} Menthor. Todos os direitos
        reservados.
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <nuxt-link
          to="#"
          target="_blank"
          class="relative text-sm font-normal before:absolute before:-right-[16px] before:top-0 before:hidden before:h-full before:w-[1px] before:bg-zinc-200 hover:underline md:before:block"
        >
          Políticas de Privacidade
        </nuxt-link>
        <nuxt-link
          to="#"
          target="_blank"
          class="text-sm font-normal hover:underline"
        >
          Histórico de Atualizações
        </nuxt-link>
      </div>
    </footer>
  </main>
</template>
