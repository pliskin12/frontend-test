import React from "react";
import styled from "styled-components";
import User from "./User";

const UsersGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
`

const UserList = ({ users }) => {
  return (
    <UsersGrid>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </UsersGrid>
  );
};

export default UserList;
