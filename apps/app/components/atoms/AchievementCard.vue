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
    title: "",
    description: "",
    image: "/achievements/sword.png",
  },
  BE_MASTER: {
    title: "",
    description: "",
    image: "/achievements/bow.png",
  },
  DESIGN_MASTER: {
    title: "",
    description: "",
    image: "/achievements/hammer.png",
  },
  DEVOPS_MASTER: {
    title: "",
    description: "",
    image: "/achievements/shield.png",
  },
};
</script>

<template>
  <div class="group rounded-md p-4 text-sm">
    <div class="mb-3 aspect-square w-full rounded relative">
      <div
        v-if="!disabled"
        class="absolute w-full h-full left-0 top-0 bg-[linear-gradient(45deg,transparent_25%,rgba(256,256,256,.5)_50%,transparent_75%,transparent_100%)] overflow-hidden bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat duration-0 ease-in-out transition-[background-position_0s] group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]"
      ></div>
      <nuxt-img
        :src="badges[badge].image"
        alt="Achievement"
        width="400"
        height="400"
        class="h-full w-full object-contain object-center"
        :class="{
          grayscale: disabled,
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
