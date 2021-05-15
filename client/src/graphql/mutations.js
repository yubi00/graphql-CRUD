import { gql } from "@apollo/client";

const ADD_MUTATION = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const DELETE_MUTATION = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id) {
      id
      name
      email
    }
  }
`;

export { ADD_MUTATION, DELETE_MUTATION };
