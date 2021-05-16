import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${({ primary }) => (primary ? "#5F9EA0" : "teal")};
  color: #fff;
  font-weight: 800;
  font-size: 1rem;

  &:hover {
    background-color: ${({ primary }) => (primary ? "teal" : "#5F9EA0")};
  }
`;
