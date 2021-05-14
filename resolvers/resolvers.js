const { mutationResolvers } = require("./mutationResolvers");
const { queryResolvers } = require("./queryResolvers");

const resolvers = {
  Query: queryResolvers,

  Mutation: mutationResolvers
};

module.exports = {
  resolvers
};
