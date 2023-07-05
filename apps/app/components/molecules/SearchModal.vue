<script setup lang="ts">
const searchModalStore = useSearchModalStore();
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
            placeholder="Escreva um comando ou pesquise..."
            class="mb-3 block w-full pt-2 text-base font-medium text-zinc-900 !outline-none placeholder:text-zinc-500"
          />
          <div class="flex items-center">
            <div class="flex items-center gap-2 text-sm text-zinc-700">
              <div
                class="flex h-6 min-w-[24px] items-center justify-center rounded border border-zinc-200 bg-zinc-50 text-zinc-500"
              >
                <font-awesome-icon icon="arrow-up" class="text-sm" />
              </div>
              <div
                class="flex h-6 min-w-[24px] items-center justify-center rounded border border-zinc-200 bg-zinc-50 text-zinc-500"
              >
                <font-awesome-icon icon="arrow-down" class="text-sm" />
              </div>
              <span>para navegar</span>
            </div>
          </div>
        </template>
        Content
      </MModal>
    </Teleport>
  </ClientOnly>
</template>
