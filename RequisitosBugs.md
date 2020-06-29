## Requisitos do projeto com Bugs

A seguir estão listados todos os requisitos do projeto. Lembre-se que para os bugs se relacionam ao testes, assim que resolvidos os testes retornaram sucesso. E é possível que um bug dependa na resoluçao de outro bug.


### 1. Testes do componente App

  - Ao renderizar a aplicação a mesma deve feita com sucesso.

### 2. Testes do componente Header

  - Ao ser renderizado deve aprensentar apenas um link
  - Ao realizar uma consulta deve redirecionar para tela de buscas

### 3. Testes do componente SearchResult

  - Ao ser renderizado deve apresentar uma lista de videos apenas, não canais
  - Ao clicar em um video deve redirecionar para tela de video

### 4. Testes do arquivo service.js

  - Deve realizar requisições para API do youtube, e retornar os dados ja tratados.

### 5. Testes do componente VideoPage

  - Ao ser renderizado carrega todos os dados do video (comentarios, descrição e videos relacionados) na tela
  - Ao selecionar um video no SideBar deve trocar o video do player e todos os seus dados junto da URL.

## Corrigiu todos os bugs ?

O que mais é possível de se fazer para garantir que não sejam criados mais **bugs** ?

  - A cobertura de testes deve ser 90% ao menos. Caso seja uma pessoa *hardcore* safe programmer _100%_

    - Para ver a cobertura de testes, execute no terminal o comando `npm run test-coverage`.

E após garantir a cobertura de testes, sinta-se livre para adicionar novas **features** ja que sem bugs podemos nós preoucupar mais desenvolver coisas novas!