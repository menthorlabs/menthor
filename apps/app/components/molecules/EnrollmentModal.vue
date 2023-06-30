<script setup lang="ts">
const enrollmentModalStore = useEnrollmentModalStore();
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
            <div class="h-[80px] min-w-[80px] overflow-hidden rounded">
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
            variant="outline"
            text="Fazer matrícula"
            icon-left="signature"
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
