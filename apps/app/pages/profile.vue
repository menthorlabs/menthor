<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

useSeoMeta({
  title: "Seu perfil",
});

const userStore = useUserStore();

function openProfileModal() {
  userStore.user ? (userStore.modalOpened = true) : null;
}
</script>

<template>
  <main class="relative">
    <ProfileModal v-if="userStore.user" />
    <div class="mb-10 flex flex-wrap items-center gap-6 px-4 sm:px-8">
      <div
        class="group h-[160px] w-[160px] min-w-[160px] cursor-pointer overflow-hidden rounded shadow-lg relative"
        @click="openProfileModal"
      >
        <div
          class="absolute bg-zinc-900 opacity-50 z-10 w-full h-full flex justify-center items-center invisible group-hover:visible"
        >
          <font-awesome-icon icon="edit" class="text-lg text-white" />
        </div>
        <img
          :src="userStore.user?.profileImageUrl"
          class="h-full w-full object-cover object-center transition-all group-hover:scale-110"
        />
      </div>
      <div class="flex-1">
        <div class="group flex items-center mb-4 gap-2">
          <h1
            class="cursor-pointer text-4xl font-extrabold hover:text-zinc-700"
            @click="openProfileModal"
          >
            {{ userStore.user?.fullName || "Sem nome" }}
          </h1>
          <font-awesome-icon
            icon="edit"
            class="text-base text-zinc-500 invisible group-hover:visible"
          />
        </div>
        <div class="flex flex-wrap items-center gap-8">
          <StatsCard
            label="Conquistas"
            :value="userStore.badges?.length || 0"
          />
          <!-- <StatsCard label="Cursos completos" value="6">
            <span class="font-normal text-zinc-400">/28</span>
          </StatsCard> -->
        </div>
      </div>
    </div>
    <div class="px-4 sm:px-8 pb-8">
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
          :badge="badge as availableBadges"
        />
      </div>
    </div>
  </main>
</template>
