const express = require('express');
const { getAllBooks, getBookBox } = require('../controllers/books.controller');
const router = express.Router();

// ROTAS
router.get('/livros', getAllBooks);
router.get('/livros/box/:box', getBookBox);

module.exports = router;
