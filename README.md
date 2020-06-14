# Youtube Bug Hunting

Uma equipe de pessoa desenvolvedoras estava encarregada de migrar o **front-end** o youtube de um **Framework** antigo para `React` por motivos de ser uma das bibliotecas JavaScript de criação de interfaces mais utilizadas no mundo.

Porém a equipe não conhecia muito da ferramenta ainda e a migraçao não foi finalizada apenas uma parte porém a aplicação está com alguns `bugs` e más praticas de código.

### Logo ...

Vocês foram selecionados para este desafio, por ja conhecerem bastante de `React`.
Sendo assim estão encarregados desta demanda de **hotfix** na qual devem encontrar os famigerados `BUGS` e refatorarem qualquer má pratica de código `React` encontrada na aplicação.

---

### 🗒ANTES DE COMEÇAR A DESENVOLVER:

1. Para ter acesso a `API` do youtube enquanto desenvolve a aplicaçao você precisa de uma **Key de acesso** para fazer requisições e consultar videos e dados.

2. Porém cada `KEY` tem um limite de requisições _**isso mesmo use com sabedoria**_

3. Para criar sua `KEY` acesse o [Google Developers Console](https://console.developers.google.com/cloud-resource-manager)

4. Após acessar o **Developers Console**, clique em **CRIAR PROJETO**
 
![Criar Projeto](./docs/img/criar_projeto.png)

5. Em seguida dê o nome ao seu projeto de `youtube-staging-bugs` e clique em **CRIAR**

![Nomear Projeto](./docs/img/nomear_projeto.png)

6. Agora vamos criar nossa `KEY`, acesse **APIs e serviços -> Credenciais** pela _sidebar_ lateral.

![Criar Credenciais](./docs/img/criar_credenciais.png)

7. Clique em **CRIAR CREDENCIAIS**

![Credenciais Button](./docs/img/credenciais_button.png)

8. Pronto sua `KEY` de acesso a API está criada!

![Key](./docs/img/api_key_created.png)

---

## Agora temos que habilitar o acesso dessa chave!

1. Acesse pela side bar novamente, a tela de **Bibliotecas**

![Bibliotecas Button](docs/img/biblioteca_button.png)


2. Busque pelo serviço `YouTube Data API v3` o qual vamos utilizar!

![Service List](./docs/img/enable_youtube_data_api.png)


3. Clique em `Ativar` e pronto sua `Key` ja tem acesso 🚀

![Activate Service](./docs/img/activate_service.png)

4. Para acessar o limite de requisições você ainda tem basta acessar **IAM e Admin -> Cotas**

![Quota Limit Access](./docs/img/quota_limit_access.png)

---


# Prontos ? Vamos a Caçada e Bugs então!