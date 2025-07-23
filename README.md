# Let me Ask - Plataforma de Perguntas e Respostas com IA

Uma aplicação web full-stack que permite aos usuários criar salas para sessões de perguntas e respostas alimentadas por IA. Os usuários podem fazer perguntas com base em audios enviados previamente. Um usuário pode enviar em áudio falando sobre algum assunto e com base nesses audios a IA consegue responder as perguntas do usuário.

![Let me Aks image](./public/let-me-ask.png)

## Funcionalidades

- Criar salas de P&R com nome e descrição
- Fazer perguntas via entrada de texto
- Respostas geradas por IA usando a API Gemini do Google
- Atualizações em tempo real de perguntas/respostas
- Design responsivo para mobile

## Stack Tecnológica

### Frontend (web)

- React
- TypeScript
- Vite
- TailwindCSS
- Componentes Shadcn/ui
- React Query
- React Router
- React Hook Form
- Validação com Zod

### Backend (server)

- Node.js
- TypeScript
- Fastify
- DrizzleORM
- PostgreSQL com pgvector
- Google Gemini AI API

## Como Começar

### Pré-requisitos

- Node.js 18+
- PostgreSQL com extensão pgvector
- Chave de API do Google Gemini

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/joserochadev/let-me-ask.git
cd let-me-ask
```

2. Instale as dependências:

```bash
# Instale as dependências do backend
cd server
npm install

# Instale as dependências do frontend
cd ../web
npm install
```

3. Configure as variáveis de ambiente:

Backend (.env):

```env
PORT=3333
FRONTEND_URL=http://localhost:5173
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
GEMINI_API_KEY=sua_chave_api_gemini_aqui
```

Frontend (.env):

```env
VITE_BACKEND_URL=http://localhost:3333
```

4. Inicialize o banco de dados:

```bash
cd server
npm run db:init
npm run db:migrate
```

### Executando a Aplicação

1. Inicie o servidor backend:

```bash
cd server
npm run dev
```

2. Inicie o servidor de desenvolvimento frontend:

```bash
cd web
npm run dev
```

A aplicação estará rodando em:

- Frontend: http://localhost:5173
- Backend: http://localhost:3333

## Detalhes das Funcionalidades

### Salas

- Criar salas para sessões de P&R
- Visualizar lista de salas existentes
- Ver contagem de perguntas por sala

### Perguntas

- Fazer perguntas através de entrada de texto
- Visualizar perguntas e respostas em tempo real
- Perguntas são armazenadas com embeddings para busca semântica

### Integração com IA

- Usa a API Gemini do Google para:
  - Transcrição de áudio
  - Geração de embeddings de texto
  - Geração de respostas baseadas no contexto
