<script setup lang="ts">
const searchModalStore = useSearchModalStore();

const search = ref(null);

async function searchContent() {
  // const articles = await queryContent("/")
  //   .where({
  //     $or: [{ title: { $regex: `/${String(search.value)}/ig` } }],
  //   })
  //   .find();

  const articles = await queryContent("/")
    .where({
      $or: [{ body: { $regex: `/${String(search.value)}/ig` } }],
    })
    .find();
  console.log(articles);
}
</script>

<template>
  <ClientOnly>
    <Teleport to="#modals">
      <MModal
        v-model="searchModalStore.opened"
        class="w-full max-w-[640px]"
        :closeable="false"
      >
        <template #header>
          <input
            type="search"
            v-model="search"
            @input="searchContent"
            autocomplete="off"
            placeholder="Escreva um comando ou pesquise..."
            class="mb-3 block w-full pt-2 text-base font-medium text-zinc-950 !outline-none placeholder:text-zinc-500"
          />
          <div class="flex items-center text-sm">
            <div class="flex flex-1 items-center gap-2 text-zinc-700">
              <Command icon="arrow-up" />
              <Command icon="arrow-down" />
              <span>para navegar</span>
            </div>
            <div class="flex items-center gap-2">
              <Command text="Esc" />
              <span>para fechar</span>
            </div>
          </div>
        </template>
        <div class="-ml-6 w-[calc(100%_+_3rem)]">
          <h2 class="mb-1 pl-6 text-sm font-medium">Cursos</h2>
          <SearchModalCourseItem
            img="/midjourney/characters/1.png"
            name="dApp com Ethereum"
            description="Crie um app descentralizado com ethereum"
          />
          <SearchModalLessonItem label="Introdução" name="Antes de começar" />
          <h2 class="mb-1 pl-6 pt-4 text-sm font-medium">Comandos</h2>
          <SearchModalCommandItem icon="moon" name="Mudar para tema escuro">
            <Command text="Ctrl" />
            <Command text="A" />
          </SearchModalCommandItem>
        </div>
      </MModal>
    </Teleport>
  </ClientOnly>
</template>
