<script setup lang="ts">
const router = useRouter();
const sessionStore = useSessionStore();
const userStore = useUserStore();
const defaultAsideStore = useDefaultAsideStore();
</script>

<template>
  <div
    class="absolute left-0 top-0 flex h-[90px] w-full justify-center overflow-hidden pointer-events-none"
  >
    <div class="relative h-full w-full max-w-[1017px]">
      <div
        class="bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(236,_72,_153,_0.2)_0%,_rgba(236,_72,_153,_0)_100%)] absolute bottom-0 left-0 h-[179px] w-[678px]"
      ></div>
      <div
        class="bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(37,_99,_235,_0.2)_0%,_rgba(28,_100,_242,_0)_100%)] absolute bottom-0 right-0 h-[179px] w-[678px]"
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
        <UPopover :popper="{ placement: 'bottom-end' }">
          <div
            class="h-[32px] w-[32px] cursor-pointer overflow-hidden rounded-full text-sm text-zinc-700 transition-all hover:scale-110"
          >
            <img
              :src="userStore.user?.profileImageUrl"
              alt="Profile"
              class="h-full w-full object-cover object-center"
            />
          </div>

          <template #panel>
            <div class="min-w-[140px] py-1">
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
        </UPopover>
      </div>
      <div v-else>
        <NuxtLink to="/sign-in">
          <MButton text="Fazer login" variant="outline" size="sm" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
