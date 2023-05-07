import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Section,
} from "@react-email/components";
import * as React from "react";

const baseUrl = "https://storagementhor.s3.sa-east-1.amazonaws.com";

export const MenthorSignNewsletterEmail = () => (
  <Html style={html}>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={centerLogo}>
          <Img
            src={`${baseUrl}/logo.svg`}
            alt="Menthor"
            width="60"
            height="55"
            style={{ margin: "auto" }}
          />
        </Section>
        <Section style={heroContainer}>
          <h1 style={titleText}>Obrigado por se inscrever.</h1>
          <p style={helperText}>
            Agora nossa missão é continuar desenvolvendo a plataforma e trazer
            novidades o mais rápido possível.
          </p>
          <p style={helperText}>
            Enquanto isso você pode nos acompanhar nas redes sociais, entrar na
            comunidade do discord ou até mesmo nos ajudar a construir o projeto.
          </p>
          <Img
            src={`${baseUrl}/Button.svg`}
            alt="button"
            width="242"
            height="40"
            style={{ marginTop: "24px", marginBottom: "24px" }}
          />
          <p style={footerText}>
            Se você não se inscreveu por favor ignore essa mensagem. Seu email
            será excluído da nossa lista em até 5 dias.
          </p>
        </Section>
        <Section style={footerContainer}>
          <Img
            src={`${baseUrl}/logo_with_text.svg`}
            alt="button"
            width="100"
            height="18"
            style={{ marginBottom: "16px", color: "#fff" }}
          />
          <div>
            <Link href="#" style={link}>
              GitHub
            </Link>
            <Link href="#" style={link}>
              Discord
            </Link>
            <Link href="#" style={lastLink}>
              Twitter
            </Link>
          </div>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default MenthorSignNewsletterEmail;

const html = {
  backgroundColor: "#000000",
  padding: "40px",
};

const centerLogo = {
  marginBottom: "40px",
  width: "100%",
};

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  width: "100%",
};

const heroContainer = {
  padding: "40px",
  background: "#18181B",
  boxShadow:
    "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  marginBottom: "64px",
};

const titleText = {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "29px",
  color: "#FAFAFA",
  marginBottom: "24px",
};

const helperText = {
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#FAFAFA",
};

const footerText = {
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#A1A1AA",
};

const footerContainer = {
  padding: "0 40px 0 40px",
};

const link = {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#E4E4E7",
  borderRight: "1px solid #27272A",
  paddingRight: "12px",
  marginRight: "12px",
  textDecoration: "none",
};
const lastLink = {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#E4E4E7",
  textDecoration: "none",
};
