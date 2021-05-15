import { useMutation, gql } from "@apollo/client";

const DELETE_MUTATION = gql`
  mutation deleteMutation($id: String!) {
    deleteUser(id: $id) {
      id
      name
      email
    }
  }
`;

const ListItem = ({ user: { id, name } }) => {
  const [deleteUser] = useMutation(DELETE_MUTATION, {
    variables: { id }
  });

  return (
    <div>
      <h2>
        {name} <button onClick={() => deleteUser()}>X</button>
      </h2>
    </div>
  );
};

export default ListItem;
