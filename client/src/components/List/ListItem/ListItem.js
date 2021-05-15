import { useMutation } from "@apollo/client";
import { DELETE_MUTATION } from "../../../graphql/mutations";
import { USERS_QUERY } from "../../../graphql/queries";

const ListItem = ({ user: { id, name } }) => {
  const [deleteUser, { loading: mutationLoading, error: mutationError }] =
    useMutation(DELETE_MUTATION);

  const handleDeleteUser = async () => {
    await deleteUser({
      variables: { id },
      update: (cache, { data: { deleteUser } }) => {
        cache.writeQuery({
          query: USERS_QUERY,
          data: {
            Users: [...deleteUser]
          }
        });
      }
    });
  };

  return (
    <div>
      {mutationLoading && <p> Loding...</p>}
      {mutationError && <p> {mutationError.message} </p>}
      <h2>
        {name} <button onClick={handleDeleteUser}>X</button>
      </h2>
    </div>
  );
};

export default ListItem;
