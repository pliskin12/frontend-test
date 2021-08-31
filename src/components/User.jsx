import React from "react";
import styled from "styled-components";
import Cell from "../styles/Cell"

const UserPhoto = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
`;

const UserData = styled.div`
  display: flex;
  align-items: center;

  span  {
    margin-left: 10px;
  }
`;

export default function User({ user }) {
  return (
    <>
      <Cell>
        <UserData>
          <UserPhoto width={60} height={60} src={user.photo} alt="avatar" />
          <span>
            <b>{user.name}</b>
          </span>
        </UserData>
      </Cell>
      <Cell>
        <span>{user.description}</span>
      </Cell>
    </>
  );
}
