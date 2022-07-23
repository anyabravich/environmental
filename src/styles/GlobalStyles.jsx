import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  &::after,
  &::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    @media (max-width: 576px) {
      font-size: 12px;
    }
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  button {
    outline: none;
    border: none;
  }
`;

export default GlobalStyle;
