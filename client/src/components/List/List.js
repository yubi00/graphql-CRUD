import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../../graphql/queries";
import ListItem from "./ListItem/ListItem";
import { Cards } from "./List.styles";
import { Loader } from "../../elements/Loader.styles";

const List = ({ setEditing }) => {
  const { data, loading, error } = useQuery(USERS_QUERY);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data !== undefined) {
      setUsers(data.Users);
    }
  }, [data]);

  if (loading) return <Loader>Loading...</Loader>;
  if (error) return <p> {error.message} </p>;

  return (
    <Cards>
      {users.length > 0 &&
        users.map((user) => (
          <ListItem key={user.id} user={user} setEditing={setEditing} />
        ))}
    </Cards>
  );
};

export default List;
