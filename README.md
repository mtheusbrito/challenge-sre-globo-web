# Desafio SRE Globo - Web 

Este projeto é um desafio de SRE para a Globo, focado no desenvolvimento de uma aplicação web.

## Tecnologias Utilizadas
- **React** (Biblioteca para construção de interfaces de usuário dinâmicas.)
- **Vite** (Ferramenta de build para otimizar o desenvolvimento e a compilação)
- **Typescript** (Superset de JavaScript que adiciona tipagem estática ao código)
- **React Hook Form** (Biblioteca para criação e gerenciamento de formulários)
- **TanStack Query*** (Biblioteca para o gerenciamento de dados e requisições assíncronas)
- **TanStack Router** (Biblioteca para navegação e roteamento entre páginas)
- **Tailwind CSS** (Framework de CSS utilitário para design rápido e responsivo)
---

## Integração com a API
Esta aplicação front-end está integrada com a API localizada no repositório [challenge-sre-globo-api](https://github.com/mtheusbrito/challenge-sre-globo-api.git), e utiliza seus endpoints para fornecer dados dinâmicos para a interface de usuário.

## Como Rodar a Aplicação

### Opção 1: Executando via Docker (Recomendado)

### **Pré-requisitos**

- [Docker](https://www.docker.com/) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado
- [Node.Js](https://nodejs.org/en) instalado

### **Passos**
1. Clone o repositório:
   ```sh
   git clone git@github.com:mtheusbrito/challenge-sre-globo-web.git
   cd challenge-sre-globo-web
   ```

2. Crie um arquivo `.env` com a seguinte variável:
   ```env
   VITE_API_URL=http://localhost:3001/api/
   ```

3. Suba os containers:
   ```sh
   docker-compose up -d
   ```

4. Verifique se os containers estão rodando corretamente:
   ```sh
   docker ps
   ```

5. Acesse a aplicação no navegador:
   ```sh
   http://localhost:4173
   ```

6. Página para poder visualizar o resultado final (Somente usuários com perfil ADMIN, podem acessar):
   ```sh
   http://localhost:4173/483cabc0-e942-419a-92a8-6a532c38a14b/result
   ```

7. Para parar os containers:
   ```sh
   docker-compose down
   ```
---

### Opção 2: Executando Localmente (Sem Docker)

### **Pré-requisitos**
- [Node.Js](https://nodejs.org/en) instalado

### **Passos**
1. Clone o repositório:
   ```sh
   git clone git@github.com:mtheusbrito/challenge-sre-globo-web.git
   cd challenge-sre-globo-web
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

2. Crie um arquivo `.env` com a seguinte variável:
   ```env
   VITE_API_URL=http://localhost:3001/api/
   ```

5. Inicie a aplicação:
   ```sh
   npm run dev
   ```

6. Acesse a aplicação no navegador:
   ```sh
   http://localhost:5173
   ```

6. Página para poder visualizar o resultado final (Somente usuários com perfil ADMIN, podem acessar):
   ```sh
   http://localhost:5173/483cabc0-e942-419a-92a8-6a532c38a14b/result
   ```