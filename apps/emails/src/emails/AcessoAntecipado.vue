<script setup lang="ts">
import type { CSSProperties } from 'vue'

defineProps({
  username: {
    type: String,
    default: 'John Doe'
  }
})

const html = {
  backgroundColor: '#000000',
  padding: '40px'
} as CSSProperties

const centerLogo = {
  marginBottom: '40px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
} as CSSProperties

const main = {
  backgroundColor: '#000000',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
} as CSSProperties

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  width: '100%',
} as CSSProperties

const heroContainer = {
  padding: '40px',
  background: '#18181B',
  boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  marginBottom: '64px'
} as CSSProperties

const titleText = {
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '29px',
  color: '#FAFAFA',
  marginBottom: '24px'
} as CSSProperties

const button = {
  padding: '8px, 12px, 8px, 12px',
  background: '#18181B',
  borderRadius: '8px',
  border: '1px',
  gap: '8px',
} as CSSProperties

const helperText = {
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '17px',
  color: '#FAFAFA'
} as CSSProperties

const footerText = {
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#A1A1AA'
} as CSSProperties

const footerContainer = {
  padding: '0 40px 0 40px'
} as CSSProperties

const logoWithName = {
  padding: '0 0 16px 0'
} as CSSProperties

const containerButtons = {
  display: 'flex',
  alignItems: 'center',
  width: '100%'
} as CSSProperties

const link = {
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#E4E4E7',
  textDecoration: 'none'
} as CSSProperties

const verticalLine = {
  height: '24px',
  width: '1px',
  margin: '0 12px',
  borderRight: '1px solid #27272A',
  display: 'block'
}

const hr = {
  borderColor: '#27272A',
} as CSSProperties
</script>

<template>
  <EHtml lang="pt-BR" :style="html">
    <EHead />
    <EBody :style="main">
      <EContainer :style="container">
        <ESection :style="centerLogo">
          <EImg
            width="60"
            height="55"
            src="./public/menthor-logo.png"
            alt="Menthor"
          />
        </ESection>
        <ESection :style="heroContainer">
          <EHeading as="h1" :style="titleText"> Obrigado por se inscrever. </EHeading>
          <EText :style="helperText">
            Agora nossa missão é continuar desenvolvendo a plataforma e trazer novidades o mais
            rápido possível.
          </EText>
          <EText :style="helperText">
            Enquanto isso você pode nos acompanhar nas redes sociais, entrar na comunidade do
            discord ou até mesmo nos ajudar a construir o projeto.
          </EText>

          <EButton href="https://github.com/menthorlabs/menthor" :style="button">
            <EImg src="./public/git-hub-button.png" alt="GitHub" width="241.89" height="40" />
          </EButton>
          <EText :style="footerText">
            Se você não se inscreveu por favor ignore essa mensagem. Seu email será excluído da
            nossa lista em até 5 dias.
          </EText>
        </ESection>
        <ESection :style="footerContainer">
          <EImg
            src="./public/logo-with-name.png"
            alt="button"
            width="100"
            height="18"
            marginBottom="25px"
            color="#fff"
            :style="logoWithName" />
          <ERow>
            <EColumn :style="containerButtons">
              <EButton href="https://github.com/menthorlabs/menthor" :style="link">GitHub</EButton>
              <EText :style="verticalLine"></EText>
              <EButton href="https://discord.com/invite/8BCByyXxq8" :style="link">Discord</EButton>
              <EText :style="verticalLine"></EText>
              <EButton href="https://twitter.com/menthorlabs" :style="link">Twitter</EButton>
            </EColumn>
          </ERow>
          <EHr :style="hr"/>
        </ESection>
      </EContainer>
    </EBody>
  </EHtml>
</template>
