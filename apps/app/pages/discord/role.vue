<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
const config = useRuntimeConfig();
const route = useRoute();
const error = ref(false);
const discordStore = useDiscordStore();

async function assignDiscordRole() {
  const discordRoleId = localStorage.getItem("m-discord-role");
  try {
    await discordStore.requestRole({
      roleId: discordRoleId as string,
      code: String(route.query.code),
      redirectUri: `${config.public.appUrl}discord/role`,
    });
    window.close();
  } catch (e) {
    error.value = true;
  }
}

onMounted(() => {
  assignDiscordRole();
});
</script>

<template>
  <div class="flex justify-center items-center h-full w-full">
    <MSpinner class="h-8 w-8 border-zinc-400" v-if="!error" />
    <p v-else class="text-sm text-zinc-500">
      Erro na integração. Feche essa aba e tente novamente.
    </p>
  </div>
</template>
