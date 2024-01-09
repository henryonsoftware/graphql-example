const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// Load schema and resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(
      `Server is running on http://localhost:4000${server.graphqlPath}`
    );
  });
}

startApolloServer(typeDefs, resolvers);
