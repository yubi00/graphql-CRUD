import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../../graphql/queries";
import ListItem from "./ListItem/ListItem";

const List = () => {
  const { data, loading, error } = useQuery(USERS_QUERY);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data !== undefined) {
      setUsers(data.Users);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p> {error.message} </p>;

  return (
    <div>
      <h1>Users List</h1>
      {users.length > 0 &&
        users.map((user) => <ListItem key={user.id} user={user} />)}
    </div>
  );
};

export default List;
