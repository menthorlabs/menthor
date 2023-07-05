<template>
  <NuxtLayout class="z-0 text-zinc-900">
    <NuxtPage />
  </NuxtLayout>
  <EnrollmentModal />
  <SearchModal />
  <div id="modals"></div>
  <MToast v-model="$toastItems" class="z-20" />
</template>
