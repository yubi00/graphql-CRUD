import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_MUTATION } from "../../graphql/mutations";
import { USERS_QUERY } from "../../graphql/queries";

const InputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [addUserMutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(ADD_MUTATION);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await addUserMutation({
      variables: {
        name,
        email
      },
      update: (cache, { data: { createUser } }) => {
        const data = cache.readQuery({ query: USERS_QUERY });

        cache.writeQuery({ query: USERS_QUERY }, [...data.Users, createUser]);
      }
    });

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {mutationLoading && <p> Loading... </p>}
      {mutationError && <p> Error... </p>}

      <input
        type='text'
        value={name}
        placeholder='name..'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        value={email}
        placeholder='email..'
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default InputForm;
