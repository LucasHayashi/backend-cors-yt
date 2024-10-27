# Backend para Consumo de APIs

Este projeto serve como um exemplo de backend para consumir APIs externas, lidando com questões de CORS (Cross-Origin Resource Sharing) e gerenciamento de requisições HTTP.

[Link da Aula no YouTube](https://youtu.be/UN-oJMxQdvk)

## 🚀 Tecnologias Utilizadas

- **Node.js** - Plataforma de desenvolvimento
- **Express** - Framework para criação de APIs
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **Axios** - Cliente HTTP para consumir APIs

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 20.x ou superior)
- NPM
- [Git](https://git-scm.com/)

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/LucasHayashi/backend-cors-yt
```

2. Acesse o diretório do projeto:

```bash
cd backend-cors-yt
```

3. Instale as dependências:

```bash
npm install
```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Copie o conteúdo do arquivo `.env.example`
   - Preencha as variáveis necessárias

Exemplo de `.env`:

```env
API_URL=site.com/v1
API_KEY=sua_chave_api
```

## 🚀 Executando o Projeto

1. Inicie o servidor:

```bash
npm run devStart
```

2. O servidor estará rodando em `http://localhost:3000` (ou na porta definida no .env)

## 📌 Endpoints

### GET /weather

Retorna dados meteorológicos da API configurada.

```bash
GET http://localhost:3000/weather
```

## 🛠️ Personalização

Adaptar a rota `/weather` para suas necessidades:

1. Abra o arquivo da rota correspondente
2. Modifique os parâmetros da requisição
3. Ajuste o tratamento da resposta conforme necessário
