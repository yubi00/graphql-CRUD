import { useMutation } from "@apollo/client";
import { DELETE_MUTATION } from "../../../graphql/mutations";
import { USERS_QUERY } from "../../../graphql/queries";
import { Card, CardLinks, CardSubtitle, CardTitle } from "../List.styles";
import { Button } from "../../../elements/Button.styles";

const ListItem = ({ user, setEditing }) => {
  const [deleteUser, { loading: mutationLoading, error: mutationError }] =
    useMutation(DELETE_MUTATION);

  const handleDeleteUser = async () => {
    await deleteUser({
      variables: { id: user.id },
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
    <Card>
      {mutationLoading && <p> Loding...</p>}
      {mutationError && <p> {mutationError.message} </p>}
      <CardTitle>{user.name} </CardTitle>
      <CardSubtitle>{user.email}</CardSubtitle>
      <CardLinks>
        <Button primary onClick={() => setEditing(user)}>
          Edit
        </Button>
        <Button onClick={handleDeleteUser}>Delete</Button>
      </CardLinks>
    </Card>
  );
};

export default ListItem;
