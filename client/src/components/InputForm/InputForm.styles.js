import styled from "styled-components";

export const Form = styled.form`
  border: 1px solid #ccc;
  padding: 2rem;
  margin: 1rem 0;
  display: flex;
  gap: 1em;
  background-color: #fff;
  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 1rem;
  outline: none;
  border: none;
  background-color: #f0f8ff;
  color: #2f4f4f;
  font-weight: 600;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;
