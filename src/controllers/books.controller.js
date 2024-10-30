const { listBooks } = require('../database/books.db');

const getAllBooks = (req, res) => {
  res.json(listBooks);
};

const getBookBox = (req, res) => {
  const livroPorBox = listBooks.filter(e => e.box == req.params.box);
  res.json(livroPorBox);
};

module.exports = { getAllBooks, getBookBox };
