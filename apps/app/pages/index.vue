<script setup></script>

<template>
  <div class="px-8">
    <h1 class="mb-4 text-xl font-bold">
      Bem vindo Bernardo, o que vamos aprender hoje?
    </h1>
    <!-- <div class="mb-6 grid grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))]">
      <RoadMapCard />
      <RoadMapCard />
      <RoadMapCard />
      <RoadMapCard />
    </div>
    <h2 class="mb-4 text-lg font-bold">Recomendados para você</h2> -->
    <div class="mb-6 grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))]">
      <ContentNavigation v-slot="{ navigation }">
        <NuxtLink
          v-for="item of navigation"
          :key="item._path"
          :nav-item="item"
          :href="item.children[0].children[0]._path"
        >
          <CourseCard
            :title="item.title"
            :description="item.description"
            :image="item.image"
          />
        </NuxtLink>
      </ContentNavigation>
    </div>
  </div>
</template>
