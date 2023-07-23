<script setup lang="ts">
const userStore = useUserStore();
onMounted(() => {
  userStore.setUser();
});

function openProfileModal() {
  userStore.user ? (userStore.modalOpened = true) : null;
}
</script>

<template>
  <main class="relative">
    <ProfileModal v-if="userStore.user" />
    <div class="mb-10 flex items-center gap-6 px-8">
      <div
        class="group h-[160px] w-[160px] min-w-[160px] cursor-pointer overflow-hidden rounded shadow-lg"
        @click="openProfileModal"
      >
        <img
          :src="userStore.user?.profileImageUrl"
          class="h-full w-full object-cover object-center transition-all group-hover:scale-110"
        />
      </div>
      <div class="flex-1">
        <h1
          class="mb-4 cursor-pointer text-4xl font-extrabold hover:text-zinc-700"
          @click="openProfileModal"
        >
          {{ userStore.user?.fullName || "Sem nome" }}
        </h1>
        <div class="flex flex-wrap items-center gap-8">
          <StatsCard label="Conquistas" :value="userStore.badges?.length || 0">
            <span class="font-normal text-zinc-400">/???</span>
          </StatsCard>
          <StatsCard label="Cursos completos" value="6">
            <span class="font-normal text-zinc-400">/28</span>
          </StatsCard>
          <!-- <StatsCard label="Horas estudadas" value="40">
            <span class="pb-[3px] text-sm font-normal text-zinc-400"
              >horas</span
            >
          </StatsCard>
          <StatsCard label="Posição no ranking" value="4985"></StatsCard> -->
        </div>
      </div>
    </div>
    <div class="px-8 pb-8">
      <h2 class="mb-4 text-lg font-bold">Suas conquistas</h2>
      <div class="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))]">
        <AchievementCard
          v-for="badge in userStore.badges"
          :key="badge"
          :badge="badge"
        />
        <AchievementCard
          v-for="badge in [
            'FE_MASTER',
            'BE_MASTER',
            'DESIGN_MASTER',
            'DEVOPS_MASTER',
          ]"
          :key="badge"
          disabled
          :badge="(badge as 'FIRST_1000' | 'FE_MASTER' | 'BE_MASTER' | 'DESIGN_MASTER' | 'DEVOPS_MASTER')"
        />
      </div>
    </div>
  </main>
</template>
