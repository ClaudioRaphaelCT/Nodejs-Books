const { listBooks } = require('../database/books.db');

const getAllBooks = (req, res) => {
  res.json(listBooks);
};

const getBookBox = (req, res) => {
  const livroPorBox = listBooks.filter(e => e.box == req.params.box);
  res.json(livroPorBox);
};

const getBookbyName = (req, res) => {
  const { name } = req.query;
  if (name) {
    const filteredBooks = listBooks.filter(livro => livro.name.toLowerCase().includes(name.toLowerCase()));

    if (filteredBooks.length === 0) {
      return res.status(404).json({ message: 'Não existem livros com esse nome' });
    }
    return res.json(filteredBooks);
  }

  // Se 'name' não for fornecido, retorna todos os livros
  res.json(listBooks);
};

module.exports = { getAllBooks, getBookBox, getBookbyName };
