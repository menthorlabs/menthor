<template>
  <div class="container pt-4">
    <h1 class="text-4xl font-extrabold mb-4">Suas imagens</h1>
    <div class="flex items-center gap-4 mb-8">
      <MButton
        variant="outline"
        text="Fazer upload"
        icon-left="cloud-arrow-up"
      />
      <div class="space-y-[4px] w-full max-w-[240px] pt-2">
        <div class="rounded-full bg-zinc-200 h-[4px]">
          <div
            class="w-full max-w-[60%] h-full rounded-full bg-emerald-500"
          ></div>
        </div>
        <div class="flex text-zinc-500 text-sm">
          <div class="flex-1">
            Usado: <span class="text-zinc-950 font-medium">5GB</span> de 10GB
          </div>
          <div>50%</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-1">
      <div v-for="i in 16" :key="i">
        <div class="aspect-video w-full overflow-hidden">
          <nuxt-img
            src="/app/midjourney/backgrounds/login.png"
            :quality="85"
            format="webp"
            width="250"
            height="140"
            alt="Roadmap"
            class="h-full w-full object-cover object-center transition-all group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  </div>
</template>
