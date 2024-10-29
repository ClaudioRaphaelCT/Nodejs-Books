const express = require('express');
const bodyParser = require('body-parser');
const booksRouters = require('./src/routers/books.router');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuração do CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // Substitua pelo domínio do seu frontend
  }),
);

// Middleware
app.use(bodyParser.json());
app.use('/', booksRouters);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
