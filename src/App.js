import { useEffect } from "react";
import UserTable from "./components/UserTable";
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "./redux/features/contacts/contactsSlice";
import styled from "styled-components";
import { gridPattern } from "./styles/sharedCss";

const AppWrapper = styled.main`
  padding: 30px 50px;
`;

const TableControls = styled.div`
  ${gridPattern}
  margin: 10px 0;
`;

function App() {
  const contacts = useSelector((state) => state.contactList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <AppWrapper>
      <div>
        <h1>Test Beetrack</h1>
        <TableControls>
          <input placeholder="Buscar contacto..."></input>
          <button>a</button>
        </TableControls>
        <UserTable users={contacts}></UserTable>
      </div>
    </AppWrapper>
  );
}

export default App;
