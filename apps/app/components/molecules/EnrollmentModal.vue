<script setup lang="ts">
import type { ParsedContent } from "../../../../node_modules/@nuxt/content/dist/runtime/types";
const enrollmentModalStore = useEnrollmentModalStore();
const coursesStore = useCoursesStore();
const loading = ref(false);
const config = useRuntimeConfig();
const { course, id, currentLesson } = defineProps<{
  course: ParsedContent;
  id: string;
  currentLesson: ParsedContent | undefined;
}>();

async function enrollCourse() {
  try {
    loading.value = true;
    await coursesStore.createCourse({
      CurrentLessonId: currentLesson?._id,
      ContentId: id,
      TimeTrack: 0,
      Done: false,
      EnrollStatus: "course",
    });
  } finally {
    loading.value = false;
  }
}

const redirectUri = computed(() => {
  return `${config.public.appUrl}/discord/role/${course.discordRole}`;
});

function openDiscordOAuth() {
  const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=1125151922958106734&redirect_uri=${encodeURIComponent(
    redirectUri.value
  )}&response_type=code&scope=identify%20email`;
  window.open(discordUrl, "popup", "width=600,height=800");
}

async function requestDiscordRole() {
  try {
    loading.value = true;
    await coursesStore.updateCourse({
      EnrollStatus: "discord",
    });
    openDiscordOAuth();
  } finally {
    loading.value = false;
  }
}

function shareOnTwitter() {
  window.open("https://twitter.com/intent/tweet?text=Hello%20world", "_blank");
}

async function shareCourse() {
  try {
    loading.value = true;
    await coursesStore.updateCourse({
      EnrollStatus: "share",
    });

    shareOnTwitter();
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <ClientOnly>
    <Teleport to="#modals">
      <MModal
        v-model="enrollmentModalStore.opened"
        class="w-full max-w-[480px]"
      >
        <template #header>
          <div class="flex items-center gap-4">
            <div class="h-[80px] w-[80px] min-w-[80px] overflow-hidden rounded">
              <img
                :src="course.image"
                :alt="course.title"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div class="text-xl font-bold">{{ course.title }}</div>
              <p class="text-base font-normal text-zinc-700">
                {{ course.description }}
              </p>
            </div>
          </div>
        </template>
        <EnrollmentStep
          :active="!coursesStore.isEnrolled"
          :done="coursesStore.isEnrolled"
          title="Faça sua matrícula"
          description="Comece a salvar seu progresso, receber recompensas e consiga seu certificado."
        >
          <MButton
            @click="enrollCourse"
            variant="outline"
            text="Fazer matrícula"
            icon-left="signature"
            :loading="loading"
          />
        </EnrollmentStep>
        <EnrollmentStep
          :active="
            coursesStore.isEnrolled &&
            coursesStore.course?.EnrollStatus === 'course'
          "
          :done="
            ['discord', 'share'].includes(
              String(coursesStore.course?.EnrollStatus)
            )
          "
          title="Habilite o curso no Discord"
          description="Obtenha acesso aos canais desse curso no discord e comece a tirar dúvida com outros alunos."
        >
          <MButton
            @click="requestDiscordRole()"
            variant="outline"
            text="Habilitar curso"
            :icon-left="['fab', 'discord']"
          />
          <template #retry>
            <p
              class="underline cursor-pointer text-zinc-500 hover:text-zinc-700"
              @click="openDiscordOAuth()"
            >
              Habilitar novamente
            </p>
          </template>
        </EnrollmentStep>
        <EnrollmentStep
          title="Construa em público"
          description="Mostre para as pessoas o que você está aprendendo e aumente seu networking."
          :active="coursesStore.course?.EnrollStatus === 'discord'"
          :done="['share'].includes(String(coursesStore.course?.EnrollStatus))"
        >
          <MButton
            @click="shareCourse()"
            variant="outline"
            text="Compartilhar no Twitter"
            :icon-left="['fab', 'twitter']"
          />
          <template #retry>
            <p
              class="underline cursor-pointer text-zinc-500 hover:text-zinc-700"
              @click="shareOnTwitter()"
            >
              Compartilhar novamente
            </p>
          </template>
        </EnrollmentStep>
      </MModal>
    </Teleport>
  </ClientOnly>
</template>
