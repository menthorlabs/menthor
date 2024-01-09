<script setup lang="ts">
import type { ParsedContent } from "../../../../node_modules/@nuxt/content/dist/runtime/types";
const { currentLesson } = defineProps<{
  currentLesson: ParsedContent | undefined;
}>();
const emit = defineEmits(["next"]);
const taskModalStore = useTaskModalStore();

const submissionsStore = useSubmissionsStore();
const config = useRuntimeConfig();
const loadingButton = ref(false);
const loading = ref(true);
const toast: { error: Function; success: Function } | undefined =
  inject("toast");
const uploadedFile: Ref<File | null> = ref(null);

watch(taskModalStore, async (newValue) => {
  if (newValue.opened === true) {
    loadSubmission();
  }
});

const taskNotSent = computed(
  () => submissionsStore.submission?.SubmissionStatus === "Draft"
);

async function loadSubmission() {
  loading.value = true;
  try {
    if (!currentLesson) return;
    await submissionsStore.getSubmission(currentLesson._id);

    if (submissionsStore.submission) return;

    await sendSubmission("Draft");
  } finally {
    loading.value = false;
  }
}

async function sendSubmission(status: "Pending" | "Draft") {
  try {
    loadingButton.value = true;
    if (!currentLesson) return;

    const payload: typeof submissionsStore.submission = {
      Filename: submissionsStore.submission?.Filename || "",
      Content: submissionsStore.submission?.Content || "",
      SubmissionType: currentLesson.submissionContent,
      SubmissionStatus: status,
      LessonUrl: `${config.public.appUrl}${currentLesson._path}`,
      Lesson_Id: currentLesson._id,
    };

    submissionsStore.submission = {
      ...submissionsStore.submission,
      ...payload,
    };

    if (status === "Draft") {
      await submissionsStore.createSubmission();
      return;
    }
    await submissionsStore.updateSubmission();

    if (
      submissionsStore.submission?.SubmissionType === "Image" &&
      uploadedFile.value
    ) {
      const response = await submissionsStore.requestUrl(
        uploadedFile.value.type
      );
      await submissionsStore.uploadFileOnUrl(uploadedFile.value, response.url);
      submissionsStore.submission.Filename = response.fileName;
      await submissionsStore.updateSubmission();
    }
    toast?.success("Tarefa enviada com sucesso!");
    goToNextLesson();
  } finally {
    loadingButton.value = false;
  }
}

function goToNextLesson() {
  taskModalStore.opened = false;
  emit("next");
}

async function uploadFile(file: File) {
  const twoMegabytes = 2000000;
  if (!file.type.includes("image") || file.size > twoMegabytes) {
    toast?.error(
      "Só é permitido imagem com até 2MB e no formato .jpg, .png ou .gif."
    );
    return;
  }

  if (!submissionsStore.submission) return;
  uploadedFile.value = file;
  submissionsStore.submission.Filename = URL.createObjectURL(file);
}
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <MModal v-model="taskModalStore.opened" class="w-full max-w-[480px]">
        <template #header> Finalizar aula </template>
        <template #description>
          Envie seu progresso antes de continuar
        </template>
        <div v-if="loading" class="flex justify-center">
          <MSpinner class="h-4 w-4 border-zinc-400" />
        </div>
        <MForm
          v-else-if="currentLesson && submissionsStore.submission"
          @submit="sendSubmission('Pending')"
        >
          <p class="mb-4 text-sm font-normal text-zinc-700">
            {{ currentLesson.submissionDescription }}
          </p>
          <template v-if="currentLesson.submissionContent === 'Image'">
            <MDropzone
              accept="image/*"
              @update:modelValue="uploadFile"
              class="mb-4"
            />
            <nuxt-img
              v-if="submissionsStore.submission.Filename"
              class="rounded overflow-hidden"
              :src="
                submissionsStore.submission.Filename.includes('blob')
                  ? submissionsStore.submission.Filename
                  : `https://menthor-lessons.s3.sa-east-1.amazonaws.com/${submissionsStore.submission.Filename}`
              "
              alt="Submission Image"
            />
          </template>

          <MTextArea
            v-model="submissionsStore.submission.Content"
            required
            v-if="currentLesson.submissionContent === 'Content'"
          />

          <div class="mt-6 flex items-center justify-between gap-3">
            <MBadge
              :text="
                submissionsStore.getStatusName(
                  submissionsStore.submission?.SubmissionStatus || 'Pending'
                )
              "
              :status="taskNotSent ? 'warning' : 'success'"
            />
            <div class="flex gap-3 items-center">
              <MButton
                variant="outline"
                text="Enviar depois"
                @click="goToNextLesson()"
              />
              <MButton
                variant="primary"
                :text="taskNotSent ? 'Enviar' : 'Reenviar'"
                type="submit"
                :loading="loadingButton"
              />
            </div>
          </div>
        </MForm>
      </MModal>
    </Teleport>
  </ClientOnly>
</template>
