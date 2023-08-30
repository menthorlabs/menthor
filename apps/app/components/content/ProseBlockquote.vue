<template>
  <blockquote
    class="flex items-start gap-3 border border-zinc-200 rounded-lg text-sm py-4 px-5 [&>p]:!m-0 mb-4 [&>p>code]:!text-xs"
  >
    <font-awesome-icon icon="circle-info" class="text-zinc-500" />
    <slot />
  </blockquote>
</template>
