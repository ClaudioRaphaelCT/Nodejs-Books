const { listBooks } = require('../database/books.db');

const getAllBooks = (req, res) => {
  res.json(listBooks);
};

module.exports = { getAllBooks };
