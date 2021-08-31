import React from "react";
import styled from "styled-components";
import { gridPattern } from "../styles/sharedCss";
import Cell from "../styles/Cell";
import User from "./User"

const TableWrapper = styled.div`
  background-color: white;
  font-size: 14px;
`

const UsersGrid = styled.div`
  ${gridPattern}
`;

const TableTitles = styled.div`
  ${gridPattern}
  box-shadow: 0px 4px 6px -4px rgba(0,0,0,0.4);
`;

const UserTable = ({ users }) => {
  return (
    <TableWrapper>
      <TableTitles>
        <Cell noBorder>
          <span>
            <b>Nombre</b>
          </span>
        </Cell>
        <Cell noBorder>
          <span>
            <b>Descripción</b>
          </span>
        </Cell>
      </TableTitles>

      <UsersGrid>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </UsersGrid>
    </TableWrapper>
  );
};

export default UserTable;
