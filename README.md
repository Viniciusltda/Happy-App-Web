<p align="center">
  <img align="center" src="https://imgur.com/5K1Vexy.png" />
</p>

> <p align="center">Projeto do App "Happy", um app desenvolvido para que você encontre ou crie orfanatos na sua cidade, para que você ou outras pessoas possam fazer doações. </p>
> <p align="center">Projeto especial de Dia das Crianças. </p>

<p align="center">
  <img align="center" src="https://img.shields.io/github/repo-size/ViniciusLtda/Happy-App-Web?color=29B6D1&style=flat-square" />
  <img align="center" src="https://img.shields.io/github/license/Viniciusltda/Happy-App-Web?color=29B6D1&style=flat-square" />
  <img align="center" src="https://img.shields.io/github/last-commit/ViniciusLtda/Happy-App-Web?color=29B6D1&style=flat-square" />
  <img align="center" src="https://img.shields.io/github/stars/ViniciusLtda/Happy-App-Web?color=29B6D1&logo=GitHub&style=flat-square" />
</p>

<p align="center"><sub>Feito com :purple_heart: durante a NLW3 com a <a target="_blanck" href="https://github.com/Rocketseat">@Rocketseat</a> </sub></p>

---

# :page_with_curl: Tabela de Conteúdos
- [Demonstração do Site](https://github.com/Viniciusltda/Happy-App-Web#beginner-demonstra%C3%A7%C3%A3o-do-site)
- [Como Rodar na sua Máquina](https://github.com/Viniciusltda/Happy-App-Web#desktop_computer-como-rodar-na-sua-m%C3%A1quina)
  - [Dependências](https://github.com/Viniciusltda/Happy-App-Web#package-depend%C3%AAncias)
  - [Instalando o Node.js](https://github.com/Viniciusltda/Happy-App-Web#minidisc-instalando-o-nodejs)
  - [Clonando o repositório](https://github.com/Viniciusltda/Happy-App-Web#printer-clonando-o-reposit%C3%B3rio)
  - [Instalando a API](https://github.com/Viniciusltda/Happy-App-Web#cd-instalando-a-api)
  - [Rodando a aplicação](https://github.com/Viniciusltda/Happy-App-Web#dvd-rodando-a-aplica%C3%A7%C3%A3o)
- [Tecnologias Usadas](https://github.com/Viniciusltda/Happy-App-Web#atom_symbol-tecnologias-usadas)
- [Licença](https://github.com/Viniciusltda/Happy-App-Web#scroll-licença)

# :beginner: Demonstração do site

Esta versão do App está configurada para a cidade de Aparecida do Taboado-MS.

> (Como na minha cidade não existem orfanatos, todos os orfanatos no banco de dados foram feitos só para testar a aplicação. Basicamente foram feitos na "zueira". 
Mas o que importa é a aplicação né? :sweat_smile:)

Se quiser ver a versão Mobile do App vá para este [repositório](https://github.com/Viniciusltda/Happy-App-Mobile).

<p align="center">
<img width="460" height="350" src="https://imgur.com/o49qQ1Y.png" /> <img width="460" height="350" src="https://imgur.com/fzykxEW.png" />
</p>

# :desktop_computer: Como Rodar na sua Máquina

Este é um passo-a-passo de como você pode testar a aplicação na sua máquina.

## :package: Dependências

Para que a aplicação funcione corretamente você irá precisar ter o [Node.js](https://nodejs.org/en/) instalado na sua máquina.

## :minidisc: Instalando o Node.js

Após clicar no [Link](https://nodejs.org/en/) acima, você será redirecionado para a página principal do Node.js.
Baixe e instale a versão "LTS":

<img width="550" height="350" src="https://imgur.com/2wGoRoL.png" />

Se você já tem o Node instalado, tenha certeza que ele esteja pelo menos na versão 12.0 para cima.

## :printer: Clonando o Repositório

Após ter instalado o Node, você precisará clonar esse [repositório](https://github.com/Viniciusltda/Happy-App-Web) para a sua máquina.

Copie o seguinte:
```bash
# Escolha uma pasta de sua preferência e digite:
$ git clone https://github.com/Viniciusltda/Happy-App-Web.git 

# Os "$" são meramente ilustrativos, não os copie.
```

Após ter copiado, instale as dependências do projeto:
```bash
# Se não estiver na pasta, digite:
$ cd Happy-App-Web

# instale as dependências:
$ yarn install

# Ou, se você não possuir o pacote Yarn:
$ npm install

```

## :cd: Instalando a API

Para que você consiga utilizar a aplicação, você precisará  baixar a **API** do projeto.

Você pode baixá-la [Aqui](https://drive.google.com/drive/folders/1cCfjvNIUXp0mmLO3W5rk012zKFPmT4sR?usp=sharing).

Coloque a pasta em um local de sua preferência (Recomendado colocar no mesmo local onde está a pasta que você copiou o repositório)

Após isso instale as dependências da **API**:
```bash
# Entre na pasta:
$ cd happy-server

# instale as dependências:
$ yarn install

# Ou, se não possuir o pacote Yarn:
$ npm install
```

## :dvd: Rodando a Aplicação

Agora que você já tem tudo pronto, vamos inicializar a aplicação.

Primeiro, iniciaremos a **API**:

```bash
# Perceba que você precisará abrir dois terminais na sua Máquina para a aplicação funcionar corretamente.

# Primeiro, entre na pasta:
$ cd happy-server

# Inicie a API:
$ yarn dev

# Ou, se não possuir o pacote Yarn:
$ npm run dev
```

A **API** estará rodando em http://localhost:8080.

Agora, vamos iniciar a aplicação realmente:

```bash
# Em outro terminal, entre na pasta:
$ cd Happy-App-Web

# Inicie o App:
$ yarn start

# Ou, se não possuir o pacote Yarn:
$ npm start
```

A aplicação abrirá automáticamente em http://localhost:3000.

# :atom_symbol: Tecnologias Usadas

![Typescript](https://img.shields.io/twitter/url?label=TypeScript&logo=TypeScript&logoColor=%23007ACC&style=for-the-badge&url=https%3A%2F%2Fwww.typescriptlang.org%2F)
![NodeJs](https://img.shields.io/twitter/url?label=NodeJS&logo=Node.js&style=for-the-badge&url=https%3A%2F%2Fnodejs.org)
![React](https://img.shields.io/twitter/url?label=React&logo=React&style=for-the-badge&url=https%3A%2F%2Freactjs.org)

# :scroll: Licença

Esse repositório está sobre a Licença do [MIT](https://github.com/Viniciusltda/Happy-App-Web/blob/master/LICENSE).
