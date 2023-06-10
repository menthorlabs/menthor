<script setup>
//https://winning-shad-32.accounts.dev/sign-up
</script>

<template>
  <div class="px-8">
    <h1 class="mb-4 text-xl font-bold">
      Bem vindo Bernardo, o que vamos aprender hoje?
    </h1>
    <div class="mb-6 grid grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))]">
      <RoadMapCard />
      <RoadMapCard />
      <RoadMapCard />
      <RoadMapCard />
    </div>
    <h2 class="mb-4 text-lg font-bold">Recomendados para você</h2>
    <div class="mb-6 grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))]">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
    <h2 class="mb-4 text-lg font-bold">Você também pode gostar</h2>
    <div class="mb-6 grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))]">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  </div>
</template>
