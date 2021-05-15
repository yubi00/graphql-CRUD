import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const ADD_MUTATION = gql`
  mutation addUserMutation($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const InputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [addUserMutation] = useMutation(ADD_MUTATION, {
    variables: {
      name,
      email
    }
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await addUserMutation();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type='text'
        placeholder='name..'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='email..'
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default InputForm;
