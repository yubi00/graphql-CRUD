import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  background-color: #ccc;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 1em;
`;

export const CardTitle = styled.h2`
  font-weight: 800;
`;

export const CardSubtitle = styled.h4`
  font-weight: 600;
  color: #777;
`;

export const CardLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25em;
`;
