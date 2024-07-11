import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  html {
    font-size: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem; /* 16px */
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Roboto Slab", serif;
    font-size: 1.6rem; /* 16px */
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;
