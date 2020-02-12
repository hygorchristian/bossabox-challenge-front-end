# VUTTR Front

Desafio front-end bossabox de construir uma aplicação simples para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags. Que deverá ser construído utilizando qualquer framework JavaScript de sua preferência, no meu caso [React JS](https://reactjs.org/).

## :book: Sumário

- [Dependências](https://github.com/rushy06/bossabox-desafio-front-end#rocket-guia-de-instala%C3%A7%C3%A3o)
- [Guia de instalação](https://github.com/rushy06/bossabox-desafio-front-end#rocket-guia-de-instala%C3%A7%C3%A3o)
  - [Como instalar](https://github.com/rushy06/bossabox-desafio-front-end#executando-a-aplica%C3%A7%C3%A3o)
  - [Executando a aplicação](https://github.com/rushy06/bossabox-desafio-front-end#executando-a-aplica%C3%A7%C3%A3o)
- [Conteinerização (Docker)](https://github.com/rushy06/bossabox-desafio-front-end#whale2-conteineriza%C3%A7%C3%A3o-docker)
  - [Comandos Docker](https://github.com/gabrielsouzadev/vuttr-vue#comandos-docker)

## :gear: Dependências

- [Node](https://nodejs.org/en/) (10.13.0 ou maior)
- [Yarn](https://yarnpkg.com/pt-BR/) ou [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (opcional)

## :rocket: Guia de instalação

Para a instalação e execução dos scripts será utilizado o yarn.

### Como instalar

Clone este repositório:

```
git clone https://github.com/rushy06/bossabox-desafio-front-end
```

Entre na pasta e instale as dependências:

```
cd bossabox-desafio-front-end && yarn
```

### Executando o servidor (dados)

Iniciar o servidor mock:

```
yarn mock
```

### Executando a aplicação

Iniciar a aplicação em modo de desenvolvimento:

```
yarn dev
```

Iniciar a aplicação em modo de produção:

```
yarn start
```

## :whale2: Conteinerização (Docker)

### Comandos Docker

Compilar a imagem

```
docker build -t dockeruser/appname .
```

Executar a imagem (A aplicação estará acessível em localhost:3000)

```
docker run -it \
  -p 3000:3000 \
  --rm \
  --name containername \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  dockeruser/appname
```
