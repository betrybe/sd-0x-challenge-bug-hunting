# Boas vindas ao repositório do Youtube Bug Hunting!!!

Você já usa o GitHub diariamente para desenvolver os exercícios e os projetos, certo? Agora, para desenvolver o desáfio, você deverá seguir as instruções a seguir para conseguir resolvê-lo. Se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de o que fazer antes de iniciar o desenvolvimento do seu desáfio.

## O que deverá ser desenvolvido

Uma equipe de pessoas desenvolvedoras estava encarregada de migrar o **front-end** do youtube de um **framework** antigo para `React`. O React foi escolhido por ser uma das bibliotecas _JavaScript_ de criação de interfaces mais utilizadas do mundo.

Porém, a equipe que estava encarregada não conhecia muito a ferramenta. Com isso, a migração não foi finalizada. O que foi feito por essa equipe está com alguns _bugs_ e más práticas de código.

Dito isso, vocês foram selecionados para este desáfio, por já conhecerem o `ReactJS`.

Sendo assim, vocês estão encarregados desta demanda de refatoração geral da aplicação. A refatoração consiste em encontrar e corrigir os famigerados _bugs_. Além dos bugs, é necessário, também,corrigir qualquer má prática de código que encontrar na aplicação.

---

## 🗒 Configuração inicial

Para ter acesso à `API` do youtube, enquanto desenvolve a aplicação, você precisará de uma **chave de acesso**. Essa chave (_key_) de acesso permite que você faça requisições para consultar vídeos e dados disponibilizados pela API do youtube. Contudo, cada `key` tem um limite de requisições. Devido ao limite de requisições, utilize-as **com sabedoria**.

A seguir você encontrará um passo a passo de como criar a chave de acesso à API.

Para criar sua key, acesse o [Google Developers Console](https://console.developers.google.com/cloud-resource-manager).

- Após acessar o **Google Developers Console**, clique em `CRIAR PROJETO`.
 
    <img src="./docs/img/criar_projeto.png" width="800px" >

- Em seguida, dê o nome ao seu projeto de `"youtube-staging-bugs"` e clique em **CRIAR**.

    <img src="./docs/img/nomear_projeto.png" width="800px" height="600px">

- Agora, vamos criar nossa key. Acesse **"APIs e serviços" -> "Credenciais"** pelo menu lateral.

    <img src="./docs/img/criar_credenciais.png" width="800px" height="600px">

- Clique em **"CRIAR CREDENCIAIS"**.

    <img src="./docs/img/credenciais_button.png" width="800px">

- Pronto! Sua key de acesso à API está criada!

    <img src="./docs/img/api_key_created.png" width="800px" height="600px">

---

### Agora temos que habilitar o acesso dessa chave!

- Acesse pelo menu lateral a tela de **"Bibliotecas"**.

    <img src="./docs/img/biblioteca_button.png" width="400px" height="400px">

- Busque pelo serviço: `"YouTube Data API v3"`, o qual vamos utilizar!

    <img src="./docs/img/enable_youtube_data_api.png" width="800px" height="400px">


- Clique em `"Ativar"` e pronto, sua key já tem acesso 🚀

    <img src="./docs/img/activate_service.png" width="800px" height="400px">

- Para acessar o limite de requisições basta acessar **"IAM e Admin" -> "Cotas"**

    <img src="./docs/img/quota_limit_access.png" width="800px" height="600px">

---

#### Prontos? Vamos caçar os bugs! 👾 🔫

---

## Instruções para entregar seu desáfio:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório

- `git clone git@github.com:tryber/sd-04-challenge-bug-hunting.git`.

2. Instale as dependências e inicialize o projeto

- Instale as dependências:
  - `npm install`

- Inicialize o projeto:
  - `npm start` (uma nova página deve abrir no seu navegador)

3. Faça alterações separadas por novas branchs criadas a partir da branch do grupo, criando uma nova branch para cada demanda

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` dos seus projetos
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b encontrar-primeiro-bug`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (devem aparecer listadas as novas alterações em vermelho)
- Adicione o arquivo alterado ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (devem aparecer listadas as novas alterações em verde)
- Faça o `commit`
  - Exemplo:
    - `git commit -m 'Primeiro bug encontrado` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_)

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin encontrar-primeiro-bug`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-04-challenge-bug-hunting.git./pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a página de _Pull Requests_ dos repositórios e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros estudantes forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
