import styled from "styled-components";

const Cell = styled.div`
  padding: 10px 20px;
  border: ${({noBorder}) => noBorder ? "unset" : "1px solid #ebebeb" };
`;

export default Cell;