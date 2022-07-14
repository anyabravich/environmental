import './styles/fonts.scss';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles.jsx';
import Header from './components/Header';

const theme = {
  color: {
    white: '#ffffff',
  },
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
