const express = require('express');
const { getAllBooks } = require('../controllers/books.controller');
const router = express.Router();

// ROTAS
router.get('/livros', getAllBooks);

module.exports = router;
