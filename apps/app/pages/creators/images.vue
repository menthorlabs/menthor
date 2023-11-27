<script setup lang="ts">
const creatorsStore = useCreatorsStore();
const uploadStore = useUploadStore();
const loading = ref(true);

onMounted(async () => {
  await creatorsStore.getImages();
  loading.value = false;
});

function getSizePercentage(bytes: number) {
  const tenGigabytes = 10737418240;

  return Number((bytes * 100) / tenGigabytes).toFixed(2);
}

function onInput(event: Event) {
  const allFiles = (event.target as HTMLInputElement).files;

  if (!allFiles) return;

  for (let i = 0; i < allFiles.length; ++i) {
    const file = allFiles[i];
    uploadFile(file);
  }
}

async function uploadFile(file: File) {
  loading.value = true;

  try {
    const response = await creatorsStore.signUrl(file.type);
    await uploadStore.uploadFileOnUrl(file, response.signedUrl.url);
    await creatorsStore.addImage(response.signedUrl.fileName);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div
    class="container pt-4"
    :class="{ 'overflow-hidden h-[calc(100%_-_56px)]': loading }"
  >
    <h1 class="text-4xl font-extrabold mb-4">Suas imagens</h1>
    <div class="flex items-center gap-4 mb-8">
      <MButton
        variant="outline"
        text="Fazer upload"
        icon-left="cloud-arrow-up"
        @click="($refs['creators_image'] as HTMLInputElement).click()"
      />
      <input
        ref="creators_image"
        id="creators_image"
        name="creators_image"
        type="file"
        accept="image/*"
        multiple
        class="hidden"
        @input="onInput"
      />

      <div class="space-y-[4px] w-full max-w-[240px] pt-2">
        <div class="rounded-full bg-zinc-200 h-[4px]">
          <div
            class="w-full h-full rounded-full bg-emerald-500"
            :style="`max-width: ${getSizePercentage(
              creatorsStore.filesSize
            )}%;`"
          ></div>
        </div>
        <div class="flex text-zinc-500 text-sm">
          <div class="flex-1">
            Usado:
            <span class="text-zinc-950 font-medium">{{
              $filters.bytesToSize(creatorsStore.filesSize)
            }}</span>
            de 10 GB
          </div>
          <div>{{ getSizePercentage(creatorsStore.filesSize) }} %</div>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-1 relative"
      v-if="loading"
    >
      <CreatorsImageCard v-for="i in 30" :key="i" fileUrl="loading" />
      <div
        class="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_#FFF_100%)] z-10"
      ></div>
    </div>
    <div
      class="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-1"
      v-else-if="creatorsStore.images?.length > 0"
    >
      <CreatorsImageCard
        v-for="fileName in creatorsStore.images.reverse()"
        :key="fileName"
        :fileUrl="`https://menthor-content.s3.sa-east-1.amazonaws.com/${fileName}`"
      />
    </div>
    <div v-else class="text-center text-sm text-zinc-500 pt-10">
      Você ainda não subiu nenhuma imagem.
    </div>
  </div>
</template>
