const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
  }

  #Queries
  type Query {
    Users: [User!]!
    User(id: String!): User!
  }

  #Inputs
  input updateUserInput {
    name: String
    email: String
  }

  #Mutations
  type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: String!, data: updateUserInput!): User!
    deleteUser(id: String!): [User]
  }
`;

module.exports = {
  typeDefs
};
