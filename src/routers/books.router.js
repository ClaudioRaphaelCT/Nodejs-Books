const express = require('express');
const { getAllBooks, getBookBox, getBookbyName } = require('../controllers/books.controller');
const router = express.Router();

// ROTAS
router.get('/livros', getAllBooks);
router.get('/livros/box/:box', getBookBox);
router.get('/livros/nome', getBookbyName);

module.exports = router;
