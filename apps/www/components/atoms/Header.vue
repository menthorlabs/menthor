<script setup lang="ts">
import { useScroll } from "@vueuse/core";

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

const route = useRoute();

const menuOpened = defineModel();

watch(
  () => route.fullPath,
  () => {
    menuOpened.value = false;
  }
);

const arrivedState = ref({ top: true });

onMounted(() => {
  const scroll = useScroll(document);
  arrivedState.value = scroll.arrivedState;
});
</script>

<template>
  <header
    class="top-0 z-10 blur-performance w-full"
    :class="{
      'fixed h-screen bg-white md:sticky md:h-fit md:bg-inherit md:backdrop-blur-none':
        menuOpened,
      sticky: !menuOpened,
      'border-b border-zinc-100 bg-white': !arrivedState.top,
    }"
  >
    <div
      class="md:container flex w-full flex-col items-center justify-between md:flex-row md:py-[11.5px]"
    >
      <div
        class="relative flex w-full justify-between px-4 py-[16px] md:w-fit md:px-0 md:py-0"
      >
        <nuxt-link to="/">
          <nuxt-img
            loading="lazy"
            class="h-[28px] w-auto"
            src="/brand/menthor-logo-dark.svg"
            alt="Menthor logo"
            height="28"
            width="155"
          />
        </nuxt-link>
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
        <div
          class="border-t border-b border-zinc-300 py-2 md:py-0 md:!border-none md:flex items-center gap-1"
        >
          <nuxt-link to="/creators">
            <AtomsHeaderLink title="Escreva cursos" />
          </nuxt-link>

          <!-- <AtomsHeaderLink title="Documentação" /> -->

          <VDropdown :distance="6" placement="bottom">
            <AtomsHeaderLink title="Comunidade" chevron />
            <template #popper="{ hide }">
              <div @click="hide()" class="py-2">
                <nuxt-link
                  external
                  target="_blank"
                  to="https://discord.gg/8BCByyXxq8"
                >
                  <AtomsHeaderCardLink
                    icon="fab fa-discord"
                    title="Discord"
                    description="Junte-se a mais de 2000 alunos."
                  />
                </nuxt-link>
                <nuxt-link
                  external
                  target="_blank"
                  to="https://github.com/menthorlabs/menthor"
                >
                  <AtomsHeaderCardLink
                    icon="fab fa-github"
                    title="GitHub"
                    description="Deixe uma estrela e apoie-nos."
                  />
                </nuxt-link>
                <nuxt-link
                  external
                  target="_blank"
                  to="https://pixmeacoffee.vercel.app/menthor"
                >
                  <AtomsHeaderCardLink
                    icon="hand-holding-dollar"
                    title="Doação"
                    description="Seja um doador e divulgue sua marca."
                  />
                </nuxt-link>
              </div>
            </template>
          </VDropdown>
        </div>

        <nuxt-link
          to="https://github.com/menthorlabs/menthor"
          target="_blank"
          external
          class="group flex w-full h-[37px] p-2 cursor-pointer items-center justify-center gap-2 text-zinc-700 no-underline hover:text-zinc-900 md:w-fit"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="text-xl" />
          <span class="text-sm font-medium">{{
            gitHub?.items[0].stargazers_count
          }}</span>
        </nuxt-link>
        <nuxt-link
          class="block"
          :to="`${$config.public.appUrl}sign-in?utm_source=landing_page`"
        >
          <MButton
            icon-right="arrow-right"
            text="Acesse agora"
            variant="secondary"
            size="sm"
            class="w-full md:w-fit"
          />
        </nuxt-link>
      </div>
    </div>
  </header>
</template>
