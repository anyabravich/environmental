import './styles/fonts.scss';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';
import theme from './styles/theme';
import Nav from './components/Nav';
import About from './pages/About';
import Project from './pages/Project';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
