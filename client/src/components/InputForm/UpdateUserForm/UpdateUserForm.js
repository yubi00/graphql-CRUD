import React from "react";
import InputForm from "../InputForm";

const UpdateUserForm = ({ editing, setEditing }) => {
  return (
    <div>
      <h1>Update User</h1>
      <InputForm editing={editing} setEditing={setEditing} />
    </div>
  );
};

export default UpdateUserForm;
