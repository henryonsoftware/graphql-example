const Book = require("../models/Book");
const Author = require("../models/Author");

const mongoDBMethods = {
  getAllBooks: async () => await Book.find(),
  getAllAuthors: async () => await Author.find(),
  createAuthor: async (args) => {
    const { name, age } = args;
    const newAuthor = new Author({ name, age });
    return await newAuthor.save();
  },
  createBook: async (args) => {
    const { name, genre, authorId } = args;
    const newBook = new Book({ name, genre, authorId });
    return await newBook.save();
  },
  getBookById: async (id) => Book.findById(id),
  getBooksByAuthorId: async (id) => Book.find({ authorId: id }),
  getAuthorById: async (id) => Author.findById(id),
};

module.exports = mongoDBMethods;
