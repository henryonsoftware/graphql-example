const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const mongoose = require("mongoose");

// Load schema and resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// Load DB methods
const mongoDBMethods = require("./data/db");

const connectDB = async () => {
  try {
    const username = "henryonsoftware";
    const password = encodeURIComponent("Hoilamchi@123");
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@learn-graphql.9ke67dl.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

async function startApolloServer(typeDefs, resolvers) {
  await connectDB();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDBMethods }),
  });
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
