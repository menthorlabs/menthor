# Guia de Contribuição Menthor.io

Primeiramente, obrigado por dedicar seu tempo para contribuir! ❤️

Estamos muito felizes que você esteja interessado em contribuir com o [Menthor.io](https://menthor.io/). Seja você um novato ou um veterano experiente em código aberto, este guia pode ajudá-lo a fazer contribuições significativas para o nosso projeto.

Todos os tipos de contribuições são incentivados e valorizados. Consulte o [Sumário](#sumário) para visualizar as diferentes maneiras de ajudar. Por favor, leia todo este documento antes de fazer sua contribuição. Isso tornará mais fácil para nós, os mantenedores, e tornará a experiência para todos envolvidos mais suave. Aguardamos suas contribuições!

> E se você gostou do projeto, mas não tem tempo para contribuir, tudo bem. Existem outras maneiras fáceis de apoiar o projeto e mostrar sua apreciação, o que também nos deixaria muito felizes:
> - Dê uma estrela ao projeto
> - Faça um tweet sobre o projeto
> - Referencie este projeto no README do seu projeto
> - Mencione o projeto em eventos locais e fale para seus amigos

## Sumário

- [Código de Conduta](#código-de-conduta)
- [Guia para Novos Contribuidores](#guia-para-novos-contribuidores)
- [Sua Primeira Contribuição](#sua-primeira-contribuição)
- [Eu Tenho uma Pergunta](#eu-tenho-uma-pergunta)
- [Relatando Bugs](#relatando-bugs)
- [Sugerindo Melhorias e Funcionalidades](#sugerindo-melhorias-e-funcionalidades)
- [Pull Requests (PR)](#pull-requests-pr)
- [Guia de Estilo](#guia-de-estilo)
- [Precisa de Ajuda?](#precisa-de-ajuda)

## Código de Conduta

O projeto Menthor.io adota o Código de Conduta do Colaborador, que esperamos que todos os participantes respeitem. Por favor, leia o [Código de Conduta](CODE_OF_CONDUCT.md) completo para que você possa entender quais ações serão e não serão toleradas. Ao contribuir, você concorda em seguir este Código de Conduta. 

## Guia para Novos Contribuidores

Se você nunca contribuiu para um projeto no GitHub usando Git, aqui estão alguns recursos para ajudar você entender as boas práticas e maneiras de contribuir com projetos de código aberto:

- [Encontrando maneiras de contribuir para código aberto no GitHub](https://docs.github.com/pt/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Configuração do Git](https://docs.github.com/pt/get-started/quickstart/set-up-git)
- [Fluxo do GitHub](https://docs.github.com/pt/get-started/quickstart/github-flow)
- [Colaborando com Pull Requests](https://docs.github.com/pt/github/collaborating-with-pull-requests)

## Sua Primeira Contribuição

Não sabe por onde começar? Você pode começar olhando essas duas listas:

- **[Issues para iniciantes](https://github.com/menthorlabs/menthor/issues?q=is%3Aissue+label%3A%22good+first+issue%22+is%3Aopen)**: Issues com a tag `good first issue` são uma ótima maneira de começar a contribuir para o nosso projeto.
- **[Issues que precisam de ajuda](https://github.com/menthorlabs/menthor/issues?q=is%3Aissue+label%3A%22good+first+issue%22+is%3Aopen+label%3A%22help+wanted%22)**: Issues com a tag `help wanted` são problemas que precisam de um pouco mais de atenção.

## Diretrizes de Contribuição

### Eu Tenho Uma Pergunta

> Se você deseja fazer uma pergunta, presumimos que você já leu a [documentação](https://github.com/menthorlabs/menthor) disponível.

Antes de fazer uma pergunta, é recomendado pesquisar se sua dúvida já [foi feita](https://github.com/menthorlabs/menthor/issues) ou se ela já foi [respondida](https://github.com/menthorlabs/menthor/issues?q=is%3Aissue+is%3Aclosed).

Se você ainda sentir a necessidade de fazer uma pergunta e precisar de esclarecimentos, recomendamos o seguinte:

- Abra uma [issue](https://github.com/menthorlabs/menthor/issues/new).
- Forneça o máximo de contexto possível sobre sua dúvida.

Responderemos o mais rápido possível.

### Relatando Bugs

#### Antes de Enviar um Relatório de Bug

Um bom relatório de bug não deve deixar os outros precisando de mais informações. Portanto, pedimos que você investigue cuidadosamente, colete informações e descreva o problema detalhadamente no seu relatório. Por favor, siga as etapas a seguir para nos ajudar a corrigir qualquer possível bug o mais rápido possível.

- Certifique-se de estar usando a versão mais recente do projeto.
- Certifique-se de estar usando as bibliotecas, dependências e frameworks compatíveis.
- Determine se seu bug é realmente um bug e não um erro local, como usar componentes ou versões de ambiente incompatíveis.
- Se você procura suporte, talvez queira verificar [esta seção](#eu-tenho-uma-pergunta) ou [entrar no nosso servidor discord](https://discord.gg/8BCByyXxq8).
- Verifique se já existe um relatório de bug para o seu problema ou erro nas [issues abertas](https://github.com/menthorlabs/menthor/issues).
- Certifique-se também de procurar na internet (incluindo o Stack Overflow) para ver se outros usuários fora da comunidade do GitHub discutiram o problema.
- Colete informações sobre o bug:
  - Stack trace (erro do console)
  - Sistema Operacional, Plataforma e Versão (Windows, Linux, macOS, x86, ARM)
  - Versão do interpretador, compilador, SDK, ambiente de tempo de execução, gerenciador de pacotes, dependendo do que for relevante.
  - Possivelmente a entrada e saída dos dados
  - Você consegue reproduzir o problema de forma confiável? E você também pode reproduzi-lo com versões mais antigas?

#### Como Enviar um Bom Relatório de Bug

> Você nunca deve relatar problemas relacionados à segurança, vulnerabilidades ou bugs que incluam informações confidenciais no rastreador de _issues_ ou em qualquer lugar público. Problemas confidenciais devem ser enviados por e-mail ou via [nosso servidor no discord](https://discord.gg/8BCByyXxq8).

Usamos as _issues_ do GitHub para rastrear bugs e erros. Se você encontrar um problema no projeto:

- Abra uma [issue](https://github.com/menthorlabs/menthor/issues/new). (Como não podemos ter certeza, neste ponto, se é um bug ou não, pedimos que você não rotule o problema como bug ainda.)
- Explique o comportamento que você esperava e o comportamento real.
- Forneça o máximo de contexto possível e descreva os *passos de reprodução* que outra pessoa pode seguir para reproduzir o problema. Isso geralmente inclui seu código.
- Para bons relatórios de bug, você deve isolar o problema e criar um caso de teste reduzido.
- Forneça as informações que você coletou na seção anterior.

Depois de registrado:

- A equipe do projeto irá rotular o problema de acordo.
- Um membro da equipe tentará reproduzir o problema com os passos fornecidos por você. Se não houver etapas de reprodução ou nenhuma maneira óbvia de reproduzir o problema, a equipe pedirá que você forneça essas etapas e marcará o problema como `need-to-reproduce`. Problemas com a tag `need-to-reproduce` não serão abordados até que sejam reproduzidos.
- Se a equipe conseguir reproduzir o problema, ele será marcado como `need-to-fix`, bem como possivelmente outras tags (como `critical`), e o problema será resolvido por alguém.

### Sugerindo Melhorias e Funcionalidades

Esta seção o orienta na apresentação de sugestões de aprimoramentos para o projeto, **incluindo novos recursos completamente novos e melhorias nas funcionalidades existentes**. Seguir estas diretrizes ajudará os mantenedores e a comunidade a entender sua sugestão e encontrar sugestões relacionadas.

#### Antes de Sugerir uma Nova Funcionalidade

- Leia atentamente a [documentação](https://github.com/menthorlabs/menthor) e descubra se a funcionalidade já foi realizada.
- Realize uma [busca](https://github.com/menthorlabs/menthor/issues) para ver se a melhoria já foi sugerida. Se foi, adicione um comentário à questão existente em vez de abrir uma nova.
- Descubra se sua ideia se encaixa no escopo e objetivos do projeto. Cabe a você fazer um forte argumento para convencer os desenvolvedores do projeto dos méritos desta funcionalidade. Lembre-se de que queremos funcionalidades que sejam úteis para a maioria dos nossos usuários, não apenas um pequeno subconjunto. Se você está apenas visando um grupo minoritário de usuários, considere escrever uma biblioteca de complementos ou um _plugin_.

#### Como Sugerir uma Nova Funcionalidade

As sugestões são rastreadas com as [issues do GitHub](https://github.com/menthorlabs/menthor/issues). Siga essas instruções para propor novas funcionalidades:

- Use um **título claro e descritivo** para identificar a sugestão.
- Forneça uma **descrição passo a passo da sugestão de aprimoramento** com o máximo de detalhes possível.
- **Descreva o comportamento atual** e **explique qual comportamento você deseja ver** e por quê. Neste ponto, você também pode dizer quais alternativas não funcionam para você.
- Você pode querer **incluir capturas de tela e GIFs animados** para ajudar a demonstrar os passos ou destacar a parte à qual a sugestão se refere. 
- **Explique por que esta funcionalidade seria útil** para a maioria dos usuários. Você também pode indicar outros projetos de referência que poderiam servir como inspiração.

Dê uma olhada no nosso [modelo de issue](./ISSUE_TEMPLATE.md) para se basear ao sugerir uma nova funcionalidade.

### Pull Requests (PR)

Para alterações que abordam funcionalidades centrais ou que exigiriam alterações significativas (por exemplo, uma grande versão), é melhor [abrir uma issue](https://github.com/menthorlabs/menthor/issues/new) para discutir sua proposta primeiro. Isso não é obrigatório, mas pode economizar tempo na criação e revisão de alterações.

Em geral, seguimos o fluxo de trabalho [Git Fork-and-Pull](https://github.com/susam/gitpr):

1. Faça um _fork_ do repositório para sua própria conta no Github.
2. Clone o projeto para a sua máquina.
3. Crie um branch localmente com um nome sucinto, mas descritivo.
4. Faça _commits_ das alterações no novo branch (leia nosso [Guia de Estilo](#guia-de-estilo)).
5. Siga quaisquer diretrizes de formatação e padrões específicas para este repositório.
6. Envie as alterações para o seu _fork_.
7. Abra uma PR em nosso repositório para que possamos revisar eficientemente as alterações.

Agora que você entendeu o fluxo padrão, leia atentamente as orientações a seguir:

- Certifique-se de que seu PR está atualizado com a branch principal.
- Siga nosso [modelo de PR](./PULL_REQUEST_TEMPLATE.md) para que possamos revisar seu PR. Esse modelo ajuda os revisores a entender suas alterações e o propósito do seu pull request.
- Siga também nosso [Guia de Estilo](#guia-de-estilo) para padronizar as mensagens de _commit_ e a língua utilizada.
- Se estiver resolvendo uma _issue_ aberta, não se esqueça de [vinculá-la ao PR](https://docs.github.com/pt/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).
- Depois de enviar sua PR, membros da equipe e comunidade vão revisar sua proposta. Podemos fazer perguntas ou solicitar informações adicionais.
- Podemos solicitar alterações antes que um PR possa ser mesclado ao projeto, seja usando a [ferramenta de revisão](https://docs.github.com/pt/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) ou comentários de PR. Você pode aplicar as alterações sugeridas diretamente pela interface do usuário. Você pode fazer outras alterações em seu fork e depois confirmá-las na sua _branch_.
- À medida que você atualiza seu PR e aplica alterações, marque cada conversa como [resolvida](https://docs.github.com/pt/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- Se você encontrar problemas de mesclagem, confira este [tutorial de git](https://github.com/skills/resolve-merge-conflicts) para ajudá-lo a resolver conflitos de mesclagem e outros problemas.

#### Seu PR foi mesclado (merge)!

Parabéns :tada::tada: A equipe do Menthor.io agradece :sparkles:.

Depois que seu PR for mesclado, suas contribuições serão publicamente visíveis na [página oficial do Menthor.io](https://github.com/menthorlabs/menthor).

Agora você faz parte da nossa comunidade!!!

## Guia de Estilo

### Se comunique usando Português

Na [issue #23](https://github.com/menthorlabs/menthor/issues/23) foi discutido e decidido que a língua utilizada para os as _issues_ e as discussões deve ser o Português por ser mais acessível para iniciantes, que são o público-alvo do projeto. Os _commits_ e _pull requests_ podem ser em Inglês ou em Português, mas recomendamos manter o padrão em português.

### Mensagens de commit

Adotamos as convenções do [Conventional Commits](https://github.com/commitizen/cz-cli) para nossos padrões de _commit_. Isso fornece uma maneira fácil de identificar os tipos de mudanças em _commits_, facilitando a geração automática de changelogs.

![Conventional Commits](https://user-images.githubusercontent.com/6784777/272101071-2e1574bb-cce0-475e-8e23-a175169be094.png)

Você não precisa necessariamente usar a linha de comando, mas deve seguir ao menos o padrão estético das mensagens de _commit_.

Temos regras muito precisas sobre como nossas mensagens de _commit_ do git podem ser formatadas. Isso leva a mensagens **mais legíveis** que são fáceis de seguir ao examinar o **histórico do projeto**. Além disso, usamos as mensagens de _commit_ do git para **gerar o registro de alterações**.

#### Formato da Mensagem de Commit
Cada mensagem de _commit_ consiste em um **cabeçalho**, um **corpo** e um **rodapé**. O cabeçalho tem um formato especial que inclui um **tipo**, um **escopo** e um **assunto**:

```markdown
<tipo>(<escopo>): <assunto>
<LINHA EM BRANCO>
<corpo>
<LINHA EM BRANCO>
<rodapé>
```

O **tipo** é obrigatório e o **escopo** do cabeçalho é opcional.

Nenhuma linha da mensagem de _commit_ pode ter mais de 100 caracteres! Isso permite que a mensagem seja mais fácil de ler no GitHub, bem como em várias ferramentas git.

##### Tipo
Seu _commit_ deve ter um dos seguintes tipos:

* **feat**: Uma nova funcionalidade.
* **fix**: Uma correção de bug.
* **docs**: Somente alterações na documentação.
* **style**: Alterações que não afetam a dinâmica do código (espaço em branco, formatação, ponto e vírgula ausentes, alterar cores, etc.).
* **refactor**: Uma alteração de código que não corrige um bug nem adiciona uma funcionalidade.
* **perf**: Uma alteração de código que melhora o desempenho.
* **test**: Adição de testes ausentes ou correção de testes existentes.
* **chore**: Alterações no processo de _build_ ou em ferramentas e bibliotecas auxiliares (como mudar de framework, trocar de linguagem etc).

###### Reverter
Se o _commit_ reverter um _commit_ anterior, ele deve começar com `revert:`, seguido pelo cabeçalho do _commit_ revertido. No corpo, deve dizer: `Isso reverte o commit <hash>.`, onde o hash é o SHA do _commit_ sendo revertido.

##### Escopo
O escopo pode ser qualquer coisa que especifique o local da alteração no _commit_. Por exemplo, `home`,
`aulas`, `aplicativo`, `componenteX`, `componenteY`, `api-teste`, `eslint`, etc...

Você pode usar `*` quando a alteração afetar mais de um escopo.

#### Assunto
O assunto contém uma descrição sucinta da alteração:

* use o tempo verbal no imperativo do presente: "altera" e não "alterado" nem "alterações"
* não escreva a primeira letra em maiúsculo
* sem ponto final

#### Corpo
Assim como no **assunto**, use o imperativo, no presente: "altera" e não "alterado" nem "alterações".
O corpo deve incluir a motivação para a alteração e contrastar isso com o comportamento anterior.

#### Rodapé
O rodapé deve conter informações sobre **Mudanças Incompatíveis** e também é o local para
referenciar as _issues_ que o _commit_ resolve.

**Mudanças Incompatíveis** devem começar com a palavra `MUDANÇA INCOMPATÍVEL:` com um espaço ou duas novas linhas.
O restante da mensagem de _commit_ é então usado para descrever as incompatibilidades causadas por esse _commit_.

#### Exemplos

```markdown

style(HeroComponent): altera a cor de fundo do componente Hero

----------------------------------

feat(aula): adiciona aula 23 do curso de JS

A aula introduz o tema de funções em JavaScript
- apresenta a sintaxe de funções 
- explica a importância de usar funções
- demonstra como usar funções
- propõe 5 exercícios sobre funções

----------------------------------

docs(CONTRIBUTING): cria um novo guia de contribuições

Criado um novo guia de contribuições para o projeto Menthor.io
- introdução ao guia
- primeira contribuição
- eu tenho uma pergunta
- relatando bugs
- sugerindo melhorias
- criando um pull request
- guia de estilo

----------------------------------

fix(homePage): corrige a quebra de linha inesperada na Home

Ao usar o _scroll_ na página inicial alguns parágrafos quebravam a linha inesperadamente. O bug foi corrigido da seguinte forma:
- usando <br/>

Closes #25.
```

Uma explicação mais detalhada pode ser encontrada neste [documento](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y).


## Precisa de ajuda?

Se você tiver alguma dúvida ou precisar de ajuda, não hesite em nos contatar via [nosso servidor no discord](https://discord.gg/8BCByyXxq8).

Obrigado por contribuir para o Menthor.io!

