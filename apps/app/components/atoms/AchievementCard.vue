<script setup lang="ts">
type availableBadges =
  | "FIRST_1000"
  | "FE_MASTER"
  | "BE_MASTER"
  | "DESIGN_MASTER"
  | "DEVOPS_MASTER";

const { badge, disabled = false } = defineProps<{
  badge: availableBadges;
  disabled?: boolean;
}>();

type badgeState = {
  title: string;
  description: string;
  image: string;
};

const badges: Record<availableBadges, badgeState> = {
  FIRST_1000: {
    title: "Mapa do Aventureiro",
    description: "Seja um dos 1000 primeiros alunos.",
    image: "/achievements/map.png",
  },
  FE_MASTER: {
    title: "???",
    description: "???",
    image: "/achievements/sword.png",
  },
  BE_MASTER: {
    title: "???",
    description: "???",
    image: "/achievements/bow.png",
  },
  DESIGN_MASTER: {
    title: "???",
    description: "???",
    image: "/achievements/hammer.png",
  },
  DEVOPS_MASTER: {
    title: "???",
    description: "???",
    image: "/achievements/shield.png",
  },
};
</script>

<template>
  <div class="group rounded-md p-4 text-sm transition-all">
    <div class="mb-3 aspect-square w-full rounded">
      <nuxt-img
        :src="badges[badge].image"
        alt="Achievement"
        width="400"
        height="400"
        class="h-full w-full object-contain object-center"
        :class="{
          grayscale: disabled,
          'transition-all group-hover:scale-110': !disabled,
        }"
      />
    </div>
    <h2 class="mb-1 font-medium" :class="{ 'text-zinc-500': disabled }">
      {{ badges[badge].title }}
    </h2>
    <p
      class="line-clamp-2 min-w-0 text-zinc-700"
      :class="{ '!text-zinc-400': disabled }"
    >
      {{ badges[badge].description }}
    </p>
  </div>
</template>
