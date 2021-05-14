const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/typedefs");
const { resolvers } = require("./resolvers/resolvers");

const express = require("express");
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on ${port}`));
