import React from 'react';

import Routes from './routes'
import GlobalStyles from './styles/global'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
      <Footer />
    </>
  );
}

export default App;
