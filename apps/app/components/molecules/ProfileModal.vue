<script setup lang="ts">
const userStore = useUserStore();
const loading = ref(false);
const toast: { error: Function } | undefined = inject("toast");
onMounted(() => {
  userStore.setUser();
});

async function updateUser() {
  try {
    loading.value = true;
    await userStore.updateUser();
  } catch (e) {
    toast?.error(e);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <ClientOnly>
    <Teleport to="#modals">
      <MModal v-model="userStore.modalOpened" class="w-full max-w-[480px]">
        <template #header>
          <div class="flex items-center gap-4">
            <div class="h-[80px] min-w-[80px] overflow-hidden rounded">
              <img
                src="/midjourney/characters/1.png"
                alt="Course image"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div class="text-xl font-bold">Bernardo Simonassi</div>
              <p class="text-base font-normal text-zinc-700">
                bernardosimonassi@hotmail.com
              </p>
            </div>
          </div>
        </template>
        <MForm @submit="updateUser" class="space-y-4" v-if="userStore?.user">
          <div class="grid grid-cols-2 gap-4">
            <MTextField
              placeholder="Nome"
              label="Nome"
              v-model="userStore.user.firstName"
              required
            />
            <MTextField
              placeholder="Sobrenome"
              label="Sobrenome"
              v-model="userStore.user.lastName"
              required
            />
          </div>
          <MTextField
            placeholder="Email"
            label="Email"
            v-model="userStore.user.primaryEmailAddress.emailAddress"
            required
            :rules="['email']"
          />
          <MTextField placeholder="Link de perfil" label="Link de perfil" />
          <div class="flex items-center justify-end gap-3">
            <MButton
              variant="outline"
              text="Cancelar"
              @click="userStore.modalOpened = false"
            />
            <MButton
              variant="primary"
              text="Confirmar"
              type="submit"
              :loading="loading"
            />
          </div>
        </MForm>
      </MModal>
    </Teleport>
  </ClientOnly>
</template>
