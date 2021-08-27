import { useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList";

import { useSelector, useDispatch } from "react-redux";
import { getAll } from "./redux/features/contacts/contactsSlice";

function App() {
  const contacts = useSelector((state) => state.contactList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div className="App">
      <UserList users={contacts}></UserList>
    </div>
  );
}

export default App;
