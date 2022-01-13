import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/Global';
import Home from './components/Home';
import Explorer from './components/Explorer';
import { Routes, Route } from 'react-router-dom';
import Auctions from './components/Auctions';
import Drops from './components/Drops';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import ArtDetail from './components/ArtDetail';
import UserPageWrapper from './components/UserPageWrapper';
import NotFound from './components/NotFound';
import IndividualMarketWrapper from './components/IndividualMarketWrapper';

const theme = {
  colors: {
    primary: '#00b7be',
    header: '#fff',
    body: '#F3F3F4',
    footer: '#bbb',
    input: '#F1F1F2',
    text: '#5a6868',
    skeleton: '#e2e5e7',
  },
  fontSize: '1rem',
  fontSizeSmall: '14px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="explorer" element={<Explorer />} />

        <Route path="auctions" element={<Auctions />} />

        <Route path="drops" element={<Drops />} />

        <Route path="login" element={<LoginPage />} />
        <Route path=":id" element={<ArtDetail />} />
        <Route path="/user/:name" element={<UserPageWrapper />} />
        <Route
          path="/:name/marketplace"
          element={<IndividualMarketWrapper />}
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
