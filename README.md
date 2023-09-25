<div align="center">
  <a href="https://menthor.io/">
    <img
      src="https://menthor.io/brand/menthor-icon-dark.svg"
      alt="Menthor Logo"
      height="64"
    />
  </a>
  <br />
  <p>
    <h3>
      <b>
        Menthor
      </b>
    </h3>
  </p>
  <p>
    <b>
      Plataforma open-source de ensino de programação.
    </b>
  </p>
  <p>

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmenthor.io&logo=menthor)](https://menthor.io) [![Tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fmenthor.io%2F)](https://twitter.com/intent/tweet?text=%F0%9F%93%9AConhe%C3%A7a%20a%20menthor,%20plataforma%20gratuita%20e%20open-source%20de%20ensino%20de%20programa%C3%A7%C3%A3o.%20https%3A//menthor.io%20%23menthor%20via%20%40menthorlabs)

  </p>
  <p>
    <sub>
      Feito com ❤︎ pelos
      <a href="https://github.com/menthorlabs/menthor/graphs/contributors">
        contribuidores
      </a>
    </sub>
  </p>
  <br />
  <p>
    <a href="https://menthor.io/?ref=github" target="_blank">
      <img
        src="https://i.imgur.com/ejqNDDe.jpg"
        alt="Menthor"
        width="100%"
      />
    </a>
  </p>
</div>

#### **Suporte**

[![Chat on Discord](https://img.shields.io/badge/chat-Discord-7289DA?logo=discord)](https://discord.gg/8BCByyXxq8)

### Apps

- `app`: plataforma da Menthor desenvolvida com [Nuxt](https://nuxt.com/)
- `email`: templates de e-mail da Menthor desenvolvidos com [Vue Email](https://vue-email.vercel.app)
- `www`: landing page da Menthor desenvolvida com [Nuxt](https://nuxt.com/)

### Como rodar na sua máquina

Todo diretório é gerenciado pelo [Turborepo](https://turbo.build/repo), então dê uma olhada na documentação deles.

Para rodar um projeto você precisa ter o node instalado (versão 16 pra cima) e seguir os seguintes passos:

- `npm i -g pnpm`: esse comando vai instalar o pnpm globalmente na sua máquina
- `pnpm install`: esse comando vai instalar todas as dependências do projeto
- `pnpm dev --filter=www`: esse comando vai rodar o app `www` localmente, se quiser rodar outro é só usar o comando `pnpm dev --filter={nome-do-app}`
