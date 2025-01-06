import "./styles/fonts.scss";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles.jsx";
import Home from "./pages/Home";
import theme from "./styles/theme";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
