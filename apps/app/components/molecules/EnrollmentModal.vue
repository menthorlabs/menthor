<script setup lang="ts">
import type { ParsedContent } from "../../../../node_modules/@nuxt/content/dist/runtime/types";
const enrollmentModalStore = useEnrollmentModalStore();
const coursesStore = useCoursesStore();
const loadingEnrollment = ref(false);
const { course } = defineProps<{
  course: ParsedContent;
}>();

async function enrollCourse() {
  try {
    loadingEnrollment.value = true;
    await coursesStore.createCourse({
      ContentId: course._id,
      TimeTrack: 0,
      Done: false,
    });
  } finally {
    loadingEnrollment.value = false;
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
                src="/midjourney/characters/1.png"
                alt="Course image"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div class="text-xl font-bold">dApp com Ethereum</div>
              <p class="text-base font-normal text-zinc-700">
                Crie um app descentralizado com ethereum
              </p>
            </div>
          </div>
        </template>
        <EnrollmentStep
          active
          title="Faça sua matrícula"
          description="Comece a salvar seu progresso, receber recompensas e consiga seu certificado."
        >
          <MButton
            @click="enrollCourse"
            variant="outline"
            text="Fazer matrícula"
            icon-left="signature"
            :loading="loadingEnrollment"
          />
        </EnrollmentStep>
        <EnrollmentStep
          title="Habilite o curso no Discord"
          description="Obtenha acesso aos canais desse curso no discord e comece a tirar dúvida com outros alunos."
        >
          <MButton
            variant="outline"
            text="Habilitar curso"
            :icon-left="['fab', 'discord']"
          />
        </EnrollmentStep>
        <EnrollmentStep
          title="Construa em público"
          description="Mostre para as pessoas o que você está aprendendo e aumente seu networking."
        >
          <MButton
            variant="outline"
            text="Compartilhar no twitter"
            :icon-left="['fab', 'twitter']"
          />
        </EnrollmentStep>
      </MModal>
    </Teleport>
  </ClientOnly>
</template>
