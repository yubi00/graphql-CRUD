import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        height: 100vh;
    }

    body {
        background-color: teal;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
    }
`;

export const Wrapper = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 800;
  }
`;
