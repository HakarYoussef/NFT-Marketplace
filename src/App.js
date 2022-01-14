import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import Explorer from './components/Explorer';
import { Routes, Route } from 'react-router-dom';
import Auctions from './components/Auctions';
import Drops from './components/Drops';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Navbar from './components/Navbar';
import ArtDetail from './components/ArtDetail';
import UserPageWrapper from './components/UserPageWrapper';
import NotFound from './components/NotFound';
import IndividualMarketWrapper from './components/IndividualMarketWrapper';
import { lightTheme, darkTheme } from './components/darkmode/themes';
import { GlobalStyles } from './components/styles/globalStyles';
import useDarkMode from './components/darkmode/useDarkMode';
import Toggle from './components/darkmode/Toggle';
import MyNFTs from './components/MyNFTs';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <Navbar themes={<Toggle theme={theme} toggleTheme={toggleTheme} />} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="explorer" element={<Explorer />} />

        <Route path="auctions" element={<Auctions />} />

        <Route path="drops" element={<Drops />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/mynfts" element={<MyNFTs />} />

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
