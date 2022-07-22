import './styles/fonts.scss';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';
import theme from './styles/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
