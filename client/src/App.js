import { useState } from "react";
import "./App.css";
import AddUserForm from "./components/InputForm/AddUserForm/AddUserForm";
import UpdateUserForm from "./components/InputForm/UpdateUserForm/UpdateUserForm";
import List from "./components/List/List";

function App() {
  const [editing, setEditing] = useState(null);

  return (
    <div className='App'>
      {editing ? (
        <UpdateUserForm editing={editing} setEditing={setEditing} />
      ) : (
        <AddUserForm />
      )}
      <List setEditing={setEditing} />
    </div>
  );
}

export default App;
