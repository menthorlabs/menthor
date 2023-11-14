<script setup lang="ts">
import { Color } from "colorthief";

const router = useRouter();
const sessionStore = useSessionStore();
const userStore = useUserStore();
const defaultAsideStore = useDefaultAsideStore();
const shadowStore = useShadowStore();

const shadowGenerator = (color: Array<Color>): string => {
  return `radial-gradient(50% 50% at 50% 50%, rgba(${color[0][0]}, ${color[0][1]}, ${color[0][2]}, 0.2) 0%, rgba(${color[0][0]}, ${color[0][1]}, ${color[0][2]}, 0) 100%)`;
};
</script>

<template>
  <div
    class="absolute left-0 top-0 flex h-[90px] w-full justify-center overflow-hidden pointer-events-none"
    v-if="shadowStore.primaryColors && shadowStore.secondaryColors"
  >
    <div class="relative h-full w-full max-w-[1017px]">
      <div
        class="absolute bottom-0 left-0 h-[179px] w-[678px]"
        :style="{
          background: shadowGenerator(shadowStore.primaryColors),
        }"
      ></div>
      <div
        class="absolute bottom-0 right-0 h-[179px] w-[678px]"
        :style="{
          background: shadowGenerator(shadowStore.secondaryColors),
        }"
      ></div>
    </div>
  </div>
  <div
    class="sticky left-0 top-0 z-10 flex h-[56px] w-full items-center px-4 sm:px-8 py-2"
  >
    <div class="flex flex-1 items-center gap-2">
      <MIconButton
        class="md:hidden"
        @click="defaultAsideStore.opened = !defaultAsideStore.opened"
        icon="bars"
        variant="glass"
      />
      <MIconButton @click="router.back()" icon="arrow-left" variant="glass" />
      <MIconButton
        @click="router.forward()"
        icon="arrow-right"
        variant="glass"
      />
    </div>
    <div class="flex items-center gap-2">
      <!-- <MIconButton icon="bell" variant="glass" /> -->
      <div v-if="sessionStore.isConnected()">
        <VDropdown
          :distance="6"
          class="h-[32px] w-[32px] cursor-pointer overflow-hidden rounded-full text-sm text-zinc-700 transition-all hover:scale-110"
          placement="bottom-end"
        >
          <img
            :src="userStore.user?.profileImageUrl"
            alt="Profile"
            class="h-full w-full object-cover object-center"
          />
          <template #popper="{ hide }">
            <div class="min-w-[140px] py-1" @click="hide()">
              <NuxtLink to="/profile">
                <DropdownItem icon="circle-user" name="Perfil" />
              </NuxtLink>
              <NuxtLink
                to="/creators/images"
                v-if="userStore.user?.publicMetadata?.isCreator"
              >
                <DropdownItem icon="star" name="Creators" />
              </NuxtLink>
              <NuxtLink to="/sign-out">
                <DropdownItem icon="arrow-right-from-bracket" name="Sair" />
              </NuxtLink>
            </div>
          </template>
        </VDropdown>
      </div>
      <div v-else>
        <NuxtLink to="/sign-in">
          <MButton text="Fazer login" variant="outline" size="sm" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
