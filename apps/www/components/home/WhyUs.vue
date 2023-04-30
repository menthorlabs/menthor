<template>
  <section id="why_us" class="my-32">
    <div class="container">
      <h2 class="mx-auto mb-6 max-w-[664px] text-center text-4xl font-bold">
        Porque a menthor?
      </h2>
      <p class="mx-auto mb-10 max-w-[664px] text-center text-lg text-zinc-700">
        Nós acreditamos que todo tipo de ensino deve ser gratuito e queremos
        fornecer a melhor experiência de ensino para nossos alunos.
      </p>
      <div class="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-6">
        <div>
          <div
            class="mb-6 overflow-hidden rounded-lg border border-solid border-zinc-200 px-8 pb-4 pt-10 text-3xl font-semibold"
          >
            <h3>Gratuito para</h3>
            <p class="-translate-x-[300px] text-zinc-400">
              eeeeeeeeeeeeeeeeee<strong class="font-semibold text-zinc-900"
                >sempre</strong
              >eeeeeeeeeeeeeeeeeeee
            </p>
            <p class="-translate-x-[180px] text-zinc-400">
              eeeeeeeeeeeeeeeeee<strong class="font-semibold text-zinc-900"
                >sempre</strong
              >eeeeeeeeeeeeeeeeeeee
            </p>
            <p class="-translate-x-[260px] text-zinc-400">
              eeeeeeeeeeeeeeeeee<strong class="font-semibold text-zinc-900"
                >sempre</strong
              >eeeeeeeeeeeeeeeeeeee
            </p>
          </div>
          <div
            class="overflow-hidden rounded-lg border border-solid border-zinc-200 px-8 pb-6 pt-10 text-3xl font-semibold"
          >
            <h3 class="mb-6">Tecnologias modernas</h3>
            <div class="mb-4 flex flex-nowrap items-center gap-4">
              <div
                v-for="i in 5"
                :key="i"
                class="flex h-[40px] min-w-fit items-center gap-2 rounded-full border border-solid border-zinc-200 px-4 py-2"
              >
                <nuxt-img src="/logos/vue.svg" width="auto" height="16" />
                <span class="text-sm font-semibold">Vue</span>
              </div>
            </div>
            <div class="flex flex-nowrap items-center gap-4">
              <div
                v-for="i in 5"
                :key="i"
                class="flex h-[40px] min-w-fit items-center gap-2 rounded-full border border-solid border-zinc-200 px-4 py-2"
              >
                <nuxt-img src="/logos/vue.svg" width="auto" height="16" />
                <span class="text-sm font-medium">Vue</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative h-full overflow-hidden rounded-lg border border-solid border-zinc-200 px-8 pb-6 pt-10 text-3xl font-semibold"
        >
          <div
            class="absolute -left-[34px] top-[94px] flex h-full w-full justify-center"
          >
            <div
              class="mask-radial h-full max-h-[651px] w-full max-w-[1314px] bg-pattern"
            ></div>
          </div>
          <div class="relative flex h-full flex-col">
            <h3 class="mb-9 w-full">Terminal integrado</h3>
            <div class="h-full min-w-[calc(100%_+_32px)] flex-1">
              <nuxt-img
                src="/vectors/terminal.svg"
                height="380"
                width="334"
                class="block h-full w-full rounded-l-lg border border-zinc-200 border-r-transparent object-cover object-left-top shadow-lg"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            class="relative mb-6 min-h-[258px] overflow-hidden rounded-lg border border-solid border-zinc-200 px-8 pb-6 pt-10 text-3xl font-semibold"
          >
            <nuxt-img
              src="/vectors/world_map.svg"
              height="264"
              width="810"
              class="absolute -top-[8px] left-[62px] h-[264px] w-[810px]"
            />
            <h3 class="relative mb-6">Networking com todo o Brasil</h3>
          </div>
          <div
            class="flex min-h-[200px] items-center justify-center overflow-hidden rounded-lg border border-solid border-zinc-200 p-6 text-3xl font-semibold"
          >
            <span class="text-sm font-normal text-zinc-500"
              >Ainda quer mais?</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
