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

function onInput(event: Event) {
  const files = (event.target as HTMLInputElement).files;
  setProfileImage(files ? files[0] : null);
}

async function setProfileImage(file: File | null) {
  try {
    loading.value = true;
    await userStore.setProfileImage(file);
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
            <label
              for="profile_picture"
              class="group block h-[80px] w-[80px] min-w-[80px] cursor-pointer overflow-hidden rounded"
            >
              <img
                :src="userStore.user?.profileImageUrl"
                alt="Course image"
                class="h-full w-full object-cover object-center transition-all group-hover:scale-110"
              />
              <input
                ref="pictureInput"
                id="profile_picture"
                name="profile_picture"
                type="file"
                accept="image/*"
                class="hidden"
                @input="onInput"
              />
            </label>
            <div class="min-w-0 flex-1">
              <div class="text-xl font-bold">
                {{ userStore.user?.fullName || "Sem nome" }}
              </div>
              <p class="min-w-0 truncate text-base font-normal text-zinc-700">
                {{ userStore.user?.primaryEmailAddress.emailAddress }}
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
              :rules="['required']"
            />
          </div>
          <MTextField
            disabled
            placeholder="Email"
            label="Email"
            v-model="userStore.user.primaryEmailAddress.emailAddress"
            required
            :rules="['email']"
          />
          <!-- <MTextField placeholder="Link de perfil" label="Link de perfil" /> -->
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
