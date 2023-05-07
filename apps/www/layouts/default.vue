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
</script>

<template>
  <main class="font-sans">
    <header class="container flex items-center justify-between py-[11.5px]">
      <nuxt-img
        loading="lazy"
        class="h-[28px] w-auto"
        src="/brand/menthor-logo-dark.svg"
        height="28"
        width="155"
      />
      <div class="flex items-center gap-6">
        <nuxt-link to="https://discord.gg/8BCByyXxq8" target="_blank">
          <MButton
            icon-left="fa-brands fa-discord"
            text="Entre no discord"
            variant="secondary"
            size="sm"
          />
        </nuxt-link>
        <nuxt-link
          to="https://github.com/menthorlabs/menthor"
          target="_blank"
          class="group flex cursor-pointer items-center gap-2 text-zinc-700 no-underline hover:text-zinc-900"
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
    <footer class="border-t border-solid border-zinc-200 py-10">
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
      <div class="flex items-center justify-center gap-8">
        <nuxt-link
          to="#"
          target="_blank"
          class="relative text-sm font-normal before:absolute before:-right-[16px] before:top-0 before:h-full before:w-[1px] before:bg-zinc-200 hover:underline"
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
