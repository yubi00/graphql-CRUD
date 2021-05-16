import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Button } from "../../elements/Button.styles";
import { ADD_MUTATION, UPDATE_MUTATION } from "../../graphql/mutations";
import { USERS_QUERY } from "../../graphql/queries";
import { Form, Input } from "./InputForm.styles";

const InputForm = ({ editing, setEditing }) => {
  const [name, setName] = useState(editing ? editing.name : "");
  const [email, setEmail] = useState(editing ? editing.email : "");

  const [createUser, { loading: mutationLoading, error: mutationError }] =
    useMutation(ADD_MUTATION);
  const [updateUser, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_MUTATION);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      await updateUser({
        variables: {
          id: editing.id,
          data: {
            name,
            email
          }
        }
      });

      //after update finish
      setEditing(null);
    } else {
      await createUser({
        variables: {
          name,
          email
        },
        update: (cache, { data: { createUser } }) => {
          const existingUsers = cache.readQuery({ query: USERS_QUERY });

          if (existingUsers && createUser) {
            cache.writeQuery({
              query: USERS_QUERY,
              data: {
                Users: [...existingUsers.Users, createUser]
              }
            });
          }
        }
      });

      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        {mutationError && <p> Create Error... </p>}
        {updateError && <p> Update Error.. </p>}

        <Input
          type='text'
          value={name}
          placeholder='name..'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='text'
          value={email}
          placeholder='email..'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button primary>
          {mutationLoading
            ? "Adding..."
            : updateLoading
            ? "Updating..."
            : "Submit"}
        </Button>
        {editing && <Button onClick={() => setEditing(null)}>Cancel</Button>}
      </Form>
    </div>
  );
};

export default InputForm;
