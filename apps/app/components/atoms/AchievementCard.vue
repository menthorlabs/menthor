<script setup lang="ts">
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
    image: "/app/achievements/map.webp",
  },
  FE_MASTER: {
    title: "",
    description: "",
    image: "/app/achievements/sword.webp",
  },
  BE_MASTER: {
    title: "",
    description: "",
    image: "/app/achievements/bow.webp",
  },
  DESIGN_MASTER: {
    title: "",
    description: "",
    image: "/app/achievements/hammer.webp",
  },
  DEVOPS_MASTER: {
    title: "",
    description: "",
    image: "/app/achievements/shield.webp",
  },
};
</script>

<template>
  <div class="group rounded-md p-4 text-sm">
    <div class="mb-3 aspect-square w-full rounded relative">
      <div
        v-if="disabled"
        class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
      >
        <p
          class="px-[10px] py-[2px] bg-zinc-900/10 font-medium text-zinc-900 text-xs rounded-3xl z-10"
        >
          Não disponível
        </p>
      </div>
      <div
        v-if="!disabled"
        class="absolute w-full h-full left-0 top-0 bg-[linear-gradient(45deg,transparent_25%,rgba(256,256,256,.5)_50%,transparent_75%,transparent_100%)] overflow-hidden bg-[length:200%_200%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat duration-0 ease-in-out transition-[background-position_0s] group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]"
      ></div>
      <nuxt-img
        :src="badges[badge].image"
        alt="Achievement"
        width="400"
        height="400"
        format="webp"
        quality="85"
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
