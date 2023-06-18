<script setup lang="ts"></script>

<template>
  <main class="relative">
    <div class="mb-10 flex items-center gap-6 px-8">
      <div
        class="h-[160px] w-[160px] min-w-[160px] overflow-hidden rounded shadow-lg"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1661479918394306560/Hmd0j2wL_400x400.jpg"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="flex-1">
        <h1 class="mb-4 text-4xl font-extrabold">Bernardo Simonassi</h1>
        <div class="flex flex-wrap items-center gap-8">
          <StatsCard label="Conquistas" value="1">
            <span class="font-normal text-zinc-400">/???</span>
          </StatsCard>
          <StatsCard label="Cursos completos" value="6">
            <span class="font-normal text-zinc-400">/28</span>
          </StatsCard>
          <StatsCard label="Horas estudadas" value="40">
            <span class="pb-[3px] text-sm font-normal text-zinc-400"
              >horas</span
            >
          </StatsCard>
          <StatsCard label="Posição no ranking" value="4985"></StatsCard>
        </div>
      </div>
    </div>
    <div class="px-8 pb-8">
      <h2 class="mb-4 text-lg font-bold">Suas conquistas</h2>
      <div class="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))]">
        <AchievementCard
          image="/achievements/map.png"
          title="Mapa do Aventureiro"
          description="Seja um dos 1000 primeiros alunos."
        />
        <AchievementCard
          image="/achievements/map.png"
          title="Mapa do Aventureiro"
          description="Seja um dos 1000 primeiros alunos."
          disabled
        />
      </div>
    </div>
  </main>
</template>
