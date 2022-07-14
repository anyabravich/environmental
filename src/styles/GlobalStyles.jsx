import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: 'Inter', sans-serif;
  }
  body {
    font-size: 16px;
    background: #F9F9F9;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    font-family: 'Inter', sans-serif;
    text-decoration: none;
  }
  button {
    border: none;
    outline: none;
    background: none;
  }
`;
export default GlobalStyle;
