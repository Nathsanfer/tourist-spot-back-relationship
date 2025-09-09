# 🌐 API de Pontos Turísticos do Brasil

Este projeto é uma API REST para gerenciar pontos turísticos do Brasil, separando-os por região e permitindo detalhar cada local com seções como Visão Geral, História, Pontos Turísticos e Melhor época para visitar.

A API foi construída com **Node.js, Express e Prisma**, utilizando SQLite como banco de dados (ou PostgreSQL, caso deseje).

---

## 🛠️ Instalação e Configuração

### 1. Clonar o projeto e abrir no VS Code

```bash
git clone https://github.com/Nathsanfer/tourist-spot-back-relationship.git
cd tourist-spot-back-relationship
code .
```

> O comando `code .` abre o projeto diretamente no **VS Code** na pasta atual.

### 2. Instalar as dependências

Dentro do VS Code, abra o terminal e execute:

```bash
npm install
```

### 3. Configurar o arquivo `.env`

O projeto já possui um arquivo `.env.example` com a estrutura necessária:

```
PORT=
DATABASE_URL=
JWT_SECRET=
```

Para rodar localmente com **SQLite**, crie um arquivo `.env` na raiz do projeto com:

```env
PORT=5000
DATABASE_URL="file:./touristSpots.db"
JWT_SECRET=algumasecret
```

### 4. Rodar a migração do Prisma

Rode este comando no terminal e lembre-se de executá-lo sempre que houver alterações no schema:

```bash
npx prisma migrate dev
```

Esse comando:

* Aplica as alterações no banco de dados
* Cria e executa a migração
* Atualiza o Prisma Client automaticamente

### 6. Rodar a API

```bash
npm run dev
```

A API estará disponível em `http://localhost:5000` (ou na porta que você definir no `.env`).

---
## 📄 Exemplo de Resposta da API

Ao consultar um ponto turístico específico (GET /touristSpots/:id), a API retorna algo como:

```bash
{
  "id": 1,
  "name": "Foz do Iguaçu",
  "region": "Sul",
  "rating": 4.5,
  "imageUrl": "https://exemplo.com/foz.jpg",
  "sections": [
    {
      "title": "Visão Geral",
      "text": "Foz do Iguaçu é uma cidade incrível localizada no Paraná, famosa por suas cataratas e pela diversidade cultural...",
      "imageUrl": "https://exemplo.com/foz-geral.jpg"
    },
    {
      "title": "O que fazer",
      "text": "Você pode visitar as Cataratas do Iguaçu, o Parque Nacional do Iguaçu, a Usina de Itaipu e o Parque das Aves...",
      "imageUrl": "https://exemplo.com/foz-cataratas.jpg"
    },
    {
      "title": "História",
      "text": "Foz do Iguaçu se desenvolveu a partir do cruzamento dos rios Iguaçu e Paraná, sendo estratégica para a economia e o turismo...",
      "imageUrl": "https://exemplo.com/foz-historia.jpg"
    },
    {
      "title": "Melhor momento para ir",
      "text": "A melhor época para visitar é entre março e setembro, quando a cidade recebe menos chuvas e é possível aproveitar as trilhas e passeios ao ar livre...",
      "imageUrl": "https://exemplo.com/foz-tempo.jpg"
    }
  ]
}
```