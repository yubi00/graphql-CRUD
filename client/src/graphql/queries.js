import { gql } from "@apollo/client";

const USERS_QUERY = gql`
  query usersQuery {
    Users {
      id
      name
      email
    }
  }
`;

export { USERS_QUERY };
