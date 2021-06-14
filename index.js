const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/typedefs");
const { resolvers } = require("./resolvers/resolvers");
const path = require("path");
const express = require("express");
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

//serve static assets
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on ${port}`));
