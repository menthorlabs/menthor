<script setup lang="ts">
import type { ParsedContent } from "../../../../node_modules/@nuxt/content/dist/runtime/types";
const { currentLesson } = defineProps<{
  currentLesson: ParsedContent | undefined;
}>();
const emit = defineEmits(["next"]);
const taskModalStore = useTaskModalStore();

const submissionsStore = useSubmissionsStore();
const submissionContent = ref("");
const config = useRuntimeConfig();
const loadingButton = ref(false);
const loading = ref(true);

watch(taskModalStore, async (newValue) => {
  if (newValue.opened === true) {
    loadSubmission();
  }
});

async function loadSubmission() {
  loading.value = true;
  try {
    if (!currentLesson) return;
    const response = await submissionsStore.getSubmission(currentLesson._id);

    if (!response) return;
    if (response.SubmissionType === "Content") {
      submissionContent.value = response.Content;
    }
  } finally {
    loading.value = false;
  }
}

async function sendSubmission() {
  try {
    loadingButton.value = true;

    if (!currentLesson) return;

    const payload: typeof submissionsStore.submission = {
      Content: submissionContent.value,
      SubmissionType: currentLesson.submissionContent,
      SubmissionStatus: "Pending",
      LessonUrl: `${config.public.appUrl}${currentLesson._path}`,
      Lesson_Id: currentLesson._id,
    };

    if (submissionsStore.hasSubmission) {
      await submissionsStore.updateSubmission(payload);
    } else {
      await submissionsStore.createSubmission(payload);
    }

    taskModalStore.opened = false;
    emit("next");
  } finally {
    loadingButton.value = false;
  }
}
</script>

<template>
  <ClientOnly>
    <Teleport to="#modals">
      <MModal v-model="taskModalStore.opened" class="w-full max-w-[480px]">
        <template #header> Finalizar aula </template>
        <template #description>
          Envie seu progresso antes de continuar
        </template>
        <div v-if="loading" class="flex justify-center">
          <MSpinner class="h-4 w-4 border-zinc-400" />
        </div>
        <MForm v-else-if="currentLesson" @submit="sendSubmission">
          <p class="mb-4 text-sm font-normal text-zinc-700">
            {{ currentLesson.submissionDescription }}
          </p>
          <MDropzone v-if="currentLesson.submissionContent === 'Image'" />
          <MTextArea
            v-model="submissionContent"
            required
            v-if="currentLesson.submissionContent === 'Content'"
          />
          <div class="mt-6 flex items-center justify-end gap-3">
            <MButton
              variant="outline"
              text="Cancelar"
              @click="taskModalStore.opened = false"
            />
            <MButton
              variant="primary"
              :text="submissionsStore.hasSubmission ? 'Atualizar' : 'Confirmar'"
              type="submit"
              :loading="loadingButton"
            />
          </div>
        </MForm>
      </MModal>
    </Teleport>
  </ClientOnly>
</template>
