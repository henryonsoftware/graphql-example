const resolvers = {
  // QUERY RESOLVERS
  Query: {
    books: async (parent, args, context) =>
      await context.mongoDBMethods.getAllBooks(),
    book: async (parent, args, context) =>
      await context.mongoDBMethods.getBookById(args.id),
    authors: async (parent, args, context) =>
      await context.mongoDBMethods.getAllAuthors(),
    author: async (parent, args, context) =>
      await context.mongoDBMethods.getAuthorById(args.id),
  },
  Book: {
    author: async (parent, args, context) =>
      await context.mongoDBMethods.getAuthorById(parent.authorId),
  },
  Author: {
    books: async (parent, args, context) =>
      await context.mongoDBMethods.getBooksByAuthorId(parent.id),
  },

  // MUTATION RESOLVERS
  Mutation: {
    createAuthor: async (parent, args, context) =>
      await context.mongoDBMethods.createAuthor(args),
    createBook: async (parent, args, context) =>
      await context.mongoDBMethods.createBook(args),
  },
};

module.exports = resolvers;
