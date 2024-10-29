const express = require('express');
const bodyParser = require('body-parser');
const booksRouters = require('./src/routers/books.router');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/', booksRouters);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
