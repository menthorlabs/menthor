<template>
  <div
    class="absolute left-0 top-0 flex h-[90px] w-full justify-center overflow-hidden"
  >
    <div class="relative h-full w-full max-w-[1017px]">
      <div
        class="mask-radial-2 absolute bottom-0 left-0 h-[179px] w-[678px] bg-blue-500/20"
      ></div>
      <div
        class="mask-radial-2 absolute bottom-0 right-0 h-[179px] w-[678px] bg-pink-500/20"
      ></div>
    </div>
  </div>
  <div
    class="sticky left-0 top-0 z-10 flex h-[56px] w-full items-center px-8 py-2"
  >
    <div class="flex flex-1 items-center gap-2">
      <MIconButton icon="arrow-left" />
      <MIconButton icon="arrow-right" />
    </div>
    <div class="flex items-center gap-2">
      <MIconButton icon="bell" />
      <VDropdown
        :distance="6"
        class="h-[32px] w-[32px] cursor-pointer overflow-hidden rounded-full text-sm text-zinc-700 transition-all hover:scale-110"
        placement="bottom-end"
      >
        <img
          src="/midjourney/characters/1.png"
          alt="Profile"
          class="h-full w-full object-cover object-center"
        />
        <template #popper="{ hide }">
          <div class="min-w-[140px] py-1" @click="hide()">
            <NuxtLink to="/profile">
              <DropdownItem icon="circle-user" name="Perfil" />
            </NuxtLink>
            <NuxtLink to="/login">
              <DropdownItem icon="arrow-right-from-bracket" name="Sair" />
            </NuxtLink>
          </div>
        </template>
      </VDropdown>
    </div>
  </div>
</template>
