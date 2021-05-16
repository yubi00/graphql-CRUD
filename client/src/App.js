import { Fragment, useState } from "react";
import AddUserForm from "./components/InputForm/AddUserForm/AddUserForm";
import UpdateUserForm from "./components/InputForm/UpdateUserForm/UpdateUserForm";
import List from "./components/List/List";
import { GlobalStyle, Wrapper } from "./App.styles";

function App() {
  const [editing, setEditing] = useState(null);

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        {editing ? (
          <UpdateUserForm editing={editing} setEditing={setEditing} />
        ) : (
          <AddUserForm />
        )}
        <List setEditing={setEditing} />
      </Wrapper>
    </Fragment>
  );
}

export default App;
