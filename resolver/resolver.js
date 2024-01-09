const { booksData, authorsData } = require("../data/static");

const resolvers = {
  // QUERY RESOLVERS
  Query: {
    books: () => booksData,
    book: (parent, args) =>
      booksData.find((book) => book.id.toString() === args.id),
    authors: () => authorsData,
    author: (parent, args) =>
      authorsData.find((author) => author.id.toString() === args.id),
  },
  Book: {
    author: (parent, args) => {
      // parent here is a book object already found by the book resolver
      return authorsData.find((author) => author.id == parent.authorId);
    },
  },
  Author: {
    books: (parent, args) => {
      // parent here is an author object already found by the author resolver
      return booksData.filter((book) => book.authorId == parent.id);
    },
  },

  // MUTATION RESOLVERS
  Mutation: {
    createAuthor: (parent, args) => {
      const { id, name, age } = args;
      const newAuthor = { id, name, age };
      authorsData.push(newAuthor);
      return newAuthor;
    },
    createBook: (parent, args) => {
      const { id, name, genre, authorId } = args;
      const newBook = { id, name, genre, authorId };
      booksData.push(newBook);
      return newBook;
    },
  },
};

module.exports = resolvers;
