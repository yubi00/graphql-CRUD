import { gql, useQuery } from "@apollo/client";
import ListItem from "./ListItem/ListItem";

const USERS_QUERY = gql`
  query usersQuery {
    Users {
      id
      name
      email
    }
  }
`;

const List = () => {
  const { data, loading, error } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p> {error.message} </p>;

  return (
    <div>
      <h1>Users List</h1>
      {data.Users.map((user) => (
        <ListItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default List;
