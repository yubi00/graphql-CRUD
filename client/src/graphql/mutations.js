import { gql } from "@apollo/client";

const ADD_MUTATION = gql`
  mutation addUserMutation($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const DELETE_MUTATION = gql`
  mutation deleteMutation($id: String!) {
    deleteUser(id: $id) {
      id
      name
      email
    }
  }
`;

export { ADD_MUTATION, DELETE_MUTATION };
