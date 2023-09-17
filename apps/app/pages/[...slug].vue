<script setup lang="ts">
import type { RouteLocationRaw } from "~/.nuxt/vue-router";
definePageMeta({
  lesson: true,
});

const sessionStore = useSessionStore();
const taskModalStore = useTaskModalStore();
const coursesStore = useCoursesStore();
const enrollmentModalStore = useEnrollmentModalStore();
const { params } = useRoute();
const router = useRouter();
const loading = ref(true);

const { data } = await useAsyncData(`course${params.slug[0]}`, async () => {
  const [course, lesson, surround] = await Promise.all([
    queryContent(`/${params.slug[0]}`).findOne(),
    queryContent(
      `/${params.slug[0]}/${params.slug[1]}/${params.slug[2]}`
    ).findOne(),
    queryContent()
      .where({
        _type: "markdown",
        _id: { $contains: `github:${params.slug[0]}` },
      })
      .findSurround(`/${params.slug[0]}/${params.slug[1]}/${params.slug[2]}`),
  ]);
  return { data: { course, lesson, surround } };
});

const previousLesson = data.value?.data.surround[0];
const nextLesson = data.value?.data.surround[1];
const currentLesson = data.value?.data.lesson;

const currentCourse = data.value?.data.course._dir;

const hasTask = computed(() => {
  return ["Content", "Image"].includes(currentLesson?.submissionContent);
});

function redirectToNextLesson() {
  if (!nextLesson) return;
  router.push(nextLesson._path as RouteLocationRaw);
}

function openSubmission() {
  if (!hasTask.value) {
    redirectToNextLesson();
    return;
  }
  taskModalStore.opened = true;
}

onMounted(async () => {
  try {
    if (coursesStore.course?.ContentId === params.slug[0]) {
      return;
    }

    await coursesStore.getCourse(params.slug[0]);

    if (coursesStore.isEnrolled) {
      await coursesStore.updateCourse({
        CurrentLessonId: currentLesson ? currentLesson._id : "",
      });
    }
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main class="relative">
    <EnrollmentModal
      :course="currentCourse"
      :current-lesson="currentLesson"
      :id="params.slug[0]"
    />
    <TaskModal :current-lesson="currentLesson" @next="redirectToNextLesson" />

    <div class="mb-10 flex flex-wrap items-center gap-6 px-6 sm:px-8">
      <div
        class="h-[160px] w-[160px] min-w-[160px] overflow-hidden rounded shadow-lg"
      >
        <nuxt-img
          :src="currentCourse.image"
          :quality="85"
          format="webp"
          width="320"
          height="320"
          alt="Roadmap"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="flex-1">
        <div
          class="mb-2 w-fit rounded-full bg-zinc-900 px-3 py-[2px] text-xs font-medium text-white"
        >
          {{ $filters.level(currentCourse.level) }}
        </div>
        <h1 class="text-3xl font-extrabold">
          {{ currentCourse.title }}
        </h1>
        <p class="mb-3 text-base text-zinc-700">
          {{ currentCourse.description }}
        </p>
        <div class="flex items-center gap-2 overflow-x-auto">
          <AppIconButton v-for="tag in currentCourse.tags" :app="tag" />
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-[816px] px-6 sm:px-8 pb-10">
      <ContentDoc id="nuxt_content" />

      <nuxt-link
        v-if="previousLesson"
        :to="previousLesson._path"
        class="block max-w-[0] max-h-[0] opacity-0 w-0 h-0 pointer-events-none"
      >
        {{ previousLesson.title }}
      </nuxt-link>
      <nuxt-link
        v-if="nextLesson"
        :to="nextLesson._path"
        class="block max-w-[0] max-h-[0] opacity-0 w-0 h-0 pointer-events-none"
      >
        {{ nextLesson.title }}
      </nuxt-link>

      <div
        v-if="!sessionStore.isConnected()"
        class="group relative mb-2 mr-2 mt-7 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-pink-400 p-0.5 text-sm font-medium text-gray-900"
      >
        <div
          class="to-pink-400-10 relative flex items-center gap-4 rounded-md bg-white bg-gradient-to-br from-blue-400/20 to-pink-400/20 p-6"
        >
          <div class="flex-1">
            <div class="mb-1 text-base font-medium">Opa, calma aí!</div>
            <p class="text-base font-normal text-zinc-700">
              Parece que você não está logado, caso tenha interesse em salvar
              seu progresso de estudo faça login agora.
            </p>
          </div>
          <nuxt-link
            :to="{
              path: '/sign-in',
              query: { redirect: encodeURIComponent($route.path) },
            }"
          >
            <MButton
              icon-right="arrow-right"
              variant="secondary"
              text="Fazer login"
              class="w-full"
            />
          </nuxt-link>
        </div>
      </div>
      <template v-else>
        <div v-if="loading" class="flex justify-center mt-10">
          <MSpinner class="h-4 w-4 border-zinc-400" />
        </div>
        <template v-else-if="coursesStore.isEnrolled">
          <div
            class="mt-10 flex flex-wrap justify-between gap-4"
            :class="{ '!justify-end': !previousLesson }"
          >
            <nuxt-link
              v-if="previousLesson"
              :to="previousLesson._path"
              class="cursor-pointer rounded w-full sm:max-w-[214px] border border-zinc-300 px-4 py-3 transition-all hover:border-zinc-400 hover:bg-zinc-50"
              :title="previousLesson.title"
            >
              <div class="mb-1 text-right text-xs font-medium text-zinc-700">
                Aula anterior
              </div>
              <div class="flex items-center justify-end gap-2">
                <font-awesome-icon class="text-sm" icon="arrow-left" />
                <span
                  class="text-sm font-medium leading-[14px] truncate flex-1 text-right"
                >
                  {{ previousLesson.title }}
                </span>
              </div>
            </nuxt-link>
            <div
              v-if="nextLesson"
              @click="openSubmission"
              class="cursor-pointer rounded border w-full sm:max-w-[214px] border-zinc-300 px-4 py-3 transition-all hover:border-zinc-400 hover:bg-zinc-50"
              :title="nextLesson.title"
            >
              <div class="mb-1 text-xs font-medium text-zinc-700">
                Próxima aula
              </div>
              <div class="flex items-center gap-2">
                <span
                  class="text-sm font-medium leading-[14px] truncate flex-1"
                >
                  {{ nextLesson.title }}
                </span>
                <font-awesome-icon class="text-sm" icon="arrow-right" />
              </div>
            </div>
          </div>
          <div
            class="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-dashed border-zinc-300 pt-6"
          >
            <nuxt-link
              v-if="currentLesson?._file"
              :to="`https://github.com/menthorlabs/courses/edit/main/content/${currentLesson?._file}`"
              target="_blank"
            >
              <MButton
                icon-left="edit"
                size="sm"
                variant="inherit"
                text="Editar no GitHub"
              />
            </nuxt-link>
            <MButton
              icon-left="signature"
              size="sm"
              variant="inherit"
              text="Matrícula"
              @click="enrollmentModalStore.opened = true"
            />
            <MButton
              v-if="hasTask"
              icon-left="list-check"
              size="sm"
              variant="inherit"
              text="Enviar tarefa"
              @click="taskModalStore.opened = true"
            />
            <!-- 
            <MButton
              icon-left="star"
              size="sm"
              variant="inherit"
              text="Avaliar Aula"
            /> -->
          </div>
        </template>
        <div
          v-else
          class="group relative mb-2 mr-2 mt-7 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-pink-400 p-0.5 text-sm font-medium text-gray-900"
        >
          <div
            class="to-pink-400-10 relative flex items-center gap-4 rounded-md bg-white bg-gradient-to-br from-blue-400/20 to-pink-400/20 p-6"
          >
            <div class="flex-1">
              <div class="mb-1 text-base font-medium">Opa, calma aí!</div>
              <p class="text-base font-normal text-zinc-700">
                Parece que você não se matriculou nesse curso ainda, finalize
                sua matrícula agora e comece a salvar seu progresso.
              </p>
            </div>
            <MButton
              icon-right="signature"
              variant="secondary"
              text="Matricular agora"
              @click="enrollmentModalStore.opened = true"
            />
          </div>
        </div>
      </template>
    </div>
  </main>
</template>
